const MAX_FILE_SIZE = 5 * 1024 * 1024;
const ALLOWED_FILE_TYPES = new Set(["application/pdf", "image/jpeg", "image/png"]);

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store, max-age=0",
      "x-content-type-options": "nosniff",
    },
  });
}

function clean(value, maxLength) {
  return String(value ?? "").trim().slice(0, maxLength);
}

function ageFromDate(dateString) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(dateString)) return null;
  const [year, month, day] = dateString.split("-").map(Number);
  const birth = new Date(Date.UTC(year, month - 1, day));
  if (
    birth.getUTCFullYear() !== year ||
    birth.getUTCMonth() !== month - 1 ||
    birth.getUTCDate() !== day
  ) return null;

  const now = new Date();
  let age = now.getUTCFullYear() - year;
  const monthDiff = now.getUTCMonth() - (month - 1);
  if (monthDiff < 0 || (monthDiff === 0 && now.getUTCDate() < day)) age -= 1;
  return age;
}

function validPhone(phone) {
  const digits = phone.replace(/\D/g, "");
  return digits.length >= 7 && digits.length <= 18;
}

function validEmail(email) {
  return !email || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function documentExtension(type) {
  if (type === "application/pdf") return "pdf";
  if (type === "image/jpeg") return "jpg";
  return "png";
}

export async function onRequestPost({ request, env }) {
  if (!env.AYU_DB) return json({ message: "Membership applications are temporarily unavailable. Please try again later." }, 503);

  let form;
  try {
    form = await request.formData();
  } catch {
    return json({ message: "The application could not be read. Please review the form and try again." }, 400);
  }

  const honeypot = clean(form.get("website"), 200);
  if (honeypot) {
    const silentReference = `AYU-${crypto.randomUUID().replaceAll("-", "").slice(0, 12).toUpperCase()}`;
    return json({ reference: silentReference });
  }

  const fullName = clean(form.get("fullName"), 120);
  const dateOfBirth = clean(form.get("dateOfBirth"), 10);
  const membershipBasis = clean(form.get("membershipBasis"), 20);
  const jubaArea = clean(form.get("jubaArea"), 120);
  const phone = clean(form.get("phone"), 30);
  const email = clean(form.get("email"), 160).toLowerCase();
  const declarationAccepted = clean(form.get("declarationAccepted"), 3) === "yes";
  const privacyAccepted = clean(form.get("privacyAccepted"), 3) === "yes";
  const supportingDocument = form.get("supportingDocument");

  if (fullName.length < 3) return json({ message: "Enter your full name." }, 400);
  const age = ageFromDate(dateOfBirth);
  if (age === null) return json({ message: "Enter a valid date of birth." }, 400);
  if (age < 18 || age > 45) return json({ message: "Absolute Membership is constitutionally limited to ages 18 to 45." }, 400);
  if (!new Set(["origin", "resident"]).has(membershipBasis)) return json({ message: "Select a valid membership basis." }, 400);
  if (jubaArea.length < 2) return json({ message: "Enter your current area of residence in Juba." }, 400);
  if (!validPhone(phone)) return json({ message: "Enter a valid phone number." }, 400);
  if (!validEmail(email)) return json({ message: "Enter a valid email address or leave the email field blank." }, 400);
  if (!declarationAccepted || !privacyAccepted) return json({ message: "The required declaration and privacy consent must be accepted." }, 400);

  let documentKey = null;
  let documentName = null;
  let documentType = null;

  if (supportingDocument instanceof File && supportingDocument.size > 0) {
    if (!ALLOWED_FILE_TYPES.has(supportingDocument.type)) return json({ message: "Supporting documents must be PDF, JPG or PNG files." }, 400);
    if (supportingDocument.size > MAX_FILE_SIZE) return json({ message: "Supporting documents must not exceed 5 MB." }, 400);
    if (!env.AYU_MEMBERSHIP_FILES) return json({ message: "Document upload is temporarily unavailable. Please submit without an attachment or try again later." }, 503);

    const extension = documentExtension(supportingDocument.type);
    documentKey = `membership/${new Date().getUTCFullYear()}/${crypto.randomUUID()}.${extension}`;
    documentName = clean(supportingDocument.name, 180);
    documentType = supportingDocument.type;

    await env.AYU_MEMBERSHIP_FILES.put(documentKey, await supportingDocument.arrayBuffer(), {
      httpMetadata: { contentType: supportingDocument.type },
      customMetadata: { purpose: "membership-application" },
    });
  }

  const id = crypto.randomUUID();
  const reference = `AYU-${crypto.randomUUID().replaceAll("-", "").slice(0, 12).toUpperCase()}`;
  const now = new Date().toISOString();

  try {
    await env.AYU_DB.prepare(`
      INSERT INTO membership_applications (
        id, application_ref, full_name, date_of_birth, membership_basis,
        juba_area, phone, email, supporting_document_key,
        supporting_document_name, supporting_document_type, status,
        consent_at, created_at, updated_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'received', ?, ?, ?)
    `).bind(
      id,
      reference,
      fullName,
      dateOfBirth,
      membershipBasis,
      jubaArea,
      phone,
      email || null,
      documentKey,
      documentName,
      documentType,
      now,
      now,
      now,
    ).run();
  } catch {
    if (documentKey && env.AYU_MEMBERSHIP_FILES) await env.AYU_MEMBERSHIP_FILES.delete(documentKey).catch(() => undefined);
    return json({ message: "Your application could not be submitted. Please try again." }, 500);
  }

  return json({ reference }, 201);
}

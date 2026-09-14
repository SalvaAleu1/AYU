import { clean, json, requireMember, sameOrigin } from "../../_lib/auth.js";

function validEmail(email) {
  return !email || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validPhone(phone) {
  const digits = phone.replace(/\D/g, "");
  return !phone || (digits.length >= 7 && digits.length <= 18);
}

export async function onRequestGet({ request, env }) {
  const member = await requireMember(env, request);
  if (!member) return json({ message: "Sign in to continue." }, 401);

  return json({
    member: {
      memberNumber: member.member_number,
      fullName: member.full_name,
      membershipType: member.membership_type,
      membershipStatus: member.membership_status,
      termLabel: member.term_label,
      joinedAt: member.joined_at,
      phone: member.phone,
      email: member.email,
      jubaArea: member.juba_area,
      shortBio: member.short_bio,
    },
  });
}

export async function onRequestPut({ request, env }) {
  if (!env.AYU_DB) return json({ message: "Profile updates are temporarily unavailable." }, 503);
  if (!sameOrigin(request)) return json({ message: "Request not allowed." }, 403);
  const member = await requireMember(env, request);
  if (!member) return json({ message: "Sign in to continue." }, 401);

  let payload;
  try {
    payload = await request.json();
  } catch {
    return json({ message: "The profile update could not be read." }, 400);
  }

  const phone = clean(payload?.phone, 30);
  const email = clean(payload?.email, 160).toLowerCase();
  const jubaArea = clean(payload?.jubaArea, 120);
  const shortBio = clean(payload?.shortBio, 600);

  if (!validPhone(phone)) return json({ message: "Enter a valid phone number or leave it blank." }, 400);
  if (!validEmail(email)) return json({ message: "Enter a valid email address or leave it blank." }, 400);
  if (jubaArea.length > 0 && jubaArea.length < 2) return json({ message: "Enter a valid area of residence." }, 400);

  const now = new Date().toISOString();
  await env.AYU_DB.prepare(`
    UPDATE members
    SET phone = ?, email = ?, juba_area = ?, short_bio = ?, updated_at = ?
    WHERE id = ?
  `).bind(phone || null, email || null, jubaArea || null, shortBio || null, now, member.member_id).run();

  return json({ updated: true });
}

export function onRequest() {
  return json({ message: "Method not allowed." }, 405);
}

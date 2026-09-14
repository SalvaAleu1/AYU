import { clean, json, requireMember } from "../../../_lib/auth.js";

function allowedAudience(membershipType) {
  return membershipType === "honorary"
    ? new Set(["all-members", "honorary-members"])
    : new Set(["all-members", "absolute-members"]);
}

function safeFilename(value) {
  return clean(value, 100).replace(/[^a-zA-Z0-9._ -]/g, "").trim() || "AYU-document";
}

export async function onRequestGet({ request, env, params }) {
  if (!env.AYU_DB) return json({ message: "Member documents are temporarily unavailable." }, 503);
  const member = await requireMember(env, request);
  if (!member) return json({ message: "Sign in to continue." }, 401);

  const id = clean(params?.id, 80);
  const document = await env.AYU_DB.prepare(`
    SELECT id, title, file_key, external_url, audience, is_published
    FROM member_documents
    WHERE id = ?
    LIMIT 1
  `).bind(id).first();

  if (!document || !document.is_published || !allowedAudience(member.membership_type).has(document.audience)) {
    return json({ message: "Document not found." }, 404);
  }

  if (document.external_url) return Response.redirect(document.external_url, 302);
  if (!document.file_key) return json({ message: "Document not found." }, 404);
  if (!env.AYU_MEMBER_FILES) return json({ message: "Member documents are temporarily unavailable." }, 503);

  const object = await env.AYU_MEMBER_FILES.get(document.file_key);
  if (!object) return json({ message: "Document not found." }, 404);

  const headers = new Headers();
  object.writeHttpMetadata(headers);
  headers.set("cache-control", "private, no-store, max-age=0");
  headers.set("x-content-type-options", "nosniff");
  headers.set("content-disposition", `inline; filename="${safeFilename(document.title)}"`);

  return new Response(object.body, { headers });
}

export function onRequest() {
  return json({ message: "Method not allowed." }, 405);
}

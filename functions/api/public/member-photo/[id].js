import { clean, json } from "../../../_lib/auth.js";

export async function onRequestGet({ env, params }) {
  if (!env.AYU_DB || !env.AYU_MEMBER_FILES) return json({ message: "Profile photo not found." }, 404);

  const id = clean(params?.id, 80);
  const member = await env.AYU_DB.prepare(`
    SELECT m.profile_photo_key, m.profile_photo_type
    FROM members m
    JOIN member_privacy_preferences p ON p.member_id = m.id
    WHERE m.id = ?
      AND m.membership_status = 'active'
      AND p.directory_visible = 1
      AND p.photo_visible = 1
      AND m.profile_photo_key IS NOT NULL
    LIMIT 1
  `).bind(id).first();

  if (!member?.profile_photo_key) return json({ message: "Profile photo not found." }, 404);
  const object = await env.AYU_MEMBER_FILES.get(member.profile_photo_key);
  if (!object) return json({ message: "Profile photo not found." }, 404);

  const headers = new Headers();
  object.writeHttpMetadata(headers);
  headers.set("content-type", member.profile_photo_type || headers.get("content-type") || "application/octet-stream");
  headers.set("cache-control", "public, max-age=300");
  headers.set("x-content-type-options", "nosniff");
  return new Response(object.body, { headers });
}

export function onRequest() {
  return json({ message: "Method not allowed." }, 405);
}

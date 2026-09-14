import { json, requireMember, sameOrigin } from "../../_lib/auth.js";

const MAX_PHOTO_SIZE = 3 * 1024 * 1024;
const ALLOWED_PHOTO_TYPES = new Set(["image/jpeg", "image/png", "image/webp"]);

function extensionFor(type) {
  if (type === "image/png") return "png";
  if (type === "image/webp") return "webp";
  return "jpg";
}

export async function onRequestGet({ request, env }) {
  if (!env.AYU_DB) return json({ message: "Profile photos are temporarily unavailable." }, 503);
  const member = await requireMember(env, request);
  if (!member) return json({ message: "Sign in to continue." }, 401);

  const photo = await env.AYU_DB.prepare("SELECT profile_photo_key, profile_photo_type FROM members WHERE id = ? LIMIT 1")
    .bind(member.member_id)
    .first();

  if (!photo?.profile_photo_key) return json({ message: "Profile photo not found." }, 404);
  if (!env.AYU_MEMBER_FILES) return json({ message: "Profile photos are temporarily unavailable." }, 503);

  const object = await env.AYU_MEMBER_FILES.get(photo.profile_photo_key);
  if (!object) return json({ message: "Profile photo not found." }, 404);

  const headers = new Headers();
  object.writeHttpMetadata(headers);
  headers.set("content-type", photo.profile_photo_type || headers.get("content-type") || "application/octet-stream");
  headers.set("cache-control", "private, no-store, max-age=0");
  headers.set("x-content-type-options", "nosniff");
  return new Response(object.body, { headers });
}

export async function onRequestPost({ request, env }) {
  if (!env.AYU_DB || !env.AYU_MEMBER_FILES) return json({ message: "Profile photo upload is temporarily unavailable." }, 503);
  if (!sameOrigin(request)) return json({ message: "Request not allowed." }, 403);
  const member = await requireMember(env, request);
  if (!member) return json({ message: "Sign in to continue." }, 401);

  let form;
  try {
    form = await request.formData();
  } catch {
    return json({ message: "The photo upload could not be read." }, 400);
  }

  const photo = form.get("photo");
  if (!(photo instanceof File) || photo.size === 0) return json({ message: "Choose a JPG, PNG or WebP photo." }, 400);
  if (!ALLOWED_PHOTO_TYPES.has(photo.type)) return json({ message: "Profile photos must be JPG, PNG or WebP files." }, 400);
  if (photo.size > MAX_PHOTO_SIZE) return json({ message: "Profile photos must not exceed 3 MB." }, 400);

  const current = await env.AYU_DB.prepare("SELECT profile_photo_key FROM members WHERE id = ? LIMIT 1")
    .bind(member.member_id)
    .first();
  const key = `member-profiles/${member.member_id}/${crypto.randomUUID()}.${extensionFor(photo.type)}`;

  await env.AYU_MEMBER_FILES.put(key, await photo.arrayBuffer(), {
    httpMetadata: { contentType: photo.type },
    customMetadata: { purpose: "member-profile-photo" },
  });

  const now = new Date().toISOString();
  try {
    await env.AYU_DB.prepare("UPDATE members SET profile_photo_key = ?, profile_photo_type = ?, updated_at = ? WHERE id = ?")
      .bind(key, photo.type, now, member.member_id)
      .run();
  } catch (error) {
    await env.AYU_MEMBER_FILES.delete(key).catch(() => undefined);
    throw error;
  }

  if (current?.profile_photo_key && current.profile_photo_key !== key) {
    await env.AYU_MEMBER_FILES.delete(current.profile_photo_key).catch(() => undefined);
  }

  return json({ updated: true, url: "/api/member/profile-photo" }, 200);
}

export async function onRequestDelete({ request, env }) {
  if (!env.AYU_DB) return json({ message: "Profile photo removal is temporarily unavailable." }, 503);
  if (!sameOrigin(request)) return json({ message: "Request not allowed." }, 403);
  const member = await requireMember(env, request);
  if (!member) return json({ message: "Sign in to continue." }, 401);

  const current = await env.AYU_DB.prepare("SELECT profile_photo_key FROM members WHERE id = ? LIMIT 1")
    .bind(member.member_id)
    .first();

  const now = new Date().toISOString();
  await env.AYU_DB.prepare("UPDATE members SET profile_photo_key = NULL, profile_photo_type = NULL, updated_at = ? WHERE id = ?")
    .bind(now, member.member_id)
    .run();

  if (current?.profile_photo_key && env.AYU_MEMBER_FILES) {
    await env.AYU_MEMBER_FILES.delete(current.profile_photo_key).catch(() => undefined);
  }

  return json({ removed: true });
}

export function onRequest() {
  return json({ message: "Method not allowed." }, 405);
}

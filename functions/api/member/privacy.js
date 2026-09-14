import { json, requireMember, sameOrigin } from "../../_lib/auth.js";

function toBoolean(value) {
  return value === true || value === 1 || value === "1";
}

export async function onRequestGet({ request, env }) {
  if (!env.AYU_DB) return json({ message: "Privacy settings are temporarily unavailable." }, 503);
  const member = await requireMember(env, request);
  if (!member) return json({ message: "Sign in to continue." }, 401);

  const record = await env.AYU_DB.prepare(`
    SELECT directory_visible, photo_visible, bio_visible, email_visible, phone_visible, updated_at
    FROM member_privacy_preferences
    WHERE member_id = ?
    LIMIT 1
  `).bind(member.member_id).first();

  return json({
    preferences: {
      directoryVisible: Boolean(record?.directory_visible),
      photoVisible: Boolean(record?.photo_visible),
      bioVisible: Boolean(record?.bio_visible),
      emailVisible: Boolean(record?.email_visible),
      phoneVisible: Boolean(record?.phone_visible),
      updatedAt: record?.updated_at || null,
    },
  });
}

export async function onRequestPut({ request, env }) {
  if (!env.AYU_DB) return json({ message: "Privacy settings are temporarily unavailable." }, 503);
  if (!sameOrigin(request)) return json({ message: "Request not allowed." }, 403);
  const member = await requireMember(env, request);
  if (!member) return json({ message: "Sign in to continue." }, 401);

  let payload;
  try {
    payload = await request.json();
  } catch {
    return json({ message: "The privacy settings could not be read." }, 400);
  }

  const directoryVisible = toBoolean(payload?.directoryVisible);
  const photoVisible = toBoolean(payload?.photoVisible);
  const bioVisible = toBoolean(payload?.bioVisible);
  const emailVisible = toBoolean(payload?.emailVisible);
  const phoneVisible = toBoolean(payload?.phoneVisible);
  const now = new Date().toISOString();

  await env.AYU_DB.prepare(`
    INSERT INTO member_privacy_preferences (
      member_id, directory_visible, photo_visible, bio_visible,
      email_visible, phone_visible, updated_at
    ) VALUES (?, ?, ?, ?, ?, ?, ?)
    ON CONFLICT(member_id) DO UPDATE SET
      directory_visible = excluded.directory_visible,
      photo_visible = excluded.photo_visible,
      bio_visible = excluded.bio_visible,
      email_visible = excluded.email_visible,
      phone_visible = excluded.phone_visible,
      updated_at = excluded.updated_at
  `).bind(
    member.member_id,
    directoryVisible ? 1 : 0,
    photoVisible ? 1 : 0,
    bioVisible ? 1 : 0,
    emailVisible ? 1 : 0,
    phoneVisible ? 1 : 0,
    now,
  ).run();

  return json({
    updated: true,
    preferences: {
      directoryVisible,
      photoVisible,
      bioVisible,
      emailVisible,
      phoneVisible,
      updatedAt: now,
    },
  });
}

export function onRequest() {
  return json({ message: "Method not allowed." }, 405);
}

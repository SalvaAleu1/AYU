import { json } from "../../_lib/auth.js";

export async function onRequestGet({ env }) {
  if (!env.AYU_DB) return json({ members: [] });

  const result = await env.AYU_DB.prepare(`
    SELECT
      m.id,
      m.full_name,
      m.short_bio,
      m.email,
      m.phone,
      m.profile_photo_key,
      p.photo_visible,
      p.bio_visible,
      p.email_visible,
      p.phone_visible
    FROM members m
    JOIN member_privacy_preferences p ON p.member_id = m.id
    WHERE m.membership_status = 'active' AND p.directory_visible = 1
    ORDER BY m.full_name COLLATE NOCASE ASC
    LIMIT 100
  `).all();

  const members = (result.results || []).map((member) => ({
    publicId: member.id,
    fullName: member.full_name,
    shortBio: member.bio_visible ? member.short_bio : null,
    email: member.email_visible ? member.email : null,
    phone: member.phone_visible ? member.phone : null,
    photoUrl: member.photo_visible && member.profile_photo_key
      ? `/api/public/member-photo/${encodeURIComponent(member.id)}`
      : null,
  }));

  return json({ members });
}

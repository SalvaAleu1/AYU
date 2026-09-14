import { json, requireMember } from "../../_lib/auth.js";

function audienceClause(membershipType) {
  return membershipType === "honorary"
    ? ["all-members", "honorary-members"]
    : ["all-members", "absolute-members"];
}

export async function onRequestGet({ request, env }) {
  if (!env.AYU_DB) return json({ message: "The member portal is temporarily unavailable." }, 503);
  const member = await requireMember(env, request);
  if (!member) return json({ message: "Sign in to access the member portal." }, 401);

  const audiences = audienceClause(member.membership_type);
  const now = new Date().toISOString();

  const [announcementsResult, documentsResult, formsResult, privacy] = await Promise.all([
    env.AYU_DB.prepare(`
      SELECT id, title, body, published_at
      FROM member_announcements
      WHERE is_published = 1 AND audience IN (?, ?)
      ORDER BY published_at DESC
      LIMIT 8
    `).bind(audiences[0], audiences[1]).all(),
    env.AYU_DB.prepare(`
      SELECT id, title, description, external_url, file_key, published_at
      FROM member_documents
      WHERE is_published = 1 AND audience IN (?, ?)
      ORDER BY published_at DESC
      LIMIT 8
    `).bind(audiences[0], audiences[1]).all(),
    env.AYU_DB.prepare(`
      SELECT id, title, description, destination_url, opens_at, closes_at
      FROM member_forms
      WHERE is_published = 1 AND audience IN (?, ?)
        AND (opens_at IS NULL OR opens_at <= ?)
        AND (closes_at IS NULL OR closes_at >= ?)
      ORDER BY COALESCE(opens_at, created_at) DESC
      LIMIT 8
    `).bind(audiences[0], audiences[1], now, now).all(),
    env.AYU_DB.prepare(`
      SELECT directory_visible, photo_visible, bio_visible, email_visible, phone_visible
      FROM member_privacy_preferences
      WHERE member_id = ?
      LIMIT 1
    `).bind(member.member_id).first(),
  ]);

  const documents = (documentsResult.results || []).map((document) => ({
    id: document.id,
    title: document.title,
    description: document.description,
    published_at: document.published_at,
    url: document.external_url || (document.file_key ? `/api/member/documents/${encodeURIComponent(document.id)}` : null),
  }));

  return json({
    member: {
      memberNumber: member.member_number,
      fullName: member.full_name,
      dateOfBirth: member.date_of_birth,
      membershipType: member.membership_type,
      membershipStatus: member.membership_status,
      termLabel: member.term_label,
      joinedAt: member.joined_at,
      phone: member.phone,
      email: member.email,
      jubaArea: member.juba_area,
      shortBio: member.short_bio,
    },
    privacy: {
      directoryVisible: Boolean(privacy?.directory_visible),
      photoVisible: Boolean(privacy?.photo_visible),
      bioVisible: Boolean(privacy?.bio_visible),
      emailVisible: Boolean(privacy?.email_visible),
      phoneVisible: Boolean(privacy?.phone_visible),
    },
    announcements: announcementsResult.results || [],
    documents,
    forms: formsResult.results || [],
  });
}

export function onRequest() {
  return json({ message: "Method not allowed." }, 405);
}

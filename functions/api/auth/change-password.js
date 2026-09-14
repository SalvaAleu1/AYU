import {
  hashPassword,
  json,
  requireMember,
  sameOrigin,
  sessionCookie,
  validatePassword,
  verifyPassword,
} from "../../_lib/auth.js";

export async function onRequestPost({ request, env }) {
  if (!env.AYU_DB) return json({ message: "Account security is temporarily unavailable." }, 503);
  if (!sameOrigin(request)) return json({ message: "Request not allowed." }, 403);

  const member = await requireMember(env, request);
  if (!member) return json({ message: "Sign in to continue." }, 401);

  let payload;
  try {
    payload = await request.json();
  } catch {
    return json({ message: "Enter your current and new password." }, 400);
  }

  const currentPassword = typeof payload?.currentPassword === "string" ? payload.currentPassword : "";
  const newPassword = typeof payload?.newPassword === "string" ? payload.newPassword : "";
  const passwordError = validatePassword(newPassword);
  if (passwordError) return json({ message: passwordError }, 400);

  const account = await env.AYU_DB.prepare("SELECT password_hash FROM member_accounts WHERE id = ? LIMIT 1")
    .bind(member.account_id)
    .first();
  if (!account?.password_hash || !(await verifyPassword(currentPassword, account.password_hash))) {
    return json({ message: "Your current password is incorrect." }, 400);
  }
  if (await verifyPassword(newPassword, account.password_hash)) {
    return json({ message: "Choose a new password that is different from your current password." }, 400);
  }

  const now = new Date().toISOString();
  const newHash = await hashPassword(newPassword);
  await env.AYU_DB.prepare("UPDATE member_accounts SET password_hash = ?, password_changed_at = ?, updated_at = ? WHERE id = ?")
    .bind(newHash, now, now, member.account_id)
    .run();

  await env.AYU_DB.prepare("DELETE FROM member_sessions WHERE account_id = ?")
    .bind(member.account_id)
    .run();

  return json(
    { changed: true, signedOut: true },
    200,
    { "set-cookie": sessionCookie("", 0) },
  );
}

export function onRequest() {
  return json({ message: "Method not allowed." }, 405);
}

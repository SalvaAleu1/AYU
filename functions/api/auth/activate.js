import {
  activationCode,
  clearRateLimit,
  consumeRateLimit,
  createSession,
  hashPassword,
  json,
  memberNumber,
  sameOrigin,
  sessionCookie,
  sha256,
  validatePassword,
} from "../../_lib/auth.js";

export async function onRequestPost({ request, env }) {
  if (!env.AYU_DB) return json({ message: "Member account activation is temporarily unavailable." }, 503);
  if (!sameOrigin(request)) return json({ message: "Request not allowed." }, 403);

  let payload;
  try {
    payload = await request.json();
  } catch {
    return json({ message: "Enter your member number, activation code and password." }, 400);
  }

  const identifier = memberNumber(payload?.memberNumber);
  const code = activationCode(payload?.activationCode);
  const password = typeof payload?.password === "string" ? payload.password : "";
  const passwordError = validatePassword(password);

  if (!identifier || code.length < 8) return json({ message: "Enter a valid member number and activation code." }, 400);
  if (passwordError) return json({ message: passwordError }, 400);

  const clientIp = request.headers.get("CF-Connecting-IP") || "unknown";
  const rate = await consumeRateLimit(env, `activate:${identifier}:${clientIp}`, 6, 1800);
  if (!rate.allowed) {
    return json(
      { message: "Too many activation attempts. Please wait before trying again." },
      429,
      { "retry-after": String(rate.retryAfter || 1800) },
    );
  }

  const account = await env.AYU_DB.prepare(`
    SELECT a.id AS account_id, a.member_id, a.status, a.activation_token_hash, a.activation_expires_at,
           m.member_number, m.full_name
    FROM member_accounts a
    JOIN members m ON m.id = a.member_id
    WHERE m.member_number = ?
    LIMIT 1
  `).bind(identifier).first();

  if (!account || account.status === "disabled" || !account.activation_token_hash || !account.activation_expires_at) {
    return json({ message: "The activation details are not valid." }, 400);
  }

  if (new Date(account.activation_expires_at).getTime() <= Date.now()) {
    return json({ message: "This activation code has expired." }, 400);
  }

  const codeHash = await sha256(code);
  if (codeHash !== account.activation_token_hash) return json({ message: "The activation details are not valid." }, 400);

  const now = new Date().toISOString();
  const passwordHash = await hashPassword(password);
  await env.AYU_DB.prepare(`
    UPDATE member_accounts
    SET password_hash = ?, activation_token_hash = NULL, activation_expires_at = NULL,
        status = 'active', activated_at = COALESCE(activated_at, ?), password_changed_at = ?, updated_at = ?
    WHERE id = ?
  `).bind(passwordHash, now, now, now, account.account_id).run();

  await env.AYU_DB.prepare("INSERT OR IGNORE INTO member_privacy_preferences (member_id, updated_at) VALUES (?, ?)")
    .bind(account.member_id, now)
    .run();
  await clearRateLimit(env, rate.keyHash);
  const session = await createSession(env, account.account_id, account.member_id);

  return json(
    {
      member: { memberNumber: account.member_number, fullName: account.full_name },
      expiresAt: session.expiresAt,
    },
    200,
    { "set-cookie": sessionCookie(session.token) },
  );
}

export function onRequest() {
  return json({ message: "Method not allowed." }, 405);
}

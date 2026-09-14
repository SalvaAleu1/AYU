import {
  clearRateLimit,
  consumeRateLimit,
  createSession,
  json,
  memberNumber,
  sameOrigin,
  sessionCookie,
  verifyPassword,
} from "../../_lib/auth.js";

export async function onRequestPost({ request, env }) {
  if (!env.AYU_DB) return json({ message: "Member sign-in is temporarily unavailable." }, 503);
  if (!sameOrigin(request)) return json({ message: "Request not allowed." }, 403);

  let payload;
  try {
    payload = await request.json();
  } catch {
    return json({ message: "Enter your member number and password." }, 400);
  }

  const identifier = memberNumber(payload?.memberNumber);
  const password = typeof payload?.password === "string" ? payload.password : "";
  if (!identifier || !password) return json({ message: "Enter your member number and password." }, 400);

  const clientIp = request.headers.get("CF-Connecting-IP") || "unknown";
  const rate = await consumeRateLimit(env, `login:${identifier}:${clientIp}`);
  if (!rate.allowed) {
    return json(
      { message: "Too many sign-in attempts. Please wait before trying again." },
      429,
      { "retry-after": String(rate.retryAfter || 900) },
    );
  }

  const account = await env.AYU_DB.prepare(`
    SELECT a.id AS account_id, a.member_id, a.password_hash, a.status, m.member_number, m.full_name
    FROM member_accounts a
    JOIN members m ON m.id = a.member_id
    WHERE m.member_number = ?
    LIMIT 1
  `).bind(identifier).first();

  const valid = account?.status === "active" && account.password_hash
    ? await verifyPassword(password, account.password_hash)
    : false;

  if (!valid) return json({ message: "The member number or password is incorrect." }, 401);

  await clearRateLimit(env, rate.keyHash);
  await env.AYU_DB.prepare("DELETE FROM member_sessions WHERE expires_at <= ?")
    .bind(new Date().toISOString())
    .run();

  const session = await createSession(env, account.account_id, account.member_id);
  return json(
    {
      member: {
        memberNumber: account.member_number,
        fullName: account.full_name,
      },
      expiresAt: session.expiresAt,
    },
    200,
    { "set-cookie": sessionCookie(session.token) },
  );
}

export function onRequest() {
  return json({ message: "Method not allowed." }, 405);
}

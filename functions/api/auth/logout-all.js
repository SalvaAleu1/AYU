import { json, requireMember, sameOrigin, sessionCookie } from "../../_lib/auth.js";

export async function onRequestPost({ request, env }) {
  if (!env.AYU_DB) return json({ message: "Account security is temporarily unavailable." }, 503);
  if (!sameOrigin(request)) return json({ message: "Request not allowed." }, 403);

  const member = await requireMember(env, request);
  if (!member) return json({ message: "Sign in to continue." }, 401);

  await env.AYU_DB.prepare("DELETE FROM member_sessions WHERE account_id = ?")
    .bind(member.account_id)
    .run();

  return json(
    { signedOut: true },
    200,
    { "set-cookie": sessionCookie("", 0) },
  );
}

export function onRequest() {
  return json({ message: "Method not allowed." }, 405);
}

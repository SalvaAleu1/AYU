import { destroySession, json, sameOrigin, sessionCookie } from "../../_lib/auth.js";

export async function onRequestPost({ request, env }) {
  if (!sameOrigin(request)) return json({ message: "Request not allowed." }, 403);
  await destroySession(env, request);
  return json({ signedOut: true }, 200, { "set-cookie": sessionCookie("", 0) });
}

export function onRequest() {
  return json({ message: "Method not allowed." }, 405);
}

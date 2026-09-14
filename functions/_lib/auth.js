const SESSION_COOKIE = "ayu_session";
const SESSION_SECONDS = 60 * 60 * 24 * 7;
const PASSWORD_ITERATIONS = 210000;
const LOGIN_WINDOW_SECONDS = 15 * 60;
const LOGIN_MAX_ATTEMPTS = 6;

function bytesToBase64(bytes) {
  let binary = "";
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary);
}

function base64ToBytes(value) {
  const binary = atob(value);
  return Uint8Array.from(binary, (character) => character.charCodeAt(0));
}

function randomBytes(length) {
  const bytes = new Uint8Array(length);
  crypto.getRandomValues(bytes);
  return bytes;
}

function normalizeMemberNumber(value) {
  return String(value ?? "").trim().toUpperCase().replace(/\s+/g, "");
}

function normalizeActivationCode(value) {
  return String(value ?? "").trim().toUpperCase().replace(/[^A-Z0-9]/g, "");
}

export function json(body, status = 200, extraHeaders = {}) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store, max-age=0",
      "x-content-type-options": "nosniff",
      ...extraHeaders,
    },
  });
}

export function clean(value, maxLength = 200) {
  return String(value ?? "").trim().slice(0, maxLength);
}

export function validatePassword(password) {
  if (typeof password !== "string" || password.length < 12 || password.length > 128) {
    return "Use a password between 12 and 128 characters.";
  }
  if (!/[a-z]/.test(password) || !/[A-Z]/.test(password) || !/\d/.test(password)) {
    return "Use at least one uppercase letter, one lowercase letter and one number.";
  }
  return null;
}

async function derivePassword(password, salt, iterations = PASSWORD_ITERATIONS) {
  const encoder = new TextEncoder();
  const keyMaterial = await crypto.subtle.importKey(
    "raw",
    encoder.encode(password),
    { name: "PBKDF2" },
    false,
    ["deriveBits"],
  );
  const bits = await crypto.subtle.deriveBits(
    {
      name: "PBKDF2",
      hash: "SHA-256",
      salt,
      iterations,
    },
    keyMaterial,
    256,
  );
  return new Uint8Array(bits);
}

export async function hashPassword(password) {
  const salt = randomBytes(16);
  const hash = await derivePassword(password, salt, PASSWORD_ITERATIONS);
  return `pbkdf2-sha256$${PASSWORD_ITERATIONS}$${bytesToBase64(salt)}$${bytesToBase64(hash)}`;
}

function constantTimeEqual(left, right) {
  if (left.length !== right.length) return false;
  let difference = 0;
  for (let index = 0; index < left.length; index += 1) difference |= left[index] ^ right[index];
  return difference === 0;
}

export async function verifyPassword(password, storedHash) {
  if (typeof storedHash !== "string") return false;
  const parts = storedHash.split("$");
  if (parts.length !== 4 || parts[0] !== "pbkdf2-sha256") return false;
  const iterations = Number(parts[1]);
  if (!Number.isInteger(iterations) || iterations < 100000 || iterations > 1000000) return false;

  try {
    const salt = base64ToBytes(parts[2]);
    const expected = base64ToBytes(parts[3]);
    const actual = await derivePassword(password, salt, iterations);
    return constantTimeEqual(actual, expected);
  } catch {
    return false;
  }
}

export async function sha256(value) {
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(String(value)));
  return bytesToBase64(new Uint8Array(digest));
}

export function getSessionToken(request) {
  const cookieHeader = request.headers.get("cookie") || "";
  for (const pair of cookieHeader.split(";")) {
    const separator = pair.indexOf("=");
    if (separator === -1) continue;
    const name = pair.slice(0, separator).trim();
    if (name === SESSION_COOKIE) return decodeURIComponent(pair.slice(separator + 1).trim());
  }
  return null;
}

export function sessionCookie(token, maxAge = SESSION_SECONDS) {
  const value = token ? encodeURIComponent(token) : "";
  return `${SESSION_COOKIE}=${value}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=${maxAge}`;
}

export async function createSession(env, accountId, memberId) {
  const token = bytesToBase64(randomBytes(32));
  const tokenHash = await sha256(token);
  const now = new Date();
  const expiresAt = new Date(now.getTime() + SESSION_SECONDS * 1000).toISOString();
  const id = crypto.randomUUID();

  await env.AYU_DB.prepare(`
    INSERT INTO member_sessions (id, account_id, member_id, token_hash, expires_at, created_at, last_seen_at)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `).bind(id, accountId, memberId, tokenHash, expiresAt, now.toISOString(), now.toISOString()).run();

  return { token, expiresAt };
}

export async function destroySession(env, request) {
  const token = getSessionToken(request);
  if (!token || !env.AYU_DB) return;
  const tokenHash = await sha256(token);
  await env.AYU_DB.prepare("DELETE FROM member_sessions WHERE token_hash = ?").bind(tokenHash).run();
}

export async function requireMember(env, request) {
  if (!env.AYU_DB) return null;
  const token = getSessionToken(request);
  if (!token) return null;
  const tokenHash = await sha256(token);
  const now = new Date().toISOString();

  const record = await env.AYU_DB.prepare(`
    SELECT
      s.id AS session_id,
      s.account_id,
      s.member_id,
      s.expires_at,
      a.status AS account_status,
      m.member_number,
      m.full_name,
      m.date_of_birth,
      m.membership_type,
      m.membership_status,
      m.term_label,
      m.joined_at,
      m.phone,
      m.email,
      m.juba_area,
      m.short_bio
    FROM member_sessions s
    JOIN member_accounts a ON a.id = s.account_id
    JOIN members m ON m.id = s.member_id
    WHERE s.token_hash = ? AND s.expires_at > ? AND a.status = 'active'
    LIMIT 1
  `).bind(tokenHash, now).first();

  if (!record) return null;
  await env.AYU_DB.prepare("UPDATE member_sessions SET last_seen_at = ? WHERE id = ?")
    .bind(now, record.session_id)
    .run();
  return record;
}

export function sameOrigin(request) {
  const origin = request.headers.get("origin");
  if (!origin) return true;
  try {
    return new URL(origin).origin === new URL(request.url).origin;
  } catch {
    return false;
  }
}

export async function consumeRateLimit(env, key, maxAttempts = LOGIN_MAX_ATTEMPTS, windowSeconds = LOGIN_WINDOW_SECONDS) {
  if (!env.AYU_DB) return { allowed: false, retryAfter: windowSeconds };
  const keyHash = await sha256(key);
  const now = Date.now();
  const current = await env.AYU_DB.prepare("SELECT window_started_at, attempts FROM auth_rate_limits WHERE key_hash = ?")
    .bind(keyHash)
    .first();

  if (!current) {
    await env.AYU_DB.prepare("INSERT INTO auth_rate_limits (key_hash, window_started_at, attempts) VALUES (?, ?, 1)")
      .bind(keyHash, new Date(now).toISOString())
      .run();
    return { allowed: true, keyHash };
  }

  const windowStart = new Date(current.window_started_at).getTime();
  const elapsed = Math.max(0, now - windowStart);
  if (elapsed >= windowSeconds * 1000) {
    await env.AYU_DB.prepare("UPDATE auth_rate_limits SET window_started_at = ?, attempts = 1 WHERE key_hash = ?")
      .bind(new Date(now).toISOString(), keyHash)
      .run();
    return { allowed: true, keyHash };
  }

  if (Number(current.attempts) >= maxAttempts) {
    return { allowed: false, retryAfter: Math.ceil((windowSeconds * 1000 - elapsed) / 1000), keyHash };
  }

  await env.AYU_DB.prepare("UPDATE auth_rate_limits SET attempts = attempts + 1 WHERE key_hash = ?")
    .bind(keyHash)
    .run();
  return { allowed: true, keyHash };
}

export async function clearRateLimit(env, keyHash) {
  if (!env.AYU_DB || !keyHash) return;
  await env.AYU_DB.prepare("DELETE FROM auth_rate_limits WHERE key_hash = ?").bind(keyHash).run();
}

export function memberNumber(value) {
  return normalizeMemberNumber(value);
}

export function activationCode(value) {
  return normalizeActivationCode(value);
}

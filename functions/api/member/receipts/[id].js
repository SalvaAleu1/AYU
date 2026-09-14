import { clean, json, requireMember } from "../../../_lib/auth.js";

export async function onRequestGet({ request, env, params }) {
  if (!env.AYU_DB) return json({ message: "Receipt records are temporarily unavailable." }, 503);

  const member = await requireMember(env, request);
  if (!member) return json({ message: "Sign in to access your receipt." }, 401);

  const receiptId = clean(params?.id, 80);
  if (!receiptId) return json({ message: "Receipt not found." }, 404);

  const receipt = await env.AYU_DB.prepare(`
    SELECT
      r.id,
      r.receipt_number,
      r.title,
      r.amount_minor,
      r.currency,
      r.payment_method,
      r.payment_reference,
      r.issued_at,
      c.contribution_type,
      m.full_name,
      m.member_number
    FROM member_receipts r
    JOIN member_contributions c ON c.id = r.contribution_id
    JOIN members m ON m.id = r.member_id
    WHERE r.id = ? AND r.member_id = ?
    LIMIT 1
  `).bind(receiptId, member.member_id).first();

  if (!receipt) return json({ message: "Receipt not found." }, 404);

  return json({
    receipt: {
      id: receipt.id,
      receiptNumber: receipt.receipt_number,
      title: receipt.title,
      amountMinor: Number(receipt.amount_minor),
      currency: receipt.currency,
      paymentMethod: receipt.payment_method,
      paymentReference: receipt.payment_reference,
      issuedAt: receipt.issued_at,
      contributionType: receipt.contribution_type,
      memberName: receipt.full_name,
      memberNumber: receipt.member_number,
    },
  });
}

export function onRequest() {
  return json({ message: "Method not allowed." }, 405);
}

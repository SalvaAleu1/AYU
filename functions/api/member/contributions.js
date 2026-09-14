import { json, requireMember } from "../../_lib/auth.js";

export async function onRequestGet({ request, env }) {
  if (!env.AYU_DB) return json({ message: "Contribution records are temporarily unavailable." }, 503);

  const member = await requireMember(env, request);
  if (!member) return json({ message: "Sign in to access your contribution records." }, 401);

  const [contributionsResult, channelsResult] = await Promise.all([
    env.AYU_DB.prepare(`
      SELECT
        c.id,
        c.contribution_type,
        c.title,
        c.description,
        c.amount_minor,
        c.currency,
        c.payment_method,
        c.status,
        c.received_at,
        c.recorded_at,
        r.id AS receipt_id,
        r.receipt_number,
        r.issued_at
      FROM member_contributions c
      LEFT JOIN member_receipts r ON r.contribution_id = c.id
      WHERE c.member_id = ?
      ORDER BY COALESCE(c.received_at, c.recorded_at) DESC
      LIMIT 100
    `).bind(member.member_id).all(),
    env.AYU_DB.prepare(`
      SELECT id, label, method_type, currency, instructions
      FROM payment_channels
      WHERE is_active = 1 AND is_public = 1
      ORDER BY sort_order ASC, label ASC
    `).all(),
  ]);

  const contributions = (contributionsResult.results || []).map((item) => ({
    id: item.id,
    contributionType: item.contribution_type,
    title: item.title,
    description: item.description,
    amountMinor: Number(item.amount_minor),
    currency: item.currency,
    paymentMethod: item.payment_method,
    status: item.status,
    receivedAt: item.received_at,
    recordedAt: item.recorded_at,
    receiptId: item.receipt_id,
    receiptNumber: item.receipt_number,
    receiptIssuedAt: item.issued_at,
  }));

  const totals = contributions.reduce((accumulator, contribution) => {
    if (contribution.status !== "received") return accumulator;
    accumulator[contribution.currency] = (accumulator[contribution.currency] || 0) + contribution.amountMinor;
    return accumulator;
  }, {});

  return json({
    contributions,
    totals,
    paymentChannels: (channelsResult.results || []).map((channel) => ({
      id: channel.id,
      label: channel.label,
      methodType: channel.method_type,
      currency: channel.currency,
      instructions: channel.instructions,
    })),
  });
}

export function onRequest() {
  return json({ message: "Method not allowed." }, 405);
}

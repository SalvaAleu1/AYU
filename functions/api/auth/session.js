import { json, requireMember } from "../../_lib/auth.js";

export async function onRequestGet({ request, env }) {
  const member = await requireMember(env, request);
  if (!member) return json({ authenticated: false }, 401);

  return json({
    authenticated: true,
    member: {
      memberNumber: member.member_number,
      fullName: member.full_name,
      membershipType: member.membership_type,
      membershipStatus: member.membership_status,
      termLabel: member.term_label,
    },
  });
}

export function onRequest() {
  return json({ message: "Method not allowed." }, 405);
}

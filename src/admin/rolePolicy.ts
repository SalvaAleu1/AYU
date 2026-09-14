export type RepositoryRole = "maintainer" | "publisher" | "contributor" | "reviewer";

export type RolePolicy = {
  role: RepositoryRole;
  responsibilities: string[];
  mayPublish: boolean;
  mayChangeGovernanceRecords: boolean;
  mayChangeElectionRecords: boolean;
};

/**
 * Internal source-management policy for the static AYU website.
 * Actual enforcement is provided by repository access and branch permissions,
 * not by a public website login or a client-side role check.
 */
export const rolePolicies: RolePolicy[] = [
  {
    role: "maintainer",
    responsibilities: ["Repository administration", "Production configuration", "Emergency correction and rollback"],
    mayPublish: true,
    mayChangeGovernanceRecords: true,
    mayChangeElectionRecords: true,
  },
  {
    role: "publisher",
    responsibilities: ["Approved public communications", "News, events and programme publication", "Media Centre updates"],
    mayPublish: true,
    mayChangeGovernanceRecords: false,
    mayChangeElectionRecords: false,
  },
  {
    role: "contributor",
    responsibilities: ["Draft content", "Prepare verified programme and event records", "Submit corrections"],
    mayPublish: false,
    mayChangeGovernanceRecords: false,
    mayChangeElectionRecords: false,
  },
  {
    role: "reviewer",
    responsibilities: ["Review accuracy", "Check constitutional consistency", "Review privacy and public-release suitability"],
    mayPublish: false,
    mayChangeGovernanceRecords: false,
    mayChangeElectionRecords: false,
  },
];

export const protectedContentRules = [
  "Constitutional text is changed only when AYU formally adopts an amendment or correction to the authoritative document.",
  "Governance documents are published only after authorization for public release.",
  "Election content is published only through the appropriate IEC authority during an electoral period.",
  "Personal information is not added to public data files without an appropriate public basis and authorization.",
  "Repository history is retained so public-content changes remain auditable and reversible.",
];

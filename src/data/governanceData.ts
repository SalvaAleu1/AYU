export const generalAssemblyPowers = [
  "Acts as the supreme organ of Apuk Youth Union in Juba.",
  "Elects the Chairperson of the Union.",
  "Approves policies and initiatives of the Union.",
  "Receives and considers the audited accounts of AYU-Juba.",
  "Passes by-laws.",
  "Considers and passes the annual Executive Committee reports and budget.",
  "Appoints members of the Advisory Board.",
  "Appoints auditors or approves an auditing firm to audit the Union's books of accounts.",
  "Nominates members of the Independent Electoral Committee.",
];

export const financialGovernance = [
  {
    title: "Resources serve AYU objectives",
    description: "The Constitution requires all Union funds to be used for AYU's objectives and mandates.",
  },
  {
    title: "Transparency & accountability",
    description: "AYU is constitutionally required to observe transparency and accountability in the use of its resources.",
  },
  {
    title: "Quarterly internal audit",
    description: "The General Assembly may appoint a three-member internal audit committee to audit financial activities quarterly.",
  },
  {
    title: "Annual external audit",
    description: "The Constitution provides for external audit once each year and presentation of the audit report at the year-end General Assembly meeting.",
  },
];

export const financeSources = [
  "Membership and subscription fees",
  "Grants and donations from well-wishers",
  "Royalties and gifts",
  "Funds raised from different sources",
  "Income from businesses owned by the Union",
  "Dividends from investments",
];

export const governancePrinciples = [
  {
    title: "General Assembly authority",
    description: "Registered members collectively exercise the powers assigned to the General Assembly by the Constitution.",
  },
  {
    title: "Financial oversight",
    description: "Audited accounts, annual reports and budgets fall within the oversight responsibilities of the General Assembly.",
  },
  {
    title: "Zero tolerance for corruption",
    description: "The Constitution expressly prohibits fraud, false accounting, forgery, misuse of AYU authority, embezzlement and other illegal benefits involving the Union.",
  },
  {
    title: "Constitutional confidentiality",
    description: "Transparency is balanced with Article 60, which protects Union records, reports, information and proceedings unless their disclosure is expressly authorized.",
  },
];

export type GovernanceDocument = {
  id: string;
  category: "Constitution" | "Annual Report" | "Audit Report" | "Resolution" | "Policy" | "By-law" | "Code" | "Public Notice";
  title: string;
  description: string;
  period?: string;
  href: string;
  publishedAt?: string;
};

export const governanceDocuments: GovernanceDocument[] = [
  {
    id: "constitution-2025",
    category: "Constitution",
    title: "Constitution of Apuk Youth Union in Juba — Amended 2025",
    description: "The principal governance document of AYU-Juba, approved by the General Assembly and signed into law on 14 September 2025.",
    period: "Amended 2025",
    href: "/?page=constitution",
    publishedAt: "14 September 2025",
  },
];

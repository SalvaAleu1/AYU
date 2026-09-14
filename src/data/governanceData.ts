export const generalAssemblyPowers = [
  "Acts as the highest authority of Apuk Youth Union in Juba.",
  "Elects the Chairperson of the Union.",
  "Approves AYU policies and initiatives.",
  "Receives and considers audited accounts.",
  "Passes by-laws.",
  "Considers and passes annual Executive Committee reports and budgets.",
  "Appoints members of the Advisory Board.",
  "Appoints auditors or approves an auditing firm.",
  "Nominates members of the Independent Electoral Committee.",
];

export const financialGovernance = [
  {
    title: "Resources support AYU's work",
    description: "AYU funds must be used for the objectives and work of the Union.",
  },
  {
    title: "Transparency & accountability",
    description: "AYU must use its resources openly, responsibly and in line with the Constitution.",
  },
  {
    title: "Internal audit",
    description: "The General Assembly may appoint an internal audit committee to review financial activities during the year.",
  },
  {
    title: "External audit",
    description: "The Constitution provides for an external audit each year and presentation of the report to the General Assembly.",
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
    description: "Registered members exercise the powers given to the General Assembly by the Constitution.",
  },
  {
    title: "Financial oversight",
    description: "Audited accounts, annual reports and budgets are reviewed through the General Assembly.",
  },
  {
    title: "No corruption",
    description: "The Constitution prohibits fraud, false accounting, forgery, misuse of AYU authority, embezzlement and other illegal benefits involving the Union.",
  },
  {
    title: "Confidential information",
    description: "Some AYU records, reports, information and proceedings remain confidential unless their release is authorized.",
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
    description: "The main governance document of AYU-Juba, amended and approved by the General Assembly and signed into law on 14 September 2025.",
    period: "Amended 2025",
    href: "/?page=constitution",
    publishedAt: "14 September 2025",
  },
];

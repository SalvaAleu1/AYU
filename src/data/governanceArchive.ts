export type AdvisoryBoardMember = {
  slug: string;
  name: string;
  role: string;
  photo?: string;
  biography?: string;
  isCurrent: boolean;
};

export type LeadershipTerm = {
  id: string;
  termLabel: string;
  startDate?: string;
  endDate?: string;
  chairperson: string;
  deputyChairperson?: string;
  members?: Array<{ name: string; role: string }>;
};

export type ChairpersonRecord = {
  id: string;
  name: string;
  term: string;
  status?: "Current" | "Former";
};

// Publish names only when supported by verified AYU records.
export const currentAdvisoryBoard: AdvisoryBoardMember[] = [];

export const chairpersonsHistory: ChairpersonRecord[] = [
  {
    id: "agany-geng-ayiei-2024-2026",
    name: "Agany Geng Ayiei",
    term: "2024–2026",
    status: "Current",
  },
];

export const pastLeadershipTerms: LeadershipTerm[] = [
  {
    id: "documented-2016-2017",
    termLabel: "Documented administration · 2016–2017",
    chairperson: "Bol Deng Akeen",
    members: [
      { name: "Darius Adup Anyuon", role: "Secretary General" },
      { name: "Lang Madut Aguer", role: "Information Secretary" },
    ],
  },
];

export const advisoryBoardStructure = {
  size: 3,
  head: "Patron",
  appointedBy: "General Assembly",
  appointmentRule: "Simple majority vote",
  tenure: "Same tenure as the Executive Committee",
};

export const advisoryBoardFunctions = [
  "Advises on AYU projects and programmes.",
  "Gives advice on unity, social development, conflict resolution and Union projects.",
  "May advise the Chairperson and Secretaries on their duties.",
  "May provide guidance on community heritage and cultural values.",
  "May investigate matters and advise the General Assembly where the Constitution requires it.",
];

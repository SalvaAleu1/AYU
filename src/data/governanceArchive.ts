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

// Publish names only when supported by verified AYU records.
export const currentAdvisoryBoard: AdvisoryBoardMember[] = [];
export const pastLeadershipTerms: LeadershipTerm[] = [];

export const advisoryBoardStructure = {
  size: 3,
  head: "Patron",
  appointedBy: "General Assembly",
  appointmentRule: "Simple majority vote",
  tenure: "Same tenure as the Executive Committee",
};

export const advisoryBoardFunctions = [
  "Acts as a consultant for youth projects and programmes.",
  "Advises on unity, social development, conflict resolution and matters related to projects of the Union.",
  "May advise the Chairperson and Secretaries on their duties.",
  "May act as a reference point for community heritage and cultural values.",
  "Carries constitutional responsibilities in matters where the Advisory Board is required to investigate and advise the General Assembly.",
];

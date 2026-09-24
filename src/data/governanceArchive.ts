export type AdvisoryBoardMember = {
  slug: string;
  name: string;
  role: string;
  photo?: string;
  biography?: string;
  isCurrent: boolean;
};

export type ChairpersonRecord = {
  id: string;
  name: string;
  initials: string;
  term: string;
  status: "Founder" | "Former" | "Current";
  note?: string;
  photo?: string;
};

// Publish names only when supported by verified AYU records.
export const currentAdvisoryBoard: AdvisoryBoardMember[] = [];

export const chairpersonsHistory: ChairpersonRecord[] = [
  {
    id: "wol-deng-mading",
    name: "Wol Deng Mading",
    initials: "WDM",
    term: "2005–2010",
    status: "Founder",
    note: "Founded Apuk Youth Union in Nairobi in 2005. In 2010, he established Apuk Youth Union in Juba and transitioned the leadership to Giir Ngot Riiny.",
  },
  {
    id: "giir-ngot-riiny",
    name: "Giir Ngot Riiny",
    initials: "GNR",
    term: "2010–2015",
    status: "Former",
  },
  {
    id: "bol-deng-akeen",
    name: "Bol Deng Akeen",
    initials: "BDA",
    term: "2015–2017",
    status: "Former",
  },
  {
    id: "anei-aroup-anei",
    name: "Anei Aroup Anei",
    initials: "AAA",
    term: "2017–2019",
    status: "Former",
  },
  {
    id: "akucpiir-akot-wol",
    name: "Akucpiir Akot Wol",
    initials: "AAW",
    term: "2019–2022",
    status: "Former",
  },
  {
    id: "barnaba-mou-ajang",
    name: "Barnaba Mou Ajang",
    initials: "BMA",
    term: "2022–2024",
    status: "Former",
  },
  {
    id: "agany-geng-ayiei",
    name: "Agany Geng Ayiei",
    initials: "AGA",
    term: "2024–2026",
    status: "Current",
    photo: "/leadership/agany-geng-ayiei.webp",
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

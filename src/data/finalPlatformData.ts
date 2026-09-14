export type ElectionStage = {
  step: string;
  title: string;
  description: string;
};

export type PublicElectionRecord = {
  id: string;
  title: string;
  date?: string;
  summary: string;
  href?: string;
};

export const electionFacts = [
  { label: "Electoral body", value: "Independent Electoral Committee (IEC)" },
  { label: "IEC membership", value: "7 members" },
  { label: "Minimum women in IEC", value: "2" },
  { label: "Practicing lawyers in IEC", value: "2" },
  { label: "Electoral period", value: "2 months" },
  { label: "Registration fee", value: "30,000 SSP per term" },
];

export const electionPrinciples = [
  "The IEC is constituted two months before the expiry of an Executive Committee term.",
  "The IEC is independent and neutral in the execution of its electoral duties.",
  "All seven IEC members are nominated by the General Assembly and remain accountable to it.",
  "The IEC registers voters, prepares the voter registry, manages nominations, publishes the timetable, organizes debates, supervises voting and announces results.",
  "The Constitution requires the IEC to work toward free and fair elections.",
  "The electoral process is completed within two months and includes inauguration of the incoming leadership.",
];

export const voterInformation = [
  "Membership registration is renewed during every Executive Committee term and toward elections.",
  "A voter registers with the IEC and meets the constitutional registration requirements.",
  "The Constitution requires presentation of a valid Nationality Certificate during voter registration.",
  "The IEC may adopt additional election rules consistent with the Constitution.",
  "The Constitution provides for no more than 500 registered voters from each section.",
];

export const electionStages: ElectionStage[] = [
  { step: "01", title: "Constitute the IEC", description: "The General Assembly nominates the seven-member Independent Electoral Committee." },
  { step: "02", title: "Register alliances and candidates", description: "The IEC receives alliance and candidate registrations and issues the relevant nomination forms." },
  { step: "03", title: "Register and validate voters", description: "The IEC registers voters and prepares and validates the voter registry." },
  { step: "04", title: "Declare qualified candidates", description: "Qualified candidates are formally declared by the IEC in accordance with the Constitution and electoral rules." },
  { step: "05", title: "Campaigns and debates", description: "Campaigns open and public candidate debates may be organized under the electoral framework." },
  { step: "06", title: "Voting and results", description: "Voting takes place and the IEC Chairperson announces the election results." },
  { step: "07", title: "Petitions and reporting", description: "Election disputes and challenges are handled through the IEC within the constitutional period." },
  { step: "08", title: "Inauguration", description: "The incoming leadership is sworn in and the IEC concludes its mandate." },
];

// Public election records are source-controlled. Empty arrays remain hidden on the public site.
export const electionNotices: PublicElectionRecord[] = [];
export const electionCandidates: PublicElectionRecord[] = [];
export const electionDebates: PublicElectionRecord[] = [];
export const electionResults: PublicElectionRecord[] = [];
export const electionArchive: PublicElectionRecord[] = [];

export const youthHubCategories = [
  { title: "Opportunities", description: "Verified youth opportunities shared through AYU public communications.", href: "/?page=news" },
  { title: "Scholarships", description: "Education and scholarship information relevant to Apuk youth when officially published.", href: "/?page=news" },
  { title: "Trainings", description: "AYU learning, capacity-building and training activities.", href: "/?page=program&slug=education-training" },
  { title: "AYU Events", description: "Institutional, community, cultural and youth events published by AYU.", href: "/?page=events" },
  { title: "Jobs & Internships", description: "Employment and internship opportunities shared through AYU communications when available.", href: "/?page=news" },
  { title: "Community Announcements", description: "Official community notices and AYU public statements.", href: "/?page=news" },
  { title: "Sports Activities", description: "Sports initiatives, tournaments and youth participation linked to AYU's constitutional mandate.", href: "/?page=program&slug=sports" },
];

export const partnerRelationships = [
  { name: "Apuk Olympics Association", focus: "Youth participation in sports, athlete mobilization and unity through Olympics tournaments." },
  { name: "Apuk Graduates Congress", focus: "Education, mentorship, career development and representation of graduates in the community." },
  { name: "Apuk Lith Cultural Group", focus: "Preservation, promotion and transmission of Apuk cultural values, norms and traditions among youth." },
  { name: "Apuk Lith Football Team", focus: "Football participation and community sporting activities." },
  { name: "Apuk Lith Volleyball Team", focus: "Volleyball participation and community sporting activities." },
  { name: "Apuk Medical Professionals and Students’ Association (AMPSA)", focus: "Health awareness and engagement with Apuk medical professionals and students." },
  { name: "Apuk Universities and Higher Institutes’ Students Association (AUISA)", focus: "Education, student engagement and youth development." },
  { name: "Apuk Lith Women’s Union", focus: "Women’s participation, empowerment and community cooperation." },
  { name: "Sectional Youth Associations in Juba", focus: "Coordination and youth representation across Apuk sections in Juba." },
];

export const supportPathways = [
  "Programme and project partnerships",
  "Education, mentorship and training support",
  "Peacebuilding and reconciliation initiatives",
  "Sports, culture and youth development collaboration",
  "Health, gender, environmental and community-development initiatives",
  "Grants, donations and other lawful support consistent with the AYU Constitution",
];

export const contactChannels = [
  { title: "Registered office", value: "Juba, South Sudan", href: null },
  { title: "News & official communications", value: "AYU public statements and updates", href: "/?page=news" },
  { title: "Media Centre", value: "Institutional and press resources", href: "/?page=media" },
  { title: "Membership", value: "Membership requirements and registration information", href: "/?page=membership" },
];

export type SearchEntry = {
  title: string;
  description: string;
  category: string;
  href: string;
  keywords: string[];
};

export const siteSearchIndex: SearchEntry[] = [
  { title: "About AYU", description: "Story, mission, vision, values, objectives and institutional identity.", category: "Institution", href: "/?page=about", keywords: ["about", "mission", "vision", "values", "objectives"] },
  { title: "Leadership", description: "Executive Committee structure, constitutional offices and verified leadership records.", category: "Institution", href: "/?page=leadership", keywords: ["leadership", "chairperson", "executive", "secretary"] },
  { title: "Advisory Board & History", description: "Advisory Board framework and documented institutional leadership history.", category: "Institution", href: "/?page=history", keywords: ["advisory", "patron", "history", "past leadership"] },
  { title: "Our Work", description: "AYU programme pillars, projects and community service areas.", category: "Programmes", href: "/?page=work", keywords: ["programmes", "projects", "education", "peace", "sports", "health"] },
  { title: "News & Official Communications", description: "AYU news, statements and community updates.", category: "Communications", href: "/?page=news", keywords: ["news", "statements", "updates", "announcements"] },
  { title: "Events", description: "AYU events and constitutional meeting calendar.", category: "Communications", href: "/?page=events", keywords: ["events", "meetings", "calendar"] },
  { title: "Impact", description: "Documented AYU milestones and success-story architecture.", category: "Programmes", href: "/?page=impact", keywords: ["impact", "milestones", "stories"] },
  { title: "Media Centre", description: "Publications, press resources and AYU downloads.", category: "Communications", href: "/?page=media", keywords: ["media", "downloads", "press", "logo"] },
  { title: "Membership", description: "Eligibility, categories, rights, duties and registration information.", category: "Membership", href: "/?page=membership", keywords: ["membership", "join", "register", "rights", "duties"] },
  { title: "Governance & Transparency", description: "Constitutional governance, financial oversight, audit and public documents.", category: "Governance", href: "/?page=governance", keywords: ["governance", "audit", "transparency", "finance", "general assembly"] },
  { title: "Constitution", description: "Search and read the Amended 2025 AYU Constitution digitally.", category: "Governance", href: "/?page=constitution", keywords: ["constitution", "articles", "laws", "rules"] },
  { title: "Elections", description: "IEC, voter information, electoral process, notices, candidates and results architecture.", category: "Governance", href: "/?page=elections", keywords: ["elections", "iec", "voters", "candidates", "results"] },
  { title: "Apuk Youth Hub", description: "Youth opportunities, scholarships, trainings, jobs, announcements and sports.", category: "Youth Hub", href: "/?page=youth-hub", keywords: ["opportunities", "scholarships", "training", "jobs", "internships"] },
  { title: "Partners & Support", description: "Constitutional community relationships and partnership pathways.", category: "Institution", href: "/?page=partners", keywords: ["partners", "support", "sponsors", "donations"] },
  { title: "Contact", description: "Registered office and official AYU public communication routes.", category: "Institution", href: "/?page=contact", keywords: ["contact", "office", "juba", "communication"] },
  { title: "AYU Identity & Symbols", description: "Official emblem, motto and constitutional meaning of AYU symbols.", category: "Institution", href: "/?page=identity", keywords: ["logo", "identity", "hawk", "handshake", "motto"] },
];

// The AYU membership Google Form URL will be inserted here once supplied by AYU.
// Keeping it null prevents a broken or fabricated public registration link.
export const membershipRegistrationUrl: string | null = null;

export const legalUpdated = "14 September 2026";

export const privacySections = [
  { title: "Information AYU may receive", body: "The public website can be used without creating an account. If a person chooses to use an external registration form or another official AYU service, information is handled according to the notice presented with that service." },
  { title: "Public website data", body: "The website is designed as a primarily static public information service. AYU does not require a public website account for ordinary browsing." },
  { title: "Membership registration", body: "Membership registration is handled through an AYU-approved external form when the official registration link is active. The form provider’s privacy practices also apply to information submitted there." },
  { title: "Published personal information", body: "Names, photographs, biographies or contact details are published only where AYU has an institutional basis and appropriate authorization to make them public." },
  { title: "External links", body: "The website may link to external sources, partner institutions or third-party services. Those services operate under their own privacy and security practices." },
  { title: "Security", body: "AYU uses reasonable technical and organizational measures for the public website, including encrypted HTTPS delivery and security headers at the hosting layer." },
];

export const termsSections = [
  { title: "Official information", body: "This website presents public information about Apuk Youth Union in Juba. Where the website summarizes the Constitution, the signed constitutional document remains authoritative." },
  { title: "Acceptable use", body: "Visitors must not misuse the website, attempt unauthorized interference, impersonate AYU officials, or use AYU identity materials in a misleading or unlawful manner." },
  { title: "Content accuracy", body: "AYU aims to publish accurate institutional information and may correct or update public content when official records change." },
  { title: "Intellectual property and identity", body: "AYU names, emblem and institutional materials should be used in a manner that respects the Union’s identity, context and lawful rights." },
  { title: "External services", body: "Third-party forms, social platforms, news sources and other linked services are governed by their respective terms and availability." },
  { title: "No unauthorized representation", body: "Nothing on this website authorizes a visitor to speak, contract, collect funds or make commitments on behalf of AYU unless separately authorized by the Union." },
];

export const accessibilitySections = [
  { title: "Inclusive access", body: "AYU aims to make its public website usable across mobile phones, tablets and desktop devices and for people using keyboard or assistive navigation." },
  { title: "Readable content", body: "Pages use responsive layouts, semantic headings, visible focus states, descriptive links and high-contrast institutional colors." },
  { title: "Motion and interaction", body: "The interface respects reduced-motion preferences where supported and avoids making essential information dependent on animation." },
  { title: "Continuous improvement", body: "Accessibility is treated as an ongoing quality standard as the website and its public content evolve." },
];

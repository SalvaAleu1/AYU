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
  { label: "Appointed through", value: "General Assembly" },
  { label: "Guided by", value: "AYU Constitution" },
];

export const electionPrinciples = [
  "The IEC is formed before the end of an Executive Committee term.",
  "The IEC is independent and neutral in carrying out election duties.",
  "IEC members are nominated by the General Assembly and are accountable to it.",
  "The IEC registers voters, prepares the voter list, manages nominations, publishes the timetable, organizes debates, supervises voting and announces results.",
  "The Constitution requires the IEC to work toward free and fair elections.",
  "The election process ends with the inauguration of the incoming leadership.",
];

export const voterInformation = [
  "Membership registration is renewed during each Executive Committee term and for elections.",
  "A voter registers with the IEC and meets the constitutional registration requirements.",
  "The Constitution requires a valid Nationality Certificate during voter registration.",
  "The IEC may adopt additional election rules that are consistent with the Constitution.",
  "The Constitution sets a voter limit for each section.",
];

export const electionStages: ElectionStage[] = [
  { step: "01", title: "Form the IEC", description: "The General Assembly nominates the Independent Electoral Committee." },
  { step: "02", title: "Register alliances and candidates", description: "The IEC receives alliance and candidate registrations and issues nomination forms." },
  { step: "03", title: "Register voters", description: "The IEC registers voters and prepares the voter list." },
  { step: "04", title: "Confirm qualified candidates", description: "The IEC confirms candidates who meet the election requirements." },
  { step: "05", title: "Campaigns and debates", description: "Campaigns take place and public candidate debates may be organized." },
  { step: "06", title: "Voting and results", description: "Voting takes place and the IEC announces the results." },
  { step: "07", title: "Petitions and reporting", description: "Election disputes and challenges are handled through the IEC within the allowed period." },
  { step: "08", title: "Inauguration", description: "The incoming leadership is sworn in and the IEC completes its work." },
];

export const electionNotices: PublicElectionRecord[] = [];
export const electionCandidates: PublicElectionRecord[] = [];
export const electionDebates: PublicElectionRecord[] = [];
export const electionResults: PublicElectionRecord[] = [];
export const electionArchive: PublicElectionRecord[] = [];

export const youthHubCategories = [
  { title: "Opportunities", description: "Youth opportunities shared through AYU public updates.", href: "/?page=news" },
  { title: "Scholarships", description: "Education and scholarship information relevant to Apuk youth.", href: "/?page=news" },
  { title: "Trainings", description: "AYU learning, skills and training activities.", href: "/?page=program&slug=education-training" },
  { title: "AYU Events", description: "Community, cultural and youth events published by AYU.", href: "/?page=events" },
  { title: "Jobs & Internships", description: "Jobs and internship opportunities shared through AYU updates.", href: "/?page=news" },
  { title: "Community Announcements", description: "AYU notices, public statements and community information.", href: "/?page=news" },
  { title: "Sports Activities", description: "Sports activities and youth participation supported by AYU.", href: "/?page=program&slug=sports" },
];

export const partnerRelationships = [
  { name: "Apuk Olympics Association", focus: "Youth participation in sports, athlete mobilization and unity through Olympics tournaments." },
  { name: "Apuk Graduates Congress", focus: "Education, mentorship, career development and representation of graduates in the community." },
  { name: "Apuk Lith Cultural Group", focus: "Preserving and promoting Apuk culture, values and traditions among young people." },
  { name: "Apuk Lith Football Team", focus: "Football participation and community sporting activities." },
  { name: "Apuk Lith Volleyball Team", focus: "Volleyball participation and community sporting activities." },
  { name: "Apuk Medical Professionals and Students’ Association (AMPSA)", focus: "Health awareness and engagement with Apuk medical professionals and students." },
  { name: "Apuk Universities and Higher Institutes’ Students Association (AUISA)", focus: "Education, student engagement and youth development." },
  { name: "Apuk Lith Women’s Union", focus: "Women's participation, empowerment and community cooperation." },
  { name: "Sectional Youth Associations in Juba", focus: "Coordination and youth representation across Apuk sections in Juba." },
];

export const supportPathways = [
  "Programme and project partnerships",
  "Education, mentorship and training support",
  "Peace and reconciliation activities",
  "Sports, culture and youth development",
  "Health, gender, environment and community development",
  "Grants, donations and other lawful support consistent with the AYU Constitution",
];

export const contactChannels = [
  { title: "Registered office", value: "Juba, South Sudan", href: null },
  { title: "News & updates", value: "AYU public statements and updates", href: "/?page=news" },
  { title: "Media Centre", value: "Public AYU resources", href: "/?page=media" },
  { title: "Membership", value: "Membership and registration information", href: "/?page=membership" },
];

export type SearchEntry = {
  title: string;
  description: string;
  category: string;
  href: string;
  keywords: string[];
};

export const siteSearchIndex: SearchEntry[] = [
  { title: "About AYU", description: "Story, mission, vision, values and objectives.", category: "About", href: "/?page=about", keywords: ["about", "mission", "vision", "values", "objectives"] },
  { title: "Leadership", description: "AYU leadership roles and verified leadership records.", category: "About", href: "/?page=leadership", keywords: ["leadership", "chairperson", "executive", "secretary"] },
  { title: "Chairpersons History", description: "Chairpersons who have led AYU from its founding in 2005 to the current term.", category: "About", href: "/?page=chairpersons-history", keywords: ["chairpersons", "history", "founder", "Wol Deng Mading", "leadership"] },
  { title: "Advisory Board & History", description: "Advisory Board information and AYU leadership history.", category: "About", href: "/?page=history", keywords: ["advisory", "patron", "history", "past leadership"] },
  { title: "Our Work", description: "AYU areas of work, programmes and projects.", category: "Our Work", href: "/?page=work", keywords: ["programmes", "projects", "education", "peace", "sports", "health"] },
  { title: "News & Updates", description: "AYU news, statements and community updates.", category: "News", href: "/?page=news", keywords: ["news", "statements", "updates", "announcements"] },
  { title: "Events", description: "AYU events and meeting calendar.", category: "Events", href: "/?page=events", keywords: ["events", "meetings", "calendar"] },
  { title: "Impact", description: "AYU milestones and community work.", category: "Our Work", href: "/?page=impact", keywords: ["impact", "milestones", "stories"] },
  { title: "Media Centre", description: "Publications, press resources and AYU downloads.", category: "Media", href: "/?page=media", keywords: ["media", "downloads", "press", "logo"] },
  { title: "Membership", description: "Eligibility, membership types, rights, duties and registration.", category: "Membership", href: "/?page=membership", keywords: ["membership", "join", "register", "rights", "duties"] },
  { title: "Governance & Transparency", description: "AYU governance, financial oversight, audit and public documents.", category: "Governance", href: "/?page=governance", keywords: ["governance", "audit", "transparency", "finance", "general assembly"] },
  { title: "Constitution", description: "Search and read the Amended 2025 AYU Constitution.", category: "Governance", href: "/?page=constitution", keywords: ["constitution", "articles", "laws", "rules"] },
  { title: "Elections", description: "IEC, voter information, election process, notices, candidates and results.", category: "Governance", href: "/?page=elections", keywords: ["elections", "iec", "voters", "candidates", "results"] },
  { title: "Apuk Youth Hub", description: "Opportunities, scholarships, training, jobs, announcements and sports.", category: "Youth Hub", href: "/?page=youth-hub", keywords: ["opportunities", "scholarships", "training", "jobs", "internships"] },
  { title: "Partners & Support", description: "AYU community relationships and ways to support its work.", category: "About", href: "/?page=partners", keywords: ["partners", "support", "sponsors", "donations"] },
  { title: "Contact", description: "Registered office and AYU public communication routes.", category: "About", href: "/?page=contact", keywords: ["contact", "office", "juba", "communication"] },
  { title: "AYU Identity & Symbols", description: "Official AYU emblem, motto and meaning of its symbols.", category: "About", href: "/?page=identity", keywords: ["logo", "identity", "hawk", "handshake", "motto"] },
];

export const membershipRegistrationUrl = "https://forms.gle/4GTEwGTtW1wYq3ry5";

export const legalUpdated = "14 September 2026";

export const privacySections = [
  { title: "Information AYU may receive", body: "You can browse this website without creating an account. If you use the official membership form or another AYU service, the information you provide is handled according to the notice shown with that service." },
  { title: "Public website", body: "This website mainly provides public information about AYU. You do not need a website account to browse it." },
  { title: "Membership registration", body: "Membership registration is handled through the official AYU Google Form. Google’s privacy practices also apply to information submitted through that form." },
  { title: "Personal information", body: "Names, photographs, biographies or contact details are published only when AYU has a proper reason and permission to make them public." },
  { title: "External links", body: "The website may link to other websites or services. Those services have their own privacy and security practices." },
  { title: "Security", body: "AYU uses reasonable security measures for the public website, including HTTPS and security settings provided through its hosting service." },
];

export const termsSections = [
  { title: "Official information", body: "This website provides public information about Apuk Youth Union in Juba. Where the website summarizes the Constitution, the signed Constitution remains the official source." },
  { title: "Acceptable use", body: "Visitors must not misuse the website, interfere with it, pretend to be AYU officials or use AYU identity materials in a misleading or unlawful way." },
  { title: "Accuracy", body: "AYU aims to publish accurate information and may correct or update content when official records change." },
  { title: "AYU name and identity", body: "AYU names, emblem and official materials should be used in a respectful and lawful way." },
  { title: "External services", body: "Linked forms, social platforms, news sources and other services follow their own terms and availability." },
  { title: "No unauthorized representation", body: "Nothing on this website allows a visitor to speak, collect funds, enter agreements or make commitments on behalf of AYU without authorization." },
];

export const accessibilitySections = [
  { title: "Easy access", body: "AYU aims to make the website usable on phones, tablets and computers, including for people who use a keyboard or assistive technology." },
  { title: "Readable content", body: "Pages use clear headings, visible focus states, descriptive links and readable colour contrast." },
  { title: "Motion and interaction", body: "The website avoids making important information depend on animation and respects reduced-motion settings where supported." },
  { title: "Ongoing improvement", body: "AYU will continue improving accessibility as the website grows and changes." },
];

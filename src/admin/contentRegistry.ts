export type PublishState = "draft" | "published" | "archived";

export type ContentCollection = {
  key: string;
  label: string;
  sourceFile: string;
  publicRoute: string;
  ownerPortfolio: string;
  publicationRule: string;
};

/**
 * AYU uses a static, source-controlled publishing model for the public website.
 * Repository permissions provide the administrative boundary; this registry
 * defines where each public content type lives and which AYU portfolio owns it.
 */
export const contentRegistry: ContentCollection[] = [
  {
    key: "news",
    label: "News & Official Communications",
    sourceFile: "src/data/newsData.ts",
    publicRoute: "/?page=news",
    ownerPortfolio: "Secretary for Information and Media",
    publicationRule: "Only records explicitly marked published are exposed publicly.",
  },
  {
    key: "events",
    label: "Events",
    sourceFile: "src/data/eventsData.ts",
    publicRoute: "/?page=events",
    ownerPortfolio: "Secretary General / responsible programme portfolio",
    publicationRule: "Publish confirmed institutional events and constitutional calendar records only.",
  },
  {
    key: "programmes",
    label: "Programmes & Projects",
    sourceFile: "src/data/workData.ts",
    publicRoute: "/?page=work",
    ownerPortfolio: "Relevant Executive portfolio",
    publicationRule: "Project status, dates, images and results must be supported by approved records.",
  },
  {
    key: "leadership",
    label: "Leadership",
    sourceFile: "src/data/leadershipData.ts",
    publicRoute: "/?page=leadership",
    ownerPortfolio: "Secretary General / Secretary for Information and Media",
    publicationRule: "Publish only confirmed officeholders and approved profile information.",
  },
  {
    key: "governance",
    label: "Governance Documents",
    sourceFile: "src/data/governanceArchive.ts",
    publicRoute: "/?page=governance",
    ownerPortfolio: "Executive Committee",
    publicationRule: "A document is public only where AYU has authorized its release under the Constitution.",
  },
  {
    key: "elections",
    label: "Election Information",
    sourceFile: "src/data/finalPlatformData.ts",
    publicRoute: "/?page=elections",
    ownerPortfolio: "Independent Electoral Committee during an electoral period",
    publicationRule: "Election notices, candidate information, debates and results appear only after formal issuance.",
  },
];

export function publicCollections() {
  return contentRegistry.map(({ key, label, publicRoute }) => ({ key, label, publicRoute }));
}

export type ImpactRecord = {
  slug: string;
  title: string;
  period: string;
  category: "Governance" | "Peace & Reconciliation" | "Education" | "Health" | "Culture & Sports" | "Community Development";
  summary: string;
  details: string[];
  relatedPage?: string;
  sourceLabel?: string;
  sourceUrl?: string;
};

export type SuccessStory = {
  slug: string;
  name: string;
  title: string;
  programmeArea: string;
  summary: string;
  story: string[];
  photo?: string;
  consentForPublication: boolean;
};

export const impactRecords: ImpactRecord[] = [
  {
    slug: "constitutional-renewal-2025",
    title: "AYU adopts the Amended 2025 Constitution",
    period: "2025",
    category: "Governance",
    summary: "The General Assembly amended and approved the Constitution, strengthening the rules that guide AYU membership, leadership, accountability, elections and community relationships.",
    details: [
      "The General Assembly approved the amended Constitution on 14 September 2025.",
      "The Constitution sets out the roles of the General Assembly, Executive Committee and Advisory Board and explains the responsibilities of AYU leadership.",
      "It also covers programmes, finances, elections, membership, community relationships and confidentiality.",
    ],
    relatedPage: "/?page=constitution",
  },
  {
    slug: "peace-reconciliation-committee-2026",
    title: "Peace and Reconciliation Committee established",
    period: "2026",
    category: "Peace & Reconciliation",
    summary: "AYU-Juba established a Peace and Reconciliation Committee to support dialogue, forgiveness, unity and peaceful coexistence among youth and the wider community.",
    details: [
      "Chairperson’s Order No. 04/2026 established the committee to support peace, unity, reconciliation, forgiveness and peaceful coexistence.",
      "The committee was asked to prepare a consultative meeting involving community and youth representatives.",
      "Its work also includes preparations, resource mobilization, keeping records of discussions and submitting recommendations and a final report.",
    ],
    relatedPage: "/?page=project&slug=peace-reconciliation-committee-2026",
    sourceLabel: "Akol Nyin TV public report",
    sourceUrl: "https://www.findglocal.com/SS/Juba/105260382145793/Akol-Nyin-Tv",
  },
  {
    slug: "public-support-for-gogrial-reconciliation-2026",
    title: "AYU supports reconciliation and peaceful coexistence in Gogrial",
    period: "2026",
    category: "Peace & Reconciliation",
    summary: "AYU-Juba welcomed the conclusion of a reconciliation process among Gogrial leaders, in line with the Union's commitment to peace and unity.",
    details: [
      "In June 2026, AYU-Juba welcomed a reconciliation process completed in Luonyaker Payam, Gogrial East County.",
      "The response reflected AYU's commitment to peace, reconciliation and peaceful community relations.",
      "The development added to AYU's wider efforts to encourage dialogue and unity.",
    ],
    sourceLabel: "Eye Radio",
    sourceUrl: "https://www.eyeradio.org/prominent-gogrial-leaders-conclude-months-long-reconciliation-process/",
  },
];

export const successStories: SuccessStory[] = [];

export const impactAreas = [
  "Education and youth development",
  "Peace and reconciliation",
  "Culture and heritage",
  "Sports and youth participation",
  "Health awareness and wellbeing",
  "Gender equality and social welfare",
  "Environment and sustainability",
  "Community development and accountability",
];

export function getImpactRecord(slug: string) {
  return impactRecords.find((record) => record.slug === slug);
}

export function getSuccessStory(slug: string) {
  return successStories.find((story) => story.slug === slug && story.consentForPublication);
}

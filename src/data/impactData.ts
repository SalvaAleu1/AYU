export type ImpactMetric = {
  label: string;
  value: string;
};

export type ImpactRecord = {
  slug: string;
  title: string;
  period: string;
  category: "Governance" | "Peace & Reconciliation" | "Education" | "Health" | "Culture & Sports" | "Community Development";
  summary: string;
  details: string[];
  metrics?: ImpactMetric[];
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
    title: "AYU strengthens its institutional framework through the Amended 2025 Constitution",
    period: "2025",
    category: "Governance",
    summary: "The Amended 2025 Constitution consolidated AYU's governance, membership, leadership, accountability, election and partnership framework.",
    details: [
      "The General Assembly approved the amended Constitution on 14 September 2025, providing AYU-Juba with a comprehensive institutional framework for its current term and future administrations.",
      "The Constitution defines three principal organs — the General Assembly, Executive Committee and Advisory Board — and sets out thirteen Executive Committee offices with defined responsibilities.",
      "It also formalizes programme governance, financial accountability, electoral administration, membership rules, institutional relationships and confidentiality obligations.",
    ],
    metrics: [
      { label: "Constitutional objectives", value: "10" },
      { label: "Executive Committee offices", value: "13" },
      { label: "Advisory Board members", value: "3" },
    ],
    relatedPage: "/#constitution",
  },
  {
    slug: "peace-reconciliation-committee-2026",
    title: "Peace and Reconciliation Committee established to advance dialogue and unity",
    period: "2026",
    category: "Peace & Reconciliation",
    summary: "AYU-Juba established a dedicated Peace and Reconciliation Committee to support dialogue, forgiveness, unity and harmonious coexistence among youth and community stakeholders.",
    details: [
      "Chairperson’s Order No. 04/2026 established the committee with responsibilities centred on peace, unity, reconciliation, forgiveness and harmonious coexistence.",
      "The committee was tasked with preparing a two-day consultative meeting bringing together community leaders, youth representatives, elders, Members of Parliament, intellectuals and leadership wings.",
      "The mandate includes resource mobilization, documentation of proceedings, recommendations and a final report to the Executive Committee.",
    ],
    relatedPage: "/?page=project&slug=peace-reconciliation-committee-2026",
    sourceLabel: "Akol Nyin TV public report",
    sourceUrl: "https://www.findglocal.com/SS/Juba/105260382145793/Akol-Nyin-Tv",
  },
  {
    slug: "public-support-for-gogrial-reconciliation-2026",
    title: "AYU publicly supports reconciliation and peaceful coexistence in Gogrial",
    period: "2026",
    category: "Peace & Reconciliation",
    summary: "AYU-Juba welcomed the conclusion of a months-long reconciliation process among prominent Gogrial leaders, reinforcing the Union's constitutional commitment to peace and social cohesion.",
    details: [
      "In June 2026, AYU-Juba publicly welcomed a reconciliation process completed in Luonyaker Payam, Gogrial East County.",
      "The Union's response aligned with its constitutional objectives to foster peace and reconciliation and to provide leadership in conflict management and peacebuilding.",
      "The public position adds to AYU's continuing institutional emphasis on dialogue, unity and peaceful community relations.",
    ],
    sourceLabel: "Eye Radio",
    sourceUrl: "https://www.eyeradio.org/prominent-gogrial-leaders-conclude-months-long-reconciliation-process/",
  },
];

export const successStories: SuccessStory[] = [];

export const impactAreas = [
  "Education and youth capacity",
  "Peace and reconciliation",
  "Culture and heritage",
  "Sports and youth participation",
  "Health awareness and wellbeing",
  "Gender equality and social welfare",
  "Environment and sustainability",
  "Community development and institutional accountability",
];

export function getImpactRecord(slug: string) {
  return impactRecords.find((record) => record.slug === slug);
}

export function getSuccessStory(slug: string) {
  return successStories.find((story) => story.slug === slug && story.consentForPublication);
}

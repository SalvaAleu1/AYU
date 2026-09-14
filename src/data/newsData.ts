export type NewsCategory = "News" | "Statement" | "Community" | "Education" | "Sports" | "Culture";
export type PublicationStatus = "published" | "draft" | "scheduled";

export type NewsArticle = {
  slug: string;
  title: string;
  category: NewsCategory;
  publicationStatus: PublicationStatus;
  publishedAt: string;
  displayDate: string;
  excerpt: string;
  body: string[];
  sourceLabel: string;
  sourceUrl?: string;
  featured?: boolean;
};

export const newsCategories: Array<"All" | NewsCategory> = [
  "All",
  "News",
  "Statement",
  "Community",
  "Education",
  "Sports",
  "Culture",
];

export const newsArticles: NewsArticle[] = [
  {
    slug: "ayu-welcomes-gogrial-reconciliation-2026",
    title: "AYU-Juba welcomes reconciliation among Gogrial leaders",
    category: "Community",
    publicationStatus: "published",
    publishedAt: "2026-06-12",
    displayDate: "12 June 2026",
    excerpt: "AYU-Juba welcomed the conclusion of a reconciliation process involving Gogrial military and political leaders in Warrap State.",
    body: [
      "AYU-Juba welcomed the conclusion of a reconciliation process among Gogrial leaders in Warrap State.",
      "The reconciliation was completed in Luonyaker Payam, Gogrial East County, where the leaders agreed to resolve past differences.",
      "AYU-Juba described the development as a positive step for peace, unity and better relations in the wider community.",
    ],
    sourceLabel: "Eye Radio",
    sourceUrl: "https://www.eyeradio.org/prominent-gogrial-leaders-conclude-months-long-reconciliation-process/",
    featured: true,
  },
  {
    slug: "peace-reconciliation-committee-established-2026",
    title: "AYU-Juba establishes Peace and Reconciliation Committee",
    category: "News",
    publicationStatus: "published",
    publishedAt: "2026-05-22",
    displayDate: "22 May 2026",
    excerpt: "Chairperson’s Order No. 04/2026 established an AYU committee to support peace, unity, reconciliation, forgiveness and peaceful coexistence.",
    body: [
      "Chairperson’s Order No. 04/2026 established the AYU Peace and Reconciliation Committee.",
      "The committee focuses on peace, unity, reconciliation, forgiveness and peaceful coexistence among youth and the wider community.",
      "Its work includes preparing a consultative meeting, bringing together community and youth representatives, supporting preparations, mobilizing resources, keeping records of discussions and submitting recommendations and a final report.",
    ],
    sourceLabel: "Akol Nyin TV public report",
    sourceUrl: "https://www.findglocal.com/SS/Juba/105260382145793/Akol-Nyin-Tv",
  },
  {
    slug: "ayu-statement-kuajok-community-elections-2024",
    title: "AYU-Juba calls for peaceful and fair Apuk Community elections in Kuajok",
    category: "Statement",
    publicationStatus: "published",
    publishedAt: "2024-09-26",
    displayDate: "26 September 2024",
    excerpt: "AYU-Juba issued a public statement supporting peaceful, free and fair community elections in Kuajok and encouraging democratic participation.",
    body: [
      "Ahead of the Apuk Community elections in Kuajok scheduled for 28 September 2024, AYU-Juba issued a public statement supporting a peaceful, free and fair process.",
      "The statement linked democratic participation with peace, unity and development while encouraging respect for the common interest of the community.",
      "AYU-Juba also encouraged other Apuk community branches to strengthen peaceful and democratic leadership practices.",
    ],
    sourceLabel: "AYU-Juba public statement archive",
    sourceUrl: "https://www.scribd.com/document/773510369/Apuk-Youth-Union-in-Juba",
  },
];

export const publishedNewsArticles = newsArticles
  .filter((article) => article.publicationStatus === "published")
  .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));

export function getNewsArticle(slug: string) {
  return publishedNewsArticles.find((article) => article.slug === slug);
}

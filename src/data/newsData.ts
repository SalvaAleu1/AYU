export type NewsCategory = "News" | "Statement" | "Community" | "Education" | "Sports" | "Culture";

export type NewsArticle = {
  slug: string;
  title: string;
  category: NewsCategory;
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
    title: "AYU-Juba welcomes reconciliation among prominent Gogrial leaders",
    category: "Community",
    publishedAt: "2026-06-12",
    displayDate: "12 June 2026",
    excerpt: "Apuk Youth Union in Juba welcomed the conclusion of a months-long reconciliation process involving prominent Gogrial military and political leaders in Warrap State.",
    body: [
      "Apuk Youth Union in Juba welcomed the conclusion of a months-long reconciliation process among prominent Gogrial leaders in Warrap State.",
      "The reconciliation was finalized in Luonyaker Payam, Gogrial East County, and brought together senior military and political figures who agreed to resolve past differences.",
      "AYU-Juba Chairperson Agany Geng Ayiei publicly welcomed the development as a positive step for peace, unity and harmonious relations within the wider community.",
    ],
    sourceLabel: "Eye Radio",
    sourceUrl: "https://www.eyeradio.org/prominent-gogrial-leaders-conclude-months-long-reconciliation-process/",
    featured: true,
  },
  {
    slug: "peace-reconciliation-committee-established-2026",
    title: "AYU-Juba establishes Peace and Reconciliation Committee",
    category: "News",
    publishedAt: "2026-05-22",
    displayDate: "22 May 2026",
    excerpt: "Chairperson’s Order No. 04/2026 established a committee mandated to promote peace, unity, reconciliation, forgiveness and harmonious coexistence among youth.",
    body: [
      "The Chairperson of Apuk Youth Union in Juba, Agany Geng Ayiei, issued Chairperson’s Order No. 04/2026 establishing the AYU Peace and Reconciliation Committee.",
      "The committee’s mandate focuses on peace, unity, reconciliation, forgiveness and harmonious coexistence among youth in the community.",
      "Its responsibilities include preparing a two-day consultative meeting involving community leaders, youth representatives, elders, Members of Parliament, intellectuals and leadership wings; mobilizing resources; documenting proceedings; and submitting recommendations and a final report to the Executive Committee.",
    ],
    sourceLabel: "Akol Nyin TV public report",
    sourceUrl: "https://www.findglocal.com/SS/Juba/105260382145793/Akol-Nyin-Tv",
  },
  {
    slug: "ayu-statement-kuajok-community-elections-2024",
    title: "AYU-Juba calls for peaceful and fair Apuk Community elections in Kuajok",
    category: "Statement",
    publishedAt: "2024-09-26",
    displayDate: "26 September 2024",
    excerpt: "AYU-Juba issued a public statement supporting peaceful, free and fair community elections in Kuajok and encouraging democratic participation across Apuk community branches.",
    body: [
      "Ahead of the Apuk Community elections in Kuajok scheduled for 28 September 2024, the leadership of Apuk Youth Union in Juba issued a public statement wishing the process success and emphasizing peaceful, free and fair elections.",
      "The statement presented democratic participation as an important means of advancing peace, unity and development while respecting the common interest of the community.",
      "AYU-Juba also encouraged other Apuk community branches to strengthen democratic leadership practices and wished the chairmanship candidates success in the electoral process.",
    ],
    sourceLabel: "AYU-Juba public statement archive",
    sourceUrl: "https://www.scribd.com/document/773510369/Apuk-Youth-Union-in-Juba",
  },
];

export function getNewsArticle(slug: string) {
  return newsArticles.find((article) => article.slug === slug);
}

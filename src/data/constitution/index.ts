import { chapter1Articles } from "./chapter1";
import { chapter2Articles } from "./chapter2";
import { chapter3Articles } from "./chapter3";
import { chapter4Articles } from "./chapter4";
import { chapter5Articles } from "./chapter5";
import { chapter6Articles } from "./chapter6";
import { chapter7Articles } from "./chapter7";
import { chapter8Articles } from "./chapter8";
import { constitutionPreamble } from "./preamble";
import type { ConstitutionChapter } from "./types";

export { constitutionPreamble };
export type { ConstitutionArticle, ConstitutionChapter } from "./types";

export const constitutionMeta = {
  title: "Constitution of Apuk Youth Union in Juba",
  edition: "Amended 2025",
  approvedDate: "14 September 2025",
  signedBy: "Agany Geng Ayiei",
  totalArticles: 64,
  totalChapters: 8,
};

export const constitutionChapters: ConstitutionChapter[] = [
  { id: "chapter-1", roman: "I", title: "Preliminary Provisions", articles: chapter1Articles },
  { id: "chapter-2", roman: "II", title: "Membership of the Union", articles: chapter2Articles },
  { id: "chapter-3", roman: "III", title: "Organs & Structure of the Union", articles: chapter3Articles },
  { id: "chapter-4", roman: "IV", title: "Meeting of the Union", articles: chapter4Articles },
  { id: "chapter-5", roman: "V", title: "Finances of the Union", articles: chapter5Articles },
  { id: "chapter-6", roman: "VI", title: "Election", articles: chapter6Articles },
  { id: "chapter-7", roman: "VII", title: "Tenure and Oath of Office", articles: chapter7Articles },
  { id: "chapter-8", roman: "VIII", title: "Miscellaneous Provisions", articles: chapter8Articles },
];

export const constitutionArticles = constitutionChapters.flatMap((chapter) =>
  chapter.articles.map((article) => ({ ...article, chapterId: chapter.id, chapterRoman: chapter.roman, chapterTitle: chapter.title })),
);

export function getConstitutionArticle(number: number) {
  return constitutionArticles.find((article) => article.number === number);
}

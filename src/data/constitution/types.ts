export type ConstitutionArticle = {
  number: number;
  title: string;
  page: number;
  body: string;
};

export type ConstitutionChapter = {
  id: string;
  roman: string;
  title: string;
  articles: ConstitutionArticle[];
};

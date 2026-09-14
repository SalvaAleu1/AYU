import { events } from "./eventsData";
import { publishedNewsArticles } from "./newsData";
import { verifiedProjects } from "./workData";

export type NewsItem = {
  id: string;
  title: string;
  category: string;
  publishedAt: string;
  excerpt: string;
};

export type EventItem = {
  id: string;
  title: string;
  date: string;
  venue: string;
};

export type GalleryItem = {
  id: string;
  src: string;
  alt: string;
};

export type FeaturedProject = {
  title: string;
  summary: string;
  href: string;
} | null;

export const newsItems: NewsItem[] = publishedNewsArticles.slice(0, 3).map((article) => ({
  id: article.slug,
  title: article.title,
  category: article.category,
  publishedAt: article.displayDate,
  excerpt: article.excerpt,
}));

export const eventItems: EventItem[] = events
  .filter((event) => event.status === "upcoming")
  .map((event) => ({
    id: event.slug,
    title: event.title,
    date: event.displayDate,
    venue: event.location ?? "",
  }));

export const galleryItems: GalleryItem[] = [];

const featured = verifiedProjects[0];
export const featuredProject: FeaturedProject = featured
  ? {
      title: featured.title,
      summary: featured.summary,
      href: `/?page=project&slug=${featured.slug}`,
    }
  : null;

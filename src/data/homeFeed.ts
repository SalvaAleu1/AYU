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

// Homepage feed sections are rendered only when verified AYU content exists.
// Keeping these collections empty prevents fabricated news, events, projects or impact claims.
export const newsItems: NewsItem[] = [];
export const eventItems: EventItem[] = [];
export const galleryItems: GalleryItem[] = [];
export const featuredProject: FeaturedProject = null;

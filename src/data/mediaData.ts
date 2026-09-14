export type MediaCategory = "Publications" | "Press Resources" | "Downloads" | "Photos" | "Videos" | "Speeches";

export type MediaResource = {
  id: string;
  title: string;
  category: MediaCategory;
  description: string;
  href: string;
  external?: boolean;
  download?: boolean;
};

export const mediaCategories: Array<"All" | MediaCategory> = [
  "All",
  "Publications",
  "Press Resources",
  "Downloads",
  "Photos",
  "Videos",
  "Speeches",
];

export const mediaResources: MediaResource[] = [
  {
    id: "official-ayu-emblem",
    title: "Official AYU-Juba emblem",
    category: "Downloads",
    description: "The approved Apuk Youth Union in Juba emblem used on the official website and AYU communications.",
    href: "/ayu-logo.webp",
    download: true,
  },
  {
    id: "identity-symbols",
    title: "AYU identity, logo and symbols",
    category: "Press Resources",
    description: "The meaning of the hawk, handshake, green background, stars and AYU motto.",
    href: "/?page=identity",
  },
  {
    id: "news-communications",
    title: "News & Updates",
    category: "Press Resources",
    description: "AYU-Juba news, statements and community updates.",
    href: "/?page=news",
  },
  {
    id: "constitution-2025",
    title: "Constitution of Apuk Youth Union in Juba — Amended 2025",
    category: "Publications",
    description: "The AYU Constitution covering its purpose, membership, leadership, finances, elections and community relationships.",
    href: "/?page=constitution",
  },
];

export function mediaResourcesFor(category: "All" | MediaCategory, query: string) {
  const normalized = query.trim().toLowerCase();
  return mediaResources.filter((resource) => {
    const matchesCategory = category === "All" || resource.category === category;
    const matchesQuery = !normalized || `${resource.title} ${resource.description} ${resource.category}`.toLowerCase().includes(normalized);
    return matchesCategory && matchesQuery;
  });
}

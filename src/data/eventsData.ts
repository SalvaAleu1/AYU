export type EventCategory = "Governance" | "Training" | "Sports" | "Culture" | "Health" | "Community";
export type EventStatus = "upcoming" | "past" | "cancelled";

export type AYUEvent = {
  slug: string;
  title: string;
  category: EventCategory;
  status: EventStatus;
  startDate: string;
  displayDate: string;
  endDate?: string;
  time?: string;
  location?: string;
  organizer?: string;
  summary: string;
  description: string[];
  registrationUrl?: string;
  relatedPage?: string;
};

export const constitutionalCalendar = [
  {
    title: "Executive Committee meetings",
    cadence: "Regular meetings",
    description: "The Executive Committee meets during the year and may also meet when urgent matters arise.",
  },
  {
    title: "General Assembly — Mid-year meeting",
    cadence: "Each year",
    description: "The Constitution provides for a mid-year General Assembly meeting.",
  },
  {
    title: "General Assembly — End-year meeting",
    cadence: "Each year",
    description: "The Constitution provides for an end-year General Assembly meeting, including presentation of the audit report.",
  },
  {
    title: "General Assembly — Extraordinary meeting",
    cadence: "When needed",
    description: "An extraordinary General Assembly meeting may be called when necessary.",
  },
];

export const events: AYUEvent[] = [
  {
    slug: "amended-constitution-approved-2025",
    title: "Approval of the Amended 2025 AYU Constitution",
    category: "Governance",
    status: "past",
    startDate: "2025-09-14",
    displayDate: "14 September 2025",
    organizer: "Apuk Youth Union in Juba",
    summary: "The General Assembly amended and approved the Constitution of Apuk Youth Union in Juba on 14 September 2025.",
    description: [
      "The General Assembly amended and approved the Constitution of Apuk Youth Union in Juba on 14 September 2025.",
      "The Constitution sets out AYU's vision, mission, values, membership, leadership, meetings, finances, elections, accountability and community relationships.",
      "After its approval by the General Assembly, the Constitution was signed into law by the serving Chairperson.",
    ],
    relatedPage: "/?page=constitution",
  },
];

export function getEvent(slug: string) {
  return events.find((event) => event.slug === slug);
}

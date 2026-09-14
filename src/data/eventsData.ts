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
    cadence: "Quarterly",
    description: "The Executive Committee is required to hold quarterly meetings each year, with emergency meetings permitted when urgent matters arise.",
  },
  {
    title: "General Assembly — Mid-year meeting",
    cadence: "Mandatory each year",
    description: "The Constitution requires a mid-year meeting of the General Assembly.",
  },
  {
    title: "General Assembly — End-year meeting",
    cadence: "Mandatory each year",
    description: "The Constitution requires an end-year General Assembly meeting, at which auditors present their annual report.",
  },
  {
    title: "General Assembly — Extraordinary meeting",
    cadence: "When required",
    description: "An extraordinary General Assembly meeting may be convened when circumstances demand it.",
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
    summary: "The General Assembly approved the amended Constitution of Apuk Youth Union in Juba, establishing the current governance framework of the Union.",
    description: [
      "The amended Constitution of Apuk Youth Union in Juba was approved by the General Assembly on 14 September 2025.",
      "The Constitution defines AYU's vision, mission, values, membership, organs, Executive Committee, Advisory Board, meetings, finances, elections, tenure, accountability and relationships with other Apuk institutions.",
      "The document was signed into law by Chairperson Agany Geng Ayiei and remains the principal governance foundation for AYU-Juba.",
    ],
    relatedPage: "/#constitution",
  },
];

export function getEvent(slug: string) {
  return events.find((event) => event.slug === slug);
}

export type LeadershipProfile = {
  slug: string;
  name: string;
  role: string;
  photo?: string;
  shortBio?: string;
  biography?: string;
  responsibilities: string[];
  isCurrent: boolean;
};

export type ExecutiveRole = {
  title: string;
  summary: string;
  responsibilities: string[];
};

export const currentLeadership: LeadershipProfile[] = [
  {
    slug: "agany-geng-ayiei",
    name: "Agany Geng Ayiei",
    role: "Chairperson",
    shortBio: "Chairperson of Apuk Youth Union in Juba, serving the Union and representing AYU-Juba in public affairs.",
    biography: "Agany Geng Ayiei serves as Chairperson of Apuk Youth Union in Juba. The General Assembly amended and approved the Constitution in 2025, and he signed it into law in his role as Chairperson. He has continued to serve publicly as AYU-Juba Chairperson in 2026.",
    responsibilities: [
      "Heads the Executive Committee and oversees the proper management of the Union.",
      "Presides over meetings of the General Assembly and Executive Committee.",
      "Supervises the work of the Executive Committee.",
      "Represents AYU-Juba in public meetings and official matters.",
      "Acts as principal signatory to official documents and Union bank accounts.",
    ],
    isCurrent: true,
  },
];

export const constitutionSignatory = {
  name: "Agany Geng Ayiei",
  role: "Chairperson of Apuk Youth Union in Juba",
  context: "The General Assembly amended and approved the Constitution in 2025. It was then signed into law by the Chairperson.",
  date: "14 September 2025",
};

export const executiveRoles: ExecutiveRole[] = [
  {
    title: "Chairperson",
    summary: "Heads the Executive Committee and oversees the management and public representation of AYU-Juba.",
    responsibilities: [
      "Presides over meetings of the General Assembly and Executive Committee.",
      "Supervises the work of the Executive Committee.",
      "Represents AYU-Juba in public meetings.",
      "Acts as principal signatory to official documents and Union bank accounts.",
    ],
  },
  {
    title: "Deputy Chairperson",
    summary: "Supports the Chairperson and acts in the office when the Chairperson is absent.",
    responsibilities: [
      "Deputizes for and assists the Chairperson.",
      "May act as Chairperson in the Chairperson's absence.",
      "Performs functions assigned by the Chairperson.",
    ],
  },
  {
    title: "Secretary General",
    summary: "Leads AYU administration, records, correspondence, meeting documentation and coordination of activities.",
    responsibilities: [
      "Maintains administrative records and correspondence.",
      "Records minutes and serves as secretary of the Union.",
      "Coordinates programme execution with the secretariat.",
      "Prepares general reports for the General Assembly.",
    ],
  },
  {
    title: "Secretary for Finance and Planning",
    summary: "Keeps financial records, receives and safeguards Union funds, supports financial planning and serves as a bank-account co-signatory.",
    responsibilities: [
      "Keeps proper financial documents and records.",
      "Receives funds and issues receipts on behalf of the Union.",
      "Supports preparation of financial policies and reports.",
      "Serves as a co-signatory to Union bank accounts.",
    ],
  },
  {
    title: "Secretary for Information and Media",
    summary: "Leads AYU public communication, media, social media and website work.",
    responsibilities: [
      "Acts as spokesperson for AYU-Juba.",
      "Circulates official information to Executive Committee and General Assembly members.",
      "Maintains cultural documents and valuable assets of the Union.",
      "Manages the Union's social-media accounts and website.",
    ],
  },
  {
    title: "Secretary for External Affairs",
    summary: "Leads AYU's external relations with other communities, unions and associations.",
    responsibilities: [
      "Manages external-affairs relationships.",
      "Represents the Union in external-affairs matters.",
      "Carries out related assignments from the Chairperson.",
    ],
  },
  {
    title: "Secretary for Legal Affairs",
    summary: "Provides legal guidance, explains Union laws and represents AYU in legal matters.",
    responsibilities: [
      "Advises on interpretation of the Constitution and other Union laws.",
      "Provides legal assistance to the Union.",
      "Represents AYU in legal matters.",
      "Heads the disciplinary committee.",
    ],
  },
  {
    title: "Secretary for Education and Trainings",
    summary: "Leads AYU education and training activities and supports recognition of learners.",
    responsibilities: [
      "Organizes education and training programmes.",
      "Organizes recognition activities for students.",
      "Maintains education-related statistics through available data.",
      "Coordinates activities related to education observances.",
    ],
  },
  {
    title: "Secretary for Projects and Logistics",
    summary: "Supports AYU projects, stakeholder engagement and management of logistical resources.",
    responsibilities: [
      "Supports project policy formulation and implementation.",
      "Represents Union interests in development discussions with stakeholders.",
      "Communicates relevant project and policy information to members.",
      "Oversees logistical items of the Union.",
    ],
  },
  {
    title: "Secretary for Health",
    summary: "Coordinates health activities, first-aid awareness and public-health information.",
    responsibilities: [
      "Organizes health training and first-aid activities.",
      "Promotes awareness on HIV/AIDS and communicable diseases.",
      "Supports collection of community-health statistics.",
      "Acts as focal person for medical personnel organizations.",
    ],
  },
  {
    title: "Secretary for Culture and Sports",
    summary: "Leads sports, youth and cultural activities that support participation, talent and community identity.",
    responsibilities: [
      "Coordinates sports and youth issues.",
      "Organizes youth programmes and sports activities.",
      "Initiates cooperative group programmes.",
      "Organizes cultural activities including drama and traditional dance.",
    ],
  },
  {
    title: "Secretary for Gender, Social Welfare, Peace and Reconciliation",
    summary: "Leads gender inclusion, social-welfare support and peace and reconciliation activities.",
    responsibilities: [
      "Supports general social-welfare and youth services.",
      "Promotes equality and inclusive representation.",
      "Organizes relevant practical training for social-welfare activities.",
      "Coordinates peace and reconciliation activities.",
    ],
  },
  {
    title: "Deputy Secretary for Finance and Planning",
    summary: "Supports the Secretary for Finance and Planning and acts in that office when required.",
    responsibilities: [
      "Assists the Secretary for Finance and Planning.",
      "Acts for the Secretary for Finance and Planning when absent.",
      "Performs related duties assigned by the Chairperson.",
    ],
  },
];

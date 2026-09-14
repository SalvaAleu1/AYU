export type WorkPillar = {
  slug: string;
  title: string;
  summary: string;
  mandate: string;
  relatedObjectives: string[];
  relatedOffices: string[];
};

export type ProjectRecord = {
  slug: string;
  title: string;
  pillarSlug: string;
  status: "planned" | "active" | "completed";
  summary: string;
  description: string;
  startDate?: string;
  endDate?: string;
  location?: string;
  beneficiaries?: string;
  outcomes?: string[];
  coverImage?: string;
  gallery?: Array<{ src: string; alt: string }>;
  reports?: Array<{ label: string; href: string }>;
};

export const workPillars: WorkPillar[] = [
  {
    slug: "education-training",
    title: "Education & Training",
    summary: "Building knowledge, practical skills and institutional capacity among Apuk youth.",
    mandate: "AYU's Constitution directs the Union to build members' capacity in organizational development, programming and management, while the education portfolio is responsible for education and training programmes.",
    relatedObjectives: [
      "Capacity building in organizational development, programming and management.",
      "Education, mentorship and youth development.",
    ],
    relatedOffices: ["Secretary for Education and Trainings", "Secretary General"],
  },
  {
    slug: "peace-reconciliation",
    title: "Peace & Reconciliation",
    summary: "Promoting dialogue, peaceful coexistence, conflict management and social cohesion.",
    mandate: "AYU is mandated to foster peace and reconciliation among Apuk youth and neighbouring communities and to provide leadership in conflict management and peacebuilding.",
    relatedObjectives: [
      "Peace and reconciliation among Apuk youth and neighbouring communities.",
      "Leadership in conflict management and peacebuilding.",
    ],
    relatedOffices: ["Secretary for Gender, Social Welfare, Peace and Reconciliation"],
  },
  {
    slug: "youth-empowerment",
    title: "Youth Empowerment",
    summary: "Strengthening participation, self-reliance, leadership and opportunities for young people.",
    mandate: "The Union's mission is to educate, train, mentor, grow and develop youth for the transformation of the Apuk community, supported by constitutional commitments to self-help, hard work and cooperation.",
    relatedObjectives: [
      "Unity, self-help, hard work, cooperation and tolerance.",
      "Capacity development and youth participation.",
    ],
    relatedOffices: ["Secretary General", "Secretary for Projects and Logistics"],
  },
  {
    slug: "culture-heritage",
    title: "Culture & Heritage",
    summary: "Preserving, developing and transmitting Apuk cultural heritage and Jieng linguistic identity.",
    mandate: "AYU is constitutionally required to promote and develop the cultural heritage that defines Apuk identity and to promote Jieng linguistic and cultural activities among young people.",
    relatedObjectives: [
      "Promotion and development of Apuk cultural heritage.",
      "Promotion of Jieng linguistic and cultural activities.",
    ],
    relatedOffices: ["Secretary for Culture and Sports"],
  },
  {
    slug: "sports",
    title: "Sports",
    summary: "Using sport to build participation, talent, healthy activity and community unity.",
    mandate: "The Constitution includes sports among AYU's core objectives and assigns the Culture and Sports portfolio responsibility for youth programmes and sports activities.",
    relatedObjectives: [
      "Promotion of sports among Apuk youth.",
      "Youth participation and community unity through sport.",
    ],
    relatedOffices: ["Secretary for Culture and Sports"],
  },
  {
    slug: "health-wellbeing",
    title: "Health & Wellbeing",
    summary: "Advancing health awareness, first-aid knowledge and prevention of communicable diseases.",
    mandate: "AYU is mandated to promote community public health through awareness. The Health portfolio is responsible for health programmes, first-aid training and awareness on communicable diseases.",
    relatedObjectives: [
      "Community public-health awareness.",
      "Health training, first aid and prevention awareness.",
    ],
    relatedOffices: ["Secretary for Health"],
  },
  {
    slug: "gender-social-welfare",
    title: "Gender & Social Welfare",
    summary: "Advancing equality, women's empowerment, girl-child education and inclusive social welfare.",
    mandate: "AYU's Constitution commits the Union to gender equality through women's empowerment and girl-child education and assigns equality and social-welfare responsibilities to the relevant Executive portfolio.",
    relatedObjectives: [
      "Gender equality and women's empowerment.",
      "Girl-child education and social-welfare support.",
    ],
    relatedOffices: ["Secretary for Gender, Social Welfare, Peace and Reconciliation"],
  },
  {
    slug: "environment-sustainability",
    title: "Environment & Sustainability",
    summary: "Promoting responsible environmental management and sustainable use of community resources.",
    mandate: "The Constitution requires sustainable development with emphasis on sound environmental management and calls for protection of land, air and water resources as well as stronger reforestation awareness.",
    relatedObjectives: [
      "Sustainable development and sound environmental management.",
      "Protection of natural resources for present and future generations.",
    ],
    relatedOffices: ["Secretary for Projects and Logistics"],
  },
  {
    slug: "community-development",
    title: "Community Development",
    summary: "Mobilizing people, partnerships and resources for practical community initiatives.",
    mandate: "AYU may mobilize resources for programme implementation and establish organizing committees for specific projects and programmes under the supervision of the Chairperson and Executive Committee.",
    relatedObjectives: [
      "Resource mobilization for programme implementation.",
      "Practical initiatives aligned with AYU's vision, mission and Constitution.",
    ],
    relatedOffices: ["Chairperson", "Secretary for Projects and Logistics", "Secretary for Finance and Planning"],
  },
];

// Only verified AYU project records should be published here.
export const verifiedProjects: ProjectRecord[] = [];

export const projectGovernance = [
  {
    step: "01",
    title: "Organizing Committee",
    description: "The Chairperson may establish a committee for a specific project or programme, taking competence, diversity, inclusivity, experience and commitment into account.",
  },
  {
    step: "02",
    title: "Plan & Implement",
    description: "The committee plans, coordinates and implements its assigned work and mobilizes resources for delivery.",
  },
  {
    step: "03",
    title: "Report Progress",
    description: "Progress, challenges and achievements are reported to the Executive Committee while the work remains aligned with AYU's vision, mission and Constitution.",
  },
  {
    step: "04",
    title: "Close & Account",
    description: "On completion, the committee submits financial and narrative reports before its mandate is formally concluded or extended.",
  },
];

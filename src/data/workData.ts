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
  status: "announced" | "planned" | "active" | "completed";
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
    summary: "Helping young people build knowledge and practical skills through learning, training and mentorship.",
    mandate: "AYU supports learning, training, mentorship and skills development for its members and the wider youth community.",
    relatedObjectives: [
      "Build members' skills and capacity.",
      "Support education, mentorship and youth development.",
    ],
    relatedOffices: ["Secretary for Education and Trainings", "Secretary General"],
  },
  {
    slug: "peace-reconciliation",
    title: "Peace & Reconciliation",
    summary: "Promoting dialogue, peaceful coexistence, conflict management and social cohesion.",
    mandate: "AYU works to strengthen peace and reconciliation among Apuk youth and neighbouring communities and to support peaceful ways of resolving conflict.",
    relatedObjectives: [
      "Promote peace and reconciliation.",
      "Support conflict management and peacebuilding.",
    ],
    relatedOffices: ["Secretary for Gender, Social Welfare, Peace and Reconciliation"],
  },
  {
    slug: "youth-empowerment",
    title: "Youth Empowerment",
    summary: "Strengthening participation, self-reliance, leadership and opportunities for young people.",
    mandate: "AYU works to educate, train, mentor and develop young people while encouraging self-help, hard work, cooperation and responsible leadership.",
    relatedObjectives: [
      "Promote unity, self-help, hard work and cooperation.",
      "Support youth development and participation.",
    ],
    relatedOffices: ["Secretary General", "Secretary for Projects and Logistics"],
  },
  {
    slug: "culture-heritage",
    title: "Culture & Heritage",
    summary: "Preserving and promoting Apuk culture, Jieng language, traditions and identity.",
    mandate: "AYU promotes Apuk cultural heritage and supports Jieng language and cultural activities among young people.",
    relatedObjectives: [
      "Promote Apuk cultural heritage.",
      "Support Jieng language and cultural activities.",
    ],
    relatedOffices: ["Secretary for Culture and Sports"],
  },
  {
    slug: "sports",
    title: "Sports",
    summary: "Using sport to build participation, talent, healthy activity and community unity.",
    mandate: "AYU promotes sports and youth activities that strengthen participation, talent and unity.",
    relatedObjectives: [
      "Promote sports among Apuk youth.",
      "Encourage participation and unity through sport.",
    ],
    relatedOffices: ["Secretary for Culture and Sports"],
  },
  {
    slug: "health-wellbeing",
    title: "Health & Wellbeing",
    summary: "Promoting health awareness, first-aid knowledge and disease prevention.",
    mandate: "AYU supports community health awareness, first-aid knowledge and prevention of communicable diseases.",
    relatedObjectives: [
      "Promote community health awareness.",
      "Support health training, first aid and prevention awareness.",
    ],
    relatedOffices: ["Secretary for Health"],
  },
  {
    slug: "gender-social-welfare",
    title: "Gender & Social Welfare",
    summary: "Promoting equality, women's empowerment, girl-child education and social welfare.",
    mandate: "AYU supports gender equality, women's empowerment, girl-child education and social welfare within the community.",
    relatedObjectives: [
      "Promote gender equality and women's empowerment.",
      "Support girl-child education and social welfare.",
    ],
    relatedOffices: ["Secretary for Gender, Social Welfare, Peace and Reconciliation"],
  },
  {
    slug: "environment-sustainability",
    title: "Environment & Sustainability",
    summary: "Encouraging responsible care for the environment and community resources.",
    mandate: "AYU promotes sustainable development, responsible use of natural resources and awareness of environmental protection and reforestation.",
    relatedObjectives: [
      "Promote sustainable development and environmental care.",
      "Protect natural resources for present and future generations.",
    ],
    relatedOffices: ["Secretary for Projects and Logistics"],
  },
  {
    slug: "community-development",
    title: "Community Development",
    summary: "Bringing people, partnerships and resources together for practical community work.",
    mandate: "AYU may mobilize resources and form committees to carry out projects and programmes that support its mission and the needs of the community.",
    relatedObjectives: [
      "Mobilize resources for AYU programmes.",
      "Carry out practical work that supports AYU's mission and vision.",
    ],
    relatedOffices: ["Chairperson", "Secretary for Projects and Logistics", "Secretary for Finance and Planning"],
  },
];

export const verifiedProjects: ProjectRecord[] = [
  {
    slug: "peace-reconciliation-committee-2026",
    title: "AYU Peace and Reconciliation Committee",
    pillarSlug: "peace-reconciliation",
    status: "announced",
    summary: "An AYU initiative focused on peace, unity, reconciliation, forgiveness and peaceful coexistence among youth and the wider community.",
    description: "Chairperson's Order No. 04/2026 established the AYU Peace and Reconciliation Committee. The committee was asked to prepare a consultative meeting, bring together community and youth representatives, support preparations, mobilize resources, keep records of the discussions and submit recommendations and a final report to the Executive Committee.",
    startDate: "May 2026",
    beneficiaries: "Apuk youth and the wider community",
  },
];

export const projectGovernance = [
  {
    step: "01",
    title: "Form a project team",
    description: "AYU may form a committee for a specific project or programme and choose members based on their skills, experience, commitment and ability to work with others.",
  },
  {
    step: "02",
    title: "Plan and carry out the work",
    description: "The committee plans the work, coordinates activities and uses available resources responsibly.",
  },
  {
    step: "03",
    title: "Share progress",
    description: "The committee reports progress, challenges and achievements to the Executive Committee.",
  },
  {
    step: "04",
    title: "Complete and report",
    description: "When the work is finished, the committee submits its final financial and activity reports.",
  },
];

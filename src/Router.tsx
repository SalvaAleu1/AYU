import { useEffect, type ReactNode } from "react";
import App from "./App";
import BackToTop from "./components/BackToTop";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import { getEvent } from "./data/eventsData";
import { getImpactRecord, getSuccessStory } from "./data/impactData";
import { currentLeadership } from "./data/leadershipData";
import { getNewsArticle } from "./data/newsData";
import { verifiedProjects, workPillars } from "./data/workData";
import AboutPage from "./pages/AboutPage";
import AdvisoryHistoryPage from "./pages/AdvisoryHistoryPage";
import ChairpersonsHistoryPage from "./pages/ChairpersonsHistoryPage";
import ConstitutionReaderPage from "./pages/ConstitutionReaderPage";
import EventPage from "./pages/EventPage";
import EventsPage from "./pages/EventsPage";
import {
  ContactPage,
  ElectionAdministrationPage,
  ElectionsPage,
  LegalPage,
  PartnersSupportPage,
  SearchPage,
  UtilitiesPage,
  YouthHubPage,
} from "./pages/FinalPlatformPages";
import GovernancePage from "./pages/GovernancePage";
import IdentityPage from "./pages/IdentityPage";
import ImpactPage from "./pages/ImpactPage";
import ImpactStoryPage from "./pages/ImpactStoryPage";
import LeaderProfilePage from "./pages/LeaderProfilePage";
import LeadershipPage from "./pages/LeadershipPage";
import MediaCentrePage from "./pages/MediaCentrePage";
import MembershipPage from "./pages/MembershipPage";
import NewsArticlePage from "./pages/NewsArticlePage";
import NewsPage from "./pages/NewsPage";
import ProgramPage from "./pages/ProgramPage";
import ProjectPage from "./pages/ProjectPage";
import SuccessStoryPage from "./pages/SuccessStoryPage";
import WorkPage from "./pages/WorkPage";

type SchemaType = "WebPage" | "NewsArticle" | "ProfilePage";

type PageMeta = {
  title: string;
  description: string;
  index?: boolean;
  schemaType?: SchemaType;
  datePublished?: string;
};

type ResolvedSeo = {
  meta: PageMeta;
  canonical: string;
};

const SITE_URL = "https://apukyouthunion.org";
const SITE_NAME = "Apuk Youth Union in Juba";
const SITE_SHORT_NAME = "AYU-Juba";
const SITE_LOGO = SITE_URL + "/ayu-logo.webp";

const defaultMeta: PageMeta = {
  title: "Apuk Youth Union in Juba | Official AYU-Juba Website",
  description: "Apuk Youth Union in Juba is a non-political organization that oversees youth activities ranging from addressing youth challenges to development and peace consolidation in Apuk Community (Gogrial East County), Warrap State.",
  schemaType: "WebPage",
};

const pageMeta: Record<string, PageMeta> = {
  about: { title: "About AYU | AYU-Juba", description: "Learn about AYU's mission, vision, values and objectives." },
  identity: { title: "Identity & Symbols | AYU-Juba", description: "See the official AYU emblem, motto and meaning of its symbols." },
  leadership: { title: "Leadership | AYU-Juba", description: "See AYU leadership roles and verified leadership records." },
  history: { title: "Advisory Board & History | AYU-Juba", description: "Learn about the Advisory Board and AYU leadership history." },
  "chairpersons-history": { title: "AYU Chairpersons Through the Years | AYU-Juba", description: "See the Chairpersons who have led Apuk Youth Union from its founding in 2005 to the current term." },
  work: { title: "Our Work | AYU-Juba", description: "Explore AYU programmes, projects and community work." },
  news: { title: "News & Updates | AYU-Juba", description: "Read AYU news, statements and community updates." },
  events: { title: "Events | AYU-Juba", description: "See AYU events and regular meeting information." },
  impact: { title: "Impact | AYU-Juba", description: "See important AYU milestones and community work." },
  media: { title: "Media Centre | AYU-Juba", description: "Find AYU publications, press resources and public downloads." },
  membership: { title: "Membership | AYU-Juba", description: "Learn about AYU membership, eligibility, rights, duties and registration." },
  governance: { title: "Governance & Transparency | AYU-Juba", description: "Learn how AYU is governed and how it handles accountability and public documents." },
  constitution: { title: "Constitution | AYU-Juba", description: "Search and read the Amended 2025 AYU Constitution." },
  elections: { title: "Elections | AYU-Juba", description: "Learn about the IEC, voter information and the AYU election process." },
  "election-administration": { title: "Election Administration | AYU-Juba", description: "Learn how the Independent Electoral Committee manages AYU elections." },
  "youth-hub": { title: "Apuk Youth Hub | AYU-Juba", description: "Find opportunities, scholarships, training, jobs, events and youth activities." },
  partners: { title: "Partners & Support | AYU-Juba", description: "See the community institutions AYU works with and ways to support its work." },
  contact: { title: "Contact AYU | AYU-Juba", description: "Find official ways to reach Apuk Youth Union in Juba." },
  search: { title: "Search | AYU-Juba", description: "Search information across the AYU website." },
  utilities: { title: "Website Tools | AYU-Juba", description: "Search, share and follow AYU updates." },
  privacy: { title: "Privacy Policy | AYU-Juba", description: "Read the AYU website Privacy Policy." },
  terms: { title: "Terms of Use | AYU-Juba", description: "Read the rules for using the AYU website." },
  accessibility: { title: "Accessibility | AYU-Juba", description: "Read AYU's website accessibility commitment." },
};

function buildRouteUrl(page: string, slug?: string) {
  const route = new URL(SITE_URL + "/");
  route.searchParams.set("page", page);
  if (slug) route.searchParams.set("slug", slug);
  return route.toString();
}

function invalidSeo(): ResolvedSeo {
  return {
    meta: {
      title: "Apuk Youth Union in Juba | AYU-Juba",
      description: defaultMeta.description,
      index: false,
      schemaType: "WebPage",
    },
    canonical: SITE_URL + "/",
  };
}

function resolveSeo(page: string | null, params: URLSearchParams): ResolvedSeo {
  if (!page) return { meta: defaultMeta, canonical: SITE_URL + "/" };

  const slug = params.get("slug")?.trim() ?? "";

  if (page === "leader") {
    const leader = currentLeadership.find((profile) => profile.slug === slug);
    if (!leader) return invalidSeo();
    return {
      meta: {
        title: leader.name + " — " + leader.role + " | AYU-Juba",
        description: leader.name + " serves as " + leader.role + " of Apuk Youth Union in Juba. View the office responsibilities and current leadership profile.",
        schemaType: "ProfilePage",
      },
      canonical: buildRouteUrl(page, slug),
    };
  }

  if (page === "program") {
    const programme = workPillars.find((item) => item.slug === slug);
    if (!programme) return invalidSeo();
    return {
      meta: {
        title: programme.title + " | Our Work | AYU-Juba",
        description: programme.summary,
        schemaType: "WebPage",
      },
      canonical: buildRouteUrl(page, slug),
    };
  }

  if (page === "project") {
    const project = verifiedProjects.find((item) => item.slug === slug);
    if (!project) return invalidSeo();
    return {
      meta: {
        title: project.title + " | AYU-Juba",
        description: project.summary,
        schemaType: "WebPage",
      },
      canonical: buildRouteUrl(page, slug),
    };
  }

  if (page === "news-article") {
    const article = getNewsArticle(slug);
    if (!article) return invalidSeo();
    return {
      meta: {
        title: article.title + " | AYU-Juba",
        description: article.excerpt,
        schemaType: "NewsArticle",
        datePublished: article.publishedAt,
      },
      canonical: buildRouteUrl(page, slug),
    };
  }

  if (page === "event") {
    const event = getEvent(slug);
    if (!event) return invalidSeo();
    return {
      meta: {
        title: event.title + " | AYU-Juba",
        description: event.summary,
        schemaType: "WebPage",
      },
      canonical: buildRouteUrl(page, slug),
    };
  }

  if (page === "impact-story") {
    const record = getImpactRecord(slug);
    if (!record) return invalidSeo();
    return {
      meta: {
        title: record.title + " | Impact | AYU-Juba",
        description: record.summary,
        schemaType: "WebPage",
      },
      canonical: buildRouteUrl(page, slug),
    };
  }

  if (page === "success-story") {
    const story = getSuccessStory(slug);
    if (!story) return invalidSeo();
    return {
      meta: {
        title: story.title + " | Success Story | AYU-Juba",
        description: story.summary,
        schemaType: "WebPage",
      },
      canonical: buildRouteUrl(page, slug),
    };
  }

  const meta = pageMeta[page];
  if (!meta) return invalidSeo();
  return { meta, canonical: buildRouteUrl(page) };
}

function setMeta(name: string, value: string) {
  let element = document.querySelector<HTMLMetaElement>('meta[name="' + name + '"]');
  if (!element) {
    element = document.createElement("meta");
    element.name = name;
    document.head.appendChild(element);
  }
  element.content = value;
}

function setPropertyMeta(property: string, value: string) {
  let element = document.querySelector<HTMLMetaElement>('meta[property="' + property + '"]');
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute("property", property);
    document.head.appendChild(element);
  }
  element.content = value;
}

function setCanonical(url: string) {
  let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!link) {
    link = document.createElement("link");
    link.rel = "canonical";
    document.head.appendChild(link);
  }
  link.href = url;
}

function setStructuredData(meta: PageMeta, canonical: string, page: string | null, params: URLSearchParams) {
  const organizationId = SITE_URL + "/#organization";
  const websiteId = SITE_URL + "/#website";
  const graph: Array<Record<string, unknown>> = [
    {
      "@type": "Organization",
      "@id": organizationId,
      name: SITE_NAME,
      alternateName: SITE_SHORT_NAME,
      url: SITE_URL + "/",
      logo: SITE_LOGO,
      slogan: "Together for Peace, Unity and Development",
      description: defaultMeta.description,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Juba",
        addressCountry: "SS",
      },
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: SITE_URL + "/",
      name: SITE_NAME,
      alternateName: SITE_SHORT_NAME,
      publisher: { "@id": organizationId },
      inLanguage: "en",
    },
  ];

  const pageNode: Record<string, unknown> = {
    "@type": meta.schemaType ?? "WebPage",
    "@id": canonical + "#webpage",
    url: canonical,
    name: meta.title,
    description: meta.description,
    isPartOf: { "@id": websiteId },
    about: { "@id": organizationId },
    inLanguage: "en",
  };

  const slug = params.get("slug")?.trim() ?? "";

  if (meta.schemaType === "NewsArticle") {
    const article = getNewsArticle(slug);
    if (article) {
      pageNode.headline = article.title;
      pageNode.datePublished = article.publishedAt;
      pageNode.publisher = { "@id": organizationId };
      pageNode.mainEntityOfPage = { "@id": canonical + "#webpage" };
    }
  } else if (meta.schemaType === "ProfilePage") {
    const leader = currentLeadership.find((profile) => profile.slug === slug);
    if (leader) {
      pageNode.mainEntity = {
        "@type": "Person",
        name: leader.name,
        jobTitle: leader.role,
        worksFor: { "@id": organizationId },
      };
    }
  } else if (page === "event") {
    const event = getEvent(slug);
    if (event) {
      const eventEntity: Record<string, unknown> = {
        "@type": "Event",
        name: event.title,
        description: event.summary,
        startDate: event.startDate,
        eventStatus: "https://schema.org/EventScheduled",
        organizer: { "@id": organizationId },
      };
      if (event.location) eventEntity.location = { "@type": "Place", name: event.location };
      pageNode.mainEntity = eventEntity;
    }
  }

  if (!page) pageNode.mainEntity = { "@id": organizationId };
  graph.push(pageNode);

  let script = document.querySelector<HTMLScriptElement>("#ayu-structured-data");
  if (!script) {
    script = document.createElement("script");
    script.id = "ayu-structured-data";
    script.type = "application/ld+json";
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify({ "@context": "https://schema.org", "@graph": graph });
}

function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteHeader />
      <main id="main-content">{children}</main>
      <SiteFooter />
      <BackToTop />
    </div>
  );
}

export default function Router() {
  const params = new URLSearchParams(window.location.search);
  const page = params.get("page");
  const slug = params.get("slug");

  useEffect(() => {
    const { meta, canonical } = resolveSeo(page, params);
    const shouldIndex = meta.index !== false && page !== "search" && page !== "utilities";
    const robots = shouldIndex ? "index,follow,max-image-preview:large" : "noindex,follow";

    document.title = meta.title;
    setMeta("description", meta.description);
    setMeta("robots", robots);
    setMeta("googlebot", robots);
    setMeta("twitter:card", "summary");
    setMeta("twitter:title", meta.title);
    setMeta("twitter:description", meta.description);
    setMeta("twitter:image", SITE_LOGO);
    setMeta("twitter:image:alt", "Apuk Youth Union in Juba logo");
    setPropertyMeta("og:type", meta.schemaType === "NewsArticle" ? "article" : "website");
    setPropertyMeta("og:site_name", SITE_NAME);
    setPropertyMeta("og:title", meta.title);
    setPropertyMeta("og:description", meta.description);
    setPropertyMeta("og:url", canonical);
    setPropertyMeta("og:image", SITE_LOGO);
    setPropertyMeta("og:image:alt", "Apuk Youth Union in Juba logo");
    setCanonical(canonical);

    const publishedMeta = document.querySelector<HTMLMetaElement>('meta[property="article:published_time"]');
    if (meta.datePublished) setPropertyMeta("article:published_time", meta.datePublished);
    else publishedMeta?.remove();

    setStructuredData(meta, canonical, page, params);
  }, [page, slug]);

  if (!page) return <App />;

  if (page === "about") return <PageShell><AboutPage /></PageShell>;
  if (page === "identity") return <PageShell><IdentityPage /></PageShell>;
  if (page === "leadership") return <PageShell><LeadershipPage /></PageShell>;
  if (page === "leader") return <PageShell><LeaderProfilePage slug={params.get("slug") ?? ""} /></PageShell>;
  if (page === "history") return <PageShell><AdvisoryHistoryPage /></PageShell>;
  if (page === "chairpersons-history") return <PageShell><ChairpersonsHistoryPage /></PageShell>;
  if (page === "work") return <PageShell><WorkPage /></PageShell>;
  if (page === "program") return <PageShell><ProgramPage slug={params.get("slug") ?? ""} /></PageShell>;
  if (page === "project") return <PageShell><ProjectPage slug={params.get("slug") ?? ""} /></PageShell>;
  if (page === "news") return <PageShell><NewsPage /></PageShell>;
  if (page === "news-article") return <PageShell><NewsArticlePage slug={params.get("slug") ?? ""} /></PageShell>;
  if (page === "events") return <PageShell><EventsPage /></PageShell>;
  if (page === "event") return <PageShell><EventPage slug={params.get("slug") ?? ""} /></PageShell>;
  if (page === "impact") return <PageShell><ImpactPage /></PageShell>;
  if (page === "impact-story") return <PageShell><ImpactStoryPage slug={params.get("slug") ?? ""} /></PageShell>;
  if (page === "success-story") return <PageShell><SuccessStoryPage slug={params.get("slug") ?? ""} /></PageShell>;
  if (page === "media") return <PageShell><MediaCentrePage /></PageShell>;
  if (page === "membership") return <PageShell><MembershipPage /></PageShell>;
  if (page === "governance") return <PageShell><GovernancePage /></PageShell>;
  if (page === "constitution") return <PageShell><ConstitutionReaderPage /></PageShell>;
  if (page === "elections") return <PageShell><ElectionsPage /></PageShell>;
  if (page === "election-administration") return <PageShell><ElectionAdministrationPage /></PageShell>;
  if (page === "youth-hub") return <PageShell><YouthHubPage /></PageShell>;
  if (page === "partners") return <PageShell><PartnersSupportPage /></PageShell>;
  if (page === "contact") return <PageShell><ContactPage /></PageShell>;
  if (page === "search") return <PageShell><SearchPage /></PageShell>;
  if (page === "utilities") return <PageShell><UtilitiesPage /></PageShell>;
  if (page === "privacy") return <PageShell><LegalPage kind="privacy" /></PageShell>;
  if (page === "terms") return <PageShell><LegalPage kind="terms" /></PageShell>;
  if (page === "accessibility") return <PageShell><LegalPage kind="accessibility" /></PageShell>;

  return <App />;
}

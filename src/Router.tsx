import { useEffect, type ReactNode } from "react";
import App from "./App";
import BackToTop from "./components/BackToTop";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import AboutPage from "./pages/AboutPage";
import AdvisoryHistoryPage from "./pages/AdvisoryHistoryPage";
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

type PageMeta = { title: string; description: string };

const defaultMeta: PageMeta = {
  title: "Apuk Youth Union in Juba | AYU-Juba",
  description: "Official website of Apuk Youth Union in Juba — Together for Peace, Unity and Development.",
};

const pageMeta: Record<string, PageMeta> = {
  about: { title: "About AYU | AYU-Juba", description: "Learn about Apuk Youth Union in Juba, its mission, vision, values, objectives and constitutional identity." },
  identity: { title: "Identity & Symbols | AYU-Juba", description: "Explore the official AYU-Juba emblem, motto and constitutional meaning of its symbols." },
  leadership: { title: "Leadership | AYU-Juba", description: "Explore the constitutional leadership structure and verified leadership records of Apuk Youth Union in Juba." },
  history: { title: "Advisory Board & History | AYU-Juba", description: "Explore AYU-Juba's Advisory Board framework and documented institutional history." },
  work: { title: "Our Work | AYU-Juba", description: "Explore AYU-Juba programmes, projects and community service priorities." },
  news: { title: "News & Official Communications | AYU-Juba", description: "Read official AYU-Juba news, statements and community updates." },
  events: { title: "Events | AYU-Juba", description: "View AYU-Juba events and the Union's constitutional meeting calendar." },
  impact: { title: "Impact | AYU-Juba", description: "Explore documented AYU-Juba institutional milestones and community contribution areas." },
  media: { title: "Media Centre | AYU-Juba", description: "Access AYU-Juba publications, press resources and official downloads." },
  membership: { title: "Membership | AYU-Juba", description: "Learn about AYU-Juba membership categories, eligibility, rights, duties and registration." },
  governance: { title: "Governance & Transparency | AYU-Juba", description: "Explore AYU-Juba governance, accountability, audit and public constitutional resources." },
  constitution: { title: "Constitution | AYU-Juba", description: "Search and read the Amended 2025 Constitution of Apuk Youth Union in Juba." },
  elections: { title: "Elections | AYU-Juba", description: "Explore AYU-Juba's constitutional electoral framework, IEC, voter information and public election records." },
  "election-administration": { title: "Election Administration | AYU-Juba", description: "Learn about the Independent Electoral Committee's constitutional responsibilities and public election process." },
  "youth-hub": { title: "Apuk Youth Hub | AYU-Juba", description: "Explore youth opportunities, scholarships, trainings, events, jobs, announcements and sports activities." },
  partners: { title: "Partners & Support | AYU-Juba", description: "Explore AYU-Juba's constitutional community relationships and pathways for responsible partnership and support." },
  contact: { title: "Contact AYU | AYU-Juba", description: "Find official public routes to Apuk Youth Union in Juba." },
  search: { title: "Search | AYU-Juba", description: "Search public information across the AYU-Juba website." },
  utilities: { title: "Website Utilities | AYU-Juba", description: "Search, share and follow AYU-Juba public information from your device." },
  privacy: { title: "Privacy Policy | AYU-Juba", description: "Read the AYU-Juba public website Privacy Policy." },
  terms: { title: "Terms of Use | AYU-Juba", description: "Read the terms governing use of the AYU-Juba public website." },
  accessibility: { title: "Accessibility | AYU-Juba", description: "Read AYU-Juba's public website accessibility commitment." },
};

function setMeta(name: string, value: string) {
  const element = document.querySelector(`meta[name="${name}"]`);
  if (element) element.setAttribute("content", value);
}

function setPropertyMeta(property: string, value: string) {
  const element = document.querySelector(`meta[property="${property}"]`);
  if (element) element.setAttribute("content", value);
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

  useEffect(() => {
    const meta = page ? (pageMeta[page] ?? defaultMeta) : defaultMeta;
    document.title = meta.title;
    setMeta("description", meta.description);
    setMeta("twitter:title", meta.title);
    setMeta("twitter:description", meta.description);
    setPropertyMeta("og:title", meta.title);
    setPropertyMeta("og:description", meta.description);
  }, [page]);

  if (!page) return <App />;

  if (page === "about") return <PageShell><AboutPage /></PageShell>;
  if (page === "identity") return <PageShell><IdentityPage /></PageShell>;
  if (page === "leadership") return <PageShell><LeadershipPage /></PageShell>;
  if (page === "leader") return <PageShell><LeaderProfilePage slug={params.get("slug") ?? ""} /></PageShell>;
  if (page === "history") return <PageShell><AdvisoryHistoryPage /></PageShell>;
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

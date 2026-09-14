import type { ReactNode } from "react";
import App from "./App";
import BackToTop from "./components/BackToTop";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import AboutPage from "./pages/AboutPage";
import AdvisoryHistoryPage from "./pages/AdvisoryHistoryPage";
import EventPage from "./pages/EventPage";
import EventsPage from "./pages/EventsPage";
import IdentityPage from "./pages/IdentityPage";
import ImpactPage from "./pages/ImpactPage";
import ImpactStoryPage from "./pages/ImpactStoryPage";
import LeaderProfilePage from "./pages/LeaderProfilePage";
import LeadershipPage from "./pages/LeadershipPage";
import MediaCentrePage from "./pages/MediaCentrePage";
import MembershipApplicationPage from "./pages/MembershipApplicationPage";
import MembershipPage from "./pages/MembershipPage";
import NewsArticlePage from "./pages/NewsArticlePage";
import NewsPage from "./pages/NewsPage";
import ProgramPage from "./pages/ProgramPage";
import ProjectPage from "./pages/ProjectPage";
import SuccessStoryPage from "./pages/SuccessStoryPage";
import WorkPage from "./pages/WorkPage";

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
  if (page === "membership-apply") return <PageShell><MembershipApplicationPage /></PageShell>;

  return <App />;
}

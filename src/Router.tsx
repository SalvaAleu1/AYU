import type { ReactNode } from "react";
import App from "./App";
import BackToTop from "./components/BackToTop";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import AboutPage from "./pages/AboutPage";
import AdvisoryHistoryPage from "./pages/AdvisoryHistoryPage";
import IdentityPage from "./pages/IdentityPage";
import LeaderProfilePage from "./pages/LeaderProfilePage";
import LeadershipPage from "./pages/LeadershipPage";
import ProgramPage from "./pages/ProgramPage";
import ProjectPage from "./pages/ProjectPage";
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

  return <App />;
}

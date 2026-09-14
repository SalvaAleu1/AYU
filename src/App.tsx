import BackToTop from "./components/BackToTop";
import SectionHeading from "./components/SectionHeading";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import { eventItems, featuredProject, galleryItems, newsItems } from "./data/homeFeed";
import {
  ayuIdentity,
  communityRelationships,
  constitutionRecord,
  executiveOffices,
  institutionalStats,
  membershipEligibility,
  workPillars,
} from "./data/siteData";
import AboutPage from "./pages/AboutPage";
import IdentityPage from "./pages/IdentityPage";
import LeaderProfilePage from "./pages/LeaderProfilePage";
import LeadershipPage from "./pages/LeadershipPage";

function InnerPage({ children }: { children: React.ReactNode }) {
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

function App() {
  const params = new URLSearchParams(window.location.search);
  const page = params.get("page");

  if (page === "about") return <InnerPage><AboutPage /></InnerPage>;
  if (page === "identity") return <InnerPage><IdentityPage /></InnerPage>;
  if (page === "leadership") return <InnerPage><LeadershipPage /></InnerPage>;
  if (page === "leader") return <InnerPage><LeaderProfilePage slug={params.get("slug") ?? ""} /></InnerPage>;

  const hasUpdates = newsItems.length > 0;
  const hasEvents = eventItems.length > 0;
  const hasGallery = galleryItems.length > 0;

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteHeader />

      <main id="main-content">
        <section className="hero" id="home">
          <div className="hero-accent hero-accent-sky" aria-hidden="true" />
          <div className="hero-accent hero-accent-gold" aria-hidden="true" />

          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow eyebrow-light">Apuk Youth Union in Juba</p>
              <h1>{ayuIdentity.motto}.</h1>
              <p className="hero-lead">
                Empowering Apuk youth through education, unity, culture, leadership, peacebuilding and sustainable community development.
              </p>

              <div className="hero-actions">
                <a className="button button-gold" href="#membership">Membership</a>
                <a className="button button-outline" href="#work">Explore Our Work</a>
                {hasUpdates ? <a className="button button-ghost" href="#latest-updates">Latest Updates</a> : null}
              </div>

              <div className="hero-microcopy">
                <span>Non-political</span>
                <span aria-hidden="true">•</span>
                <span>Non-profit</span>
                <span aria-hidden="true">•</span>
                <span>Juba, South Sudan</span>
              </div>
            </div>

            <aside className="hero-emblem" aria-label="Apuk Youth Union identity">
              <div className="hero-emblem-ring">
                <img src="/ayu-logo.webp" alt="Apuk Youth Union in Juba logo" width="192" height="185" />
              </div>
              <p>The hawk represents Apuk identity, the handshake represents harmony and togetherness, green represents resources, and the stars represent the sections of the Apuk Community.</p>
            </aside>
          </div>
        </section>

        <section className="section section-white" id="about">
          <div className="container">
            <SectionHeading
              eyebrow="About AYU"
              title="The digital home of Apuk youth in Juba."
              description="AYU-Juba is a community youth institution established to educate and support its members while strengthening unity, peace, self-reliance and sustainable development."
            />

            <div className="three-card-grid">
              <article className="info-card info-card-featured">
                <span>Vision</span>
                <h3>An enlightened and developed community</h3>
                <p>{ayuIdentity.vision}</p>
              </article>

              <article className="info-card">
                <span>Mission</span>
                <h3>Developing youth for transformation</h3>
                <p>{ayuIdentity.mission}</p>
              </article>

              <article className="info-card">
                <span>Core values</span>
                <h3>Service with integrity</h3>
                <p>{ayuIdentity.values.join(" · ")}</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section section-soft" id="work">
          <div className="container">
            <SectionHeading
              eyebrow="Our Work"
              title="Constitutional priorities translated into practical areas of service."
              description="These pillars organize AYU's public work around the responsibilities and objectives established in the Union's Constitution."
            />

            <div className="work-grid">
              {workPillars.map((pillar, index) => (
                <article className="work-card" key={pillar.title}>
                  <span className="work-index">{String(index + 1).padStart(2, "0")}</span>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="stats-band" aria-label="AYU institutional facts">
          <div className="container stats-grid">
            {institutionalStats.map((stat) => (
              <div className="stat-item" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section section-dark" id="governance">
          <div className="container">
            <SectionHeading
              light
              eyebrow="Leadership & Governance"
              title="Accountability begins with a clear constitutional structure."
              description="The General Assembly is AYU's supreme organ. The Executive Committee manages the Union's affairs and the Advisory Board provides constitutional guidance and counsel."
            />

            <div className="organ-grid">
              <article className="organ-card">
                <span>01</span>
                <h3>General Assembly</h3>
                <p>Comprises all registered AYU members based in Juba and serves as the supreme organ of the Union.</p>
              </article>
              <article className="organ-card organ-card-accent">
                <span>02</span>
                <h3>Executive Committee</h3>
                <p>Thirteen constitutional offices responsible for administration, programmes, policy implementation and accountability.</p>
              </article>
              <article className="organ-card">
                <span>03</span>
                <h3>Advisory Board</h3>
                <p>A three-member board headed by the Patron, advising on unity, social development, conflict resolution, projects and community heritage.</p>
              </article>
            </div>

            <div className="executive-structure">
              <div className="executive-intro">
                <p className="eyebrow eyebrow-light">Executive structure</p>
                <h3>13 constitutional offices</h3>
                <p>The Constitution requires at least four women among the thirteen Executive Committee members.</p>
              </div>

              <ol className="office-list">
                {executiveOffices.map((office) => <li key={office}>{office}</li>)}
              </ol>
            </div>
          </div>
        </section>

        {featuredProject ? (
          <section className="section section-white" id="featured-project">
            <div className="container featured-project">
              <p className="eyebrow">Featured Project</p>
              <h2>{featuredProject.title}</h2>
              <p>{featuredProject.summary}</p>
              <a className="text-link" href={featuredProject.href}>Read project details →</a>
            </div>
          </section>
        ) : null}

        {hasEvents ? (
          <section className="section section-soft" id="events">
            <div className="container">
              <SectionHeading eyebrow="Upcoming Events" title="What is happening next." />
              <div className="feed-grid">
                {eventItems.map((event) => (
                  <article className="feed-card" key={event.id}>
                    <span>{event.date}</span>
                    <h3>{event.title}</h3>
                    <p>{event.venue}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        {hasUpdates ? (
          <section className="section section-white" id="latest-updates">
            <div className="container">
              <SectionHeading eyebrow="Latest Updates" title="Official AYU news and announcements." />
              <div className="feed-grid">
                {newsItems.map((item) => (
                  <article className="feed-card" key={item.id}>
                    <span>{item.category} · {item.publishedAt}</span>
                    <h3>{item.title}</h3>
                    <p>{item.excerpt}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        {hasGallery ? (
          <section className="section section-soft" id="gallery">
            <div className="container">
              <SectionHeading eyebrow="Gallery" title="AYU in the community." />
              <div className="gallery-grid">
                {galleryItems.map((item) => (
                  <img key={item.id} src={item.src} alt={item.alt} loading="lazy" decoding="async" />
                ))}
              </div>
            </div>
          </section>
        ) : null}

        <section className="section section-white" id="membership">
          <div className="container membership-grid">
            <div className="membership-copy">
              <p className="eyebrow">Membership</p>
              <h2>Belonging comes with rights, participation and responsibility.</h2>
              <p>
                The Constitution provides for Absolute Membership and Honorary Membership. Absolute members participate in the life and governance of the Union subject to constitutional eligibility and obligations.
              </p>
              <p className="membership-note">Honorary members have the other rights of membership but do not vote or contest for an elective position.</p>
            </div>

            <div className="membership-panel">
              <span className="panel-label">Absolute membership</span>
              <h3>Constitutional eligibility</h3>
              <ul className="check-list">
                {membershipEligibility.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </div>
        </section>

        <section className="section section-sky" id="partners">
          <div className="container">
            <SectionHeading
              eyebrow="Community Relationships"
              title="Working with the wider Apuk institutional family."
              description="AYU operates under the Apuk Community Association in Juba and maintains constitutionally defined relationships with community institutions in their respective areas of responsibility."
            />

            <div className="partner-grid">
              {communityRelationships.map((partner, index) => (
                <div className="partner-card" key={partner}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{partner}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section constitution-section" id="constitution">
          <div className="container constitution-grid">
            <div>
              <p className="eyebrow eyebrow-light">Governance foundation</p>
              <h2>Constitution of Apuk Youth Union in Juba — Amended 2025.</h2>
            </div>

            <div className="constitution-copy">
              <p>
                The Constitution establishes AYU's mandate, membership, organs, leadership responsibilities, meetings, finances, elections, discipline, tenure and relationships with other Apuk institutions.
              </p>
              <dl>
                <div><dt>Approved</dt><dd>{constitutionRecord.approvedDate}</dd></div>
                <div><dt>Signed into law by</dt><dd>{constitutionRecord.signedBy}, {constitutionRecord.signedAs}</dd></div>
              </dl>
            </div>
          </div>
        </section>

        <section className="section section-gold membership-cta">
          <div className="container cta-grid">
            <div>
              <p className="eyebrow">AYU-Juba</p>
              <h2>Building peace, unity and development through young people.</h2>
            </div>
            <a className="button button-dark" href="#membership">Learn about membership</a>
          </div>
        </section>
      </main>

      <SiteFooter />
      <BackToTop />
    </div>
  );
}

export default App;

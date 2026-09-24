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
                Supporting Apuk youth through education, unity, culture, leadership, peace and community development.
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
              description="Apuk Youth Union in Juba is a community youth body that supports learning, unity, peace, self-reliance and community development."
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
              title="Turning AYU's purpose into practical service."
              description="AYU works in areas that support young people, strengthen the community and reflect the aims of the Constitution."
            />

            <div className="work-grid">
              {workPillars.map((pillar) => (
                <article className="work-card" key={pillar.title}>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-dark" id="governance">
          <div className="container">
            <SectionHeading
              light
              eyebrow="Leadership & Governance"
              title="Apuk Youth Union in Juba is guided by its Constitution and accountable to its members."
              description="The General Assembly is the highest decision-making body. The Executive Committee manages the Union's work, while the Advisory Board provides advice and guidance."
            />

            <div className="organ-grid">
              <article className="organ-card">
                <h3>General Assembly</h3>
                <p>Made up of registered AYU members based in Juba and serves as the highest decision-making body of the Union.</p>
              </article>
              <article className="organ-card organ-card-accent">
                <h3>Executive Committee</h3>
                <p>Manages AYU's daily work, programmes, administration and reporting.</p>
              </article>
              <article className="organ-card">
                <h3>Advisory Board</h3>
                <p>Provides advice on unity, social development, conflict resolution, projects and community heritage.</p>
              </article>
            </div>

            <div className="executive-structure">
              <div className="executive-intro">
                <p className="eyebrow eyebrow-light">Executive Committee</p>
                <h3>Executive Committee portfolios</h3>
                <p>The Executive Committee brings together the leadership portfolios responsible for AYU's daily work and programmes.</p>
              </div>

              <ul className="office-list">
                {executiveOffices.map((office) => <li key={office}>{office}</li>)}
              </ul>
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
              <SectionHeading eyebrow="Latest Updates" title="AYU news and announcements." />
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
                The Constitution provides for Absolute Membership and Honorary Membership. Absolute members take part in the work and governance of the Union when they meet the membership requirements.
              </p>
              <p className="membership-note">Honorary members have the other rights of membership but do not vote or contest for an elective position.</p>
            </div>

            <div className="membership-panel">
              <span className="panel-label">Absolute membership</span>
              <h3>Who can join</h3>
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
              title="Working with the Apuk community."
              description="Apuk Youth Union in Juba operates under the Apuk Community Association in Juba and works with community institutions in their areas of responsibility."
            />

            <div className="partner-grid">
              {communityRelationships.map((partner) => (
                <div className="partner-card" key={partner}>
                  <strong>{partner}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section constitution-section" id="constitution">
          <div className="container constitution-grid">
            <div>
              <p className="eyebrow eyebrow-light">Constitution</p>
              <h2>Constitution of Apuk Youth Union in Juba Amended 2025.</h2>
            </div>

            <div className="constitution-copy">
              <p>
                The Constitution sets out AYU's purpose, membership, leadership, meetings, finances, elections, discipline and relationships with other Apuk institutions.
              </p>
              <dl>
                <div><dt>Amended and approved by</dt><dd>{constitutionRecord.amendedBy}</dd></div>
                <div><dt>Date</dt><dd>{constitutionRecord.approvedDate}</dd></div>
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

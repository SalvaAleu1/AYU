import { useState } from "react";

const objectives = [
  "Build members’ capacity in organizational development, programming and management.",
  "Promote unity, self-help, hard work, cooperation and tolerance among Apuk youth.",
  "Promote and develop the diverse cultural heritage that defines Apuk identity.",
  "Foster peace and reconciliation among Apuk youth and neighbouring communities.",
  "Mobilize resources for programmes and community initiatives.",
  "Provide leadership in conflict management and peacebuilding.",
  "Promote gender equality, women’s empowerment and girl-child education.",
  "Promote community public health through awareness and outreach.",
  "Advance sustainable development and sound environmental management.",
  "Promote sports, Jieng language and cultural activities among Apuk youth.",
];

const executiveOffices = [
  "Chairperson",
  "Deputy Chairperson",
  "Secretary General",
  "Secretary for Finance and Planning",
  "Secretary for Information and Media",
  "Secretary for External Affairs",
  "Secretary for Legal Affairs",
  "Secretary for Education and Trainings",
  "Secretary for Projects and Logistics",
  "Secretary for Health",
  "Secretary for Culture and Sports",
  "Secretary for Gender, Social Welfare, Peace and Reconciliation",
  "Deputy Secretary for Finance and Planning",
];

const partners = [
  "Apuk Olympics Association",
  "Apuk Graduates Congress",
  "Apuk Lith Cultural Group",
  "Apuk Lith Football Team",
  "Apuk Lith Volleyball Team",
  "Apuk Medical Professionals and Students’ Association",
  "Apuk Universities and Higher Institutes’ Students Association",
  "Apuk Lith Women’s Union",
  "Sectional Youth Associations in Juba",
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container nav-wrap">
          <a className="brand" href="#home" onClick={closeMenu} aria-label="Apuk Youth Union home">
            <span className="brand-mark" aria-hidden="true">AYU</span>
            <span className="brand-text">
              <strong>Apuk Youth Union</strong>
              <small>Juba, South Sudan</small>
            </span>
          </a>

          <button
            className="menu-button"
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>

          <nav className={menuOpen ? "main-nav open" : "main-nav"} aria-label="Primary navigation">
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#objectives" onClick={closeMenu}>Objectives</a>
            <a href="#membership" onClick={closeMenu}>Membership</a>
            <a href="#governance" onClick={closeMenu}>Governance</a>
            <a href="#partners" onClick={closeMenu}>Partners</a>
            <a href="#constitution" onClick={closeMenu}>Constitution</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Apuk Youth Union in Juba</p>
              <h1>Together for Peace, Unity and Development.</h1>
              <p className="hero-lead">
                A non-political, non-profit youth union working to educate, train, mentor, grow and develop young people for the transformation of the Apuk community.
              </p>
              <div className="hero-actions">
                <a className="button primary" href="#about">Discover AYU</a>
                <a className="button secondary" href="#membership">Membership</a>
              </div>
            </div>

            <aside className="identity-card" aria-label="AYU constitutional identity">
              <div className="identity-topline">Constitutional identity</div>
              <dl>
                <div><dt>Registered office</dt><dd>Juba, South Sudan</dd></div>
                <div><dt>Membership age</dt><dd>18–45 years</dd></div>
                <div><dt>Executive Committee</dt><dd>13 members</dd></div>
                <div><dt>Advisory Board</dt><dd>3 members</dd></div>
              </dl>
            </aside>
          </div>
        </section>

        <section className="section" id="about">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Who we are</p>
              <h2>A youth institution rooted in community, service and responsibility.</h2>
            </div>

            <div className="three-card-grid">
              <article className="info-card">
                <span>Vision</span>
                <h3>An enlightened and developed community</h3>
                <p>To attain an enlightened, progressive, self-reliant, just and all-round developed community.</p>
              </article>
              <article className="info-card">
                <span>Mission</span>
                <h3>Developing youth for transformation</h3>
                <p>To educate, train, mentor, grow and develop the youth for the transformation of the Apuk community.</p>
              </article>
              <article className="info-card">
                <span>Values</span>
                <h3>Integrity in public service</h3>
                <p>Transparency, accountability, volunteerism, self-reliance, impartiality, fairness, honesty, confidentiality, human rights and credibility.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section section-muted" id="objectives">
          <div className="container">
            <div className="section-heading split-heading">
              <div>
                <p className="eyebrow">Constitutional objectives</p>
                <h2>What AYU exists to advance.</h2>
              </div>
              <p>The Union’s objectives connect youth development with peace, culture, education, health, gender equality, sports and sustainable community development.</p>
            </div>

            <div className="objective-grid">
              {objectives.map((objective, index) => (
                <article className="objective-card" key={objective}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{objective}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="membership">
          <div className="container membership-grid">
            <div>
              <p className="eyebrow">Membership</p>
              <h2>Belonging comes with rights and responsibilities.</h2>
              <p className="section-copy">
                AYU’s constitution provides for absolute and honorary membership. Absolute membership is intended for eligible Apuk youth who are registered with the Union and meet the constitutional requirements.
              </p>
            </div>

            <div className="membership-panel">
              <h3>Absolute membership eligibility</h3>
              <ul className="check-list">
                <li>Apuk citizen by origin or resident</li>
                <li>18 to 45 years of age</li>
                <li>Of sound mind</li>
                <li>Registered with the Union</li>
                <li>Meets mandatory fee obligations determined by the Union</li>
              </ul>
              <p className="note">Honorary membership may be granted in accordance with the Constitution and does not carry voting or election-contesting rights.</p>
            </div>
          </div>
        </section>

        <section className="section section-dark" id="governance">
          <div className="container">
            <div className="section-heading light-heading">
              <p className="eyebrow">Governance</p>
              <h2>AYU is governed through three constitutional organs.</h2>
            </div>

            <div className="organ-grid">
              <article className="organ-card">
                <div className="organ-number">01</div>
                <h3>General Assembly</h3>
                <p>The supreme organ of AYU, comprising all registered members of the Union based in Juba.</p>
              </article>
              <article className="organ-card">
                <div className="organ-number">02</div>
                <h3>Executive Committee</h3>
                <p>A 13-member executive responsible for policy implementation, programmes, administration and accountability to the General Assembly.</p>
              </article>
              <article className="organ-card">
                <div className="organ-number">03</div>
                <h3>Advisory Board</h3>
                <p>A three-member board headed by the Patron, advising on unity, social development, conflict resolution, projects and community heritage.</p>
              </article>
            </div>

            <div className="office-list-wrap">
              <div>
                <p className="eyebrow">Executive structure</p>
                <h3>Constitutional offices</h3>
              </div>
              <div className="office-list">
                {executiveOffices.map((office, index) => (
                  <div className="office-item" key={office}>
                    <span>{index + 1}</span>
                    <p>{office}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="partners">
          <div className="container">
            <div className="section-heading split-heading">
              <div>
                <p className="eyebrow">Community relationships</p>
                <h2>Working with other Apuk institutions.</h2>
              </div>
              <p>AYU is the representative youth wing under the Apuk Community Association in Juba and constitutionally collaborates with community institutions in their respective areas of responsibility.</p>
            </div>

            <div className="partner-grid">
              {partners.map((partner) => <div className="partner-chip" key={partner}>{partner}</div>)}
            </div>
          </div>
        </section>

        <section className="section section-accent" id="constitution">
          <div className="container constitution-grid">
            <div>
              <p className="eyebrow">Amended 2025 Constitution</p>
              <h2>The Constitution is the institutional foundation of AYU.</h2>
            </div>
            <div>
              <p>
                The Constitution establishes AYU’s mandate, membership, organs, leadership responsibilities, meetings, finances, elections, discipline, tenure and relationships with other Apuk institutions.
              </p>
              <p className="constitution-note">
                The official constitutional document will be made available here as part of the document centre when the public document library is enabled.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <strong>Apuk Youth Union in Juba</strong>
            <p>Together for Peace, Unity and Development.</p>
          </div>
          <div className="footer-meta">
            <span>Juba, South Sudan</span>
            <span>Non-political · Non-profit</span>
          </div>
        </div>
      </footer>

      <a className="back-to-top" href="#home" aria-label="Back to top">↑</a>
    </div>
  );
}

export default App;

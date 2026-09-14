import { useEffect, useMemo, useState } from "react";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import { publishedNewsArticles } from "../data/newsData";
import {
  accessibilitySections,
  contactChannels,
  electionArchive,
  electionCandidates,
  electionDebates,
  electionFacts,
  electionNotices,
  electionPrinciples,
  electionResults,
  electionStages,
  legalUpdated,
  membershipRegistrationUrl,
  partnerRelationships,
  privacySections,
  siteSearchIndex,
  supportPathways,
  termsSections,
  voterInformation,
  youthHubCategories,
  type PublicElectionRecord,
} from "../data/finalPlatformData";

function ElectionRecords({ title, records }: { title: string; records: PublicElectionRecord[] }) {
  if (records.length === 0) return null;
  return (
    <section className="section section-white">
      <div className="container">
        <SectionHeading eyebrow="Election Record" title={title} />
        <div className="final-card-grid">
          {records.map((record) => (
            <article className="final-card" key={record.id}>
              {record.date ? <span className="final-kicker">{record.date}</span> : null}
              <h3>{record.title}</h3>
              <p>{record.summary}</p>
              {record.href ? <a className="text-link" href={record.href}>Read record →</a> : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ElectionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Elections"
        title="A constitutional framework for credible AYU elections."
        description="AYU elections are administered by an independent and neutral seven-member Independent Electoral Committee constituted by the General Assembly under Chapter VI of the Constitution."
        aside={<dl className="page-fact-list">{electionFacts.map((fact) => <div key={fact.label}><dt>{fact.label}</dt><dd>{fact.value}</dd></div>)}</dl>}
      />

      <section className="section section-white">
        <div className="container final-two-column">
          <div>
            <p className="eyebrow">Independent Electoral Committee</p>
            <h2 className="display-title">Neutral administration accountable to the General Assembly.</h2>
          </div>
          <div className="final-list-card">
            {electionPrinciples.map((item) => <p key={item}>{item}</p>)}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <SectionHeading eyebrow="Electoral Process" title="The constitutional sequence from IEC formation to inauguration." />
          <div className="timeline-grid">
            {electionStages.map((stage) => (
              <article className="timeline-card" key={stage.step}>
                <span>{stage.step}</span><h3>{stage.title}</h3><p>{stage.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container final-two-column">
          <div>
            <p className="eyebrow eyebrow-light">Voter Information</p>
            <h2 className="display-title display-title-light">Registration and voter eligibility follow the Constitution and IEC rules.</h2>
          </div>
          <ul className="final-light-list">{voterInformation.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
      </section>

      <ElectionRecords title="Election notices" records={electionNotices} />
      <ElectionRecords title="Candidates" records={electionCandidates} />
      <ElectionRecords title="Candidate debates" records={electionDebates} />
      <ElectionRecords title="Results" records={electionResults} />
      <ElectionRecords title="Election archive" records={electionArchive} />

      <section className="section section-gold">
        <div className="container cta-grid">
          <div><p className="eyebrow">Constitutional Reference</p><h2>Read Chapter VI directly in the digital Constitution.</h2></div>
          <a className="button button-dark" href="/?page=constitution&article=41">Open election articles</a>
        </div>
      </section>
    </>
  );
}

export function ElectionAdministrationPage() {
  const publicSets = [electionNotices, electionCandidates, electionDebates, electionResults];
  const publishedCount = publicSets.reduce((total, items) => total + items.length, 0);
  return (
    <>
      <PageHero
        eyebrow="Election Administration"
        title="Public election information organized around the IEC mandate."
        description="When an AYU electoral period is formally active, this section provides the public-facing timetable, notices, candidate information, debates and declared results issued through the election framework."
        aside={<dl className="page-fact-list"><div><dt>Public election records</dt><dd>{publishedCount}</dd></div><div><dt>IEC mandate</dt><dd>Chapter VI</dd></div><div><dt>Public debate</dt><dd>Constitutionally provided</dd></div></dl>}
      />
      <section className="section section-white">
        <div className="container">
          <SectionHeading eyebrow="IEC Responsibilities" title="The Constitution assigns the full electoral cycle to the IEC." />
          <div className="final-card-grid">
            {[
              ["Voter administration", "Register voters, prepare and keep the voter registry and receive the membership registry needed for the process."],
              ["Nominations", "Prepare nomination and declaration forms and receive applications for alliances and candidacy."],
              ["Timetable & public information", "Prepare the electoral timetable, publicize the election date and communicate the process to the public."],
              ["Campaigns & debates", "Organize candidate debates and administer the campaign phase within the constitutional process."],
              ["Voting & results", "Supervise and monitor elections, promote free and fair conduct and announce results through the IEC Chairperson."],
              ["Disputes & reporting", "Handle election disputes and challenges and conclude the IEC mandate through constitutional reporting and inauguration."],
            ].map(([title, text]) => <article className="final-card" key={title}><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>
      <section className="section section-soft">
        <div className="container final-two-column">
          <div><p className="eyebrow">Public Election Centre</p><h2 className="display-title">Election information appears when formally issued.</h2></div>
          <div className="final-action-stack"><a className="button button-dark" href="/?page=elections">Election overview</a><a className="text-link" href="/?page=constitution&article=41">Read Chapter VI →</a></div>
        </div>
      </section>
    </>
  );
}

export function YouthHubPage() {
  return (
    <>
      <PageHero
        eyebrow="Apuk Youth Hub"
        title="One doorway to opportunities, learning and youth participation."
        description="The Apuk Youth Hub brings together AYU opportunities, education, events, community announcements and youth activities without mixing them into the Union’s institutional news archive."
        aside={<dl className="page-fact-list"><div><dt>Hub areas</dt><dd>{youthHubCategories.length}</dd></div><div><dt>Focus</dt><dd>Youth development</dd></div><div><dt>Access</dt><dd>Public</dd></div></dl>}
      />
      <section className="section section-white">
        <div className="container">
          <SectionHeading eyebrow="Youth Services" title="Find the area that matches what you are looking for." />
          <div className="hub-grid">
            {youthHubCategories.map((item, index) => <a className="hub-card" href={item.href} key={item.title}><span>{String(index + 1).padStart(2,"0")}</span><h3>{item.title}</h3><p>{item.description}</p><strong>Explore →</strong></a>)}
          </div>
        </div>
      </section>
      <section className="section section-dark">
        <div className="container final-two-column">
          <div><p className="eyebrow eyebrow-light">Opportunity Standard</p><h2 className="display-title display-title-light">Useful information, clearly separated from AYU institutional announcements.</h2></div>
          <p className="final-light-copy">The Hub is designed for public youth-service information. AYU institutional statements, governance notices and official news remain in their dedicated sections so visitors can distinguish opportunity information from official Union communications.</p>
        </div>
      </section>
    </>
  );
}

export function PartnersSupportPage() {
  return (
    <>
      <PageHero
        eyebrow="Partners & Support"
        title="Working across the Apuk institutional family and with responsible supporters."
        description="AYU’s Constitution defines relationships with community institutions and permits lawful support that advances the Union’s objectives."
        aside={<dl className="page-fact-list"><div><dt>Constitutional relationships</dt><dd>{partnerRelationships.length}</dd></div><div><dt>Institutional home</dt><dd>Apuk Community Association in Juba</dd></div></dl>}
      />
      <section className="section section-white">
        <div className="container">
          <SectionHeading eyebrow="Community Relationships" title="Constitutionally recognized institutions and areas of cooperation." />
          <div className="partner-detail-grid">{partnerRelationships.map((partner) => <article className="partner-detail-card" key={partner.name}><h3>{partner.name}</h3><p>{partner.focus}</p></article>)}</div>
        </div>
      </section>
      <section className="section section-soft">
        <div className="container final-two-column">
          <div><p className="eyebrow">Support AYU</p><h2 className="display-title">Partnership should strengthen AYU’s constitutional objectives.</h2></div>
          <ul className="support-list">{supportPathways.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
      </section>
      <section className="section section-gold"><div className="container cta-grid"><div><p className="eyebrow">Institutional Engagement</p><h2>Connect through AYU’s official public channels.</h2></div><a className="button button-dark" href="/?page=contact">Contact AYU</a></div></section>
    </>
  );
}

export function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact AYU"
        title="Official public routes to Apuk Youth Union in Juba."
        description="Use AYU’s registered office and official website sections for institutional information, membership, media resources and public communications."
        aside={<dl className="page-fact-list"><div><dt>Registered office</dt><dd>Juba, South Sudan</dd></div><div><dt>Motto</dt><dd>Together for Peace, Unity and Development</dd></div></dl>}
      />
      <section className="section section-white">
        <div className="container">
          <SectionHeading eyebrow="Official Channels" title="Choose the appropriate public route." />
          <div className="contact-channel-grid">{contactChannels.map((item) => <article className="contact-channel-card" key={item.title}><span>{item.title}</span><h3>{item.value}</h3>{item.href ? <a className="text-link" href={item.href}>Open →</a> : null}</article>)}</div>
        </div>
      </section>
      {membershipRegistrationUrl ? <section className="section section-sky"><div className="container cta-grid"><div><p className="eyebrow">Membership Registration</p><h2>Use the official AYU membership form.</h2></div><a className="button button-dark" href={membershipRegistrationUrl} target="_blank" rel="noreferrer">Open registration form ↗</a></div></section> : null}
    </>
  );
}

export function SearchPage() {
  const params = new URLSearchParams(window.location.search);
  const initial = params.get("q") ?? "";
  const [query, setQuery] = useState(initial);
  const results = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return siteSearchIndex;
    return siteSearchIndex.filter((entry) => `${entry.title} ${entry.description} ${entry.category} ${entry.keywords.join(" ")}`.toLowerCase().includes(normalized));
  }, [query]);

  return (
    <>
      <PageHero eyebrow="Search" title="Search the AYU public website." description="Find institutional information, programmes, governance, membership, elections, youth services and public communications." />
      <section className="section section-white">
        <div className="container search-centre">
          <label className="site-search-field"><span>Search AYU</span><input type="search" value={query} onChange={(event) => setQuery(event.target.value)} autoFocus /></label>
          <p className="search-count">{results.length} {results.length === 1 ? "result" : "results"}</p>
          <div className="search-results-grid">{results.map((entry) => <a className="search-result-card" href={entry.href} key={entry.href}><span>{entry.category}</span><h3>{entry.title}</h3><p>{entry.description}</p><strong>Open →</strong></a>)}</div>
          {results.length === 0 ? <div className="archive-empty-state"><strong>No matching page</strong><p>Try another keyword or browse the main navigation.</p></div> : null}
        </div>
      </section>
    </>
  );
}

const ALERT_KEY = "ayu_public_update_alerts";
const LAST_NEWS_KEY = "ayu_last_public_news";

export function UtilitiesPage() {
  const [alertsEnabled, setAlertsEnabled] = useState(false);
  const [message, setMessage] = useState("");
  const latest = publishedNewsArticles[0];

  useEffect(() => {
    const enabled = window.localStorage.getItem(ALERT_KEY) === "yes";
    setAlertsEnabled(enabled);
    if (!enabled || !latest || !("Notification" in window) || Notification.permission !== "granted") return;
    const lastSeen = window.localStorage.getItem(LAST_NEWS_KEY);
    if (lastSeen && lastSeen !== latest.slug) {
      new Notification("New AYU public update", { body: latest.title, icon: "/ayu-logo.webp" });
    }
    window.localStorage.setItem(LAST_NEWS_KEY, latest.slug);
  }, [latest]);

  const enableAlerts = async () => {
    if (!("Notification" in window)) {
      setMessage("Browser notifications are not supported on this device. AYU updates remain available in News & Events.");
      return;
    }
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      window.localStorage.setItem(ALERT_KEY, "yes");
      if (latest) window.localStorage.setItem(LAST_NEWS_KEY, latest.slug);
      setAlertsEnabled(true);
      setMessage("On-visit update alerts are enabled on this device.");
    } else {
      setMessage("Notification permission was not enabled. You can continue to follow updates through News & Events.");
    }
  };

  const disableAlerts = () => {
    window.localStorage.removeItem(ALERT_KEY);
    setAlertsEnabled(false);
    setMessage("On-visit update alerts are disabled on this device.");
  };

  const shareSite = async () => {
    if (navigator.share) await navigator.share({ title: "Apuk Youth Union in Juba", text: "Together for Peace, Unity and Development", url: window.location.origin });
    else {
      await navigator.clipboard?.writeText(window.location.origin);
      setMessage("Website address copied.");
    }
  };

  return (
    <>
      <PageHero eyebrow="Website Utilities" title="Search, share and follow AYU public information." description="Lightweight utilities are designed to work without requiring a website account or AYU database." />
      <section className="section section-white"><div className="container utility-grid">
        <article className="utility-card"><span>Search</span><h3>Find information quickly</h3><p>Search key public sections of the AYU website.</p><a className="button button-dark" href="/?page=search">Search AYU</a></article>
        <article className="utility-card"><span>Updates</span><h3>On-visit update alerts</h3><p>With browser permission, the site can alert you when you return and a newer AYU news item has been published since your previous visit.</p><button className="button button-dark" type="button" onClick={alertsEnabled ? disableAlerts : enableAlerts}>{alertsEnabled ? "Disable alerts" : "Enable alerts"}</button></article>
        <article className="utility-card"><span>Share</span><h3>Share the AYU website</h3><p>Use your device’s share menu or copy the website address.</p><button className="button button-outline-dark" type="button" onClick={shareSite}>Share website</button></article>
      </div>{message ? <p className="utility-message" aria-live="polite">{message}</p> : null}</section>
    </>
  );
}

type LegalKind = "privacy" | "terms" | "accessibility";

export function LegalPage({ kind }: { kind: LegalKind }) {
  const config = kind === "privacy"
    ? { eyebrow: "Privacy Policy", title: "Privacy and responsible handling of public website information.", sections: privacySections }
    : kind === "terms"
      ? { eyebrow: "Terms of Use", title: "Terms governing use of the AYU public website.", sections: termsSections }
      : { eyebrow: "Accessibility", title: "A public website designed for broad and inclusive access.", sections: accessibilitySections };

  return (
    <>
      <PageHero eyebrow={config.eyebrow} title={config.title} description={`Updated ${legalUpdated}.`} />
      <section className="section section-white"><div className="container legal-list">{config.sections.map((section) => <details key={section.title}><summary>{section.title}<span>Read more</span></summary><p>{section.body}</p></details>)}</div></section>
    </>
  );
}

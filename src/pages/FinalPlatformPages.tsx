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
        <SectionHeading eyebrow="Election Information" title={title} />
        <div className="final-card-grid">
          {records.map((record) => (
            <article className="final-card" key={record.id}>
              {record.date ? <span className="final-kicker">{record.date}</span> : null}
              <h3>{record.title}</h3>
              <p>{record.summary}</p>
              {record.href ? <a className="text-link" href={record.href}>Read more →</a> : null}
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
        title="How AYU elections are organized."
        description="AYU elections are managed by an independent and neutral Independent Electoral Committee appointed through the General Assembly under the Constitution."
        aside={<dl className="page-fact-list">{electionFacts.map((fact) => <div key={fact.label}><dt>{fact.label}</dt><dd>{fact.value}</dd></div>)}</dl>}
      />

      <section className="section section-white">
        <div className="container final-two-column">
          <div>
            <p className="eyebrow">Independent Electoral Committee</p>
            <h2 className="display-title">An independent body accountable to the General Assembly.</h2>
          </div>
          <div className="final-list-card">
            {electionPrinciples.map((item) => <p key={item}>{item}</p>)}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <SectionHeading eyebrow="Election Process" title="From forming the IEC to inaugurating the incoming leadership." />
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
            <h2 className="display-title display-title-light">Voter registration follows the Constitution and IEC rules.</h2>
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
          <div><p className="eyebrow">Constitution</p><h2>Read the election articles in the AYU Constitution.</h2></div>
          <a className="button button-dark" href="/?page=constitution&article=41">Open election articles</a>
        </div>
      </section>
    </>
  );
}

export function ElectionAdministrationPage() {
  return (
    <>
      <PageHero
        eyebrow="Election Administration"
        title="Public information about AYU elections."
        description="When an AYU election period is active, this section can show official timetables, notices, candidate information, debates and results."
        aside={<dl className="page-fact-list"><div><dt>Guided by</dt><dd>Chapter VI of the Constitution</dd></div><div><dt>Public information</dt><dd>Official IEC notices</dd></div></dl>}
      />
      <section className="section section-white">
        <div className="container">
          <SectionHeading eyebrow="IEC Responsibilities" title="What the IEC is responsible for." />
          <div className="final-card-grid">
            {[
              ["Voter registration", "Register voters and prepare the voter list."],
              ["Nominations", "Receive candidate and alliance applications and manage nomination forms."],
              ["Timetable & information", "Prepare the election timetable and inform the public about key dates."],
              ["Campaigns & debates", "Manage the campaign period and organize candidate debates where required."],
              ["Voting & results", "Supervise voting and announce election results."],
              ["Disputes & reporting", "Handle election disputes and complete the required election reports."],
            ].map(([title, text]) => <article className="final-card" key={title}><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>
      <section className="section section-soft">
        <div className="container final-two-column">
          <div><p className="eyebrow">Election Information</p><h2 className="display-title">Official election information appears when it is issued.</h2></div>
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
        title="A simple place to find opportunities, learning and youth activities."
        description="The Apuk Youth Hub brings together useful opportunities, training, events, community announcements and youth activities in one place."
        aside={<dl className="page-fact-list"><div><dt>Focus</dt><dd>Youth development</dd></div><div><dt>Access</dt><dd>Public</dd></div></dl>}
      />
      <section className="section section-white">
        <div className="container">
          <SectionHeading eyebrow="Youth Services" title="Find the information you need." />
          <div className="hub-grid">
            {youthHubCategories.map((item) => <a className="hub-card" href={item.href} key={item.title}><h3>{item.title}</h3><p>{item.description}</p><strong>Explore →</strong></a>)}
          </div>
        </div>
      </section>
      <section className="section section-dark">
        <div className="container final-two-column">
          <div><p className="eyebrow eyebrow-light">Youth Information</p><h2 className="display-title display-title-light">Useful youth information kept separate from official AYU statements.</h2></div>
          <p className="final-light-copy">Opportunities and youth-service information appear in the Hub, while official AYU statements and governance notices remain in their own sections.</p>
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
        title="Working with Apuk community institutions and responsible supporters."
        description="AYU works with community institutions named in its Constitution and welcomes lawful support that helps advance its objectives."
        aside={<dl className="page-fact-list"><div><dt>Community home</dt><dd>Apuk Community Association in Juba</dd></div><div><dt>Focus</dt><dd>Cooperation and community service</dd></div></dl>}
      />
      <section className="section section-white">
        <div className="container">
          <SectionHeading eyebrow="Community Relationships" title="Community institutions AYU works with." />
          <div className="partner-detail-grid">{partnerRelationships.map((partner) => <article className="partner-detail-card" key={partner.name}><h3>{partner.name}</h3><p>{partner.focus}</p></article>)}</div>
        </div>
      </section>
      <section className="section section-soft">
        <div className="container final-two-column">
          <div><p className="eyebrow">Support AYU</p><h2 className="display-title">Partnership should support AYU's purpose and community work.</h2></div>
          <ul className="support-list">{supportPathways.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
      </section>
      <section className="section section-gold"><div className="container cta-grid"><div><p className="eyebrow">Work With AYU</p><h2>Connect through AYU's official public channels.</h2></div><a className="button button-dark" href="/?page=contact">Contact AYU</a></div></section>
    </>
  );
}

export function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact AYU"
        title="Official ways to reach Apuk Youth Union in Juba."
        description="Use the registered office and website sections for membership, media resources, public updates and other AYU information."
        aside={<dl className="page-fact-list"><div><dt>Registered office</dt><dd>Juba, South Sudan</dd></div><div><dt>Motto</dt><dd>Together for Peace, Unity and Development</dd></div></dl>}
      />
      <section className="section section-white">
        <div className="container">
          <SectionHeading eyebrow="Official Channels" title="Choose the right way to find what you need." />
          <div className="contact-channel-grid">{contactChannels.map((item) => <article className="contact-channel-card" key={item.title}><span>{item.title}</span><h3>{item.value}</h3>{item.href ? <a className="text-link" href={item.href}>Open →</a> : null}</article>)}</div>
        </div>
      </section>
      <section className="section section-sky"><div className="container cta-grid"><div><p className="eyebrow">Membership Registration</p><h2>Register through the official AYU membership form.</h2></div><a className="button button-dark" href={membershipRegistrationUrl} target="_blank" rel="noreferrer">Open registration form ↗</a></div></section>
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
      <PageHero eyebrow="Search" title="Search the AYU website." description="Find information about AYU, its work, membership, news, events, elections and community services." />
      <section className="section section-white">
        <div className="container search-centre">
          <label className="site-search-field"><span>Search AYU</span><input type="search" value={query} onChange={(event) => setQuery(event.target.value)} autoFocus /></label>
          <p className="search-count">{results.length} {results.length === 1 ? "result" : "results"}</p>
          <div className="search-results-grid">{results.map((entry) => <a className="search-result-card" href={entry.href} key={entry.href}><span>{entry.category}</span><h3>{entry.title}</h3><p>{entry.description}</p><strong>Open →</strong></a>)}</div>
          {results.length === 0 ? <div className="archive-empty-state"><strong>No matching page</strong><p>Try another word or browse the main menu.</p></div> : null}
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
      new Notification("New AYU update", { body: latest.title, icon: "/ayu-logo.webp" });
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
      setMessage("Update alerts are enabled on this device.");
    } else {
      setMessage("Notifications were not enabled. You can still follow AYU updates through News & Events.");
    }
  };

  const disableAlerts = () => {
    window.localStorage.removeItem(ALERT_KEY);
    setAlertsEnabled(false);
    setMessage("Update alerts are disabled on this device.");
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
      <PageHero eyebrow="Website Tools" title="Search, share and follow AYU updates." description="Simple tools help you find information, share the website and follow public updates." />
      <section className="section section-white"><div className="container utility-grid">
        <article className="utility-card"><span>Search</span><h3>Find information quickly</h3><p>Search the main public sections of the AYU website.</p><a className="button button-dark" href="/?page=search">Search AYU</a></article>
        <article className="utility-card"><span>Updates</span><h3>Update alerts</h3><p>With your permission, the website can alert you when you return and a newer AYU update is available.</p><button className="button button-dark" type="button" onClick={alertsEnabled ? disableAlerts : enableAlerts}>{alertsEnabled ? "Disable alerts" : "Enable alerts"}</button></article>
        <article className="utility-card"><span>Share</span><h3>Share the AYU website</h3><p>Use your device's share menu or copy the website address.</p><button className="button button-outline-dark" type="button" onClick={shareSite}>Share website</button></article>
      </div>{message ? <p className="utility-message" aria-live="polite">{message}</p> : null}</section>
    </>
  );
}

type LegalKind = "privacy" | "terms" | "accessibility";

export function LegalPage({ kind }: { kind: LegalKind }) {
  const config = kind === "privacy"
    ? { eyebrow: "Privacy Policy", title: "How AYU handles information on this website.", sections: privacySections }
    : kind === "terms"
      ? { eyebrow: "Terms of Use", title: "Rules for using the AYU public website.", sections: termsSections }
      : { eyebrow: "Accessibility", title: "Making the AYU website easier for everyone to use.", sections: accessibilitySections };

  return (
    <>
      <PageHero eyebrow={config.eyebrow} title={config.title} description={`Updated ${legalUpdated}.`} />
      <section className="section section-white"><div className="container legal-list">{config.sections.map((section) => <details key={section.title}><summary>{section.title}<span>Read more</span></summary><p>{section.body}</p></details>)}</div></section>
    </>
  );
}

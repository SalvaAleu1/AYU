import { useEffect, useState } from "react";
import MemberPortalNav from "../components/MemberPortalNav";
import PageHero from "../components/PageHero";
import { apiJson, isUnauthorized, type PortalPayload } from "../lib/memberApi";

type LoadState =
  | { status: "loading" }
  | { status: "ready"; data: PortalPayload }
  | { status: "signed-out" }
  | { status: "error"; message: string };

function formatDate(value?: string | null) {
  if (!value) return "—";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat("en", { day: "numeric", month: "short", year: "numeric" }).format(date);
}

export default function MemberPortalPage() {
  const [state, setState] = useState<LoadState>({ status: "loading" });

  useEffect(() => {
    let cancelled = false;
    apiJson<PortalPayload>("/api/member/portal")
      .then((data) => {
        if (!cancelled) setState({ status: "ready", data });
      })
      .catch((error) => {
        if (cancelled) return;
        if (isUnauthorized(error)) setState({ status: "signed-out" });
        else setState({ status: "error", message: error instanceof Error ? error.message : "The portal could not be loaded." });
      });
    return () => { cancelled = true; };
  }, []);

  if (state.status === "signed-out") {
    return (
      <>
        <PageHero eyebrow="Member Portal" title="Sign in to access your member portal." description="Your profile, membership status, documents and member-only information are protected by your AYU account." />
        <section className="section section-white"><div className="container narrow-action-panel"><a className="button button-dark" href="/?page=member-login">Member login</a></div></section>
      </>
    );
  }

  if (state.status === "loading") {
    return (
      <section className="portal-loading" aria-live="polite">
        <div className="container"><p>Loading your member portal…</p></div>
      </section>
    );
  }

  if (state.status === "error") {
    return (
      <section className="section section-white"><div className="container narrow-action-panel"><h1>Member Portal</h1><p>{state.message}</p><a className="button button-dark" href="/?page=member-login">Return to login</a></div></section>
    );
  }

  const { member, announcements, documents, forms } = state.data;
  const membershipLabel = member.membershipType === "honorary" ? "Honorary Member" : "Absolute Member";

  return (
    <div className="portal-page">
      <section className="portal-topbar">
        <div className="container portal-topbar-inner">
          <a className="portal-brand" href="/?page=member-portal"><img src="/ayu-logo.webp" alt="" width="44" height="42" /><span>AYU Member Portal</span></a>
          <MemberPortalNav active="dashboard" />
        </div>
      </section>

      <section className="portal-welcome">
        <div className="container portal-welcome-grid">
          <div>
            <p className="eyebrow eyebrow-light">Member Portal</p>
            <h1>Welcome, {member.fullName}.</h1>
            <p>Your AYU membership information and member services are available here.</p>
          </div>
          <div className="portal-status-card">
            <span>Membership status</span>
            <strong>{member.membershipStatus}</strong>
            <small>{membershipLabel}</small>
          </div>
        </div>
      </section>

      <section className="section section-soft portal-section">
        <div className="container portal-dashboard-grid">
          <div className="digital-member-card" aria-label="Digital AYU membership card">
            <div className="digital-card-head"><img src="/ayu-logo.webp" alt="" width="64" height="62" /><span>Apuk Youth Union in Juba</span></div>
            <div className="digital-card-name">{member.fullName}</div>
            <dl>
              <div><dt>Member number</dt><dd>{member.memberNumber}</dd></div>
              <div><dt>Membership</dt><dd>{membershipLabel}</dd></div>
              <div><dt>Status</dt><dd>{member.membershipStatus}</dd></div>
              {member.termLabel ? <div><dt>Term</dt><dd>{member.termLabel}</dd></div> : null}
            </dl>
            <p>Digital membership record · AYU-Juba</p>
          </div>

          <div className="portal-summary-card">
            <p className="eyebrow">My Membership</p>
            <dl className="portal-detail-list">
              <div><dt>Member number</dt><dd>{member.memberNumber}</dd></div>
              <div><dt>Membership type</dt><dd>{membershipLabel}</dd></div>
              <div><dt>Joined</dt><dd>{formatDate(member.joinedAt)}</dd></div>
              {member.termLabel ? <div><dt>Current term</dt><dd>{member.termLabel}</dd></div> : null}
            </dl>
            <a className="text-link" href="/?page=member-profile">View and update profile →</a>
          </div>
        </div>
      </section>

      <section className="section section-white portal-section">
        <div className="container portal-content-grid">
          <div className="portal-panel">
            <div className="portal-panel-heading"><div><p className="eyebrow">Announcements</p><h2>Member updates</h2></div></div>
            {announcements.length > 0 ? (
              <div className="portal-list">
                {announcements.map((item) => <article key={item.id}><time>{formatDate(item.published_at)}</time><h3>{item.title}</h3><p>{item.body}</p></article>)}
              </div>
            ) : <p className="portal-empty">There are no member announcements at this time.</p>}
          </div>

          <div className="portal-panel">
            <div className="portal-panel-heading"><div><p className="eyebrow">Documents</p><h2>Member documents</h2></div></div>
            {documents.length > 0 ? (
              <div className="portal-list compact">
                {documents.map((item) => <article key={item.id}><time>{formatDate(item.published_at)}</time><h3>{item.title}</h3>{item.description ? <p>{item.description}</p> : null}{item.url ? <a className="text-link" href={item.url} target="_blank" rel="noreferrer">Open document →</a> : null}</article>)}
              </div>
            ) : <p className="portal-empty">There are no member documents published at this time.</p>}
          </div>

          <div className="portal-panel">
            <div className="portal-panel-heading"><div><p className="eyebrow">Forms</p><h2>Member forms</h2></div></div>
            {forms.length > 0 ? (
              <div className="portal-list compact">
                {forms.map((item) => <article key={item.id}><h3>{item.title}</h3>{item.description ? <p>{item.description}</p> : null}{item.destination_url ? <a className="text-link" href={item.destination_url}>Open form →</a> : null}</article>)}
              </div>
            ) : <p className="portal-empty">There are no member forms open at this time.</p>}
          </div>

          <div className="portal-panel portal-quick-links">
            <p className="eyebrow">Quick Access</p>
            <h2>AYU services</h2>
            <a href="/?page=member-contributions">Contributions & receipts <span>→</span></a>
            <a href="/?page=events">Events <span>→</span></a>
            <a href="/?page=news">News & updates <span>→</span></a>
            <a href="/?page=member-privacy">Privacy settings <span>→</span></a>
            <a href="/?page=member-security">Account security <span>→</span></a>
          </div>
        </div>
      </section>
    </div>
  );
}

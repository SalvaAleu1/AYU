import { useEffect, useState } from "react";
import MemberPortalNav from "../components/MemberPortalNav";
import PageHero from "../components/PageHero";
import { apiJson, isUnauthorized, type ContributionsPayload } from "../lib/memberApi";

type State =
  | { status: "loading" }
  | { status: "ready"; data: ContributionsPayload }
  | { status: "signed-out" }
  | { status: "error"; message: string };

function formatMoney(amountMinor: number, currency: "SSP" | "USD") {
  const amount = amountMinor / 100;
  return `${currency} ${amount.toLocaleString("en", { minimumFractionDigits: 0, maximumFractionDigits: 2 })}`;
}

function formatDate(value?: string | null) {
  if (!value) return "—";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat("en", { day: "numeric", month: "short", year: "numeric" }).format(date);
}

function contributionTypeLabel(value: string) {
  return value.split("-").map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join(" ");
}

export default function MemberContributionsPage() {
  const [state, setState] = useState<State>({ status: "loading" });

  useEffect(() => {
    let cancelled = false;
    apiJson<ContributionsPayload>("/api/member/contributions")
      .then((data) => { if (!cancelled) setState({ status: "ready", data }); })
      .catch((error) => {
        if (cancelled) return;
        setState(isUnauthorized(error)
          ? { status: "signed-out" }
          : { status: "error", message: error instanceof Error ? error.message : "Contribution records could not be loaded." });
      });
    return () => { cancelled = true; };
  }, []);

  if (state.status === "signed-out") {
    return (
      <>
        <PageHero eyebrow="Member Contributions" title="Sign in to view your contribution records." description="Contribution and receipt records are available only through your protected AYU member account." />
        <section className="section section-white"><div className="container narrow-action-panel"><a className="button button-dark" href="/?page=member-login">Member login</a></div></section>
      </>
    );
  }

  if (state.status === "loading") return <div className="portal-loading"><div className="container">Loading contribution records…</div></div>;
  if (state.status === "error") return <div className="portal-loading"><div className="container">{state.message}</div></div>;

  const { contributions, totals, paymentChannels } = state.data;

  return (
    <div className="portal-page">
      <section className="portal-topbar"><div className="container portal-topbar-inner"><a className="portal-brand" href="/?page=member-portal"><img src="/ayu-logo.webp" alt="" width="44" height="42" /><span>AYU Member Portal</span></a><MemberPortalNav active="contributions" /></div></section>

      <section className="portal-inner-hero">
        <div className="container">
          <p className="eyebrow eyebrow-light">Contributions & Receipts</p>
          <h1>Your AYU financial record.</h1>
          <p>View contributions recorded against your membership account and open official receipts where one has been issued.</p>
        </div>
      </section>

      <section className="section section-soft portal-section">
        <div className="container contribution-summary-grid">
          <article className="portal-panel contribution-total-card">
            <span>Received contributions</span>
            <strong>{totals.SSP ? formatMoney(totals.SSP, "SSP") : "SSP 0"}</strong>
            <small>South Sudanese pounds</small>
          </article>
          <article className="portal-panel contribution-total-card">
            <span>Received contributions</span>
            <strong>{totals.USD ? formatMoney(totals.USD, "USD") : "USD 0"}</strong>
            <small>United States dollars</small>
          </article>
        </div>
      </section>

      <section className="section section-white portal-section">
        <div className="container portal-panel contribution-records-panel">
          <div className="portal-panel-heading">
            <div><p className="eyebrow">Contribution History</p><h2>Recorded contributions</h2></div>
          </div>

          {contributions.length > 0 ? (
            <div className="contribution-table-wrap">
              <table className="contribution-table">
                <thead><tr><th>Date</th><th>Contribution</th><th>Amount</th><th>Status</th><th>Receipt</th></tr></thead>
                <tbody>
                  {contributions.map((item) => (
                    <tr key={item.id}>
                      <td>{formatDate(item.receivedAt || item.recordedAt)}</td>
                      <td><strong>{item.title}</strong><span>{contributionTypeLabel(item.contributionType)}</span></td>
                      <td>{formatMoney(item.amountMinor, item.currency)}</td>
                      <td><span className={`finance-status finance-status-${item.status}`}>{item.status}</span></td>
                      <td>{item.receiptId ? <a className="text-link" href={`/?page=member-receipt&id=${encodeURIComponent(item.receiptId)}`}>{item.receiptNumber || "View receipt"} →</a> : <span>—</span>}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : <p className="portal-empty">No contribution records are available for this account.</p>}
        </div>
      </section>

      {paymentChannels.length > 0 ? (
        <section className="section section-soft portal-section">
          <div className="container">
            <div className="portal-panel-heading"><div><p className="eyebrow">Official Payment Channels</p><h2>Current AYU payment options</h2></div></div>
            <div className="payment-channel-grid">
              {paymentChannels.map((channel) => (
                <article className="portal-panel payment-channel-card" key={channel.id}>
                  <span>{channel.currency}</span>
                  <h3>{channel.label}</h3>
                  <p>{channel.instructions}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="section section-dark">
        <div className="container finance-principle-grid">
          <div><p className="eyebrow eyebrow-light">Financial Accountability</p><h2 className="display-title display-title-light">AYU funds are constitutionally tied to the objectives of the Union.</h2></div>
          <p>The Constitution requires transparency and accountability in the use of resources and provides for both internal quarterly audit and annual external audit oversight.</p>
        </div>
      </section>
    </div>
  );
}

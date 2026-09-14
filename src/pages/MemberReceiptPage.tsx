import { useEffect, useState } from "react";
import MemberPortalNav from "../components/MemberPortalNav";
import PageHero from "../components/PageHero";
import { apiJson, isUnauthorized, type ReceiptRecord } from "../lib/memberApi";

type State =
  | { status: "loading" }
  | { status: "ready"; receipt: ReceiptRecord }
  | { status: "signed-out" }
  | { status: "error"; message: string };

function formatMoney(amountMinor: number, currency: "SSP" | "USD") {
  const amount = amountMinor / 100;
  return `${currency} ${amount.toLocaleString("en", { minimumFractionDigits: 0, maximumFractionDigits: 2 })}`;
}

function formatDate(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat("en", { day: "numeric", month: "long", year: "numeric" }).format(date);
}

export default function MemberReceiptPage({ id }: { id: string }) {
  const [state, setState] = useState<State>({ status: "loading" });

  useEffect(() => {
    if (!id) {
      setState({ status: "error", message: "Receipt not found." });
      return;
    }
    apiJson<{ receipt: ReceiptRecord }>(`/api/member/receipts/${encodeURIComponent(id)}`)
      .then(({ receipt }) => setState({ status: "ready", receipt }))
      .catch((error) => setState(isUnauthorized(error)
        ? { status: "signed-out" }
        : { status: "error", message: error instanceof Error ? error.message : "Receipt could not be loaded." }));
  }, [id]);

  if (state.status === "signed-out") {
    return (
      <>
        <PageHero eyebrow="AYU Receipt" title="Sign in to view this receipt." description="AYU receipts are protected member records." />
        <section className="section section-white"><div className="container narrow-action-panel"><a className="button button-dark" href="/?page=member-login">Member login</a></div></section>
      </>
    );
  }
  if (state.status === "loading") return <div className="portal-loading"><div className="container">Loading receipt…</div></div>;
  if (state.status === "error") return <div className="portal-loading"><div className="container">{state.message}</div></div>;

  const receipt = state.receipt;

  return (
    <div className="portal-page receipt-page">
      <section className="portal-topbar receipt-screen-only"><div className="container portal-topbar-inner"><a className="portal-brand" href="/?page=member-portal"><img src="/ayu-logo.webp" alt="" width="44" height="42" /><span>AYU Member Portal</span></a><MemberPortalNav active="contributions" /></div></section>

      <section className="section section-soft portal-section">
        <div className="container receipt-wrap">
          <article className="official-receipt">
            <header className="receipt-header">
              <img src="/ayu-logo.webp" alt="Apuk Youth Union in Juba logo" width="92" height="89" />
              <div><span>Official Receipt</span><h1>Apuk Youth Union in Juba</h1><p>Together for Peace, Unity and Development.</p></div>
            </header>

            <div className="receipt-number-row"><span>Receipt number</span><strong>{receipt.receiptNumber}</strong></div>

            <dl className="receipt-details">
              <div><dt>Member</dt><dd>{receipt.memberName}</dd></div>
              <div><dt>Member number</dt><dd>{receipt.memberNumber}</dd></div>
              <div><dt>Contribution</dt><dd>{receipt.title}</dd></div>
              <div><dt>Amount received</dt><dd>{formatMoney(receipt.amountMinor, receipt.currency)}</dd></div>
              <div><dt>Date issued</dt><dd>{formatDate(receipt.issuedAt)}</dd></div>
              {receipt.paymentMethod ? <div><dt>Payment method</dt><dd>{receipt.paymentMethod}</dd></div> : null}
              {receipt.paymentReference ? <div><dt>Payment reference</dt><dd>{receipt.paymentReference}</dd></div> : null}
            </dl>

            <footer className="receipt-footer">
              <p>This receipt is issued from the member contribution record of Apuk Youth Union in Juba.</p>
              <strong>AYU-Juba · Juba, South Sudan</strong>
            </footer>
          </article>

          <div className="receipt-actions receipt-screen-only">
            <button className="button button-dark" type="button" onClick={() => window.print()}>Print / save receipt</button>
            <a className="text-link" href="/?page=member-contributions">← Back to contributions</a>
          </div>
        </div>
      </section>
    </div>
  );
}

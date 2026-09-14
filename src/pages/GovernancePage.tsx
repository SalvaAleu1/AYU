import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import {
  financeSources,
  financialGovernance,
  generalAssemblyPowers,
  governanceDocuments,
  governancePrinciples,
} from "../data/governanceData";

export default function GovernancePage() {
  return (
    <>
      <PageHero
        eyebrow="Governance & Transparency"
        title="Clear institutions, constitutional accountability and responsible stewardship."
        description="AYU-Juba's governance framework places the General Assembly at the centre of institutional authority while establishing defined responsibilities for leadership, finance, audit, reporting and public accountability."
        aside={
          <dl className="page-fact-list">
            <div><dt>Supreme organ</dt><dd>General Assembly</dd></div>
            <div><dt>Internal audit</dt><dd>Quarterly</dd></div>
            <div><dt>External audit</dt><dd>Annual</dd></div>
            <div><dt>Current Constitution</dt><dd>Amended 2025</dd></div>
          </dl>
        }
      />

      <section className="section section-white">
        <div className="container governance-intro-grid">
          <div>
            <p className="eyebrow">General Assembly</p>
            <h2 className="display-title">The constitutional centre of AYU accountability.</h2>
          </div>
          <div className="governance-power-list">
            {generalAssemblyPowers.map((power, index) => (
              <div key={power}><span>{String(index + 1).padStart(2, "0")}</span><p>{power}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <SectionHeading
            eyebrow="Financial Governance"
            title="Resources are subject to constitutional oversight."
            description="AYU's Constitution connects resource mobilization with transparent use, formal oversight and audit responsibility."
          />
          <div className="governance-card-grid">
            {financialGovernance.map((item) => (
              <article className="governance-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container governance-finance-grid">
          <div>
            <p className="eyebrow eyebrow-light">Constitutional Sources of Funds</p>
            <h2 className="display-title display-title-light">A defined financial framework.</h2>
            <p>AYU may receive or generate resources through the sources recognized in its Constitution, while all funds remain tied to the objectives of the Union.</p>
          </div>
          <ol className="finance-source-list">
            {financeSources.map((source) => <li key={source}>{source}</li>)}
          </ol>
        </div>
      </section>

      <section className="section section-white">
        <div className="container">
          <SectionHeading eyebrow="Governance Principles" title="Transparency works together with responsibility and confidentiality." />
          <div className="governance-card-grid">
            {governancePrinciples.map((item) => (
              <article className="governance-card governance-principle-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-sky">
        <div className="container">
          <SectionHeading
            eyebrow="Public Governance Library"
            title="AYU governance documents available for public access."
            description="The library presents governance materials released for public access while respecting the confidentiality requirements of the Constitution."
          />
          <div className="governance-document-grid">
            {governanceDocuments.map((document) => (
              <article className="governance-document-card" key={document.id}>
                <div className="governance-document-meta"><span>{document.category}</span>{document.period ? <strong>{document.period}</strong> : null}</div>
                <h3>{document.title}</h3>
                <p>{document.description}</p>
                {document.publishedAt ? <time>{document.publishedAt}</time> : null}
                <a className="text-link" href={document.href}>Open document →</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-gold">
        <div className="container governance-cta-grid">
          <div><p className="eyebrow">Constitution</p><h2>Read the AYU Constitution article by article.</h2></div>
          <a className="button button-dark" href="/?page=constitution">Open digital Constitution</a>
        </div>
      </section>
    </>
  );
}

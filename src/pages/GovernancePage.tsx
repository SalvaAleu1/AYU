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
        title="Clear rules, accountability and responsible leadership."
        description="AYU is guided by its Constitution. The General Assembly holds the main authority, while leadership is responsible for managing the Union, reporting to members and using resources properly."
        aside={
          <dl className="page-fact-list">
            <div><dt>Highest authority</dt><dd>General Assembly</dd></div>
            <div><dt>Audit</dt><dd>Internal and external review</dd></div>
            <div><dt>Current Constitution</dt><dd>Amended 2025</dd></div>
          </dl>
        }
      />

      <section className="section section-white">
        <div className="container governance-intro-grid">
          <div>
            <p className="eyebrow">General Assembly</p>
            <h2 className="display-title">The main decision-making body of AYU.</h2>
          </div>
          <div className="governance-power-list">
            {generalAssemblyPowers.map((power) => (
              <div key={power}><p>{power}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <SectionHeading
            eyebrow="Financial Responsibility"
            title="AYU resources must be managed responsibly."
            description="The Constitution requires proper use of resources, oversight, reporting and audit."
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
            <p className="eyebrow eyebrow-light">Sources of Funds</p>
            <h2 className="display-title display-title-light">How AYU may receive or generate resources.</h2>
            <p>All resources must support the objectives of the Union and be handled according to the Constitution.</p>
          </div>
          <ul className="finance-source-list">
            {financeSources.map((source) => <li key={source}>{source}</li>)}
          </ul>
        </div>
      </section>

      <section className="section section-white">
        <div className="container">
          <SectionHeading eyebrow="Governance Principles" title="Transparency, responsibility and confidentiality all matter." />
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
            eyebrow="Public Documents"
            title="AYU governance documents available to the public."
            description="Only documents approved for public access are shown here."
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
          <a className="button button-dark" href="/?page=constitution">Open Constitution</a>
        </div>
      </section>
    </>
  );
}

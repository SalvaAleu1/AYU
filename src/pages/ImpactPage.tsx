import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import { impactAreas, impactRecords } from "../data/impactData";

export default function ImpactPage() {
  return (
    <>
      <PageHero
        eyebrow="Impact"
        title="Documenting AYU's institutional progress and community contribution."
        description="AYU's impact record brings together constitutional milestones, programme initiatives, peacebuilding efforts and measurable community outcomes as they are documented over time."
        aside={
          <dl className="page-fact-list">
            <div><dt>Documented records</dt><dd>{impactRecords.length}</dd></div>
            <div><dt>Programme areas</dt><dd>{impactAreas.length}</dd></div>
            <div><dt>Guiding principle</dt><dd>Transparency & accountability</dd></div>
          </dl>
        }
      />

      <section className="section section-white">
        <div className="container">
          <SectionHeading
            eyebrow="Documented Milestones"
            title="Institutional progress presented with context and measurable evidence."
            description="Each record explains the milestone, its relevance to AYU and the figures or outcomes associated with it where these form part of the documented record."
          />

          <div className="impact-grid">
            {impactRecords.map((record) => (
              <a className="impact-card" href={`/?page=impact-story&slug=${record.slug}`} key={record.slug}>
                <div className="impact-card-meta">
                  <span>{record.category}</span>
                  <strong>{record.period}</strong>
                </div>
                <h3>{record.title}</h3>
                <p>{record.summary}</p>

                {record.metrics?.length ? (
                  <div className="impact-mini-metrics">
                    {record.metrics.map((metric) => (
                      <div key={metric.label}>
                        <strong>{metric.value}</strong>
                        <span>{metric.label}</span>
                      </div>
                    ))}
                  </div>
                ) : null}

                <span className="text-link">Read milestone →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container impact-area-grid">
          <div>
            <p className="eyebrow">Areas of Contribution</p>
            <h2 className="display-title">AYU's impact framework follows its constitutional mandate.</h2>
          </div>
          <div className="impact-area-list">
            {impactAreas.map((area, index) => (
              <div key={area}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{area}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container impact-principle-grid">
          <div>
            <p className="eyebrow eyebrow-light">Accountability</p>
            <h2 className="display-title display-title-light">Community impact should be visible, measurable and responsibly reported.</h2>
          </div>
          <div className="impact-principles">
            <div><strong>Projects</strong><p>Programme records can show objectives, activities, dates, implementing structures and completion status.</p></div>
            <div><strong>People reached</strong><p>Beneficiary figures can be presented alongside the programmes and activities from which they are derived.</p></div>
            <div><strong>Results</strong><p>Completed initiatives can record practical outcomes, recommendations, reports and follow-up actions.</p></div>
            <div><strong>Stories</strong><p>Community and youth stories can preserve the human dimension of AYU's work alongside institutional reporting.</p></div>
          </div>
        </div>
      </section>
    </>
  );
}

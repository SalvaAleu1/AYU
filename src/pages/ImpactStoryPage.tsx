import PageHero from "../components/PageHero";
import { getImpactRecord } from "../data/impactData";
import ImpactPage from "./ImpactPage";

export default function ImpactStoryPage({ slug }: { slug: string }) {
  const record = getImpactRecord(slug);

  if (!record) return <ImpactPage />;

  return (
    <>
      <PageHero
        eyebrow={record.category}
        title={record.title}
        description={record.summary}
        aside={
          <dl className="page-fact-list">
            <div><dt>Period</dt><dd>{record.period}</dd></div>
            <div><dt>Category</dt><dd>{record.category}</dd></div>
            {record.sourceLabel ? <div><dt>Reference</dt><dd>{record.sourceLabel}</dd></div> : null}
          </dl>
        }
      />

      <section className="section section-white">
        <div className="container article-layout">
          <article className="article-body">
            {record.details.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}

            {record.metrics?.length ? (
              <div className="story-metrics">
                {record.metrics.map((metric) => (
                  <div key={metric.label}>
                    <strong>{metric.value}</strong>
                    <span>{metric.label}</span>
                  </div>
                ))}
              </div>
            ) : null}

            <div className="story-links">
              {record.relatedPage ? <a className="button button-dark" href={record.relatedPage}>Related AYU page</a> : null}
              {record.sourceUrl ? <a className="text-link" href={record.sourceUrl} target="_blank" rel="noreferrer">Source reference ↗</a> : null}
            </div>
          </article>

          <aside className="article-aside">
            <strong>AYU Impact</strong>
            <p>Institutional milestones, programme results and community contribution.</p>
            <a className="text-link" href="/?page=impact">← Back to Impact</a>
          </aside>
        </div>
      </section>
    </>
  );
}

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
            {record.sourceLabel ? <div><dt>Source</dt><dd>{record.sourceLabel}</dd></div> : null}
          </dl>
        }
      />

      <section className="section section-white">
        <div className="container article-layout">
          <article className="article-body">
            {record.details.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}

            <div className="story-links">
              {record.relatedPage ? <a className="button button-dark" href={record.relatedPage}>Related AYU page</a> : null}
              {record.sourceUrl ? <a className="text-link" href={record.sourceUrl} target="_blank" rel="noreferrer">Source ↗</a> : null}
            </div>
          </article>

          <aside className="article-aside">
            <strong>AYU Impact</strong>
            <p>Important AYU developments, project results and community work.</p>
            <a className="text-link" href="/?page=impact">← Back to Impact</a>
          </aside>
        </div>
      </section>
    </>
  );
}

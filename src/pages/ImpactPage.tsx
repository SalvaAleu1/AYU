import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import { impactAreas, impactRecords, successStories } from "../data/impactData";

export default function ImpactPage() {
  return (
    <>
      <PageHero
        eyebrow="Impact"
        title="AYU's work and progress in the community."
        description="This section shares important AYU milestones, peace efforts, community work and other results that are supported by public records."
        aside={
          <dl className="page-fact-list">
            <div><dt>Focus</dt><dd>Community service and progress</dd></div>
            <div><dt>Reporting</dt><dd>Based on public records</dd></div>
          </dl>
        }
      />

      <section className="section section-white">
        <div className="container">
          <SectionHeading
            eyebrow="Milestones"
            title="Important AYU developments and community work."
            description="Each item explains what happened, why it matters and the record that supports it."
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
                <span className="text-link">Read milestone →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {successStories.length > 0 ? (
        <section className="section section-sky">
          <div className="container">
            <SectionHeading eyebrow="Youth & Community Stories" title="People and experiences behind AYU's work." />
            <div className="impact-grid">
              {successStories.filter((story) => story.consentForPublication).map((story) => (
                <a className="impact-card" href={`/?page=success-story&slug=${story.slug}`} key={story.slug}>
                  <div className="impact-card-meta">
                    <span>{story.programmeArea}</span>
                  </div>
                  <h3>{story.title}</h3>
                  <p>{story.summary}</p>
                  <span className="text-link">Read story →</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="section section-soft">
        <div className="container impact-area-grid">
          <div>
            <p className="eyebrow">Areas of Contribution</p>
            <h2 className="display-title">AYU works across community priorities set out in its Constitution.</h2>
          </div>
          <div className="impact-area-list">
            {impactAreas.map((area) => (
              <div key={area}>
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
            <h2 className="display-title display-title-light">AYU should clearly show what was done and what came from it.</h2>
          </div>
          <div className="impact-principles">
            <div><strong>Projects</strong><p>Project records show the purpose, activities, dates and completion status.</p></div>
            <div><strong>Results</strong><p>Completed work records practical results, recommendations and follow-up actions.</p></div>
            <div><strong>Reports</strong><p>Public reports explain progress and lessons from completed work.</p></div>
            <div><strong>Stories</strong><p>Community and youth stories share the human side of AYU's work where publication is appropriate.</p></div>
          </div>
        </div>
      </section>
    </>
  );
}

import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import {
  advisoryBoardFunctions,
  advisoryBoardStructure,
  currentAdvisoryBoard,
  pastLeadershipTerms,
} from "../data/governanceArchive";

export default function AdvisoryHistoryPage() {
  return (
    <>
      <PageHero
        eyebrow="Advisory Board & Institutional History"
        title="Preserving institutional memory while strengthening constitutional guidance."
        description="AYU-Juba's Advisory Board provides constitutional counsel to the Union, while the leadership archive preserves the record of service and institutional continuity across successive administrations."
        aside={
          <dl className="page-fact-list">
            <div><dt>Board size</dt><dd>{advisoryBoardStructure.size} members</dd></div>
            <div><dt>Headed by</dt><dd>{advisoryBoardStructure.head}</dd></div>
            <div><dt>Appointed by</dt><dd>{advisoryBoardStructure.appointedBy}</dd></div>
            <div><dt>Tenure</dt><dd>{advisoryBoardStructure.tenure}</dd></div>
          </dl>
        }
      />

      <section className="section section-white">
        <div className="container advisory-intro-grid">
          <div>
            <p className="eyebrow">Advisory Board</p>
            <h2 className="display-title">A three-member constitutional advisory organ.</h2>
          </div>
          <div className="prose-stack">
            <p>
              The Advisory Board is appointed and relieved by the General Assembly through a simple majority vote. It is headed by the Patron and serves the same tenure as the Executive Committee.
            </p>
            <p>
              Its role is advisory rather than executive: it supports the Union with institutional counsel, conflict-resolution guidance, project advice and stewardship of community heritage and cultural values.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <SectionHeading eyebrow="Constitutional Functions" title="What the Advisory Board is entrusted to do." />
          <div className="advisory-function-grid">
            {advisoryBoardFunctions.map((item, index) => (
              <article className="advisory-function-card" key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {currentAdvisoryBoard.length > 0 ? (
        <section className="section section-white">
          <div className="container">
            <SectionHeading eyebrow="Current Advisory Board" title="The serving Advisory Board of AYU-Juba." />
            <div className="leader-grid">
              {currentAdvisoryBoard.map((member) => (
                <article className="leader-card" key={member.slug}>
                  {member.photo ? <img src={member.photo} alt={member.name} /> : null}
                  <span>{member.role}</span>
                  <h3>{member.name}</h3>
                  {member.biography ? <p>{member.biography}</p> : null}
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="section section-dark">
        <div className="container history-principle-grid">
          <div>
            <p className="eyebrow eyebrow-light">Institutional Continuity</p>
            <h2 className="display-title display-title-light">Leadership changes. Institutional memory should remain.</h2>
          </div>
          <div className="history-principles">
            <div><strong>Institutional record</strong><p>AYU's leadership history preserves the service of successive administrations as part of the Union's long-term institutional identity.</p></div>
            <div><strong>Term-based history</strong><p>Each administration is recorded by its period of service and constitutional offices, allowing future generations to understand the Union's leadership journey.</p></div>
            <div><strong>Service & responsibility</strong><p>The archive recognizes public service and constitutional responsibility without turning institutional history into political commentary.</p></div>
            <div><strong>Continuity</strong><p>Preserving earlier administrations strengthens accountability, heritage and continuity as new leaders assume office.</p></div>
          </div>
        </div>
      </section>

      {pastLeadershipTerms.length > 0 ? (
        <section className="section section-white">
          <div className="container">
            <SectionHeading eyebrow="Past Leadership" title="Previous AYU-Juba administrations." />
            <div className="history-term-list">
              {pastLeadershipTerms.map((term) => (
                <article className="history-term-card" key={term.id}>
                  <div>
                    <span>{term.termLabel}</span>
                    <h3>{term.chairperson}</h3>
                    <p>Chairperson</p>
                  </div>
                  {term.members?.length ? (
                    <ul>
                      {term.members.map((member) => <li key={`${term.id}-${member.name}`}>{member.name} — {member.role}</li>)}
                    </ul>
                  ) : null}
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}

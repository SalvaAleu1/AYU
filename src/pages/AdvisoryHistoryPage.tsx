import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import {
  advisoryBoardFunctions,
  advisoryBoardStructure,
  chairpersonsHistory,
  currentAdvisoryBoard,
  pastLeadershipTerms,
} from "../data/governanceArchive";

export default function AdvisoryHistoryPage() {
  return (
    <>
      <PageHero
        eyebrow="Advisory Board & History"
        title="Guidance for today and a record of AYU's journey."
        description="The Advisory Board gives advice to AYU, while the leadership history keeps a clear record of those who have served the Union."
        aside={
          <dl className="page-fact-list">
            <div><dt>Headed by</dt><dd>{advisoryBoardStructure.head}</dd></div>
            <div><dt>Appointed by</dt><dd>{advisoryBoardStructure.appointedBy}</dd></div>
            <div><dt>Role</dt><dd>Advice and guidance</dd></div>
          </dl>
        }
      />

      <section className="section section-white">
        <div className="container advisory-intro-grid">
          <div>
            <p className="eyebrow">Advisory Board</p>
            <h2 className="display-title">A constitutional body that gives advice and guidance.</h2>
          </div>
          <div className="prose-stack">
            <p>
              The Advisory Board is appointed and relieved by the General Assembly through a simple majority vote and is headed by the Patron.
            </p>
            <p>
              Its role is to advise the Union on unity, conflict resolution, projects, social development, community heritage and cultural values.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <SectionHeading eyebrow="Responsibilities" title="What the Advisory Board is asked to do." />
          <div className="advisory-function-grid">
            {advisoryBoardFunctions.map((item) => (
              <article className="advisory-function-card" key={item}>
                <p>{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {currentAdvisoryBoard.length > 0 ? (
        <section className="section section-white">
          <div className="container">
            <SectionHeading eyebrow="Current Advisory Board" title="Serving Advisory Board members." />
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

      <section className="section section-white">
        <div className="container">
          <SectionHeading
            eyebrow="Chairpersons of AYU-Juba"
            title="A record of those who have served as Chairperson."
            description="This record will be expanded as earlier terms are confirmed from reliable AYU records."
          />
          <div className="history-term-list">
            {chairpersonsHistory.map((chairperson) => (
              <article className="history-term-card" key={chairperson.id}>
                <div>
                  <span>{chairperson.term}</span>
                  <h3>{chairperson.name}</h3>
                  <p>Chairperson{chairperson.status ? ` · ${chairperson.status}` : ""}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container history-principle-grid">
          <div>
            <p className="eyebrow eyebrow-light">AYU History</p>
            <h2 className="display-title display-title-light">Leadership changes, but the record of service remains.</h2>
          </div>
          <div className="history-principles">
            <div><strong>Leadership record</strong><p>AYU keeps a record of past administrations and the people who served in them.</p></div>
            <div><strong>Periods of service</strong><p>Past leadership is shown by the period in which it served, based on available records.</p></div>
            <div><strong>Service</strong><p>The history section recognizes service to AYU without turning the record into political commentary.</p></div>
            <div><strong>Continuity</strong><p>Keeping past records helps future leaders and members understand AYU's journey.</p></div>
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

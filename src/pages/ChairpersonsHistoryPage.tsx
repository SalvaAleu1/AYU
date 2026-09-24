import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import { chairpersonsHistory } from "../data/governanceArchive";

export default function ChairpersonsHistoryPage() {
  return (
    <>
      <PageHero
        eyebrow="AYU Leadership History"
        title="Chairpersons who have led Apuk Youth Union."
        description="This page records the leadership of Apuk Youth Union from its founding in Nairobi in 2005 and the establishment of AYU-Juba in 2010 to the current term."
        aside={
          <dl className="page-fact-list">
            <div><dt>Founded</dt><dd>2005, Nairobi</dd></div>
            <div><dt>AYU-Juba established</dt><dd>2010, Juba</dd></div>
            <div><dt>Current term</dt><dd>2024–2026</dd></div>
          </dl>
        }
      />

      <section className="section section-white">
        <div className="container">
          <SectionHeading
            eyebrow="Leadership Through the Years"
            title="A record of service and continuity."
            description="The list is arranged in the order each Chairperson served. Portraits will be added as they become available."
          />

          <div className="chairperson-history-grid">
            {chairpersonsHistory.map((chairperson) => (
              <article className="chairperson-history-card" key={chairperson.id}>
                <div className="chairperson-avatar-wrap">
                  {chairperson.photo ? (
                    <img
                      className="chairperson-avatar-photo"
                      src={chairperson.photo}
                      alt={"Portrait of " + chairperson.name}
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <div className="chairperson-avatar-initials" aria-label={chairperson.name + " initials"}>
                      {chairperson.initials}
                    </div>
                  )}
                </div>

                <div className="chairperson-history-content">
                  <div className="chairperson-term-row">
                    <span>{chairperson.term}</span>
                    <strong>{chairperson.status}</strong>
                  </div>
                  <h2>{chairperson.name}</h2>
                  <p className="chairperson-role">
                    {chairperson.status === "Founder" ? "Founder of Apuk Youth Union" : "Chairperson, Apuk Youth Union in Juba"}
                  </p>
                  {chairperson.note ? <p className="chairperson-note">{chairperson.note}</p> : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container history-foundation-grid">
          <div>
            <p className="eyebrow">Beginning of AYU</p>
            <h2 className="display-title">Founded in 2005 and established in Juba in 2010.</h2>
          </div>
          <div className="prose-stack">
            <p>
              Apuk Youth Union was founded in Nairobi in 2005 by Wol Deng Mading. The Union later took root in Juba in 2010, where Wol Deng Mading established Apuk Youth Union in Juba.
            </p>
            <p>
              In 2010, the leadership was transitioned to Giir Ngot Riiny. The Union has since continued through successive leadership terms.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container leadership-history-cta">
          <div>
            <p className="eyebrow eyebrow-light">Current Leadership</p>
            <h2 className="display-title display-title-light">See the serving Executive Committee.</h2>
          </div>
          <a className="button button-gold" href="/?page=leadership">View current leadership</a>
        </div>
      </section>
    </>
  );
}

import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";

export default function AdvisoryHistoryPage() {
  return (
    <>
      <PageHero
        eyebrow="Patron & Leadership History"
        title="The Patron and the Union’s leadership history."
        description="The Patron is the constitutional position recognised by AYU. This page also preserves the Union’s leadership record."
        aside={
          <dl className="page-fact-list">
            <div><dt>Position</dt><dd>Patron</dd></div>
            <div><dt>Current Patron</dt><dd>Prof. Kuel Maluil Jok</dd></div>
          </dl>
        }
      />

      <section className="section section-white">
        <div className="container advisory-intro-grid">
          <div>
            <p className="eyebrow">Patron</p>
            <h2 className="display-title">Prof. Kuel Maluil Jok is the Patron of Apuk Youth Union in Juba.</h2>
          </div>
          <div className="prose-stack">
            <p>
              The Advisory Board has been discontinued. The Constitution provides for a Patron, and Prof. Kuel Maluil Jok is the Union’s current Patron.
            </p>
          </div>
        </div>
      </section>

            <section className="section section-white">
        <div className="container history-chairpersons-cta">
          <div>
            <p className="eyebrow">Leadership History</p>
            <h2 className="display-title">Chairpersons of Apuk Youth Union.</h2>
            <p className="section-body-copy">
              Read the leadership record from the founding of Apuk Youth Union in Nairobi in 2005 and the establishment of AYU-Juba in 2010 to the current term.
            </p>
          </div>
          <a className="button button-dark" href="/?page=chairpersons-history">View Chairpersons history</a>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container history-principle-grid">
          <div>
            <p className="eyebrow eyebrow-light">AYU History</p>
            <h2 className="display-title display-title-light">Leadership changes, but the record of service remains.</h2>
          </div>
          <div className="history-principles">
            <div><strong>Leadership record</strong><p>AYU keeps a record of the people who have served as leaders of the Union.</p></div>
            <div><strong>Periods of service</strong><p>Leadership is shown by the years in which each term was served.</p></div>
            <div><strong>Service</strong><p>The history section recognizes service to AYU and the wider Apuk community.</p></div>
            <div><strong>Continuity</strong><p>Keeping past records helps members understand how the Union has developed over time.</p></div>
          </div>
        </div>
      </section>
    </>
  );
}

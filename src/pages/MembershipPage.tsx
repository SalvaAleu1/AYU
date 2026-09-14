import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import {
  applicationPrivacyPoints,
  memberDuties,
  memberRights,
  membershipCategories,
  membershipFaqs,
  registrationFee,
} from "../data/membershipData";

export default function MembershipPage() {
  return (
    <>
      <PageHero
        eyebrow="Membership"
        title="Membership built on participation, responsibility and service."
        description="AYU-Juba membership connects eligible young people to the constitutional life of the Union while setting clear rights, duties and standards of participation."
        aside={
          <dl className="page-fact-list">
            <div><dt>AYU youth age</dt><dd>18–45 years</dd></div>
            <div><dt>Membership categories</dt><dd>Absolute & Honorary</dd></div>
            <div><dt>Registration fee</dt><dd>{registrationFee.amount}</dd></div>
            <div><dt>Fee cadence</dt><dd>{registrationFee.cadence}</dd></div>
          </dl>
        }
      />

      <section className="section section-white">
        <div className="container">
          <SectionHeading
            eyebrow="Membership Categories"
            title="Two constitutional forms of AYU membership."
            description="Absolute Membership is the full participatory membership category. Honorary Membership recognizes individuals, communities or unions of goodwill that share values or objectives similar to AYU-Juba."
          />

          <div className="membership-category-grid">
            {membershipCategories.map((category) => (
              <article className="membership-category-card" key={category.name}>
                <h3>{category.name}</h3>
                <p>{category.summary}</p>
                <ul>
                  {category.notes.map((note) => <li key={note}>{note}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container rights-duties-grid">
          <div>
            <p className="eyebrow">Member Rights</p>
            <h2 className="display-title">Participation is protected by the Constitution.</h2>
            <ol className="membership-numbered-list">
              {memberRights.map((right) => <li key={right}>{right}</li>)}
            </ol>
          </div>

          <div>
            <p className="eyebrow">Member Duties</p>
            <h2 className="display-title">Membership also carries responsibility.</h2>
            <ol className="membership-numbered-list">
              {memberDuties.map((duty) => <li key={duty}>{duty}</li>)}
            </ol>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container fee-panel-grid">
          <div>
            <p className="eyebrow eyebrow-light">Registration Fee</p>
            <h2 className="display-title display-title-light">{registrationFee.amount}</h2>
            <p className="fee-caption">Payable once for each term under Article 39 of the AYU Constitution.</p>
          </div>
          <div className="fee-explainer">
            <strong>Membership obligations</strong>
            <p>The Constitution requires members to meet applicable fee obligations while also contributing their skills, knowledge and participation to the work of the Union.</p>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container membership-privacy-grid">
          <div>
            <p className="eyebrow">Membership Privacy</p>
            <h2 className="display-title">Personal membership information is private by default.</h2>
          </div>
          <div className="privacy-point-list">
            {applicationPrivacyPoints.map((point) => <p key={point}>{point}</p>)}
          </div>
        </div>
      </section>

      <section className="section section-sky">
        <div className="container">
          <SectionHeading eyebrow="Membership FAQs" title="Common questions about joining AYU-Juba." />
          <div className="faq-list">
            {membershipFaqs.map((item) => (
              <details key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-gold membership-cta">
        <div className="container cta-grid">
          <div>
            <p className="eyebrow">Absolute Membership</p>
            <h2>Eligible Apuk youth in Juba can submit a membership application.</h2>
          </div>
          <a className="button button-dark" href="/?page=membership-apply">Apply for membership</a>
        </div>
      </section>
    </>
  );
}

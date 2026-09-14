import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import { membershipRegistrationUrl } from "../data/finalPlatformData";
import {
  applicationPrivacyPoints,
  memberDuties,
  memberRights,
  membershipCategories,
  membershipFaqs,
} from "../data/membershipData";

export default function MembershipPage() {
  return (
    <>
      <PageHero
        eyebrow="Membership"
        title="Membership built on participation, responsibility and service."
        description="AYU-Juba membership gives eligible young people a way to take part in the Union, contribute to its work and exercise their rights and responsibilities."
        aside={
          <dl className="page-fact-list">
            <div><dt>AYU youth age</dt><dd>18–45 years</dd></div>
            <div><dt>Membership types</dt><dd>Absolute and Honorary</dd></div>
            <div><dt>Registration</dt><dd>Official AYU Google Form</dd></div>
          </dl>
        }
      />

      <section className="section section-white">
        <div className="container">
          <SectionHeading
            eyebrow="Membership Types"
            title="Membership options provided by the AYU Constitution."
            description="Absolute Membership is for eligible members who take part fully in AYU. Honorary Membership recognizes people, communities or unions of goodwill that share values or aims similar to AYU-Juba."
          />

          <div className="membership-category-grid">
            {membershipCategories.map((category) => (
              <article className="membership-category-card" key={category.name}>
                <h3>{category.name}</h3>
                <p>{category.summary}</p>
                <ul>{category.notes.map((note) => <li key={note}>{note}</li>)}</ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container rights-duties-grid">
          <div>
            <p className="eyebrow">Member Rights</p>
            <h2 className="display-title">Members have clear rights under the Constitution.</h2>
            <ul className="membership-numbered-list">{memberRights.map((right) => <li key={right}>{right}</li>)}</ul>
          </div>
          <div>
            <p className="eyebrow">Member Duties</p>
            <h2 className="display-title">Membership also comes with responsibilities.</h2>
            <ul className="membership-numbered-list">{memberDuties.map((duty) => <li key={duty}>{duty}</li>)}</ul>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container membership-privacy-grid">
          <div>
            <p className="eyebrow">Membership Privacy</p>
            <h2 className="display-title">Registration is handled through the official AYU form.</h2>
          </div>
          <div className="privacy-point-list">{applicationPrivacyPoints.map((point) => <p key={point}>{point}</p>)}</div>
        </div>
      </section>

      <section className="section section-sky">
        <div className="container">
          <SectionHeading eyebrow="Membership FAQs" title="Common questions about joining AYU-Juba." />
          <div className="faq-list">
            {membershipFaqs.map((item) => <details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}
          </div>
        </div>
      </section>

      <section className="section section-gold membership-cta">
        <div className="container cta-grid">
          <div><p className="eyebrow">AYU Membership Registration</p><h2>Register through the official AYU membership form.</h2></div>
          <a className="button button-dark" href={membershipRegistrationUrl} target="_blank" rel="noreferrer">Open registration form ↗</a>
        </div>
      </section>
    </>
  );
}

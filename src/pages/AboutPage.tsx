import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import { ayuIdentity, constitutionalObjectives } from "../data/siteData";

const values = ayuIdentity.values;

const institutionalFacts = [
  { label: "Institution", value: "Apuk Youth Union in Juba (AYU-Juba)" },
  { label: "Character", value: "Non-political, non-profit youth body" },
  { label: "Registered office", value: "Juba, South Sudan" },
  { label: "Constitution", value: "Established in 2015 and amended in 2025" },
];

const languageFramework = [
  { language: "Jieng (Dinka)", status: "Official language" },
  { language: "English", status: "Second official language" },
  { language: "Arabic", status: "Used in circumstances provided for by AYU" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About AYU"
        title="A youth institution built around unity, service and community development."
        description="Apuk Youth Union in Juba exists to educate, train, mentor, grow and develop young people while strengthening peace, identity, self-reliance and responsible community leadership."
        aside={
          <dl className="page-fact-list">
            {institutionalFacts.map((fact) => (
              <div key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        }
      />

      <section className="section section-white">
        <div className="container story-grid">
          <div>
            <p className="eyebrow">Our Story</p>
            <h2 className="display-title">Rooted in the aspirations of Apuk youth.</h2>
          </div>
          <div className="prose-stack">
            <p>
              AYU-Juba was constituted as a non-political, non-profit youth body to support and develop members of the Apuk community in Juba. Its constitutional foundation reflects a commitment to peace, social cohesion, education, self-reliance and meaningful youth participation in community development.
            </p>
            <p>
              The Union's Constitution was established in 2015 and amended in 2025. It provides the institutional framework for membership, governance, programmes, elections, accountability and AYU's relationships with the wider Apuk community.
            </p>
            <p>
              AYU operates under the Apuk Community Association in Juba and serves as the representative youth wing of the community within its constitutional framework.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <SectionHeading eyebrow="Vision & Mission" title="A clear direction for youth and community transformation." />
          <div className="two-panel-grid">
            <article className="statement-panel statement-panel-green">
              <span>Vision</span>
              <h3>{ayuIdentity.vision}</h3>
            </article>
            <article className="statement-panel">
              <span>Mission</span>
              <h3>{ayuIdentity.mission}</h3>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container motto-grid">
          <div>
            <p className="eyebrow eyebrow-light">Our Motto</p>
            <h2 className="display-title display-title-light">“{ayuIdentity.motto}”</h2>
          </div>
          <p>
            The motto expresses the principles AYU members believe in and the collective aspiration to advance the Apuk community in Juba and in Apuk lands through peace, unity and development.
          </p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container">
          <SectionHeading eyebrow="Core Values" title="The standards expected of AYU members and leadership." />
          <div className="value-grid">
            {values.map((value, index) => (
              <div className="value-card" key={value}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <SectionHeading
            eyebrow="Constitutional Objectives"
            title="Ten objectives guide AYU's public purpose."
            description="These objectives connect institutional development with unity, culture, peace, gender equality, health, environmental responsibility and sports."
          />
          <ol className="objective-list">
            {constitutionalObjectives.map((objective) => <li key={objective}>{objective}</li>)}
          </ol>
        </div>
      </section>

      <section className="section section-sky">
        <div className="container language-grid">
          <div>
            <p className="eyebrow">Language</p>
            <h2 className="display-title">A multilingual institutional framework.</h2>
            <p className="section-body-copy">AYU's Constitution recognizes a clear language hierarchy for Union affairs.</p>
          </div>
          <div className="language-list">
            {languageFramework.map((item) => (
              <div key={item.language}>
                <strong>{item.language}</strong>
                <span>{item.status}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container stewardship-grid">
          <div>
            <p className="eyebrow">Justice, Dignity & Environment</p>
            <h2 className="display-title">Development with responsibility.</h2>
          </div>
          <div className="prose-stack">
            <p>AYU is founded on justice, equality, respect for human dignity, human rights and integrity.</p>
            <p>The Constitution also calls for responsible use of natural resources, protection of land, air and water, and stronger awareness of reforestation and environmental stewardship for present and future generations.</p>
          </div>
        </div>
      </section>
    </>
  );
}

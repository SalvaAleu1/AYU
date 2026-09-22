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
  { language: "Arabic", status: "Used when appropriate" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About AYU"
        title="A youth body built around unity, service and community development."
        description="Apuk Youth Union in Juba exists to educate, train, mentor and support young people while promoting peace, identity, self-reliance and responsible leadership."
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
            <h2 className="display-title">How Apuk Youth Union came into existent.</h2>
          </div>
          <div className="prose-stack">
            <p>
              Apuk Youth Union in Juba was formed as a non-political, non-profit youth body to support and develop members of the Apuk community in Juba. Its work is centred on peace, education, self-reliance, unity and youth participation in community development.
            </p>
            <p>
              The Union was formed in 2007 and adopt its first Constitution in 2015 which was later amended in 2025. It sets out the rules for membership, leadership, programmes, elections, accountability and AYU's relationships with the wider Apuk community.
            </p>
            <p>
              Apuk Youth Union in Juba operates under the Apuk Community Association in Juba and serves as the representative youth wing of the community.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <SectionHeading eyebrow="Vision & Mission" title="A clear direction for youth and community development." />
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
            The motto reflects AYU's commitment to peace, unity and development in Juba and across the Apuk community.
          </p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container">
          <SectionHeading eyebrow="Core Values" title="The standards expected of AYU members and leaders." />
          <div className="value-grid">
            {values.map((value) => (
              <div className="value-card" key={value}>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <SectionHeading
            eyebrow="Our Objectives"
            title="What AYU works to achieve."
            description="Apuk Youth Union's objectives cover learning, unity, culture, peace, gender equality, health, the environment, sports and community development."
          />
          <ul className="objective-list">
            {constitutionalObjectives.map((objective) => <li key={objective}>{objective}</li>)}
          </ul>
        </div>
      </section>

      <section className="section section-sky">
        <div className="container language-grid">
          <div>
            <p className="eyebrow">Language</p>
            <h2 className="display-title">Languages used by Apuk Yputh Union.</h2>
            <p className="section-body-copy">The Constitution explains which languages may be used in Union affairs.</p>
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
            <p>Apuk Youth Union in Juba is founded on justice, equality, respect for human dignity, human rights and integrity.</p>
            <p>The Constitution also calls for responsible use of natural resources, protection of land, air and water, and stronger awareness of reforestation for present and future generations.</p>
          </div>
        </div>
      </section>
    </>
  );
}

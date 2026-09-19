import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import { currentLeadership, executiveRoles } from "../data/leadershipData";

export default function LeadershipPage() {
  const chairperson = currentLeadership.find((leader) => leader.role === "Chairperson");
  const deputy = currentLeadership.find((leader) => leader.role === "Deputy Chairperson");
  const secretariat = currentLeadership.filter((leader) => leader.role !== "Chairperson" && leader.role !== "Deputy Chairperson");

  return (
    <>
      <PageHero
        eyebrow="Leadership"
        title="Leadership guided by service, responsibility and accountability."
        description="AYU-Juba is governed through the General Assembly, Executive Committee and Advisory Board. The Constitution defines the responsibilities of each leadership office and how leaders account to members."
        aside={
          <dl className="page-fact-list">
            <div><dt>Highest authority</dt><dd>General Assembly</dd></div>
            <div><dt>Daily leadership</dt><dd>Executive Committee</dd></div>
            <div><dt>Guidance</dt><dd>Advisory Board</dd></div>
          </dl>
        }
      />

      <section className="section section-white">
        <div className="container">
          <SectionHeading
            eyebrow="Current Executive Committee"
            title="Serving AYU-Juba leadership."
            description="The current Executive Committee is presented from the AYU leadership structure for the 2024–2026 period."
          />

          {chairperson ? (
            <article className="leader-feature-card">
              {chairperson.photo ? <img src={chairperson.photo} alt={chairperson.name} /> : null}
              <div>
                <span>{chairperson.role}</span>
                <h2>{chairperson.name}</h2>
                {chairperson.shortBio ? <p>{chairperson.shortBio}</p> : null}
                <a className="text-link" href={`/?page=leader&slug=${chairperson.slug}`}>View profile →</a>
              </div>
            </article>
          ) : null}

          {deputy ? (
            <article className="leader-deputy-card">
              {deputy.photo ? <img src={deputy.photo} alt={deputy.name} /> : null}
              <div>
                <span>{deputy.role}</span>
                <h3>{deputy.name}</h3>
                {deputy.shortBio ? <p>{deputy.shortBio}</p> : null}
                <a className="text-link" href={`/?page=leader&slug=${deputy.slug}`}>View profile →</a>
              </div>
            </article>
          ) : null}

          {secretariat.length > 0 ? (
            <div className="leader-grid" aria-label="Current AYU Executive Committee">
              {secretariat.map((leader) => (
                <article className="leader-card" key={leader.slug}>
                  {leader.photo ? <img src={leader.photo} alt={leader.name} /> : null}
                  <span>{leader.role}</span>
                  <h3>{leader.name}</h3>
                  {leader.shortBio ? <p>{leader.shortBio}</p> : null}
                  <a className="text-link" href={`/?page=leader&slug=${leader.slug}`}>View profile →</a>
                </article>
              ))}
            </div>
          ) : null}
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <SectionHeading
            eyebrow="Executive Committee"
            title="Leadership roles and responsibilities."
            description="The Executive Committee manages the daily work of AYU, carries out approved plans and programmes, manages resources and reports to the General Assembly."
          />

          <div className="role-grid">
            {executiveRoles.map((role) => (
              <article className="role-card" key={role.title}>
                <div className="role-card-topline">
                  <h3>{role.title}</h3>
                </div>
                <p>{role.summary}</p>
                <details>
                  <summary>Responsibilities</summary>
                  <ul>
                    {role.responsibilities.map((responsibility) => <li key={responsibility}>{responsibility}</li>)}
                  </ul>
                </details>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container leadership-principles-grid">
          <div>
            <p className="eyebrow eyebrow-light">Leadership Responsibility</p>
            <h2 className="display-title display-title-light">Leadership is accountable to the General Assembly.</h2>
          </div>
          <div className="leadership-principles">
            <div><strong>Plans & programmes</strong><p>The Executive Committee plans and follows up AYU projects and carries out Union policies.</p></div>
            <div><strong>Daily management</strong><p>The Executive Committee manages the ordinary affairs of AYU-Juba and coordinates activities.</p></div>
            <div><strong>Reporting</strong><p>The Executive Committee reports back and accounts to the General Assembly.</p></div>
            <div><strong>Representation</strong><p>Executive offices support administration, finance, communication, legal matters, programmes, health, culture, sports, welfare and external relations.</p></div>
          </div>
        </div>
      </section>
    </>
  );
}

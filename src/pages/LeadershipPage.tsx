import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import { constitutionSignatory, currentLeadership, executiveRoles } from "../data/leadershipData";

export default function LeadershipPage() {
  const chairperson = currentLeadership.find((leader) => leader.role === "Chairperson");
  const deputy = currentLeadership.find((leader) => leader.role === "Deputy Chairperson");
  const secretariat = currentLeadership.filter((leader) => leader.role !== "Chairperson" && leader.role !== "Deputy Chairperson");

  return (
    <>
      <PageHero
        eyebrow="Leadership"
        title="Leadership defined by service, accountability and constitutional responsibility."
        description="AYU-Juba is governed through the General Assembly, Executive Committee and Advisory Board. The Executive Committee comprises thirteen constitutional offices with defined responsibilities to the Union and its members."
        aside={
          <dl className="page-fact-list">
            <div><dt>Executive Committee</dt><dd>13 constitutional offices</dd></div>
            <div><dt>Women in Executive</dt><dd>At least 4 members</dd></div>
            <div><dt>Executive tenure</dt><dd>2 years</dd></div>
            <div><dt>Accountable to</dt><dd>General Assembly</dd></div>
          </dl>
        }
      />

      {currentLeadership.length > 0 ? (
        <section className="section section-white">
          <div className="container">
            <SectionHeading eyebrow="Current Executive Committee" title="The elected and appointed leadership of AYU-Juba." />

            {chairperson ? (
              <article className="leader-feature-card">
                {chairperson.photo ? <img src={chairperson.photo} alt={chairperson.name} /> : null}
                <div>
                  <span>Chairperson</span>
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
                  <span>Deputy Chairperson</span>
                  <h3>{deputy.name}</h3>
                  {deputy.shortBio ? <p>{deputy.shortBio}</p> : null}
                  <a className="text-link" href={`/?page=leader&slug=${deputy.slug}`}>View profile →</a>
                </div>
              </article>
            ) : null}

            {secretariat.length > 0 ? (
              <div className="leader-grid">
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
      ) : null}

      <section className="section section-white">
        <div className="container">
          <SectionHeading
            eyebrow="Executive Committee"
            title="Thirteen offices, each with a defined constitutional mandate."
            description="The Executive Committee conducts the day-to-day affairs of the Union, implements approved policies and programmes, raises and manages resources, and reports back to the General Assembly."
          />

          <div className="role-grid">
            {executiveRoles.map((role, index) => (
              <article className="role-card" key={role.title}>
                <div className="role-card-topline">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{role.title}</h3>
                </div>
                <p>{role.summary}</p>
                <details>
                  <summary>Constitutional responsibilities</summary>
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
            <p className="eyebrow eyebrow-light">Executive Responsibility</p>
            <h2 className="display-title display-title-light">Leadership is accountable to the General Assembly.</h2>
          </div>
          <div className="leadership-principles">
            <div><strong>Policy & programmes</strong><p>The Executive Committee plans, initiates, monitors and evaluates projects and implements Union policies.</p></div>
            <div><strong>Day-to-day management</strong><p>The Executive Committee conducts the ordinary affairs of AYU-Juba and coordinates institutional activities.</p></div>
            <div><strong>Reporting</strong><p>The Executive Committee is required to report back and account to the General Assembly.</p></div>
            <div><strong>Representation</strong><p>Executive offices carry defined responsibilities for administration, finance, communications, law, programmes, health, culture, sports, welfare and external relations.</p></div>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container constitutional-record-grid">
          <div>
            <p className="eyebrow">Constitutional Record</p>
            <h2 className="display-title">Amended 2025 Constitution</h2>
          </div>
          <article className="record-card">
            <span>Signed into law by</span>
            <h3>{constitutionSignatory.name}</h3>
            <strong>{constitutionSignatory.role}</strong>
            <p>{constitutionSignatory.context}</p>
            <time>{constitutionSignatory.date}</time>
          </article>
        </div>
      </section>
    </>
  );
}

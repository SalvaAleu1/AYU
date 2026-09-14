import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import { projectGovernance, verifiedProjects, workPillars } from "../data/workData";

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title="AYU serves young people and the community through practical areas of work."
        description="Our work follows the aims of the AYU Constitution and focuses on learning, peace, culture, health, sports, welfare, the environment and community development."
        aside={
          <dl className="page-fact-list">
            <div><dt>Guided by</dt><dd>AYU Constitution</dd></div>
            <div><dt>Project oversight</dt><dd>Executive Committee</dd></div>
            <div><dt>Reporting</dt><dd>Progress and final reports</dd></div>
          </dl>
        }
      />

      <section className="section section-white">
        <div className="container">
          <SectionHeading
            eyebrow="Areas of Work"
            title="AYU's work brings the Constitution into practical service for the community."
            description="Each area explains what AYU aims to do and how it supports young people and the wider community."
          />

          <div className="program-pillar-grid">
            {workPillars.map((pillar) => (
              <a className="program-pillar-card" href={`/?page=program&slug=${pillar.slug}`} key={pillar.slug}>
                <h3>{pillar.title}</h3>
                <p>{pillar.summary}</p>
                <strong>Explore this area →</strong>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <SectionHeading
            light
            eyebrow="How Projects Are Managed"
            title="AYU projects are planned, carried out and reported responsibly."
            description="A project may be assigned to a committee that works under the supervision of AYU leadership and reports on its progress and results."
          />

          <div className="governance-cycle-grid">
            {projectGovernance.map((item) => (
              <article className="governance-cycle-card" key={item.step}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {verifiedProjects.length > 0 ? (
        <section className="section section-soft">
          <div className="container">
            <SectionHeading eyebrow="Projects & Initiatives" title="AYU programmes and projects." />
            <div className="project-card-grid">
              {verifiedProjects.map((project) => (
                <a className="project-card" href={`/?page=project&slug=${project.slug}`} key={project.slug}>
                  {project.coverImage ? <img src={project.coverImage} alt="" /> : null}
                  <span>{project.status}</span>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                  <strong>View project →</strong>
                </a>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}

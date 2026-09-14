import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import { projectGovernance, verifiedProjects, workPillars } from "../data/workData";

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title="AYU's constitutional mandate organized into clear areas of service."
        description="AYU's work is organized around nine programme pillars drawn from the Union's constitutional objectives, with projects and initiatives presented within the areas they serve."
        aside={
          <dl className="page-fact-list">
            <div><dt>Programme pillars</dt><dd>9</dd></div>
            <div><dt>Constitutional objectives</dt><dd>10</dd></div>
            <div><dt>Project oversight</dt><dd>Chairperson & Executive Committee</dd></div>
            <div><dt>Project reporting</dt><dd>Financial & narrative accountability</dd></div>
          </dl>
        }
      />

      <section className="section section-white">
        <div className="container">
          <SectionHeading
            eyebrow="Programme Pillars"
            title="Nine areas connect AYU's Constitution to practical community service."
            description="Each programme area explains its constitutional mandate, related objectives and the Executive portfolios connected to that area of work."
          />

          <div className="program-pillar-grid">
            {workPillars.map((pillar, index) => (
              <a className="program-pillar-card" href={`/?page=program&slug=${pillar.slug}`} key={pillar.slug}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{pillar.title}</h3>
                <p>{pillar.summary}</p>
                <strong>Explore programme area →</strong>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <SectionHeading
            light
            eyebrow="Project Governance"
            title="AYU projects follow a constitutional accountability cycle."
            description="Specific programmes and projects may be assigned to organizing committees under the supervision of the Chairperson and Executive Committee."
          />

          <div className="governance-cycle-grid">
            {projectGovernance.map((item) => (
              <article className="governance-cycle-card" key={item.step}>
                <span>{item.step}</span>
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

import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import { verifiedProjects, workPillars } from "../data/workData";
import WorkPage from "./WorkPage";

export default function ProgramPage({ slug }: { slug: string }) {
  const pillar = workPillars.find((item) => item.slug === slug);

  if (!pillar) return <WorkPage />;

  const projects = verifiedProjects.filter((project) => project.pillarSlug === pillar.slug);

  return (
    <>
      <PageHero
        eyebrow="AYU Programme Area"
        title={pillar.title}
        description={pillar.summary}
        aside={
          <dl className="page-fact-list">
            <div><dt>Programme area</dt><dd>{pillar.title}</dd></div>
            <div><dt>Related offices</dt><dd>{pillar.relatedOffices.join(", ")}</dd></div>
            <div><dt>Institutional basis</dt><dd>AYU Constitution</dd></div>
          </dl>
        }
      />

      <section className="section section-white">
        <div className="container program-mandate-grid">
          <div>
            <p className="eyebrow">Mandate</p>
            <h2 className="display-title">Why this programme area matters to AYU.</h2>
          </div>
          <div className="prose-stack">
            <p>{pillar.mandate}</p>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <SectionHeading eyebrow="Related Objectives" title="Constitutional priorities connected to this programme area." />
          <div className="program-objective-grid">
            {pillar.relatedObjectives.map((objective, index) => (
              <article key={objective}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{objective}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-sky">
        <div className="container related-office-grid">
          <div>
            <p className="eyebrow">Related Executive Portfolios</p>
            <h2 className="display-title">Institutional responsibility remains connected to AYU's governance structure.</h2>
          </div>
          <div className="related-office-list">
            {pillar.relatedOffices.map((office) => <div key={office}>{office}</div>)}
          </div>
        </div>
      </section>

      {projects.length > 0 ? (
        <section className="section section-white">
          <div className="container">
            <SectionHeading eyebrow="Projects & Initiatives" title={`AYU work under ${pillar.title}.`} />
            <div className="project-card-grid">
              {projects.map((project) => (
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

      <section className="section section-dark programme-standard-section">
        <div className="container programme-standard-grid">
          <div>
            <p className="eyebrow eyebrow-light">Programme Accountability</p>
            <h2 className="display-title display-title-light">Projects are carried out within AYU's constitutional framework.</h2>
          </div>
          <p>
            AYU programme implementation is guided by defined objectives, responsible resource use, regular progress reporting and final financial and narrative accountability to the Executive Committee.
          </p>
        </div>
      </section>
    </>
  );
}

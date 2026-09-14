import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import { verifiedProjects, workPillars } from "../data/workData";
import WorkPage from "./WorkPage";

export default function ProjectPage({ slug }: { slug: string }) {
  const project = verifiedProjects.find((item) => item.slug === slug);

  if (!project) return <WorkPage />;

  const pillar = workPillars.find((item) => item.slug === project.pillarSlug);

  return (
    <>
      <PageHero
        eyebrow={pillar ? pillar.title : "AYU Project"}
        title={project.title}
        description={project.summary}
        aside={
          <dl className="page-fact-list">
            <div><dt>Status</dt><dd>{project.status}</dd></div>
            {project.startDate ? <div><dt>Start</dt><dd>{project.startDate}</dd></div> : null}
            {project.endDate ? <div><dt>End</dt><dd>{project.endDate}</dd></div> : null}
            {project.location ? <div><dt>Location</dt><dd>{project.location}</dd></div> : null}
          </dl>
        }
      />

      {project.coverImage ? (
        <section className="project-cover-section">
          <div className="container">
            <img className="project-cover-image" src={project.coverImage} alt={`${project.title} project`} />
          </div>
        </section>
      ) : null}

      <section className="section section-white">
        <div className="container project-detail-grid">
          <div>
            <p className="eyebrow">Project Overview</p>
            <h2 className="display-title">About this work.</h2>
          </div>
          <div className="prose-stack">
            <p>{project.description}</p>
            {project.beneficiaries ? (
              <div className="project-detail-fact">
                <span>Who it serves</span>
                <strong>{project.beneficiaries}</strong>
              </div>
            ) : null}
          </div>
        </div>
      </section>

      {project.outcomes?.length ? (
        <section className="section section-soft">
          <div className="container">
            <SectionHeading eyebrow="Results" title="What the project achieved." />
            <div className="project-outcome-grid">
              {project.outcomes.map((outcome) => (
                <article key={outcome}>
                  <p>{outcome}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {project.gallery?.length ? (
        <section className="section section-white">
          <div className="container">
            <SectionHeading eyebrow="Project Gallery" title="Photos from the work." />
            <div className="project-gallery-grid">
              {project.gallery.map((image) => (
                <img key={image.src} src={image.src} alt={image.alt} loading="lazy" decoding="async" />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {project.reports?.length ? (
        <section className="section section-sky">
          <div className="container project-report-grid">
            <div>
              <p className="eyebrow">Reports & Documents</p>
              <h2 className="display-title">Public project documents.</h2>
            </div>
            <div className="project-report-list">
              {project.reports.map((report) => <a key={report.href} href={report.href}>{report.label} →</a>)}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}

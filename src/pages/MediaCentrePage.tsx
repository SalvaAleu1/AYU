import { useMemo, useState } from "react";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import { mediaResources, mediaResourcesFor, type MediaCategory } from "../data/mediaData";

export default function MediaCentrePage() {
  const availableCategories = useMemo(() => {
    const present = new Set(mediaResources.map((resource) => resource.category));
    return ["All", ...Array.from(present)] as Array<"All" | MediaCategory>;
  }, []);

  const [category, setCategory] = useState<"All" | MediaCategory>("All");
  const [query, setQuery] = useState("");
  const resources = mediaResourcesFor(category, query);

  return (
    <>
      <PageHero
        eyebrow="Media Centre"
        title="Official AYU resources for the public and media."
        description="Find approved AYU publications, press information, identity materials and public downloads in one place."
        aside={
          <dl className="page-fact-list">
            <div><dt>Organization</dt><dd>Apuk Youth Union in Juba</dd></div>
            <div><dt>Official motto</dt><dd>Together for Peace, Unity and Development</dd></div>
          </dl>
        }
      />

      <section className="section section-white">
        <div className="container">
          <SectionHeading
            eyebrow="Official Resources"
            title="AYU materials that are available to the public."
            description="Use the search box or categories to find publications, press resources and approved AYU identity materials."
          />

          <div className="media-toolbar">
            <label>
              <span>Search Media Centre</span>
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                aria-label="Search AYU Media Centre"
              />
            </label>

            <div className="filter-chip-row" aria-label="Media Centre categories">
              {availableCategories.map((item) => (
                <button
                  type="button"
                  className={category === item ? "filter-chip active" : "filter-chip"}
                  key={item}
                  onClick={() => setCategory(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="media-resource-grid">
            {resources.map((resource) => (
              <article className="media-resource-card" key={resource.id}>
                <span>{resource.category}</span>
                <h3>{resource.title}</h3>
                <p>{resource.description}</p>
                <a
                  className="text-link"
                  href={resource.href}
                  download={resource.download || undefined}
                  target={resource.external ? "_blank" : undefined}
                  rel={resource.external ? "noreferrer" : undefined}
                >
                  {resource.download ? "Download resource ↓" : "Open resource →"}
                </a>
              </article>
            ))}
          </div>

          {resources.length === 0 ? (
            <div className="archive-empty-state">
              <strong>No matching resource</strong>
              <p>Try a different search term or category.</p>
            </div>
          ) : null}
        </div>
      </section>

      <section className="section section-soft">
        <div className="container media-centre-principles">
          <div>
            <p className="eyebrow">Public Information</p>
            <h2 className="display-title">A clear place for official AYU materials.</h2>
          </div>
          <div className="media-principle-grid">
            <div><strong>Official identity</strong><p>Approved AYU identity materials are kept separate from third-party content.</p></div>
            <div><strong>Publications</strong><p>Public AYU documents are organized for easy access.</p></div>
            <div><strong>Press resources</strong><p>Journalists and community communicators can find approved AYU resources here.</p></div>
            <div><strong>News</strong><p>Current updates and statements remain in the News & Updates section.</p></div>
          </div>
        </div>
      </section>
    </>
  );
}

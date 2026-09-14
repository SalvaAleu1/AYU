import PageHero from "../components/PageHero";
import { getSuccessStory } from "../data/impactData";
import ImpactPage from "./ImpactPage";

export default function SuccessStoryPage({ slug }: { slug: string }) {
  const story = getSuccessStory(slug);

  if (!story) return <ImpactPage />;

  return (
    <>
      <PageHero
        eyebrow={story.programmeArea}
        title={story.title}
        description={story.summary}
        aside={story.photo ? <img className="profile-hero-photo" src={story.photo} alt={story.name} /> : undefined}
      />

      <section className="section section-white">
        <div className="container profile-page-grid">
          <div>
            <p className="eyebrow">Youth Story</p>
            <h2 className="display-title">{story.name}</h2>
          </div>
          <article className="article-body">
            {story.story.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <a className="text-link" href="/?page=impact">← Back to Impact</a>
          </article>
        </div>
      </section>
    </>
  );
}

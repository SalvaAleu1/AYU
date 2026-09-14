import PageHero from "../components/PageHero";
import { currentLeadership } from "../data/leadershipData";
import LeadershipPage from "./LeadershipPage";

export default function LeaderProfilePage({ slug }: { slug: string }) {
  const leader = currentLeadership.find((profile) => profile.slug === slug);

  if (!leader) return <LeadershipPage />;

  return (
    <>
      <PageHero
        eyebrow={leader.role}
        title={leader.name}
        description={leader.shortBio ?? ""}
        aside={leader.photo ? <img className="profile-hero-photo" src={leader.photo} alt={leader.name} /> : undefined}
      />

      <section className="section section-white">
        <div className="container profile-page-grid">
          <div>
            <p className="eyebrow">Biography</p>
            <h2 className="display-title">About {leader.name}</h2>
          </div>
          <div className="prose-stack">
            {leader.biography ? <p>{leader.biography}</p> : null}
            <h3>Responsibilities</h3>
            <ul className="profile-responsibilities">
              {leader.responsibilities.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

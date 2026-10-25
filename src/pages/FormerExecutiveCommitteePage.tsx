import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import { formerLeadership } from "../data/leadershipData";

export default function FormerExecutiveCommitteePage() {
  return (
    <>
      <PageHero
        eyebrow="AYU Leadership Archive"
        title="Former Executive Committee, 2024–2026."
        description="This page records the executive members who served with former Chairperson Agany Geng Ayiei during the 2024–2026 term."
      />
      <section className="section section-white">
        <div className="container">
          <SectionHeading
            eyebrow="Historical leadership"
            title="Executive Committee led by Agany Geng Ayiei."
            description="Meet the team that worked alongside Agany Geng Ayiei during his term as Chairperson."
          />
          <div className="leader-feature-card">
            <img src="/leadership/agany-geng-ayiei.webp" alt="Agany Geng Ayiei, former Chairperson" />
            <div>
              <span>Former Chairperson · 2024–2026</span>
              <h2>Agany Geng Ayiei</h2>
              <p>Former Chairperson of Apuk Youth Union in Juba.</p>
              <a className="text-link" href="/?page=leader-achievements&slug=agany-geng-ayiei">View achievements and administrative report →</a>
              <p><a className="text-link" href="/?page=chairpersons-history">Chairpersons history →</a></p>
            </div>
          </div>
          <div className="leader-grid" aria-label="Former AYU Executive Committee 2024–2026">
            {formerLeadership.filter((leader) => leader.slug !== "agany-geng-ayiei").map((leader) => (
              <article className="leader-card" key={leader.slug}>
                {leader.photo ? <img src={leader.photo} alt={leader.name} loading="lazy" /> : null}
                <span>Former {leader.role}</span>
                <h3>{leader.name}</h3>
                {leader.shortBio ? <p>{leader.shortBio}</p> : null}
                <a className="text-link" href={"/?page=leader&slug=" + leader.slug}>View former profile →</a>

              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

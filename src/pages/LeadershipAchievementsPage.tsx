import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import { formerLeadership } from "../data/leadershipData";

const achievements = [
  {
    title: "Apuk Youth Center in Eden",
    detail: "Established the Apuk Youth Center in Eden as a space for youth engagement, leadership development, cultural activities, sports and community initiatives. Land documentation and construction of the proposed halls remain outstanding.",
  },
  {
    title: "Historic inauguration ceremony",
    detail: "Organized an inauguration ceremony that brought members and stakeholders together and marked a new leadership chapter.",
  },
  {
    title: "Response to the cholera outbreak",
    detail: "Responded to the cholera outbreak affecting communities back home, demonstrating solidarity and support for vulnerable people.",
  },
  {
    title: "Modern constitution and standard logo",
    detail: "Facilitated the adoption of the modern Constitution and a standard Union logo.",
  },
  {
    title: "Renewal of RRC registration",
    detail: "Renewed the Union's registration with the Relief and Rehabilitation Commission after the previous registration expired in 2019.",
  },
  {
    title: "Representation of youth interests",
    detail: "Represented Apuk youth, raised community concerns and advocated for opportunities, inclusion and development.",
  },
  {
    title: "Official bank account process",
    detail: "Initiated the process of opening an official Union bank account to strengthen financial accountability and record-keeping.",
  },
  {
    title: "Official website",
    detail: "Established the official AYU website to improve communication, transparency and preservation of the Union's institutional information.",
  },
  {
    title: "Youth skills development and training",
    detail: "Facilitated training opportunities: two youth in forex banking through St. Barnabas Business College, six youth in computer and robotics through STEM, and five youth in programmes organized by the South Sudan National Youth Union.",
  },
  {
    title: "Peace and reconciliation",
    detail: "Initiated a peace and reconciliation process with Apuk Giir Youth Union. The process remains ongoing.",
  },
  {
    title: "Leadership manifesto",
    detail: "The outgoing leadership estimated that approximately 80% of its manifesto was achieved. Financial constraints, limited mobility and logistical challenges affected the remaining commitments.",
  },
  {
    title: "Institutional foundations",
    detail: "Constitutional reform, registration renewal, the standard logo, the youth center and the official website established foundations for future leadership.",
  },
];

const challenges = [
  "Inadequate financial support.",
  "Limited mobility for Executive Committee members.",
  "Inconsistent payment of membership and subscription fees.",
  "Incomplete land documentation for the youth center.",
  "Construction of Giirdit Thiik Hall and Salva Mathokdit Hall not commenced because of inadequate funding.",
  "High expectations from vulnerable youth that exceeded available resources.",
  "Difficulties collecting pledges and mobilizing resources.",
  "Inconsistent participation in Union activities.",
  "Delays in institutional and development projects, including land documentation and the official bank account.",
  "The peace and reconciliation process remains unfinished.",
  "Limited capacity to meet growing community needs.",
  "Difficulty balancing immediate needs with long-term development.",
];

const recommendations = [
  "Complete the youth center land documentation.",
  "Begin phased construction of Giirdit Thiik Hall and Salva Mathokdit Hall.",
  "Uphold constitutional membership requirements, including the registration fee and educational qualifications for Chairperson and Deputy Chairperson, unless properly amended.",
  "Strengthen cooperation with sectional leaders.",
  "Continue the peace and reconciliation process.",
  "Intensify pledge collection and resource mobilization with transparent records and regular financial reporting.",
  "Maintain high institutional standards and ensure leaders act in the interests of the community.",
  "Continue supporting sports and cultural activities.",
  "Uphold and enforce the Constitution.",
  "Continue representing community interests and engaging stakeholders.",
  "Complete the official bank account process.",
  "Keep the official website active and updated.",
  "Improve membership registration and subscription collection.",
  "Establish a sustainable youth empowerment programme focused on practical skills, entrepreneurship, digital literacy and financial literacy.",
  "Strengthen accountability through regular administrative and financial reporting.",
  "Promote volunteerism and shared responsibility.",
  "Preserve achievements from the 2024–2026 term and build on them.",
];

export default function LeadershipAchievementsPage({ slug }: { slug: string }) {
  const leader = formerLeadership.find((profile) => profile.slug === slug);

  if (slug !== "agany-geng-ayiei") {
    return (
      <>
        <PageHero eyebrow="Past Leadership" title={leader ? leader.name : "Leadership achievements"} description={leader ? `Achievements record for the ${leader.role} during the 2024–2026 term.` : "Leadership achievements."} />
        <section className="section section-white">
          <div className="container prose-stack">
            <p>No separate achievements record has been published for this former leadership profile.</p>
            <a className="text-link" href="/?page=former-executive-committee">Back to past leadership →</a>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHero
        eyebrow="Past Leadership · 2024–2026"
        title="Achievements of Agany Geng Ayiei’s leadership."
        description="Administrative report of the Apuk Youth Union in Juba leadership for 2024–2026."
        aside={<dl className="page-fact-list"><div><dt>Chairperson</dt><dd>Agany Geng Ayiei</dd></div><div><dt>Reporting period</dt><dd>2024–2026</dd></div><div><dt>Manifesto reported</dt><dd>Approximately 80% achieved</dd></div></dl>}
      />
      <section className="section section-white">
        <div className="container">
          <SectionHeading eyebrow="Administrative Report" title="Achievements." description="The following achievements are recorded in the outgoing leadership’s administrative report." />
          <div className="role-grid">
            {achievements.map((item, index) => (
              <article className="role-card" key={item.title}>
                <div className="role-card-topline"><span>{String(index + 1).padStart(2, "0")}</span><h3>{item.title}</h3></div>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section section-soft">
        <div className="container">
          <SectionHeading eyebrow="Administrative Report" title="Challenges recorded." />
          <ol className="profile-responsibilities">{challenges.map((item) => <li key={item}>{item}</li>)}</ol>
        </div>
      </section>
      <section className="section section-white">
        <div className="container">
          <SectionHeading eyebrow="Administrative Report" title="Recommendations to the incoming leadership." />
          <ol className="profile-responsibilities">{recommendations.map((item) => <li key={item}>{item}</li>)}</ol>
        </div>
      </section>
      <section className="section section-soft">
        <div className="container prose-stack">
          <h2 className="display-title">Conclusion.</h2>
          <p>The 2024–2026 leadership concludes its term having contributed to institutional development, youth representation, community service, skills development and peacebuilding. The report notes that financial constraints, limited mobility, inconsistent membership payments and unfinished projects prevented the leadership from achieving every manifesto objective.</p>
          <p>The report calls on members to support the incoming leadership, protect the Union’s achievements and remain committed to peace, unity and development.</p>
          <p><strong>Submitted by:</strong> Agany Geng Ayiei, Chairperson, and Bol Mariano Akoi, Secretary General, Apuk Youth Union in Juba.</p>
          <a className="text-link" href="/?page=former-executive-committee">Back to past leadership →</a>
        </div>
      </section>
    </>
  );
}

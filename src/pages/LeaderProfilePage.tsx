import { useEffect } from "react";
import PageHero from "../components/PageHero";
import { currentLeadership } from "../data/leadershipData";
import LeadershipPage from "./LeadershipPage";

function setMeta(name: string, content: string, property = false) {
  const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement("meta");
    if (property) element.setAttribute("property", name);
    else element.setAttribute("name", name);
    document.head.appendChild(element);
  }
  element.content = content;
}

function setCanonical(url: string) {
  let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!link) {
    link = document.createElement("link");
    link.rel = "canonical";
    document.head.appendChild(link);
  }
  link.href = url;
}

export default function LeaderProfilePage({ slug }: { slug: string }) {
  const leader = currentLeadership.find((profile) => profile.slug === slug);
  const pageUrl = `https://apukyouthunion.org/?page=leader&slug=${encodeURIComponent(slug)}`;

  useEffect(() => {
    if (!leader) return;
    const status = leader.isCurrent ? "Current" : "Former";
    const roleLabel = `${status} ${leader.role} of Apuk Youth Union in Juba`;
    const title = `${leader.name} | ${roleLabel}`;
    const description = `${leader.name} is ${leader.isCurrent ? "the current" : "a former"} ${leader.role} of Apuk Youth Union in Juba, South Sudan. View the official AYU-Juba leadership profile, responsibilities and service record.`;
    document.title = title;
    setMeta("description", description);
    setMeta("robots", "index,follow,max-image-preview:large");
    setMeta("googlebot", "index,follow,max-image-preview:large");
    setCanonical(pageUrl);
    setMeta("og:type", "profile", true);
    setMeta("og:site_name", "Apuk Youth Union in Juba", true);
    setMeta("og:title", title, true);
    setMeta("og:description", description, true);
    setMeta("og:url", pageUrl, true);
    if (leader.photo) setMeta("og:image", leader.photo.startsWith("http") ? leader.photo : `https://apukyouthunion.org${leader.photo}`, true);
    setMeta("twitter:card", "summary", false);
    setMeta("twitter:title", title, false);
    setMeta("twitter:description", description, false);

    const schemaId = "ayu-leader-structured-data";
    let script = document.getElementById(schemaId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.id = schemaId;
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ProfilePage",
      "@id": `${pageUrl}#profilepage`,
      url: pageUrl,
      name: title,
      description,
      isPartOf: { "@id": "https://apukyouthunion.org/#website" },
      mainEntity: {
        "@type": "Person",
        name: leader.name,
        jobTitle: roleLabel,
        description,
        image: leader.photo ? (leader.photo.startsWith("http") ? leader.photo : `https://apukyouthunion.org${leader.photo}`) : undefined,
        worksFor: {
          "@type": "Organization",
          name: "Apuk Youth Union in Juba",
          url: "https://apukyouthunion.org/"
        },
        url: pageUrl
      }
    });

    return () => {
      document.title = "Apuk Youth Union in Juba | Official AYU-Juba Website";
      const defaultCanonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
      if (defaultCanonical) defaultCanonical.href = "https://apukyouthunion.org/";
      const leaderSchema = document.getElementById(schemaId);
      if (leaderSchema) leaderSchema.remove();
    };
  }, [leader, pageUrl]);

  if (!leader) return <LeadershipPage />;

  const status = leader.isCurrent ? "Current" : "Former";
  const roleLabel = `${status} ${leader.role} of Apuk Youth Union in Juba`;

  return (
    <>
      <PageHero
        eyebrow={roleLabel}
        title={leader.name}
        description={`${leader.name} is ${leader.isCurrent ? "the current" : "a former"} ${leader.role} of Apuk Youth Union in Juba, South Sudan.`}
        aside={leader.photo ? <img className="profile-hero-photo" src={leader.photo} alt={`Portrait of ${leader.name}, ${roleLabel}`} /> : undefined}
      />

      <section className="section section-white">
        <div className="container profile-page-grid">
          <div>
            <p className="eyebrow">{status} Executive Committee Profile</p>
            <h2 className="display-title">About {leader.name}</h2>
            <p>{roleLabel}</p>
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

import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import { ayuIdentity } from "../data/siteData";

const symbols = [
  {
    name: "Hawk",
    meaning: "Represents the identity of the Apuk Community.",
  },
  {
    name: "Handshake",
    meaning: "Represents harmony and togetherness among Apuk youth.",
  },
  {
    name: "Green",
    meaning: "Represents the resources of the community.",
  },
  {
    name: "Stars",
    meaning: "Represent the sections of the Apuk Community.",
  },
];

export default function IdentityPage() {
  return (
    <>
      <PageHero
        eyebrow="AYU Identity"
        title="Represent Apuk heritage, unity and community."
        description="The official AYU emblem carries meaning through the hawk, handshake, green background and stars."
        aside={
          <div className="identity-hero-logo">
            <img src="/ayu-logo.webp" alt="Official Apuk Youth Union in Juba logo" width="260" height="250" />
          </div>
        }
      />

      <section className="section section-white">
        <div className="container identity-logo-grid">
          <div className="official-mark-card">
            <img src="/ayu-logo.webp" alt="Official Apuk Youth Union in Juba emblem" width="360" height="346" />
          </div>
          <div>
            <p className="eyebrow">Official Emblem</p>
            <h2 className="display-title">The AYU emblem represents the Union and the wider Apuk community.</h2>
            <p className="section-body-copy">
              The Constitution provides for an AYU logo that includes the hawk, a green background, a handshake and the word “Juba.” The stars represent the sections of the Apuk Community.
            </p>
            <p className="section-body-copy">
              The motto — <strong>{ayuIdentity.motto}</strong> — expresses the values AYU seeks to promote through its work.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <SectionHeading eyebrow="Meaning of the Symbols" title="What the main symbols represent." />
          <div className="symbol-grid">
            {symbols.map((symbol) => (
              <article className="symbol-card" key={symbol.name}>
                <h3>{symbol.name}</h3>
                <p>{symbol.meaning}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container power-symbol-grid">
          <div>
            <p className="eyebrow eyebrow-light">Instrument of Office</p>
            <h2 className="display-title display-title-light">The hawk and grey gown.</h2>
          </div>
          <p>
            The Constitution identifies the hawk and a grey gown as the instruments of office for the Chairperson of Apuk Youth Union in Juba.
          </p>
        </div>
      </section>
    </>
  );
}

import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import { ayuIdentity } from "../data/siteData";

const symbols = [
  {
    name: "Hawk",
    meaning: "Symbolizes the identity of the Apuk Community.",
  },
  {
    name: "Handshake",
    meaning: "Represents harmony and togetherness among the youth of Apuk.",
  },
  {
    name: "Green",
    meaning: "Represents the resources of the community.",
  },
  {
    name: "Stars",
    meaning: "Represent all the sections of the Apuk Community.",
  },
];

const visualPalette = [
  { name: "Deep green", className: "swatch-green" },
  { name: "White", className: "swatch-white" },
  { name: "Black", className: "swatch-black" },
  { name: "Sky blue", className: "swatch-sky" },
  { name: "Gold / yellow", className: "swatch-gold" },
];

export default function IdentityPage() {
  return (
    <>
      <PageHero
        eyebrow="AYU Identity"
        title="A visual identity rooted in Apuk heritage, unity and community."
        description="The official AYU emblem carries constitutional meaning through the hawk, handshake, green field and stars, while the website's supporting palette is drawn from the colours visibly present in the approved emblem."
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
            <h2 className="display-title">The AYU mark carries the Union's constitutional identity.</h2>
            <p className="section-body-copy">
              The Constitution provides that AYU-Juba shall use a logo incorporating the hawk, a green background, a handshake and the word “Juba.” The emblem also includes stars representing the sections of the Apuk Community.
            </p>
            <p className="section-body-copy">
              The motto — <strong>{ayuIdentity.motto}</strong> — appears as the Union's central public brand line and expresses the values members aspire to advance in Juba and in Apuk lands.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <SectionHeading eyebrow="Meaning of the Symbols" title="Every core symbol has a constitutional meaning." />
          <div className="symbol-grid">
            {symbols.map((symbol, index) => (
              <article className="symbol-card" key={symbol.name}>
                <span>{String(index + 1).padStart(2, "0")}</span>
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
            The Constitution identifies the hawk and a grey gown as the representing instruments of power for the Chairperson of Apuk Youth Union in Juba.
          </p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container">
          <SectionHeading
            eyebrow="Website Palette"
            title="A restrained digital palette drawn from the approved emblem."
            description="Green leads the institutional identity, with white and black providing clarity and contrast, while sky blue and gold/yellow are used as controlled accents."
          />
          <div className="palette-grid" aria-label="AYU website colour palette">
            {visualPalette.map((colour) => (
              <div className="palette-card" key={colour.name}>
                <span className={`colour-swatch ${colour.className}`} aria-hidden="true" />
                <strong>{colour.name}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-sky">
        <div className="container identity-usage-grid">
          <div>
            <p className="eyebrow">Institutional Use</p>
            <h2 className="display-title">Consistent presentation protects the identity of AYU.</h2>
          </div>
          <div className="usage-principles">
            <div><strong>Use the approved emblem</strong><p>Official AYU communications should use the approved logo rather than recreated or improvised versions.</p></div>
            <div><strong>Preserve proportions</strong><p>The emblem should remain proportionate and should not be stretched, compressed or distorted.</p></div>
            <div><strong>Maintain legibility</strong><p>Use sufficient clear space and contrast so the emblem and its wording remain readable across screen sizes.</p></div>
            <div><strong>Respect institutional context</strong><p>The AYU mark should represent the Union itself and should not be used in ways that imply endorsement of unrelated organizations or activities.</p></div>
          </div>
        </div>
      </section>
    </>
  );
}

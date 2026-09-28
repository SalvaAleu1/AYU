import PageHero from "../components/PageHero";

const phoneNumbers = [
  { display: "+211 928 888 455", href: "tel:+211928888455" },
  { display: "+211 922 334 966", href: "tel:+211922334966" },
  { display: "+211 914 526 196", href: "tel:+211914526196" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Contact Apuk Youth Union in Juba."
        description="Call AYU using any of the numbers below or follow us on Facebook."
      />

      <section className="section section-white">
        <div className="container">
          <div className="two-panel-grid">
            <article className="statement-panel">
              <span>Contact Us</span>
              <h3>Phone numbers</h3>
              <div className="prose-stack">
                {phoneNumbers.map((phone) => (
                  <p key={phone.display}>
                    <a className="text-link" href={phone.href}>{phone.display}</a>
                  </p>
                ))}
              </div>
            </article>

            <article className="statement-panel statement-panel-green">
              <span>Facebook</span>
              <h3>Follow us on Facebook</h3>
              <a
                href="https://www.facebook.com/share/1DVfeebTUc/"
                target="_blank"
                rel="noreferrer"
                aria-label="Follow us on Facebook"
                title="Follow us on Facebook"
                style={{ display: "inline-flex", alignItems: "center", gap: "0.65rem" }}
              >
                <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true" fill="currentColor"><path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.414c0-3.025 1.792-4.697 4.533-4.697 1.313 0 2.686.236 2.686.236v2.974h-1.513c-1.49 0-1.956.931-1.956 1.887v2.259h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/></svg>
                <strong>Follow us on Facebook</strong>
              </a>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}

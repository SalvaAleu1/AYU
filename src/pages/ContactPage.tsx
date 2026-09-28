import PageHero from "../components/PageHero";

const phoneNumbers = [
  "+211 928 888 455",
  "+211 922 334 966",
  "+211 914 526 196",
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Contact Apuk Youth Union in Juba."
        description="Get in touch with Apuk Youth Union in Juba using the contact details below."
      />

      <section className="section section-white">
        <div className="container">
          <div className="two-panel-grid">
            <article className="statement-panel">
              <span>Phone</span>
              <h3>Contact numbers</h3>
              <div className="prose-stack">
                {phoneNumbers.map((phone) => (
                  <p key={phone}>
                    <a className="text-link" href={`tel:${phone.replace(/\s/g, "")}`}>{phone}</a>
                  </p>
                ))}
              </div>
            </article>

            <article className="statement-panel statement-panel-green">
              <span>Social Media</span>
              <h3>Follow AYU on Facebook</h3>
              <p>Follow Apuk Youth Union in Juba on Facebook for updates and announcements.</p>
              <a
                className="button button-dark"
                href="https://www.facebook.com/share/1DVfeebTUc/"
                target="_blank"
                rel="noreferrer"
                aria-label="Follow Apuk Youth Union in Juba on Facebook"
              >
                <span aria-hidden="true">f</span> Facebook
              </a>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}

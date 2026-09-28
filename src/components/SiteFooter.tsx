const footerLinks = [
  { href: "/?page=about", label: "About AYU" },
  { href: "/?page=leadership", label: "Leadership" },
  { href: "/?page=chairpersons-history", label: "Chairpersons History" },
  { href: "/?page=history", label: "Advisory & History" },
  { href: "/?page=work", label: "Our Work" },
  { href: "/?page=news", label: "News & Updates" },
  { href: "/?page=events", label: "Events" },
  { href: "/?page=impact", label: "Impact" },
  { href: "/?page=media", label: "Media Centre" },
  { href: "/?page=governance", label: "Governance & Transparency" },
  { href: "/?page=constitution", label: "Constitution" },
  { href: "/?page=elections", label: "Elections" },
  { href: "/?page=youth-hub", label: "Apuk Youth Hub" },
  { href: "/?page=partners", label: "Partners & Support" },
  { href: "/?page=membership", label: "Membership" },
  { href: "/?page=contact", label: "Contact" },
  { href: "/?page=search", label: "Search" },
  { href: "/?page=utilities", label: "Website Tools" },
];

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand">
          <img src="/ayu-logo.webp" alt="Apuk Youth Union in Juba logo" width="78" height="75" />
          <div><strong>Apuk Youth Union in Juba</strong><p>Together for Peace, Unity and Development.</p></div>
        </div>

        <nav className="footer-nav" aria-label="Footer navigation">
          {footerLinks.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
        </nav>

        <div className="footer-location">
          <a href="https://www.facebook.com/share/1DVfeebTUc/" target="_blank" rel="noreferrer" aria-label="Follow us on Facebook" title="Follow us on Facebook" style={{ display: "inline-flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.75rem" }}><svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true" fill="currentColor"><path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.414c0-3.025 1.792-4.697 4.533-4.697 1.313 0 2.686.236 2.686.236v2.974h-1.513c-1.49 0-1.956.931-1.956 1.887v2.259h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/></svg><strong>Follow Us on Facebook</strong></a>
          <span className="footer-kicker">Registered office</span>
          <strong>Juba, South Sudan</strong>
          <p>Non-political · Non-profit youth union</p>
        </div>
      </div>

      <div className="container footer-bottom footer-bottom-final">
        <span>© 2026 Apuk Youth Union in Juba. All rights reserved.</span>

        <a href="#main-content">Back to top ↑</a>
      </div>
    </footer>
  );
}

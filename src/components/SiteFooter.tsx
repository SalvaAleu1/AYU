const footerLinks = [
  { href: "/?page=about", label: "About AYU" },
  { href: "/?page=leadership", label: "Leadership" },
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
];

const legalLinks = [
  { href: "/?page=privacy", label: "Privacy Policy" },
  { href: "/?page=terms", label: "Terms of Use" },
  { href: "/?page=accessibility", label: "Accessibility" },
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
          <span className="footer-kicker">Registered office</span>
          <strong>Juba, South Sudan</strong>
          <p>Non-political · Non-profit youth union</p>
        </div>
      </div>

      <div className="container footer-bottom footer-bottom-final">
        <span>© 2026 Apuk Youth Union in Juba. All rights reserved.</span>
        <nav aria-label="Legal navigation">{legalLinks.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}</nav>
        <a href="#main-content">Back to top ↑</a>
      </div>
    </footer>
  );
}

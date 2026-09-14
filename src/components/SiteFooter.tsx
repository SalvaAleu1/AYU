const footerLinks = [
  { href: "#about", label: "About AYU" },
  { href: "#work", label: "Our Work" },
  { href: "#membership", label: "Membership" },
  { href: "#governance", label: "Governance" },
  { href: "#partners", label: "Partners" },
  { href: "#constitution", label: "Constitution" },
];

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand">
          <img src="/ayu-logo.webp" alt="Apuk Youth Union in Juba logo" width="78" height="75" />
          <div>
            <strong>Apuk Youth Union in Juba</strong>
            <p>Together for Peace, Unity and Development.</p>
          </div>
        </div>

        <nav className="footer-nav" aria-label="Footer navigation">
          {footerLinks.map((link) => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
        </nav>

        <div className="footer-location">
          <span className="footer-kicker">Registered office</span>
          <strong>Juba, South Sudan</strong>
          <p>Non-political · Non-profit youth union</p>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© 2026 Apuk Youth Union in Juba. All rights reserved.</span>
        <a href="#home">Back to top ↑</a>
      </div>
    </footer>
  );
}

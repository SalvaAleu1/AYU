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

        <div className="footer-credit">
          <span>Designed in service to Apuk Community by Salva Aleu. Reach me:</span>
          <a
            className="footer-whatsapp"
            href="https://wa.me/211922507799"
            target="_blank"
            rel="noreferrer"
            aria-label="Message Salva Aleu on WhatsApp"
            title="Message Salva Aleu on WhatsApp"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2a9.55 9.55 0 0 0-8.14 14.55L2.5 21.5l5.08-1.33A9.5 9.5 0 1 0 12 2Zm0 17.2a7.67 7.67 0 0 1-3.91-1.06l-.28-.17-3.01.79.8-2.94-.18-.3A7.7 7.7 0 1 1 12 19.2Zm4.22-5.75c-.23-.12-1.36-.67-1.57-.75-.21-.08-.36-.12-.52.12-.15.23-.59.75-.72.9-.13.15-.27.17-.5.06-.23-.12-.97-.36-1.85-1.14a6.94 6.94 0 0 1-1.28-1.59c-.13-.23-.01-.35.1-.47.1-.1.23-.27.35-.4.12-.14.15-.23.23-.39.08-.15.04-.29-.02-.4-.06-.12-.52-1.25-.71-1.71-.19-.45-.38-.39-.52-.4h-.44c-.15 0-.4.06-.61.29-.21.23-.8.78-.8 1.9s.82 2.21.93 2.36c.12.15 1.61 2.46 3.9 3.45.55.24.97.38 1.3.48.55.17 1.04.15 1.43.09.44-.07 1.36-.56 1.55-1.09.19-.54.19-1.01.13-1.1-.06-.1-.21-.15-.44-.27Z" />
            </svg>
          </a>
        </div>

        <nav aria-label="Legal navigation">{legalLinks.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}</nav>
        <a href="#main-content">Back to top ↑</a>
      </div>
    </footer>
  );
}

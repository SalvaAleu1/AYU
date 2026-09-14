import { useEffect, useState } from "react";

const navItems = [
  { href: "/?page=about", label: "About" },
  { href: "/?page=leadership", label: "Leadership" },
  { href: "/?page=work", label: "Our Work" },
  { href: "/?page=news", label: "News" },
  { href: "/?page=governance", label: "Governance" },
  { href: "/?page=elections", label: "Elections" },
  { href: "/?page=youth-hub", label: "Youth Hub" },
  { href: "/?page=membership", label: "Membership" },
  { href: "/?page=search", label: "Search" },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <a className="brand" href="/" onClick={closeMenu} aria-label="Apuk Youth Union in Juba home">
          <img className="brand-logo" src="/ayu-logo.webp" alt="" width="52" height="50" />
          <span className="brand-text"><strong>Apuk Youth Union</strong><small>Juba, South Sudan</small></span>
        </a>

        <button
          className="menu-button"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span /><span /><span />
        </button>

        <nav id="primary-navigation" className={menuOpen ? "main-nav open" : "main-nav"} aria-label="Primary navigation">
          {navItems.map((item) => <a key={item.href} href={item.href} onClick={closeMenu}>{item.label}</a>)}
        </nav>
      </div>
    </header>
  );
}

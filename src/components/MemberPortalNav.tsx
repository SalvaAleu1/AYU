type MemberPortalNavProps = {
  active: "dashboard" | "profile" | "privacy" | "security";
};

const links = [
  { key: "dashboard", label: "Dashboard", href: "/?page=member-portal" },
  { key: "profile", label: "My Profile", href: "/?page=member-profile" },
  { key: "privacy", label: "Privacy", href: "/?page=member-privacy" },
  { key: "security", label: "Security", href: "/?page=member-security" },
] as const;

export default function MemberPortalNav({ active }: MemberPortalNavProps) {
  return (
    <nav className="portal-nav" aria-label="Member portal navigation">
      {links.map((link) => (
        <a
          key={link.key}
          href={link.href}
          className={active === link.key ? "active" : undefined}
          aria-current={active === link.key ? "page" : undefined}
        >
          {link.label}
        </a>
      ))}
      <a href="/">Public site</a>
    </nav>
  );
}

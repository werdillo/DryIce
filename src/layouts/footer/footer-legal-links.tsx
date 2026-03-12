import type { NavLink } from "./types";

interface FooterLegalLinksProps {
  links: NavLink[];
  ariaLabel: string;
}

export function FooterLegalLinks({ links, ariaLabel }: FooterLegalLinksProps) {
  return (
    <nav
      className="order-1 flex flex-col items-center gap-4 md:order-2 md:flex-row md:gap-8"
      aria-label={ariaLabel}
    >
      {links.map((link) => (
        <h5
          key={link.label}
          href={link.href}
          className="text-primary-foreground opacity-60 text-sm font-semibold hover:opacity-80 transition-opacity"
        >
          {link.label}
        </h5>
      ))}
    </nav>
  );
}

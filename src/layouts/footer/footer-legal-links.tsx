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
        <a
          key={link.label}
          href={link.href}
          className="text-[#151515] opacity-60 text-sm font-semibold uppercase hover:opacity-80 transition-opacity"
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}

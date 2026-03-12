import type { NavLink } from "./types";

interface FooterNavigationProps {
  links: NavLink[];
  ariaLabel: string;
}

export function FooterNavigation({ links, ariaLabel }: FooterNavigationProps) {
  return (
    <nav
      className="flex flex-col items-center gap-4 text-center md:flex-row md:gap-8"
      aria-label={ariaLabel}
    >
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          className="text-primary-foreground hover:opacity-80 transition-opacity"
        >
          <h4>{link.label}</h4>
        </a>
      ))}
    </nav>
  );
}

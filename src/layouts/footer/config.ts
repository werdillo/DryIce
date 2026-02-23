import type { FooterConfig } from "./types";

export const FOOTER_CONFIG: FooterConfig = {
  logo: {
    href: "/",
    ariaLabel: "Go to homepage",
    className: "size-7",
  },
  mainNavigation: {
    links: [
      { href: "#", label: "Home" },
      { href: "#", label: "About" },
      { href: "#", label: "Products" },
      { href: "#", label: "Services" },
      { href: "#", label: "Contact" },
    ],
    ariaLabel: "Footer navigation",
  },
  newsletter: {
    enabled: true,
    emailInputId: "footer2-email",
    emailPlaceholder: "Your email",
    buttonText: "Subscribe",
    ariaLabel: "Newsletter subscription form",
  },
  copyright: {
    siteName: "shadcndesign.com",
    siteUrl: "/",
  },
  legalLinks: {
    links: [
      { href: "#", label: "Privacy Policy" },
      { href: "#", label: "Terms of Service" },
      { href: "#", label: "Cookies Settings" },
    ],
    ariaLabel: "Legal links",
  },
  ariaLabel: "Site footer",
};

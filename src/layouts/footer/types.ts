export interface NavLink {
  href: string;
  label: string;
}

export interface FooterConfig {
  logo: {
    href: string;
    ariaLabel: string;
    className?: string;
  };
  mainNavigation: {
    links: NavLink[];
    ariaLabel: string;
  };
  newsletter: {
    enabled: boolean;
    emailInputId: string;
    emailPlaceholder: string;
    buttonText: string;
    ariaLabel: string;
  };
  copyright: {
    siteName: string;
    siteUrl: string;
  };
  legalLinks: {
    links: NavLink[];
    ariaLabel: string;
  };
  ariaLabel: string;
}

export interface FooterProps {
  config?: Partial<FooterConfig>;
}

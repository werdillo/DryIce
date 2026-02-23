import { Logo } from "@/components/pro-blocks/logo";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import { InputGroup, InputGroupInput } from "@/components/ui/input-group";

interface NavLink {
  href: string;
  label: string;
}

interface FooterConfig {
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

const FOOTER_CONFIG: FooterConfig = {
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

interface Footer2Props {
  config?: Partial<FooterConfig>;
}

export function Footer2({ config }: Footer2Props = {}) {
  const footerConfig = { ...FOOTER_CONFIG, ...config };
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-background section-padding-y text-sm"
      role="contentinfo"
      aria-label={footerConfig.ariaLabel}
    >
      <div className="container-padding-x mx-auto flex max-w-7xl flex-col gap-12 lg:gap-16">
        <div className="flex flex-col gap-12">
          {/* Top Section */}
          <div className="flex flex-col gap-12 md:items-center md:justify-between lg:flex-row">
            {/* Logo and Navigation */}
            <div className="flex flex-col items-center gap-12 lg:flex-row">
              {/* Logo */}
              <a
                href={footerConfig.logo.href}
                aria-label={footerConfig.logo.ariaLabel}
              >
                <Logo className={footerConfig.logo.className} />
              </a>

              {/* Main Navigation */}
              <nav
                className="flex flex-col items-center gap-4 text-center md:flex-row md:gap-8"
                aria-label={footerConfig.mainNavigation.ariaLabel}
              >
                {footerConfig.mainNavigation.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Newsletter Form */}
            {footerConfig.newsletter.enabled && (
              <form
                className="flex w-full flex-col gap-2 md:w-auto md:flex-row"
                aria-label={footerConfig.newsletter.ariaLabel}
              >
                <Field className="md:w-[242px]">
                  <FieldLabel
                    htmlFor={footerConfig.newsletter.emailInputId}
                    className="sr-only"
                  >
                    Email
                  </FieldLabel>
                  <InputGroup>
                    <InputGroupInput
                      id={footerConfig.newsletter.emailInputId}
                      type="email"
                      placeholder={footerConfig.newsletter.emailPlaceholder}
                      required
                      aria-required="true"
                      aria-label="Enter your email for newsletter"
                    />
                  </InputGroup>
                </Field>
                <Button
                  type="submit"
                  className="w-full md:w-auto"
                  aria-label="Subscribe to our newsletter"
                >
                  {footerConfig.newsletter.buttonText}
                </Button>
              </form>
            )}
          </div>

          {/* Section Divider */}
          <Separator role="presentation" />

          {/* Bottom Section */}
          <div className="flex flex-col items-center justify-between gap-12 text-center lg:flex-row">
            {/* Copyright Text */}
            <p className="text-muted-foreground order-2 md:order-1">
              <span>Copyright © {currentYear}</span>{" "}
              <a
                href={footerConfig.copyright.siteUrl}
                className="hover:underline"
              >
                {footerConfig.copyright.siteName}
              </a>
              . All rights reserved.
            </p>

            {/* Legal Navigation */}
            <nav
              className="order-1 flex flex-col items-center gap-4 md:order-2 md:flex-row md:gap-8"
              aria-label={footerConfig.legalLinks.ariaLabel}
            >
              {footerConfig.legalLinks.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}

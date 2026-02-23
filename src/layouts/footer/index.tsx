import { Separator } from "@/components/ui/separator";
import { FooterNavigation } from "./footer-navigation";
import { FooterNewsletter } from "./footer-newsletter";
import { FooterCopyright } from "./footer-copyright";
import { FooterLegalLinks } from "./footer-legal-links";
import { FOOTER_CONFIG } from "./config";
import type { FooterProps } from "./types";

export function Footer({ config }: FooterProps = {}) {
  const footerConfig = { ...FOOTER_CONFIG, ...config };
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-[#29ABE2] text-sm"
      role="contentinfo"
      aria-label={footerConfig.ariaLabel}
    >
      <div className="container-padding-x mx-auto flex max-w-7xl flex-col gap-12 py-24 pb-60">
        <div className="flex flex-col gap-12">
          {/* Top Section */}
          <div className="flex flex-col gap-12 md:items-center md:justify-between lg:flex-row">
            {/* Logo and Navigation */}
            <div className="flex flex-col items-center gap-12 lg:flex-row">
              <FooterNavigation
                links={footerConfig.mainNavigation.links}
                ariaLabel={footerConfig.mainNavigation.ariaLabel}
              />
            </div>

            {/* Newsletter Form */}
            {footerConfig.newsletter.enabled && (
              <FooterNewsletter
                emailInputId={footerConfig.newsletter.emailInputId}
                emailPlaceholder={footerConfig.newsletter.emailPlaceholder}
                buttonText={footerConfig.newsletter.buttonText}
                ariaLabel={footerConfig.newsletter.ariaLabel}
              />
            )}
          </div>

          {/* Section Divider */}
          <Separator role="presentation" />

          {/* Bottom Section */}
          <div className="flex flex-col items-center justify-between gap-12 text-center lg:flex-row">
            {/* Copyright Text */}
            <FooterCopyright
              siteName={footerConfig.copyright.siteName}
              siteUrl={footerConfig.copyright.siteUrl}
              currentYear={currentYear}
            />

            {/* Legal Navigation */}
            <FooterLegalLinks
              links={footerConfig.legalLinks.links}
              ariaLabel={footerConfig.legalLinks.ariaLabel}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export type { FooterProps, FooterConfig, NavLink } from "./types";
export { FOOTER_CONFIG } from "./config";

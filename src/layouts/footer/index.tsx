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
      className="relative overflow-hidden bg-[#29ABE2] max-sm:mb-14 text-sm"
      role="contentinfo"
      aria-label={footerConfig.ariaLabel}
    >
      <div className="px-4 mx-auto flex max-w-7xl flex-col gap-12 py-16 lg:py-24 lg:pb-60">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-12 md:items-center md:justify-between lg:flex-row">
            <div className="relative flex flex-col items-center gap-12 lg:flex-row">
              <img
                src="/images/logo-footer.svg"
                alt=""
                width={450}
                height={450}
                className="pointer-events-none absolute -top-40 -left-40 z-0 hidden lg:block"
                aria-hidden="true"
              />
              <div className="relative z-10">
                <FooterNavigation
                  links={footerConfig.mainNavigation.links}
                  ariaLabel={footerConfig.mainNavigation.ariaLabel}
                />
              </div>
            </div>

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
          <Separator role="presentation" className="bg-primary-foreground" />

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

      <div
        className="pointer-events-none absolute bottom-0 left-0 w-full translate-y-[1%]"
        aria-hidden="true"
      >
        <img src="/images/BrandTextOutline.svg" alt="" className="w-full" />
      </div>
    </footer>
  );
}

export type { FooterProps, FooterConfig, NavLink } from "./types";
export { FOOTER_CONFIG } from "./config";

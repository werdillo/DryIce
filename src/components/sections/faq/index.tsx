import { FaqHeader } from "./faq-header";
import { FaqCategories } from "./faq-categories";
import { FAQ_CONFIG } from "./config";
import type { FaqProps } from "./types";

export function Faq({ config }: FaqProps = {}) {
  const faqConfig = { ...FAQ_CONFIG, ...config };

  return (
    <section
      className="bg-background section-padding-y"
      aria-labelledby={faqConfig.ariaLabelledBy}
    >
      <div className="container-padding-x mx-auto max-w-7xl">
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
          <FaqHeader
            tagline={faqConfig.tagline}
            heading={faqConfig.heading}
            description={faqConfig.description}
            contactLink={faqConfig.contactLink}
            ariaLabelledBy={faqConfig.ariaLabelledBy}
          />

          <FaqCategories categories={faqConfig.categories} />
        </div>
      </div>
    </section>
  );
}

export type { FaqProps, FaqConfig, FaqCategory, FaqItem } from "./types";
export { FAQ_CONFIG } from "./config";

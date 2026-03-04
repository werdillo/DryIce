import { Tagline } from "@/components/pro-blocks/landing-page/tagline";
import { BenefitCard } from "./benefit-card";
import { benefitsConfig } from "./config";
import type { BenefitsSectionProps } from "./types";

export function BenefitsSection(props: Partial<BenefitsSectionProps>) {
  const settings = { ...benefitsConfig, ...props };

  return (
    <section className="section-padding-y bg-primary">
      <div className="container-padding-x bg-primary mx-auto flex max-w-7xl flex-col gap-10 md:gap-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-6 lg:grid-cols-4">
          {settings.benefits.map((benefit, index) => (
            <BenefitCard key={`${benefit.title}-${index}`} benefit={benefit} />
          ))}
        </div>
      </div>
    </section>
  );
}

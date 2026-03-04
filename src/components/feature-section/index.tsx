import { Tagline } from "@/components/pro-blocks/landing-page/tagline";
import { FeatureCard } from "./feature-card";
import { featureConfig } from "./config";
import type { FeatureSectionProps } from "./types";

export function FeatureSection(props: Partial<FeatureSectionProps>) {
  const settings = { ...featureConfig, ...props };

  return (
    <section className="bg-primary section-padding-y">
      <div className="container-padding-x mx-auto flex max-w-7xl flex-col gap-10 md:gap-12">
        <h3 className="heading-sm text-primary-foreground">{settings.title}</h3>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-6">
          {settings.features.map((feature, index) => (
            <FeatureCard key={`${feature.title}-${index}`} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

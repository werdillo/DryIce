import { Tagline } from "@/components/pro-blocks/landing-page/tagline";
import { FeatureCard } from "./feature-card";
import { featureConfig } from "./config";
import type { FeatureSectionProps } from "./types";

export function FeatureSection(props: Partial<FeatureSectionProps>) {
  const settings = { ...featureConfig, ...props };

  return (
    <section className="bg-primary py-10">
      <div className="container-padding-x mx-auto flex max-w-7xl flex-col gap-4 md:gap-6">
        <div>
          <h3 className="inline-block border-b border-primary-foreground px-6 py-4 text-primary-foreground">
            {settings.title}
          </h3>
        </div>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-6">
          {settings.features.map((feature, index) => (
            <FeatureCard key={`${feature.title}-${index}`} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

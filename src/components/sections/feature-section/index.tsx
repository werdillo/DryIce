import { Tagline } from "@/components/tagline";
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
        <div className="relative">
          {/* Decorative circle */}
          <svg
            width="400"
            height="384"
            viewBox="0 0 400 384"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="pointer-events-none absolute -top-30 -left-20 z-2 hidden lg:block"
            aria-hidden="true"
          >
            <circle
              opacity="0.2"
              cx="200"
              cy="184"
              r="199.5"
              stroke="#151515"
            />
          </svg>
          <div className="relative z-10 grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-6">
            {settings.features.map((feature, index) => (
              <FeatureCard
                key={`${feature.title}-${index}`}
                feature={feature}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

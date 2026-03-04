import { Tagline } from "@/components/pro-blocks/landing-page/tagline";
import { SolutionCard } from "./solution-card";
import { solutionConfig } from "./config";
import type { SolutionSectionProps } from "./types";

export function SolutionSection(props: Partial<SolutionSectionProps>) {
  const settings = { ...solutionConfig, ...props };

  return (
    <section className="bg-background section-padding-y">
      <div className="container-padding-x mx-auto flex max-w-7xl flex-col gap-10 md:gap-12">
        <div className="section-title-gap-lg mx-auto flex max-w-xl flex-col items-center text-center">
          {settings.tagline && <Tagline>{settings.tagline}</Tagline>}
          <h2 className="heading-lg text-foreground">
            {settings.title}
          </h2>
          <p className="text-muted-foreground text-lg/8 text-pretty">
            {settings.description}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-6">
          {settings.solutions.map((solution, index) => (
            <SolutionCard
              key={`${solution.title}-${index}`}
              solution={solution}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

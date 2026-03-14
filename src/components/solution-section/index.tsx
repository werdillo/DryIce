import { Tagline } from "@/components/pro-blocks/landing-page/tagline";
import { SolutionCard } from "./solution-card";
import { solutionConfig } from "./config";
import type { SolutionSectionProps } from "./types";
import { PromoButton } from "../PromoButton";

export function SolutionSection(props: Partial<SolutionSectionProps>) {
  const settings = { ...solutionConfig, ...props };

  return (
    <section className="bg-background section-padding-y">
      <div className="container-padding-x mx-auto flex max-w-7xl flex-col gap-10 md:gap-12">
        <div className="section-title-gap-lg mx-auto flex max-w-xl flex-col items-center text-center">
          <h3 className="text-primary">{settings.title}</h3>
          <p className="text-[#D0D0D0] text-pretty">{settings.description}</p>
        </div>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-6">
          {settings.solutions.map((solution, index) => (
            <SolutionCard
              key={`${solution.title}-${index}`}
              solution={solution}
            />
          ))}
        </div>
        <div className="flex justify-center">
          <PromoButton>All products in PDF file</PromoButton>
        </div>
      </div>
    </section>
  );
}

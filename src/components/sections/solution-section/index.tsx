import { SolutionCard } from "./solution-card";
import { solutionConfig } from "./config";
import type { SolutionSectionProps } from "./types";
import { PromoButton } from "../../PromoButton";
import patternUrl from "./pattern.svg?url";

export function SolutionSection(props: Partial<SolutionSectionProps>) {
  const settings = { ...solutionConfig, ...props };

  return (
    <section className="bg-background section-padding-y relative overflow-hidden">
      {/* Pattern background: starts from below the card images, ends just above the title */}
      <div
        className="pointer-events-none absolute inset-x-0 z-0 hidden lg:block"
        style={{
          /* top offset = section padding + title block height + gap ≈ push it just below title */
          top: "3rem",
          /* bottom offset = section padding + button height + gap ≈ ends at card image bottoms */
          bottom: "40%",
        }}
        aria-hidden="true"
      >
        <img
          src={patternUrl}
          alt=""
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="container-padding-x relative z-10 mx-auto flex max-w-7xl flex-col gap-10 md:gap-12">
        {/* Title block */}
        <div className="section-title-gap-lg mx-auto flex max-w-xl flex-col items-center text-center">
          <h3 className="text-primary">{settings.title}</h3>
          <p className="text-[#D0D0D0] text-pretty">{settings.description}</p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-6">
          {settings.solutions.map((solution, index) => (
            <SolutionCard
              key={`${solution.title}-${index}`}
              solution={solution}
            />
          ))}
        </div>

        <div className="flex justify-center">
          <PromoButton href="/catalogue2026.pdf" download>
            All products in PDF file
          </PromoButton>
        </div>
      </div>
    </section>
  );
}

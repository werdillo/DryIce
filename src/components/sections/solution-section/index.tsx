import { SolutionCard } from "./solution-card";
import { solutionConfig } from "./config";
import type { SolutionSectionProps } from "./types";
import { PromoButton } from "../../PromoButton";
import Pattern from "./Pattern";
import PatternMobile from "./PatternMobile";

export function SolutionSection(props: Partial<SolutionSectionProps>) {
  const settings = { ...solutionConfig, ...props };
  return (
    <section className="bg-background section-padding-y relative overflow-hidden">
      {/* Desktop pattern */}
      <div
        className="pointer-events-none absolute inset-x-0 z-0 hidden lg:block"
        style={{ top: "3rem", bottom: "40%" }}
        aria-hidden="true"
      >
        <Pattern className="h-full w-full" />
      </div>

      {/* Mobile pattern */}
      <div
        className="pointer-events-none absolute inset-x-0 z-0 lg:hidden"
        style={{
          top: 0,
          bottom: 0,
          maskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 60%, transparent 100%)",
        }}
        aria-hidden="true"
      >
        <PatternMobile className="h-full w-full" />
      </div>

      <div className="container-padding-x relative z-10 mx-auto flex max-w-7xl flex-col gap-10 md:gap-12">
        <div
          className="section-title-gap-lg mx-auto flex max-w-xl flex-col items-center text-center"
          data-animate="fade-up"
        >
          <h3 className="text-left lg:text-center text-primary">
            {settings.title}
          </h3>
          <p className="text-left lg:text-center text-[#D0D0D0] text-pretty">
            {settings.description}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-6">
          {settings.solutions.map((solution, index) => (
            <div
              key={`${solution.title}-${index}`}
              data-animate="fade-up"
              style={{ animationDelay: `${index * 0.12}s` }}
            >
              <SolutionCard solution={solution} />
            </div>
          ))}
        </div>
        <div
          className="flex justify-center"
          data-animate="fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          <PromoButton href="/catalogue2026.pdf" download>
            All products in PDF file
          </PromoButton>
        </div>
      </div>
    </section>
  );
}

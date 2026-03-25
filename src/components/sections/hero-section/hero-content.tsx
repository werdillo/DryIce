import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Tagline } from "@/components/tagline";
import type { HeroSectionProps } from "./types";

interface HeroContentProps extends Partial<HeroSectionProps> {}

export function HeroContent({
  tagline,
  title,
  description,
  buttonHref,
  buttonText,
  onButtonClick,
}: HeroContentProps) {
  return (
    <div className="container-padding-x relative z-1 mx-auto flex max-w-7xl flex-col items-center gap-12 lg:flex-row lg:gap-16">
      <div className="flex flex-col items-center gap-4 text-center lg:flex-row lg:items-start lg:gap-16 lg:text-left">
        <div className="section-title-gap-xl flex flex-1 flex-col items-center text-center lg:items-start lg:text-left">
          {tagline && <Tagline variant="white">{tagline}</Tagline>}
          <h1 id="hero-heading" className="heading-xl text-white">
            {title}
          </h1>
        </div>
        <div className="flex max-w-md flex-1 flex-col items-center gap-6 text-center lg:mt-11 lg:items-start lg:text-left">
          <p className="text-lg/8 text-pretty text-white/80">{description}</p>
          {buttonHref ? (
            <a href={buttonHref}>
              <Button onClick={onButtonClick}>
                {buttonText}
                <ArrowRight />
              </Button>
            </a>
          ) : (
            <Button onClick={onButtonClick}>
              {buttonText}
              <ArrowRight />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

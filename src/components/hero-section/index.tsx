import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";
import { heroConfig } from "./config";
import type { HeroSectionProps } from "./types";

export function HeroSection(props: Partial<HeroSectionProps>) {
  const settings = { ...heroConfig, ...props };

  return (
    <section
      className="section-padding-y relative flex min-h-svh items-center overflow-hidden lg:items-end"
      aria-labelledby="hero-heading"
    >
      {settings.videoSrc && (
        <video
          className="absolute inset-0 z-0 h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={settings.videoSrc} type="video/mp4" />
        </video>
      )}
      <div className="absolute inset-0 z-0 bg-black/80" />
      <div className="container-padding-x relative z-1 mx-auto flex max-w-7xl flex-col items-center gap-12 lg:flex-row lg:gap-16">
        <div className="flex flex-col items-center gap-4 text-center lg:flex-row lg:items-start lg:gap-16 lg:text-left">
          <div className="section-title-gap-xl flex flex-1 flex-col items-center text-center lg:items-start lg:text-left">
            {settings.tagline && <Tagline variant="white">{settings.tagline}</Tagline>}
            <h1 id="hero-heading" className="heading-xl text-white">
              {settings.title}
            </h1>
          </div>
          <div className="flex max-w-md flex-1 flex-col items-center gap-6 text-center lg:mt-11 lg:items-start lg:text-left">
            <p className="text-lg/8 text-pretty text-white/80">
              {settings.description}
            </p>
            {settings.buttonHref ? (
              <a href={settings.buttonHref}>
                <Button onClick={settings.onButtonClick}>
                  {settings.buttonText}
                  <ArrowRight />
                </Button>
              </a>
            ) : (
              <Button onClick={settings.onButtonClick}>
                {settings.buttonText}
                <ArrowRight />
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

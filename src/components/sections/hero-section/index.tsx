import { heroConfig } from "./config";
import type { HeroSectionProps } from "./types";
import { HeroContent } from "./hero-content";

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
      {/*<HeroContent
        tagline={settings.tagline}
        title={settings.title}
        description={settings.description}
        buttonHref={settings.buttonHref}
        buttonText={settings.buttonText}
        onButtonClick={settings.onButtonClick}
      />*/}
    </section>
  );
}

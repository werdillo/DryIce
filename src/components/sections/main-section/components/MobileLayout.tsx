import { type RefObject } from "react";
import { PromoButton } from "@/components/PromoButton";
import type { MainSectionProps } from "../types";

interface MobileLayoutProps {
  s: MainSectionProps;
  /** Ref attached to the image wrapper — used for morph origin on mobile */
  imageRef?: RefObject<HTMLDivElement | null>;
}

export function MobileLayout({ s, imageRef }: MobileLayoutProps) {
  return (
    <>
      {/* Title2 + Subtitle — mobile only, above image */}
      <div className="flex flex-col gap-1 lg:hidden">
        <h1
          className="text-center lg:text-left hero-slide-right anim-delay-1 text-[clamp(72px,11vw,160px)]! font-black leading-none tracking-tight text-white uppercase"
          style={{ fontFamily: "var(--font-orbitron)" }}
        >
          {s.title2}
        </h1>
        <h2
          className="text-center lg:text-left hero-slide-up anim-delay-2 text-[clamp(18px,2.8vw,40px)]! font-black leading-none tracking-wider text-primary uppercase"
          style={{ fontFamily: "var(--font-orbitron)" }}
        >
          {s.subtitle}
        </h2>
      </div>

      {/* Right image — full width, 4:3 on mobile */}
      <div
        ref={imageRef}
        className="hero-fade-scale anim-delay-3 aspect-[4/3] w-full overflow-hidden border border-white/10 lg:hidden"
      >
        <img
          src={s.image2?.src}
          alt={s.image2?.alt}
          className="h-full w-full object-cover"
          loading="eager"
        />
      </div>

      {/* Description + button — below image on mobile */}
      <div className="hero-slide-up max-sm:items-center anim-delay-4 mt-4 flex flex-col gap-6 lg:hidden">
        <p className="text-center lg:text-left text-base leading-relaxed text-white/70">
          {s.description}
        </p>
        <PromoButton className="h-14" href={s.buttonHref ?? "#contacts"}>
          {s.buttonText}
        </PromoButton>
      </div>
    </>
  );
}

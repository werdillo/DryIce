import { type RefObject } from "react";
import { PromoButton } from "@/components/PromoButton";
import type { MainSectionProps } from "../types";

interface DesktopLayoutProps {
  s: Partial<MainSectionProps>;
  /** Ref attached to the left image wrapper — used for morph origin */
  imageRef?: RefObject<HTMLDivElement | null>;
}

export function DesktopLayout({ s, imageRef }: DesktopLayoutProps) {
  return (
    <div className="hidden lg:flex lg:flex-row lg:items-start lg:gap-0">
      {/* Left image — 400×500 (4:5) */}
      <div ref={imageRef} className="relative shrink-0 lg:h-125 lg:w-100">
        {/* Decorative frame */}
        <div
          className="hero-frame anim-delay-5 pointer-events-none absolute hidden lg:block border-t border-l border-r border-white/40"
          style={{
            top: 0,
            left: 0,
            width: "100%",
            height: "calc(100% + 16px)",
          }}
          aria-hidden="true"
        />
        <div className="hero-fade-scale anim-delay-2 h-full w-full overflow-hidden border border-white/10">
          <img
            src={s.image1?.src}
            alt={s.image1?.alt}
            className="h-full w-full object-cover"
            loading="eager"
          />
        </div>
      </div>

      {/* Right block */}
      <div className="flex flex-1 flex-col lg:pl-10" style={{ height: 500 }}>
        {/* Title2 + Subtitle */}
        <div className="flex flex-col gap-1">
          <h1
            className="hero-slide-right anim-delay-1 text-[clamp(64px,11vw,160px)]! -mt-15 font-black leading-none tracking-tight text-white uppercase"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            {s.title2}
          </h1>
          <h2
            className="hero-slide-up text-center lg:text-left anim-delay-2 text-[clamp(18px,2.8vw,40px)]! font-black leading-none tracking-wider text-primary uppercase"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            {s.subtitle}
          </h2>
        </div>

        {/* Description + button + right image */}
        <div className="mt-auto flex flex-row items-stretch gap-8">
          {/* Description + button */}
          <div className="hero-slide-up anim-delay-3 flex flex-col max-sm:items-center justify-between gap-8 max-w-90 flex-1">
            <p className="text-center lg:text-left text-base leading-relaxed text-white/70">
              {s.description}
            </p>
            <PromoButton href={s.buttonHref ?? "#contacts"}>
              {s.buttonText}
            </PromoButton>
          </div>

          {/* Right image */}
          <div
            className="hero-fade-scale anim-delay-4 shrink-0 overflow-hidden border border-white/10"
            style={{ width: 400, height: 300 }}
          >
            <img
              src={s.image2?.src}
              alt={s.image2?.alt}
              className="h-full w-full object-cover"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

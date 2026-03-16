import { mainSectionConfig } from "./config";
import { MainNavbar } from "./main-navbar";
import { PromoButton } from "@/components/PromoButton";
import type { MainSectionProps } from "./types";

interface Props extends Partial<MainSectionProps> {}

export function MainSection(props: Props) {
  const s = { ...mainSectionConfig, ...props };

  return (
    <section className="relative min-h-svh overflow-hidden bg-[#151515]">
      {/* Navbar */}
      <MainNavbar
        lang={s.navLang}
        buttonText={s.navButtonText}
        buttonHref={s.navButtonHref}
      />

      {/* Main content */}
      <div className="container-padding-x relative mx-auto max-w-7xl pt-28 pb-16 lg:pt-32 lg:pb-24">
        <div className="flex flex-col gap-2">
          {/* Title line 1 */}
          <h1
            className="text-[clamp(64px,11vw,160px)]! font-black leading-none tracking-tight text-primary uppercase"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            {s.title1}
          </h1>

          {/* Title2 + Subtitle — always visible, above image on mobile */}
          <div className="flex flex-col gap-1 lg:hidden">
            <h1
              className="text-[clamp(64px,11vw,160px)]! font-black leading-none tracking-tight text-white uppercase"
              style={{ fontFamily: "var(--font-orbitron)" }}
            >
              {s.title2}
            </h1>
            <h2
              className="text-[clamp(18px,2.8vw,40px)]! font-black leading-none tracking-wider text-primary uppercase"
              style={{ fontFamily: "var(--font-orbitron)" }}
            >
              {s.subtitle}
            </h2>
          </div>

          {/* Right image — full width, 4:3 on mobile */}
          <div className="aspect-[4/3] w-full overflow-hidden border border-white/10 lg:hidden">
            <img
              src={s.image2Src}
              alt={s.image2Alt}
              className="h-full w-full object-cover"
              loading="eager"
            />
          </div>

          {/* Description + button — below image on mobile */}
          <div className="mt-4 flex flex-col gap-6 lg:hidden">
            <p className="text-base leading-relaxed text-white/70">
              {s.description}
            </p>
            <PromoButton href={s.buttonHref ?? "#contacts"}>
              {s.buttonText}
            </PromoButton>
          </div>

          {/* ── Desktop layout ── */}
          <div className="hidden lg:flex lg:flex-row lg:items-start lg:gap-0">
            {/* Left image — 400×500 (4:5) */}
            <div className="relative shrink-0 lg:h-125 lg:w-100">
              {/* Decorative frame — same size, offset +16px right and -16px up */}
              <div
                className="pointer-events-none absolute hidden lg:block border-t border-l border-r border-white/40"
                style={{
                  transform: "translate(16px, -16px)",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "calc(100% + 16px)",
                }}
                aria-hidden="true"
              />
              <div className="h-full w-full overflow-hidden border">
                <img
                  src={s.image1Src}
                  alt={s.image1Alt}
                  className="h-full w-full object-cover"
                  loading="eager"
                />
              </div>
            </div>

            {/* Right block */}
            <div
              className="flex flex-1 flex-col lg:pl-10"
              style={{ height: 500 }}
            >
              {/* Title2 + Subtitle */}
              <div className="flex flex-col gap-1">
                <h1
                  className="text-[clamp(64px,11vw,160px)]! -mt-15 font-black leading-none tracking-tight text-white uppercase"
                  style={{ fontFamily: "var(--font-orbitron)" }}
                >
                  {s.title2}
                </h1>
                <h2
                  className="text-[clamp(18px,2.8vw,40px)]! font-black leading-none tracking-wider text-primary uppercase"
                  style={{ fontFamily: "var(--font-orbitron)" }}
                >
                  {s.subtitle}
                </h2>
              </div>

              {/* Description + button + right image */}
              <div className="mt-auto flex flex-row items-stretch gap-8">
                {/* Description + button */}
                <div className="flex flex-col justify-between gap-8 max-w-90 flex-1">
                  <p className="text-base leading-relaxed text-white/70">
                    {s.description}
                  </p>
                  <PromoButton href={s.buttonHref ?? "#contacts"}>
                    {s.buttonText}
                  </PromoButton>
                </div>

                {/* Right image */}
                <div
                  className="shrink-0 overflow-hidden border border-white/10"
                  style={{ width: 400, height: 300 }}
                >
                  <img
                    src={s.image2Src}
                    alt={s.image2Alt}
                    className="h-full w-full object-cover"
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

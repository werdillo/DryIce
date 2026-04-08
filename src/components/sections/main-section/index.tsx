import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { mainSectionConfig } from "./config";

import { PromoButton } from "@/components/PromoButton";
import type { MainSectionProps } from "./types";

interface Props extends Partial<MainSectionProps> {}

export function MainSection(props: Props) {
  const s = { ...mainSectionConfig, ...props };
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 1],
    [0.8, 1, 1, 0.8],
  );
  const width = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 1],
    ["80%", "100%", "100%", "80%"],
  );
  const height = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 1],
    ["60vh", "100vh", "100vh", "60vh"],
  );
  const borderRadius = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 1],
    ["40px", "0px", "0px", "40px"],
  );
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

  return (
    <section className="relative min-h-svh bg-[#151515]">
      {/* Main content */}
      <div className="container-padding-x relative mx-auto max-w-7xl pt-28 pb-0 lg:pt-32 lg:pb-0">
        <div className="flex flex-col gap-2">
          {/* Title line 1 */}
          <h1
            className=" text-center lg:text-left hero-slide-left text-[clamp(72px,11vw,160px)]! font-black leading-none tracking-tight text-primary uppercase"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            {s.title1}
          </h1>

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
          <div className="hero-fade-scale anim-delay-3 aspect-[4/3] w-full overflow-hidden border border-white/10 lg:hidden">
            <img
              src={s.image2?.src}
              alt={s.image2?.alt}
              className="h-full w-full object-cover"
              loading="eager"
            />
          </div>

          {/* Description + button — below image on mobile */}
          <div className="hero-slide-up anim-delay-4 mt-4 flex flex-col gap-6 lg:hidden">
            <p className="text-center lg:text-left text-base leading-relaxed text-white/70">
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
            <div
              className="flex flex-1 flex-col lg:pl-10"
              style={{ height: 500 }}
            >
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
        </div>
      </div>

      {/* YouTube video */}
      <div
        ref={containerRef}
        className="relative mt-20 w-full"
        style={{ height: "300vh" }}
      >
        <div className="sticky top-0 flex h-svh items-center justify-center overflow-hidden">
          <motion.div
            style={{
              scale,
              width,
              height: isMobile ? "auto" : height,
              borderRadius,
              opacity,
            }}
            className="relative overflow-hidden pointer-events-none flex items-center justify-center bg-black shadow-2xl border border-white/10 aspect-video lg:aspect-none"
          >
            <iframe
              src="https://www.youtube.com/embed/KfoaiyC6Los?autoplay=1&mute=1&controls=0&loop=1&playlist=KfoaiyC6Los&rel=0&modestbranding=1&iv_load_policy=3&showinfo=0"
              title="DryIce video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              className="absolute min-w-[100%] min-h-[100%] w-auto h-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-video"
              style={{ border: 0 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

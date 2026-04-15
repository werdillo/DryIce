import { useRef, useState, useEffect, useCallback } from "react";
import { useScroll, useTransform } from "framer-motion";
import { mainSectionConfig } from "./config";
import type { MainSectionProps } from "./types";

import { DesktopLayout } from "./components/DesktopLayout";
import { MobileLayout } from "./components/MobileLayout";
import { VideoSection } from "./components/VideoSection";

interface Props extends Partial<MainSectionProps> {}

export function MainSection(props: Props) {
  const s = { ...mainSectionConfig, ...props };
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Refs to the source images
  const desktopImageRef = useRef<HTMLDivElement>(null);
  const mobileImageRef = useRef<HTMLDivElement>(null);

  const [imageRect, setImageRect] = useState<DOMRect | null>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Measure the source image position once layout is stable
  const measureRect = useCallback(() => {
    const ref = isMobile ? mobileImageRef.current : desktopImageRef.current;
    if (ref) {
      // getBoundingClientRect gives position relative to viewport at current scroll.
      // We want the position at scroll=0 (top of page), so add scrollY.
      const rect = ref.getBoundingClientRect();
      const adjusted = new DOMRect(
        rect.left,
        rect.top + window.scrollY,
        rect.width,
        rect.height,
      );
      setImageRect(adjusted);
    }
  }, [isMobile]);

  useEffect(() => {
    // Measure after fonts/images likely loaded
    const id = requestAnimationFrame(() => {
      measureRect();
    });
    window.addEventListener("resize", measureRect);
    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener("resize", measureRect);
    };
  }, [measureRect]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.5, 0.85, 1],
    [0, 1, 1, 1, 0],
  );

  return (
    <section className="relative min-h-svh bg-[#151515]">
      {/* Main content */}
      <div className="container-padding-x relative mx-auto max-w-7xl pt-28 pb-0 lg:pt-32 lg:pb-0">
        <div className="flex flex-col gap-1 lg:gap-2">
          {/* Title line 1 */}
          <h1
            className="text-center lg:text-left hero-slide-left text-[clamp(72px,11vw,160px)]! font-black leading-none tracking-tight text-primary uppercase"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            {s.title1}
          </h1>

          <MobileLayout s={s as MainSectionProps} imageRef={mobileImageRef} />
          <DesktopLayout s={s} imageRef={desktopImageRef} />
        </div>
      </div>

      {/* YouTube video — morphs out of the image on scroll */}
      <VideoSection
        containerRef={containerRef}
        isMobile={isMobile}
        opacity={opacity}
        scrollYProgress={scrollYProgress}
        imageRect={imageRect}
      />
    </section>
  );
}

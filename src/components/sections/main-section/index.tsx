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

  // containerRef wraps the ENTIRE section (content + video scroll space)
  // so useScroll tracks the full scroll journey
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  const desktopImageRef = useRef<HTMLDivElement>(null);
  const mobileImageRef = useRef<HTMLDivElement>(null);

  const [imageRect, setImageRect] = useState<DOMRect | null>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const measureRect = useCallback(() => {
    const ref = isMobile ? mobileImageRef.current : desktopImageRef.current;
    if (ref) {
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
    offset: ["start start", "end end"],
  });

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.6, 0.9, 1],
    [0, 1, 1, 1, 0],
  );

  return (
    // containerRef wraps everything so VideoSection's scroll context
    // matches the actual scroll distance of this whole block
    <div ref={containerRef}>
      <section className="relative min-h-svh bg-[#151515]">
        {/* Main content — sticky so it stays visible while video expands over it */}
        <div className="sticky top-0 min-h-svh bg-[#151515]">
          <div className="container-padding-x relative mx-auto max-w-7xl pt-28 pb-0 lg:pt-32 lg:pb-0">
            <div className="flex flex-col gap-1 lg:gap-2">
              {/* Title line 1 */}
              <h1
                className="text-center lg:text-left hero-slide-left text-[clamp(72px,11vw,160px)]! font-black leading-none tracking-tight text-primary uppercase"
                style={{ fontFamily: "var(--font-orbitron)" }}
              >
                {s.title1}
              </h1>

              <MobileLayout
                s={s as MainSectionProps}
                imageRef={mobileImageRef}
              />
              <DesktopLayout s={s} imageRef={desktopImageRef} />
            </div>
          </div>
        </div>

        {/* Desktop only: scroll space + sticky video that morphs over the section */}
        {!isMobile && (
          <VideoSection
            containerRef={useRef(null)} // inner ref for the scroll spacer div
            isMobile={false}
            opacity={opacity}
            scrollYProgress={scrollYProgress}
            imageRect={imageRect}
          />
        )}
      </section>

      {/* Mobile only: static video below the section */}
      {isMobile && (
        <VideoSection
          containerRef={useRef(null)}
          isMobile={true}
          opacity={opacity}
          scrollYProgress={scrollYProgress}
          imageRect={imageRect}
        />
      )}
    </div>
  );
}

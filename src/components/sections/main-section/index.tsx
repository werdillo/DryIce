import { useRef, useState, useEffect } from "react";
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
            className="text-center lg:text-left hero-slide-left text-[clamp(72px,11vw,160px)]! font-black leading-none tracking-tight text-primary uppercase"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            {s.title1}
          </h1>

          <MobileLayout s={s as MainSectionProps} />
          <DesktopLayout s={s} />
        </div>
      </div>

      {/* YouTube video */}
      <VideoSection
        containerRef={containerRef}
        isMobile={isMobile}
        scale={scale}
        width={width}
        height={height}
        borderRadius={borderRadius}
        opacity={opacity}
      />
    </section>
  );
}

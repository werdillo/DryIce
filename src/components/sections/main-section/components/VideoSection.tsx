import { motion, type MotionValue, useTransform } from "framer-motion";
import { type RefObject } from "react";

interface VideoSectionProps {
  containerRef: RefObject<HTMLDivElement | null>;
  isMobile: boolean;
  opacity: MotionValue<number>;
  scrollYProgress: MotionValue<number>;
  imageRect: DOMRect | null;
}

export function VideoSection({
  containerRef,
  isMobile,
  opacity,
  scrollYProgress,
  imageRect,
}: VideoSectionProps) {
  // Mobile: just render a static iframe below the section, no animation
  if (isMobile) {
    return (
      <div className="w-full bg-black" style={{ aspectRatio: "16/9" }}>
        <iframe
          src="https://www.youtube.com/embed/KfoaiyC6Los?autoplay=1&mute=1&controls=0&loop=1&playlist=KfoaiyC6Los&rel=0&modestbranding=1&iv_load_policy=3&showinfo=0"
          title="DryIce video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          style={{
            border: 0,
            width: "100%",
            height: "100%",
            display: "block",
          }}
        />
      </div>
    );
  }

  // Desktop: video morphs from image position to fullscreen on top of the section
  const targetW = typeof window !== "undefined" ? window.innerWidth : 1440;
  const targetH = typeof window !== "undefined" ? window.innerHeight : 900;

  const srcX = imageRect ? imageRect.left : 0;
  const srcY = imageRect ? imageRect.top : 0;
  const srcW = imageRect ? imageRect.width : 400;
  const srcH = imageRect ? imageRect.height : 500;

  // Adjust scroll progress to trigger animation at the right time
  const morphProgress = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0, 0.5, 1, 1],
  );
  const left = useTransform(morphProgress, [0, 1], [srcX, 0]);
  const top = useTransform(morphProgress, [0, 1], [srcY, 0]);
  const width = useTransform(morphProgress, [0, 1], [srcW, targetW]);
  const height = useTransform(morphProgress, [0, 1], [srcH, targetH]);
  const borderRadius = useTransform(morphProgress, [0, 0.6, 1], [8, 4, 0]);

  // Video should be visible during the morph animation and remain visible at the end
  const videoOpacity = useTransform(
    morphProgress,
    [0, 0.2, 0.4, 1],
    [0, 0.8, 1, 1],
  );

  // Pointer events + display: completely remove from interaction when invisible.
  // display:none is the only reliable way to prevent fixed elements from
  // blocking content in subsequent sections.
  const pointerEvents = useTransform(opacity, (v) =>
    v < 0.01 ? "none" : "auto",
  );
  const display = useTransform(opacity, (v) => (v < 0.01 ? "none" : "block"));

  return (
    // This container sits INSIDE the section (position relative),
    // giving scroll space for the sticky animation while the section
    // content above stays visible underneath the expanding video.
    <div
      ref={containerRef}
      className="relative w-full"
      style={{ height: "200vh" }}
    >
      <div className="sticky top-0 h-svh overflow-hidden pointer-events-none">
        <motion.div
          style={{
            position: "fixed",
            left,
            top,
            width,
            height,
            borderRadius,
            // Use the opacity passed from the parent — it fades to 0
            // once the user scrolls past this section.
            opacity,
            overflow: "hidden",
            background: "#000",
            boxShadow: "0 0 120px rgba(0,0,0,0.9)",
            border: "1px solid rgba(255,255,255,0.1)",
            // Sit above section content but below any nav/modal layers.
            // pointerEvents tracks opacity so hidden video never blocks clicks.
            zIndex: 10,
            pointerEvents,
            display,
          }}
        >
          <motion.iframe
            src="https://www.youtube.com/embed/KfoaiyC6Los?autoplay=1&mute=1&controls=0&loop=1&playlist=KfoaiyC6Los&rel=0&modestbranding=1&iv_load_policy=3&showinfo=0"
            title="DryIce video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            style={{
              border: 0,
              position: "absolute",
              width: "100%",
              height: "100%",
              opacity: videoOpacity,
            }}
          />
        </motion.div>
      </div>
    </div>
  );
}

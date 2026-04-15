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
  const targetW = typeof window !== "undefined" ? window.innerWidth : 1440;
  const targetH = typeof window !== "undefined" ? window.innerHeight : 900;

  const srcX = imageRect ? imageRect.left : 0;
  const srcY = imageRect ? imageRect.top : 0;
  const srcW = imageRect ? imageRect.width : isMobile ? targetW : 400;
  const srcH = imageRect
    ? imageRect.height
    : isMobile
      ? (targetW * 3) / 4
      : 500;

  // ✅ All hooks unconditionally at the top level — no hooks inside if/else
  const morphProgress = useTransform(scrollYProgress, [0, 0.35], [0, 1]);
  const left = useTransform(morphProgress, [0, 1], [srcX, 0]);
  const top = useTransform(morphProgress, [0, 1], [srcY, 0]);
  const width = useTransform(morphProgress, [0, 1], [srcW, targetW]);
  const height = useTransform(morphProgress, [0, 1], [srcH, targetH]);
  const borderRadius = useTransform(morphProgress, [0, 0.6, 1], [8, 4, 0]);
  const videoOpacity = useTransform(morphProgress, [0, 0.3, 1], [0, 0.6, 1]);

  return (
    <div
      ref={containerRef}
      className="relative w-full"
      style={{ height: isMobile ? "200vh" : "300vh" }}
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
            opacity,
            overflow: "hidden",
            background: "#000",
            boxShadow: "0 0 120px rgba(0,0,0,0.9)",
            border: "1px solid rgba(255,255,255,0.1)",
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

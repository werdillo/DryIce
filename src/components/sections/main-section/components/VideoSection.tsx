import { motion, type MotionValue } from "framer-motion";
import { type RefObject } from "react";

interface VideoSectionProps {
  containerRef: RefObject<HTMLDivElement | null>;
  isMobile: boolean;
  opacity: MotionValue<number>;
}

export function VideoSection({
  containerRef,
  isMobile,
  opacity,
}: VideoSectionProps) {
  if (isMobile) {
    return (
      <div ref={containerRef} className="relative mt-6 w-full">
        <motion.div
          style={{ opacity }}
          className="relative w-full overflow-hidden pointer-events-none bg-black shadow-2xl border border-white/10 rounded-lg"
        >
          <div className="aspect-video w-full relative">
            <iframe
              src="https://www.youtube.com/embed/KfoaiyC6Los?autoplay=1&mute=1&controls=0&loop=1&playlist=KfoaiyC6Los&rel=0&modestbranding=1&iv_load_policy=3&showinfo=0"
              title="DryIce video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              className="absolute inset-0 w-full h-full"
              style={{ border: 0 }}
            />
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="relative mt-20 w-full"
      style={{ height: "300vh" }}
    >
      <div className="sticky top-0 flex h-svh items-center justify-center overflow-hidden">
        <motion.div
          style={{ opacity }}
          className="relative overflow-hidden pointer-events-none flex items-center justify-center bg-black shadow-2xl border border-white/10 w-full h-full"
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
  );
}

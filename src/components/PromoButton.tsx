"use client";

import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface PromoButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
}

export function PromoButton({
  children,
  href,
  onClick,
  type = "button",
  className,
}: PromoButtonProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLAnchorElement & HTMLButtonElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const inner = (
    <>
      {/* Spotlight that follows cursor */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-full transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(100px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.12), transparent 70%)`,
        }}
      />

      {/* Gradient border */}
      <span
        aria-hidden
        className="absolute inset-0 rounded-full p-px"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0.9) 100%)",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />

      {/* Button fill */}
      <span
        aria-hidden
        className="absolute inset-px rounded-full transition-colors duration-300"
        style={{
          background: isHovered
            ? "rgba(255,255,255,0.15)"
            : "rgba(255,255,255,0.05)",
        }}
      />

      {/* Outer glow */}
      <span
        aria-hidden
        className="absolute inset-0 rounded-full transition-all duration-500"
        style={{
          boxShadow: isHovered
            ? "0 0 18px 2px rgba(255,255,255,0.2)"
            : "0 0 0px 0px transparent",
        }}
      />

      {/* Label */}
      <span className="relative z-10 flex items-center gap-2 px-6 py-3 text-sm font-semibold tracking-wide text-white">
        {children}
      </span>
    </>
  );

  const commonClassName = cn(
    "relative inline-flex items-center justify-center",
    "rounded-full cursor-pointer select-none outline-none",
    "transition-transform duration-150 active:scale-95",
    className
  );

  if (href) {
    return (
      <a
        ref={ref}
        href={href}
        className={commonClassName}
        onMouseMove={handleMouseMove}
        onMouseEnter={(e) => { setIsHovered(true); handleMouseMove(e); }}
        onMouseLeave={() => setIsHovered(false)}
        onClick={onClick}
      >
        {inner}
      </a>
    );
  }

  return (
    <button
      ref={ref}
      type={type}
      className={commonClassName}
      onMouseMove={handleMouseMove}
      onMouseEnter={(e) => { setIsHovered(true); handleMouseMove(e); }}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {inner}
    </button>
  );
}

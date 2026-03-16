"use client";

import { cn } from "@/lib/utils";
import { FileText } from "lucide-react";

interface PromoButtonProps {
  children?: React.ReactNode;
  href?: string;
  download?: boolean | string;
  onClick?: () => void;
  className?: string;
}

export function PromoButton({
  children = "All products in PDF file",
  href,
  download,
  onClick,
  className,
}: PromoButtonProps) {
  const inner = (
    // Full-width dark bar, 86px tall
    <span className="relative inline-flex h-21.5 items-center bg-background">
      {/* Text + icon row, padded so text starts 92px from left (60px square + 32px gap) */}
      <span
        className="relative z-10 flex items-center gap-2 whitespace-nowrap pl-8"
        style={{ fontFamily: "'Orbitron', sans-serif" }}
      >
        <span className="text-lg font-semibold text-white">{children}</span>
        {/*<FileText className="size-5.5 shrink-0 text-white" />*/}
      </span>

      {/* Square: 60px wide, positioned so its right edge is 32px before text start.
          text starts at pl-23 = 92px, square width = 60px, so left = 92 - 60 - 32 = 0px
          i.e. square left edge is at 0, right edge at 60px, gap to text = 92 - 60 = 32px */}
      <span
        className="absolute left-0 top-0 h-full w-15 bg-primary/20"
        aria-hidden
      />
    </span>
  );

  const commonClassName = cn(
    "block cursor-pointer select-none outline-none",
    "transition-opacity duration-200 hover:opacity-90 active:opacity-75",
    className,
  );

  if (href) {
    return (
      <a
        href={href}
        download={download}
        onClick={onClick}
        className={commonClassName}
      >
        {inner}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={commonClassName}>
      {inner}
    </button>
  );
}

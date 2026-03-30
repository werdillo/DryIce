"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { HEADER_CONFIG } from "./config";
import type { HeaderProps } from "./types";

const LANGUAGES = [
  { code: "en", label: "EN", href: "/en" },
  { code: "lv", label: "LV", href: "/lv" },
];

export function Header({
  lang = HEADER_CONFIG.lang,
  buttonText = HEADER_CONFIG.buttonText,
  buttonHref = HEADER_CONFIG.buttonHref,
}: HeaderProps = {}) {
  const currentLang = lang?.toLowerCase() ?? "en";
  const current = LANGUAGES.find((l) => l.code === currentLang) ?? LANGUAGES[0];
  const others = LANGUAGES.filter((l) => l.code !== currentLang);

  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="container-padding-x absolute top-0 left-0 right-0 z-20 mx-auto flex w-full max-w-7xl items-start justify-between pt-6">
      {/* Logo */}
      <a href="/" aria-label="Go to homepage">
        <img
          src="/images/logo.svg"
          alt="Dry Ice Baltic"
          width={140}
          height={48}
        />
      </a>

      {/* Right side: lang dropdown + button + circle decoration */}
      <div className="relative flex items-center gap-4 pt-1">
        {/* Big circle decoration */}
        <div className="pointer-events-none absolute -top-10 right-20 size-32 rounded-full border border-white/20 lg:block hidden" />

        {/* Language Dropdown */}
        <div
          ref={ref}
          className="relative z-10"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="flex items-center gap-1 text-sm font-medium text-white/80 hover:text-white transition-colors cursor-pointer"
            aria-haspopup="listbox"
            aria-expanded={open}
          >
            {current.label}
            <ChevronDown
              className={cn(
                "size-3.5 transition-transform duration-200",
                open && "rotate-180",
              )}
            />
          </button>

          {open && (
            <div className="absolute right-0 top-full mt-2 min-w-[56px] overflow-hidden border border-white/10 bg-[#1a1a1a]/95 backdrop-blur-sm shadow-lg">
              {others.map((l) => (
                <a
                  key={l.code}
                  href={l.href}
                  role="option"
                  className="block px-3 py-2 text-center text-sm font-medium text-white/60 hover:text-white hover:bg-white/10 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              ))}
            </div>
          )}
        </div>

        {/* CTA */}
        <a href={buttonHref} className="relative z-10">
          <Button className="rounded-none bg-primary text-primary-foreground hover:bg-primary/90 px-5 py-2 text-sm font-semibold tracking-wide">
            {buttonText}
          </Button>
        </a>
      </div>
    </header>
  );
}

export type { HeaderProps } from "./types";
export { HEADER_CONFIG } from "./config";

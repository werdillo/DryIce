import { Button } from "@/components/ui/button";
import { HEADER_CONFIG } from "./config";
import type { HeaderProps } from "./types";

export function Header({
  lang = HEADER_CONFIG.lang,
  buttonText = HEADER_CONFIG.buttonText,
  buttonHref = HEADER_CONFIG.buttonHref,
}: HeaderProps = {}) {
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

      {/* Right side: lang + button + circle decoration */}
      <div className="relative flex items-center gap-4 pt-1">
        {/* Big circle decoration */}
        <div className="pointer-events-none absolute -top-10 right-20 size-32 rounded-full border border-white/20 lg:block hidden" />

        {/* Lang */}
        <span
          className="relative z-10 text-sm font-medium text-white/80"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          {lang}
        </span>

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

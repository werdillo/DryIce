import { Logo } from "@/components/pro-blocks/logo";
import { Button } from "@/components/ui/button";

interface MainNavbarProps {
  lang?: string;
  buttonText?: string;
  buttonHref?: string;
}

export function MainNavbar({
  lang = "En",
  buttonText = "Write To Us",
  buttonHref = "#contacts",
}: MainNavbarProps) {
  return (
    <header className="container-padding-x absolute top-0 left-0 right-0 z-20 mx-auto flex w-full max-w-7xl items-start justify-between pt-6">
      {/* Logo */}
      <a href="/" aria-label="Go to homepage" className="flex items-center gap-3">
        <Logo width={44} height={44} />
        <div className="flex flex-col leading-none">
          <span
            className="text-sm font-black tracking-widest text-white uppercase"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            DRY ICE
            <br />
            BALTIC
          </span>
          <span className="text-[10px] text-white/50 tracking-wide mt-0.5">
            the coolest way to clean
          </span>
        </div>
      </a>

      {/* Right side: lang + button + circle decoration */}
      <div className="relative flex items-center gap-4 pt-1">
        {/* Big circle decoration */}
        <div className="pointer-events-none absolute -top-10 -right-10 size-32 rounded-full border border-white/20 lg:block hidden" />

        {/* Lang */}
        <span
          className="relative z-10 text-sm font-medium text-white/80"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          {lang}
        </span>

        {/* CTA */}
        <a href={buttonHref} className="relative z-10">
          <Button
            className="rounded-none bg-primary text-primary-foreground hover:bg-primary/90 px-5 py-2 text-sm font-semibold tracking-wide"
          >
            {buttonText}
          </Button>
        </a>
      </div>
    </header>
  );
}

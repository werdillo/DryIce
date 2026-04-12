import { cn } from "@/lib/utils";
import type { ServiceItem } from "./types";

interface ServiceItemProps {
  service: ServiceItem;
  isActive?: boolean;
  showDivider?: boolean;
  onClick?: () => void;
  accordionContent?: React.ReactNode;
}

export function ServiceListItem({
  service,
  isActive = false,
  showDivider = true,
  onClick,
  accordionContent,
}: ServiceItemProps) {
  return (
    <div className="flex flex-col">
      <button
        type="button"
        onClick={onClick}
        className="flex w-full cursor-pointer items-end justify-end gap-5 py-5 text-left outline-none"
      >
        <span
          className={cn(
            "shrink-0 text-lg font-semibold leading-none transition-colors duration-200",
            isActive ? "text-primary/40" : "text-foreground/20",
          )}
          style={{ fontFamily: "'Orbitron', sans-serif" }}
        >
          {service.number}
        </span>

        <span
          className={cn(
            "ml-auto text-lg font-semibold leading-snug text-right transition-colors duration-200",
            isActive
              ? "text-primary"
              : "text-foreground/80 hover:text-foreground",
          )}
          style={{ fontFamily: "'Orbitron', sans-serif" }}
        >
          {service.title}
        </span>
      </button>

      {/* Accordion panel — mobile only */}
      {accordionContent && (
        <div
          className={cn(
            "lg:hidden grid transition-all duration-300 ease-in-out",
            isActive
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0",
          )}
        >
          <div className="overflow-hidden">{accordionContent}</div>
        </div>
      )}

      {showDivider && (
        <hr
          className={cn(
            "border-t-2 transition-colors duration-200",
            isActive ? "border-foreground/60" : "border-foreground/20",
          )}
        />
      )}
    </div>
  );
}

import { cn } from "@/lib/utils";
import type { ServiceItem } from "./types";

interface ServiceItemProps {
  service: ServiceItem;
  showDivider?: boolean;
  showDescription?: boolean;
}

export function ServiceListItem({
  service,
  showDivider = true,
  showDescription = true,
}: ServiceItemProps) {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-end gap-5">
        <span
          className={cn(
            "shrink-0 text-lg font-semibold leading-none",
            service.isActive ? "text-primary/20" : "text-foreground/20",
          )}
          style={{ fontFamily: "'Orbitron', sans-serif" }}
        >
          {service.number}
        </span>

        <div className="flex flex-col justify-center gap-3">
          <span
            className={cn(
              "text-lg font-semibold leading-snug",
              service.isActive ? "text-primary" : "text-foreground/80",
            )}
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            {service.title}
          </span>

          {showDescription && service.isActive && service.description && (
            <p className="text-foreground text-base leading-relaxed text-pretty">
              {service.description}
            </p>
          )}
        </div>
      </div>

      {showDivider && (
        <hr
          className={cn(
            "border-t-2 mb-5",
            service.isActive ? "border-foreground/60" : "border-foreground/20",
          )}
        />
      )}
    </div>
  );
}

import { servicesConfig } from "./config";
import { ServiceListItem } from "./service-item";
import { PromoButton } from "@/components/PromoButton";
import type { ServicesSectionProps } from "./types";

export function ServicesSection(props: Partial<ServicesSectionProps>) {
  const settings = { ...servicesConfig, ...props };

  return (
    <section className="bg-background section-padding-y relative overflow-hidden">
      {/* Background oversized heading */}
      <span
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 w-full select-none whitespace-nowrap text-foreground/10 leading-none"
        style={{
          fontFamily: "'Orbitron', sans-serif",
          fontWeight: 900,
          fontSize: "clamp(4rem, 9vw, 8rem)",
          textTransform: "uppercase",
        }}
      >
        {settings.heading}
      </span>

      <div className="container-padding-x mx-auto max-w-7xl">
        <div className="relative grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-10">

          {/* Left column: label + service list */}
          <div className="flex flex-col gap-8 pt-16 lg:pt-24">
            {/* Section label */}
            <span
              className="text-primary border-b border-foreground/10 pb-2 text-lg font-semibold"
              style={{ fontFamily: "'Orbitron', sans-serif" }}
            >
              {settings.sectionLabel}
            </span>

            {/* Service list */}
            <div className="flex flex-col">
              {settings.services.map((service, index) => (
                <ServiceListItem
                  key={service.number}
                  service={service}
                  showDivider={index < settings.services.length - 1}
                />
              ))}
            </div>
          </div>

          {/* Right column: image + button */}
          <div className="relative flex flex-col justify-between gap-10 pt-16 lg:pt-24">
            {/* Image */}
            {settings.image && (
              <div className="overflow-hidden">
                <img
                  src={settings.image.src}
                  alt={settings.image.alt}
                  className="h-full w-full object-cover"
                  style={{ maxHeight: "329px" }}
                />
              </div>
            )}

            {/* PromoButton aligned to bottom-right */}
            <div className="flex justify-end">
              <PromoButton href={settings.buttonHref}>
                {settings.buttonText}
              </PromoButton>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export type { ServicesSectionProps, ServiceItem } from "./types";
export { servicesConfig } from "./config";

"use client";

import { useState } from "react";
import { servicesConfig } from "./config";
import { ServiceListItem } from "./service-item";
import { PromoButton } from "@/components/PromoButton";
import type { ServicesSectionProps } from "./types";

export function ServicesSection(props: Partial<ServicesSectionProps>) {
  const settings = { ...servicesConfig, ...props };
  const [activeIndex, setActiveIndex] = useState(0);

  const activeService = settings.services[activeIndex];

  return (
    <section className="bg-background section-padding-y relative overflow-hidden">
      {/* Background oversized heading */}
      <span
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 w-full select-none whitespace-nowrap leading-none text-foreground/10"
        style={{
          fontFamily: "'Orbitron', sans-serif",
          fontWeight: 900,
          fontSize: "clamp(4rem, 9vw, 8rem)",
          textTransform: "uppercase",
        }}
      >
        {settings.heading}
      </span>

      <div className="container-padding-x relative mx-auto max-w-7xl">
        <span
          className="border-b border-foreground/10 pb-2 text-lg font-semibold text-primary"
          style={{ fontFamily: "'Orbitron', sans-serif" }}
        >
          {settings.sectionLabel}
        </span>
        <div className="grid grid-cols-1 gap-12 pt-10 lg:grid-cols-[400px_1fr_auto] lg:gap-10 lg:pt-16">
          {/* Col 1: section label + service list */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col">
              {settings.services.map((service, index) => (
                <ServiceListItem
                  key={service.number}
                  service={service}
                  isActive={index === activeIndex}
                  showDivider={index < settings.services.length - 1}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>
          </div>

          {/* Col 2: active item description + image */}
          <div className="flex flex-col justify-between gap-8">
            {activeService?.description && (
              <p className="lg:-ml-10 pl-5 text-base border-foreground/60 py-[11.6px] border-b-2 leading-relaxed text-pretty text-foreground">
                {activeService.description}
              </p>
            )}

            {activeService?.image && (
              <div className="flex justify-end">
                <div className="overflow-hidden">
                  <img
                    src={activeService.image.src}
                    alt={activeService.image.alt}
                    className="w-full object-cover"
                    style={{ maxHeight: "329px", maxWidth: "500px" }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Col 3: PromoButton pinned to bottom */}
          <div className="flex items-end justify-end">
            <PromoButton href={settings.buttonHref}>
              {settings.buttonText}
            </PromoButton>
          </div>
        </div>
        <div className="flex justify-center pt-6">
          <div className="w-full max-w-[400px] border-b border-foreground/20" />
        </div>
      </div>
    </section>
  );
}

export type { ServicesSectionProps, ServiceItem } from "./types";
export { servicesConfig } from "./config";

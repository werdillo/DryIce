"use client";

import { useState } from "react";
import { servicesConfig } from "./config";
import { ServiceListItem } from "./service-item";
import { PromoButton } from "@/components/PromoButton";
import type { ServicesSectionProps } from "./types";

export function ServicesSection(props: Partial<ServicesSectionProps>) {
  const settings = { ...servicesConfig, ...props };
  const [activeIndex, setActiveIndex] = useState(0);

  // Orbitron is a wide font — ~0.7 char width ratio works well empirically
  // 60 = 100vw * 0.6 safety margin; clamp between 4vw (min) and 9vw (max)
  const charCount = settings.heading.length;
  const headingFontSize = `${Math.min(9, Math.max(4, 60 / (charCount * 0.7)))}vw`;

  const activeService = settings.services[activeIndex];

  return (
    <section className="bg-background section-padding-y relative overflow-hidden">
      <div className="container-padding-x mx-auto max-w-7xl">
        <span
          aria-hidden
          className="pointer-events-none absolute left-0 top-24 w-full select-none whitespace-nowrap leading-none text-foreground/10 block"
          style={{
            fontFamily: "'Orbitron', sans-serif",
            fontWeight: 900,
            fontSize: headingFontSize,
            textTransform: "uppercase",
          }}
        >
          {settings.heading}
        </span>
        <span
          className="border-b relative border-foreground/10 pb-2 text-lg font-semibold text-primary"
          style={{ fontFamily: "'Orbitron', sans-serif" }}
          data-animate="fade-left"
        >
          {settings.sectionLabel}
        </span>
        <div className="grid grid-cols-1 gap-12 pt-12 lg:grid-cols-[400px_1fr_auto] lg:gap-10 lg:pt-20">
          {/* Col 2: active item description + image — desktop only */}
          <div
            className="hidden lg:flex flex-col justify-between gap-8 lg:order-2"
            data-animate="fade-up"
            style={{ animationDelay: "0.15s" }}
          >
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

          {/* Col 3: PromoButton — desktop only */}
          <div
            className="hidden lg:flex items-end justify-end lg:order-3"
            data-animate="fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            <PromoButton href={settings.buttonHref}>
              {settings.buttonText}
            </PromoButton>
          </div>

          {/* Col 1: service list with inline accordion on mobile */}
          <div
            className="flex flex-col gap-8 lg:order-1"
            data-animate="fade-left"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="flex flex-col">
              {settings.services.map((service, index) => (
                <ServiceListItem
                  key={service.number}
                  service={service}
                  isActive={index === activeIndex}
                  showDivider={index < settings.services.length - 1}
                  onClick={() => setActiveIndex(index)}
                  accordionContent={
                    <div className="lg:hidden flex flex-col gap-4 pb-4">
                      {service.description && (
                        <p className="pl-5 text-base border-foreground/60 py-[11.6px] border-b-2 leading-relaxed text-pretty text-foreground">
                          {service.description}
                        </p>
                      )}
                      {service.image && (
                        <div className="flex justify-end">
                          <div className="overflow-hidden">
                            <img
                              src={service.image.src}
                              alt={service.image.alt}
                              className="w-full object-cover"
                              style={{ maxHeight: "329px", maxWidth: "500px" }}
                            />
                          </div>
                        </div>
                      )}
                      <div className="flex justify-center pt-2">
                        <PromoButton href={settings.buttonHref}>
                          {settings.buttonText}
                        </PromoButton>
                      </div>
                    </div>
                  }
                />
              ))}
            </div>
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

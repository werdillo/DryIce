import { GalleryCarousel } from "./gallery-carousel";
import { galleryConfig } from "./config";
import type { GallerySectionProps } from "./types";

export function GallerySection(props: Partial<GallerySectionProps>) {
  const settings = { ...galleryConfig, ...props };

  return (
    <section className="bg-background section-padding-y">
      <div className="container-padding-x mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <div
            className="section-title-gap-lg flex flex-col items-center text-center lg:items-start lg:text-left"
            data-animate="fade-left"
          >
            <h3 className="text-primary">{settings.title}</h3>
            <p className="text-foreground">{settings.description}</p>
          </div>
          <div
            className="lg:col-span-2"
            data-animate="fade-right"
            style={{ animationDelay: "0.1s" }}
          >
            <GalleryCarousel images={settings.images} />
          </div>
        </div>
      </div>
    </section>
  );
}

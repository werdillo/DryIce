import { Tagline } from "@/components/pro-blocks/landing-page/tagline";
import { GalleryCarousel } from "./gallery-carousel";
import { galleryConfig } from "./config";
import type { GallerySectionProps } from "./types";

export function GallerySection(props: Partial<GallerySectionProps>) {
  const settings = { ...galleryConfig, ...props };

  return (
    <section className="bg-background section-padding-y">
      <div className="container-padding-x mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="section-title-gap-lg mx-auto flex flex-col items-center text-center lg:items-start lg:text-left">
            <h3 className="text-primary">{settings.title}</h3>
            <p className="text-foreground">{settings.description}</p>
          </div>
          <GalleryCarousel images={settings.images} />
        </div>
      </div>
    </section>
  );
}

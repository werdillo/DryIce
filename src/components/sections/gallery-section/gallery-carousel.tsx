import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import type { GalleryImage } from "./types";

interface GalleryCarouselProps {
  images: GalleryImage[];
}

export function GalleryCarousel({ images }: GalleryCarouselProps) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <Carousel
      setApi={setApi}
      opts={{
        align: "start",
        loop: true,
      }}
      className="mb-12 w-full"
    >
      <CarouselContent className="-mr-3">
        {images.map((image, index) => (
          <CarouselItem
            key={index}
            className={cn(
              "pl-4",
              // mobile: почти полный экран с намёком на следующий
              // desktop (lg): ровно половина — 2 слайда одновременно
              "basis-10/12 lg:basis-1/2",
            )}
          >
            <div className="relative aspect-square overflow-hidden">
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Кнопки навигации */}
      <div className="absolute right-0 -bottom-16 hidden gap-2 md:flex">
        <CarouselPrevious className="static top-0 bottom-0 h-10 w-10 translate-y-0" />
        <CarouselNext className="static top-0 bottom-0 h-10 w-10 translate-y-0" />
      </div>

      {/* Dots */}
      <div className="absolute right-0 -bottom-12 left-0 py-4 md:right-auto md:-bottom-16">
        <div className="flex items-center justify-center gap-2">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={cn(
                "h-2 w-2 rounded-full transition-colors",
                current === index ? "bg-primary" : "bg-muted",
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </Carousel>
  );
}

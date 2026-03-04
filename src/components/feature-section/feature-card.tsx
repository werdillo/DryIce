import { AspectRatio } from "@/components/ui/aspect-ratio";
import type { FeatureItem } from "./types";

interface FeatureCardProps {
  feature: FeatureItem;
}

export function FeatureCard({ feature }: FeatureCardProps) {
  return (
    <div className="flex flex-col gap-6">
      <div className="w-full">
        <AspectRatio ratio={4 / 3}>
          <img
            src={feature.image.src}
            alt={feature.image.alt}
            className="object-cover h-full w-full"
          />
        </AspectRatio>
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="text-primary-foreground heading-sm">{feature.title}</h3>
        <p className="text-primary-foreground text-pretty">
          {feature.description}
        </p>
      </div>
    </div>
  );
}

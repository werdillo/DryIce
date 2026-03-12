import { AspectRatio } from "@/components/ui/aspect-ratio";
import type { SolutionItem } from "./types";

interface SolutionCardProps {
  solution: SolutionItem;
}

export function SolutionCard({ solution }: SolutionCardProps) {
  return (
    <div className="flex flex-col gap-6">
      <div className="w-full">
        <AspectRatio ratio={4 / 3}>
          <img
            src={solution.image.src}
            alt={solution.image.alt}
            className="rounded-xl object-cover h-full w-full"
          />
        </AspectRatio>
      </div>
      <div className="flex flex-col gap-3">
        <h4 className="text-foreground">{solution.title}</h4>
        <p className="text-foreground text-pretty">{solution.description}</p>
      </div>
    </div>
  );
}

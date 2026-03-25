import type { BenefitItem } from "./types";

interface BenefitCardProps {
  benefit: BenefitItem;
}

export function BenefitCard({ benefit }: BenefitCardProps) {
  const Icon = benefit.icon;
  return (
    <div className="flex flex-col items-center gap-5 text-center">
      <div className="flex flex-col gap-2">
        <h4 className="text-primary-foreground font-semibold tracking-tight">
          {benefit.title}
        </h4>
        <p className="text-primary-foreground text-pretty">
          {benefit.description}
        </p>
      </div>
    </div>
  );
}

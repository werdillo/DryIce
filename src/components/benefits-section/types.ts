import type { LucideIcon } from "lucide-react";

export interface BenefitItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface BenefitsSectionProps {
  tagline?: string;
  title?: string;
  description?: string;
  benefits: BenefitItem[];
}

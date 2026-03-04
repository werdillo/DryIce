import { Rocket } from "lucide-react";
import type { BenefitsSectionProps } from "./types";

export const benefitsConfig: BenefitsSectionProps = {
  tagline: "Benefits section",
  title: "Show your solution's impact on user success",
  description:
    "Explain in one or two concise sentences how your solution transforms users' challenges into positive outcomes.",
  benefits: [
    {
      title: "Benefit driven feature title",
      description:
        "Shortly describe how this feature solves a specific user problem.",
      icon: Rocket,
    },
    {
      title: "Benefit driven feature title",
      description:
        "Shortly describe how this feature solves a specific user problem.",
      icon: Rocket,
    },
    {
      title: "Benefit driven feature title",
      description:
        "Shortly describe how this feature solves a specific user problem.",
      icon: Rocket,
    },
    {
      title: "Benefit driven feature title",
      description:
        "Shortly describe how this feature solves a specific user problem.",
      icon: Rocket,
    },
  ],
};

import { Tagline } from "@/components/pro-blocks/landing-page/tagline";

interface FaqHeaderProps {
  tagline: string;
  heading: string;
  description: string;
  contactLink: {
    text: string;
    href: string;
  };
  ariaLabelledBy: string;
}

export function FaqHeader({
  heading,
  description,
  ariaLabelledBy,
}: FaqHeaderProps) {
  return (
    <div className="section-title-gap-lg flex flex-1 flex-col">
      <h3 id={ariaLabelledBy} className="text-primary">
        {heading}
      </h3>
      <p className="text-muted-foreground text-base text-pretty">
        {description}
      </p>
    </div>
  );
}

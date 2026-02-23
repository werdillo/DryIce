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
  tagline,
  heading,
  description,
  contactLink,
  ariaLabelledBy,
}: FaqHeaderProps) {
  return (
    <div className="section-title-gap-lg flex flex-1 flex-col">
      <Tagline>{tagline}</Tagline>
      <h1 id={ariaLabelledBy} className="heading-lg text-foreground">
        {heading}
      </h1>
      <p className="text-muted-foreground text-lg/8 text-pretty">
        {description}{" "}
        <a href={contactLink.href} className="text-primary underline">
          {contactLink.text}
        </a>
      </p>
    </div>
  );
}

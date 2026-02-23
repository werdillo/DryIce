import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Image } from "astro:assets";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";

const sectionData = {
  tagline: "Bento Grid Section",
  heading: "Feature-rich layout that captures attention",
  description:
    "Add a concise value statement that highlights your product's key features and benefits in a visually dynamic grid. Focus on creating balanced content blocks while keeping it under 2-3 lines. Align with your grid layout structure.",
};

const features = [
  {
    id: 1,
    title: "Feature title",
    description:
      "Shortly describe how this feature solves a specific user problem. Focus on benefits.",
    imageSrc: "https://ui.shadcn.com/placeholder.svg",
    imageAlt: "Placeholder",
    className: "rounded-xl lg:row-span-2",
    imageClassName: "h-full w-full object-cover",
  },
  {
    id: 2,
    title: "Feature title",
    description:
      "Shortly describe how this feature solves a specific user problem. Focus on benefits.",
    imageSrc: "https://ui.shadcn.com/placeholder.svg",
    imageAlt: "Placeholder",
    className: "rounded-xl",
    imageClassName: "h-full w-full object-cover md:aspect-[4/3]",
  },
  {
    id: 3,
    title: "Feature title",
    description:
      "Shortly describe how this feature solves a specific user problem. Focus on benefits.",
    imageSrc: "https://ui.shadcn.com/placeholder.svg",
    imageAlt: "Placeholder",
    className: "rounded-xl lg:col-start-2",
    imageClassName: "h-full w-full object-cover md:aspect-[4/3]",
  },
  {
    id: 4,
    title: "Feature title",
    description:
      "Shortly describe how this feature solves a specific user problem. Focus on benefits.",
    imageSrc: "https://ui.shadcn.com/placeholder.svg",
    imageAlt: "Placeholder",
    className: "rounded-xl lg:col-start-3 lg:row-span-2 lg:row-start-1",
    imageClassName: "h-full w-full object-cover",
  },
];

export function BentoGrid1() {
  return (
    <section className="bg-muted section-padding-y">
      <div className="container-padding-x container mx-auto flex flex-col gap-10 md:gap-12">
        {/* Section Title */}
        <div className="section-title-gap-lg mx-auto flex max-w-xl flex-col items-center text-center">
          {/* Tagline */}
          <Tagline>{sectionData.tagline}</Tagline>
          {/* Main Heading */}
          <h2 className="heading-lg">{sectionData.heading}</h2>
          {/* Description */}
          <p className="text-muted-foreground">{sectionData.description}</p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.id} className={feature.className}>
              <CardHeader>
                <CardTitle className="text-lg font-semibold">
                  {feature.title}
                </CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex h-full flex-col">
                <img
                  src={feature.imageSrc}
                  alt={feature.imageAlt}
                  width={1000}
                  height={1000}
                  className={feature.imageClassName}
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

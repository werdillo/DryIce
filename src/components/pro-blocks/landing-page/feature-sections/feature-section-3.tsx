import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Rocket, Monitor } from "lucide-react";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";

const sectionData = {
  tagline: "Feature section",
  heading: "Show your solution's impact on user success",
  description:
    "Explain in one or two concise sentences how your solution transforms users' challenges into positive outcomes.",
  image: {
    src: "https://ui.shadcn.com/placeholder.svg",
    alt: "Feature section image",
    aspectRatio: 1,
  },
};

const features = [
  {
    id: 1,
    icon: Monitor,
    title: "Responsive design",
    description:
      "Shortly describe how this feature solves a specific user problem.",
  },
  {
    id: 2,
    icon: Rocket,
    title: "Fast deployment",
    description:
      "Shortly describe how this feature solves a specific user problem.",
  },
];

export function FeatureSection3() {
  return (
    <section className="bg-background section-padding-y">
      <div className="container-padding-x mx-auto flex max-w-7xl flex-col items-center gap-12 md:gap-16 lg:flex-row">
        <div className="flex flex-1 flex-col gap-8 md:gap-12">
          <div className="section-title-gap-lg flex flex-col">
            <Tagline>{sectionData.tagline}</Tagline>
            <h2 className="heading-lg text-foreground">
              {sectionData.heading}
            </h2>
            <p className="text-muted-foreground text-lg/8 text-pretty">
              {sectionData.description}
            </p>
          </div>
          <div className="flex flex-col gap-8">
            {features.map((feature) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={feature.id}
                  className="flex flex-col gap-4 sm:flex-row sm:gap-5"
                >
                  <div className="bg-background flex h-10 w-10 shrink-0 items-center justify-center rounded-md border shadow-xs">
                    <IconComponent className="text-primary size-5" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-foreground heading-sm">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-full flex-1">
          <AspectRatio ratio={sectionData.image.aspectRatio}>
            <img
              src={sectionData.image.src}
              alt={sectionData.image.alt}
              className="rounded-xl object-cover w-full h-full"
            />
          </AspectRatio>
        </div>
      </div>
    </section>
  );
}

import type { ServicesSectionProps } from "./types";

export const servicesConfig: ServicesSectionProps = {
  heading: "why we are right for you",
  sectionLabel: "Our services",
  buttonText: "Get in touch",
  buttonHref: "/contact",
  image: {
    src: "/images/services.jpg",
    alt: "Dry ice services",
  },
  services: [
    {
      number: "01",
      title: "Bespoke Solutions",
      description:
        "We stand out with custom dry ice solutions, ensuring your operations are more efficient, eco-friendly, and distinct from the competition.",
      isActive: true,
    },
    {
      number: "02",
      title: "Staff Training Programs",
    },
    {
      number: "03",
      title: "Targeted Campaigns",
    },
    {
      number: "04",
      title: "Performance Tracking",
    },
    {
      number: "05",
      title: "24/7 System Monitoring",
    },
  ],
};

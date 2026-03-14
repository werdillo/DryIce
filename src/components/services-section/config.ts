import type { ServicesSectionProps } from "./types";

export const servicesConfig: ServicesSectionProps = {
  heading: "why we are right for you",
  sectionLabel: "Our services",
  buttonText: "Get in touch",
  buttonHref: "/contact",
  services: [
    {
      number: "01",
      title: "Bespoke Solutions",
      description:
        "We stand out with custom dry ice solutions, ensuring your operations are more efficient, eco-friendly, and distinct from the competition.",
      image: {
        src: "/images/services.jpg",
        alt: "Bespoke dry ice solutions",
      },
    },
    {
      number: "02",
      title: "Staff Training Programs",
      description:
        "Our certified specialists conduct hands-on training sessions, equipping your team with the knowledge to handle dry ice safely and effectively.",
      image: {
        src: "/images/services.jpg",
        alt: "Staff training programs",
      },
    },
    {
      number: "03",
      title: "Targeted Campaigns",
      description:
        "We design and execute focused promotional campaigns around your dry ice products and services, reaching the right audience at the right time.",
      image: {
        src: "/images/services.jpg",
        alt: "Targeted campaigns",
      },
    },
    {
      number: "04",
      title: "Performance Tracking",
      description:
        "Real-time monitoring and detailed analytics give you full visibility into consumption, efficiency, and delivery performance across all operations.",
      image: {
        src: "/images/services.jpg",
        alt: "Performance tracking dashboard",
      },
    },
    {
      number: "05",
      title: "24/7 System Monitoring",
      description:
        "Our round-the-clock support team ensures your cooling systems and dry ice supply remain uninterrupted, no matter the hour or circumstance.",
      image: {
        src: "/images/services.jpg",
        alt: "24/7 system monitoring",
      },
    },
  ],
};

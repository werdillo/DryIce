import type { FaqConfig } from "./types";

export const FAQ_CONFIG: FaqConfig = {
  tagline: "FAQ section",
  heading: "Frequently asked questions",
  description:
    "We've compiled the most important information to help you get the most out of your experience. Can't find what you're looking for?",
  contactLink: {
    text: "Contact us.",
    href: "#",
  },
  ariaLabelledBy: "faq-heading",
  categories: [
    {
      title: "General",
      ariaLabel: "General FAQ items",
      items: [
        {
          question: "What is shadcn/ui?",
          answer: "Content goes here",
        },
        {
          question: "What is shadcn/ui kit for Figma?",
          answer: "Content goes here",
        },
        {
          question:
            "I'm not familiar with shadcn/ui. Can I still use this kit?",
          answer: "Content goes here",
        },
        {
          question: "Can I create multi-brand design systems with this UI kit?",
          answer: "Content goes here",
        },
      ],
    },
    {
      title: "Billing",
      ariaLabel: "Billing FAQ items",
      items: [
        {
          question: "What is shadcn/ui?",
          answer: "Content goes here",
        },
        {
          question: "What is shadcn/ui kit for Figma?",
          answer: "Content goes here",
        },
        {
          question:
            "I'm not familiar with shadcn/ui. Can I still use this kit?",
          answer: "Content goes here",
        },
        {
          question: "Can I create multi-brand design systems with this UI kit?",
          answer: "Content goes here",
        },
      ],
    },
  ],
};

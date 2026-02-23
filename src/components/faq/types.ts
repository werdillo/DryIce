export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqCategory {
  title: string;
  ariaLabel: string;
  items: FaqItem[];
}

export interface FaqConfig {
  tagline: string;
  heading: string;
  description: string;
  contactLink: {
    text: string;
    href: string;
  };
  categories: FaqCategory[];
  ariaLabelledBy: string;
}

export interface FaqProps {
  config?: Partial<FaqConfig>;
}

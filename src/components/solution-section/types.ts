export interface SolutionItem {
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
}

export interface SolutionSectionProps {
  tagline?: string;
  title?: string;
  description?: string;
  solutions: SolutionItem[];
}

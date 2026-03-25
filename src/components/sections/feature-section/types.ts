export interface FeatureItem {
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
}

export interface FeatureSectionProps {
  tagline?: string;
  title?: string;
  description?: string;
  features: FeatureItem[];
}

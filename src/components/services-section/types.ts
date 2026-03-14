export interface ServiceItem {
  number: string;
  title: string;
  description?: string;
  image?: {
    src: string;
    alt: string;
  };
}

export interface ServicesSectionProps {
  heading?: string;
  sectionLabel?: string;
  services: ServiceItem[];
  buttonText?: string;
  buttonHref?: string;
}

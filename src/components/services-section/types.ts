export interface ServiceItem {
  number: string;
  title: string;
  description?: string;
  isActive?: boolean;
}

export interface ServicesSectionProps {
  heading?: string;
  sectionLabel?: string;
  services: ServiceItem[];
  image?: {
    src: string;
    alt: string;
  };
  buttonText?: string;
  buttonHref?: string;
}

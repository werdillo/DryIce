export interface MainSectionImage {
  src: string;
  alt: string;
}

export interface MainSectionProps {
  title1: string;
  title2: string;
  subtitle: string;
  description: string;
  buttonText: string;
  buttonHref?: string;
  image1: MainSectionImage;
  image2: MainSectionImage;
}

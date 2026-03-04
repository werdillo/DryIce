export interface GalleryImage {
  src: string;
  alt: string;
}

export interface GallerySectionProps {
  tagline?: string;
  title?: string;
  description?: string;
  images: GalleryImage[];
}

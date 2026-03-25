export interface GalleryImage {
  src: string;
  alt: string;
}

export interface GallerySectionProps {
  title?: string;
  description?: string;
  images: GalleryImage[];
}

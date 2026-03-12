interface FooterCopyrightProps {
  siteName: string;
  siteUrl: string;
  currentYear: number;
}

export function FooterCopyright({
  siteName,
  siteUrl,
  currentYear,
}: FooterCopyrightProps) {
  return (
    <p className="text-primary-foreground opacity-60 order-2 md:order-1">
      <span>Copyright © {currentYear}</span>{" "}
      <a href={siteUrl} className="hover:underline">
        {siteName}
      </a>
      . All rights reserved.
    </p>
  );
}

import { MainSection } from "@/components/sections/main-section";
import { HeroSection } from "@/components/sections/hero-section";
import { BenefitsSection } from "@/components/sections/benefits-section";
import { SolutionSection } from "@/components/sections/solution-section";
import { BookCall } from "@/components/sections/book-call";
import { ServicesSection } from "@/components/sections/services-section";
import { FeatureSection } from "@/components/sections/feature-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { ContactsSection } from "@/components/sections/contacts-section";
import { Faq } from "@/components/sections/faq";

interface Block {
  id: string;
  type: string;
  order: number;
  enabled: boolean;
  data: {
    lv: Record<string, any>;
    en: Record<string, any>;
    ru: Record<string, any>;
  };
}

interface BlockFactoryProps {
  block: Block;
  lang: string;
}

type Lang = "lv" | "en" | "ru";

const componentMap: Record<string, React.ComponentType<any>> = {
  "main-section": MainSection,
  "hero-section": HeroSection,
  "benefits-section": BenefitsSection,
  "solution-section": SolutionSection,
  "book-call": BookCall,
  "services-section": ServicesSection,
  "feature-section": FeatureSection,
  "gallery-section": GallerySection,
  "contacts-section": ContactsSection,
  // alias for actual JSON type name
  "contact-section": ContactsSection,
  faq: Faq,
  // alias for actual JSON type name
  "faq-section": Faq,
};

const anchorMap: Record<string, string | null> = {
  "main-section": "home",
  "hero-section": "about",
  "benefits-section": null,
  "solution-section": "solutions",
  "book-call": null,
  "services-section": "machines",
  "feature-section": "services",
  "gallery-section": "gallery",
  "contacts-section": "contacts",
  "contact-section": "contacts",
  faq: null,
  "faq-section": null,
};

export function BlockFactory({ block, lang }: BlockFactoryProps) {
  if (block.enabled === false) {
    return null;
  }

  const Component = componentMap[block.type];

  if (!Component) {
    console.warn(`[BlockFactory] Unknown block type: "${block.type}"`);
    return null;
  }

  const validLang = (["lv", "en", "ru"] as const).includes(lang as Lang)
    ? (lang as Lang)
    : "en";

  const props = block.data[validLang] ?? block.data["en"] ?? {};

  const anchorId = anchorMap[block.type] ?? null;

  const rendered = <Component {...props} />;

  if (anchorId) {
    return <div id={anchorId}>{rendered}</div>;
  }

  return rendered;
}

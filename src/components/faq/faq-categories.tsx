import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { FaqCategory } from "./types";

interface FaqCategoriesProps {
  categories: FaqCategory[];
}

export function FaqCategories({ categories }: FaqCategoriesProps) {
  return (
    <div className="flex flex-1 flex-col gap-8">
      {categories.map((category) => (
        <div key={category.title} className="flex flex-col gap-2">
          <h2 className="text-foreground heading-sm">{category.title}</h2>
          <Accordion type="single" collapsible aria-label={category.ariaLabel}>
            {category.items.map((item, itemIndex) => (
              <AccordionItem
                key={`${category.title}-${itemIndex}`}
                value={`${category.title.toLowerCase()}-${itemIndex}`}
              >
                <AccordionTrigger className="text-left">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      ))}
    </div>
  );
}

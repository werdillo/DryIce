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
          <h4 className="text-foreground/60">{category.title}</h4>
          <Accordion type="single" collapsible aria-label={category.ariaLabel}>
            {category.items.map((item, itemIndex) => (
              <AccordionItem
                key={`${category.title}-${itemIndex}`}
                value={`${category.title.toLowerCase()}-${itemIndex}`}
              >
                <AccordionTrigger className="text-left [&[data-state=open]_h4]:text-primary [&[data-state=open]_h4]:underline">
                  <h4>{item.question}</h4>
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

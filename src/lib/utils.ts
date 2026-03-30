import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Derives a section anchor id from a block type.
 * Strips the "-section" suffix so that links and ids stay in sync.
 *
 * @example
 * toAnchorId("solution-section") // "solution"
 * toAnchorId("contact-section")  // "contact"
 * toAnchorId("gallery-section")  // "gallery"
 * toAnchorId("book-call")        // "book-call"
 * toAnchorId("faq")              // "faq"
 */
export function toAnchorId(type: string): string {
  return type.replace(/-section$/, "");
}

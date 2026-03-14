import { cn } from "@/lib/utils";

export const inputClass = cn(
  "w-full bg-transparent",
  "border border-primary-foreground",
  "px-3 py-1 text-sm text-primary-foreground",
  "placeholder:text-primary-foreground/60",
  "shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]",
  "outline-none transition-shadow duration-150",
  "focus:shadow-[0_0_0_2px_rgba(21,21,21,0.2)]",
);

export const formButtonClass = cn(
  "w-full",
  "bg-primary-foreground text-foreground",
  "border border-primary-foreground",
  "px-5 py-3",
  "text-sm font-semibold",
  "transition-opacity duration-150",
  "hover:opacity-85 active:opacity-70",
  "cursor-pointer whitespace-nowrap",
);

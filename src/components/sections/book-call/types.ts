import type { ReactNode } from "react";

export interface BookCallProps {
  heading?: string;
  headingHighlight?: string;
  placeholder?: string;
  buttonText?: string;
  onSubmit?: (phone: string) => void;
}

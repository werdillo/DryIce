import { Field, FieldLabel } from "@/components/ui/field";
import { inputClass, formButtonClass } from "@/styles/form";
import { cn } from "@/lib/utils";

interface FooterNewsletterProps {
  emailInputId: string;
  emailPlaceholder: string;
  buttonText: string;
  ariaLabel: string;
}

export function FooterNewsletter({
  emailInputId,
  emailPlaceholder,
  buttonText,
  ariaLabel,
}: FooterNewsletterProps) {
  return (
    <form
      className="flex w-full flex-col gap-2 md:w-auto md:flex-row"
      aria-label={ariaLabel}
    >
      <Field className="md:w-60.5">
        <FieldLabel htmlFor={emailInputId} className="sr-only">
          Email
        </FieldLabel>
        <input
          id={emailInputId}
          type="email"
          placeholder={emailPlaceholder}
          required
          aria-required="true"
          aria-label="Enter your email for newsletter"
          className={inputClass}
        />
      </Field>
      <button
        type="submit"
        aria-label="Subscribe to our newsletter"
        className={cn(formButtonClass, "w-full md:w-auto h-7.5 py-1")}
      >
        {buttonText}
      </button>
    </form>
  );
}

import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import { InputGroup, InputGroupInput } from "@/components/ui/input-group";

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
      <Field className="md:w-[242px]">
        <FieldLabel htmlFor={emailInputId} className="sr-only">
          Email
        </FieldLabel>
        <InputGroup>
          <InputGroupInput
            id={emailInputId}
            type="email"
            placeholder={emailPlaceholder}
            required
            aria-required="true"
            aria-label="Enter your email for newsletter"
            className="border-[#151515] text-[#151515] placeholder:text-[#151515] placeholder:opacity-60 shadow-sm"
          />
        </InputGroup>
      </Field>
      <Button
        type="submit"
        className="w-full md:w-auto bg-[#151515] text-white border-[#151515] hover:bg-[#151515]/90"
        aria-label="Subscribe to our newsletter"
      >
        {buttonText}
      </Button>
    </form>
  );
}

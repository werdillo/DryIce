import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";

interface ContactFormProps {
  privacyPolicyLink?: string;
}

export function ContactForm({ privacyPolicyLink = "#" }: ContactFormProps) {
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <form
      className="flex flex-col"
      onSubmit={handleSubmit}
      aria-label="Contact form"
    >
      <FieldSet>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="name">Name</FieldLabel>
            <Input
              id="name"
              placeholder="Name"
              required
              aria-required="true"
            />
          </Field>

          <Field>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <Input
              id="email"
              type="email"
              placeholder="Email"
              required
              aria-required="true"
            />
          </Field>

          <Field>
            <FieldLabel htmlFor="message">Message</FieldLabel>
            <Textarea
              id="message"
              placeholder="Type your message"
              required
              aria-required="true"
            />
          </Field>

          <Field orientation="horizontal">
            <Checkbox
              id="privacy"
              checked={agreed}
              onCheckedChange={(checked) => setAgreed(checked as boolean)}
              required
              aria-required="true"
            />
            <FieldLabel
              htmlFor="privacy"
              className="text-muted-foreground inline text-sm leading-none font-normal"
            >
              By selecting this you agree to our{" "}
              <a href={privacyPolicyLink} className="text-primary underline">
                Privacy Policy
              </a>
              .
            </FieldLabel>
          </Field>

          <Field>
            <Button type="submit" className="w-full">
              Send message
            </Button>
          </Field>
        </FieldGroup>
      </FieldSet>
    </form>
  );
}

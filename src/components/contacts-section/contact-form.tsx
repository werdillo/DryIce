"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { cn } from "@/lib/utils";

interface ContactFormProps {
  privacyPolicyLink?: string;
}

const inputClass = cn(
  "w-full bg-transparent",
  "border border-primary-foreground",
  "px-3 py-1 text-sm text-primary-foreground",
  "placeholder:text-primary-foreground/60",
  "shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]",
  "outline-none transition-shadow duration-150",
  "focus:shadow-[0_0_0_2px_rgba(21,21,21,0.2)]",
);

export function ContactForm({ privacyPolicyLink = "#" }: ContactFormProps) {
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
            <FieldLabel
              htmlFor="name"
              className="text-sm font-semibold text-primary-foreground"
            >
              Name
            </FieldLabel>
            <input
              id="name"
              type="text"
              placeholder="Name"
              required
              aria-required="true"
              className={inputClass}
            />
          </Field>

          <Field>
            <FieldLabel
              htmlFor="email"
              className="text-sm font-semibold text-primary-foreground"
            >
              Email
            </FieldLabel>
            <input
              id="email"
              type="email"
              placeholder="Email"
              required
              aria-required="true"
              className={inputClass}
            />
          </Field>

          <Field>
            <FieldLabel
              htmlFor="message"
              className="text-sm font-semibold text-primary-foreground"
            >
              Message
            </FieldLabel>
            <textarea
              id="message"
              placeholder="Type your message"
              required
              aria-required="true"
              className={cn(inputClass, "min-h-31.5 py-1.5 resize-none")}
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
              className="text-primary-foreground/80 inline text-sm leading-none font-normal"
            >
              By selecting this you agree to our{" "}
              <a
                href={privacyPolicyLink}
                className="text-primary-foreground underline"
              >
                Privacy Policy
              </a>
              .
            </FieldLabel>
          </Field>

          <Field>
            <button
              type="submit"
              className={cn(
                "w-full",
                "bg-primary-foreground text-foreground",
                "border border-primary-foreground",
                "px-5 py-3",
                "text-sm font-semibold",
                "transition-opacity duration-150",
                "hover:opacity-85 active:opacity-70",
                "cursor-pointer",
              )}
            >
              Send message
            </button>
          </Field>
        </FieldGroup>
      </FieldSet>
    </form>
  );
}

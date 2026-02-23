import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";

const contactData = {
  tagline: "Contact Section",
  heading: "Get in touch",
  description:
    "Write one or two welcoming sentences that encourage contact and include your response time commitment.",
  contactInfo: [
    {
      id: 1,
      icon: Phone,
      label: "(406) 555-0120",
      href: "#",
      ariaLabel: "Call us",
    },
    {
      id: 2,
      icon: Mail,
      label: "hello@example.com",
      href: "#",
      ariaLabel: "Email us",
    },
    {
      id: 3,
      icon: MapPin,
      label: "192 Griffin Street, Gilbert, AZ 32521",
      href: "#",
      ariaLabel: "Our location",
    },
  ],
  form: {
    fields: {
      name: {
        id: "name",
        label: "Name",
        placeholder: "Name",
        type: "text",
      },
      email: {
        id: "email",
        label: "Email",
        placeholder: "Email",
        type: "email",
      },
      message: {
        id: "message",
        label: "Message",
        placeholder: "Type your message",
      },
    },
    privacy: {
      id: "privacy",
      text: "By selecting this you agree to our",
      linkText: "Privacy Policy",
      linkHref: "#",
    },
    submitButton: "Send message",
  },
};

export function ContactSection4() {
  return (
    <section
      className="bg-background py-16 md:py-0"
      aria-labelledby="contact-heading"
    >
      <div className="flex flex-col gap-8 md:flex-row md:gap-0">
        <div className="flex flex-1 items-center justify-center px-6 py-0 md:py-24">
          <div className="flex max-w-md flex-col gap-8">
            <div className="section-title-gap-lg mx-auto flex flex-col">
              <Tagline>{contactData.tagline}</Tagline>
              <h1 id="contact-heading" className="heading-lg">
                {contactData.heading}
              </h1>
              <p className="text-muted-foreground text-lg/8 text-pretty">
                {contactData.description}
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {contactData.contactInfo.map((contact) => {
                const IconComponent = contact.icon;
                return (
                  <a
                    key={contact.id}
                    href={contact.href}
                    className="flex items-start gap-3 hover:underline"
                    aria-label={contact.ariaLabel}
                  >
                    <div className="pt-0.5">
                      <IconComponent className="text-primary h-5 w-5" />
                    </div>
                    <span className="text-card-foreground text-base leading-6 font-medium">
                      {contact.label}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <Separator className="block md:hidden" />

        <div className="md:bg-muted/40 flex flex-1 flex-col items-center justify-center px-6 py-0 md:py-24">
          <form
            className="flex w-full max-w-md flex-col"
            onSubmit={(e) => e.preventDefault()}
            aria-label="Contact form"
          >
            <FieldSet>
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor={contactData.form.fields.name.id}>
                    {contactData.form.fields.name.label}
                  </FieldLabel>
                  <Input
                    id={contactData.form.fields.name.id}
                    placeholder={contactData.form.fields.name.placeholder}
                    required
                    aria-required="true"
                    className="bg-background"
                  />
                </Field>

                <Field>
                  <FieldLabel htmlFor={contactData.form.fields.email.id}>
                    {contactData.form.fields.email.label}
                  </FieldLabel>
                  <Input
                    id={contactData.form.fields.email.id}
                    type={contactData.form.fields.email.type}
                    placeholder={contactData.form.fields.email.placeholder}
                    required
                    aria-required="true"
                    className="bg-background"
                  />
                </Field>

                <Field>
                  <FieldLabel htmlFor={contactData.form.fields.message.id}>
                    {contactData.form.fields.message.label}
                  </FieldLabel>
                  <Textarea
                    id={contactData.form.fields.message.id}
                    placeholder={contactData.form.fields.message.placeholder}
                    className="bg-background min-h-[106px]"
                    required
                    aria-required="true"
                  />
                </Field>

                <Field orientation="horizontal">
                  <Checkbox
                    id={contactData.form.privacy.id}
                    required
                    aria-required="true"
                    className="bg-background"
                  />
                  <FieldLabel
                    htmlFor={contactData.form.privacy.id}
                    className="text-muted-foreground inline leading-tight font-normal"
                  >
                    {contactData.form.privacy.text}{" "}
                    <a
                      href={contactData.form.privacy.linkHref}
                      className="text-foreground underline"
                    >
                      {contactData.form.privacy.linkText}
                    </a>
                    .
                  </FieldLabel>
                </Field>

                <Field>
                  <Button type="submit" className="w-full">
                    {contactData.form.submitButton}
                  </Button>
                </Field>
              </FieldGroup>
            </FieldSet>
          </form>
        </div>
      </div>
    </section>
  );
}

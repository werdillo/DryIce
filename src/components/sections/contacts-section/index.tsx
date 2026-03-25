import { Tagline } from "@/components/tagline";
import { Separator } from "@/components/ui/separator";
import { ContactForm } from "./contact-form";
import { ContactDetails } from "./contact-details";
import { contactConfig } from "./config";
import type { ContactSectionProps } from "./types";

export function ContactsSection(props: Partial<ContactSectionProps>) {
  const settings = { ...contactConfig, ...props };

  return (
    <section
      className="bg-background flex flex-col gap-8 py-16 md:gap-0 md:py-0 lg:flex-row"
      aria-labelledby="contact-heading"
    >
      <div className="container-padding-x theme bg-primary flex-1 items-center justify-center p-8 md:py-24">
        <div className="mx-auto flex max-w-md flex-col gap-10 md:gap-12">
          <div className="section-title-gap-lg mx-auto flex flex-col">
            <h3 id="contact-heading" className="text-primary-foreground">
              {settings.title}
            </h3>
            <p className="text-primary-foreground text-lg/8 text-pretty">
              {settings.description}
            </p>
          </div>

          <ContactForm privacyPolicyLink={settings.privacyPolicyLink} />
        </div>
      </div>

      <Separator className="block md:hidden" />

      <div className="md:bg-muted/40 flex flex-1 items-center justify-center px-6 md:px-0 md:py-24">
        <ContactDetails
          officesTitle={settings.officesTitle}
          officesDescription={settings.officesDescription}
          offices={settings.offices}
          emailTitle={settings.emailTitle}
          emailDescription={settings.emailDescription}
          emails={settings.emails}
        />
      </div>
    </section>
  );
}

import { Tagline } from "@/components/pro-blocks/landing-page/tagline";
import { Separator } from "@/components/ui/separator";
import { ContactForm } from "./contact-form";
import { ContactDetails } from "./contact-details";
import { contactConfig } from "./config";
import type { ContactSectionProps } from "./types";

export function ContactsSection(props: Partial<ContactSectionProps>) {
  const settings = { ...contactConfig, ...props };

  return (
    <section
      className="bg-background flex min-h-screen flex-col gap-8 py-16 md:gap-0 md:py-0 lg:flex-row"
      aria-labelledby="contact-heading"
    >
      <div className="container-padding-x flex-1 items-center justify-center md:p-0 md:py-24">
        <div className="mx-auto flex max-w-md flex-col gap-10 md:gap-12">
          <div className="section-title-gap-lg mx-auto flex flex-col">
            {settings.tagline && <Tagline>{settings.tagline}</Tagline>}
            <h1 id="contact-heading" className="heading-lg">
              {settings.title}
            </h1>
            <p className="text-muted-foreground text-lg/8 text-pretty">
              {settings.description}
            </p>
          </div>

          <ContactForm privacyPolicyLink={settings.privacyPolicyLink} />
        </div>
      </div>

      <Separator className="block md:hidden" />

      <div className="md:bg-muted/40 flex-1 items-center justify-center px-6 md:px-0 md:py-24">
        <ContactDetails
          officesTitle={settings.officesTitle}
          officesDescription={settings.officesDescription}
          offices={settings.offices}
          emailTitle={settings.emailTitle}
          emailDescription={settings.emailDescription}
          emails={settings.emails}
          socialsTitle={settings.socialsTitle}
          socials={settings.socials}
        />
      </div>
    </section>
  );
}

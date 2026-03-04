import { Separator } from "@/components/ui/separator";
import type { Office, EmailContact, SocialLink } from "./types";

interface ContactDetailsProps {
  officesTitle?: string;
  officesDescription?: string;
  offices: Office[];
  emailTitle?: string;
  emailDescription?: string;
  emails: EmailContact[];
  socialsTitle?: string;
  socials: SocialLink[];
}

export function ContactDetails({
  officesTitle,
  officesDescription,
  offices,
  emailTitle,
  emailDescription,
  emails,
  socialsTitle,
  socials,
}: ContactDetailsProps) {
  return (
    <div className="mx-auto flex max-w-md flex-col gap-8">
      {/* Offices Section */}
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <h2 className="text-foreground heading-sm">{officesTitle}</h2>
          <p className="text-muted-foreground text-base text-pretty">
            {officesDescription}
          </p>
        </div>

        <div className="flex flex-col gap-6 md:flex-row">
          {offices.map((office, index) => (
            <div key={index} className="flex flex-1 flex-col gap-2">
              <h3 className="text-card-foreground text-base font-semibold">
                {office.city}
              </h3>
              <p className="text-muted-foreground text-base whitespace-pre-line">
                {office.address}
              </p>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      {/* Email Section */}
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <h2 className="text-foreground heading-sm">{emailTitle}</h2>
          <p className="text-muted-foreground text-base text-pretty">
            {emailDescription}
          </p>
        </div>

        <div className="flex flex-col gap-6 md:flex-row">
          {emails.map((email, index) => (
            <div key={index} className="flex flex-1 flex-col gap-2">
              <h3 className="text-card-foreground text-base font-semibold">
                {email.label}
              </h3>
              <a
                href={`mailto:${email.email}`}
                className="text-muted-foreground text-base underline hover:text-primary transition-colors"
              >
                {email.email}
              </a>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      {/* Socials Section */}
      <div className="flex flex-col gap-6">
        <h2 className="text-foreground heading-sm">{socialsTitle}</h2>
        <div className="flex flex-row gap-5">
          {socials.map((social, index) => {
            const Icon = social.icon;
            return (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="text-foreground transition-all duration-300 hover:scale-110 hover:text-primary"
              >
                <Icon className="size-5" />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

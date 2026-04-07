import { Separator } from "@/components/ui/separator";
import type { Office, EmailContact, SocialLink } from "./types";
import * as LucideIcons from "lucide-react";
import { useState } from "react";

interface ContactDetailsProps {
  officesTitle?: string;
  officesDescription?: string;
  offices: Office[];
  emailTitle?: string;
  emailDescription?: string;
  emails: EmailContact[];
  socialsTitle?: string;
  socials?: SocialLink[];
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
          <h3 className="text-foreground">{officesTitle}</h3>
          <p className="text-muted-foreground text-base text-pretty">
            {officesDescription}
          </p>
        </div>

        <div className="flex flex-col gap-6 md:flex-row">
          {offices.map((office, index) => (
            <div key={index} className="flex flex-1 flex-col gap-2">
              <h5 className="text-card-foreground font-semibold">
                {office.city}
              </h5>
              <h4 className="text-primary whitespace-pre-line">
                {office.address}
              </h4>
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
              <h5 className="text-card-foreground">{email.label}</h5>
              <a
                href={`mailto:${email.email}`}
                className="text-primary underline hover:text-primary transition-colors"
              >
                <h4>{email.email}</h4>
              </a>
            </div>
          ))}
        </div>
      </div>

      {socials && socials.length > 0 && (
        <>
          <Separator />
          <div className="flex flex-col gap-3">
            <h2 className="text-foreground heading-sm">{socialsTitle}</h2>
            <div className="flex flex-row gap-5">
              {socials.map((social, index) => {
                return <SocialIcon key={index} social={social} />;
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

function SocialIcon({ social }: { social: SocialLink }) {
  const [useFallback, setUseFallback] = useState(false);

  const iconName = (social.icon as string)?.toLowerCase().replace("si", "");
  const iconPath = `/images/socials/${iconName}.svg`;

  if (useFallback) {
    const LucideIcon =
      (LucideIcons as any)[social.icon as string] || LucideIcons.Share2;
    return (
      <a
        href={social.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-foreground transition-all duration-300 hover:scale-110"
        aria-label={social.label}
      >
        <LucideIcon className="size-8" />
      </a>
    );
  }

  return (
    <a
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-foreground transition-all duration-300 hover:scale-110"
      aria-label={social.label}
    >
      <img
        src={iconPath}
        alt={social.label}
        className="size-8"
        onError={() => setUseFallback(true)}
      />
    </a>
  );
}

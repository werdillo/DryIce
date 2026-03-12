export interface Office {
  city: string;
  address: string;
}

export interface EmailContact {
  label: string;
  email: string;
}

export interface SocialLink {
  icon: React.ElementType;
  href: string;
  label: string;
}

export interface ContactSectionProps {
  title?: string;
  description?: string;
  officesTitle?: string;
  officesDescription?: string;
  offices: Office[];
  emailTitle?: string;
  emailDescription?: string;
  emails: EmailContact[];
  socialsTitle?: string;
  socials?: SocialLink[];
  privacyPolicyLink?: string;
}

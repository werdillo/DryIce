import {
  SiFacebook,
  SiInstagram,
  SiGithub,
  SiDribbble,
} from "@icons-pack/react-simple-icons";
import type { ContactSectionProps } from "./types";

export const contactConfig: ContactSectionProps = {
  tagline: "Contact Section",
  title: "Get in touch",
  description: "Write one or two welcoming sentences that encourage contact and include your response time commitment.",
  officesTitle: "Visit our offices",
  officesDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit interdum hendrerit ex vitae sodales.",
  offices: [
    {
      city: "New Mexico",
      address: "4140 Parker Rd. Allentown New Mexico, 31134",
    },
    {
      city: "Hawaii",
      address: "1901 Thornridge Cir. Shiloh Hawaii, 81063",
    },
  ],
  emailTitle: "Email us",
  emailDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit interdum hendrerit ex vitae sodales.",
  emails: [
    {
      label: "Sales",
      email: "sales@example.com",
    },
    {
      label: "Careers",
      email: "careers@example.com",
    },
  ],
  socialsTitle: "Follow us",
  socials: [
    {
      icon: SiFacebook,
      href: "#",
      label: "Facebook",
    },
    {
      icon: SiInstagram,
      href: "#",
      label: "Instagram",
    },
    {
      icon: SiGithub,
      href: "#",
      label: "GitHub",
    },
    {
      icon: SiDribbble,
      href: "#",
      label: "Dribbble",
    },
  ],
  privacyPolicyLink: "#",
};

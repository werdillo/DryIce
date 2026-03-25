import { SiFacebook, SiInstagram } from "@icons-pack/react-simple-icons";
import { Linkedin } from "lucide-react";
import type { ContactSectionProps } from "./types";

export const contactConfig: ContactSectionProps = {
  title: "Sazinieties ar mums",
  description:
    "Mūsu speciālisti palīdzēs jums atrast piemērotāko sausā ledus risinājumu. Atbildam darba laikā 1 stundas ietvaros.",
  officesTitle: "Mūsu noliktavas",
  officesDescription:
    "Nodrošinām ērtu sausā ledus saņemšanu Rīgā un operatīvu piegādi visā Baltijā.",
  offices: [
    {
      city: "Rīga",
      address: "Katlakalna iela 11, Rīga, LV-1073, Latvija",
    },
  ],
  emailTitle: "Rakstiet mums",
  emailDescription:
    "Sūtiet savus jautājumus vai cenu pieprasījumus uz mūsu e-pasta adresēm.",
  emails: [
    {
      label: "Pārdošana",
      email: "info@dryicebaltic.lv",
    },
    {
      label: "Sadarbība",
      email: "partners@dryicebaltic.lv",
    },
  ],
  socialsTitle: "Sekojiet mums",
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
      icon: Linkedin,
      href: "#",
      label: "LinkedIn",
    },
  ],
  privacyPolicyLink: "/privatuma-politika",
};

import { Rocket, Shield, Clock, Award } from "lucide-react";
import type { BenefitsSectionProps } from "./types";

export const benefitsConfig: BenefitsSectionProps = {
  tagline: "Kāpēc izvēlēties mūs",
  title: "Profesionāli sausā ledus risinājumi Baltijā",
  description:
    "DryIce Baltic piedāvā augstākās kvalitātes pakalpojumus, nodrošinot efektivitāti un uzticamību katrā pasūtījumā.",
  benefits: [
    {
      title: "Augsta kvalitāte",
      description:
        "Mūsu sausais ledus atbilst visaugstākajiem standartiem, nodrošinot ilgu aukstuma saglabāšanu.",
      icon: Shield,
    },
    {
      title: "Ātra piegāde",
      description:
        "Operatīva loģistika visā Latvijā un Baltijā, lai jūsu darbi neapstātos ne uz mirkli.",
      icon: Clock,
    },
    {
      title: "Inovācijas",
      description:
        "Izmantojam modernākās tehnoloģijas sausā ledus ražošanā un tīrīšanas pakalpojumos.",
      icon: Rocket,
    },
    {
      title: "Sertificēti produkti",
      description:
        "Visi mūsu produkti un procesi ir sertificēti, garantējot drošību un profesionalitāti.",
      icon: Award,
    },
  ],
};

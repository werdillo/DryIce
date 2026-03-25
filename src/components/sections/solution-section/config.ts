import type { SolutionSectionProps } from "./types";

export const solutionConfig: SolutionSectionProps = {
  title: "Mūsu risinājumi jūsu biznesam un ikdienai",
  description:
    "No industriālās tīrīšanas līdz pasākumu efektiem – DryIce Baltic piedāvā visaptverošus sausā ledus risinājumus visā Baltijā.",
  solutions: [
    {
      title: "Sausā ledus piegāde",
      description:
        "Augstākās kvalitātes sausais ledus granulās un blokos. Piegāde visā Latvijā un Baltijā 24 stundu laikā.",
      image: {
        src: "/images/solution/device-1.png",
        alt: "Sausā ledus piegāde",
      },
    },
    {
      title: "Sausā ledus tīrīšana",
      description:
        "Inovatīva un ekoloģiska virsmu tīrīšana ar sauso ledu. Nesabojā virsmas, nav ķīmisku atkritumu.",
      image: {
        src: "/images/solution/device-2.png",
        alt: "Sausā ledus tīrīšana",
      },
    },
    {
      title: "Efekti pasākumiem",
      description:
        "Radām iespaidīgus dūmu un miglas efektus kāzām, koncertiem un privātām ballītēm.",
      image: {
        src: "/images/solution/device-3.png",
        alt: "Pasākumu efekti",
      },
    },
  ],
};

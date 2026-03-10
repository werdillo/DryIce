import type { FaqProps } from "./types";

export const faqConfig: FaqProps = {
  tagline: "BUJ",
  title: "Biežāk uzdotie jautājumi",
  description:
    "Atrodiet atbildes uz populārākajiem jautājumiem par sausā ledus lietošanu, piegādi un drošību.",
  categories: [
    {
      id: "general",
      name: "Vispārīgi par sauso ledu",
      questions: [
        {
          question: "Kas ir sausais ledus?",
          answer:
            "Sausais ledus ir oglekļa dioksīds (CO2) cietā formā. Tā temperatūra ir aptuveni -78.5°C. Atšķirībā no parastā ledus, tas neizkūst šķidrumā, bet sublimējas tieši gāzē, neatstājot mitrumu.",
        },
        {
          question: "Cik ilgi sausais ledus saglabājas?",
          answer:
            "Sausā ledus ilgums ir atkarīgs no iepakojuma un apkārtējās temperatūras. Standarta termokastē tas parasti sublimējas par aptuveni 2-4 kg diennaktī. Ieteicams to iegādāties pēc iespējas tuvāk lietošanas laikam.",
        },
        {
          question: "Vai sausais ledus ir bīstams?",
          answer:
            "Sausais ledus ir drošs, ja to lieto pareizi. Galvenie noteikumi: nekad neaiztieciet to ar kailām rokām (var rasties apsaldējumi) un neuzglabājiet to hermētiski noslēgtos traukos vai nevēdināmās telpās CO2 koncentrācijas dēļ.",
        },
      ],
    },
    {
      id: "delivery",
      name: "Piegāde un pasūtījumi",
      questions: [
        {
          question: "Kādos veidos ir pieejams sausais ledus?",
          answer:
            "Mēs piedāvājam sauso ledu 3mm un 16mm granulās, kā arī blokos pēc pieprasījuma. Granulas ir ideāli piemērotas tīrīšanai un efektiem, savukārt bloki - ilgstošai dzesēšanai.",
        },
        {
          question: "Kāds ir minimālais pasūtījuma apjoms?",
          answer:
            "Minimālais pasūtījuma apjoms piegādei ir 5 kg. Mazākus apjomus ir iespējams saņemt mūsu noliktavā, iepriekš saskaņojot laiku.",
        },
        {
          question: "Vai jūs nodrošināt piegādi brīvdienās?",
          answer:
            "Jā, mēs nodrošinām piegādi visā Baltijā, saskaņojot to ar klientu. Pasākumiem un steidzamiem gadījumiem piegāde ir pieejama arī ārpus standarta darba laika.",
        },
      ],
    },
    {
      id: "services",
      name: "Pakalpojumi",
      questions: [
        {
          question: "Kas ir sausā ledus tīrīšana (strūklas apstrāde)?",
          answer:
            "Tā ir inovatīva tīrīšanas metode, kurā sausā ledus granulas tiek paātrinātas saspiesta gaisa plūsmā. Tā ir nedestruktīva, nevada elektrību un ir videi draudzīga, jo neizmanto ķīmiju.",
        },
        {
          question: "Kā izmantot sauso ledu pasākumos?",
          answer:
            "Sauso ledu bieži izmanto 'smagā dūma' radīšanai uz skatuvēm vai kāzās, kā arī dzērienu efektīgai pasniegšanai. Mēs konsultējam un piedāvājam aprīkojumu šādu efektu radīšanai.",
        },
      ],
    },
  ],
};

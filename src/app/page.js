
import Hero from "@/components/home/Hero";
import Indicadores from "@/components/home/Indicadores";
import SobreEmpresa from "@/components/home/SobreEmpresa";
import ServicosPrincipais from "@/components/home/ServicosPrincipais";
import ObrasEmDestaque from "@/components/home/ObrasEmDestaque";
import Diferenciais from "@/components/home/Diferenciais";
import Parceiros from "@/components/home/Parceiros";
import CtaHome from "@/components/sections/Cta";

export const metadata = {
  title: "Imotec Engenharia & Negócios | Construção Civil em Angola",

  description:
    "A Imotec Engenharia & Negócios actua nas áreas de construção civil, engenharia, arquitectura e imobiliário em Angola. Conheça os nossos serviços, projectos e soluções.",

  keywords: [
    "Imotec",
    "imotec",
    "Imotec Engenharia e Negócios",
    "construção civil em Angola",
    "empresa de construção civil em Angola",
    "engenharia civil em Angola",
    "serviços de construção civil",
    "projectos de construção em Angola",
    "arquitectura em Angola",
    "gestão de projectos de construção",
    "fiscalização de obras",
    "habitação em Angola",
    "imobiliário em Angola",
  ],

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title: "Imotec Engenharia & Negócios | Construção Civil em Angola",
    description:
      "Conheça os serviços e projectos da Imotec Engenharia & Negócios nas áreas de construção civil, engenharia, arquitectura e imobiliário em Angola.",
    type: "website",
    locale: "pt_AO",
    siteName: "Imotec Engenharia & Negócios",
    images: [
      {
        url: "/img/seo-imotec.jpg",
        width: 1920,
        height: 1280,
        alt: "Imotec Engenharia & Negócios — Construção Civil em Angola",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Imotec Engenharia & Negócios | Construção Civil em Angola",
    description:
      "Construção civil, engenharia, arquitectura e imobiliário em Angola.",
    images: ["/img/seo-imotec.jpg"],
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Indicadores />
      <SobreEmpresa />
      <ServicosPrincipais />
      <ObrasEmDestaque />
      <Diferenciais />
      <Parceiros />
      <CtaHome />
    </>
  );
}

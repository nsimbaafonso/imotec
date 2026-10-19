
import Banner from "@/components/ui/Banner";
import Historia from "@/components/sobre/Historia";
import MissaoVisaoValores from "@/components/sobre/MissaoVisaoValores";
import Equipa from "@/components/sobre/Equipa";

export const metadata = {
  title: "Sobre Nós | Imotec Engenharia & Negócios",

  description:
    "Conheça a Imotec Engenharia & Negócios, a nossa história, missão, visão, valores e equipa, bem como o nosso compromisso com soluções adaptadas à realidade angolana.",

  keywords: [
    "Imotec",
    "Imotec Engenharia e Negócios",
    "sobre a Imotec",
    "empresa de construção civil em Angola",
    "engenharia em Angola",
    "arquitectura em Angola",
    "soluções habitacionais em Angola",
    "empresa de engenharia e construção",
    "missão e valores da Imotec",
    "equipa Imotec",
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
    title: "Sobre Nós | Imotec Engenharia & Negócios",
    description:
      "Descubra a história, a missão, a visão, os valores e a equipa da Imotec Engenharia & Negócios em Angola.",
    type: "website",
    locale: "pt_AO",
    siteName: "Imotec Engenharia & Negócios",
    images: [
      {
        url: "/img/seo-imotec.jpg",
        width: 1920,
        height: 1280,
        alt: "Imotec Engenharia & Negócios — Conheça a nossa empresa",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Sobre Nós | Imotec Engenharia & Negócios",
    description:
      "Conheça a história, a missão e a equipa da Imotec Engenharia & Negócios em Angola.",
    images: ["/img/seo-imotec.jpg"],
  },
};

export default function SobreNos() {
  return (
    <>
      <Banner
        image="/img/banner-sobre-nos.jpg"
        title="Sobre nós"
        description="Conheça a Imotec, a nossa visão e o compromisso com soluções habitacionais adaptadas à realidade angolana."
      />
      <Historia />
      <MissaoVisaoValores />
      <Equipa />
    </>
  );
}

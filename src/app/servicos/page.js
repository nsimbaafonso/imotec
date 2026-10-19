
import Banner from "@/components/ui/Banner";
import IndicadoresServicos from "@/components/servicos/IndicadoresServicos";
import ServicosDestaque from "@/components/servicos/ServicosDestaque";
import ComoTrabalhamos from "@/components/servicos/ComoTrabalhamos";

export const metadata = {
  title: "Serviços de Construção Civil e Engenharia | Imotec",

  description:
    "Conheça os serviços da Imotec Engenharia & Negócios em Angola, incluindo construção civil, engenharia, arquitectura e soluções habitacionais adaptadas às necessidades de cada cliente.",

  keywords: [
    "Imotec",
    "Imotec Engenharia e Negócios",
    "serviços da Imotec",
    "serviços de construção civil em Angola",
    "empresa de construção civil em Angola",
    "serviços de engenharia em Angola",
    "arquitectura em Angola",
    "projectos de construção",
    "soluções habitacionais em Angola",
    "gestão de projectos de construção",
    "fiscalização de obras",
    "construção e imobiliário em Angola",
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
    title: "Serviços de Construção Civil e Engenharia | Imotec",
    description:
      "Descubra as soluções de construção civil, engenharia, arquitectura e habitação disponibilizadas pela Imotec Engenharia & Negócios em Angola.",
    type: "website",
    locale: "pt_AO",
    siteName: "Imotec Engenharia & Negócios",
    images: [
      {
        url: "/img/seo-imotec.jpg",
        width: 1920,
        height: 1280,
        alt: "Serviços de construção civil, engenharia e arquitectura da Imotec",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Serviços de Construção Civil e Engenharia | Imotec",
    description:
      "Conheça as soluções de construção civil, engenharia, arquitectura e habitação da Imotec em Angola.",
    images: ["/img/seo-imotec.jpg"],
  },
};

export default function Servicos() {
  return (
    <>
      <Banner
        image="/img/banner-servicos.jpg"
        title="Os nossos serviços"
        description="Conheça as nossas soluções de construção, arquitectura e habitação, desenvolvidas para responder às necessidades dos nossos clientes."
      />
      <IndicadoresServicos />
      <ServicosDestaque />
      <ComoTrabalhamos />
    </>
  );
}

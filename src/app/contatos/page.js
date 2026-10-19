
import Banner from "@/components/ui/Banner";
import InfoContatos from "@/components/contatos/InfoContatos";
import FormularioContato from "@/components/contatos/FormularioContato";
import Mapa from "@/components/contatos/Mapa";
import RedesSociais from "@/components/contatos/RedesSociais";

export const metadata = {
  title: "Contactos | Imotec Engenharia & Negócios",

  description:
    "Entre em contacto com a Imotec Engenharia & Negócios, em Angola, para solicitar orçamentos, esclarecer dúvidas ou obter informações sobre os nossos serviços de construção civil, engenharia, arquitectura e imobiliário.",

  keywords: [
    "Imotec",
    "Imotec Engenharia e Negócios",
    "contactos Imotec",
    "contactar empresa de construção civil em Angola",
    "orçamento de construção civil em Angola",
    "serviços de engenharia em Angola",
    "empresa de construção civil em Angola",
    "contactos de empresas de construção em Angola",
    "arquitectura em Angola",
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
    title: "Contactos | Imotec Engenharia & Negócios",
    description:
      "Fale com a Imotec Engenharia & Negócios para solicitar orçamentos ou obter informações sobre os nossos serviços em Angola.",
    type: "website",
    locale: "pt_AO",
    siteName: "Imotec Engenharia & Negócios",
    images: [
      {
        url: "/img/seo-imotec.jpg",
        width: 1920,
        height: 1280,
        alt: "Contactos da Imotec Engenharia & Negócios em Angola",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Contactos | Imotec Engenharia & Negócios",
    description:
      "Entre em contacto com a Imotec para informações e orçamentos de construção civil e engenharia em Angola.",
    images: ["/img/seo-imotec.jpg"],
  },
};

export default function Contatos() {
  return (
    <>
      <Banner
        image="/img/banner-contato.jpg"
        title="Fale connosco"
        description="Estamos disponíveis para ouvir a sua ideia."
      />
      <InfoContatos />
      <FormularioContato />
      <Mapa />
      <RedesSociais />
    </>
  );
}

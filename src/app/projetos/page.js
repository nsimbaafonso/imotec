
import Banner from "@/components/ui/Banner";
import ProjetosEmDestaque from "@/components/projetos/ProjetosEmDestaque";
import FaqProjetos from "@/components/projetos/FaqProjetos";

export const metadata = {
  title: "Projectos de Construção e Arquitectura | Imotec",

  description:
    "Explore os projectos da Imotec Engenharia & Negócios em Angola e conheça as soluções desenvolvidas nas áreas da construção civil, arquitectura e habitação.",

  keywords: [
    "Imotec",
    "Imotec Engenharia e Negócios",
    "projectos da Imotec",
    "projectos de construção em Angola",
    "projectos de construção civil",
    "projectos de arquitectura em Angola",
    "obras de construção em Angola",
    "soluções habitacionais em Angola",
    "construção civil em Angola",
    "projectos imobiliários em Angola",
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
    title: "Projectos de Construção e Arquitectura | Imotec",
    description:
      "Conheça os projectos da Imotec Engenharia & Negócios e descubra as soluções desenvolvidas nas áreas da construção civil, arquitectura e habitação em Angola.",
    type: "website",
    locale: "pt_AO",
    siteName: "Imotec Engenharia & Negócios",
    images: [
      {
        url: "/img/seo-imotec.jpg",
        width: 1920,
        height: 1280,
        alt: "Projectos de construção civil e arquitectura da Imotec",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Projectos de Construção e Arquitectura | Imotec",
    description:
      "Explore os projectos de construção civil, arquitectura e habitação da Imotec em Angola.",
    images: ["/img/seo-imotec.jpg"],
  },
};

export default function Projetos() {
  return (
    <>
      <Banner
        image="/img/banner-projetos.jpg"
        title="Os nossos projectos"
        description="Conheça os projectos da Imotec e as soluções desenvolvidas nas áreas da construção, arquitectura e habitação."
      />
      <ProjetosEmDestaque />
      <FaqProjetos />
    </>
  );
}

import Banner from "@/components/ui/Banner";
import ProjetosEmDestaque from "@/components/projetos/ProjetosEmDestaque";
import FaqProjetos from "@/components/projetos/FaqProjetos";

// SEO DA PÁGINA PROJETOS
export const metadata = {
  title: "Projetos | Imotec",
  description: "Site da empresa de construção civil",
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

import Hero from "@/components/home/Hero";
import Indicadores from "@/components/home/Indicadores";
import SobreEmpresa from "@/components/home/SobreEmpresa";
import ServicosPrincipais from "@/components/home/ServicosPrincipais";
import ObrasEmDestaque from "@/components/home/ObrasEmDestaque";
import Diferenciais from "@/components/home/Diferenciais";
import Parceiros from "@/components/home/Parceiros";
import CtaHome from "@/components/sections/Cta";

// SEO GLOBAL DO SITE
export const metadata = {
  title: "Imotec",
  description: "Site da empresa de construção civil",
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

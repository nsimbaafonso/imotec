import Hero from "@/components/home/Hero";
import SobreEmpresa from "@/components/home/SobreEmpresa";
import ServicosPrincipais from "@/components/home/ServicosPrincipais";
import ObrasEmDestaque from "@/components/home/ObrasEmDestaque";
import Diferenciais from "@/components/home/Diferenciais";
import Parceiros from "@/components/home/Parceiros";
import CtaHome from "@/components/home/Cta";

// SEO GLOBAL DO SITE
export const metadata = {
  title: "Imotec",
  description: "Site da empresa de construção civil",
};

export default function Home() {
  return (
    <>
     <Hero />
     <SobreEmpresa />
     <ServicosPrincipais />
     <ObrasEmDestaque />
     <Diferenciais />
     <Parceiros />
     <CtaHome />
    </>
  );
}

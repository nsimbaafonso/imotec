import Banner from "@/components/ui/Banner";
import IndicadoresServicos from "@/components/servicos/IndicadoresServicos";
import ServicosDestaque from "@/components/servicos/ServicosDestaque";
import ComoTrabalhamos from "@/components/servicos/ComoTrabalhamos";

// SEO DA PÁGINA SERVIÇOS
export const metadata = {
  title: "Serviços | Imotec",
  description: "Site da empresa de construção civil",
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

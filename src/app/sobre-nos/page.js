import Banner from "@/components/ui/Banner";
import Historia from "@/components/sobre/Historia";
import MissaoVisaoValores from "@/components/sobre/MissaoVisaoValores";
import Equipa from "@/components/sobre/Equipa";
import CtaSobre from "@/components/sections/Cta";

// SEO DA PÁGINA SOBRE
export const metadata = {
  title: "Sobre nós | Imotec",
  description: "Site da empresa de construção civil",
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
     <CtaSobre
        title={
          <>
            Vamos construir um{" "}
            <span className="text-green-300">futuro melhor</span>?
          </>
        }
        description="Conheça melhor a Imotec e descubra como podemos colaborar no seu próximo projecto."
        buttonText="Fale connosco"
        href="/contatos"
      />
    </>
  );
}

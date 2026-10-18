import Banner from "@/components/ui/Banner";
import InfoContatos from "@/components/contatos/InfoContatos";
import FormularioContato from "@/components/contatos/FormularioContato";
import Mapa from "@/components/contatos/Mapa";
import RedesSociais from "@/components/contatos/RedesSociais";

// SEO DA PÁGINA CONTATOS
export const metadata = {
  title: "Contatos | Imotec",
  description: "Site da empresa de construção civil",
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

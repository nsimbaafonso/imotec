import Banner from "@/components/ui/Banner";
//import Hero from "@/components/home/Hero";

// SEO DA PÁGINA PROJETOS
export const metadata = {
  title: "Projetos | Imotec",
  description: "Site da empresa de construção civil",
};

export default function Projetos() {
  return (
    <>
     <Banner
        image="/img/banner-sobre-nos.jpg"
        title="Sobre nós"
        description="Conheça a Imotec, a nossa visão e o compromisso com soluções habitacionais adaptadas à realidade angolana."
      />
    </>
  );
}

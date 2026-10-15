import Banner from "@/components/ui/Banner";
//import Hero from "@/components/home/Hero";

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
    </>
  );
}

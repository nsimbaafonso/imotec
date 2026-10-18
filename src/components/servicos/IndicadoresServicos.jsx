"use client";

const indicadores = [
  {
    id: 1,
    icon: "fas fa-hard-hat",
    title: "Construção",
    description: "Execução de soluções para projectos de construção civil",
  },
  {
    id: 2,
    icon: "fas fa-drafting-compass",
    title: "Arquitectura",
    description: "Concepção e planeamento de espaços e projectos",
  },
  {
    id: 3,
    icon: "fas fa-house",
    title: "Soluções imobiliárias",
    description: "Alternativas orientadas para as necessidades habitacionais",
  },
  {
    id: 4,
    icon: "fas fa-handshake",
    title: "Consultoria",
    description: "Apoio e orientação de acordo com as necessidades do cliente",
  },
];

export default function IndicadoresServicos() {
  return (
    <section
      aria-label="Áreas de serviços da Imotec"
      className="bg-white px-6 py-12 sm:py-16"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {indicadores.map((indicador) => (
          <article key={indicador.id} className="flex items-start gap-4">
            <div className="flex size-12 shrink-0 items-center justify-center bg-green-100 text-green-600">
              <i className={`${indicador.icon} text-xl`} aria-hidden="true" />
            </div>

            <div>
              <h2 className="text-lg font-semibold text-black">
                {indicador.title}
              </h2>

              <p className="mt-1 text-sm leading-relaxed text-gray-600">
                {indicador.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

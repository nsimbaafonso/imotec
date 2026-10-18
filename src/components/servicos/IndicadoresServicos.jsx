
"use client";

const indicadores = [
  {
    id: 1,
    icon: "fas fa-drafting-compass",
    title: "Projectos personalizados",
    description: "Soluções adaptadas às necessidades e aos objectivos de cada cliente",
  },
  {
    id: 2,
    icon: "fas fa-house",
    title: "Construção residencial",
    description: "Construção de espaços habitacionais pensados para viver",
  },
  {
    id: 3,
    icon: "fas fa-hammer",
    title: "Reformas e ampliações",
    description: "Renovação e adaptação de espaços existentes",
  },
  {
    id: 4,
    icon: "fas fa-helmet-safety",
    title: "Gestão de obras",
    description: "Acompanhamento e coordenação das diferentes fases da obra",
  },
  {
    id: 5,
    icon: "fas fa-clipboard-check",
    title: "Consultoria e planeamento",
    description: "Orientação e planeamento para apoiar decisões em cada projecto",
  },
];

export default function IndicadoresServicos() {
  return (
    <section
      aria-label="Serviços da Imotec"
      className="bg-white px-6 py-12 sm:py-16"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-6">
        {indicadores.map((indicador) => (
          <article key={indicador.id} className="flex items-start gap-4">
            <div className="flex size-12 shrink-0 items-center justify-center bg-green-100 text-green-600">
              <i
                className={`${indicador.icon} text-xl`}
                aria-hidden="true"
              />
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

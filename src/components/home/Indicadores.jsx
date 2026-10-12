"use client";

const indicadores = [
  {
    id: 1,
    icon: "fas fa-building",
    title: "Construção civil",
    description: "Soluções para diferentes projetos de construção",
  },
  {
    id: 2,
    icon: "fas fa-house",
    title: "Habitação",
    description: "Soluções orientadas para as necessidades habitacionais",
  },
  {
    id: 3,
    icon: "fas fa-map-marker-alt",
    title: "Mercado angolano",
    description: "Atuação orientada para a realidade de Angola",
  },
  {
    id: 4,
    icon: "fas fa-handshake",
    title: "Compromisso",
    description: "Atenção às necessidades de cada cliente",
  },
];

export default function Indicadores() {
  return (
    <section
      aria-label="Indicadores de confiança da Imotec"
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

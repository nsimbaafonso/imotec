"use client";

import ButtonLink from "@/components/ui/ButtonLink";

const etapas = [
  {
    numero: "01",
    icon: "fa-comments",
    titulo: "Análise das necessidades",
    descricao:
      "Compreendemos os objectivos do cliente, as características do espaço e as necessidades específicas de cada projecto.",
  },
  {
    numero: "02",
    icon: "fa-compass-drafting",
    titulo: "Planeamento e preparação",
    descricao:
      "Organizamos as etapas do projecto e definimos as soluções mais adequadas aos objectivos e às características da intervenção.",
  },
  {
    numero: "03",
    icon: "fa-helmet-safety",
    titulo: "Execução e acompanhamento",
    descricao:
      "Acompanhamos o desenvolvimento dos trabalhos, promovendo a coordenação das actividades e o cumprimento do planeamento definido.",
  },
  {
    numero: "04",
    icon: "fa-clipboard-check",
    titulo: "Verificação e conclusão",
    descricao:
      "Acompanhamos a conclusão da intervenção e verificamos os trabalhos realizados, tendo em conta os requisitos definidos para o projecto.",
  },
];

export default function ComoTrabalhamos() {
  return (
    <section className="bg-white px-6 py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Cabeçalho */}

        {/* Cabeçalho */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-black sm:text-4xl lg:text-5xl">
            Do planeamento à{" "}
            <span className="text-green-700">concretização</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
            Cada projecto exige organização, acompanhamento e atenção aos
            detalhes. Conheça as principais etapas da nossa abordagem para
            transformar necessidades em soluções concretas.
          </p>
        </div>

        {/* Etapas em sequência vertical */}
        <div className="mt-12 border-t border-gray-200 lg:mt-16">
          {etapas.map((etapa) => (
            <article
              key={etapa.numero}
              className="group grid gap-5 border-b border-gray-200 py-7 transition-colors duration-300 sm:grid-cols-[72px_1fr] sm:gap-8 sm:py-9 lg:grid-cols-[100px_1fr]"
            >
              {/* Número */}
              <div className="flex items-start">
                <span className="text-3xl font-semibold tracking-tight text-green-700 sm:text-4xl">
                  {etapa.numero}
                </span>
              </div>

              {/* Conteúdo */}
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
                <div className="max-w-2xl">
                  <h3 className="text-xl font-semibold text-black transition-colors duration-300 group-hover:text-green-800 sm:text-2xl">
                    {etapa.titulo}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
                    {etapa.descricao}
                  </p>
                </div>

                <div className="flex size-12 shrink-0 items-center justify-center bg-gray-100 text-green-700 transition-colors duration-300 group-hover:bg-green-700 group-hover:text-white">
                  <i
                    className={`fas ${etapa.icon} text-lg`}
                    aria-hidden="true"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Solicitação de serviço */}
        <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between lg:mt-12">
          <p className="max-w-xl text-base leading-relaxed text-gray-600">
            Tem um projecto em mente? Conheça as soluções da Imotec e dê o
            primeiro passo para a sua concretização.
          </p>

          <ButtonLink href="/contatos" fullWidth>
            Solicitar um serviço
            <i className="fas fa-arrow-right ml-2" aria-hidden="true" />
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

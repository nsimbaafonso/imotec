"use client";

import { useState } from "react";

const servicos = [
  {
    id: "projectos",
    title: "Projectos personalizados",
    description:
      "Cada projecto parte de uma necessidade específica. Desenvolvemos soluções ajustadas aos objectivos do cliente, às características do espaço e às exigências de cada intervenção.",
    image: "/img/servicos/projectos-personalizados.jpg",
  },
  {
    id: "construcao",
    title: "Construção residencial",
    description:
      "Soluções de construção habitacional que consideram a organização dos espaços, a funcionalidade e as necessidades de quem vai viver em cada imóvel.",
    image: "/img/servicos/construcao-residencial.jpg",
  },
  {
    id: "reformas",
    title: "Reformas e ampliações",
    description:
      "Renovação e transformação de espaços existentes, com intervenções orientadas para melhorar a utilização, adaptar ambientes e ampliar áreas habitacionais.",
    image: "/img/servicos/reformas-ampliacoes.jpg",
  },
  {
    id: "gestao",
    title: "Gestão de obras",
    description:
      "Organização e acompanhamento das diferentes fases da obra, promovendo a coordenação dos trabalhos e a monitorização do progresso do projecto.",
    image: "/img/servicos/gestao-obras.jpg",
  },
  {
    id: "consultoria",
    title: "Consultoria e planeamento",
    description:
      "Análise das necessidades e organização das etapas do projecto para ajudar a definir prioridades e orientar as decisões antes e durante a sua execução.",
    image: "/img/servicos/consultoria-planeamento.jpg",
  },
];

export default function ServicosDestaque() {
  const [activo, setActivo] = useState(0);
  const servicoPrincipal = servicos[activo];

  return (
    <section
      id="servicos-detalhados"
      className="overflow-hidden bg-gray-100 px-6 py-16 sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Cabeçalho */}
        <div className="grid gap-6 border-b border-gray-200 pb-10 lg:grid-cols-2 lg:items-end lg:pb-12">
          <h2 className="max-w-xl text-4xl font-bold leading-tight tracking-tight text-black sm:text-5xl lg:text-6xl">
            Construímos soluções
            <span className="text-green-700"> com propósito</span>
          </h2>

          <p className="max-w-xl text-base leading-relaxed text-gray-600 lg:justify-self-end lg:pb-2 lg:text-lg">
            Cada projecto exige uma abordagem própria. Conheça as áreas de
            actuação da Imotec e explore as soluções que disponibilizamos para
            diferentes necessidades de construção e habitação.
          </p>
        </div>

        {/* Serviços */}
        <div className="mt-10 grid gap-10 lg:mt-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* Serviço em destaque */}
          <div className="min-w-0">
            <div className="group relative min-h-105 overflow-hidden bg-gray-200 sm:min-h-130 lg:sticky lg:top-24">
              <img
                key={servicoPrincipal.image}
                src={servicoPrincipal.image}
                alt={servicoPrincipal.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/20 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 lg:p-10">
                <h3 className="max-w-lg text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                  {servicoPrincipal.title}
                </h3>

                <p className="mt-4 max-w-lg text-sm leading-relaxed text-gray-100 sm:text-base">
                  {servicoPrincipal.description}
                </p>
              </div>
            </div>
          </div>

          {/* Lista interactiva */}
          <div className="flex min-w-0 flex-col">
            <div className="border-t border-gray-200">
              {servicos.map((servico, index) => {
                const seleccionado = activo === index;

                return (
                  <button
                    key={servico.id}
                    type="button"
                    onClick={() => setActivo(index)}
                    aria-pressed={seleccionado}
                    className={`group flex w-full cursor-pointer items-start gap-4 border-b border-gray-200 py-6 text-left transition-colors duration-300 sm:gap-6 sm:py-7 ${
                      seleccionado ? "bg-gray-100 px-4 sm:px-5" : "px-0"
                    }`}
                  >
                    <span className="min-w-0 flex-1">
                      <span
                        className={`block text-lg font-semibold leading-snug transition-colors duration-300 sm:text-xl ${
                          seleccionado
                            ? "text-green-800"
                            : "text-black group-hover:text-green-700"
                        }`}
                      >
                        {servico.title}
                      </span>

                      <span
                        className={`grid transition-[grid-template-rows,opacity,margin] duration-300 ${
                          seleccionado
                            ? "mt-3 grid-rows-[1fr] opacity-100"
                            : "mt-0 grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <span className="overflow-hidden text-sm leading-relaxed text-gray-600">
                          {servico.description}
                        </span>
                      </span>
                    </span>

                    <span
                      className={`flex size-9 shrink-0 items-center justify-center transition-colors duration-300 ${
                        seleccionado
                          ? "bg-green-700 text-white"
                          : "text-gray-400 group-hover:text-green-700"
                      }`}
                      aria-hidden="true"
                    >
                      <i
                        className={`fas ${
                          seleccionado ? "fa-minus" : "fa-arrow-right"
                        } text-sm`}
                      />
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

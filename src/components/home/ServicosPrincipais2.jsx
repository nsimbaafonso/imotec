"use client";

import ButtonLink from "@/components/ui/ButtonLink";

const servicos = [
  {
    id: 1,
    icon: "fas fa-drafting-compass",
    title: "Projectos personalizados",
    description:
      "Soluções concebidas de acordo com as necessidades e os objectivos de cada cliente.",
  },
  {
    id: 2,
    icon: "fas fa-house",
    title: "Construção residencial",
    description:
      "Construção de espaços habitacionais orientados para as necessidades de cada projecto.",
  },
  {
    id: 3,
    icon: "fas fa-hammer",
    title: "Reformas e ampliações",
    description:
      "Intervenções para renovar, melhorar e ampliar espaços existentes.",
  },
  {
    id: 4,
    icon: "fas fa-helmet-safety",
    title: "Gestão de obras",
    description:
      "Acompanhamento e coordenação das diferentes etapas de execução da obra.",
  },
  {
    id: 5,
    icon: "fas fa-clipboard-list",
    title: "Consultoria e planeamento",
    description:
      "Apoio na análise, organização e preparação de projectos de construção.",
  },
];

export default function ServicosPrincipais() {
  return (
    <section className="bg-white px-6 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Cabeçalho */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-black sm:text-4xl lg:text-5xl">
            Conheça os nossos serviços
          </h2>

          <p className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg">
            Discutimos ideias para realizar sonhos.
          </p>
        </div>

        {/* Cartões de serviços */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {servicos.map((servico) => (
            <article
              key={servico.id}
              className="group rounded-md border border-gray-200 bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-green-600 hover:shadow-lg sm:p-8"
            >
              <div className="mx-auto flex size-14 items-center justify-center rounded-md bg-green-100 text-green-600 transition-colors duration-300 group-hover:bg-green-600 group-hover:text-white">
                <i className={`${servico.icon} text-2xl`} aria-hidden="true" />
              </div>

              <h3 className="mt-6 text-xl font-semibold text-black">
                {servico.title}
              </h3>

              <p className="mt-3 text-base leading-relaxed text-gray-600">
                {servico.description}
              </p>
            </article>
          ))}
        </div>

        {/* Chamada para acção */}
        <div className="mt-10 text-center sm:mt-12">
          <ButtonLink href="/servicos">
            Ver todos os serviços
            <i className="fas fa-arrow-right ml-3" aria-hidden="true" />
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

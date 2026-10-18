"use client";

export default function Equipa() {
  const membros = [
    {
      id: 1,
      image: "/img/equipa/planeamento-controle.png",
      name: "Lukeny Soares",
      role: "Directora de Planeamento & Controlo",
      redes: [
        { name: "LinkedIn", icon: "fab fa-linkedin-in", href: "#" },
        { name: "Instagram", icon: "fab fa-instagram", href: "#" },
      ],
    },
    {
      id: 2,
      image: "/img/equipa/gestor-marketing.png",
      name: "Ernesto Mutunda",
      role: "Director Criativo & Gestor de Marketing",
      redes: [
        { name: "LinkedIn", icon: "fab fa-linkedin-in", href: "#" },
        { name: "Facebook", icon: "fab fa-facebook-f", href: "#" },
        { name: "Instagram", icon: "fab fa-instagram", href: "#" },
      ],
    },
    {
      id: 3,
      image: "/img/equipa/teacher1.png",
      name: "Membro de teste 1",
      role: "Gestão de projectos",
      redes: [{ name: "Facebook", icon: "fab fa-facebook-f", href: "#" }],
    },
    {
      id: 4,
      image: "/img/equipa/teacher2.png",
      name: "Membro de teste 2",
      role: "Engenharia e construção",
      redes: [{ name: "LinkedIn", icon: "fab fa-linkedin-in", href: "#" }],
    },
    {
      id: 5,
      image: "/img/equipa/teacher3.png",
      name: "Membro de teste 3",
      role: "Arquitectura e design",
      redes: [
        { name: "Instagram", icon: "fab fa-instagram", href: "#" },
        { name: "Facebook", icon: "fab fa-facebook-f", href: "#" },
      ],
    },
  ];

  return (
    <section className="bg-white px-6 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Cabeçalho */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-black sm:text-4xl lg:text-5xl">
            Uma equipa focada em entregar{" "}
            <span className="text-green-600">melhores resultados</span>
          </h2>
        </div>

        {/* Membros da equipa */}
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
          {membros.map((membro) => (
            <article key={membro.id} className="group text-center">
              {/* Fotografia */}
              <div className="h-80 overflow-hidden bg-gray-100 sm:h-96">
                <img
                  src={membro.image}
                  alt={`Fotografia de ${membro.name}`}
                  className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Informação */}
              <div className="mt-6">
                <h3 className="text-xl font-bold text-black sm:text-2xl">
                  {membro.name}
                </h3>

                <p className="mt-2 text-base leading-relaxed text-green-700">
                  {membro.role}
                </p>

                {/* Redes sociais individuais */}
                {membro.redes.length > 0 && (
                  <div className="mt-5 flex items-center justify-center gap-3">
                    {membro.redes.map((rede) => (
                      <a
                        key={rede.name}
                        href={rede.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${rede.name} de ${membro.name}`}
                        className="flex size-10 items-center justify-center bg-gray-100 text-gray-700 transition-colors duration-300 hover:bg-green-600 hover:text-white"
                      >
                        <i className={rede.icon} aria-hidden="true" />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

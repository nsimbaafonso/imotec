"use client";

export default function MissaoVisaoValores() {
  const itens = [
    {
      id: 1,
      icon: "fa-bullseye",
      title: "A nossa missão",
      description:
        "Desenvolver soluções nos sectores da construção, arquitectura e habitação, promovendo projectos de qualidade, adequados às necessidades dos clientes e contribuindo para o desenvolvimento do mercado imobiliário angolano.",
    },
    {
      id: 2,
      icon: "fa-eye",
      title: "A nossa visão",
      description:
        "Contribuir para um mercado imobiliário mais acessível, organizado, credível e orientado para as necessidades reais da sociedade angolana.",
    },
    {
      id: 3,
      icon: "fa-handshake",
      title: "Os nossos valores",
      description:
        "Transparência, credibilidade, responsabilidade e compromisso com as necessidades dos clientes.",
    },
  ];

  return (
    <section className="bg-gray-100 px-6 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Cabeçalho */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-black sm:text-4xl lg:text-5xl">
            Missão, visão e <span className="text-green-600">valores</span>
          </h2>

          <p className="mt-5 text-base leading-relaxed text-gray-600 sm:text-lg">
            Os princípios que orientam a nossa actuação e o nosso compromisso
            com o mercado imobiliário angolano.
          </p>
        </div>

        {/* Cartões */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {itens.map((item) => (
            <article
              key={item.id}
              className="group bg-white p-8 text-center transition-colors duration-300 hover:bg-green-800 sm:p-10"
            >
              <div className="mx-auto flex size-14 items-center justify-center bg-green-100 text-green-700 transition-colors duration-300 group-hover:bg-white group-hover:text-green-800">
                <i className={`fas ${item.icon} text-2xl`} aria-hidden="true" />
              </div>

              <h3 className="mt-6 text-xl font-bold text-black transition-colors duration-300 group-hover:text-white sm:text-2xl">
                {item.title}
              </h3>

              <p className="mt-4 text-base leading-relaxed text-gray-600 transition-colors duration-300 group-hover:text-gray-100">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

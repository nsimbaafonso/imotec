"use client";

export default function Historia() {
  return (
    <section className="bg-white px-6 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        {/* Texto institucional */}
        <div>
          <span className="text-sm font-semibold uppercase tracking-widest text-green-600">
            A nossa história
          </span>

          <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-black sm:text-4xl lg:text-5xl">
            Construir oportunidades para um{" "}
            <span className="text-green-600">futuro melhor</span>
          </h2>

          <p className="mt-6 text-base leading-relaxed text-gray-700 sm:text-lg">
            A Imotec Engenharia &amp; Negócios, Lda. está sediada no Município
            de Belas, Distrito Urbano do Kilamba, Angola, e apresenta projectos
            ligados à construção, à arquitectura e à habitação, trabalhando em
            parceria com parceiros estratégicos.
          </p>

          {/* Dados institucionais */}
          <div className="mt-8 grid gap-6 border-t border-gray-200 pt-6 sm:grid-cols-2">
            <div>
              <p className="text-sm font-medium text-gray-500">
                Número de Identificação Fiscal
              </p>
              <p className="mt-1 text-lg font-semibold text-black">
                5002167042
              </p>
            </div>

            <div>
              <p className="text-sm font-medium text-gray-500">
                Número de matrícula
              </p>
              <p className="mt-1 text-lg font-semibold text-black">
                n.º 1447/2024
              </p>
            </div>
          </div>
        </div>

        {/* Imagem */}
        <div className="relative h-80 overflow-hidden sm:h-105 lg:h-125">
          <img
            src="/img/sobre-historia2.jpg"
            alt="Projecto de construção da Imotec"
            className="h-full w-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

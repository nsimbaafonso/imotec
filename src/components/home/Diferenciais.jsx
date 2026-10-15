"use client";

export default function Diferenciais() {
  return (
    <section className="bg-gray-100 px-6 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2 lg:items-center lg:gap-16">
        {/* Título */}
        <div>
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-black sm:text-4xl lg:text-5xl">
            Transparência e credibilidade no mercado{" "}
            <span className="text-green-600">imobiliário angolano</span>
          </h2>
        </div>

        {/* Descrição */}
        <div>
          <p className="text-base leading-relaxed text-gray-700 sm:text-lg">
            A Imotec procura contribuir para um mercado imobiliário mais
            acessível, organizado, transparente e credível, através de soluções
            habitacionais adaptadas às necessidades da sociedade angolana.
          </p>
        </div>
      </div>
    </section>
  );
}

"use client";

import ButtonLink from "@/components/ui/ButtonLink";

export default function Cta({
  title = (
    <>
      Tem um <span className="text-green-300">projecto</span> em mente?
    </>
  ),
  description = "Discutimos ideias para realizar sonhos. Entre em contacto connosco para apresentar a sua ideia e conhecer os nossos serviços.",
  buttonText = "Solicitar orçamento",
  href = "/contatos",
}) {
  return (
    <section className="bg-green-800 px-6 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 text-center">
        {/* Conteúdo */}
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            {title}
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-gray-100 sm:text-lg">
            {description}
          </p>
        </div>

        {/* Botão */}
        <ButtonLink href={href} variant="primary">
          {buttonText}
          <i className="fas fa-arrow-right ml-3" aria-hidden="true" />
        </ButtonLink>
      </div>
    </section>
  );
}

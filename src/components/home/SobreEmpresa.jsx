"use client";

import ButtonLink from "@/components/ui/ButtonLink";
import Image from "next/image";

export default function SobreEmpresa() {
  return (
    <section className="bg-gray-100 px-6 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Imagem da empresa */}
        <div className="relative aspect-4/3 overflow-hidden rounded-md bg-gray-200">
          <Image
            src="/img/sobre-empresa.jpg"
            alt="Imotec Engenharia & Negócios"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 ease-in-out hover:scale-105"
          />
        </div>

        {/* Conteúdo */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-green-600">
            Sobre a empresa
          </p>

          <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-black sm:text-4xl lg:text-5xl">
            Engenharia, planeamento e construção
          </h2>

          <p className="mt-6 text-base leading-relaxed text-gray-600 sm:text-lg">
            A Imotec Engenharia &amp; Negócios, Lda., sediada no Município de
            Belas, Distrito Urbano do Kilamba, desenvolve a sua actividade no
            sector da construção e da habitação, em parceria com parceiros
            estratégicos.
          </p>

          <div className="mt-8">
            <ButtonLink href="/sobre-nos">
              Conheça a Imotec
              <i className="fas fa-arrow-right ml-3" aria-hidden="true" />
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}

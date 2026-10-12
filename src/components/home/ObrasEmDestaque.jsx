"use client";

import ButtonLink from "@/components/ui/ButtonLink";

export default function ObrasEmDestaque() {
  return (
    <section className="relative isolate flex min-h-125 items-center justify-center overflow-hidden bg-black px-6 py-20 sm:min-h-150 lg:min-h-175">
      {/* Vídeo de fundo */}
      <video
        className="absolute inset-0 -z-20 size-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      >
        <source src="/videos/projectos-imotec.mp4" type="video/mp4" />
      </video>

      {/* Sobreposição escura */}
      <div className="absolute inset-0 -z-10 bg-black/60" />

      {/* Conteúdo */}
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
          Os nossos projectos em destaque
        </h2>

        <div className="mt-8">
          <ButtonLink href="/projetos">
            Ver todos os projectos
            <i className="fas fa-arrow-right ml-3" aria-hidden="true" />
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

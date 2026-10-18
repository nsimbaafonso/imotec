"use client";

import ButtonLink from "@/components/ui/ButtonLink";
import { LightGallery, LightGalleryItem } from "@lightgallery/react";
import Thumbnail from "@lightgallery/react/plugins/thumbnail";
import Zoom from "@lightgallery/react/plugins/zoom";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-zoom.css";

const projetos = [
  {
    titulo: "Construção de Escola Rural",
    categoria: "Construção",
    descricao:
      "A construção de espaços escolares adequados contribui para melhorar as condições de aprendizagem e apoiar o desenvolvimento das comunidades. Este tipo de projecto valoriza a criação de ambientes seguros e funcionais para alunos e professores.",
    imagem: "/img/home1.jpg",
  },
  {
    titulo: "Design de interiores",
    categoria: "Design e arquitectura",
    descricao:
      "Soluções de design de interiores que combinam estética, funcionalidade e conforto, valorizando cada ambiente e procurando responder às necessidades dos seus utilizadores através de uma utilização harmoniosa e eficiente do espaço.",
    imagem: "/img/home2.jpg",
  },
  {
    titulo: "PLANO.IMOTHEP",
    categoria: "Arquitectura e habitação",
    descricao:
      "O PLANO.IMOTHEP é um projecto arquitectónico e habitacional da Imotec Engenharia & Negócios, Lda., concebido para criar oportunidades para jovens que desejam conquistar a sua casa própria. Através de um modelo organizado, flexível e ajustado à realidade económica dos beneficiários, procura contribuir para um mercado imobiliário mais acessível e para um futuro melhor para as famílias angolanas.",
    imagem: "/img/home3.jpg",
  },
];

export default function ProjetosEmDestaque() {
  return (
    <section className="bg-gray-100 px-6 py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Cabeçalho centralizado */}
        <div className="mx-auto max-w-3xl mb-20 text-center">
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-black sm:text-4xl lg:text-5xl">
            Alguns dos nossos <span className="text-green-700">projectos</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
            Conheça alguns dos projectos associados à Imotec nas áreas da
            construção, arquitectura e habitação.
          </p>
        </div>

        {/* Lista de projectos com LightGallery */}
        <LightGallery
          plugins={[Zoom, Thumbnail]}
          speed={500}
          elementClassNames="group mb-10 grid overflow-hidden bg-white md:grid-cols-2"
        >
          {projetos.map((projeto, index) => {
            const imagemPrimeiro = index % 2 === 0;

            const itemGaleria = {
              src: projeto.imagem,
              thumb: projeto.imagem,
              alt: projeto.titulo,
              caption: projeto.titulo,
            };

            return (
              <article
                key={projeto.titulo}
                className="group mb-10 grid overflow-hidden bg-white lg:mb-20 md:grid-cols-2"
              >
                {/* Imagem */}
                <div
                  className={`relative min-h-64 overflow-hidden bg-gray-200 sm:min-h-80 lg:min-h-105 ${
                    imagemPrimeiro ? "md:order-1" : "md:order-2"
                  }`}
                >
                  <LightGalleryItem item={itemGaleria}>
                    <div className="absolute inset-0 cursor-pointer overflow-hidden">
                      <img
                        src={projeto.imagem}
                        alt={projeto.titulo}
                        loading="lazy"
                        className="h-full w-full cursor-pointer object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </LightGalleryItem>

                  <div className="pointer-events-none absolute left-5 top-5 bg-green-700 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white sm:left-7 sm:top-7">
                    {projeto.categoria}
                  </div>
                </div>

                {/* Conteúdo */}
                <div
                  className={`flex flex-col justify-center p-6 sm:p-9 lg:p-12 xl:p-16 ${
                    imagemPrimeiro ? "md:order-2" : "md:order-1"
                  }`}
                >
                  <h3 className="text-2xl font-bold leading-tight text-black transition-colors duration-300 group-hover:text-green-800 sm:text-3xl lg:text-4xl">
                    {projeto.titulo}
                  </h3>

                  <div className="my-6 h-1 w-14 bg-green-600" />

                  <p className="max-w-lg text-sm leading-relaxed text-gray-600 sm:text-base sm:leading-7">
                    {projeto.descricao}
                  </p>
                </div>
              </article>
            );
          })}
        </LightGallery>

        {/* Solicitação de orçamento */}
        <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between lg:mt-12">
          <p className="max-w-xl text-base leading-relaxed text-gray-600">
            Tem um projecto em mente? Solicite um orçamento e descubra como a
            Imotec pode ajudar a concretizá-lo.
          </p>

          <ButtonLink href="/contatos" fullWidth>
            Solicitar orçamento
            <i className="fas fa-arrow-right ml-2" aria-hidden="true" />
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

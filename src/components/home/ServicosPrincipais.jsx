"use client";

import ButtonLink from "@/components/ui/ButtonLink";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCoverflow, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const servicos = [
  {
    id: 1,
    image: "/img/servicos/projectos.jpg",
    title: "Projectos personalizados",
    description:
      "Soluções concebidas de acordo com as necessidades e os objectivos de cada cliente.",
  },
  {
    id: 2,
    image: "/img/servicos/construcao-residencial.jpg",
    title: "Construção residencial",
    description:
      "Construção de espaços habitacionais orientados para as necessidades de cada projecto.",
  },
  {
    id: 3,
    image: "/img/servicos/reformas.jpg",
    title: "Reformas e ampliações",
    description:
      "Intervenções para renovar, melhorar e ampliar espaços existentes.",
  },
  {
    id: 4,
    image: "/img/servicos/gestao-obras.jpg",
    title: "Gestão de obras",
    description:
      "Acompanhamento e coordenação das diferentes etapas de execução da obra.",
  },
  {
    id: 5,
    image: "/img/servicos/consultoria.jpg",
    title: "Consultoria e planeamento",
    description:
      "Apoio na análise, organização e preparação de projectos de construção.",
  },
];

export default function ServicosPrincipais() {
  return (
    <section className="overflow-hidden bg-white px-6 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Cabeçalho da Secção */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-black sm:text-4xl lg:text-5xl">
            Conheça os nossos <span className="text-green-600">serviços</span>
          </h2>

          <p className="mt-4 text-base leading-relaxed text-black sm:text-lg">
            Discutimos ideias para realizar sonhos.
          </p>
        </div>

        {/* Contentor do Slider Centralizado */}
        <div className="mx-auto mt-12 w-full max-w-6xl sm:mt-16 flex justify-center">
          <Swiper
            modules={[Autoplay, Pagination, EffectCoverflow, A11y]}
            effect="coverflow"
            centeredSlides={true}
            grabCursor={true}
            loop={true}
            slidesPerView={1}
            spaceBetween={0}
            coverflowEffect={{
              rotate: 30,
              stretch: 0,
              depth: 120,
              modifier: 1,
              slideShadows: false,
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="servicos-swiper w-full overflow-visible pb-14"
          >
            {servicos.map((servico) => (
              <SwiperSlide
                key={servico.id}
                className="py-8 flex justify-center"
              >
                <article className="group relative mx-auto h-95 w-full max-w-85 overflow-hidden bg-gray-100 sm:h-105">
                  <img
                    src={servico.image}
                    alt={servico.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
                    <h3 className="text-xl font-semibold leading-snug sm:text-2xl text-white">
                      {servico.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-gray-100 sm:text-base">
                      {servico.description}
                    </p>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Botão Inferior */}
        <div className="mt-8 text-center sm:mt-10">
          <ButtonLink href="/servicos">
            Ver todos os serviços
            <i className="fas fa-arrow-right ml-3" aria-hidden="true" />
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

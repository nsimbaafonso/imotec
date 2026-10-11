"use client";

import ButtonLink from "@/components/ui/ButtonLink";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Pagination,
  Navigation,
  EffectFade,
  Keyboard,
  A11y,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const slides = [
  {
    id: 1,
    image: "/img/hero1.jpg",
    title: "Construir oportunidades para jovens",
    description:
      "Desenvolvemos soluções no sector da construção e da habitação, procurando criar oportunidades e responder às necessidades do mercado angolano.",
  },
  {
    id: 2,
    image: "/img/hero2.jpg",
    title: "Soluções para construir o futuro",
    description:
      "Conheça os nossos serviços de construção civil e descubra soluções orientadas para as necessidades de cada projeto.",
  },
  {
    id: 3,
    image: "/img/hero3.jpg",
    title: "Compromisso em cada obra",
    description:
      "Explore os nossos projetos e conheça a nossa abordagem à construção e à habitação em Angola.",
  },
];

export default function Hero() {
  return (
    <section
      className="relative bg-black text-white"
      aria-label="Apresentação da Imotec"
    >
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade, Keyboard, A11y]}
        effect="fade"
        loop
        grabCursor
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{ clickable: true }}
        keyboard={{ enabled: true, onlyInViewport: true }}
        a11y={{
          prevSlideMessage: "Slide anterior",
          nextSlideMessage: "Próximo slide",
          paginationBulletMessage: "Ir para o slide {{index}}",
        }}
        className="hero-swiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative flex min-h-150 items-center justify-center overflow-hidden sm:min-h-175 lg:min-h-200">
              {/* Imagem de fundo animada com CSS */}
              <div
                className="hero-bg absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
                aria-hidden="true"
              />

              {/* Sobreposição escura */}
              <div
                className="absolute inset-0 bg-black/60"
                aria-hidden="true"
              />

              {/* Conteúdo animado com CSS */}
              <div className="relative z-10 mx-auto w-full max-w-5xl px-6 py-20 text-center lg:px-8">
                <h1 className="hero-title mx-auto max-w-4xl text-3xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl">
                  {slide.title}
                </h1>

                <p className="hero-description mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-100 sm:mt-6 sm:text-lg lg:text-xl">
                  {slide.description}
                </p>

                <div className="hero-actions mt-8 flex flex-col justify-center gap-4 sm:mt-10 sm:flex-row sm:items-center">
                  <ButtonLink href="/servicos">
                    Conheça os nossos serviços
                    <i className="fas fa-arrow-right ml-3" aria-hidden="true" />
                  </ButtonLink>

                  <ButtonLink href="/contatos" variant="outline">
                    Fale connosco
                  </ButtonLink>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, A11y } from "swiper/modules";

import "swiper/css";

const parceiros = [
  { id: 1, image: "/img/bai.png", name: "BAI" },
  { id: 2, image: "/img/bfa.png", name: "BFA" },
  { id: 3, image: "/img/bai.png", name: "BAI" },
  { id: 4, image: "/img/bfa.png", name: "BFA" },
  { id: 5, image: "/img/bai.png", name: "BAI" },
  { id: 6, image: "/img/bfa.png", name: "BFA" },
  { id: 7, image: "/img/bai.png", name: "BAI" },
  { id: 8, image: "/img/bfa.png", name: "BFA" },
];

export default function Parceiros() {
  return (
    <section className="overflow-hidden bg-white px-6 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Cabeçalho */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-black sm:text-4xl lg:text-5xl">
            Os nossos <span className="text-green-600">parceiros</span>
          </h2>

          <p className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg">
            Entidades que contribuem para o desenvolvimento do mercado
            imobiliário angolano.
          </p>
        </div>

        {/* Carrossel de parceiros */}
        <div className="mx-auto mt-12 max-w-6xl sm:mt-16">
          <Swiper
            modules={[Autoplay, A11y]}
            loop
            grabCursor
            slidesPerView={2}
            spaceBetween={24}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 3,
                spaceBetween: 32,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
            }}
            className="w-full"
          >
            {parceiros.map((parceiro) => (
              <SwiperSlide key={parceiro.id}>
                <div className="flex h-28 items-center justify-center px-4 sm:h-32">
                  <img
                    src={parceiro.image}
                    alt={parceiro.name}
                    className="max-h-16 w-full max-w-40 object-contain sm:max-h-20"
                    loading="lazy"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

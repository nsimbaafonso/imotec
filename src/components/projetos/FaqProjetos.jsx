"use client";

import { useState } from "react";
import ButtonLink from "@/components/ui/ButtonLink";

const perguntas = [
  {
    pergunta: "Que tipos de projectos a Imotec realiza?",
    resposta:
      "A Imotec actua nas áreas da construção civil, arquitectura, design e habitação, desenvolvendo soluções de acordo com as necessidades de cada cliente.",
  },
  {
    pergunta: "A Imotec aceita projectos personalizados?",
    resposta:
      "Sim. Pode apresentar a sua ideia ou necessidade para que a equipa avalie o projecto e as soluções mais adequadas.",
  },
  {
    pergunta: "Como posso solicitar um orçamento?",
    resposta:
      "Aceda à página de contactos e envie os detalhes do seu projecto. A Imotec poderá analisar as informações fornecidas para avaliar o pedido.",
  },
  {
    pergunta: "Que informações devo fornecer para pedir um orçamento?",
    resposta:
      "Descreva o tipo de projecto, a localização, as dimensões aproximadas, os serviços pretendidos e, se possível, inclua fotografias, plantas ou referências.",
  },
  {
    pergunta: "A Imotec realiza projectos em diferentes províncias de Angola?",
    resposta:
      "A disponibilidade depende da localização, da natureza e das condições de execução de cada projecto. Contacte a Imotec para avaliar a sua solicitação.",
  },
  {
    pergunta: "Como posso acompanhar o desenvolvimento do meu projecto?",
    resposta:
      "As condições de acompanhamento e comunicação são definidas de acordo com o tipo de projecto e os termos acordados com o cliente.",
  },
];

export default function FaqProjetos() {
  const [aberta, setAberta] = useState(0);

  return (
    <section className="bg-white px-6 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        {/* Cabeçalho */}
        <div>
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-black sm:text-4xl lg:text-5xl">
            Perguntas frequentes sobre{" "}
            <span className="text-green-700">projectos</span>
          </h2>

          <p className="mt-5 max-w-lg text-base leading-relaxed text-gray-600 sm:text-lg">
            Encontre respostas às dúvidas mais comuns sobre os nossos projectos
            e saiba como apresentar a sua proposta à Imotec.
          </p>

          <div className="mt-8">
            <ButtonLink href="/contatos">
              Pedir orçamento
              <i className="fas fa-arrow-right ml-2" aria-hidden="true" />
            </ButtonLink>
          </div>
        </div>

        {/* Perguntas e respostas */}
        <div className="divide-y divide-gray-200 border-t border-gray-200">
          {perguntas.map((item, index) => {
            const isOpen = aberta === index;

            return (
              <div key={item.pergunta} className="py-5">
                <button
                  type="button"
                  onClick={() => setAberta(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-5 text-left"
                >
                  <span className="text-base cursor-pointer font-semibold leading-relaxed text-black transition-colors hover:text-green-700 sm:text-lg">
                    {item.pergunta}
                  </span>

                  <span
                    className={`flex size-9 cursor-pointer shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
                      isOpen
                        ? "bg-green-700 text-white"
                        : "bg-gray-100 text-green-700"
                    }`}
                  >
                    <i
                      className={`fas ${isOpen ? "fa-minus" : "fa-plus"} text-sm`}
                      aria-hidden="true"
                    />
                  </span>
                </button>

                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-2xl pt-4 pr-10 text-sm leading-7 text-gray-600 sm:text-base">
                      {item.resposta}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

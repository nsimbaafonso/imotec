"use client";

import ButtonLink from "@/components/ui/ButtonLink";

const redesSociais = [
  {
    nome: "Facebook",
    icone: "fab fa-facebook-f",
    url: "https://web.facebook.com/profile.php?id=61551819160493",
  },
  {
    nome: "Instagram",
    icone: "fab fa-instagram",
    url: "",
  },
  {
    nome: "LinkedIn",
    icone: "fab fa-linkedin-in",
    url: "",
  },
];

const mensagem = "Olá! Vim através do website da Imotec Engenharia & Negócios, Lda. e gostaria de obter mais informações sobre os vossos serviços.";
const whatsapp = `https://wa.me/244948039182?text=${encodeURIComponent(mensagem)}`;

export default function RedesSociais() {
  return (
    <section className="bg-white px-6 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
          Acompanhe a <span className="text-green-700">Imotec.</span>
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
          Acompanhe o nosso dia a dia, conheça os nossos projectos e fique a par
          das novidades.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          {redesSociais.map((rede) => (
            <a
              key={rede.nome}
              href={rede.url || undefined}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={rede.nome}
              aria-disabled={!rede.url}
              onClick={
                !rede.url ? (event) => event.preventDefault() : undefined
              }
              className={`flex size-12 items-center justify-center border border-gray-200 text-gray-700 transition-colors ${
                rede.url
                  ? "hover:border-green-600 hover:bg-green-600 hover:text-white"
                  : "cursor-not-allowed opacity-40"
              }`}
            >
              <i className={`${rede.icone} text-lg`} aria-hidden="true" />
            </a>
          ))}
        </div>

        <div className="mt-8">
          <ButtonLink
            href={whatsapp || "#"}
            target="_blank"
            rel="noopener noreferrer"
            aria-disabled={!whatsapp}
            onClick={!whatsapp ? (event) => event.preventDefault() : undefined}
            className={!whatsapp ? "cursor-not-allowed opacity-50" : ""}
          >
            <i className="fab fa-whatsapp mr-3 text-xl" aria-hidden="true" />
            Fale connosco pelo WhatsApp
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

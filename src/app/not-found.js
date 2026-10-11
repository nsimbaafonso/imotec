import ButtonLink from "@/components/ui/ButtonLink";

export const metadata = {
  title: "Página não encontrada | Imotec",
  description: "A página que procura não existe ou foi movida.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-green-800 px-6 pb-12 pt-28">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-7xl font-semibold tracking-tight text-white sm:text-8xl">
          404
        </p>

        <h1 className="mt-6 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          Parece que se perdeu pelo caminho
        </h1>

        <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-gray-100 sm:text-lg">
          A página que procura não existe, foi movida ou o endereço está
          incorreto.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <ButtonLink href="/">
            Voltar ao início
            <i className="fas fa-arrow-right ml-3" aria-hidden="true" />
          </ButtonLink>

          <ButtonLink
            href="/contatos"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-green-800"
          >
            Contactar a Imotec
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

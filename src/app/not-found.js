import Link from "next/link";

// SEO Simples para página 404
export const metadata = {
  title: "Página não encontrada | Nexatesh",
  description: "A página que você procura não existe ou foi movida.",
  robots: {
    index: false, // Diz ao Google: "Não mostre esta página nas buscas"
    follow: true, // Mas permite que ele siga os links (como o botão 'Voltar')
  },
};

export default function NotFound() {
  return (
    <section>
    </section>
  );
}
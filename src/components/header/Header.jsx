"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import ButtonLink from "@/components/ui/ButtonLink";

const navigation = [
  { label: "Início", href: "/" },
  { label: "Sobre nós", href: "/sobre-nos" },
  { label: "Serviços", href: "/servicos" },
  { label: "Projetos", href: "/projetos" },
  { label: "Contactos", href: "/contatos" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Verifica a posição ao carregar / recarregar a página
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white border-b border-gray-100 shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        <Link
          href="/"
          className={`text-2xl font-bold tracking-tight transition-colors ${
            isScrolled ? "text-black" : "text-white"
          }`}
          aria-label="Imotec, página inicial"
          onClick={() => setMenuOpen(false)}
        >
          IMO<span className="text-green-600">TEC</span>
          <span className="text-green-600">.</span>
        </Link>

        <nav
          id="main-navigation"
          className={`absolute inset-x-0 top-full grid overflow-hidden border-b border-gray-100 bg-white shadow-lg transition-[grid-template-rows,opacity,visibility] duration-300 ease-in-out lg:static lg:flex lg:flex-row lg:items-center lg:gap-8 lg:overflow-visible lg:border-0 lg:bg-transparent lg:p-0 lg:opacity-100 lg:shadow-none ${
            menuOpen
              ? "visible grid-rows-[1fr] opacity-100"
              : "invisible grid-rows-[0fr] opacity-0"
          } lg:visible lg:grid-rows-none`}
        >
          <div className="flex min-h-0 flex-col px-6 py-4 lg:flex-row lg:items-center lg:gap-8 lg:p-0">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                tabIndex={menuOpen ? 0 : undefined}
                className={`border-b border-gray-100 py-4 text-sm font-medium transition-colors last:border-0 lg:border-0 lg:py-0 ${
                  isScrolled
                    ? "text-gray-700 hover:text-green-600"
                    : "text-gray-800 lg:text-white/90 lg:hover:text-green-400"
                }`}
              >
                {item.label}
              </Link>
            ))}

            <ButtonLink
              href="/contatos"
              onClick={() => setMenuOpen(false)}
              fullWidth
              className="mt-4 lg:mt-0 lg:w-auto"
            >
              Solicitar orçamento
              <i className="fas fa-arrow-right ml-3" aria-hidden="true" />
            </ButtonLink>
          </div>
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className={`flex h-10 w-10 items-center justify-center text-xl transition-colors lg:hidden ${
            isScrolled
              ? "text-black hover:text-green-600"
              : "text-white hover:text-green-400"
          }`}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
        >
          <i
            className={`fas ${menuOpen ? "fa-times" : "fa-bars"}`}
            aria-hidden="true"
          />
        </button>
      </div>
    </header>
  );
}

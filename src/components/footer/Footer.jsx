import Link from "next/link";

const navigation = [
  { label: "Início", href: "/" },
  { label: "Sobre nós", href: "/sobre-nos" },
  { label: "Serviços", href: "/servicos" },
  { label: "Projetos", href: "/projetos" },
  { label: "Contactos", href: "/contatos" },
];

const services = [
  "Projectos personalizados",
  "Construção residencial",
  "Reformas e ampliações",
  "Gestão de obras",
  "Consultoria e planeamento",
];

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/",
    icon: "fab fa-facebook-f",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/",
    icon: "fab fa-instagram",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/",
    icon: "fab fa-linkedin-in",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/",
    icon: "fab fa-youtube",
  },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        {/* Colunas principais */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {/* Empresa */}
          <div>
            <Link
              href="/"
              className="inline-block text-2xl font-bold tracking-tight"
              aria-label="Imotec, página inicial"
            >
              IMO<span className="text-green-600">TEC</span>
              <span className="text-green-600">.</span>
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-7 text-gray-400">
              Construímos espaços com qualidade, rigor e compromisso,
              transformando projetos em realidade.
            </p>
          </div>

          {/* Navegação */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider">
              Links rápidos
            </h2>

            <div className="mt-5 flex flex-col items-start gap-3">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-gray-400 transition-colors hover:text-green-600"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Serviços */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider">
              Serviços
            </h2>

            <div className="mt-5 flex flex-col items-start gap-3">
              {services.map((service) => (
                <span key={service} className="text-sm text-gray-400">
                  {service}
                </span>
              ))}
            </div>
          </div>

          {/* Contactos */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider">
              Contactos
            </h2>

            <div className="mt-5 flex flex-col gap-4">
              <a
                href="mailto:geral@imotec.ao"
                className="flex items-start gap-3 text-sm text-gray-400 transition-colors hover:text-green-600"
              >
                <i
                  className="fas fa-envelope mt-1 text-green-600"
                  aria-hidden="true"
                />
                geral@imotec.ao
              </a>

              <a
                href="tel:+244000000000"
                className="flex items-start gap-3 text-sm text-gray-400 transition-colors hover:text-green-600"
              >
                <i
                  className="fas fa-phone mt-1 text-green-600"
                  aria-hidden="true"
                />
                +244 000 000 000
              </a>

              <div className="flex items-start gap-3 text-sm text-gray-400">
                <i
                  className="fas fa-map-marker-alt mt-1 text-green-600"
                  aria-hidden="true"
                />
                Angola
              </div>
            </div>
          </div>
        </div>

        {/* Redes sociais */}
        <div className="mt-12 flex flex-col gap-5 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-sm font-semibold">
            Siga-nos nas redes sociais
          </h2>

          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="flex h-10 w-10 items-center justify-center border border-white/10 text-gray-400 transition-colors hover:border-green-600 hover:bg-green-600 hover:text-white"
              >
                <i className={social.icon} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        {/* Direitos e política de privacidade */}
        <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} Imotec. Todos os direitos
            reservados.
          </p>

          <Link
            href="/politica-de-privacidade"
            className="transition-colors hover:text-green-600"
          >
            Política de privacidade
          </Link>
        </div>
      </div>
    </footer>
  );
}

"use client";

const contactos = [
  {
    icon: "fa-phone",
    titulo: "Telefone",
    valor: "+244 000 000 000",
    href: "tel:+244000000000",
  },
  {
    icon: "fa-envelope",
    titulo: "Email",
    valor: "geral@imotec.ao",
    href: "mailto:geral@imotec.ao",
  },
  {
    icon: "fa-location-dot",
    titulo: "Localização",
    valor: "Município de Belas, Distrito Urbano do Kilamba, Angola",
    href: null,
  },
];

export default function InfoContatos() {
  return (
    <section className="bg-white px-6 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Cabeçalho */}
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-black sm:text-4xl lg:text-5xl">
            Estamos aqui para <span className="text-green-700">ajudar</span>
          </h2>

          <p className="mx-auto mt-5 text-base leading-relaxed text-gray-600 sm:text-lg">
            Entre em contacto com a Imotec para solicitar um orçamento,
            esclarecer dúvidas ou obter informações sobre os nossos serviços.
          </p>
        </div>

        {/* Cards de contacto */}
        <div className="grid gap-6 md:grid-cols-3">
          {contactos.map((contacto) => (
            <div
              key={contacto.titulo}
              className="flex flex-col items-center border border-gray-200 bg-white p-7 text-center transition-colors duration-300 hover:border-green-600 sm:p-8"
            >
              <div className="mb-6 flex size-14 items-center justify-center bg-green-100 text-green-700">
                <i
                  className={`fas ${contacto.icon} text-xl`}
                  aria-hidden="true"
                />
              </div>

              <h3 className="text-xl font-bold text-black">
                {contacto.titulo}
              </h3>

              {contacto.href ? (
                <a
                  href={contacto.href}
                  className="mt-3 wrap-break-word text-sm leading-7 text-gray-600 transition-colors hover:text-green-700 sm:text-base"
                >
                  {contacto.valor}
                </a>
              ) : (
                <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
                  {contacto.valor}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Dados institucionais */}
        <div className="mt-12 bg-gray-100 p-7 sm:mt-16 sm:p-10 lg:p-12">
          <h3 className="text-2xl font-bold text-black sm:text-3xl">
            Dados institucionais
          </h3>

          <div className="mt-7 grid gap-6 sm:grid-cols-2">
            <div>
              <p className="text-sm text-gray-500">Denominação social</p>
              <p className="mt-2 font-semibold text-black">
                Imotec Engenharia &amp; Negócios, Lda.
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">NIF</p>
              <p className="mt-2 font-semibold text-black">5002167042</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Matrícula</p>
              <p className="mt-2 font-semibold text-black">n.º 1447/2024</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Localização</p>
              <p className="mt-2 font-semibold leading-relaxed text-black">
                Município de Belas, Distrito Urbano do Kilamba, Angola
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

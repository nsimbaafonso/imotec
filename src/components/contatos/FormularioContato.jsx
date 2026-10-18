
"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import contatoSchema from "@/validations/contatoSchema";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Button from "@/components/ui/Button";

export default function FormularioContato() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(contatoSchema),
    defaultValues: {
      nome: "",
      email: "",
      telefone: "",
      assunto: "",
      mensagem: "",
    },
    mode: "onBlur",
  });

  async function onSubmit(data) {
    // Integrar com o backend posteriormente.
    console.log(data);
  }

  return (
    <section className="bg-gray-100 px-6 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-black sm:text-4xl lg:text-5xl">
            Envie-nos uma{" "}
            <span className="text-green-700">mensagem</span>
          </h2>

          <p className="mt-5 max-w-lg text-base leading-relaxed text-gray-600 sm:text-lg">
            Preencha o formulário com os seus dados e a sua mensagem. Entraremos
            em contacto consigo assim que possível.
          </p>

          <div className="mt-8 flex items-start gap-4">
            <div className="flex size-12 shrink-0 items-center justify-center bg-green-100 text-green-700">
              <i className="fas fa-comments text-lg" aria-hidden="true" />
            </div>

            <div>
              <h3 className="font-semibold text-black">
                Estamos disponíveis para ajudar
              </h3>

              <p className="mt-1 text-sm leading-6 text-gray-600">
                Partilhe as suas dúvidas, necessidades ou detalhes do seu
                projecto com a nossa equipa.
              </p>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white p-6 shadow-sm sm:p-8 lg:p-10"
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <Input
                id="nome"
                label="Nome completo"
                type="text"
                placeholder="Introduza o seu nome completo"
                autoComplete="name"
                error={errors.nome?.message}
                {...register("nome")}
              />
            </div>

            <div>
              <Input
                id="email"
                label="E-mail"
                type="email"
                placeholder="exemplo@email.com"
                autoComplete="email"
                error={errors.email?.message}
                {...register("email")}
              />
            </div>

            <div>
              <Input
                id="telefone"
                label="Telefone"
                type="tel"
                placeholder="+244 900 000 000"
                autoComplete="tel"
                error={errors.telefone?.message}
                {...register("telefone")}
              />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="assunto"
                className="mb-2 block text-sm font-semibold text-gray-800"
              >
                Assunto
              </label>

              <select
                id="assunto"
                className={`w-full border bg-white px-4 py-3.5 text-sm text-gray-800 outline-none transition-colors focus:border-green-600 focus:ring-1 focus:ring-green-600 ${
                  errors.assunto ? "border-red-500" : "border-gray-300"
                }`}
                {...register("assunto")}
              >
                <option value="">Seleccione o assunto</option>
                <option value="orcamento">Pedido de orçamento</option>
                <option value="construcao">Construção civil</option>
                <option value="arquitectura">Arquitectura e design</option>
                <option value="habitacao">Habitação e imobiliário</option>
                <option value="informacoes">Pedido de informações</option>
                <option value="outro">Outro assunto</option>
              </select>

              {errors.assunto && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.assunto.message}
                </p>
              )}
            </div>

            <div className="sm:col-span-2">
              <Textarea
                id="mensagem"
                label="Mensagem"
                rows={5}
                placeholder="Escreva a sua mensagem..."
                error={errors.mensagem?.message}
                {...register("mensagem")}
              />
            </div>

            <div className="sm:col-span-2">
              <Button
                type="submit"
                disabled={isSubmitting}
                fullWidth
              >
                {isSubmitting ? "A enviar..." : "Enviar mensagem"}
                <i
                  className="fas fa-arrow-right ml-3"
                  aria-hidden="true"
                />
              </Button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

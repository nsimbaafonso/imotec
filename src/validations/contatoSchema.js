import * as yup from "yup";

const contatoSchema = yup.object({
  nome: yup
    .string()
    .trim()
    .required("Introduza o seu nome completo.")
    .min(3, "O nome deve ter pelo menos 3 caracteres."),

  email: yup
    .string()
    .trim()
    .email("Introduza um endereço de email válido.")
    .required("O email é obrigatório."),

  telefone: yup
    .string()
    .trim()
    .required("O telefone é obrigatório.")
    .matches(
      /^\+?[0-9\s()-]{9,20}$/,
      "Introduza um número de telefone válido.",
    ),

  assunto: yup
    .string()
    .required("Seleccione um assunto."),

  mensagem: yup
    .string()
    .trim()
    .required("Escreva a sua mensagem.")
    .min(10, "A mensagem deve ter pelo menos 10 caracteres."),
});

export default contatoSchema;
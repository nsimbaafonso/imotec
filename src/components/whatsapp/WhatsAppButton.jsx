export default function WhatsAppButton({
  phone = "244948039182",
  size = 64,
  tooltip = "Fale connosco no WhatsApp",
}) {
  const mensagem =
    "Olá! Vim através do website da Imotec Engenharia & Negócios, Lda. e gostaria de obter mais informações sobre os vossos serviços.";

  const whatsapp = `https://wa.me/${phone}?text=${encodeURIComponent(mensagem)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      {/* Tooltip */}
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 hidden group-hover:block bg-neutral-900 text-white text-sm px-3 py-1 rounded-md shadow-lg whitespace-nowrap animate-fade-left">
        {tooltip}
      </span>

      {/* Botão com borda animada */}
      <a
        href={whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={tooltip}
        style={{ width: size, height: size }}
        className="relative flex items-center justify-center rounded-full bg-green-500 hover:bg-green-600 transition transform hover:scale-110"
      >
        {/* Borda animada pulse */}
        <span className="absolute inset-0 rounded-full border-4 border-green-400 animate-ping"></span>
        <span className="absolute inset-0 rounded-full border-4 border-green-400 opacity-50 animate-ping delay-200"></span>

        {/* Ícone WhatsApp */}
        <i
          className="fab fa-whatsapp text-white text-2xl relative z-10"
          aria-hidden="true"
        ></i>
      </a>
    </div>
  );
}

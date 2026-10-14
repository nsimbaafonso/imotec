"use client";

export default function ObrasEmDestaque() {
  return (
    <section className="relative isolate min-h-125 overflow-hidden bg-black sm:min-h-150 lg:min-h-175">
      {/* Vídeo de fundo */}
      <video
        className="absolute inset-0 -z-20 size-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      >
        <source src="/videos/projectos-imotec.mp4" type="video/mp4" />
      </video>

      {/* Overlay escuro */}
      <div
        className="absolute inset-0 -z-10 bg-black/60"
        aria-hidden="true"
      />
    </section>
  );
}

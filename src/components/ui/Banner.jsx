export default function Banner({ image, title, description }) {
  return (
    <section
      className="relative isolate flex min-h-80 items-center justify-center overflow-hidden bg-black px-6 py-16 sm:min-h-96 sm:py-20 lg:min-h-105"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 -z-10 bg-black/60"
        aria-hidden="true"
      />

      {/* Conteúdo */}
      <div className="mx-auto max-w-4xl text-center text-white">
        <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
          {title}
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-100 sm:mt-6 sm:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
}

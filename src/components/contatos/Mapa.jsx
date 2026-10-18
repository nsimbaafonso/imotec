"use client";

export default function Mapa() {
  return (
    <section className="w-full">
      <iframe
        title="Localização da Imotec"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d420879.3578192174!2d12.81736925423832!3d-9.101209646500628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a521da34f8bceb5%3A0xeb8b6d2fbab15afd!2sAdministra%C3%A7%C3%A3o%20Municipal%20de%20Belas!5e1!3m2!1spt-PT!2sao!4v1792362039990!5m2!1spt-PT!2sao"
        className="block h-87.5 w-full border-0 sm:h-112.5 lg:h-125"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      />
    </section>
  );
}

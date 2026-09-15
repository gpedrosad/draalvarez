import Image from "next/image";
import { INSTAGRAM_URL, locations } from "@/lib/links";
import { messages, whatsappUrl } from "@/lib/whatsapp";

export function ComingSoon() {
  return (
    <div className="relative flex min-h-svh flex-col overflow-hidden">
      <div className="absolute inset-0" aria-hidden="true">
        <picture>
          <source
            media="(max-width: 768px)"
            srcSet="/images/hero-768.webp"
            type="image/webp"
          />
          <source
            media="(max-width: 1280px)"
            srcSet="/images/hero-1280.webp"
            type="image/webp"
          />
          <img
            src="/images/hero-1920.webp"
            alt=""
            width={1920}
            height={1280}
            fetchPriority="high"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover object-[78%_center] animate-hero-zoom md:object-center"
          />
        </picture>
        <div className="absolute inset-0 bg-background/55 md:bg-gradient-to-r md:from-background/70 md:via-background/35 md:to-transparent" />
      </div>

      <div className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-5 py-12 md:px-8 md:py-16">
        <div className="w-full max-w-xl border border-border bg-card p-6 shadow-[0_18px_50px_rgba(77,69,69,0.1)] md:p-9">
          <Image
            src="/images/logo-dark.png"
            alt=""
            width={79}
            height={55}
            className="h-9 w-auto object-contain md:h-11"
            sizes="44px"
            priority
          />
          <p className="mt-5 font-serif text-sm italic text-primary">
            Medicina estética · Palermo y Caballito
          </p>
          <h1 className="mt-3 font-serif text-[1.75rem] leading-tight text-heading md:text-[2.45rem]">
            Sitio en construcción
          </h1>
          <p className="mt-4 max-w-[42ch] text-sm leading-relaxed text-body md:text-base">
            Estamos preparando la web. El consultorio sigue atendiendo con
            normalidad: escribinos y reservamos tu evaluación.
          </p>

          <div className="mt-7 flex flex-col gap-2.5 sm:flex-row sm:items-center">
            <a
              href={whatsappUrl(messages.comingSoon)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-motion inline-flex w-full items-center justify-center bg-heading px-6 py-3.5 text-sm tracking-wide text-on-dark hover:bg-primary hover:shadow-[0_8px_24px_rgba(77,69,69,0.18)] sm:w-auto"
            >
              Escribir por WhatsApp
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-motion inline-flex w-full items-center justify-center border border-heading/20 bg-background px-6 py-3.5 text-sm tracking-wide text-heading hover:border-heading sm:w-auto"
            >
              Instagram
            </a>
          </div>
          <p className="mt-4 font-serif text-sm italic text-body">
            {`WhatsApp abre con este primer mensaje listo para enviar: “${messages.comingSoon}”.`}
          </p>
        </div>
      </div>

      <div className="relative border-t border-border bg-card/95">
        <div className="mx-auto grid w-full max-w-6xl gap-6 px-5 py-6 sm:grid-cols-3 sm:gap-8 sm:px-8">
          {locations.map((location) => (
            <p key={location.name} className="text-sm leading-relaxed">
              <span className="block font-serif italic text-heading">
                {location.name}
              </span>
              <a
                href={location.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-block text-body underline decoration-border underline-offset-4 transition-colors hover:text-heading hover:decoration-heading"
              >
                {location.addressLine}
              </a>
            </p>
          ))}
          <p className="text-sm leading-relaxed">
            <span className="block font-serif italic text-heading">
              Horarios
            </span>
            <span className="mt-1 block text-body">
              Mar · Mié · Vie · 10:00–20:00
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

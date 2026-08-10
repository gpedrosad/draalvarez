import Image from "next/image";
import { messages, whatsappUrl } from "@/lib/whatsapp";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0" aria-hidden={false}>
        {/* WebP pre-comprimidos por breakpoint: LCP sin round-trip al optimizer */}
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
            alt="Ambiente sereno de medicina estética"
            width={1920}
            height={1280}
            fetchPriority="high"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover object-[78%_center] animate-hero-zoom md:object-center"
          />
        </picture>
        <div className="absolute inset-0 bg-background/55 md:bg-gradient-to-r md:from-background/70 md:via-background/35 md:to-transparent" />
      </div>

      <div className="relative mx-auto flex max-w-6xl items-center px-5 py-10 md:min-h-[calc(100svh-5rem)] md:px-8 md:py-16">
        <div className="w-full max-w-xl animate-hero-panel border border-border bg-card p-6 shadow-[0_18px_50px_rgba(77,69,69,0.1)] md:p-9">
          <Image
            src="/images/logo-dark.png"
            alt=""
            width={79}
            height={55}
            className="animate-hero-line animate-hero-line-1 h-9 w-auto object-contain md:h-11"
            sizes="44px"
          />
          <p className="animate-hero-line animate-hero-line-2 mt-4 font-serif text-sm italic text-primary">
            Medicina estética · Palermo y Caballito
          </p>
          <p className="animate-hero-line animate-hero-line-3 mt-2 font-serif text-[1.65rem] leading-tight text-heading md:text-4xl">
            Dra. Luisa Alvarez
          </p>
          <h1 className="animate-hero-line animate-hero-line-4 mt-4 font-serif text-[1.55rem] leading-snug text-heading md:mt-5 md:text-[2.35rem] md:leading-tight">
            Diagnóstico médico antes de tratar.
          </h1>
          <p className="animate-hero-line animate-hero-line-5 mt-3 text-sm leading-relaxed text-body md:text-base">
            Atención por la Dra. Luisa Alvarez y equipo: piel, inyectables,
            láser y planes dermatoestéticos con evaluación previa.
          </p>

          <div className="animate-hero-line animate-hero-line-6 mt-6 flex flex-col gap-2.5 sm:flex-row sm:items-center">
            <a
              href={whatsappUrl(messages.evaluacion)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-motion inline-flex items-center justify-center bg-heading px-6 py-3.5 text-sm tracking-wide text-on-dark hover:bg-primary hover:shadow-[0_8px_24px_rgba(77,69,69,0.18)]"
            >
              Reservar por WhatsApp
            </a>
            <a
              href="#promociones"
              className="btn-motion inline-flex items-center justify-center border border-heading/20 bg-background px-6 py-3.5 text-sm tracking-wide text-heading hover:border-heading"
            >
              Ver promociones
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

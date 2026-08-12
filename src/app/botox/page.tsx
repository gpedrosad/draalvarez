import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BotoxStickyCta } from "@/components/botox/StickyCta";
import { locations } from "@/lib/links";
import { messages, whatsappUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Botox en Palermo y Caballito | Equipo Dra. Luisa Alvarez",
  description:
    "Toxina botulínica con evaluación médica dentro del equipo de Dra. Luisa Alvarez. Atención por Dra. Renata Moguillansky en Palermo y Caballito. Desde $300.000.",
};

const indications = [
  {
    title: "Hiperhidrosis axilar",
    text: "Sudoración excesiva.",
    message: messages.botoxHiperhidrosis,
  },
  {
    title: "Arrugas",
    text: "Líneas de expresión.",
    message: messages.botoxArrugas,
  },
  {
    title: "Bruxismo",
    text: "Tensión mandibular.",
    message: messages.botoxBruxismo,
  },
  {
    title: "Rosácea",
    text: "Enrojecimiento.",
    message: messages.botoxRosacea,
  },
  {
    title: "Secreción sebácea",
    text: "Exceso de grasa.",
    message: messages.botoxSebo,
  },
] as const;

const steps = [
  {
    n: "1",
    title: "Escribí",
    text: "Contanos tu motivo y sede preferida. Te orientamos y agendamos.",
  },
  {
    n: "2",
    title: "Evaluamos",
    text: "Confirmamos si aplica, la zona y la dosis según tu caso.",
  },
  {
    n: "3",
    title: "Tratamos",
    text: "Aplicación precisa. El efecto se consolida en pocos días.",
  },
] as const;

const faqs = [
  {
    q: "¿El Botox solo sirve para arrugas?",
    a: "No. También puede indicarse para bruxismo, rosácea, hiperhidrosis axilar y control de secreción sebácea, siempre con evaluación previa.",
  },
  {
    q: "¿Me voy a ver artificial?",
    a: "En uso estético el objetivo es suavizar, no rigidizar. Ajustamos dosis y puntos a tu gesto.",
  },
  {
    q: "¿Cuánto dura?",
    a: "En general entre 3 y 6 meses, según de la zona, la dosis y tu metabolismo.",
  },
  {
    q: "¿Duele?",
    a: "Son microaplicaciones. La molestia suele ser leve y breve; te contamos qué esperar en la consulta.",
  },
  {
    q: "¿Tengo que pagar sin saber si me sirve?",
    a: "Primero evaluamos. El precio de referencia del tratamiento es $300.000; la indicación final se confirma en consulta.",
  },
  {
    q: "¿Trabajan con obra social?",
    a: "No trabajamos con obra social, pero emitimos facturas por reintegro con las indicaciones que necesiten.",
  },
] as const;

export default function BotoxPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-background">
        {/* Mobile: franja baja para no comerse el primer viewport. Desktop: full-bleed */}
        <div className="relative aspect-[4/5] max-h-[min(48vh,360px)] w-full overflow-hidden sm:aspect-[5/4] sm:max-h-[min(44vh,420px)] md:absolute md:inset-0 md:aspect-auto md:h-auto md:max-h-none md:min-h-full">
          <picture className="absolute inset-0 block h-full w-full">
            <source
              media="(max-width: 767px)"
              srcSet="/images/botox-mobile-768.webp"
              type="image/webp"
            />
            <source
              media="(min-width: 768px)"
              srcSet="/images/botox-desktop-1280.webp 1280w, /images/botox-desktop-1920.webp 1920w"
              sizes="100vw"
              type="image/webp"
            />
            <img
              src="/images/botox-mobile-768.webp"
              alt="Tratamiento de Botox en consultorio de medicina estética"
              width={768}
              height={1152}
              fetchPriority="high"
              decoding="async"
              className="h-full w-full object-cover object-[center_28%] animate-hero-zoom md:object-[60%_center]"
            />
          </picture>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background to-transparent md:inset-0 md:h-auto md:bg-gradient-to-r md:from-background/88 md:via-background/45 md:to-transparent" />
        </div>

        <div className="relative mx-auto flex max-w-6xl items-center px-5 pb-6 pt-3 md:min-h-[calc(100svh-5rem)] md:px-8 md:py-16 md:pt-16">
          <div className="w-full max-w-xl animate-hero-panel border border-border bg-card p-4 shadow-[0_18px_50px_rgba(77,69,69,0.1)] sm:p-6 md:p-9">
            <Image
              src="/images/logo-dark.png"
              alt=""
              width={79}
              height={55}
              className="animate-hero-line animate-hero-line-1 hidden h-9 w-auto object-contain md:block md:h-11"
              sizes="44px"
            />
            <p className="animate-hero-line animate-hero-line-2 font-serif text-sm italic text-primary md:mt-4">
              Equipo Dra. Luisa Alvarez · Palermo y Caballito
            </p>
            <h1 className="animate-hero-line animate-hero-line-3 mt-2 font-serif text-[1.45rem] leading-snug text-heading sm:text-[1.65rem] md:mt-3 md:text-[2.45rem] md:leading-tight">
              Botox con evaluación médica del equipo de Dra. Luisa Alvarez
            </h1>
            <p className="animate-hero-line animate-hero-line-4 mt-2 text-sm leading-relaxed text-body md:mt-4 md:text-base">
              La atención está a cargo de la Dra. Renata Moguillansky. Elegí tu
              motivo y agendá por WhatsApp.
            </p>
            <div className="animate-hero-line animate-hero-line-5 mt-4 flex flex-col gap-2 sm:flex-row sm:items-center md:mt-6 md:gap-2.5">
              <a
                href={whatsappUrl(messages.botoxEvaluacion)}
                target="_blank"
                rel="noopener noreferrer"
                data-botox-cta
                className="btn-motion inline-flex items-center justify-center bg-heading px-5 py-3 text-sm tracking-wide text-on-dark hover:bg-primary hover:shadow-[0_8px_24px_rgba(77,69,69,0.18)] md:px-6 md:py-3.5"
              >
                Quiero mi evaluación
              </a>
              <a
                href="#indicaciones"
                className="btn-motion inline-flex items-center justify-center border border-heading/20 bg-background px-5 py-3 text-sm tracking-wide text-heading hover:border-heading md:px-6 md:py-3.5"
              >
                Elegir mi motivo
              </a>
            </div>
            <p className="animate-hero-line animate-hero-line-6 mt-3 text-[0.7rem] tracking-wide text-body md:mt-4 md:text-xs">
              Desde $300.000 · Mar, mié y vie · Palermo o Caballito
            </p>
          </div>
        </div>
      </section>

      <section
        id="indicaciones"
        className="section-defer border-t border-border bg-card"
      >
        <div className="mx-auto max-w-6xl px-5 py-16 pb-24 sm:px-8 sm:py-24 md:pb-24">
          <div className="max-w-2xl">
            <h2 className="font-serif text-3xl leading-tight text-heading sm:text-4xl">
              ¿Para qué lo necesitás?
            </h2>
            <p className="mt-3 text-base text-body">Elegí tu motivo.</p>
          </div>

          <ul className="mt-8 grid max-w-2xl gap-2 sm:grid-cols-2">
            {indications.map((item) => (
              <li key={item.title}>
                <a
                  href={whatsappUrl(item.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="surface-motion group flex items-baseline justify-between gap-3 border border-border bg-background px-4 py-3.5 hover:border-heading/30"
                >
                  <span className="font-serif text-lg text-heading">
                    {item.title}
                  </span>
                  <span className="shrink-0 text-xs text-body">{item.text}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-defer border-t border-border bg-heading text-on-dark">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="max-w-xl">
            <h2 className="font-serif text-3xl leading-tight text-on-dark! sm:text-4xl">
              Cómo es el proceso
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-on-dark/70 sm:text-base">
              Tres pasos claros, sin vueltas.
            </p>
          </div>

          <ol className="relative mt-10 max-w-2xl space-y-0 md:mt-12 md:grid md:max-w-none md:grid-cols-3 md:gap-0 md:space-y-0">
            {steps.map((step, i) => (
              <li
                key={step.n}
                className="relative flex gap-4 md:flex-col md:gap-0 md:px-6 md:first:pl-0 md:last:pr-0"
              >
                {/* Conector vertical (mobile) / horizontal (desktop) */}
                {i < steps.length - 1 ? (
                  <>
                    <span
                      aria-hidden
                      className="absolute top-9 bottom-0 left-[0.95rem] w-px bg-on-dark/20 md:hidden"
                    />
                    <span
                      aria-hidden
                      className="pointer-events-none absolute top-[0.95rem] right-0 left-[3.25rem] hidden h-px bg-on-dark/20 md:block"
                    />
                  </>
                ) : null}

                <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center border border-secondary/60 bg-heading font-serif text-sm text-secondary md:mb-5">
                  {step.n}
                </div>
                <div className="min-w-0 pb-8 md:pb-0">
                  <h3 className="font-serif text-xl text-on-dark! md:text-2xl">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-on-dark/70">
                    {step.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <a
            href={whatsappUrl(messages.botoxEvaluacion)}
            target="_blank"
            rel="noopener noreferrer"
            data-botox-cta
            className="btn-motion mt-4 inline-flex items-center justify-center bg-on-dark px-7 py-3.5 text-sm tracking-wide text-heading hover:opacity-90 md:mt-12"
          >
            Empezar consulta
          </a>
        </div>
      </section>

      <section
        id="precio"
        className="section-defer border-t border-border bg-background"
      >
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="max-w-xl">
            <h2 className="font-serif text-3xl leading-tight text-heading sm:text-4xl">
              Precio
            </h2>
            <p className="mt-3 text-base leading-relaxed text-body">
              Precio de referencia. La dosis e indicación se confirman en la
              evaluación.
            </p>
          </div>

          <div className="mt-10 grid gap-10 md:mt-12 lg:grid-cols-[minmax(0,18rem)_1fr] lg:items-start lg:gap-16">
            <div>
              <p className="font-serif text-5xl tracking-tight text-heading sm:text-6xl">
                $300.000
              </p>
              <p className="mt-2 text-sm text-body">Sesión individual de Botox</p>
              <a
                href={whatsappUrl(messages.botoxPrecio)}
                target="_blank"
                rel="noopener noreferrer"
                data-botox-cta
                className="btn-motion mt-6 inline-flex w-full items-center justify-center bg-heading px-6 py-3.5 text-sm tracking-wide text-on-dark hover:bg-primary sm:w-auto"
              >
                Reservar evaluación
              </a>
            </div>

            <dl className="divide-y divide-border border-y border-border">
              <div className="grid gap-1 py-4 sm:grid-cols-[10rem_1fr] sm:gap-6 sm:py-5">
                <dt className="text-sm text-body">Equipo</dt>
                <dd className="text-sm text-heading">
                  Dra. Luisa Alvarez | Medicina Estética
                </dd>
              </div>
              <div className="grid gap-1 py-4 sm:grid-cols-[10rem_1fr] sm:gap-6 sm:py-5">
                <dt className="text-sm text-body">Profesional tratante</dt>
                <dd className="text-sm text-heading">
                  Dra. Renata Moguillansky
                </dd>
              </div>
              <div className="grid gap-1 py-4 sm:grid-cols-[10rem_1fr] sm:gap-6 sm:py-5">
                <dt className="text-sm text-body">Formas de pago</dt>
                <dd className="text-sm text-heading">
                  Débito, crédito (hasta 3 cuotas), transferencia o efectivo
                </dd>
              </div>
              <div className="grid gap-1 py-4 sm:grid-cols-[10rem_1fr] sm:gap-6 sm:py-5">
                <dt className="text-sm text-body">Obra social</dt>
                <dd className="text-sm text-heading">
                  No trabajamos con obra social. Emitimos factura para reintegro.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section
        id="sedes"
        className="section-defer border-t border-border bg-card"
      >
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="font-serif text-3xl leading-tight text-heading sm:text-4xl">
                Elegí sede
              </h2>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-body">
                Contanos Palermo o Caballito en el primer mensaje y te
                confirmamos turno.
              </p>
            </div>
            <a
              href={whatsappUrl(
                "Hola, quiero evaluación de Botox. Sede preferida: (Palermo / Caballito).",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-motion inline-flex w-fit items-center justify-center bg-heading px-7 py-3.5 text-sm tracking-wide text-on-dark hover:bg-primary"
            >
              Elegir sede por WhatsApp
            </a>
          </div>
          <div className="mt-10 grid gap-8 border-t border-border pt-10 md:grid-cols-3">
            {locations.map((location) => (
              <div key={location.name}>
                <h3 className="font-serif text-xl text-heading">
                  {location.name}
                </h3>
                <a
                  href={location.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 block text-sm leading-relaxed text-body underline decoration-border underline-offset-4 transition-colors hover:text-heading hover:decoration-heading"
                >
                  {location.addressLine}, {location.city}
                </a>
              </div>
            ))}
            <div>
              <h3 className="font-serif text-xl text-heading">Horarios</h3>
              <p className="mt-3 text-sm leading-relaxed text-body">
                Mar · Mié · Vie · 10:00–20:00
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="faq"
        className="section-defer border-t border-border bg-background"
      >
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <h2 className="font-serif text-3xl leading-tight text-heading sm:text-4xl">
            Dudas frecuentes
          </h2>
          <div className="mt-10 divide-y divide-border border-y border-border">
            {faqs.map((faq) => (
              <details key={faq.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-xl text-heading transition-colors duration-200 hover:text-primary marker:content-none [&::-webkit-details-marker]:hidden">
                  {faq.q}
                  <span
                    aria-hidden
                    className="text-lg text-primary transition-transform duration-200 ease-[cubic-bezier(0.25,1,0.5,1)] group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-body sm:text-base">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section-defer border-t border-border pb-24 md:pb-0">
        <div className="mx-auto max-w-6xl px-5 py-16 text-center sm:px-8 sm:py-24">
          <p className="font-serif text-3xl leading-tight text-heading sm:text-4xl">
            Un mensaje. Tu evaluación.
          </p>
          <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-body">
            No hace falta saber la dosis exacta. Contanos el motivo y la sede:
            te guiamos desde ahí.
          </p>
          <a
            href={whatsappUrl(messages.botoxEvaluacion)}
            target="_blank"
            rel="noopener noreferrer"
            data-botox-cta
            className="btn-motion mt-9 inline-flex items-center justify-center bg-heading px-8 py-3.5 text-sm tracking-wide text-on-dark hover:bg-primary"
          >
            Escribir por WhatsApp
          </a>
          <p className="mt-5">
            <Link
              href="/"
              className="text-sm tracking-wide text-body underline decoration-border underline-offset-4 transition-colors hover:text-heading hover:decoration-heading"
            >
              Volver al inicio
            </Link>
          </p>
        </div>
      </section>

      <BotoxStickyCta />
    </>
  );
}

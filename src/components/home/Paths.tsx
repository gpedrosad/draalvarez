import Link from "next/link";
import { messages, whatsappUrl } from "@/lib/whatsapp";

const paths = [
  {
    title: "Tratar una condición",
    description:
      "Acné, manchas, rosácea, melasma, caída capilar y dermatología clínica con enfoque médico.",
    href: whatsappUrl(messages.problema),
    cta: "Consultar mi caso",
    examples: "Acné · Manchas · Rosácea · Capilar",
    external: true,
  },
  {
    title: "Realzar y rejuvenecer",
    description:
      "Botox, ácido hialurónico, láser, bioestimulación y planes para un resultado sutil y natural.",
    href: "/botox",
    cta: "Ver Botox",
    examples: "Botox · Láser · Labios · Flacidez",
    external: false,
  },
] as const;

export function Paths() {
  return (
    <section
      id="tratamientos"
      className="section-defer border-t border-border bg-card"
    >
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="max-w-2xl">
          <h2 className="font-serif text-3xl leading-tight text-heading sm:text-4xl">
            ¿Por dónde empezar?
          </h2>
          <p className="mt-3 font-serif text-xl leading-snug text-body sm:text-2xl">
            Elegí tu camino. Te guiamos el resto.
          </p>
          <p className="mt-4 text-base leading-relaxed text-body">
            No hace falta saber el tratamiento exacto. Contanos tu objetivo y te
            orientamos.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {paths.map((path) => {
            const className =
              "surface-motion group flex flex-col border border-border bg-background p-7 hover:border-heading/30 hover:shadow-[0_12px_40px_rgba(77,69,69,0.08)] sm:p-9";
            const content = (
              <>
                <p className="font-serif text-sm italic text-primary">
                  {path.examples}
                </p>
                <h3 className="mt-4 font-serif text-2xl text-heading sm:text-3xl">
                  {path.title}
                </h3>
                <p className="mt-4 max-w-md flex-1 text-base leading-relaxed text-body">
                  {path.description}
                </p>
                <span className="btn-motion mt-8 inline-flex w-fit items-center bg-heading px-5 py-2.5 text-sm tracking-wide text-on-dark group-hover:bg-primary">
                  {path.cta}
                </span>
              </>
            );

            if (path.external) {
              return (
                <a
                  key={path.title}
                  href={path.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={className}
                >
                  {content}
                </a>
              );
            }

            return (
              <Link key={path.title} href={path.href} className={className}>
                {content}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

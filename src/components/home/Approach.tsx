import { messages, whatsappUrl } from "@/lib/whatsapp";

const steps = [
  {
    n: "1",
    title: "Evaluamos",
    text: "Consulta 360° y diagnóstico con tecnología cuando hace falta.",
  },
  {
    n: "2",
    title: "Diseñamos",
    text: "Un plan a tu medida: dermatología, inyectables, láser o skincare.",
  },
  {
    n: "3",
    title: "Acompañamos",
    text: "Resultados naturales, con seguimiento. Sin protocolos genéricos.",
  },
] as const;

export function Approach() {
  return (
    <section className="section-defer border-t border-border bg-heading text-on-dark">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="max-w-xl">
          <h2 className="font-serif text-3xl leading-tight text-on-dark! sm:text-4xl">
            Nuestro enfoque
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-on-dark/70 sm:text-base">
            Primero diagnosticamos. Después tratamos.
          </p>
        </div>

        <ol className="relative mt-10 max-w-2xl space-y-0 md:mt-12 md:grid md:max-w-none md:grid-cols-3 md:gap-0 md:space-y-0">
          {steps.map((step, i) => (
            <li
              key={step.n}
              className="relative flex gap-4 md:flex-col md:gap-0 md:px-6 md:first:pl-0 md:last:pr-0"
            >
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
          href={whatsappUrl(messages.evaluacion)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-motion mt-4 inline-flex items-center justify-center bg-on-dark px-7 py-3.5 text-sm tracking-wide text-heading hover:opacity-90 md:mt-12"
        >
          Quiero mi evaluación
        </a>
      </div>
    </section>
  );
}

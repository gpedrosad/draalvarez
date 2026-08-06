import { messages, whatsappUrl } from "@/lib/whatsapp";

const steps = [
  {
    n: "01",
    title: "Evaluamos",
    text: "Consulta dermatoestética 360° y diagnóstico con tecnología cuando hace falta (VISIA, HairMetrix).",
  },
  {
    n: "02",
    title: "Diseñamos",
    text: "Un protocolo personalizado que puede combinar dermatología, inyectables, láser y skincare.",
  },
  {
    n: "03",
    title: "Acompañamos",
    text: "Resultados naturales, con seguimiento y planes pensados para tu piel — no protocolos genéricos.",
  },
] as const;

export function Approach() {
  return (
    <section className="section-defer border-t border-border bg-heading text-on-dark">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.18em] text-secondary">
            Nuestro enfoque
          </p>
          <h2 className="mt-3 font-serif text-3xl leading-tight text-on-dark! sm:text-4xl">
            Primero diagnosticamos. Después tratamos.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-on-dark/80">
            Combinamos dermatología clínica, medicina estética, cosmiatría y
            bienestar para un plan a tu medida.
          </p>
        </div>

        <ol className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
          {steps.map((step) => (
            <li key={step.n}>
              <p className="font-serif text-sm tracking-[0.2em] text-secondary">
                {step.n}
              </p>
              <h3 className="mt-3 font-serif text-2xl text-on-dark!">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-on-dark/75">
                {step.text}
              </p>
            </li>
          ))}
        </ol>

        <a
          href={whatsappUrl(messages.evaluacion)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-motion mt-12 inline-flex items-center justify-center bg-on-dark px-7 py-3.5 text-sm tracking-wide text-heading hover:opacity-90"
        >
          Quiero mi evaluación
        </a>
      </div>
    </section>
  );
}

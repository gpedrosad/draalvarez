const faqs = [
  {
    question: "¿Trabajan con obra social?",
    answer:
      "No trabajamos con obra social, pero emitimos facturas por reintegro con las indicaciones que necesiten para presentar en su obra social.",
  },
  {
    question: "¿Qué medios de pago manejan?",
    answer:
      "Tarjeta de débito o crédito (hasta 3 cuotas), transferencia bancaria y efectivo.",
  },
] as const;

export function Faq() {
  return (
    <section id="faq" className="section-defer border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.18em] text-primary">
            FAQ pacientes
          </p>
          <h2 className="mt-3 font-serif text-3xl leading-tight text-heading sm:text-4xl">
            Consultas frecuentes
          </h2>
          <p className="mt-4 text-base leading-relaxed text-body">
            Información clara antes de tu visita al consultorio.
          </p>
        </div>

        <div className="mt-10 divide-y divide-border border-y border-border">
          {faqs.map((faq) => (
            <details key={faq.question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-xl text-heading transition-colors duration-200 hover:text-primary marker:content-none [&::-webkit-details-marker]:hidden">
                {faq.question}
                <span
                  aria-hidden
                  className="text-lg text-primary transition-transform duration-200 ease-[cubic-bezier(0.25,1,0.5,1)] group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-body transition-opacity duration-200 group-open:opacity-100 sm:text-base">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

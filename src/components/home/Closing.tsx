import { messages, whatsappUrl } from "@/lib/whatsapp";

export function Closing() {
  return (
    <section className="section-defer border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-5 py-16 text-center sm:px-8 sm:py-24">
        <p className="font-serif text-3xl leading-tight text-heading sm:text-4xl md:text-5xl">
          Tu piel merece un plan,
          <br className="hidden sm:block" /> no una fórmula genérica.
        </p>
        <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-body">
          Escribinos por WhatsApp y te orientamos según tu objetivo, sede y
          disponibilidad.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={whatsappUrl(messages.evaluacion)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-motion inline-flex items-center justify-center bg-heading px-8 py-3.5 text-sm tracking-wide text-on-dark hover:bg-primary hover:shadow-[0_8px_24px_rgba(77,69,69,0.16)]"
          >
            Quiero mi evaluación
          </a>
          <a
            href="#promociones"
            className="btn-motion inline-flex items-center justify-center border border-heading/20 px-8 py-3.5 text-sm tracking-wide text-heading hover:border-heading"
          >
            Ver promociones
          </a>
        </div>
      </div>
    </section>
  );
}

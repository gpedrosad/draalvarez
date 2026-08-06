import { whatsappUrl } from "@/lib/whatsapp";

export function Locations() {
  return (
    <section id="contacto" className="section-defer border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="font-serif text-sm italic text-primary">
              Sedes y horarios
            </p>
            <h2 className="mt-3 font-serif text-3xl leading-tight text-heading sm:text-4xl">
              Palermo y Caballito
            </h2>
            <p className="mt-4 text-base leading-relaxed text-body">
              Contanos qué sede preferís y te confirmamos el turno.
            </p>
          </div>
          <a
            href={whatsappUrl(
              "Hola, quiero reservar un turno. Sede preferida: (Palermo / Caballito).",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-motion inline-flex w-fit items-center justify-center bg-heading px-7 py-3.5 text-sm tracking-wide text-on-dark hover:bg-primary hover:shadow-[0_8px_24px_rgba(77,69,69,0.16)]"
          >
            Elegir sede por WhatsApp
          </a>
        </div>

        <div className="mt-12 grid gap-8 border-t border-border pt-10 md:grid-cols-3">
          <div>
            <h3 className="font-serif text-xl text-heading">Caballito</h3>
            <p className="mt-3 text-sm leading-relaxed text-body">
              Federico García Lorca 55
              <br />
              CABA
            </p>
          </div>
          <div>
            <h3 className="font-serif text-xl text-heading">Palermo</h3>
            <p className="mt-3 text-sm leading-relaxed text-body">
              Sinclair 2949
              <br />
              CABA
            </p>
          </div>
          <div>
            <h3 className="font-serif text-xl text-heading">Horarios</h3>
            <p className="mt-3 text-sm leading-relaxed text-body">
              <span className="text-heading">Martes, miércoles y viernes</span>
              <br />
              10:00–20:00
            </p>
            <p className="mt-3 text-sm leading-relaxed text-body">
              Lunes, jueves, sábado y domingo: cerrado
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

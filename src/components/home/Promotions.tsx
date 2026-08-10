import { messages, whatsappUrl } from "@/lib/whatsapp";

type Promo = {
  title: string;
  price: string;
  detail: string;
  highlight?: string;
  message: string;
};

const packs: Promo[] = [
  {
    title: "Mesoterapia facial",
    price: "$150.000",
    detail: "Equivale a $75.000 por sesión",
    highlight: "Más consultado",
    message: messages.packMesoterapia,
  },
  {
    title: "Skinbooster o relleno de labios",
    price: "$360.000",
    detail: "Equivale a $180.000 por sesión",
    message: messages.packSkinbooster,
  },
  {
    title: "Masaje descontracturante",
    price: "$110.000",
    detail: "Equivale a $55.000 por sesión",
    message: messages.packMasaje,
  },
];

export function Promotions() {
  return (
    <section id="promociones" className="section-defer border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="max-w-2xl">
          <p className="font-serif text-sm italic text-primary">
            Promociones
          </p>
          <h2 className="mt-3 font-serif text-3xl leading-tight text-heading sm:text-4xl">
            Packs de 2 sesiones. Reserva directa.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-body">
            Precio total del pack. Cada opción abre WhatsApp con el tratamiento
            ya escrito.
          </p>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {packs.map((promo) => (
            <li key={promo.title}>
              <a
                href={whatsappUrl(promo.message)}
                target="_blank"
                rel="noopener noreferrer"
                className="surface-motion group flex h-full flex-col border border-border bg-card p-6 hover:border-heading/25 hover:shadow-[0_12px_36px_rgba(77,69,69,0.08)]"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-background px-2 py-1 font-serif text-xs italic text-heading">
                      Pack 2 sesiones
                    </span>
                    {promo.highlight ? (
                      <span className="bg-primary/15 px-2 py-1 font-serif text-xs italic text-heading">
                        {promo.highlight}
                      </span>
                    ) : null}
                  </div>
                  <span className="shrink-0 font-serif text-2xl text-heading">
                    {promo.price}
                  </span>
                </div>
                <h3 className="mt-5 font-serif text-xl leading-snug text-heading">
                  {promo.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-body">
                  {promo.detail}
                </p>
                <span className="btn-motion mt-6 inline-flex w-fit items-center bg-heading px-4 py-2.5 text-sm tracking-wide text-on-dark group-hover:bg-primary">
                  Reservar por WhatsApp
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

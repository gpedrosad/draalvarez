"use client";

import { useState } from "react";
import { messages, whatsappUrl } from "@/lib/whatsapp";

type Promo = {
  title: string;
  price: string;
  detail: string;
  professional?: string;
  kind: "Pack 2 sesiones" | "Combo" | "Individual";
  highlight?: string;
  message: string;
};

const packs: Promo[] = [
  {
    title: "Mesoterapia facial",
    price: "$150.000",
    detail: "Equivale a $75.000 por sesión",
    kind: "Pack 2 sesiones",
    highlight: "Más consultado",
    message: messages.packMesoterapia,
  },
  {
    title: "Skinbooster o relleno de labios",
    price: "$360.000",
    detail: "Equivale a $180.000 por sesión",
    kind: "Pack 2 sesiones",
    message: messages.packSkinbooster,
  },
  {
    title: "Masaje descontracturante",
    price: "$110.000",
    detail: "Equivale a $55.000 por sesión",
    kind: "Pack 2 sesiones",
    message: messages.packMasaje,
  },
];

const profesionales: Promo[] = [
  {
    title: "Skinbooster",
    price: "$200.000",
    detail: "Hidrata y revitaliza la piel",
    professional: "Dra. Renata Moguillansky",
    kind: "Individual",
    message: messages.renataSkinbooster,
  },
  {
    title: "Peeling + PRP",
    price: "$135.000",
    detail: "Estimula la regeneración",
    professional: "Dra. Renata Moguillansky",
    kind: "Combo",
    message: messages.renataPeelingPrp,
  },
  {
    title: "Botox",
    price: "$300.000",
    detail: "Suaviza y previene arrugas de expresión",
    professional: "Dra. Renata Moguillansky",
    kind: "Individual",
    message: messages.renataBotox,
  },
  {
    title: "Peeling + Láser Q-Switched",
    price: "$230.000",
    detail: "Atenúa manchas y unifica el tono",
    professional: "Dra. Claudia Koch",
    kind: "Combo",
    highlight: "Manchas",
    message: messages.claudiaPeelingLaser,
  },
  {
    title: "PRP",
    price: "$100.000",
    detail: "Mejora la calidad de la piel",
    professional: "Dra. Claudia Koch",
    kind: "Individual",
    message: messages.claudiaPrp,
  },
  {
    title: "Peeling + Mesoterapia",
    price: "$135.000",
    detail: "Renueva e hidrata la piel",
    professional: "Dra. Claudia Koch",
    kind: "Combo",
    message: messages.claudiaPeelingMeso,
  },
  {
    title: "Limpieza facial",
    price: "$85.000",
    detail: "Extracción y preparación de la piel",
    professional: "Diana Godoy",
    kind: "Individual",
    message: messages.dianaLimpieza,
  },
  {
    title: "Masaje + reflexología",
    price: "$90.000",
    detail: "Bienestar y liberación de tensión",
    professional: "Diana Godoy",
    kind: "Combo",
    message: messages.dianaMasaje,
  },
  {
    title: "Dermapen o dermaplaning",
    price: "$87.000",
    detail: "Renovación y textura",
    professional: "Diana Godoy",
    kind: "Individual",
    message: messages.dianaDermapen,
  },
];

const tabs = [
  { id: "packs", label: "Packs 2 sesiones", count: packs.length },
  { id: "equipo", label: "Por profesional", count: profesionales.length },
] as const;

export function Promotions() {
  const [tab, setTab] = useState<(typeof tabs)[number]["id"]>("packs");
  const items = tab === "packs" ? packs : profesionales;

  return (
    <section id="promociones" className="section-defer border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="max-w-2xl">
          <p className="font-serif text-sm italic text-primary">
            Promociones
          </p>
          <h2 className="mt-3 font-serif text-3xl leading-tight text-heading sm:text-4xl">
            Precios claros. Reserva directa.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-body">
            Packs, combos e individuales separados. Cada opción abre WhatsApp
            con el tratamiento ya escrito.
          </p>
        </div>

        <div
          className="mt-10 flex gap-1 rounded-sm border border-border bg-card p-1"
          role="tablist"
          aria-label="Tipo de promoción"
        >
          {tabs.map((item) => {
            const active = tab === item.id;
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setTab(item.id)}
                className={`flex-1 px-3 py-3 text-sm tracking-wide transition-[background-color,color,transform] duration-200 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                  active
                    ? "bg-heading text-on-dark"
                    : "text-body hover:text-heading"
                }`}
              >
                {item.label}
                <span className={`ml-1.5 ${active ? "text-on-dark/70" : "text-body/70"}`}>
                  ({item.count})
                </span>
              </button>
            );
          })}
        </div>

        <div key={tab} className="animate-tab-panel">
        {tab === "packs" ? (
          <p className="mt-4 text-sm text-body">
            El precio mostrado es el <span className="text-heading">total del pack</span>, no por sesión.
          </p>
        ) : (
          <p className="mt-4 text-sm text-body">
            Precio por tratamiento con la profesional indicada.
          </p>
        )}

        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((promo) => (
            <li key={`${promo.professional ?? "pack"}-${promo.title}`}>
              <a
                href={whatsappUrl(promo.message)}
                target="_blank"
                rel="noopener noreferrer"
                className="surface-motion group flex h-full flex-col border border-border bg-card p-6 hover:border-heading/25 hover:shadow-[0_12px_36px_rgba(77,69,69,0.08)]"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-background px-2 py-1 font-serif text-xs italic text-heading">
                      {promo.kind}
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
                {promo.professional ? (
                  <p className="mt-2 text-sm font-medium text-heading">
                    {promo.professional}
                  </p>
                ) : null}
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
      </div>
    </section>
  );
}

"use client";

import { useEffect, useState } from "react";
import { messages, whatsappUrl } from "@/lib/whatsapp";

/** Sticky mobile: solo visible cuando ningún CTA principal está en pantalla */
export function BotoxStickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>("[data-botox-cta]"),
    );
    if (targets.length === 0) return;

    const visibleSet = new Set<Element>();

    const update = () => {
      setVisible(visibleSet.size === 0);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            visibleSet.add(entry.target);
          } else {
            visibleSet.delete(entry.target);
          }
        }
        update();
      },
      {
        // Un poco de margen: si el CTA está casi saliendo, ya mostramos sticky
        root: null,
        threshold: 0.15,
        rootMargin: "-8px 0px -8px 0px",
      },
    );

    for (const el of targets) {
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-[5.5rem] z-40 px-4 transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] md:hidden ${
        visible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
      aria-hidden={!visible}
    >
      <a
        href={whatsappUrl(messages.botoxEvaluacion)}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={visible ? 0 : -1}
        className="btn-motion flex w-full items-center justify-center rounded-sm bg-heading px-5 py-3.5 text-sm tracking-wide text-on-dark shadow-[0_10px_28px_rgba(77,69,69,0.2)] hover:bg-primary"
      >
        Consultar Botox por WhatsApp
      </a>
    </div>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { getPrimaryNavLinks } from "@/lib/navigation";
import { messages, whatsappUrl } from "@/lib/whatsapp";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const navLinks = getPrimaryNavLinks(pathname);

  return (
    <>
      <button
        type="button"
        className="flex h-10 w-10 shrink-0 items-center justify-center text-heading md:hidden"
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        onClick={() => setOpen((value) => !value)}
      >
        <span className="relative block h-3.5 w-5">
          <span
            className={`absolute left-0 block h-px w-full bg-heading transition-[transform,top] duration-200 ease-[cubic-bezier(0.25,1,0.5,1)] ${
              open ? "top-1.5 rotate-45" : "top-0"
            }`}
          />
          <span
            className={`absolute left-0 top-1.5 block h-px w-full bg-heading transition-opacity duration-200 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute left-0 block h-px w-full bg-heading transition-[transform,top] duration-200 ease-[cubic-bezier(0.25,1,0.5,1)] ${
              open ? "top-1.5 -rotate-45" : "top-3"
            }`}
          />
        </span>
      </button>

      <div
        id="mobile-nav"
        hidden={!open}
        className="absolute inset-x-0 top-full overflow-hidden border-b border-border bg-background md:hidden"
      >
        <nav className="flex flex-col gap-1 px-5 py-4" aria-label="Móvil">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="py-3 text-sm tracking-wide text-body transition-colors hover:text-heading"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={whatsappUrl(messages.evaluacion)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-motion mt-2 bg-heading px-5 py-3 text-center text-sm tracking-wide text-on-dark hover:bg-primary"
            onClick={() => setOpen(false)}
          >
            Reservar cita
          </a>
        </nav>
      </div>
    </>
  );
}

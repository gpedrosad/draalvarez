import Link from "next/link";
import { Logo } from "@/components/Logo";
import { INSTAGRAM_URL, locations } from "@/lib/links";

const footerLinks = [
  { href: "/botox", label: "Botox" },
  { href: "/#promociones", label: "Promociones" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#contacto", label: "Contacto" },
];

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-card">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div className="max-w-sm">
          <Logo />
          <p className="mt-4 text-sm leading-relaxed text-body">
            Medicina estética en Palermo y Caballito. Atención personalizada
            para realzar tu belleza natural con resultados sutiles y
            duraderos.
          </p>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-block text-sm text-body transition-colors hover:text-heading"
          >
            Instagram
          </a>
        </div>

        <div>
          <p className="font-serif text-sm italic text-heading">Ubicaciones</p>
          <ul className="mt-4 flex flex-col gap-4 text-sm text-body">
            {locations.map((location) => (
              <li key={location.name} className="leading-relaxed">
                <span className="block text-heading">{location.name}</span>
                <a
                  href={location.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-border underline-offset-4 transition-colors hover:text-heading hover:decoration-heading"
                >
                  {location.addressLine}, {location.city}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-serif text-sm italic text-heading">Horarios</p>
          <ul className="mt-4 flex flex-col gap-2 text-sm text-body">
            <li>
              <span className="text-heading">Mar · Mié · Vie</span>
              <br />
              10:00–20:00
            </li>
            <li className="pt-1 leading-relaxed">
              Lun · Jue · Sáb · Dom
              <br />
              Cerrado
            </li>
          </ul>
        </div>

        <div>
          <p className="font-serif text-sm italic text-heading">Explorar</p>
          <ul className="mt-4 flex flex-col gap-3 text-sm text-body">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition-colors hover:text-heading"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-body sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            © {new Date().getFullYear()} Dra. Luisa Alvarez. Todos los derechos
            reservados.
          </p>
          <p>
            Hecho por{" "}
            <a
              href="https://wa.me/5491133017403"
              target="_blank"
              rel="noopener noreferrer"
              className="text-heading underline decoration-border underline-offset-2 transition-colors hover:decoration-heading"
            >
              Gonzalo Pedrosa
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

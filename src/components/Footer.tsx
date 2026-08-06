import Link from "next/link";
import { Logo } from "@/components/Logo";

const footerLinks = [
  { href: "#tratamientos", label: "Tratamientos" },
  { href: "#promociones", label: "Promociones" },
  { href: "#faq", label: "FAQ" },
  { href: "#contacto", label: "Contacto" },
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
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-heading">
            Ubicaciones
          </p>
          <ul className="mt-4 flex flex-col gap-4 text-sm text-body">
            <li className="leading-relaxed">
              <span className="block text-heading">Caballito</span>
              Federico García Lorca 55, CABA
            </li>
            <li className="leading-relaxed">
              <span className="block text-heading">Palermo</span>
              Sinclair 2949, CABA
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-heading">
            Horarios
          </p>
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
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-heading">
            Explorar
          </p>
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
          <p className="tracking-wide">Palermo · Caballito</p>
        </div>
      </div>
    </footer>
  );
}

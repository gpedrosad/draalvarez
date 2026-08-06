import Link from "next/link";
import { Logo } from "@/components/Logo";
import { MobileNav } from "@/components/MobileNav";
import { messages, whatsappUrl } from "@/lib/whatsapp";

const navLinks = [
  { href: "#tratamientos", label: "Tratamientos" },
  { href: "#promociones", label: "Promociones" },
  { href: "#faq", label: "FAQ" },
  { href: "#contacto", label: "Contacto" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/95">
      <div className="relative mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between gap-4 px-5 sm:h-[5rem] sm:px-8">
        <Logo priority />

        <nav className="hidden items-center gap-10 md:flex" aria-label="Principal">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm tracking-wide text-body transition-colors hover:text-heading"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={whatsappUrl(messages.evaluacion)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-motion bg-heading px-5 py-2.5 text-sm tracking-wide text-on-dark hover:bg-primary hover:shadow-[0_8px_20px_rgba(77,69,69,0.16)]"
          >
            Reservar cita
          </a>
        </nav>

        <MobileNav />
      </div>
    </header>
  );
}

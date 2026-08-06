import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  href?: string;
  showWordmark?: boolean;
  /** `dark` = marca oscura sobre fondos claros; `light` = marca blanca sobre fondos oscuros */
  variant?: "dark" | "light";
  priority?: boolean;
  onClick?: () => void;
  className?: string;
};

export function Logo({
  href = "/",
  showWordmark = true,
  variant = "dark",
  priority = false,
  onClick,
  className = "",
}: LogoProps) {
  const src =
    variant === "light" ? "/images/logo.png" : "/images/logo-dark.png";

  const content = (
    <>
      <Image
        src={src}
        alt=""
        width={79}
        height={55}
        className="h-8 w-auto object-contain sm:h-9"
        priority={priority}
        sizes="40px"
      />
      {showWordmark ? (
        <span className="min-w-0 text-left">
          <span
            className={`block font-serif text-base leading-tight tracking-[0.02em] sm:text-lg ${
              variant === "light" ? "text-on-dark" : "text-heading"
            }`}
          >
            Dra. Luisa Alvarez
          </span>
          <span
            className={`mt-0.5 block font-serif text-[0.7rem] italic sm:text-xs ${
              variant === "light" ? "text-on-dark/70" : "text-body"
            }`}
          >
            Medicina Estética
          </span>
        </span>
      ) : (
        <span className="sr-only">Dra. Luisa Alvarez | Medicina Estética</span>
      )}
    </>
  );

  if (!href) {
    return (
      <div className={`inline-flex items-center gap-3 ${className}`}>{content}</div>
    );
  }

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`inline-flex items-center gap-3 transition-opacity hover:opacity-80 ${className}`}
      aria-label="Dra. Luisa Alvarez | Medicina Estética"
    >
      {content}
    </Link>
  );
}

import { GOOGLE_REVIEWS_URL, googleRating } from "@/lib/links";

const quotes = [
  {
    name: "Eliana Bastida",
    text: "Su criterio y asesoramiento en medicina estética la diferencian. Recomiendo 100%.",
  },
  {
    name: "Pau Cadente",
    text: "Gran profesional, detallista y dedicada. Tecnología de primer nivel y un equipo excelente.",
  },
  {
    name: "Alicita Dapueto",
    text: "Calidad profesional y última tecnología. La calidez del equipo es sin igual.",
  },
  {
    name: "Victoria Debonis",
    text: "Organizan planes con mucha precisión, entendiendo exactamente lo que la piel necesita.",
  },
  {
    name: "María Cadenazzi",
    text: "Propone la mejor opción para cada paciente. Los resultados son naturales.",
  },
  {
    name: "Luciana Molinari",
    text: "Idoneidad, calidez y empatía. Te orientan con seriedad para tu mejor versión.",
  },
  {
    name: "Patricia Buccino",
    text: "Atención personalizada. Mi piel rejuveneció 10 años.",
  },
  {
    name: "Elvira Diez",
    text: "Profesional con mucha solvencia y un trato muy cálido. Muy recomendable.",
  },
  {
    name: "Liliana Leone",
    text: "Cálida y profesional. Siempre con dedicación absoluta y sutileza en los resultados.",
  },
  {
    name: "Nahiara Perera",
    text: "Adaptan cada tratamiento a tus objetivos. Realmente 10/10.",
  },
  {
    name: "Valeria Casali",
    text: "Profesionalismo, precisión y contención. La naturalidad de los resultados es mágica.",
  },
  {
    name: "Jacqueline Donin",
    text: "Excelente atención de la doctora y de todo su equipo.",
  },
  {
    name: "Abigail Sulkes",
    text: "Un lugar cálido y profesional. Todas súper amables. Obviamente volvería.",
  },
  {
    name: "Molo Kid",
    text: "Más de 10 años eligiéndola por profesionalismo, calidez y evolución constante.",
  },
] as const;

function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className}>
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.84z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}

function Stars({ className }: { className?: string }) {
  return (
    <div className={className} aria-label="5 de 5 estrellas">
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          aria-hidden
          className="h-3.5 w-3.5 fill-primary sm:h-4 sm:w-4"
        >
          <path d="M10 1.5l2.35 5.55 6.05.55-4.6 3.95 1.4 5.85L10 14.6l-5.2 2.8 1.4-5.85-4.6-3.95 6.05-.55L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({
  name,
  text,
}: {
  name: string;
  text: string;
}) {
  return (
    <article className="flex h-56 w-72 shrink-0 flex-col border border-border bg-background p-5 sm:h-60 sm:w-80 sm:p-6">
      <Stars className="flex shrink-0 gap-0.5" />
      <p className="mt-3 line-clamp-4 flex-1 font-serif text-base leading-snug text-heading">
        “{text}”
      </p>
      <p className="mt-auto pt-3 text-sm text-body">{name}</p>
    </article>
  );
}

export function Reviews() {
  const loop = [...quotes, ...quotes];

  return (
    <section
      id="opiniones"
      className="section-defer border-t border-border bg-card"
    >
      <div className="mx-auto max-w-6xl px-5 pt-12 sm:px-8 sm:pt-16">
        <a
          href={GOOGLE_REVIEWS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex flex-wrap items-center gap-x-2.5 gap-y-1 transition-opacity hover:opacity-80"
        >
          <GoogleIcon className="h-5 w-5 shrink-0 sm:h-6 sm:w-6" />
          <span className="text-sm tracking-wide text-body">Google</span>
          <Stars className="flex gap-1" />
        </a>
        <h2 className="mt-3 flex flex-wrap items-baseline gap-x-3 gap-y-1 font-serif text-heading">
          <span className="text-4xl leading-none tracking-tight tabular-nums sm:text-5xl">
            {googleRating.score}
          </span>
          <span className="text-base text-body sm:text-lg">
            {googleRating.count} opiniones
          </span>
        </h2>
        <p className="mt-2 max-w-md text-sm leading-relaxed text-body sm:text-base">
          Lo que dicen quienes se atienden en el consultorio.
        </p>
      </div>

      <div className="reviews-marquee relative mt-8 overflow-hidden sm:mt-10">
        <ul className="reviews-marquee-track" aria-label="Opiniones de pacientes">
          {loop.map((quote, index) => (
            <li
              key={`${quote.name}-${index}`}
              aria-hidden={index >= quotes.length ? true : undefined}
            >
              <ReviewCard name={quote.name} text={quote.text} />
            </li>
          ))}
        </ul>
      </div>

      <div className="mx-auto max-w-6xl px-5 pt-8 pb-12 sm:px-8 sm:pb-16">
        <a
          href={GOOGLE_REVIEWS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm tracking-wide text-heading underline decoration-border underline-offset-4 transition-colors hover:decoration-heading"
        >
          <GoogleIcon className="h-4 w-4 shrink-0" />
          Ver más en Google →
        </a>
      </div>
    </section>
  );
}

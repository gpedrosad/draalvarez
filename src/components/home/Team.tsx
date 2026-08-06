const team = [
  {
    name: "Dra. Luisa Alvarez",
    role: "Medicina estética · Dirección",
  },
  {
    name: "Dra. Renata Moguillansky",
    role: "Skinbooster, peeling + PRP, botox",
  },
  {
    name: "Dra. Claudia Koch",
    role: "Láser, peeling y medicina regenerativa",
  },
  {
    name: "Diana Godoy",
    role: "Cosmiatría y bienestar",
  },
] as const;

export function Team() {
  return (
    <section id="equipo" className="section-defer border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.18em] text-primary">
            Equipo
          </p>
          <h2 className="mt-3 font-serif text-3xl leading-tight text-heading sm:text-4xl">
            Sabés quién te atiende
          </h2>
          <p className="mt-4 text-base leading-relaxed text-body">
            Cada promoción y tratamiento está asociado a una profesional. Eso
            reduce dudas y acelera la reserva.
          </p>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <li
              key={member.name}
              className="border border-border bg-card p-6"
            >
              <h3 className="font-serif text-xl leading-snug text-heading">
                {member.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-body">
                {member.role}
              </p>
            </li>
          ))}
        </ul>

        <a
          href="#promociones"
          className="mt-10 inline-flex text-sm tracking-wide text-heading underline decoration-border underline-offset-4 transition-colors hover:decoration-heading"
        >
          Ver tratamientos por profesional →
        </a>
      </div>
    </section>
  );
}

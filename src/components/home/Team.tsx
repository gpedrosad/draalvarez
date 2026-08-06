import Image from "next/image";

const team = [
  {
    name: "Emmanuel Forti",
    role: "Flebólogo",
    image: "/images/equipo-flebologo.webp",
    alt: "Emmanuel Forti, flebólogo",
  },
  {
    name: "Diana Godoy",
    role: "Dermocosmiatra",
    image: "/images/equipo-dermocosmiatra.webp",
    alt: "Diana Godoy, dermocosmiatra",
  },
  {
    name: "Dra. Luisa Alvarez",
    role: "Directora médica",
    image: "/images/equipo-directora.webp",
    alt: "Dra. Luisa Alvarez, directora médica",
  },
  {
    name: "Dra. Renata Moguillansky",
    role: "Medicina estética",
    image: "/images/equipo-medica-estetica.webp",
    alt: "Dra. Renata Moguillansky, medicina estética",
  },
] as const;

export function Team() {
  return (
    <section
      id="equipo"
      className="section-defer border-t border-border bg-background"
    >
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-24">
        <div className="max-w-2xl">
          <h2 className="font-serif text-2xl leading-tight text-heading sm:text-4xl">
            El equipo
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-body sm:mt-3 sm:text-base">
            Sabés quién te atiende.
          </p>
        </div>

        <ul className="mt-6 grid grid-cols-2 gap-2.5 sm:mt-10 sm:gap-5 lg:grid-cols-4 md:mt-12">
          {team.map((member) => (
            <li key={member.name} className="group">
              <div className="overflow-hidden border border-border bg-card">
                <div className="relative aspect-[4/5] overflow-hidden bg-secondary/20 sm:aspect-[3/4]">
                  <Image
                    src={member.image}
                    alt={member.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 280px"
                    className="object-cover object-[center_18%] transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-2.5 sm:p-5">
                  <h3 className="font-serif text-sm leading-snug text-heading sm:text-lg">
                    {member.name}
                  </h3>
                  <p className="mt-0.5 text-[0.7rem] text-body sm:mt-1.5 sm:text-sm">
                    {member.role}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <a
          href="#promociones"
          className="mt-6 inline-flex text-sm tracking-wide text-heading underline decoration-border underline-offset-4 transition-colors hover:decoration-heading sm:mt-10"
        >
          Ver tratamientos por profesional →
        </a>
      </div>
    </section>
  );
}

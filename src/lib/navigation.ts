export type NavLink = {
  href: string;
  label: string;
};

const homeNavLinks = [
  { href: "/botox", label: "Botox" },
  { href: "/#promociones", label: "Promociones" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#contacto", label: "Contacto" },
] as const satisfies readonly NavLink[];

const botoxNavLinks = [
  { href: "/botox#indicaciones", label: "Indicaciones" },
  { href: "/botox#precio", label: "Precio" },
  { href: "/botox#sedes", label: "Sedes" },
  { href: "/botox#faq", label: "FAQ" },
] as const satisfies readonly NavLink[];

export function getPrimaryNavLinks(pathname: string): readonly NavLink[] {
  return pathname === "/botox" ? botoxNavLinks : homeNavLinks;
}

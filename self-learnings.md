# Self Learnings — next-web

Notas de aprendizaje al crear y trabajar con este proyecto Next.js.

## Qué se creó

Proyecto web **next-web** generado con `create-next-app@16.3.0`.

Stack inicial:

| Pieza | Versión / detalle |
| --- | --- |
| Next.js | 16.3.0 (App Router) |
| React | 19.2.8 |
| TypeScript | 5.x |
| Tailwind CSS | 4.x (`@tailwindcss/postcss`) |
| ESLint | `eslint-config-next` |
| Estructura | `src/` + alias `@/*` |
| Dev server | Turbopack (`next dev`) |

Ubicación: `/Users/gonzalo/next-web`

## Comando usado

```bash
npx create-next-app@latest next-web \
  --typescript \
  --tailwind \
  --eslint \
  --app \
  --src-dir \
  --import-alias "@/*" \
  --turbopack \
  --use-npm \
  --yes
```

`--yes` evita prompts interactivos y aplica defaults del CLI.

## Cómo arrancar

```bash
cd ~/next-web
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000).

Otros scripts:

- `npm run build` — build de producción
- `npm start` — servir el build
- `npm run lint` — ESLint

## Mapa mental de la estructura

```
next-web/
├── src/app/           # App Router (rutas = carpetas)
│   ├── layout.tsx     # layout raíz (HTML, fonts, CSS global)
│   ├── page.tsx       # ruta "/"
│   ├── globals.css    # estilos globales + Tailwind
│   └── favicon.ico
├── public/            # estáticos servidos en /
├── next.config.ts     # config de Next
├── tsconfig.json      # TypeScript + path alias @/*
├── postcss.config.mjs # pipeline de Tailwind v4
├── eslint.config.mjs
├── package.json
└── self-learnings.md  # este archivo
```

## Aprendizajes clave

### 1. App Router ≠ Pages Router

- En App Router, cada carpeta dentro de `src/app` puede ser una ruta.
- `page.tsx` define la UI de esa ruta.
- `layout.tsx` envuelve las páginas hijas y **no se remonta** al navegar entre rutas hermanas.
- No hace falta `react-router`: el filesystem es el router.

Ejemplo mental:

```
src/app/about/page.tsx  →  /about
src/app/blog/[slug]/page.tsx  →  /blog/mi-post
```

### 2. Server Components por defecto

- Los componentes en `app/` son **Server Components** salvo que pongas `"use client"` arriba.
- En el servidor podés hacer `async` y fetch directo en el componente.
- Interactividad (hooks, `onClick`, estado) → componente cliente (`"use client"`).
- Regla práctica: dejar todo en servidor hasta que necesites estado o eventos del browser.

### 3. `src/` y alias `@/`

Con `--src-dir`, el código vive en `src/` (más limpio: config en raíz, app en `src`).

El alias `@/*` apunta a `src/*`, así:

```ts
import { Button } from "@/components/Button";
```

en lugar de rutas relativas largas.

### 4. Tailwind CSS v4

En este scaffold, Tailwind 4 se conecta por PostCSS (`@tailwindcss/postcss`), no con el `tailwind.config.js` clásico de v3.

Estilos globales suelen empezar con algo como:

```css
@import "tailwindcss";
```

en `globals.css`. Las utilidades (`flex`, `bg-zinc-50`, etc.) se usan en `className`.

### 5. Imágenes con `next/image`

`next/image` optimiza tamaño, lazy-load y formatos. Requiere `width`/`height` (o `fill`) y, para dominios externos, configurar `images.remotePatterns` en `next.config.ts`.

### 6. Metadata

En App Router, SEO se exporta desde layouts/pages:

```ts
export const metadata = {
  title: "next-web",
  description: "Proyecto Next.js de aprendizaje",
};
```

o con `generateMetadata` si depende de params/datos.

### 7. Turbopack en desarrollo

`next dev` usa Turbopack en este setup: arranque y HMR más rápidos. Si algo raro aparece solo en dev, probar también `next build` para validar el output de producción.

### 8. Node y engines

Al instalar, npm avisó `EBADENGINE` con Node `v23.3.0` para alguna dependencia de ESLint. No bloqueó la instalación. Si aparecen rarezas de tooling, conviene Node LTS (`20` o `22`).

## Primeros pasos sugeridos

1. Editar `src/app/page.tsx` y ver el HMR.
2. Crear `src/app/about/page.tsx` para practicar rutas.
3. Extraer un componente en `src/components/` e importarlo con `@/`.
4. Probar un Server Component con `fetch` y otro Client Component con `useState`.
5. Correr `npm run build` antes de desplegar.

## Errores típicos (para no olvidar)

| Síntoma | Causa habitual | Qué hacer |
| --- | --- | --- |
| `useState` / `onClick` fallan | Componente servidor | Agregar `"use client"` |
| Import `@/...` no resuelve | Alias mal / archivo fuera de `src` | Revisar `tsconfig` paths |
| Imagen externa rota | Dominio no permitido | `images.remotePatterns` en config |
| Estilos Tailwind no aplican | Clase dinámica armada mal / CSS no importado | Evitar strings construidos; chequear `globals.css` en layout |
| Ruta 404 | Falta `page.tsx` en la carpeta | Crear el archivo de página |

## Glosario rápido

- **RSC**: React Server Component (default en App Router).
- **Client Component**: componente con `"use client"`.
- **Route Segment**: carpeta bajo `app/` que forma parte de la URL.
- **Layout**: UI compartida que persiste entre navegaciones.
- **Static vs Dynamic**: estático se puede cachear/pre-render; dinámico depende de request/datos en runtime.

## Referencias

- [Documentación Next.js](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
- [App Router](https://nextjs.org/docs/app)
- [Tailwind CSS v4](https://tailwindcss.com/docs)

---

_Última actualización: 2026-08-05 — bootstrap inicial del proyecto._

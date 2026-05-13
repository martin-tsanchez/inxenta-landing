# Contexto del proyecto — Inxenta Landing

> Leer este archivo primero en cualquier sesión nueva.
> **Última actualización:** 2026-05-13
> **Commit actual:** `3225667` — feat: aplicar redesign completo

## ¿Qué es Inxenta?

SaaS de compliance regulatorio para PyMEs argentinas bajo la Ley de Economía del Conocimiento (Ley 27.506). Automatiza el seguimiento de umbrales de facturación, exportaciones, I+D, capacitación, nómina y acreditaciones anuales.

**Usuarios objetivo:** responsables de compliance en PyMEs, consultores externos, admins de plataforma.

---

## Stack técnico

| Capa | Tecnología |
|------|-----------|
| Framework | Next.js 16.2.6 (App Router, Turbopack) |
| Estilos | Tailwind CSS v4 (CSS-first, `@theme` en `globals.css`) |
| Lenguaje | TypeScript |
| Deploy | Vercel (auto-deploy en push a `main`) |
| Waitlist backend | Supabase (stub listo, pendiente de conectar) |
| Repo | https://github.com/martin-tsanchez/inxenta-landing |
| URL live | https://inxenta-landing.vercel.app |

---

## Identidad visual

| Token | Valor | Clase Tailwind |
|-------|-------|---------------|
| Naranja (coral) | `#FF6B4A` | `bg-brand-orange`, `text-brand-orange` |
| Naranja hover | `#F25530` | `hover:bg-brand-orange-hover` |
| Negro | `#0D0D0D` | `bg-brand-black`, `text-brand-black` |
| Verde foresta | `#0F3D33` | `bg-brand-green` (sección "Para quién") |
| Fondo cream | `#F7F3EC` | `bg-cream` (fondo global del body) |
| Cream muted | `#EFE9DC` | `bg-cream-muted` (secciones alternas) |
| Texto muted | `#6B7280` | `text-fg-muted` |
| Texto faint | `#9CA3AF` | `text-fg-faint` |

- **Tipografía headings:** Playfair Display (serif) — `font-serif`, variable `--font-playfair`
- **Tipografía body/UI:** Geist Sans — `font-sans`, variable `--font-geist-sans`
- **Logo Nav:** isotipo `public/logo_inxenta.png` (640×640px) + wordmark serif CSS + tagline
- **Logo Footer:** wordmark serif blanco + dot naranja absoluto sobre la "i" (recreado en CSS)

---

## Decisiones arquitectónicas clave

- **Tailwind v4:** sin `tailwind.config.ts`. Todos los tokens van en `@theme` dentro de `app/globals.css`. No usar `tailwind.config.ts`.
- **Server vs Client components:** páginas y secciones son Server Components por defecto. Solo `Hero.tsx` y `Waitlist.tsx` son `"use client"` (tienen estado para el form de waitlist).
- **Event handlers en Server Components:** usar clases Tailwind `hover:` en vez de `onMouseEnter`/`onMouseLeave`. Los handlers JS solo van en Client Components.
- **Supabase stub:** `app/api/waitlist/route.ts` acepta `{ email, name, role, company }`. El código de inserción está comentado — activar cuando se conecte Supabase.
- **DashboardMock:** componente Server, sin dependencias externas. Usa SVGs inline y sub-componentes locales. Es un prop visual, no interactivo.
- **Icons:** SVGs inline en cada componente. No hay librería de iconos instalada.

---

## Estructura de secciones (orden en `page.tsx`)

| Componente | Tipo | Descripción |
|-----------|------|-------------|
| `Nav.tsx` | Server | Nav fija 64px — isotipo + wordmark + tagline + links + CTA |
| `Hero.tsx` | **Client** | 2 columnas: copy + DashboardMock. Form waitlist simple (email) |
| `Problem.tsx` | Server | 3 pain points, cards con borde naranja superior, bg cream-muted |
| `Features.tsx` | Server | 4 características LEC con icon tiles naranjas, bg cream |
| `ForWho.tsx` | Server | Sección oscura forest green, 3 segmentos con check circles, SVG target |
| `Waitlist.tsx` | **Client** | 2 columnas: pitch + form completo (nombre, email, cargo, empresa) |
| `Footer.tsx` | Server | Columnas Producto/Compañía/Legal + CTA card + wordmark recreado |

---

## Archivos clave

| Archivo | Rol |
|---------|-----|
| `app/globals.css` | Todos los tokens de marca via `@theme` + CSS vars en `:root` |
| `app/layout.tsx` | Fuentes (Playfair + Geist), metadata Open Graph, `lang="es"` |
| `app/page.tsx` | Composición de las 7 secciones |
| `components/Nav.tsx` | Nav con tagline y links de navegación por sección |
| `components/Hero.tsx` | Hero 2-col con DashboardMock, form waitlist (email) |
| `components/DashboardMock.tsx` | Mockup del dashboard LEC (solo visual) |
| `components/Problem.tsx` | 3 pain points |
| `components/Features.tsx` | 4 características con icon tiles |
| `components/ForWho.tsx` | Sección oscura con 3 segmentos |
| `components/Waitlist.tsx` | Form completo de waitlist con 4 campos |
| `components/Footer.tsx` | Footer con columnas y CTA |
| `app/api/waitlist/route.ts` | POST handler — acepta email + name + role + company |
| `.env.local.example` | Template de variables Supabase |

---

## Contacto

- **Email:** msanchez@inxenta.com
- **Copyright:** © 2026 Inxenta

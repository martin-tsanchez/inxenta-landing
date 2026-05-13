# Contexto del proyecto — Inxenta Landing

## ¿Qué es Inxenta?
SaaS de compliance regulatorio para PyMEs argentinas bajo la Ley de Economía del Conocimiento (Ley 27.506). Automatiza el seguimiento de umbrales de facturación, exportaciones, I+D, capacitación, nómina y acreditaciones anuales.

**Usuarios objetivo:** responsables de compliance en PyMEs, consultores externos, admins de plataforma.

## Stack técnico
- **Framework:** Next.js 16.2.6 (App Router, Turbopack)
- **Estilos:** Tailwind CSS v4 (CSS-first, configuración en `globals.css` via `@theme`)
- **Lenguaje:** TypeScript
- **Deploy:** Vercel (conectado a GitHub, auto-deploy en push a `main`)
- **Waitlist backend:** Supabase (stub listo, pendiente de conectar)
- **Repo:** https://github.com/martin-tsanchez/inxenta-landing
- **URL live:** https://inxenta-landing.vercel.app

## Identidad visual (sistema de logos)
- **Naranja principal:** `#F97316`
- **Negro:** `#0D0D0D`
- **Fondo:** `#FFFFFF`
- **Tipografía headings:** Playfair Display (serif) — variable CSS `--font-playfair`
- **Tipografía body:** Geist Sans — variable CSS `--font-geist-sans`
- **Logo en Nav:** isotipo (`/logo_inxenta.png`, 640×640px) + wordmark "inxenta" en serif CSS
- **Logo en Footer:** wordmark "inxenta" en serif blanco + dot naranja absoluto sobre la "i"

## Decisiones arquitectónicas clave
- **Tailwind v4:** sin `tailwind.config.ts`. Los tokens de marca van en `@theme` dentro de `app/globals.css`.
- **Colores Tailwind:** `bg-brand-orange`, `text-brand-orange`, `bg-brand-black` disponibles via `@theme { --color-brand-orange: #f97316; --color-brand-black: #0d0d0d; }`.
- **Fuentes:** Cargadas con `next/font/google` en `layout.tsx`, inyectadas como variables CSS en `<html>`. Referenciadas en `@theme` del CSS.
- **Form waitlist:** componente `Hero.tsx` es Client Component (`"use client"`). El POST va a `/api/waitlist` (Route Handler).
- **Supabase stub:** `app/api/waitlist/route.ts` tiene el código comentado. Las env vars van en `.env.local` (ver `.env.local.example`).
- **`logo_inxenta.png`** es el isotipo cuadrado (640×640), NO el logo horizontal. No existe archivo separado del logo horizontal — se reconstruye en CSS.

## Archivos clave
| Archivo | Rol |
|---|---|
| `app/globals.css` | Tokens de marca (colores, fuentes) vía `@theme` |
| `app/layout.tsx` | Carga de fuentes, metadata Open Graph, lang="es" |
| `app/page.tsx` | Composición de secciones |
| `components/Nav.tsx` | Nav fija, logo isotipo + wordmark CSS |
| `components/Hero.tsx` | Hero con form de waitlist (Client Component) |
| `components/Problem.tsx` | 3 pain points en cards |
| `components/ForWho.tsx` | 3 segmentos objetivo |
| `components/Footer.tsx` | Footer oscuro, wordmark recreado en CSS |
| `app/api/waitlist/route.ts` | Route Handler POST — stub Supabase comentado |
| `.env.local.example` | Template de variables de entorno para Supabase |

## Contacto del producto
- **Email:** msanchez@inxenta.com
- **Copyright:** © 2026 Inxenta

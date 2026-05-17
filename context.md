# Contexto del proyecto — Inxenta Landing

> Leer este archivo primero en cualquier sesión nueva.
> **Última actualización:** 2026-05-16
> **Estado actual:** Homepage enterprise redesign completado · tsc 0 errores · pendiente: páginas /product, /solutions, /security, /demo

---

## ¿Qué es Inxenta?

RegTech SaaS para empresas argentinas bajo la Ley de Economía del Conocimiento (Ley 27.506).
Automatiza: umbrales de facturación promovida, exportaciones, I+D, capacitación, nómina, acreditaciones anuales y DDJJ.

**ICP:** Compliance officers, consultores externos, equipos de administración.
**Posicionamiento:** "Paz operativa en el compliance" — NO features de software. Vende protección fiscal, audit readiness, control.
**Tipo de venta:** Consultiva, ciclos largos, enterprise. La web es una herramienta de ventas, no una landing de startup.

---

## Stack técnico

| Capa | Tecnología |
|------|-----------|
| Framework | Next.js 16.2.6 (App Router, Turbopack) |
| Estilos | Tailwind CSS v4 (CSS-first, `@theme` en `globals.css`) — **sin `tailwind.config.ts`** |
| Lenguaje | TypeScript |
| Motion | Motion v12 (`"motion": "^12.38.0"`) — import: `import { motion, AnimatePresence } from "motion/react"` |
| Deploy | Vercel (auto-deploy en push a `main`) |
| Waitlist backend | Supabase (stub listo en `app/api/waitlist/route.ts`, pendiente de conectar) |
| Repo | https://github.com/martin-tsanchez/inxenta-landing |
| URL live | https://inxenta-landing.vercel.app |

---

## Identidad visual

| Token | Valor | Clase Tailwind |
|-------|-------|---------------|
| Naranja (coral) | `#FF6B4A` | `bg-brand-orange`, `text-brand-orange` |
| Naranja hover | `#F25530` | `hover:bg-brand-orange-hover` |
| Naranja sutil | `#FFF7ED` | `bg-orange-subtle` (bg de icon tiles) |
| Negro | `#0D0D0D` | `bg-brand-black`, `text-brand-black` |
| Verde foresta | `#0F3D33` | `bg-brand-green` (sección ForWho) |
| Fondo cream | `#F7F3EC` | `bg-cream` (fondo global del body) |
| Cream muted | `#EFE9DC` | `bg-cream-muted` |
| Texto muted | `#6B7280` | `text-fg-muted` |
| Texto faint | `#9CA3AF` | `text-fg-faint` |

- **Tipografía headings:** Playfair Display (serif) — `font-serif`
- **Tipografía body/UI:** Geist Sans — `font-sans`
- **Dirección visual:** Enterprise SaaS — Stripe/Vanta/Drata aesthetic. Premium, minimal, alta confianza.
- **Logo Nav:** isotipo `public/logo_inxenta.png` (640×640px) + wordmark serif CSS + tagline
- **Logo Footer:** wordmark serif blanco + dot naranja absoluto sobre la "i" (CSS puro)

---

## Decisiones arquitectónicas clave

- **Tailwind v4:** sin `tailwind.config.ts`. Todos los tokens en `@theme` dentro de `app/globals.css`.
- **Motion v12:** import desde `"motion/react"` (NO `"framer-motion"`). Ease arrays deben estar tipados como `[number, number, number, number]` — ver `components/motion/variants.ts`.
- **"use client":** cualquier componente que use `motion.*`, `useState` o `useEffect`. Todos los componentes de secciones son Client Components en el redesign actual.
- **Variantes de motion compartidas:** en `components/motion/variants.ts`. Siempre importar desde ahí — no redefinir localmente.
- **Icons:** SVGs inline en cada componente. No hay librería de iconos instalada.
- **Supabase stub:** `app/api/waitlist/route.ts` acepta `{ email, name, role, company }`. El código de inserción está comentado — activar cuando se conecte Supabase.
- **Video demo:** `components/VideoDemo.tsx` tiene la constante `YOUTUBE_VIDEO_ID = ""`. Cuando el video esté listo en YouTube, pegar el ID ahí. Nada más cambia.

---

## Arquitectura de páginas (5 páginas planeadas)

| Ruta | Estado | Descripción |
|------|--------|-------------|
| `/` | ✅ Completo | Homepage enterprise redesign |
| `/product` | ⏳ Pendiente | Módulos LEC, workflow detallado, screenshots, arquitectura |
| `/solutions` | ⏳ Pendiente | 5 segmentos: Software Factory, AI Startup, IT Services, Tech Exportadora, LEC genérica |
| `/security` | ⏳ Pendiente | RBAC, audit trails, historial inmutable, permisos, trazabilidad |
| `/demo` | ⏳ Pendiente | Página de booking de demo — foco único: agendar llamada |

---

## Homepage — estructura de secciones actual (`app/page.tsx`)

| Componente | Tipo | Descripción |
|-----------|------|-------------|
| `Nav.tsx` | Server | Nav fija · logo · links (#workflow, #for-who, #faq) · CTA "Agendar demo" naranja |
| `Hero.tsx` | Client | 2 cols: copy enterprise + ComplianceMock · 2 CTAs (demo + producto) · stagger motion |
| `Problem.tsx` | Client | Before/After: caos sin Inxenta vs. control con Inxenta · slideInLeft/Right |
| `Workflow.tsx` | Client | 6 pasos del compliance LEC · icon tiles naranjas · stagger grid |
| `ROI.tsx` | Client | Sección dark · 3 métricas grandes ($30M+, 10+ hs, 0 sorpresas) |
| `VideoDemo.tsx` | Client | Placeholder YouTube · activar con `YOUTUBE_VIDEO_ID` |
| `ForWho.tsx` | Client | Sección forest green · 3 segmentos · motion agregado · CTA "Ver soluciones" |
| `DemoCTA.tsx` | Client | Sección dark final · headline serif · 3 bullets · CTA naranja |
| `FAQ.tsx` | Client | 6 preguntas accordion · AnimatePresence |
| `Footer.tsx` | Server | Columnas Plataforma/Compañía/Legal + CTA card + wordmark |

**Componentes legacy (no eliminados, no usados en page.tsx):**
- `components/DashboardMock.tsx` — reemplazado por `ComplianceMock.tsx`
- `components/Features.tsx` — contenido absorbido por Workflow y páginas futuras
- `components/Waitlist.tsx` — reemplazado por DemoCTA + form en página /demo

---

## Archivos clave

| Archivo | Rol |
|---------|-----|
| `app/globals.css` | Tokens de marca vía `@theme` + CSS vars en `:root` |
| `app/layout.tsx` | Fuentes (Playfair + Geist), metadata Open Graph, `lang="es"` |
| `app/page.tsx` | Composición de las 10 secciones del homepage |
| `components/motion/variants.ts` | Variantes de motion compartidas (fadeUp, staggerContainer, etc.) |
| `components/ComplianceMock.tsx` | Panel de compliance operativo (visual del hero) |
| `components/VideoDemo.tsx` | Placeholder YouTube — cambiar `YOUTUBE_VIDEO_ID` cuando esté listo |
| `app/api/waitlist/route.ts` | POST handler — acepta email + name + role + company |
| `.env.local.example` | Template de variables Supabase |

---

## Pendientes de configuración (no código)

1. **Conectar Supabase:** ver `plan.md` — tabla `waitlist`, SDK, variables de entorno en Vercel.
2. **Video demo:** pegar YouTube ID en `components/VideoDemo.tsx` cuando esté disponible.
3. **Dominio `inxenta.com`:** configurar DNS en Vercel (ver `plan.md`).
4. **Assets visuales:** `og-image.png` (1200×630) y `favicon.ico` definitivo.

---

## Contacto

- **Email:** msanchez@inxenta.com
- **Copyright:** © 2026 Inxenta

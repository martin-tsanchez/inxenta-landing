# Estado de tareas — Inxenta Landing

> **Última actualización:** 2026-05-13
> **CI:** build exitoso (`npm run build` — 0 errores TypeScript, 0 errores de compilación)
> **Deploy:** https://inxenta-landing.vercel.app

---

## Completado

### Setup inicial
- [x] Crear proyecto Next.js 16 + Tailwind v4 + TypeScript
- [x] Configurar `layout.tsx` (fuentes Playfair Display + Geist, metadata OG, `lang="es"`)
- [x] Copiar isotipo (`logo_inxenta.png`) a `public/`
- [x] Push a GitHub (`martin-tsanchez/inxenta-landing`) + deploy en Vercel

### Diseño y componentes (redesign completo — commit `3225667`)
- [x] `globals.css` — sistema de tokens completo: cream `#F7F3EC`, coral `#FF6B4A`, forest green `#0F3D33`, clases `bg-cream`, `bg-cream-muted`, `bg-brand-green`, `hover:bg-brand-orange-hover`
- [x] `Nav.tsx` — isotipo + wordmark serif + tagline "Compliance que *genera* valor" + 3 links de navegación + CTA dark
- [x] `Hero.tsx` — layout 2 columnas (copy + DashboardMock), headline con *ahora.* en cursiva naranja, form waitlist (email)
- [x] `DashboardMock.tsx` — mockup del dashboard LEC con sidebar, métricas, donut LEC, vencimientos, tareas
- [x] `Problem.tsx` — 3 pain points, bg actualizado a cream-muted
- [x] `Features.tsx` — 4 características LEC con icon tiles naranjas
- [x] `ForWho.tsx` — sección oscura forest green, 3 segmentos con check circles, decoración SVG target
- [x] `Waitlist.tsx` — form completo 4 campos (nombre, email, cargo, empresa) con pitch y 3 beneficios
- [x] `Footer.tsx` — columnas Producto/Compañía/Legal + CTA card + wordmark recreado en CSS
- [x] `app/page.tsx` — composición: Nav → Hero → Problem → Features → ForWho → Waitlist → Footer
- [x] `app/api/waitlist/route.ts` — acepta `{ email, name, role, company }`

---

## Pendiente

- [ ] **Conectar Supabase waitlist** ← próxima sesión
  - Crear proyecto en supabase.com
  - Crear tabla `waitlist` con columnas: `id`, `email`, `name`, `role`, `company`, `created_at`
  - Completar `.env.local` + Vercel env vars
  - `npm install @supabase/supabase-js`
  - Descomentar bloque Supabase en `app/api/waitlist/route.ts`
  - Testear flujo completo

- [ ] **Conectar dominio `inxenta.com`**
  - Vercel → Settings → Domains → `inxenta.com` + `www.inxenta.com`
  - DNS: registro `A` `@` → `76.76.21.21` / `CNAME` `www` → `cname.vercel-dns.com`

- [ ] **Assets visuales**
  - OG image `public/og-image.png` (1200×630px) + configurar en `layout.tsx`
  - Favicon personalizado (isotipo de Inxenta)

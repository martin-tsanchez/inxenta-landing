# Estado de tareas — Inxenta Landing

## Completado

- [x] Crear proyecto Next.js 16 + Tailwind v4 + TypeScript
- [x] Configurar `globals.css` con tokens de marca (`@theme`)
- [x] Configurar `layout.tsx` (fuentes Playfair Display + Geist, metadata, lang="es")
- [x] Copiar isotipo (`logo_inxenta.png`) a `public/`
- [x] Construir `Nav.tsx` — logo isotipo + wordmark serif + botón "Sumarme"
- [x] Construir `Hero.tsx` — headline serif, form waitlist, CTA, microcopy (Client Component)
- [x] Construir `Problem.tsx` — 3 pain points con borde naranja superior
- [x] Construir `ForWho.tsx` — 3 segmentos con accent bar naranja
- [x] Construir `Footer.tsx` — fondo oscuro, wordmark CSS con dot naranja, email, copyright
- [x] Crear `app/api/waitlist/route.ts` — Route Handler POST con stub Supabase comentado
- [x] Crear `.env.local.example` con variables de Supabase
- [x] Push inicial a GitHub (`martin-tsanchez/inxenta-landing`)
- [x] Deploy en Vercel (auto-conectado al repo, build exitoso)
- [x] Fix logo Nav: isotipo cuadrado + wordmark CSS (commit `7cc4cf4`)

## Pendiente

- [ ] **Conectar Supabase waitlist**
  - Crear proyecto en supabase.com
  - Crear tabla: `waitlist (id uuid default gen_random_uuid(), email text unique not null, created_at timestamptz default now())`
  - Agregar credenciales a `.env.local` (y en Vercel → Settings → Environment Variables)
  - Descomentar código en `app/api/waitlist/route.ts`
  - Testear flujo completo: submit email → fila en Supabase

- [ ] **Conectar dominio `inxenta.com`**
  - Vercel dashboard → proyecto `inxenta-landing` → Settings → Domains
  - Agregar `inxenta.com` y `www.inxenta.com`
  - Configurar DNS en el registrar:
    - Registro `A`: `@` → `76.76.21.21`
    - Registro `CNAME`: `www` → `cname.vercel-dns.com`

- [ ] **Mejoras visuales opcionales (post-lanzamiento)**
  - Obtener PNG del logo horizontal oficial (isotipo + wordmark en un solo archivo)
  - Reemplazar la versión CSS por el archivo real en Nav
  - Agregar OG image (para preview en redes sociales)
  - Agregar favicon personalizado (actualmente usa el default de Next.js)

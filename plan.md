# Plan — Próximas sesiones

> Al iniciar una sesión: leer `context.md` → `task.md` → este archivo.

---

## Próxima sesión prioritaria: Conectar Supabase

### Paso 1 — Crear proyecto en supabase.com y la tabla

En el SQL Editor, correr:

```sql
create table waitlist (
  id          uuid        default gen_random_uuid() primary key,
  email       text        unique not null,
  name        text,
  role        text,
  company     text,
  created_at  timestamptz default now()
);

alter table waitlist enable row level security;
```

> La API ya envía `{ email, name, role, company }` — la tabla tiene que tener esas columnas.

### Paso 2 — Variables de entorno

Copiar `.env.local.example` a `.env.local` y completar:

```
NEXT_PUBLIC_SUPABASE_URL=https://<proyecto>.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=<anon-key>
SUPABASE_SERVICE_ROLE_KEY=<service-role-key>
```

Agregar las mismas en Vercel → Settings → Environment Variables (producción).

### Paso 3 — Activar la lógica en la API

```bash
npm install @supabase/supabase-js
```

En `app/api/waitlist/route.ts`: descomentar el bloque de Supabase y eliminar los `void name; void role; void company;` del final.

### Paso 4 — Testear

- `npm run dev`
- Completar el form de waitlist
- Verificar que aparece la fila en la tabla `waitlist` de Supabase

---

## Sesión futura: Conectar dominio inxenta.com

1. Vercel → proyecto `inxenta-landing` → Settings → Domains → agregar `inxenta.com`
2. Configurar DNS en el registrar:
   - Registro `A`: `@` → `76.76.21.21`
   - Registro `CNAME`: `www` → `cname.vercel-dns.com`
3. Esperar propagación (~15 min a 48 hs)

---

## Sesión futura: Assets visuales pendientes

- Agregar `public/og-image.png` (1200×630px) y configurarlo en `app/layout.tsx` → `openGraph.images`
- Reemplazar `app/favicon.ico` con el isotipo de Inxenta
- Evaluar reemplazar el wordmark CSS del Nav por un PNG horizontal oficial si se consigue el archivo

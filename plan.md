# Plan — Próximas sesiones

## Próxima sesión prioritaria: Conectar Supabase

### Paso 1 — Crear tabla en Supabase
En el SQL Editor de supabase.com, correr:
```sql
create table waitlist (
  id uuid default gen_random_uuid() primary key,
  email text unique not null,
  created_at timestamptz default now()
);

-- Habilitar RLS y permitir insert desde service role
alter table waitlist enable row level security;
```

### Paso 2 — Variables de entorno
Copiar `.env.local.example` a `.env.local` y completar:
```
NEXT_PUBLIC_SUPABASE_URL=https://<proyecto>.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=<anon-key>
SUPABASE_SERVICE_ROLE_KEY=<service-role-key>
```
Agregar las mismas variables en Vercel → Settings → Environment Variables (para producción).

### Paso 3 — Instalar SDK y activar la lógica
```bash
npm install @supabase/supabase-js
```
Luego descomentar el código en `app/api/waitlist/route.ts`.

### Paso 4 — Testear
- Correr `npm run dev`
- Ingresar email en el form
- Verificar que aparece la fila en la tabla `waitlist` de Supabase

---

## Sesión futura: Dominio inxenta.com
1. Vercel → Settings → Domains → agregar `inxenta.com`
2. Configurar DNS en el registrar según los valores que da Vercel
3. Esperar propagación (~15 min a 48 hs según el registrar)

---

## Sesión futura: Mejoras visuales
- Conseguir el PNG del logo horizontal (con isotipo + wordmark en un solo archivo transparente)
- Reemplazar la reconstrucción CSS del Nav por la imagen oficial
- Agregar `public/og-image.png` (1200×630px) y configurarlo en el metadata de `layout.tsx`
- Reemplazar `app/favicon.ico` con el isotipo de Inxenta

---

## Cómo retomar esta sesión
Al inicio de la próxima sesión, leer:
- `context.md` → stack, decisiones, archivos clave
- `task.md` → qué está hecho, qué falta
- `plan.md` → este archivo, pasos concretos a seguir

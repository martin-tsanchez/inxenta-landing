# Tasks — Inxenta Landing Page

> **Leer antes de ejecutar:** `context.md` → este archivo → `plan.md`
> **Última actualización:** 2026-05-16
> **Verificación:** `npx tsc --noEmit` → 0 errores ✅

---

## Estado global

| Fase | Descripción | Estado |
|------|-------------|--------|
| Homepage redesign | 10 secciones, Motion v12, enterprise SaaS | ✅ Completo |
| Páginas adicionales | /product, /solutions, /security, /demo | ⏳ Pendiente |
| Supabase integration | Tabla waitlist, SDK, env vars | ⏳ Pendiente |
| Video demo | Placeholder listo — agregar YouTube ID | ⏳ Pendiente (esperar video) |
| Dominio inxenta.com | DNS en Vercel | ⏳ Pendiente |
| Assets visuales | og-image.png, favicon definitivo | ⏳ Pendiente |

---

## FASE 1 — Homepage redesign

### ✅ Completado (2026-05-16)

- [x] `components/motion/variants.ts` — variantes compartidas (fadeUp, staggerContainer, slideInLeft/Right, scaleIn, viewport)
- [x] `app/globals.css` — token `bg-orange-subtle` agregado
- [x] `components/Nav.tsx` — reescrito: links (#workflow, #for-who, #faq), CTA naranja, backdrop-blur
- [x] `components/Hero.tsx` — reescrito: copy enterprise, 2 CTAs, sin form email, usa ComplianceMock
- [x] `components/ComplianceMock.tsx` — nuevo: panel de compliance operativo con float animation
- [x] `components/Problem.tsx` — reescrito: Before/After layout con motion
- [x] `components/Workflow.tsx` — nuevo: 6 pasos del compliance LEC con icon tiles
- [x] `components/ROI.tsx` — nuevo: sección dark con 3 métricas de impacto económico
- [x] `components/VideoDemo.tsx` — nuevo: placeholder YouTube (activar con `YOUTUBE_VIDEO_ID`)
- [x] `components/DemoCTA.tsx` — nuevo: sección convergencia final dark
- [x] `components/FAQ.tsx` — nuevo: 6 preguntas accordion con AnimatePresence
- [x] `components/ForWho.tsx` — refinado: motion + CTA "Ver soluciones"
- [x] `components/Footer.tsx` — actualizado: links con href, columna "Plataforma"
- [x] `app/page.tsx` — reescrito: nuevo orden de 10 secciones

---

## FASE 2 — Páginas adicionales

### Paso 2: `/demo` — Demo booking page
**Prioridad:** Alta (más urgente para conversiones)

**Estructura:**
- `app/demo/page.tsx` + layout si necesario
- Secciones:
  - Hero: "Reservá tu demo privada" + contexto breve
  - Qué se muestra en la demo (bullets)
  - Duración + formato (30 min, 1:1, sin compromiso)
  - ICP: a quién está dirigido
  - Formulario de booking (nombre, email, empresa, cargo, mensaje opcional)
    - Envía a `/api/waitlist` existente hasta tener Calendly/Cal.com
  - Expectativas: qué pasa después de la demo
- Referencia visual: mismo estilo que DemoCTA.tsx pero expandido en página completa

---

### Paso 3: `/product` — Product page
**Prioridad:** Media

**Estructura:**
- Hero de página: "El sistema operativo del compliance LEC"
- Módulos del producto (6): Facturación, Exportaciones, Capacitación, I+D, Acreditación, DDJJ
  - Cada módulo: nombre, descripción, features clave, screenshot/mock
- Workflow detallado (expandido del homepage)
- Arquitectura del sistema (visual de alto nivel)
- CTA final → /demo

---

### Paso 4: `/solutions` — Solutions page
**Prioridad:** Media

**5 segmentos** (cada uno con pain points específicos + cómo resuelve Inxenta):
1. Software Factories
2. AI Startups
3. IT Services
4. Empresas exportadoras de tecnología
5. Empresas LEC en general (compliance officer)

**Estructura por segmento:**
- Hero con copy específico para el segmento
- Pain points puntuales
- Cómo Inxenta resuelve cada uno
- CTA → /demo

---

### Paso 5: `/security` — Security & Auditability page
**Prioridad:** Media-alta (crítico para credibilidad enterprise)

**Contenido:**
- RBAC: roles y permisos (Admin, Compliance Officer, Consultor, Read-only)
- Audit trails: historial inmutable de cada acción
- Trazabilidad: timestamps, usuario, versión anterior
- Integridad documental: sin edición retroactiva
- Backups y disponibilidad
- Datos en Argentina (hosting)
- Cifrado en tránsito y reposo

---

## FASE 3 — Integraciones y configuración

### Conectar Supabase (waitlist)
Ver instrucciones completas en `plan.md`.
1. Crear tabla `waitlist` en Supabase
2. `npm install @supabase/supabase-js`
3. Descomentar lógica en `app/api/waitlist/route.ts`
4. Agregar env vars en Vercel

### Dominio inxenta.com
Ver instrucciones en `plan.md`.

### Assets visuales
- `public/og-image.png` (1200×630px) — para Open Graph
- `app/favicon.ico` — reemplazar con isotipo oficial

### Video demo
- Cuando el video esté en YouTube: abrir `components/VideoDemo.tsx` y setear `YOUTUBE_VIDEO_ID = "id-del-video"`

---

## Notas técnicas para próximas sesiones

- **Motion:** siempre importar desde `"motion/react"`, nunca `"framer-motion"`
- **Ease arrays:** deben estar tipados como `[number, number, number, number]` — ver `variants.ts`
- **Variantes:** importar de `@/components/motion/variants`, no redefinir localmente
- **Tailwind v4:** sin `tailwind.config.ts` — nuevos tokens van en `@theme` de `globals.css`
- **"use client":** requerido en cualquier componente con motion.* o hooks
- **Verificación:** correr `npx tsc --noEmit` al finalizar cada sesión

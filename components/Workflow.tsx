"use client";

import { motion } from "motion/react";
import { fadeUp, staggerContainer, viewport } from "@/components/motion/variants";

const steps = [
  {
    number: "01",
    title: "Carga de documentos",
    body: "Subí facturas AFIP, archivos XML, Excel y certificados directamente a la plataforma.",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 14v3a1 1 0 001 1h10a1 1 0 001-1v-3M10 3v10M6 7l4-4 4 4" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Extracción de datos",
    body: "OCR inteligente procesa cada documento y extrae los campos relevantes para el compliance LEC.",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 7V5a2 2 0 012-2h2M13 3h2a2 2 0 012 2v2M3 13v2a2 2 0 002 2h2M13 17h2a2 2 0 002-2v-2M7 10h6" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Clasificación LEC",
    body: "Los datos se mapean automáticamente a las categorías de la Ley 27.506 con precisión auditada.",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M10 2L2 7l8 5 8-5-8-5zM2 12l8 5 8-5M2 17l8 5 8-5" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Motor de validación",
    body: "Inxenta detecta inconsistencias, umbrales en riesgo y alertas antes de que se conviertan en problemas.",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M10 1L3 4.5v5c0 4.1 3 7.9 7 9 4-1.1 7-4.9 7-9v-5L10 1z" />
        <path d="M6.5 10l2.5 2.5 5-5" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Registro de auditoría",
    body: "Cada acción queda registrada con timestamp, usuario y versión. Historial inmutable e inalterable.",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="10" cy="10" r="8" />
        <path d="M10 6v4.5l3 2" />
      </svg>
    ),
  },
  {
    number: "06",
    title: "Reportes auditables",
    body: "Exportá documentación estructurada y lista para presentar ante cualquier auditoría de la LEC.",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M13 2H5a1 1 0 00-1 1v14a1 1 0 001 1h10a1 1 0 001-1V6l-3-4z" />
        <path d="M13 2v4h4M7 10h6M7 13h4" />
      </svg>
    ),
  },
];

export default function Workflow() {
  return (
    <section id="workflow" className="bg-cream py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="text-center mb-16"
        >
          <p className="text-brand-orange text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            Cómo funciona
          </p>
          <h2
            className="font-serif text-brand-black font-bold leading-tight"
            style={{ fontSize: "clamp(1.75rem, 2.5vw + 1rem, 2.75rem)" }}
          >
            De los datos al cumplimiento, en seis pasos.
          </h2>
          <p className="text-fg-muted text-base mt-4 max-w-xl mx-auto">
            Un flujo de trabajo diseñado para eliminar la incertidumbre regulatoria.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {steps.map((step) => (
            <motion.div
              key={step.number}
              variants={fadeUp}
              className="bg-white rounded-2xl p-7"
              style={{ border: "1px solid var(--color-border-strong)" }}
            >
              {/* Top row: number + icon */}
              <div className="flex items-start justify-between">
                <span className="font-serif text-3xl font-bold text-brand-orange leading-none">
                  {step.number}
                </span>
                <div
                  className="bg-orange-subtle rounded-xl text-brand-orange flex items-center justify-center shrink-0"
                  style={{ width: 44, height: 44 }}
                >
                  {step.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="font-sans text-sm font-semibold text-brand-black mt-5 mb-2">
                {step.title}
              </h3>

              {/* Body */}
              <p className="text-fg-muted text-[13px] leading-relaxed">
                {step.body}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

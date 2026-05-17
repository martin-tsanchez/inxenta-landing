"use client";

import { motion } from "motion/react";
import {
  fadeUp,
  slideInLeft,
  slideInRight,
  viewport,
} from "@/components/motion/variants";

const painPoints = [
  "Planillas de Excel desactualizadas y dispersas",
  "Documentos fragmentados entre correos y carpetas",
  "Auditorías manuales sin trazabilidad ni historial",
  "Alertas que llegan tarde — o que no llegan",
  "Días de trabajo para preparar cada DDJJ",
  "Riesgo constante de perder beneficios impositivos",
];

const solutions = [
  "Umbrales actualizados en tiempo real, sin planillas",
  "Documentación centralizada, auditada y trazable",
  "Historial inmutable de cada cambio y validación",
  "Alertas proactivas antes de que el riesgo escale",
  "DDJJ precompleta en minutos con datos del sistema",
  "Beneficios impositivos protegidos durante todo el año",
];

function XIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 mt-0.5"
    >
      <path
        d="M1.5 1.5L10.5 10.5M10.5 1.5L1.5 10.5"
        stroke="#ef4444"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 mt-0.5"
    >
      <path
        d="M1.5 6.5L4.5 9.5L10.5 2.5"
        stroke="#ff6b4a"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Problem() {
  return (
    <section className="bg-cream-muted py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Eyebrow */}
        <motion.p
          className="text-center text-brand-orange text-xs font-semibold uppercase tracking-[0.2em] mb-4"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          El problema
        </motion.p>

        {/* Title */}
        <motion.h2
          className="text-center font-serif text-brand-black mb-4"
          style={{
            fontSize: "clamp(1.75rem, 2.5vw + 1rem, 2.75rem)",
            lineHeight: 1.2,
          }}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          Así se ve el compliance sin Inxenta.
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="text-center text-fg-muted max-w-2xl mx-auto text-base leading-relaxed"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          La mayoría de las empresas LEC gestionan el compliance con planillas,
          correos y recordatorios manuales. El resultado es predecible.
        </motion.p>

        {/* Before / After grid */}
        <div className="grid md:grid-cols-2 gap-6 mt-14">
          {/* LEFT — Before */}
          <motion.div
            className="bg-white rounded-2xl p-8 border-t-2"
            style={{ borderColor: "#ef4444" }}
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {/* Card header */}
            <div className="flex items-center gap-2 mb-4">
              <XIcon />
              <span
                className="text-xs font-semibold uppercase tracking-[0.15em]"
                style={{ color: "#ef4444" }}
              >
                Sin Inxenta
              </span>
            </div>

            <h3 className="text-sm font-semibold text-brand-black mb-5">
              El día a día del compliance
            </h3>

            <ul className="space-y-3">
              {painPoints.map((point) => (
                <li key={point} className="flex items-start gap-2.5">
                  <XIcon />
                  <span className="text-sm text-fg-muted leading-snug">
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            <p
              className="mt-6 text-sm italic leading-snug"
              style={{ color: "#dc2626" }}
            >
              Una sola omisión puede comprometer el beneficio impositivo del año
              completo.
            </p>
          </motion.div>

          {/* RIGHT — After */}
          <motion.div
            className="bg-white rounded-2xl p-8 border-t-2"
            style={{ borderColor: "#22c55e" }}
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {/* Card header */}
            <div className="flex items-center gap-2 mb-4">
              <CheckIcon />
              <span
                className="text-xs font-semibold uppercase tracking-[0.15em]"
                style={{ color: "#16a34a" }}
              >
                Con Inxenta
              </span>
            </div>

            <h3 className="text-sm font-semibold text-brand-black mb-5">
              Control total, sin fricción
            </h3>

            <ul className="space-y-3">
              {solutions.map((solution) => (
                <li key={solution} className="flex items-start gap-2.5">
                  <CheckIcon />
                  <span className="text-sm text-fg-muted leading-snug">
                    {solution}
                  </span>
                </li>
              ))}
            </ul>

            <p
              className="mt-6 text-sm italic leading-snug"
              style={{ color: "#15803d" }}
            >
              Inxenta convierte el compliance en un proceso predecible y
              auditado.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

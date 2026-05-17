"use client";

import { motion } from "motion/react";
import { fadeUp, staggerContainer, viewport } from "@/components/motion/variants";

const metrics = [
  {
    label: "ARS",
    number: "$30M+",
    description:
      "en beneficios impositivos en riesgo por un único error de clasificación",
  },
  {
    label: "hs/semana",
    number: "10+",
    description:
      "ahorradas de trabajo manual repetitivo en seguimiento y preparación de reportes",
  },
  {
    label: "sorpresas",
    number: "0",
    description:
      "en cada auditoría gracias a la trazabilidad completa y el historial inmutable",
  },
];

export default function ROI() {
  return (
    <section className="bg-brand-black py-24 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          className="text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <p
            className="text-brand-orange text-xs font-semibold uppercase mb-5"
            style={{ letterSpacing: "0.2em" }}
          >
            Impacto económico
          </p>
          <h2
            className="font-serif text-white leading-snug tracking-tight"
            style={{ fontSize: "clamp(1.75rem, 2.5vw + 1rem, 2.75rem)" }}
          >
            El costo real de no tener control.
          </h2>
          <p
            className="text-base max-w-2xl mx-auto leading-relaxed mt-4"
            style={{ color: "#9ca3af" }}
          >
            Un error administrativo en el compliance LEC no es un problema
            operativo. Es un riesgo fiscal que puede comprometer años de
            beneficios impositivos.
          </p>
        </motion.div>

        {/* Metrics grid */}
        <motion.div
          className="mt-14 bg-white/5 rounded-2xl grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {metrics.map((metric) => (
            <motion.div
              key={metric.label}
              className="px-10 py-10 text-center"
              variants={fadeUp}
            >
              <p className="text-brand-orange text-xs font-semibold uppercase tracking-widest mb-1">
                {metric.label}
              </p>
              <p
                className="font-serif text-white leading-none"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
              >
                {metric.number}
              </p>
              <p
                className="text-sm leading-relaxed mt-3"
                style={{ color: "#9ca3af" }}
              >
                {metric.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-14 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <p className="text-white text-lg font-medium mb-6">
            No esperés a una auditoría para descubrir los riesgos.
          </p>
          <a
            href="#demo-cta"
            className="inline-block bg-brand-orange hover:bg-brand-orange-hover text-white px-8 py-3.5 rounded-lg text-sm font-medium transition-colors"
          >
            Agendá una demo →
          </a>
        </motion.div>

      </div>
    </section>
  );
}

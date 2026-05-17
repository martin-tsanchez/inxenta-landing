"use client";

import { motion } from "motion/react";
import { fadeUp, staggerContainer, viewport } from "@/components/motion/variants";

const CheckIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    stroke="#ff6b4a"
    strokeWidth="1.5"
    aria-hidden
  >
    <circle cx="8" cy="8" r="7" />
    <path d="M5 8l2.5 2.5 4-4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const bullets = [
  "El flujo completo de compliance LEC",
  "Trazabilidad y auditoría en tiempo real",
  "Configuración para tu empresa",
];

export default function DemoCTA() {
  return (
    <section id="demo-cta" className="bg-brand-black py-28 px-6">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        {/* Eyebrow */}
        <motion.p
          variants={fadeUp}
          className="text-brand-orange text-xs font-semibold uppercase tracking-[0.2em] mb-5"
        >
          Demo privada
        </motion.p>

        {/* Title */}
        <motion.h2
          variants={fadeUp}
          className="font-serif text-[clamp(2rem,3.5vw+1rem,3.5rem)] leading-snug tracking-tight text-white mb-5"
        >
          Agendá una demo privada.
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          className="text-lg leading-relaxed max-w-2xl mx-auto mb-10"
          style={{ color: "#9ca3af" }}
        >
          Te mostramos cómo centralizar tu compliance y eliminar el caos
          operativo en menos de 30 minutos.
        </motion.p>

        {/* Bullets */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12"
        >
          {bullets.map((text) => (
            <div key={text} className="flex items-center gap-2">
              <CheckIcon />
              <span className="text-sm text-white/80">{text}</span>
            </div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div variants={fadeUp}>
          <a
            href="#waitlist"
            className="inline-block bg-brand-orange hover:bg-brand-orange-hover text-white px-10 py-4 rounded-xl text-base font-medium transition-colors"
          >
            Agendar demo ahora →
          </a>

          {/* Fine print */}
          <p className="text-fg-faint text-xs mt-5">
            Sin compromiso · Respuesta en menos de 24 hs
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}

"use client";

import { motion } from "motion/react";
import ComplianceMock from "./ComplianceMock";
import {
  fadeUp,
  staggerContainer,
  scaleIn,
  viewport,
} from "@/components/motion/variants";

export default function Hero() {
  return (
    <section className="bg-cream pt-16 py-20 md:py-32 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        {/* Left — copy */}
        <motion.div
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
            LEC Compliance Platform
          </motion.p>

          {/* H1 */}
          <motion.h1
            variants={fadeUp}
            className="font-serif text-[clamp(2.4rem,4.5vw+0.5rem,3.75rem)] text-brand-black leading-[1.05] tracking-tight mb-6 max-w-[520px]"
          >
            La infraestructura que protege los beneficios impositivos de tu empresa.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeUp}
            className="text-fg-muted text-lg leading-relaxed mb-10 max-w-[480px]"
          >
            Centralizá el compliance, automatizá las validaciones y llegá a cada
            auditoría con trazabilidad completa.
          </motion.p>

          {/* CTA row */}
          <motion.div variants={fadeUp} className="flex gap-4 flex-wrap">
            <a
              href="#demo-cta"
              className="bg-brand-orange hover:bg-brand-orange-hover text-white px-7 py-3.5 rounded-lg text-sm font-medium transition-colors"
            >
              Agendar demo →
            </a>
            <a
              href="#workflow"
              className="border border-brand-black/20 text-brand-black hover:bg-brand-black/5 px-7 py-3.5 rounded-lg text-sm font-medium transition-colors"
            >
              Ver el producto
            </a>
          </motion.div>

          {/* Trust line */}
          <motion.p
            variants={fadeUp}
            className="text-fg-faint text-xs mt-10 flex items-center gap-1.5"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              aria-hidden
            >
              <rect x="2" y="5" width="8" height="6" rx="1" />
              <path d="M4 5V3.5a2 2 0 014 0V5" />
            </svg>
            Diseñado para la Ley 27.506 · Trazabilidad completa · Datos en Argentina
          </motion.p>
        </motion.div>

        {/* Right — compliance mock (hidden on mobile) */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="hidden lg:flex justify-end items-center relative"
        >
          <ComplianceMock />
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { fadeUp, staggerContainer, viewport } from "@/components/motion/variants";

const faqData = [
  {
    q: "¿Necesito reemplazar mi ERP o sistema actual?",
    a: "No. Inxenta se integra con tu operación actual sin reemplazar ningún sistema. Importamos datos desde AFIP, Excel y documentos existentes. Tu equipo sigue usando las herramientas que ya conoce.",
  },
  {
    q: "¿Se integra con AFIP?",
    a: "Sí. Inxenta procesa archivos XML y PDFs de facturas AFIP directamente. El parser extrae y clasifica la información relevante para el compliance LEC de forma automática.",
  },
  {
    q: "¿Cómo se protegen los datos sensibles de mi empresa?",
    a: "Todos los datos se almacenan en servidores con cifrado en tránsito y en reposo. El acceso está controlado por roles (RBAC) y cada acción queda registrada en el historial de auditoría inmutable.",
  },
  {
    q: "¿Cómo funciona la trazabilidad de auditorías?",
    a: "Cada cambio, validación y clasificación queda registrado con timestamp, usuario y versión anterior. El historial es inmutable — no se puede editar ni eliminar. Esto te permite responder cualquier consulta de auditoría en segundos.",
  },
  {
    q: "¿Quién puede acceder a la información de mi empresa?",
    a: "El acceso se gestiona por roles: admin, compliance officer, consultor externo y solo lectura. Cada rol tiene permisos específicos. Los consultores externos solo ven lo que vos les habilitás.",
  },
  {
    q: "¿Cuánto tarda la implementación?",
    a: "Una empresa típica está operativa en menos de una semana. El proceso incluye configuración inicial, importación de datos históricos y capacitación del equipo. Nuestro equipo te acompaña en cada paso.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function handleToggle(index: number) {
    setOpenIndex((prev) => (prev === index ? null : index));
  }

  return (
    <section id="faq" className="bg-cream py-24 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.p
            variants={fadeUp}
            className="text-brand-orange text-xs font-semibold uppercase tracking-[0.2em] mb-5 text-center"
          >
            FAQ
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-serif text-[clamp(1.75rem,2.5vw+1rem,2.5rem)] text-brand-black text-center mb-14"
          >
            Preguntas frecuentes
          </motion.h2>
        </motion.div>

        {/* Accordion list */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                variants={fadeUp}
                className="bg-white rounded-xl overflow-hidden mt-3 first:mt-0"
                style={{ border: "1px solid var(--color-border-strong)" }}
              >
                {/* Trigger */}
                <button
                  onClick={() => handleToggle(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-semibold text-brand-black pr-4">
                    {item.q}
                  </span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className={`shrink-0 transition-transform duration-300 text-fg-muted ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden
                  >
                    <path
                      d="M5 7.5l7 7 7-7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                {/* Answer panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.3,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      }}
                      style={{ overflow: "hidden" }}
                    >
                      <p className="px-6 pb-5 pt-0 text-fg-muted text-sm leading-relaxed">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

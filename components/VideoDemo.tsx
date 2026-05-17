"use client";

import { motion } from "motion/react";
import { fadeUp, scaleIn, viewport } from "@/components/motion/variants";

// ─── CONFIG ───────────────────────────────────────────────────────────────────
// When the demo video is ready, paste the YouTube video ID here.
// Example: const YOUTUBE_VIDEO_ID = "dQw4w9WgXcQ"
// Leave as empty string to show the "Coming soon" placeholder.
const YOUTUBE_VIDEO_ID = "";
// ──────────────────────────────────────────────────────────────────────────────

export default function VideoDemo() {
  return (
    <section id="demo-video" className="py-24 px-6 bg-cream">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
          className="text-center mb-12"
        >
          <p className="text-brand-orange text-xs font-semibold uppercase tracking-[0.2em] mb-5">
            Demo del producto
          </p>
          <h2 className="font-serif text-[clamp(1.75rem,2.5vw+1rem,2.75rem)] text-brand-black leading-snug tracking-tight">
            Inxenta en acción
          </h2>
          <p className="text-fg-muted text-base mt-4 max-w-xl mx-auto leading-relaxed">
            Una plataforma diseñada para simplificar el compliance de la LEC de
            principio a fin.
          </p>
        </motion.div>

        {/* Video frame */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={scaleIn}
          className="relative rounded-2xl overflow-hidden"
          style={{
            aspectRatio: "16 / 9",
            background: "#0d0d0d",
            boxShadow:
              "0 40px 80px -20px rgba(13,13,13,0.35), 0 0 0 1px rgba(255,255,255,0.06)",
          }}
        >
          {YOUTUBE_VIDEO_ID ? (
            <iframe
              src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?rel=0&modestbranding=1&color=white`}
              title="Demo de Inxenta"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full border-0"
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-6">
              {/* Decorative grid */}
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
                  backgroundSize: "48px 48px",
                }}
                aria-hidden="true"
              />

              {/* Play button */}
              <div className="relative">
                <div
                  className="w-20 h-20 rounded-full bg-brand-orange flex items-center justify-center"
                  style={{ boxShadow: "0 0 0 16px rgba(255,107,74,0.12)" }}
                >
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="white"
                    aria-hidden="true"
                    className="translate-x-0.5"
                  >
                    <path d="M6 4l18 9L6 22V4z" />
                  </svg>
                </div>
              </div>

              {/* Label */}
              <div className="flex flex-col items-center gap-2.5 relative">
                <span
                  className="px-3.5 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-[0.15em]"
                  style={{
                    background: "rgba(255,107,74,0.15)",
                    color: "#ff6b4a",
                  }}
                >
                  Demo próximamente
                </span>
                <p className="text-fg-faint text-sm text-center max-w-xs leading-relaxed">
                  El video completo del producto estará disponible en breve.
                </p>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

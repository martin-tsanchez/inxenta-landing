"use client";

import { useState } from "react";
import DashboardMock from "./DashboardMock";

export default function Hero() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error ?? "Algo salió mal. Intentá de nuevo.");
        setStatus("error");
        return;
      }

      setStatus("success");
    } catch {
      setErrorMsg("Algo salió mal. Intentá de nuevo.");
      setStatus("error");
    }
  }

  return (
    <section className="pt-16 px-6 py-20 md:py-28">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        {/* Left — copy */}
        <div>
          <p className="text-brand-orange text-xs font-semibold uppercase tracking-[0.2em] mb-5">
            Próximamente
          </p>

          <h1 className="font-serif text-[clamp(2.4rem,5vw+0.5rem,3.75rem)] text-brand-black leading-[1.05] tracking-tight mb-6 max-w-[520px]">
            El futuro del compliance empieza{" "}
            <em className="text-brand-orange not-italic">ahora.</em>
          </h1>

          <p className="text-fg-muted text-lg leading-relaxed mb-10 max-w-[480px]">
            Inxenta es la plataforma de compliance inteligente que automatiza
            el seguimiento de umbrales, acreditaciones y reportes — para que
            tu empresa no pierda los beneficios impositivos que ya ganó.
          </p>

          {/* Waitlist form */}
          <div id="waitlist-hero">
            {status === "success" ? (
              <div
                className="rounded-xl p-6 max-w-md"
                style={{
                  background: "var(--color-success-bg)",
                  border: "1px solid var(--color-success-border)",
                }}
              >
                <p
                  className="font-medium text-sm"
                  style={{ color: "var(--color-success-fg)" }}
                >
                  Listo. Te avisamos cuando abramos el acceso.
                </p>
                <p className="text-sm mt-1" style={{ color: "var(--color-success-fg-2)" }}>
                  Revisá tu bandeja de entrada pronto.
                </p>
              </div>
            ) : (
              <>
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row gap-2.5 max-w-md"
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tu@empresa.com"
                    required
                    disabled={status === "loading"}
                    className="flex-1 px-4 py-3 border bg-white rounded-lg text-sm text-brand-black placeholder:text-fg-faint focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent disabled:opacity-50"
                    style={{ borderColor: "var(--color-border-strong)" }}
                  />
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="bg-brand-orange hover:bg-brand-orange-hover text-white px-6 py-3 rounded-lg text-sm font-medium transition-colors disabled:opacity-60 whitespace-nowrap cursor-pointer"
                  >
                    {status === "loading" ? "Enviando…" : "Únete a la waitlist"}
                  </button>
                </form>

                {status === "error" && (
                  <p className="text-red-500 text-sm mt-2.5">{errorMsg}</p>
                )}

                <p className="text-fg-faint text-xs mt-4 flex items-center gap-1.5">
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
                  Sé el primero en acceder. Cupos limitados.
                </p>
              </>
            )}
          </div>
        </div>

        {/* Right — dashboard mock (hidden on mobile) */}
        <div className="hidden lg:flex justify-end">
          <DashboardMock />
        </div>
      </div>
    </section>
  );
}

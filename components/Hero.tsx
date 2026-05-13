"use client";

import { useState } from "react";

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
    <section className="flex-1 flex items-center justify-center min-h-screen pt-16 px-6">
      <div className="max-w-2xl w-full text-center">
        <p className="text-brand-orange text-xs font-semibold uppercase tracking-[0.2em] mb-8">
          Próximamente
        </p>

        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand-black leading-tight mb-6">
          El compliance de la Economía del Conocimiento, automatizado.
        </h1>

        <p className="text-gray-500 text-lg md:text-xl leading-relaxed mb-12 max-w-xl mx-auto">
          Inxenta centraliza umbrales, acreditaciones y reportes — para que tu
          empresa no pierda los beneficios impositivos que ya ganó.
        </p>

        <div id="waitlist">
          {status === "success" ? (
            <div className="bg-green-50 border border-green-200 rounded-xl p-8 max-w-md mx-auto">
              <p className="text-green-800 font-medium text-base">
                Listo. Te avisamos cuando abramos el acceso.
              </p>
              <p className="text-green-600 text-sm mt-1">
                Revisá tu bandeja de entrada pronto.
              </p>
            </div>
          ) : (
            <>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@empresa.com"
                  required
                  disabled={status === "loading"}
                  className="flex-1 px-4 py-3 border border-gray-200 rounded-lg text-sm text-brand-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent disabled:opacity-50 bg-white"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="bg-brand-orange text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-orange-600 transition-colors disabled:opacity-60 whitespace-nowrap cursor-pointer"
                >
                  {status === "loading" ? "Enviando..." : "Quiero acceso anticipado"}
                </button>
              </form>

              {status === "error" && (
                <p className="text-red-500 text-sm mt-3">{errorMsg}</p>
              )}

              <p className="text-gray-400 text-xs mt-5">
                Primeros en acceder. Sin compromiso.
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

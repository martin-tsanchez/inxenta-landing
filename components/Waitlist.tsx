"use client";

import { useState } from "react";

const benefits = [
  {
    title: "Acceso prioritario",
    body: "Sé de los primeros en probar Inxenta antes del lanzamiento público.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M10.5 2.5l3 3-7.5 7.5-3.5.5.5-3.5 7.5-7.5z" />
      </svg>
    ),
  },
  {
    title: "Beneficios exclusivos",
    body: "Accedé a condiciones especiales por ser early user de la plataforma.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M8 1.5l1.8 3.6 4 .6-2.9 2.8.7 4L8 10.3l-3.6 1.8.7-4L2.2 5.7l4-.6L8 1.5z" />
      </svg>
    ),
  },
  {
    title: "Novedades primero",
    body: "Recibí actualizaciones, recursos y lanzamientos antes que nadie.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M2 8h12M9 3l5 5-5 5" />
      </svg>
    ),
  },
];

export default function Waitlist() {
  const [form, setForm] = useState({ name: "", email: "", role: "", company: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function set(field: string) {
    return (e: React.ChangeEvent<HTMLInputElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: form.email,
          name: form.name,
          role: form.role,
          company: form.company,
        }),
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
    <section id="waitlist" className="py-24 px-6 bg-cream-muted">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        {/* Left — pitch */}
        <div className="pt-2">
          <p className="text-brand-orange text-xs font-semibold uppercase tracking-[0.2em] mb-5">
            Sé el primero
          </p>
          <h2 className="font-serif text-[clamp(1.75rem,2.5vw+1rem,2.75rem)] text-brand-black leading-snug tracking-tight mb-5">
            Únete a la{" "}
            <em className="text-brand-orange not-italic">waitlist</em> y sé
            parte del cambio.
          </h2>
          <p className="text-fg-muted text-base leading-relaxed mb-10 max-w-md">
            Estamos preparando algo grande. Dejá tu correo y recibí acceso
            prioritario, novedades exclusivas y beneficios especiales.
          </p>

          <div className="flex flex-col gap-5">
            {benefits.map((b) => (
              <div key={b.title} className="flex items-start gap-4">
                <span
                  className="shrink-0 inline-flex items-center justify-center text-brand-orange mt-0.5"
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: 8,
                    background: "#fff7ed",
                  }}
                >
                  {b.icon}
                </span>
                <div>
                  <div className="text-sm font-semibold text-brand-black">
                    {b.title}
                  </div>
                  <div className="text-[13px] text-fg-muted leading-relaxed mt-0.5">
                    {b.body}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — form card */}
        <div
          className="bg-white rounded-2xl p-9"
          style={{
            border: "1px solid var(--color-border)",
            boxShadow:
              "0 30px 60px -28px rgba(13,13,13,0.12), 0 6px 16px -8px rgba(13,13,13,0.05)",
          }}
        >
          <h3 className="font-serif text-2xl text-brand-black mb-2">
            Únete a la waitlist
          </h3>
          <p className="text-[13px] text-fg-muted mb-7">
            Completá tus datos y te avisaremos cuando estemos listos.
          </p>

          {status === "success" ? (
            <div
              className="rounded-xl p-5"
              style={{
                background: "var(--color-success-bg)",
                border: "1px solid var(--color-success-border)",
              }}
            >
              <p className="text-sm font-semibold" style={{ color: "var(--color-success-fg)" }}>
                Listo. Te avisamos cuando abramos el acceso.
              </p>
              <p className="text-[13px] mt-1" style={{ color: "var(--color-success-fg-2)" }}>
                Revisá tu bandeja de entrada pronto.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {[
                { label: "Nombre y apellido", field: "name",    type: "text",  placeholder: "Ej: María González" },
                { label: "Correo electrónico", field: "email",   type: "email", placeholder: "Ej: maria@empresa.com", required: true },
                { label: "Cargo",             field: "role",    type: "text",  placeholder: "Ej: Compliance Officer" },
                { label: "Empresa",           field: "company", type: "text",  placeholder: "Ej: Mi Empresa S.A." },
              ].map(({ label, field, type, placeholder, required }) => (
                <div key={field} className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-brand-black">
                    {label}
                    {required && <span className="text-brand-orange ml-0.5">*</span>}
                  </label>
                  <input
                    type={type}
                    value={form[field as keyof typeof form]}
                    onChange={set(field)}
                    placeholder={placeholder}
                    required={required}
                    disabled={status === "loading"}
                    className="w-full px-4 py-3 border bg-white rounded-lg text-sm text-brand-black placeholder:text-fg-faint focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent disabled:opacity-50"
                    style={{ borderColor: "var(--color-border-strong)" }}
                  />
                </div>
              ))}

              {status === "error" && (
                <p className="text-red-500 text-sm">{errorMsg}</p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="mt-1 w-full bg-brand-orange hover:bg-brand-orange-hover text-white py-3 rounded-lg text-sm font-medium transition-colors disabled:opacity-60 cursor-pointer flex items-center justify-center gap-2"
              >
                {status === "loading" ? "Enviando…" : "Quiero unirme a la waitlist"}
                {status !== "loading" && (
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M2 7h10M8 3l4 4-4 4" />
                  </svg>
                )}
              </button>

              <p className="text-fg-faint text-xs text-center flex items-center justify-center gap-1.5 mt-1">
                <svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden>
                  <rect x="2" y="5" width="8" height="6" rx="1" />
                  <path d="M4 5V3.5a2 2 0 014 0V5" />
                </svg>
                Tu información está 100&nbsp;% segura. No compartimos tus datos.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

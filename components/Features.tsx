const features = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M11 2L3 6v6c0 4.4 3.4 8.5 8 9.5 4.6-1 8-5.1 8-9.5V6l-8-4z" />
        <path d="M7.5 11l2.5 2.5 5-5" />
      </svg>
    ),
    title: "Umbrales en tiempo real",
    body: "Facturación promovida, exportaciones, I+D y capacitación monitoreados automáticamente. Sin planillas, sin cálculos manuales.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <rect x="3" y="4" width="16" height="15" rx="2" />
        <path d="M3 9h16M8 2v4M14 2v4" />
        <path d="M7 13h4M7 16.5h8" />
      </svg>
    ),
    title: "Acreditaciones sin fricción",
    body: "Calendarios automáticos, checklist de requisitos y alertas previas al vencimiento. El proceso anual sin el caos.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M4 17V8l7-5 7 5v9" />
        <rect x="8" y="12" width="6" height="5" />
        <path d="M11 12v5" />
      </svg>
    ),
    title: "DDJJ automatizada",
    body: "Completá la declaración anual en minutos. Los datos del año se precompletan desde la plataforma con un solo clic.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <circle cx="11" cy="11" r="8" />
        <path d="M11 7v5l3 3" />
        <path d="M11 3v2M11 17v2M3 11h2M17 11h2" />
      </svg>
    ),
    title: "Alertas que importan",
    body: "Avisos tempranos cuando un umbral está en riesgo, antes de que sea tarde para corregirlo. Notificaciones por email y panel.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 bg-cream">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-brand-orange text-xs font-semibold uppercase tracking-[0.2em] mb-6">
            Compliance inteligente
          </p>
          <h2 className="font-serif text-[clamp(1.75rem,2.5vw+1rem,2.5rem)] text-brand-black leading-snug tracking-tight max-w-2xl mx-auto">
            Menos trabajo manual. Más control.
          </h2>
          <p className="text-fg-muted text-lg leading-relaxed mt-4 max-w-xl mx-auto">
            Inxenta centraliza y automatiza todo el proceso LEC para que tu
            equipo se enfoque en lo que genera valor.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-gray-100 rounded-2xl overflow-hidden bg-white">
          {features.map((f, idx) => (
            <div
              key={f.title}
              className="p-8 text-center"
              style={{
                borderLeft: idx > 0 ? "1px solid var(--color-border-strong)" : undefined,
              }}
            >
              {/* Icon tile */}
              <div
                className="inline-flex items-center justify-center mb-5 text-brand-orange"
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 10,
                  background: "#fff7ed",
                }}
              >
                {f.icon}
              </div>

              <h3 className="font-sans text-sm font-semibold text-brand-black mb-3">
                {f.title}
              </h3>
              <p className="text-fg-muted text-[13px] leading-relaxed">
                {f.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

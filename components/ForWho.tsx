const segments = [
  {
    label: "Oficiales de Compliance",
    description:
      "Control total del programa LEC con visibilidad en tiempo real y alertas automáticas por umbral.",
  },
  {
    label: "Consultores externos",
    description:
      "Acceso multi-empresa desde un solo dashboard. Gestioná todos tus clientes LEC en un único lugar.",
  },
  {
    label: "Equipos de administración",
    description:
      "Reportes automatizados, trazabilidad de acreditaciones y una DDJJ que se precompleta sola.",
  },
];

export default function ForWho() {
  return (
    <section
      id="for-who"
      className="relative overflow-hidden py-28 px-6"
      style={{ background: "#0f3d33" }}
    >
      {/* Decorative target — top right */}
      <div
        className="pointer-events-none select-none"
        style={{
          position: "absolute",
          top: 80,
          right: 60,
          opacity: 0.14,
          color: "#fff",
        }}
        aria-hidden="true"
      >
        <svg
          width="220"
          height="220"
          viewBox="0 0 220 220"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <circle cx="110" cy="110" r="98" />
          <circle cx="110" cy="110" r="74" />
          <circle cx="110" cy="110" r="50" />
          <circle cx="110" cy="110" r="26" />
          <circle cx="110" cy="110" r="6" fill="currentColor" />
          <line x1="110" y1="110" x2="200" y2="20" strokeWidth="3" />
          <polyline points="180,20 200,20 200,40" strokeWidth="3" />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto relative text-center">
        <p
          className="text-xs font-semibold uppercase tracking-[0.2em] mb-5"
          style={{ color: "#ff6b4a" }}
        >
          Para quién es Inxenta
        </p>

        <h2
          className="font-serif leading-snug tracking-tight max-w-2xl mx-auto mb-16"
          style={{
            fontSize: "clamp(1.75rem, 2.5vw + 1rem, 2.75rem)",
            color: "#ffffff",
          }}
        >
          Diseñado para equipos que toman el compliance en serio.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left max-w-4xl mx-auto">
          {segments.map(({ label, description }) => (
            <div key={label}>
              <div className="flex items-center gap-3 mb-3">
                <span
                  className="shrink-0 inline-flex items-center justify-center"
                  style={{
                    width: 22,
                    height: 22,
                    borderRadius: 9999,
                    background: "#ff6b4a",
                  }}
                >
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 11 11"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M2 5.5l2.5 2.5 4.5-4.5" />
                  </svg>
                </span>
                <span
                  className="text-sm font-medium"
                  style={{ color: "#ffffff" }}
                >
                  {label}
                </span>
              </div>
              <p
                className="text-[13.5px] leading-relaxed"
                style={{ color: "#9ca3af" }}
              >
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

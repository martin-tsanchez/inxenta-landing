import Image from "next/image";

// Simple inline SVG icons (13×13, stroke-based)
function Icon({ d, extra }: { d: string; extra?: string }) {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d={d} />
      {extra && <path d={extra} />}
    </svg>
  );
}

const ICONS: Record<string, { d: string; extra?: string }> = {
  home:    { d: "M1.5 5.5L6.5 1.5L11.5 5.5V11.5H8.5V8.5H4.5V11.5H1.5Z" },
  invoice: { d: "M2 2h9v9H2z", extra: "M4 5h5M4 7.5h5M4 10h3" },
  globe:   { d: "M6.5 1.5a5 5 0 100 10 5 5 0 000-10z", extra: "M1.5 6.5h10M6.5 1.5c-2 2.5-2 7.5 0 10M6.5 1.5c2 2.5 2 7.5 0 10" },
  book:    { d: "M2 2h4v9H2zM7 2h4v9H7z", extra: "M6.5 2v9" },
  flask:   { d: "M4.5 1.5h4M5 5l-3 7h9L8 5", extra: "M4.5 1.5L5 5M8.5 1.5L8 5" },
  users:   { d: "M1 11c0-2.5 1.8-4 4-4s4 1.5 4 4", extra: "M5 4a2 2 0 100 4 2 2 0 000-4z" },
  badge:   { d: "M6.5 1L8 4.5H12L9 7l1 4-3.5-2L3 11l1-4-3-2.5H5.5z" },
  cog:     { d: "M6.5 4.5a2 2 0 100 4 2 2 0 000-4z", extra: "M6.5 1.5v2M6.5 9.5v2M1.5 6.5h2M9.5 6.5h2" },
};

const navItems = [
  { key: "home",    label: "Inicio",       active: true },
  { key: "invoice", label: "Facturación" },
  { key: "globe",   label: "Exportaciones" },
  { key: "book",    label: "Capacitación" },
  { key: "flask",   label: "I+D" },
  { key: "users",   label: "Nómina" },
  { key: "badge",   label: "Acreditación" },
  { key: "cog",     label: "Configuración" },
];

function Metric({
  label,
  value,
  delta,
  ok = true,
}: {
  label: string;
  value: string;
  delta: string;
  ok?: boolean;
}) {
  return (
    <div style={{ border: "1px solid #f3f4f6", borderRadius: 8, padding: "8px 10px" }}>
      <div style={{ fontSize: 9, color: "#6b7280" }}>{label}</div>
      <div
        style={{
          fontSize: 18,
          fontWeight: 600,
          color: "#0d0d0d",
          marginTop: 2,
          fontVariantNumeric: "tabular-nums",
          letterSpacing: "-0.02em",
        }}
      >
        {value}
      </div>
      <div style={{ fontSize: 8, color: ok ? "#16a34a" : "#f97316", marginTop: 2 }}>
        {delta}{" "}
        <span style={{ color: "#9ca3af" }}>vs. mes anterior</span>
      </div>
    </div>
  );
}

function ComplianceDonut() {
  const pct = 87;
  const r = 30;
  const c = r * 2 * Math.PI;
  const filled = (pct / 100) * c;
  return (
    <div
      style={{
        border: "1px solid #f3f4f6",
        borderRadius: 8,
        padding: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 4,
      }}
    >
      <div style={{ fontSize: 8, color: "#6b7280", alignSelf: "flex-start" }}>
        Cumplimiento LEC
      </div>
      <svg width="70" height="70" viewBox="0 0 70 70">
        <circle cx="35" cy="35" r={r} fill="none" stroke="#f3f4f6" strokeWidth="6" />
        <circle
          cx="35"
          cy="35"
          r={r}
          fill="none"
          stroke="#ff6b4a"
          strokeWidth="6"
          strokeDasharray={`${filled} ${c}`}
          strokeLinecap="round"
          transform="rotate(-90 35 35)"
        />
        <text
          x="35"
          y="39"
          textAnchor="middle"
          fontSize="14"
          fontWeight="600"
          fill="#0d0d0d"
          fontFamily="system-ui"
        >
          {pct}%
        </text>
      </svg>
    </div>
  );
}

function UpcomingDeadlines() {
  const rows = [
    { label: "Umbral exportaciones", date: "31 May 2026" },
    { label: "Declaración AFIP",     date: "15 Jun 2026" },
    { label: "Acreditación anual",   date: "10 Ago 2026" },
  ];
  return (
    <div style={{ border: "1px solid #f3f4f6", borderRadius: 8, padding: 10 }}>
      <div
        style={{
          fontSize: 9,
          fontWeight: 600,
          color: "#0d0d0d",
          marginBottom: 6,
        }}
      >
        Próximos vencimientos
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        {rows.map(({ label, date }) => (
          <div
            key={label}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: 9,
            }}
          >
            <span style={{ color: "#0d0d0d" }}>{label}</span>
            <span style={{ color: "#9ca3af", fontVariantNumeric: "tabular-nums" }}>
              {date}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function PendingTasks() {
  const tasks = [
    { color: "#ff6b4a", label: "Cargar facturas Q2" },
    { color: "#16a34a", label: "Verificar nómina mayo" },
    { color: "#ef4444", label: "Completar borrador DDJJ" },
  ];
  return (
    <div style={{ border: "1px solid #f3f4f6", borderRadius: 8, padding: 10 }}>
      <div
        style={{
          fontSize: 9,
          fontWeight: 600,
          color: "#0d0d0d",
          marginBottom: 6,
        }}
      >
        Tareas pendientes
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
        {tasks.map(({ color, label }) => (
          <div
            key={label}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              fontSize: 9,
              color: "#374151",
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: 9999,
                background: color,
                flexShrink: 0,
              }}
            />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function DashboardMock() {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 14,
        boxShadow:
          "0 30px 60px -25px rgba(13,13,13,0.18), 0 8px 20px -10px rgba(13,13,13,0.08)",
        border: "1px solid #f3f4f6",
        width: "100%",
        maxWidth: 560,
        overflow: "hidden",
        fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
        fontSize: 12,
      }}
    >
      {/* Topbar */}
      <div
        style={{
          height: 46,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 14px",
          borderBottom: "1px solid #f3f4f6",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <Image src="/logo_inxenta.png" alt="" width={20} height={20} />
          <span
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: 14,
              color: "#0d0d0d",
              letterSpacing: "-0.02em",
            }}
          >
            inxenta
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          {/* Bell icon */}
          <svg
            width="14"
            height="14"
            fill="none"
            stroke="#9ca3af"
            strokeWidth="1.4"
            viewBox="0 0 14 14"
            strokeLinecap="round"
            aria-hidden
          >
            <path d="M7 1.5a4 4 0 00-4 4v2.5l-1 2h10l-1-2V5.5a4 4 0 00-4-4z" />
            <path d="M5.5 11.5a1.5 1.5 0 003 0" />
          </svg>
          {/* Avatar */}
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <div
              style={{
                width: 24,
                height: 24,
                borderRadius: 9999,
                background: "linear-gradient(135deg,#ff6b4a,#fb923c)",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 9,
                fontWeight: 700,
              }}
            >
              MG
            </div>
            <div style={{ lineHeight: 1.1 }}>
              <div style={{ fontSize: 9, fontWeight: 600, color: "#0d0d0d" }}>
                María González
              </div>
              <div style={{ fontSize: 8, color: "#9ca3af" }}>Admin</div>
            </div>
          </div>
        </div>
      </div>

      {/* Body */}
      <div style={{ display: "flex" }}>
        {/* Sidebar */}
        <div
          style={{
            width: 146,
            borderRight: "1px solid #f3f4f6",
            padding: "10px 6px",
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
        >
          {navItems.map(({ key, label, active }) => (
            <div
              key={label}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "6px 10px",
                borderRadius: 6,
                background: active ? "#f9fafb" : "transparent",
                color: active ? "#0d0d0d" : "#6b7280",
                fontSize: 10.5,
                fontWeight: active ? 500 : 400,
              }}
            >
              <Icon {...ICONS[key]} />
              <span>{label}</span>
            </div>
          ))}
        </div>

        {/* Main */}
        <div
          style={{
            flex: 1,
            padding: 14,
            display: "flex",
            flexDirection: "column",
            gap: 10,
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontSize: 16,
                color: "#0d0d0d",
                letterSpacing: "-0.02em",
              }}
            >
              Dashboard
            </div>
            <div style={{ fontSize: 9.5, color: "#9ca3af" }}>
              Resumen de cumplimiento LEC
            </div>
          </div>

          {/* Metric tiles */}
          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 7 }}
          >
            <Metric label="Cumplimiento" value="87%" delta="↑ 4%" />
            <Metric label="Facturación prom." value="76%" delta="↑ 12%" />
            <Metric label="Días p/ acreditar" value="42" delta="↓ 8%" ok={false} />
          </div>

          {/* Charts row */}
          <div style={{ display: "grid", gridTemplateColumns: "110px 1fr", gap: 7 }}>
            <ComplianceDonut />
            <UpcomingDeadlines />
          </div>

          {/* Pending tasks */}
          <PendingTasks />
        </div>
      </div>
    </div>
  );
}

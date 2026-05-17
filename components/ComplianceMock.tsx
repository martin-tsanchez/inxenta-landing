"use client";

import { motion } from "motion/react";

const rows = [
  {
    module: "Facturación promovida",
    status: "Crítico",
    pct: 68,
    color: "#ef4444",
    bgClass: "bg-red-500/10",
    textClass: "text-red-400",
  },
  {
    module: "Exportaciones",
    status: "En orden",
    pct: 91,
    color: "#22c55e",
    bgClass: "bg-green-500/10",
    textClass: "text-green-400",
  },
  {
    module: "Capacitación",
    status: "Atención",
    pct: 74,
    color: "#f59e0b",
    bgClass: "bg-yellow-500/10",
    textClass: "text-yellow-400",
  },
  {
    module: "I+D",
    status: "En orden",
    pct: 88,
    color: "#22c55e",
    bgClass: "bg-green-500/10",
    textClass: "text-green-400",
  },
  {
    module: "Acreditación",
    status: "En orden",
    pct: 100,
    color: "#22c55e",
    bgClass: "bg-green-500/10",
    textClass: "text-green-400",
  },
];

export default function ComplianceMock() {
  return (
    <div className="relative">
      {/* Floating audit badge — top-right, slightly overlapping */}
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute -top-4 -right-4 z-10 bg-white rounded-xl px-3 py-2 shadow-lg flex items-center gap-1.5"
      >
        <svg
          width="13"
          height="13"
          viewBox="0 0 13 13"
          fill="none"
          aria-hidden
        >
          <circle cx="6.5" cy="6.5" r="6.5" fill="#dcfce7" />
          <path
            d="M4 6.5l1.8 1.8L9 4.5"
            stroke="#16a34a"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="text-[11px] font-semibold text-green-700 whitespace-nowrap">
          Auditoría lista
        </span>
      </motion.div>

      {/* Main floating card */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        className="w-full max-w-[420px] rounded-2xl shadow-2xl overflow-hidden"
        style={{ background: "#111827" }}
      >
        {/* Header bar */}
        <div
          className="flex items-center justify-between px-4 py-3"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
        >
          <div className="flex items-center gap-2">
            <span
              className="w-1.5 h-1.5 rounded-full bg-brand-orange flex-shrink-0"
            />
            <span className="text-[11px] font-medium" style={{ color: "#e5e7eb" }}>
              Panel de Compliance
            </span>
            <span className="text-[11px]" style={{ color: "#6b7280" }}>
              LEC 2026
            </span>
          </div>
          <div className="flex items-center gap-1">
            {/* Animated pulse dot */}
            <span className="relative flex h-2 w-2">
              <span
                className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                style={{ background: "#22c55e" }}
              />
              <span
                className="relative inline-flex rounded-full h-2 w-2"
                style={{ background: "#22c55e" }}
              />
            </span>
            <span className="text-[10px]" style={{ color: "#22c55e" }}>
              Live
            </span>
          </div>
        </div>

        {/* Table */}
        <div>
          {/* Table header */}
          <div
            className="grid px-4 py-2"
            style={{
              gridTemplateColumns: "1fr 90px 80px",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            {["Módulo", "Estado", "Progreso"].map((h) => (
              <span
                key={h}
                className="text-[10px] uppercase tracking-widest"
                style={{ color: "#6b7280" }}
              >
                {h}
              </span>
            ))}
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <div
              key={row.module}
              className="grid px-4 py-2.5 transition-colors hover:bg-white/[0.02]"
              style={{
                gridTemplateColumns: "1fr 90px 80px",
                borderBottom:
                  i < rows.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none",
              }}
            >
              {/* Module name */}
              <span
                className="text-[12px] font-medium truncate pr-2"
                style={{ color: "rgba(255,255,255,0.80)" }}
              >
                {row.module}
              </span>

              {/* Status badge */}
              <span
                className={`self-center inline-flex w-fit items-center px-2 py-0.5 rounded-full text-[10px] font-semibold ${row.bgClass} ${row.textClass}`}
              >
                {row.status}
              </span>

              {/* Progress bar */}
              <div className="self-center flex items-center gap-1.5">
                <div
                  className="flex-1 h-1.5 rounded-full overflow-hidden"
                  style={{ background: "rgba(255,255,255,0.10)" }}
                >
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${row.pct}%`, background: row.color }}
                  />
                </div>
                <span className="text-[9px] w-6 text-right" style={{ color: "#6b7280" }}>
                  {row.pct}%
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Alert card */}
        <div
          className="rounded-xl mx-3 my-2 px-3 py-2.5 flex items-start gap-2"
          style={{
            background: "rgba(239,68,68,0.08)",
            border: "1px solid rgba(239,68,68,0.20)",
          }}
        >
          {/* Warning icon */}
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            className="flex-shrink-0 mt-0.5"
            aria-hidden
          >
            <path
              d="M6 1L11 10.5H1L6 1Z"
              stroke="#ef4444"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />
            <path d="M6 4.5v2.5" stroke="#ef4444" strokeWidth="1.2" strokeLinecap="round" />
            <circle cx="6" cy="8.5" r="0.5" fill="#ef4444" />
          </svg>
          <div>
            <p className="text-[11px] font-medium text-red-400 leading-snug">
              Facturación promovida por debajo del 75%
            </p>
            <p className="text-[10px] mt-0.5" style={{ color: "rgba(248,113,113,0.70)" }}>
              Requiere acción antes del 30 Jun 2026
            </p>
          </div>
        </div>

        {/* Footer bar */}
        <div
          className="flex items-center justify-between px-4 py-2.5"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <div className="flex items-center gap-1">
            <span className="text-[10px]" style={{ color: "#6b7280" }}>
              Próxima auditoría: 15 Jul 2026
            </span>
            <span className="text-[10px]" style={{ color: "#6b7280" }}>
              ·
            </span>
            <span className="text-[10px] text-brand-orange font-medium">59 días</span>
          </div>
          <div className="flex items-center gap-1">
            <svg
              width="11"
              height="11"
              viewBox="0 0 11 11"
              fill="none"
              aria-hidden
            >
              <circle cx="5.5" cy="5.5" r="5.5" fill="#16a34a" fillOpacity="0.15" />
              <path
                d="M3.5 5.5l1.4 1.4L7.5 4"
                stroke="#22c55e"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-[10px]" style={{ color: "#22c55e" }}>
              Trazabilidad completa
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

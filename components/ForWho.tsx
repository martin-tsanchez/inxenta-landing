const segments = [
  {
    label: "PyMEs bajo Ley 27.506",
    description:
      "Empresas encuadradas en el régimen que necesitan cumplir sin destinar horas de gestión al seguimiento.",
  },
  {
    label: "Consultores externos",
    description:
      "Asesores que gestionan múltiples clientes y necesitan visibilidad centralizada del estado de cada uno.",
  },
  {
    label: "Administradores de plataforma",
    description:
      "Equipos internos que requieren alertas tempranas, reportes automatizados y trazabilidad total.",
  },
];

export default function ForWho() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-center text-gray-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
          Para quién es
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-brand-black text-center mb-16 max-w-xl mx-auto leading-snug">
          Diseñado para quienes gestionan compliance en serio.
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {segments.map((segment) => (
            <div
              key={segment.label}
              className="p-8 border border-gray-100 rounded-xl hover:border-brand-orange transition-colors group"
            >
              <div className="w-8 h-0.5 bg-brand-orange mb-6" />
              <h3 className="font-medium text-brand-black text-base mb-3">
                {segment.label}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {segment.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const painPoints = [
  {
    title: "Umbrales que se escapan",
    description:
      "Facturación, exportaciones, I+D: un mes sin control puede costar el beneficio completo.",
  },
  {
    title: "Acreditaciones sin sistema",
    description:
      "Los requisitos cambian cada año y el seguimiento termina en planillas dispersas.",
  },
  {
    title: "Riesgo sin alertas",
    description:
      "Cuando el problema aparece, ya es tarde para corregirlo.",
  },
];

export default function Problem() {
  return (
    <section className="bg-cream-muted py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-center text-gray-400 text-xs font-semibold uppercase tracking-[0.2em] mb-14">
          El problema
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {painPoints.map((point) => (
            <div
              key={point.title}
              className="bg-white rounded-xl p-8 border-t-2 border-brand-orange"
            >
              <h3 className="font-serif text-xl text-brand-black mb-3">
                {point.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

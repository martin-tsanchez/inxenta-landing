const footerLinks = [
  {
    title: "Plataforma",
    links: [
      { label: "Cómo funciona", href: "#workflow" },
      { label: "Para quién", href: "#for-who" },
      { label: "Seguridad", href: "#" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Compañía",
    links: [
      { label: "Agendar demo", href: "#demo-cta" },
      { label: "Sobre nosotros", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Contacto", href: "mailto:msanchez@inxenta.com" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Términos y condiciones", href: "#" },
      { label: "Política de privacidad", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-brand-black py-16 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Main grid: brand + 3 link cols + CTA card */}
        <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr_1fr_1fr_1.3fr] gap-10 mb-14">
          {/* Brand column */}
          <div>
            {/* Wordmark: serif "inxenta" + orange dot above "i" */}
            <div className="relative inline-block mb-4">
              <span
                className="absolute bg-brand-orange rounded-full"
                style={{ width: 7, height: 7, top: -2, left: 1 }}
                aria-hidden="true"
              />
              <span className="font-serif text-white text-2xl tracking-tight leading-none">
                inxenta
              </span>
            </div>
            <p
              className="text-[13px] leading-relaxed mb-5 max-w-[240px]"
              style={{ color: "#9ca3af" }}
            >
              La plataforma de compliance para empresas bajo la Ley de Economía
              del Conocimiento.
            </p>
            {/* Social icons */}
            <div className="flex gap-2.5">
              {/* LinkedIn */}
              <a
                href="#"
                className="inline-flex items-center justify-center"
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: 8,
                  border: "1px solid #1f2937",
                  color: "#9ca3af",
                }}
                aria-label="LinkedIn"
              >
                <svg width="15" height="15" viewBox="0 0 15 15" fill="currentColor" aria-hidden="true">
                  <path d="M3.5 2a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM2 6.5h3v6.5H2V6.5zm5 0h2.8v.9C10.1 6.9 10.9 6.3 12 6.3c2 0 3 1.3 3 3.8V13h-3v-2.6c0-.9-.3-1.4-1-1.4s-1.1.5-1.1 1.4V13H7V6.5z"/>
                </svg>
              </a>
              {/* Mail */}
              <a
                href="mailto:msanchez@inxenta.com"
                className="inline-flex items-center justify-center"
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: 8,
                  border: "1px solid #1f2937",
                  color: "#9ca3af",
                }}
                aria-label="Email"
              >
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="1.5" y="3.5" width="12" height="8" rx="1.5" />
                  <path d="M1.5 4.5l6 4.5 6-4.5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((col) => (
            <div key={col.title}>
              <div
                className="text-[11px] font-semibold uppercase tracking-[0.18em] mb-4"
                style={{ color: "#ffffff" }}
              >
                {col.title}
              </div>
              <ul className="flex flex-col gap-3 list-none p-0 m-0">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[13px] transition-colors hover:text-white"
                      style={{ color: "#9ca3af" }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* CTA card */}
          <div
            className="rounded-xl p-5"
            style={{ border: "1px solid #1f2937" }}
          >
            <div className="font-serif text-white text-[17px] mb-1.5">
              Únete a la waitlist
            </div>
            <div className="text-[12px] mb-5" style={{ color: "#9ca3af" }}>
              Sé el primero en acceder.
            </div>
            <a
              href="#waitlist"
              className="inline-flex items-center justify-center bg-brand-orange hover:bg-brand-orange-hover transition-colors rounded-lg"
              style={{ width: 40, height: 40 }}
              aria-label="Ir a la waitlist"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M2 7.5h11M8.5 3l4.5 4.5-4.5 4.5" />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-6 text-center text-[11.5px]"
          style={{
            borderTop: "1px solid #1f2937",
            color: "#6b7280",
          }}
        >
          © 2026 Inxenta. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}

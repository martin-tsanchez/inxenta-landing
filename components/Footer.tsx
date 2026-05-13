export default function Footer() {
  return (
    <footer className="bg-brand-black py-14 px-6">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-4 text-center">
        {/* Wordmark recreation: orange dot above the "i" of inxenta */}
        <div className="relative inline-block">
          <span
            className="absolute bg-brand-orange rounded-full"
            style={{ width: 7, height: 7, top: -3, left: 1 }}
            aria-hidden="true"
          />
          <span className="font-serif text-white text-2xl tracking-tight">
            inxenta
          </span>
        </div>

        <p className="text-gray-500 text-xs tracking-wide">
          Compliance que genera valor
        </p>

        <a
          href="mailto:msanchez@inxenta.com"
          className="text-brand-orange text-sm hover:underline mt-1"
        >
          msanchez@inxenta.com
        </a>

        <p className="text-gray-700 text-xs mt-6">
          © 2026 Inxenta. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

import Image from "next/image";

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo: isotipo + wordmark + tagline */}
        <a href="#" className="flex items-center gap-3">
          <Image
            src="/logo_inxenta.png"
            alt=""
            width={34}
            height={34}
            priority
            className="h-[34px] w-[34px] shrink-0"
          />
          <div className="flex flex-col gap-[3px] leading-none">
            <span className="font-serif text-xl text-brand-black tracking-tight leading-none">
              inxenta
            </span>
            <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-fg-muted">
              Compliance que{" "}
              <span className="text-brand-orange">genera</span> valor
            </span>
          </div>
        </a>

        {/* Nav links — hidden on mobile */}
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-500">
          <a href="#features" className="hover:text-brand-black transition-colors">
            Características
          </a>
          <a href="#for-who" className="hover:text-brand-black transition-colors">
            Para quién
          </a>
          <a href="#waitlist" className="hover:text-brand-black transition-colors">
            Waitlist
          </a>
        </div>

        {/* CTA */}
        <a
          href="#waitlist"
          className="bg-brand-black text-white text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-gray-800 transition-colors"
        >
          Sumarme
        </a>
      </div>
    </nav>
  );
}

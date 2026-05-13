import Image from "next/image";

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo horizontal: isotipo + wordmark */}
        <div className="flex items-center gap-2.5">
          <Image
            src="/logo_inxenta.png"
            alt=""
            width={32}
            height={32}
            priority
            className="h-8 w-8"
          />
          <span className="font-serif text-xl text-brand-black tracking-tight leading-none">
            inxenta
          </span>
        </div>

        <a
          href="#waitlist"
          className="bg-brand-orange text-white text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-orange-600 transition-colors"
        >
          Sumarme
        </a>
      </div>
    </nav>
  );
}

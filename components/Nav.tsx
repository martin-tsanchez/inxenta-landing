import Image from "next/image";

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Image
          src="/logo_inxenta.png"
          alt="Inxenta"
          width={600}
          height={140}
          priority
          className="h-8 w-auto"
        />
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

import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Inxenta — Compliance que genera valor",
  description:
    "Plataforma de compliance para empresas bajo la Ley de Economía del Conocimiento (Ley 27.506). Automatizá el seguimiento de umbrales, acreditaciones y reportes.",
  openGraph: {
    title: "Inxenta",
    description:
      "El compliance de la Economía del Conocimiento, automatizado.",
    url: "https://inxenta.com",
    siteName: "Inxenta",
    locale: "es_AR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geist.variable} ${playfair.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

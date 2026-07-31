import type { Metadata } from "next";
import { Manrope, Syne } from "next/font/google";
import "./style.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Tristan Thomas — Portfolio",
  description: "Portfolio de Tristan Thomas — développeur web.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${syne.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Manrope, Syne, Geist } from "next/font/google";
import "./globals.css";
import "./style.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

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
    <html lang="fr" className={cn(syne.variable, manrope.variable, "font-sans", geist.variable)}>
      <body>{children}</body>
    </html>
  );
}

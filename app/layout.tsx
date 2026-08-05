import type { Metadata } from "next";
import { Noto_Sans_Thai, Noto_Serif_Thai, Manrope } from "next/font/google";
import { LanguageProvider } from "@/lib/language-context";
import "./globals.css";

const notoSans = Noto_Sans_Thai({
  variable: "--font-noto-sans",
  subsets: ["latin", "thai"],
  weight: ["400", "700"],
});

const notoSerif = Noto_Serif_Thai({
  variable: "--font-noto-serif",
  subsets: ["latin", "thai"],
  weight: ["500", "600"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "ThaiPass — Explore Thailand with a companion by your side",
  description:
    "ThaiPass guides you through every stage of your trip - before you go, the moment you arrive, and everywhere you explore.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${notoSans.variable} ${notoSerif.variable} ${manrope.variable} antialiased`}
    >
      <body className="min-h-screen bg-white font-sans">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LegalDocument } from "@/components/legal/LegalDocument";
import { termsDoc } from "@/lib/legal/terms";

export const metadata: Metadata = {
  title: "Terms & Conditions — ThaiPass",
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main>
        <LegalDocument doc={termsDoc} />
      </main>
      <Footer />
    </>
  );
}

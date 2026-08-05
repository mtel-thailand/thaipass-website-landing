import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LegalDocument } from "@/components/legal/LegalDocument";
import { privacyDoc } from "@/lib/legal/privacy";

export const metadata: Metadata = {
  title: "Privacy Policy — ThaiPass",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main>
        <LegalDocument doc={privacyDoc} />
      </main>
      <Footer />
    </>
  );
}

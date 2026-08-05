import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LegalDocument } from "@/components/legal/LegalDocument";
import { refundDoc } from "@/lib/legal/refund";

export const metadata: Metadata = {
  title: "Refund Policy — ThaiPass",
};

export default function RefundPolicyPage() {
  return (
    <>
      <Header />
      <main>
        <LegalDocument doc={refundDoc} />
      </main>
      <Footer />
    </>
  );
}

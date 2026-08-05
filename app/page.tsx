import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/sections/Features";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { WhyThaiPass } from "@/components/sections/WhyThaiPass";
import { Faq } from "@/components/sections/Faq";
import { Cta } from "@/components/sections/Cta";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <WhyThaiPass />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  );
}

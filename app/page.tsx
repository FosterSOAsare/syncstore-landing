import Header from "../components/Header";
import Hero from "../components/Hero";
import Metrics from "../components/Metrics";
import POSSection from "@/components/POSSection";
import Features from "../components/Features";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Features />
      <Metrics />
      <POSSection />
      <HowItWorks />
      <FAQ />
      <CTASection />
      <Footer />
    </main>
  );
}

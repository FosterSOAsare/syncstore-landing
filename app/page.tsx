import Header from "../components/Header";
import Hero from "../components/home/Hero";
import Metrics from "../components/home/Metrics";
import POSSection from "@/components/home/POSSection";
import Features from "../components/home/Features";
import HowItWorks from "@/components/home/HowItWorks";
import FAQ from "@/components/home/FAQ";
import CTASection from "@/components/home/CTASection";
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

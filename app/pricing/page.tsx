import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PricingHero from "@/components/pricing/PricingHero";
import PricingContent from "@/components/pricing/PricingContent";
import PricingCTA from "@/components/pricing/PricingCTA";

export default function PricingPage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <PricingHero />
        <PricingContent />
        <PricingCTA />
      </main>
      <Footer />
    </>
  );
}

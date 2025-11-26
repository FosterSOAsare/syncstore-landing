import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PricingContent from "@/components/pricing/PricingContent";
import PricingCTA from "@/components/pricing/PricingCTA";

export default function PricingPage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <PricingContent />
        <PricingCTA />
      </main>
      <Footer />
    </>
  );
}

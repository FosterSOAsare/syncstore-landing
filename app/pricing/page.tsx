import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PricingContent from "@/components/pricing/PricingContent";
import PricingCTA from "@/components/pricing/PricingCTA";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple SyncStore plans for single shops and multi-branch businesses. Start free and upgrade when you need syncing.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "Pricing | SyncStore",
    description:
      "Simple SyncStore plans for single shops and multi-branch businesses. Start free and upgrade when you need syncing.",
    url: "/pricing",
  },
};

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

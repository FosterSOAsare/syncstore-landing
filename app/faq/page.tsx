import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQContent from "@/components/faq/FAQContent";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers about SyncStore: working offline, syncing between devices and branches, plans, pricing and getting started.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "Frequently Asked Questions | SyncStore",
    description:
      "Answers about SyncStore: working offline, syncing between devices and branches, plans, pricing and getting started.",
    url: "/faq",
  },
};

export default function FAQPage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <FAQContent />
      </main>
      <Footer />
    </>
  );
}

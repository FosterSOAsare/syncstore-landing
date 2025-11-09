import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQContent from "@/components/faq/FAQContent";

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

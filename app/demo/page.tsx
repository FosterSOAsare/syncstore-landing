import Header from "../../components/Header";
import Footer from "../../components/Footer";
import DemoContent from "@/components/demo/DemoContent";

export default function DemoPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <DemoContent />
      </main>
      <Footer />
    </>
  );
}

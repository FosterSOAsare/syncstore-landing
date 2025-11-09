import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OnboardingForm from "@/components/onboarding/OnboardingForm";
import { OnboardingProvider } from "@/contexts/OnboardingContext";

export default function OnboardingPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-primary/5 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Welcome to SyncStore
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Let's set up your organization. This will only take a few minutes
              and you can always change these settings later.
            </p>
          </div>

          {/* Onboarding Form */}
          <OnboardingProvider>
            <OnboardingForm />
          </OnboardingProvider>
        </div>
      </main>
      <Footer />
    </>
  );
}

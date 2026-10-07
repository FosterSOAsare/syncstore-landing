import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms that govern your use of SyncStore's inventory management service, website and apps.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        {/* Hero Section */}
        <section className="py-10 md:py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Terms of Service
            </h1>
            <p className="text-lg text-gray-600">
              Last updated: November 7, 2025
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-6 md:py-16">
          <div className="max-w-4xl mx-auto px-6">
            <div className="prose prose-lg max-w-none">
              {/* Introduction */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  1. Introduction
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Welcome to SyncStore. These Terms of Service (&ldquo;Terms&rdquo;) govern
                  your access to and use of SyncStore&apos;s inventory management
                  services, website, and applications (collectively, the
                  &ldquo;Service&rdquo;). By accessing or using our Service, you agree to be
                  bound by these Terms.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  If you are using the Service on behalf of an organization, you
                  agree to these Terms on behalf of that organization and
                  represent that you have the authority to do so.
                </p>
              </div>

              {/* Account Terms */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  2. Account Terms
                </h2>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>
                      You must provide accurate and complete information when
                      creating an account.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>
                      You are responsible for maintaining the security of your
                      account and password.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>
                      You are responsible for all activities that occur under
                      your account.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>
                      You may not use the Service for any illegal or
                      unauthorized purpose.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Service Usage */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  3. Service Usage
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  SyncStore provides inventory management software as a service.
                  Your use of the Service is subject to the plan you have
                  subscribed to. We reserve the right to modify, suspend, or
                  discontinue the Service at any time with reasonable notice.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  You agree not to reproduce, duplicate, copy, sell, resell, or
                  exploit any portion of the Service without our express written
                  permission.
                </p>
              </div>

              {/* Payment Terms */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  4. Payment Terms
                </h2>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>
                      A valid payment method is required for paid plans.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>
                      You will be billed in advance on a recurring basis
                      (monthly or annually).
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>
                      All fees are non-refundable except as required by law.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>
                      We reserve the right to change our pricing with 30 days
                      notice.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>
                      Failure to pay may result in suspension or termination of
                      your account.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Data and Privacy */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  5. Data and Privacy
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  You retain all rights to the data you input into the Service.
                  We will not share, sell, or disclose your data to third
                  parties except as necessary to provide the Service or as
                  required by law.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We implement appropriate security measures to protect your
                  data. However, no method of transmission over the Internet is
                  100% secure, and we cannot guarantee absolute security.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  <strong>
                    You are responsible for maintaining backups of your data.
                  </strong>{" "}
                  We provide data export tools to help you backup your
                  information.
                </p>
              </div>

              {/* Free Trial */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  6. Free Trial
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We offer a 6-month free trial for new users. The free trial
                  includes limited features and does not include syncing
                  capabilities between devices or branches.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  At the end of the trial period, you must upgrade to a paid
                  plan to continue using the Service. Your data will be
                  preserved during the transition.
                </p>
              </div>

              {/* Cancellation and Termination */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  7. Cancellation and Termination
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  You may cancel your account at any time through your account
                  settings. Upon cancellation, your access to the Service will
                  continue until the end of your current billing period.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We reserve the right to suspend or terminate your account if
                  you violate these Terms or engage in fraudulent, illegal, or
                  abusive activity.
                </p>
              </div>

              {/* Limitation of Liability */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  8. Limitation of Liability
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The Service is provided &ldquo;as is&rdquo; without warranties of any
                  kind, either express or implied. We do not warrant that the
                  Service will be uninterrupted, error-free, or completely
                  secure.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  To the maximum extent permitted by law, SyncStore shall not be
                  liable for any indirect, incidental, special, consequential,
                  or punitive damages resulting from your use of or inability to
                  use the Service.
                </p>
              </div>

              {/* Changes to Terms */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  9. Changes to Terms
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  We may update these Terms from time to time. We will notify
                  you of significant changes via email or through the Service.
                  Your continued use of the Service after such changes
                  constitutes your acceptance of the new Terms.
                </p>
              </div>

              {/* Contact */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  10. Contact Us
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  If you have any questions about these Terms, please contact us
                  at{" "}
                  <a
                    href="mailto:fostersoasare@gmail.com"
                    className="text-primary hover:text-primary font-medium"
                  >
                    fostersoasare@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

import {
  WifiOff,
  Building2,
  Package,
  RefreshCw,
  CreditCard,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24 flex flex-col justify-center items-center gap-16">
        <div className="w-full flex flex-col items-center text-center">
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-6">
            Works perfectly offline
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold max-w-4xl text-gray-900 leading-tight tracking-tight">
            Complete inventory control across every branch
          </h1>
          <p className="mt-6 text-xl text-center text-gray-600 max-w-3xl leading-relaxed">
            Manage inventory, sales, and operations with confidence — even
            without internet. Our offline-first system keeps your business
            running smoothly across stores, warehouses, and distribution centers
            while syncing seamlessly when you're back online.
          </p>

          <div className="mt-6 flex flex-wrap justify-center items-center gap-3 text-sm text-gray-600">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full">
              <WifiOff className="w-4 h-4" />
              Works offline everywhere
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full">
              <Building2 className="w-4 h-4" />
              Multi-branch & warehouse support
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full">
              <Package className="w-4 h-4" />
              Advanced product variants
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full">
              <RefreshCw className="w-4 h-4" />
              Real-time sync
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full">
              <CreditCard className="w-4 h-4" />
              Built-in POS & payments
            </span>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="/signin"
              className="inline-flex items-center px-14 py-4 bg-blue-600 text-white text-base font-medium rounded-lg shadow-sm hover:bg-blue-700 transition-colors"
            >
              Start for free
            </a>

            <a
              href="/demo"
              className="inline-flex items-center px-14 py-4 bg-white border-2 border-gray-200 text-gray-900 text-base font-medium rounded-lg hover:bg-gray-50 transition-colors"
            >
              Request a demo
            </a>
          </div>

          <p className="mt-6 text-sm text-gray-500">
            Free plan. No card required. Join 10,000+ businesses
          </p>
        </div>

        <div className="w-full flex justify-center">
          <img
            src="https://syncstore-website.vercel.app/_next/image?url=%2Fhome%2Fhero-image.png&w=3840&q=75"
            alt="SyncStore hero"
            className="max-w-full h-auto rounded-xl shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}

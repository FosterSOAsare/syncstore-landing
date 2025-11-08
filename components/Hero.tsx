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
      {/* Floating icons */}
      <div className="absolute z-[15] hover:bg-primary text-blue-500 hover:text-white hover:cursor-pointer top-2 md:top-20 left-4 md:left-[8%] p-3 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm">
        <Package className="w-6 h-6" />
      </div>
      <div className="absolute z-[15] hover:bg-primary text-blue-500 hover:text-white hover:cursor-pointer top-8 md:top-32 right-6 md:right-[15%] p-3 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm rotate-12">
        <Building2 className="w-7 h-7" />
      </div>
      <div className="absolute z-[15] hover:bg-primary text-blue-500 hover:text-white hover:cursor-pointer top-70 md:top-80 left-8 md:left-[15%] p-3 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm -rotate-12">
        <WifiOff className="w-6 h-6" />
      </div>
      <div className="absolute z-[15] hover:bg-primary text-blue-500 hover:text-white hover:cursor-pointer top-[45%] md:top-[40%] right-2 md:right-[2%] p-3 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm rotate-3">
        <RefreshCw className="w-6 h-6" />
      </div>

      <div className="absolute z-[15] hover:bg-primary text-blue-500 hover:text-white hover:cursor-pointer top-[17%] md:top-[25%] right-4 md:right-[15%] p-3 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm rotate-6">
        <CreditCard className="w-6 h-6" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24 flex flex-col justify-center items-center gap-16 relative z-10">
        <div className="w-full flex flex-col items-center text-center">
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-6">
            Works perfectly offline
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold max-w-4xl text-gray-900 md:leading-[80px] tracking-tight">
            Complete inventory control across every branch
          </h1>
          <p className="mt-6 text-xl text-center text-gray-600 max-w-3xl leading-relaxed">
            Manage inventory, sales, and operations with confidence — even
            without internet. Our offline-first system keeps your business
            running smoothly across stores, warehouses, and distribution centers
            while syncing seamlessly when you're back online.
          </p>

          <div className="mt-6 flex flex-wrap justify-center items-center gap-3 text-sm text-gray-600">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full cursor-pointer hover:bg-blue-50 hover:border-blue-200 transition-all">
              <WifiOff className="w-4 h-4" />
              Works offline everywhere
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full cursor-pointer hover:bg-blue-50 hover:border-blue-200 transition-all">
              <Building2 className="w-4 h-4" />
              Multi-branch & warehouse support
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full cursor-pointer hover:bg-blue-50 hover:border-blue-200 transition-all">
              <Package className="w-4 h-4" />
              Multi-unit product variants
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full cursor-pointer hover:bg-blue-50 hover:border-blue-200 transition-all">
              <RefreshCw className="w-4 h-4" />
              Real-time sync
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full cursor-pointer hover:bg-blue-50 hover:border-blue-200 transition-all">
              <CreditCard className="w-4 h-4" />
              Built-in POS & payments
            </span>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto px-0">
            <a
              href="/demo"
              className="inline-flex items-center justify-center px-14 py-4 bg-blue-600 text-white text-base font-medium rounded-lg shadow-sm hover:bg-blue-700 transition-colors w-full sm:w-auto"
            >
              Request Demo
            </a>

            <a
              href="mailto:support@syncstore.com"
              className="inline-flex items-center justify-center px-14 py-4 bg-white border-2 border-gray-200 text-gray-900 text-base font-medium rounded-lg hover:bg-gray-50 transition-colors w-full sm:w-auto"
            >
              Contact Sales
            </a>
          </div>

          <p className="mt-6 text-sm text-gray-500">
            Free for 6 months • Setup by our team
          </p>
        </div>

        <div className="w-full flex justify-center">
          <img
            src="/screenshot.jpg"
            alt="SyncStore hero"
            className="max-w-full h-auto rounded-xl shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}

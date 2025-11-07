export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-primary/10 py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
          Ready to transform your inventory management?
        </h2>
        <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
          Join thousands of businesses managing their inventory with confidence.
          Start your free account today and experience the difference.
        </p>

        <div className="mt-10">
          <a
            href="/signin"
            className="inline-flex items-center px-16 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
          >
            Start now
          </a>
          <p className="mt-4 text-sm text-gray-600">No payment required</p>
        </div>
      </div>
    </section>
  );
}

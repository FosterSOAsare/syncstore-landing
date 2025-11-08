import WHY_CHOOSE_US_SECTIONS from "../data/posSections";

export default function WhyChooseUs() {
  const sections = WHY_CHOOSE_US_SECTIONS;

  return (
    <section className="relative overflow-hidden bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Why choose us
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Purpose-built for modern retail and distribution businesses. We
            solve the challenges that other inventory systems ignore.
          </p>
        </div>

        {/* Feature items */}
        <div className="space-y-32">
          {sections.map((s) => {
            return (
              <div
                key={s.title}
                className={`flex flex-col lg:flex-row items-stretch gap-12 ${
                  s.reverse ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image container */}
                <div className="w-full h-auto lg:w-1/2">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 h-full flex items-center justify-center shadow-sm border border-blue-100">
                    <div className="w-full h-64 md:h-full bg-white rounded-xl flex items-center justify-center text-gray-400 shadow-md">
                      <div className="text-center">
                        <div className="text-sm">Image placeholder</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2">
                  <div className="mb-6">
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                      {s.title}
                    </h3>
                  </div>

                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    {s.desc}
                  </p>

                  <ul className="space-y-4">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3">
                        <svg
                          className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5"
                          fill="none"
                          strokeWidth={2.5}
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-base text-gray-700 leading-relaxed">
                          {b}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

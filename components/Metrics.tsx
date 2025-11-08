"use client";
import React from "react";

function useCountTo(target: number, duration = 1200) {
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    let raf = 0;
    const start = Date.now();
    const tick = () => {
      const now = Date.now();
      const progress = Math.min(1, (now - start) / duration);
      setValue(Math.floor(progress * target));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);

  return value;
}

export default function Metrics() {
  const items = [
    {
      label: "Active businesses",
      value: 5000,
      suffix: "+",
    },
    {
      label: "Products tracked",
      value: 75000,
      suffix: "+",
    },
    {
      label: "Transactions daily",
      value: 50000,
      suffix: "+",
    },
  ];

  return (
    <section className="bg-white border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-8 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-gray-100">
          {items.map((it) => (
            <MetricCard
              key={it.label}
              label={it.label}
              value={it.value}
              suffix={it.suffix}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function MetricCard({
  label,
  value,
  suffix,
}: {
  label: string;
  value: number;
  suffix: string;
}) {
  const count = useCountTo(value);

  const display =
    value >= 1000 ? `${Math.floor(count).toLocaleString()}` : `${count}`;

  return (
    <div className="text-center py-4 md:py-0 first:pt-0 last:pb-0">
      <div className="text-3xl md:text-5xl font-bold text-gray-900 mb-2">
        {display}
        <span className="text-blue-600">{suffix}</span>
      </div>
      <div className="text-base text-gray-600">{label}</div>
    </div>
  );
}

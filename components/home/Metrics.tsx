"use client";
import React from "react";
import { motion, useInView } from "framer-motion";

function useCountTo(target: number, duration = 2000, shouldStart: boolean) {
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    if (!shouldStart) return;

    let raf = 0;
    const start = Date.now();
    const tick = () => {
      const now = Date.now();
      const progress = Math.min(1, (now - start) / duration);
      // Use easing function for smoother animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setValue(Math.floor(easeOutQuart * target));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, shouldStart]);

  return value;
}

export default function Metrics() {
  const items = [
    {
      label: "Active businesses",
      value: 500,
      suffix: "+",
    },
    {
      label: "Products tracked",
      value: 75000,
      suffix: "+",
    },
    {
      label: "Transactions daily",
      value: 500000,
      suffix: "+",
    },
  ];

  return (
    <section className="bg-white border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 md:py-16">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-12 divide-y md:divide-y-0 md:divide-x divide-gray-100"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {items.map((it, index) => (
            <motion.div
              key={it.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <MetricCard
                label={it.label}
                value={it.value}
                suffix={it.suffix}
              />
            </motion.div>
          ))}
        </motion.div>
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
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const count = useCountTo(value, 2000, isInView);

  const display =
    value >= 1000 ? `${Math.floor(count).toLocaleString()}` : `${count}`;

  return (
    <div
      ref={ref}
      className="text-center py-6 flex items-center justify-center flex-col  md:py-0"
    >
      <div className="text-3xl md:text-5xl font-bold text-gray-900 mb-2">
        {display}
        <span className="text-primary">{suffix}</span>
      </div>
      <div className="text-base text-gray-600">{label}</div>
    </div>
  );
}

"use client";

import { UserPlus, Settings, Rocket, TrendingUp, ArrowRight } from "lucide-react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";

export default function HowItWorks() {
  const steps = [
    {
      icon: UserPlus,
      step: "01",
      title: "Request Access",
      desc: "Book a demo. We'll configure your dedicated instance with your products and locations.",
    },
    {
      icon: Settings,
      step: "02",
      title: "Custom Setup",
      desc: "We fine-tune the system to match your workflow, from pricing tiers to staff permissions.",
    },
    {
      icon: Rocket,
      step: "03",
      title: "Go Live",
      desc: "Start selling instantly. SyncStore works perfectly offline, syncing data when you reconnect.",
    },
    {
      icon: TrendingUp,
      step: "04",
      title: "Scale Up",
      desc: "Use our analytics to optimize stock levels and grow your business across multiple branches.",
    },
  ];

  return (
    <section className="bg-[#0B0F19] py-24 relative overflow-hidden">
      {/* Ambient Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[128px] pointer-events-none" />
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Header Section (Sticky on Desktop) */}
          <div className="lg:w-1/3 lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-6">
                <span className="h-px w-8 bg-primary"></span>
                <span className="text-primary font-medium tracking-wider text-sm uppercase">
                  Workflow
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
                Simple steps <br />
                <span className="text-gray-600">to success.</span>
              </h2>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed font-light">
                We've stripped away the complexity. No long training manuals, no
                complicated installations. Just a powerful system that works.
              </p>
              <a
                href="/demo"
                className="inline-flex items-center gap-2 text-white font-bold hover:gap-4 transition-all group"
              >
                Start your journey <ArrowRight className="w-5 h-5 text-primary" />
              </a>
            </motion.div>
          </div>

          {/* Grid Section */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {steps.map((step, index) => (
              <SpotlightCard key={step.step} step={step} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SpotlightCard({ step, index }: { step: any; index: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      className="group relative border border-white/10 bg-white/5 rounded-3xl overflow-hidden"
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Spotlight Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(255,255,255,0.1),
              transparent 80%
            )
          `,
        }}
      />
      
      <div className="relative h-full p-8 flex flex-col">
        <div className="flex justify-between items-start mb-8">
          <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary/50 group-hover:text-white transition-all duration-300 shadow-lg">
            <step.icon className="w-7 h-7 text-gray-400 group-hover:text-white transition-colors duration-300" />
          </div>
          <span className="text-5xl font-bold text-white/5 font-mono select-none">
            {step.step}
          </span>
        </div>

        <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
          {step.title}
        </h3>
        <p className="text-gray-400 leading-relaxed text-sm font-light">
          {step.desc}
        </p>
      </div>
    </motion.div>
  );
}

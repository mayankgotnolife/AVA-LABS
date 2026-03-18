"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "20+", label: "Projects Delivered" },
  { value: "20 Days", label: "Average Delivery Time" },
  { value: "100%", label: "Client Satisfaction" },
];

export default function TrustSection() {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto text-center">
      
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-4xl font-bold mb-6"
      >
        Trusted by Founders & Startups 🚀
      </motion.h2>

      {/* Subtext */}
      <p className="text-gray-400 max-w-2xl mx-auto mb-16">
        We help ambitious founders build scalable products quickly and efficiently.
        From AI systems to Web3 platforms, we deliver results — not just code.
      </p>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="p-6 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-md"
          >
            <h3 className="text-3xl font-bold mb-2">
              {stat.value}
            </h3>
            <p className="text-gray-400 text-sm">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Logos / Trust Line */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-gray-500 text-sm"
      >
        Trusted by early-stage startups and growing teams worldwide
      </motion.div>

    </section>
  );
}
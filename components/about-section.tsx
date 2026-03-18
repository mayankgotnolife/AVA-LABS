"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="py-32 px-6 max-w-6xl mx-auto text-center">
      
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold mb-6"
      >
        We Build Products That Move Fast 🚀
      </motion.h2>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-gray-400 max-w-2xl mx-auto mb-16"
      >
        AVA Labs is a modern product agency focused on building AI, Web3, and
        scalable SaaS products in record time. We help founders turn ideas into
        real products without wasting months.
      </motion.p>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        
        {[
          {
            title: "⚡ Fast Execution",
            desc: "We deliver complete products in just 20 days.",
          },
          {
            title: "🧠 Elite Tech",
            desc: "We use cutting-edge AI, Web3, and modern stacks.",
          },
          {
            title: "📈 Built to Scale",
            desc: "Every product is designed for growth and performance.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="p-6 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-md hover:bg-white/10 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition"
          >
            <h3 className="text-xl font-semibold mb-3">
              {item.title}
            </h3>
            <p className="text-gray-400 text-sm">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-16"
      >
        <a
          href="/contact"
          className="px-6 py-3 bg-white text-black rounded-xl font-medium hover:scale-105 transition"
        >
          Start Your Project
        </a>
      </motion.div>

    </section>
  );
}
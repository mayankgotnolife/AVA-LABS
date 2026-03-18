"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="py-32 px-6 text-center">
      
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold mb-6"
      >
        Let’s Build Your Product in 20 Days 🚀
      </motion.h2>

      <p className="text-gray-400 mb-8 max-w-xl mx-auto">
        Turn your idea into a real, scalable product faster than ever.
      </p>

      <div className="flex justify-center gap-4">
        <button className="px-6 py-3 bg-white text-black rounded-xl font-medium hover:scale-105 transition">
          Start Project
        </button>

        <button className="px-6 py-3 border border-gray-600 rounded-xl hover:bg-gray-800 transition">
          Book a Call
        </button>
      </div>

    </section>
  );
}
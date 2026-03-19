"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-32 px-6 text-center">
      
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold mb-6"
      >
        Let’s Build Your Product in 20 Days 🚀
      </motion.h2>

      {/* Subtext */}
      <p className="text-gray-400 mb-8 max-w-xl mx-auto">
        Turn your idea into a real, scalable product faster than ever.
      </p>

      {/* Buttons */}
      <div className="flex justify-center gap-4 flex-wrap">
        
        <Link
          href="/contact"
          className="px-6 py-3 bg-white text-black rounded-xl font-medium hover:scale-105 transition"
        >
          Get Started
        </Link>

        <a
          href="https://calendly.com/dwivedyarvind67/30min"
          target="_blank"
          className="px-6 py-3 border border-white/20 rounded-xl hover:bg-white/10 transition"
        >
          Free Consultation
        </a>

      </div>

    </section>
  );
}
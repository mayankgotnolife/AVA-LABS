"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-32 px-6 mt-20">
      
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-7xl font-bold leading-tight bg-linear-to-r from-purple-400 via-blue-400 to-white bg-clip-text text-transparent"
      >
        From Idea to Product <br />
        in 20 Days
      </motion.h1>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-6 text-lg text-gray-300 max-w-2xl"
      >
        We build AI, Web3, and full-stack products faster than traditional teams.
        Launch your startup without wasting months.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-8 flex gap-4 flex-wrap justify-center"
      >
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
      </motion.div>

    </section>
  );
}
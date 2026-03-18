"use client";

import { motion } from "framer-motion";
import Link from "next/dist/client/link";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-32 px-6 mt-20">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
         className="text-5xl md:text-7xl font-bold leading-tight bg-linear-to-r from-white to-gray-400 bg-clip-text text-transparent">
  From Idea to Product <br />
  in 20 Days
</motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-6 text-lg text-gray-400 max-w-2xl"
      >
        We build AI, Web3, and full-stack products faster than traditional teams.
        Launch your startup without wasting months.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-8 flex gap-4"
      >
        <div className="mt-8 flex gap-4">
  
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
      </motion.div>
    </section>
  );
}

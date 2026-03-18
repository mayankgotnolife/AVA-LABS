"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Rahul Sharma",
    text: "AVA Labs delivered our MVP in record time. Super professional team.",
  },
  {
    name: "Ankit Verma",
    text: "Their AI solutions helped us scale faster than expected.",
  },
  {
    name: "Sneha Gupta",
    text: "Best decision we made. Fast, reliable, and highly skilled.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-32 px-6 max-w-6xl mx-auto text-center">
      
      <h2 className="text-4xl font-bold mb-16">
        What Clients Say
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="p-6 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-md"
          >
            <p className="text-gray-300 mb-4">
              "{t.text}"
            </p>
            <h4 className="text-sm text-gray-400">
              — {t.name}
            </h4>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
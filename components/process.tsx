"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "Discover",
    desc: "We understand your idea, goals, and product vision.",
  },
  {
    title: "Build",
    desc: "Rapid development using modern tech stacks.",
  },
  {
    title: "Launch",
    desc: "Deploy a fully functional product in record time.",
  },
  {
    title: "Scale",
    desc: "Optimize, improve, and grow your product.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-32 px-6 max-w-6xl mx-auto text-center">
      
      {/* Heading */}
      <h2 className="text-4xl font-bold mb-4">
        Built in 20 Days ⚡
      </h2>

      <p className="text-gray-400 mb-16 max-w-2xl mx-auto">
        From idea to launch, our streamlined process ensures speed without
        compromising quality.
      </p>

      {/* Steps */}
      <div className="grid md:grid-cols-4 gap-8">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-6 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-md"
          >
            <div className="text-2xl font-bold mb-3">
              {i + 1}
            </div>
            <h3 className="text-lg font-semibold mb-2">
              {step.title}
            </h3>
            <p className="text-gray-400 text-sm">
              {step.desc}
            </p>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
"use client";

import { motion } from "framer-motion";

const team = [
  {
    title: "Elite Engineers",
    desc: "Top-tier developers building scalable, high-performance web applications.",
    icon: "⚡",
  },
  {
    title: "Full Stack Experts",
    desc: "Skilled in both frontend and backend development to create seamless, end-to-end products.",
    icon: "💻",
  },
  {
    title: "Gen AI Specialists",
    desc: "Pioneering AI-driven products with expertise in machine learning, NLP, and intelligent systems.",
    icon: "🤖",
  },
  {
    title: "AI Specialists",
    desc: "Experts in AI systems, automation, and intelligent product development.",
    icon: "🧠",
  },
  {
    title: "Web3 Architects",
    desc: "Designing secure smart contracts, DeFi systems, and next-gen decentralized platforms.",
    icon: "⛓️",
  },
];

export default function TeamSection() {
  return (
    <section className="py-32 px-6 max-w-6xl mx-auto text-center">
      
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold mb-6"
      >
        A Small Team. Big Results.
      </motion.h2>

      {/* Subtext */}
      <p className="text-gray-400 max-w-2xl mx-auto mb-16">
        We are a highly skilled team of engineers and product experts focused on building
        cutting-edge AI, Web3, and scalable SaaS products — fast.
      </p>

      {/* Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {team.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="p-6 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-md hover:bg-white/10 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition"
          >
            {/* Icon */}
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-linear-to-r from-purple-500 to-blue-500 flex items-center justify-center text-xl">
              {item.icon}
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold mb-2">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-gray-400 text-sm">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Tech Stack Strip */}
      <div className="mt-12 flex justify-center flex-wrap gap-4 text-gray-400 text-sm">
        <span>Next.js</span>
        <span>•</span>
        <span>AI / ML</span>
        <span>•</span>
        <span>Blockchain</span>
        <span>•</span>
        <span>Smart Contracts</span>
        <span>•</span>
        <span>Cloud</span>
      </div>

      {/* Closing Line */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-16 text-gray-400 max-w-xl mx-auto"
      >
        From AI-driven systems to decentralized Web3 platforms, we build products at the edge of technology.
      </motion.p>

    </section>
  );
}
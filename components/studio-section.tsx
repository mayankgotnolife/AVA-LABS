"use client";

import { motion } from "framer-motion";

const items = [
  {
    title: "⚡ Fast Execution",
    desc: "We move quickly from idea to product without unnecessary delays.",
  },
  {
    title: "🧠 Deep Thinking",
    desc: "Every product is designed with scalability and performance in mind.",
  },
  {
    title: "🎯 Product Focus",
    desc: "We build products that solve real problems and deliver value.",
  },
  {
    title: "🤖 AI-Driven Workflow",
    desc: "We use AI tools to accelerate development and automate workflows.",
  },
  {
    title: "⛓️ Web3 Ready",
    desc: "We build decentralized apps and blockchain-based systems.",
  },
  {
    title: "🎬 Video Editing & Reels",
    desc: "High-quality reels, product videos, and social media content for growth.",
  },
  {
    title: "📱 Content Creation",
    desc: "Engaging content designed for Instagram, YouTube, and digital platforms.",
  },
  {
    title: "🚀 Startup Mentality",
    desc: "Lean, fast, and focused on delivering results that matter.",
  },
];

export default function StudioSection() {
  return (
    <section className="py-32 px-6 max-w-6xl mx-auto text-center">
      
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold mb-6"
      >
        Inside AVA Labs Studio 🎨
      </motion.h2>

      {/* Subtext */}
      <p className="text-gray-400 max-w-2xl mx-auto mb-16">
        We operate like a modern digital lab — building products, AI systems, and
        high-performing content with speed and precision.
      </p>

      {/* Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="p-6 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-md hover:bg-white/10 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition"
          >
            <h3 className="text-xl font-semibold mb-2">
              {item.title}
            </h3>
            <p className="text-gray-400 text-sm">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Workflow Line */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-16 text-gray-400"
      >
        <p>
          From concept → design → development → launch — everything happens inside our studio.
        </p>
      </motion.div>

      {/* Video Editing Strip */}
      <div className="mt-10 flex justify-center flex-wrap gap-4 text-gray-500 text-sm">
        <span>Reels Editing</span>
        <span>•</span>
        <span>Short-form Content</span>
        <span>•</span>
        <span>YouTube Editing</span>
        <span>•</span>
        <span>Motion Graphics</span>
      </div>

      {/* Tech Stack */}
      <div className="mt-16">
        <h3 className="text-xl font-semibold mb-6 text-gray-300">
          Our Tech Stack
        </h3>

        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
          
          {/* Frontend */}
          <span className="px-4 py-2 bg-white/10 rounded-full">Next.js</span>
          <span className="px-4 py-2 bg-white/10 rounded-full">React</span>
          <span className="px-4 py-2 bg-white/10 rounded-full">Tailwind CSS</span>
          <span className="px-4 py-2 bg-white/10 rounded-full">TypeScript</span>

          {/* Backend */}
          <span className="px-4 py-2 bg-white/10 rounded-full">Node.js</span>
          <span className="px-4 py-2 bg-white/10 rounded-full">Express</span>
          <span className="px-4 py-2 bg-white/10 rounded-full">Prisma</span>

          {/* Database */}
          <span className="px-4 py-2 bg-white/10 rounded-full">PostgreSQL</span>
          <span className="px-4 py-2 bg-white/10 rounded-full">MongoDB</span>

          {/* AI */}
          <span className="px-4 py-2 bg-white/10 rounded-full">OpenAI</span>
          <span className="px-4 py-2 bg-white/10 rounded-full">LangChain</span>
          <span className="px-4 py-2 bg-white/10 rounded-full">LlamaIndex</span>
          <span className="px-4 py-2 bg-white/10 rounded-full">AI Agents</span>

          {/* Web3 */}
          <span className="px-4 py-2 bg-white/10 rounded-full">Solidity</span>
          <span className="px-4 py-2 bg-white/10 rounded-full">Ethers.js</span>
          <span className="px-4 py-2 bg-white/10 rounded-full">Hardhat</span>

          {/* DevOps */}
          <span className="px-4 py-2 bg-white/10 rounded-full">Docker</span>
          <span className="px-4 py-2 bg-white/10 rounded-full">Vercel</span>
          <span className="px-4 py-2 bg-white/10 rounded-full">AWS</span>

        </div>
      </div>

      {/* Closing Line */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-16 text-gray-400 max-w-xl mx-auto"
      >
        From AI-driven systems to high-performing content and decentralized platforms,
        we build everything needed to grow in today’s digital world.
      </motion.p>

    </section>
  );
}
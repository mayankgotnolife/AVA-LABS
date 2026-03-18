"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "AI Content Automation Platform",
    desc: "Built a Gen AI platform that automates content creation using AI agents and NLP models.",
    result: "Reduced content creation time by 80%",
    tag: "AI / Gen AI",
    time: "18 Days",
  },
  {
    title: "Web3 NFT Marketplace",
    desc: "Developed a decentralized marketplace with smart contracts and wallet integration.",
    result: "Handled 10K+ transactions seamlessly",
    tag: "Web3",
    time: "20 Days",
  },
  {
    title: "Startup MVP (SaaS Dashboard)",
    desc: "Designed and launched a full-stack SaaS MVP with authentication, dashboards, and APIs.",
    result: "Launched from idea to product in record time",
    tag: "SaaS",
    time: "15 Days",
  },
  {
    title: "AI Agent Workflow System",
    desc: "Created autonomous AI agents to handle workflows, automation, and decision-making.",
    result: "Improved business efficiency by 60%",
    tag: "AI Agents",
    time: "20 Days",
  },
  {
    title: "Reels & Content Engine",
    desc: "Built a system for creating and editing high-performing short-form video content.",
    result: "Boosted engagement across social platforms",
    tag: "Content / Video",
    time: "12 Days",
  },
  {
    title: "Full Stack Product Platform",
    desc: "Engineered a scalable platform with modern frontend, backend, and cloud deployment.",
    result: "Production-ready system with high scalability",
    tag: "Full Stack",
    time: "20 Days",
  },
];

export default function CaseStudies() {
  return (
    <section id="work" className="py-32 px-6 max-w-7xl mx-auto">
      
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold text-center mb-6"
      >
        Selected Work 💼
      </motion.h2>

      <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
        Real products built with speed, precision, and modern technology.
      </p>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="p-6 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-md hover:bg-white/10 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition"
          >
            {/* Tag */}
            <span className="text-xs text-gray-400 bg-white/10 px-3 py-1 rounded-full">
              {project.tag}
            </span>

            {/* Title */}
            <h3 className="text-xl font-semibold mt-4 mb-2">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-gray-400 text-sm mb-3">
              {project.desc}
            </p>

            {/* Result */}
            <p className="text-sm text-white mb-3">
              🚀 {project.result}
            </p>

            {/* Footer */}
            <div className="flex justify-between text-xs text-gray-500">
              <span>Built in {project.time}</span>
              <span>Case Study →</span>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
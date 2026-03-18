"use client";

import { motion } from "framer-motion";

const blogs = [
  {
    title: "Building AI Agents for Real-World Automation",
    desc: "How autonomous AI agents are transforming workflows, decision-making, and business operations.",
    tag: "AI Agents",
  },
  {
    title: "Gen AI Products: From Idea to Reality",
    desc: "A complete guide to building generative AI products using modern tools and APIs.",
    tag: "Gen AI",
  },
  {
    title: "AI Integration in Modern Applications",
    desc: "How to integrate AI into your apps to unlock smarter user experiences and automation.",
    tag: "AI",
  },
  {
    title: "How to Build an MVP in 20 Days",
    desc: "Launch your startup fast with a structured and efficient development process.",
    tag: "Startup",
  },
  {
    title: "Web3: The Future of Digital Products",
    desc: "Understanding blockchain, smart contracts, and decentralized ecosystems.",
    tag: "Web3",
  },
  {
    title: "Full Stack Systems for Scalable Products",
    desc: "Building robust backend and frontend systems that scale with your business.",
    tag: "Engineering",
  },
];

export default function BlogSection() {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto">
      
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold text-center mb-6"
      >
        Insights on AI, Web3 & Modern Tech ✍️
      </motion.h2>

      <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
        We explore AI agents, generative AI, Web3, and scalable systems to help
        founders build smarter and faster products.
      </p>

      {/* Blog Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, i) => (
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
              {blog.tag}
            </span>

            {/* Title */}
            <h3 className="text-xl font-semibold mt-4 mb-2">
              {blog.title}
            </h3>

            {/* Description */}
            <p className="text-gray-400 text-sm mb-4">
              {blog.desc}
            </p>

            {/* Read More */}
            <button className="text-sm text-white hover:underline">
              Read More →
            </button>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-16">
        <button className="px-6 py-3 bg-white text-black rounded-xl font-medium hover:scale-105 transition">
          Explore More Insights
        </button>
      </div>

    </section>
  );
}
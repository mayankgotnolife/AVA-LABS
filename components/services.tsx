"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "AI Development",
    desc: "Custom AI apps, chatbots, and intelligent systems.",
  },
  {
    title: "Web3 Development",
    desc: "Blockchain apps, smart contracts, and dApps.",
  },
  {
    title: "MVP Development",
    desc: "Launch your startup idea in record time.",
  },
  {
    title: "Full Stack Apps",
    desc: "Scalable SaaS and web platforms.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32 px-6 max-w-7xl mx-auto">
      
      <h2 className="text-4xl font-bold text-center mb-16">
        What We Build
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="p-6 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-md hover:bg-white/10 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition duration-300"
          >
            <h3 className="text-xl font-semibold mb-3">
              {service.title}
            </h3>
            <p className="text-gray-400 text-sm">
              {service.desc}
            </p>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
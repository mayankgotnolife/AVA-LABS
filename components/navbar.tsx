"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed top-0 left-0 w-full z-100 backdrop-blur-lg border-b border-white/10 transition ${
        scrolled ? "bg-black/80" : "bg-black/40"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo (Clickable) */}
        <Link href="/">
          <h1 className="text-xl font-bold tracking-widest cursor-pointer">
            AVA LABS
          </h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">
          <Link href="#services">Services</Link>
          <Link href="#work">Work</Link>
          <Link href="#process">Process</Link>
          <Link href="/about">About</Link>
          <Link href="/team">Team</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/studio">Studio</Link>
        </div>

        {/* 🔥 DESKTOP CTA (2 BUTTONS NOW) */}
        <div className="hidden md:flex items-center gap-4">
          
          {/* Calendly */}
          <a
            href="https://calendly.com/yourname/30min"
            target="_blank"
            className="px-4 py-2 border border-white/20 rounded-lg text-sm hover:bg-white/10 transition"
          >
            Free Consultation
          </a>

          {/* Contact */}
          <Link
            href="/contact"
            className="px-4 py-2 bg-white text-black rounded-lg text-sm font-medium hover:scale-105 transition"
          >
            Start Project
          </Link>

        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-white/10 transition"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-black/95 backdrop-blur-lg px-6 py-6 flex flex-col gap-6 text-gray-300"
        >
          {/* Scroll Links */}
          <Link href="#services" onClick={() => setOpen(false)}>Services</Link>
          <Link href="#work" onClick={() => setOpen(false)}>Work</Link>
          <Link href="#process" onClick={() => setOpen(false)}>Process</Link>

          {/* Pages */}
          <Link href="/about" onClick={() => setOpen(false)}>About</Link>
          <Link href="/team" onClick={() => setOpen(false)}>Team</Link>
          <Link href="/blog" onClick={() => setOpen(false)}>Blog</Link>
          <Link href="/studio" onClick={() => setOpen(false)}>Studio</Link>

          {/* 🔥 Mobile CTA */}
          <a
            href="https://calendly.com/yourname/30min"
            target="_blank"
            onClick={() => setOpen(false)}
            className="px-4 py-2 border border-white/20 rounded-lg text-center"
          >
            Free Consultation
          </a>

          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="px-4 py-2 bg-white text-black rounded-lg text-center font-medium"
          >
            Start Project
          </Link>
        </motion.div>
      )}
    </motion.nav>
  );
}
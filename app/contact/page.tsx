"use client";

export default function Contact() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      
      <form
        action="https://formspree.io/f/mzdjyaoj"
        method="POST"
        className="w-full max-w-xl space-y-6"
      >
        <h1 className="text-4xl font-bold text-center">
          Contact Us
        </h1>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full p-3 bg-white/10 rounded-lg outline-none"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full p-3 bg-white/10 rounded-lg outline-none"
        />

        <textarea
          name="message"
          placeholder="Your Project Idea..."
          className="w-full p-3 bg-white/10 rounded-lg outline-none"
          rows={5}
        />

        <button
          type="submit"
          className="w-full py-3 bg-white text-black rounded-lg font-medium hover:scale-105 transition"
        >
          Send Message
        </button>
      </form>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919981972908"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg hover:scale-110 transition z-100"
      >
        WhatsApp
      </a>

    </main>
  );
}
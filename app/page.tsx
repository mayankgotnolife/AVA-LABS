import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Services from "@/components/services";
import CaseStudies from "@/components/caseStudies";
import Process from "@/components/process";
import Testimonials from "@/components/testimonials";
import CTA from "@/components/cta";
import Footer from "@/components/footer";
import TrustSection from "@/components/trust-section";
import BlogSection from "@/components/blog-section";
import StudioSection from "@/components/studio-section";

export default function Home() {
  
  return (
    <main className="relative bg-black text-white overflow-hidden">
      
      {/* Gradient Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-25 left-1/2 -translate-x-1/2 w-200 h-200 bg-purple-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-25 right-1/2 translate-x-1/2 w-200 h-200 bg-blue-500/20 rounded-full blur-[120px]" />
      </div>

      <Navbar />
      <Hero />
      <Services />
      <CaseStudies />
      <Process />
      <Testimonials />
      <CTA />
      <Footer />
      <TrustSection />
      <BlogSection />
      <StudioSection />

    </main>
  );
}

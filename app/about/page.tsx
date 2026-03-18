import Navbar from "@/components/navbar";
import AboutSection from "@/components/about-section";
import Footer from "@/components/footer";

export default function AboutPage() {
  return (
    <main className="bg-black text-white">
      <Navbar />
      <AboutSection />
      <Footer />
    </main>
  );
}
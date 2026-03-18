import Navbar from "@/components/navbar";
import StudioSection from "@/components/studio-section";
import Footer from "@/components/footer";

export default function StudioPage() {
  return (
    <main className="bg-black text-white">
      <Navbar />
      <StudioSection />
      <Footer />
    </main>
  );
}
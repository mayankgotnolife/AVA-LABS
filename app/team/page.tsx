import Navbar from "@/components/navbar";
import TeamSection from "@/components/team-section";
import Footer from "@/components/footer";

export default function TeamPage() {
  return (
    <main className="bg-black text-white">
      <Navbar />
      <TeamSection />
      <Footer />
    </main>
  );
}
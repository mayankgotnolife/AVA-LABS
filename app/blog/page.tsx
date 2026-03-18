import Navbar from "@/components/navbar";
import BlogSection from "@/components/blog-section";
import Footer from "@/components/footer";

export default function BlogPage() {
  return (
    <main className="bg-black text-white">
      <Navbar />
      <BlogSection />
      <Footer />
    </main>
  );
}
import Navbar from "@/components/layout/navbar";
import HeroSection from "@/components/sections/hero-section";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        {/* Other sections will go here */}
      </main>
      <Footer />
    </div>
  );
}

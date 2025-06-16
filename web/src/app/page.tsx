import Navbar from "@/components/layout/navbar";
import HeroSection from "@/components/sections/hero-section";
import AgentFlowVisualizerSection from "@/components/sections/agent-flow-visualizer-section";
import DashboardPreviewSection from "@/components/sections/dashboard-preview-section";
import AgentGallerySection from "@/components/sections/agent-gallery-section";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <AgentFlowVisualizerSection />
        <DashboardPreviewSection />
        <AgentGallerySection />
        {/* You could add a Contact/CTA section here later */}
      </main>
      <Footer />
    </div>
  );
}

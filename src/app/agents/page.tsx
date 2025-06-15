
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import AgentGallerySection from "@/components/sections/agent-gallery-section";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";

export default function AgentsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="mb-8">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href="/">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Agents</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        <header className="mb-12 md:mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-center font-headline">
            The HydroGen <span className="text-glow-primary">Agent Network</span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto text-center">
            Explore our specialized AI agents, each designed to tackle specific challenges within your payment ecosystem. Together, they form a powerful, adaptive defense and optimization network.
          </p>
        </header>
        <AgentGallerySection />
      </main>
      <Footer />
    </div>
  );
}


import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BookOpen,
  ChevronRight,
  Cpu,
  Database,
  HelpCircle,
  LayoutDashboard,
  PlayCircle,
  Puzzle,
  Share2,
} from "lucide-react";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const DocsSectionCard = ({
  title,
  icon: Icon,
  children,
  link,
  linkLabel,
  iconGlowClass = "text-glow-accent",
}: {
  title: string;
  icon: React.ElementType;
  children: React.ReactNode;
  link?: string;
  linkLabel?: string;
  iconGlowClass?: string;
}) => (
  <Card className="bg-card/70 border-border/70 backdrop-blur-sm glassmorphism flex flex-col">
    <CardHeader className="flex flex-row items-center gap-4">
      <Icon className={`w-8 h-8 ${iconGlowClass}`} />
      <CardTitle className="text-2xl font-semibold font-headline">{title}</CardTitle>
    </CardHeader>
    <CardContent className="flex-grow space-y-3 text-muted-foreground">
      {children}
      {link && linkLabel && (
        <div className="mt-4">
          <Button variant="outline" asChild className="border-primary text-primary hover:bg-primary/10 hover:text-primary group">
            <Link href={link}>
              <span className="flex items-center">
                {linkLabel}
                <ChevronRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </Button>
        </div>
      )}
    </CardContent>
  </Card>
);

export default function DocsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="flex-grow">
        {/* Breadcrumbs */}
        <div className="container mx-auto px-4 md:px-6 py-6">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Documentation</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Hero Section */}
        <section className="py-12 md:py-16 bg-gradient-to-b from-background to-background/90 relative">
          <div className="hero-blur-circle bg-primary/20 w-80 h-80 top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="hero-blur-circle bg-accent/20 w-72 h-72 top-1/3 right-1/4 translate-x-1/2 -translate-y-1/2"></div>
          <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
            <BookOpen className="w-16 h-16 mx-auto mb-6 text-glow-primary" />
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 font-headline">
              HydroGen <span className="text-glow-primary">Documentation</span>
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground mb-10">
              Welcome to the official HydroGen documentation. Find guides, tutorials, and references to help you make the most of our autonomous payment resilience platform.
            </p>
          </div>
        </section>

        {/* Documentation Sections */}
        <section className="py-16 md:py-24 bg-background/90">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <DocsSectionCard
                title="Getting Started"
                icon={PlayCircle}
                linkLabel="Try the Interactive Demo"
                link="/demo"
                iconGlowClass="text-glow-primary"
              >
                <p>
                  New to HydroGen? This section will guide you through the initial setup, platform overview, and how to run your first analysis using our interactive demo.
                </p>
                <ul className="list-disc list-inside space-y-1 pl-2">
                  <li>Platform Overview</li>
                  <li>Running the Demo</li>
                  <li>Understanding Your First Results</li>
                </ul>
              </DocsSectionCard>

              <DocsSectionCard
                title="Core Concepts"
                icon={Cpu}
                linkLabel="Explore Agent Capabilities"
                link="/agents"
                iconGlowClass="text-glow-accent"
              >
                <p>
                  Dive deep into the architecture and fundamental principles of HydroGen. Learn about our specialized AI agents, the data analysis pipeline, and how they work together.
                </p>
                <ul className="list-disc list-inside space-y-1 pl-2">
                  <li>The HydroGen Ecosystem</li>
                  <li>How AI Agents Collaborate</li>
                  <li>Data Processing & Analysis Flow</li>
                  <li>Security & Compliance</li>
                </ul>
              </DocsSectionCard>

              <DocsSectionCard
                title="Using the Dashboard"
                icon={LayoutDashboard}
                iconGlowClass="text-glow-primary"
              >
                <p>
                  Master the HydroGen dashboard to monitor your payment operations, visualize key metrics, and gain actionable insights from agent activity.
                </p>
                <ul className="list-disc list-inside space-y-1 pl-2">
                  <li>Navigating Key Metrics</li>
                  <li>Interpreting Charts & Graphs</li>
                  <li>Understanding Agent Logs</li>
                  <li>Customizing Your View (if applicable)</li>
                </ul>
              </DocsSectionCard>

              <DocsSectionCard
                title="Agent Deep Dive"
                icon={Puzzle}
                linkLabel="View All Agent Profiles"
                link="/agents"
                iconGlowClass="text-glow-emerald"
              >
                <p>
                  Explore detailed profiles of each specialized AI agent within the HydroGen network. Understand their specific roles, capabilities, and the metrics they influence.
                </p>
                <ul className="list-disc list-inside space-y-1 pl-2">
                  <li>Cerebrum: The Orchestrator</li>
                  <li>Chimera: Fraud Detection</li>
                  <li>Synapse: Self-Healing Router</li>
                  <li>And more...</li>
                </ul>
              </DocsSectionCard>
              
              <DocsSectionCard
                title="API Reference"
                icon={Share2}
                iconGlowClass="text-glow-yellow"
              >
                <p>
                  For developers looking to integrate HydroGen with other systems or build custom solutions, this section will provide detailed API documentation. (Coming Soon)
                </p>
                <ul className="list-disc list-inside space-y-1 pl-2">
                  <li>Authentication</li>
                  <li>Available Endpoints</li>
                  <li>Request/Response Formats</li>
                  <li>Rate Limits</li>
                </ul>
              </DocsSectionCard>

              <DocsSectionCard
                title="FAQ & Troubleshooting"
                icon={HelpCircle}
                iconGlowClass="text-glow-orange"
              >
                <p>
                  Find answers to common questions and solutions to potential issues. If you can't find what you're looking for, learn how to contact our support team.
                </p>
                <ul className="list-disc list-inside space-y-1 pl-2">
                  <li>Common Questions</li>
                  <li>Troubleshooting Steps</li>
                  <li>Best Practices</li>
                  <li>Contacting Support</li>
                </ul>
              </DocsSectionCard>
            </div>
          </div>
        </section>
        
        {/* Further Assistance */}
        <section className="py-16 md:py-20 text-center bg-background">
            <div className="container mx-auto px-4 md:px-6">
                 <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-headline mb-4">
                    Need Further Assistance?
                </h2>
                <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto mb-8">
                    Our team is here to help you get the most out of HydroGen. Don't hesitate to reach out.
                </p>
                <Button size="lg" className="group bg-primary hover:bg-primary/90 text-primary-foreground box-shadow-glow-primary" asChild>
                    <Link href="/#contact"> {/* Reverted href */}
                      <span className="flex items-center">
                        Contact Support
                        <ChevronRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Link>
                </Button>
            </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}

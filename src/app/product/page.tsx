
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Activity,
  ArrowRight,
  CheckCircle,
  FileText,
  Lightbulb,
  Lock,
  MessageSquare,
  ShieldAlert,
  Users,
  Zap,
  DollarSign,
  TrendingUp,
  Brain,
  Eye,
  Settings
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
import Image from "next/image";

const featureCards = [
  {
    icon: Activity,
    title: "Real-Time AI Data Analysis",
    description: "Visualize and understand complex transaction data as it flows. Our AI models analyze patterns, detect anomalies, and provide instant risk assessments.",
    glowClass: "text-glow-primary",
  },
  {
    icon: MessageSquare,
    title: "Simulated Agent Log Trace",
    description: "Gain unparalleled transparency into AI decision-making. Follow a detailed log trace simulating each agent's assessment and Cerebrum's final conclusion.",
    glowClass: "text-glow-accent",
  },
  {
    icon: Lock,
    title: "Secured Payments & Enhanced Routing",
    description: "Ensure end-to-end security for all transactions. Benefit from dynamic routing that optimizes for success rates, cost, and speed, with automatic re-routing on failures.",
    glowClass: "text-glow-primary",
  },
  {
    icon: ShieldAlert,
    title: "Comprehensive Risk Detection",
    description: "Proactively identify diverse risks including fraudulent patterns (Chimera), gateway degradation (Chronos), identity anomalies (Persona), and transaction mismatches (Abacus).",
    glowClass: "text-glow-emerald",
  },
  {
    icon: Users,
    title: "Interactive Agent Ecosystem",
    description: "Explore and understand each specialized AI agent. The system supports interaction, allowing deep dives into individual agent contributions and performance.",
    glowClass: "text-glow-accent",
  },
  {
    icon: Lightbulb,
    title: "Actionable Insights & Transparency",
    description: "Empower stakeholders with clear, actionable data and AI-driven insights. Understand your payment operations and identify areas for improvement and cost savings.",
    glowClass: "text-glow-yellow",
  },
];

const benefitItems = [
  {
    icon: DollarSign,
    text: "Reduce fraudulent transactions and financial losses significantly.",
  },
  {
    icon: TrendingUp,
    text: "Maximize payment success rates and improve customer satisfaction.",
  },
  {
    icon: Zap,
    text: "Enhance operational efficiency with automated detection and resolution.",
  },
  {
    icon: Brain,
    text: "Gain deeper, AI-powered insights for strategic decision-making.",
  },
  {
    icon: Settings,
    text: "Optimize payment processing costs through intelligent routing.",
  },
  {
    icon: Eye,
    text: "Achieve unparalleled transparency into your payment ecosystem.",
  },
];

export default function ProductPage() {
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
                <BreadcrumbPage>Product</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-background to-background/90 relative">
           <div className="hero-blur-circle bg-primary/20 w-80 h-80 top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2"></div>
           <div className="hero-blur-circle bg-accent/20 w-72 h-72 top-1/3 right-1/4 translate-x-1/2 -translate-y-1/2"></div>
          <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 font-headline">
              HydroGen: The Future of <span className="text-glow-primary">Autonomous Payment Resilience</span>
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground mb-10">
              Discover how our AI-powered platform safeguards your revenue, optimizes operations, and provides unparalleled insights into your payment ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="group bg-primary hover:bg-primary/90 text-primary-foreground box-shadow-glow-primary" asChild>
                <Link href="/demo">
                    Request a Demo
                    <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                </Button>
                <Button variant="outline" size="lg" className="border-accent text-accent hover:bg-accent/10 hover:border-accent hover:text-accent group" asChild>
                <Link href="/contact">
                    Contact Sales
                </Link>
                </Button>
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="py-16 md:py-24 bg-background/90">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-headline">
                Unlock Unprecedented <span className="text-glow-accent">Payment Intelligence</span>
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                HydroGen combines cutting-edge AI with a deep understanding of payment complexities to deliver a truly transformative solution.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featureCards.map((feature) => (
                <Card key={feature.title} className="bg-card/70 border-border/70 backdrop-blur-sm glassmorphism flex flex-col hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10">
                  <CardHeader className="flex-shrink-0">
                    <div className="flex items-center gap-4">
                      <feature.icon className={`w-10 h-10 ${feature.glowClass}`} />
                      <CardTitle className={`text-xl font-semibold ${feature.glowClass.includes('violet') || feature.glowClass.includes('primary') ? 'text-primary' : feature.glowClass.includes('cyan') || feature.glowClass.includes('accent') ? 'text-accent' : ''}`}>{feature.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Placeholder Image Section */}
        <section className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4 md:px-6 text-center">
                 <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-headline mb-4">
                    Visualize the <span className="text-glow-primary">Power of HydroGen</span>
                </h2>
                <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                    An intuitive dashboard provides a comprehensive overview of your payment ecosystem, agent performance, and critical insights.
                </p>
                <div className="rounded-lg overflow-hidden shadow-2xl border border-border/50 max-w-4xl mx-auto">
                    <Image
                        src="https://placehold.co/1200x600.png"
                        alt="HydroGen Dashboard Preview"
                        width={1200}
                        height={600}
                        className="w-full h-auto"
                        data-ai-hint="dashboard fintech"
                    />
                </div>
            </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 md:py-24 bg-background/90">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-headline">
                Transform Your <span className="text-glow-primary">Payment Operations</span>
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                With HydroGen, you're not just managing payments; you're mastering them.
              </p>
            </div>
            <div className="max-w-3xl mx-auto space-y-6">
              {benefitItems.map((benefit) => (
                <div key={benefit.text} className="flex items-start gap-4 p-4 rounded-lg bg-card/50 border border-border/50 glassmorphism">
                  <CheckCircle className="w-8 h-8 text-emerald-500 flex-shrink-0 mt-1" />
                  <p className="text-lg text-foreground/90">{benefit.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 md:py-32 bg-gradient-to-t from-background to-background/90 text-center">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 font-headline">
              Ready to Revolutionize Your <span className="text-glow-accent">Payments?</span>
            </h2>
            <p className="max-w-xl mx-auto text-lg text-muted-foreground mb-10">
              Schedule a personalized demo or contact our experts to learn how HydroGen can empower your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <Button size="lg" className="group bg-accent hover:bg-accent/90 text-accent-foreground box-shadow-glow-accent" asChild>
                <Link href="/demo">
                    Experience the Demo
                    <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                </Button>
                <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10 hover:border-primary hover:text-primary group" asChild>
                <Link href="/contact">
                    Speak to an Expert
                </Link>
                </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative w-full py-20 md:py-32 lg:py-40 bg-background text-foreground overflow-hidden">
      {/* Decorative gradient blurs */}
      <div className="hero-blur-circle bg-primary/30 w-64 h-64 top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="hero-blur-circle bg-accent/30 w-72 h-72 bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium border border-primary/30">
            <Zap size={16} className="inline mr-2" />
            AI-Powered Payment Intelligence
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight font-headline">
            Autonomous Infrastructure for <span className="text-glow-primary">Payment Resilience</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            AI agents that detect, heal, and optimize payment flows in real time. Experience the future of financial operations with HydroGen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="group bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-primary/40 focus-visible:ring-primary"
              asChild
            >
              <Link href="/#demo">
                See HydroGen in Action
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="group border-border hover:bg-accent/10 hover:border-accent hover:text-accent transition-all duration-300 transform hover:scale-105 focus-visible:ring-accent" asChild>
              <Link href="/docs">
                Read Documentation
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ShieldCheck,
  Zap,
  Users,
  Brain,
  Scale,
  SearchCode,
  History,
  Lightbulb,
  Gavel,
  ArrowRight
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Agent {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  href: string;
  glowClass: string;
}

const agents: Agent[] = [
  {
    id: "cerebrum",
    name: "Cerebrum",
    description: "Orchestrator & Decision Engine. Coordinates agents, applies policies.",
    icon: Brain,
    href: "/agents/cerebrum",
    glowClass: "text-glow-violet", 
  },
  {
    id: "chimera",
    name: "Chimera",
    description: "Fraud Detection Sentinel. Detects suspicious patterns in real-time.",
    icon: ShieldCheck,
    href: "/agents/chimera",
    glowClass: "text-glow-emerald",
  },
  {
    id: "synapse",
    name: "Synapse",
    description: "Self-Healing Router. Diagnoses failures, reroutes transactions.",
    icon: Zap,
    href: "/agents/synapse",
    glowClass: "text-glow-cyan",
  },
  {
    id: "abacus",
    name: "Abacus",
    description: "Reconciliation & Ledger Validator. Prevents financial leakage.",
    icon: Scale,
    href: "/agents/abacus",
    glowClass: "text-glow-yellow",
  },
  {
    id: "persona",
    name: "Persona",
    description: "User Identity & Trust Engine. Provides dynamic trust scores.",
    icon: Users,
    href: "/agents/persona",
    glowClass: "text-glow-orange",
  },
  {
    id: "nexus",
    name: "Nexus",
    description: "Root Cause Analyzer. Diagnoses systemic failures & error cascades.",
    icon: SearchCode,
    href: "/agents/nexus",
    glowClass: "text-glow-violet",
  },
  {
    id: "chronos",
    name: "Chronos",
    description: "Live Gateway Health Monitor. Observes payment gateway performance.",
    icon: History,
    href: "/agents/chronos",
    glowClass: "text-glow-emerald",
  },
  {
    id: "oracle",
    name: "Oracle",
    description: "Strategic Intelligence Optimizer. Tracks long-term performance.",
    icon: Lightbulb,
    href: "/agents/oracle",
    glowClass: "text-glow-cyan",
  },
  {
    id: "aegis",
    name: "Aegis",
    description: "Governance & Audit Guardian. Maintains transparency & compliance.",
    icon: Gavel,
    href: "/agents/aegis",
    glowClass: "text-glow-yellow",
  },
];

export default function AgentGallerySection() {
  return (
    <section id="agents" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-headline">
            Meet the <span className="text-glow-primary">HydroGen Agents</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Our network of specialized AI agents works synergistically to ensure your payment infrastructure is resilient, secure, and optimized.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {agents.map((agent) => (
            <Link key={agent.id} href={agent.href} className="block group">
              <Card className="h-full bg-card hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 glassmorphism">
                <CardHeader className="flex flex-row items-center gap-4 pb-4">
                  <agent.icon className={cn("w-10 h-10", agent.glowClass)} />
                  <CardTitle className={cn("text-xl font-semibold group-hover:text-primary transition-colors", agent.glowClass.includes('violet') ? 'text-primary' : agent.glowClass.includes('cyan') ? 'text-accent' : '')}>{agent.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{agent.description}</p>
                  <div className="mt-4 text-sm font-medium text-primary group-hover:underline flex items-center">
                    Learn More <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 hover:text-primary hover:border-primary group" asChild>
            <Link href="/agents">
              Explore All Agents <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

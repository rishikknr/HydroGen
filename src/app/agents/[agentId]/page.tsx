
"use client";

import { useParams, notFound } from 'next/navigation';
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { getAgentById } from "@/lib/agent-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { cn } from '@/lib/utils';

export default function AgentDetailPage() {
  const params = useParams();
  const agentId = params.agentId as string;
  const agent = getAgentById(agentId);

  if (!agent) {
    notFound();
  }

  const { name, tagline, icon: Icon, detailedDescription, keyCapabilities, primaryFunction, visualMetaphor, relatedMetrics, glowClass, color } = agent;

  const iconColorClass = 
    color === 'primary' ? 'text-primary' :
    color === 'accent' ? 'text-accent' :
    color === 'emerald' ? 'text-emerald-500' : // Direct Tailwind class for specific colors
    color === 'yellow' ? 'text-yellow-400' :
    color === 'orange' ? 'text-orange-500' :
    'text-foreground'; // Fallback

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
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
                  <BreadcrumbLink asChild>
                    <Link href="/agents">Agents</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>{name}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          <header className="mb-10 md:mb-12 text-center">
            <Icon className={cn("w-20 h-20 mx-auto mb-4", glowClass, iconColorClass)} />
            <h1 className={cn("text-4xl sm:text-5xl font-bold tracking-tight font-headline", glowClass)}>
              {name}
            </h1>
            <p className="mt-3 text-xl text-muted-foreground">{tagline}</p>
          </header>

          <Card className="mb-8 bg-card/70 border-border/70 backdrop-blur-sm glassmorphism">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold font-headline">About {name}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-base md:text-lg text-foreground/90 leading-relaxed">
              {Array.isArray(detailedDescription) ? detailedDescription.map((desc, index) => <p key={index}>{desc}</p>) : <p>{detailedDescription}</p>}
              {visualMetaphor && (
                <p className="italic text-muted-foreground mt-4">Visual Metaphor: {visualMetaphor}</p>
              )}
            </CardContent>
          </Card>

          <Card className="mb-8 bg-card/70 border-border/70 backdrop-blur-sm glassmorphism">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold font-headline">Key Capabilities</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {keyCapabilities.map((capability, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-foreground/90">{capability}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <Card className="bg-card/70 border-border/70 backdrop-blur-sm glassmorphism">
              <CardHeader>
                <CardTitle className="text-xl font-semibold font-headline">Primary Function</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/90">{primaryFunction}</p>
              </CardContent>
            </Card>
            {relatedMetrics && relatedMetrics.length > 0 && (
               <Card className="bg-card/70 border-border/70 backdrop-blur-sm glassmorphism">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold font-headline">Related Metrics</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {relatedMetrics.map((metric) => (
                    <Badge key={metric} variant="secondary" className="text-sm bg-muted/70 hover:bg-muted text-foreground/80">{metric}</Badge>
                  ))}
                </CardContent>
              </Card>
            )}
          </div>
          
          <div className="my-12 p-6 border border-dashed border-border/50 rounded-lg text-center bg-card/50 glassmorphism">
            <Image src="https://placehold.co/600x300.png" alt={`${name} process diagram placeholder`} width={600} height={300} className="mx-auto rounded-md" data-ai-hint="abstract diagram" />
            <p className="text-muted-foreground mt-4 text-sm">Conceptual diagram illustrating {name}'s role in the HydroGen ecosystem (placeholder).</p>
          </div>

          <Separator className="my-12" />

          <div className="text-center">
            <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10 hover:text-primary">
              <Link href="/agents">
                <ArrowLeft className="mr-2 h-5 w-5" /> Back to All Agents
              </Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

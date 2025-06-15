
import React from 'react';
import { type SimulateHydrogenAnalysisOutput } from '@/ai/flows/simulate-hydrogen-analysis';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from '@/components/ui/scroll-area';

interface ResultsDisplayProps {
  result: SimulateHydrogenAnalysisOutput;
}

export default function ResultsDisplay({ result }: ResultsDisplayProps) {
  return (
    <section className="space-y-12">
      <div>
        <h2 className="text-3xl font-semibold mb-6 text-center font-headline">
          Analysis <span className="text-glow-primary">Results</span>
        </h2>
      </div>

      <Card className="bg-card/70 border-border/70 backdrop-blur-sm glassmorphism">
        <CardHeader>
          <CardTitle className="text-2xl text-foreground/90 font-headline">Individual Agent Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {result.individualAnalyses.map((item, index) => (
              <AccordionItem value={`item-${index}`} key={item.agentName}>
                <AccordionTrigger className="text-lg hover:no-underline hover:text-primary">
                  {item.agentName}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground leading-relaxed">
                  {item.analysis.split('\n').map((paragraph, i) => (
                    <p key={i} className={paragraph.trim() === "" ? "" : "mb-2"}>{paragraph}</p>
                  ))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>

      <Card className="bg-card/70 border-border/70 backdrop-blur-sm glassmorphism">
        <CardHeader>
          <CardTitle className="text-2xl text-foreground/90 font-headline">Simulated Agent Communication Log</CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[400px] w-full rounded-md border border-border bg-background/50 p-4">
            <pre className="text-sm text-foreground whitespace-pre-wrap break-words leading-relaxed">
              {result.communicationLog}
            </pre>
          </ScrollArea>
        </CardContent>
      </Card>
    </section>
  );
}

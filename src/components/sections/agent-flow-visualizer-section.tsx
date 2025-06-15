"use client";

import AgentFlowVisualizer from "@/components/common/agent-flow-visualizer";
import React, { useState, useEffect } from 'react';

export default function AgentFlowVisualizerSection() {
  // Start animation by default after component mounts to avoid SSR issues.
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  useEffect(() => {
    setIsAnalyzing(true);
  }, []);

  return (
    <section id="flow-visualization" className="py-16 md:py-24 bg-background/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-headline">
            Real-Time AI <span className="text-glow-primary">Data Analysis</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Witness our AI agents in action. This dynamic visualization shows how HydroGen processes transaction data, analyzes risks, and makes intelligent routing decisions in real-time.
          </p>
        </div>
        <div className="max-w-6xl mx-auto">
          <AgentFlowVisualizer isAnalyzing={isAnalyzing} />
        </div>
      </div>
    </section>
  );
}

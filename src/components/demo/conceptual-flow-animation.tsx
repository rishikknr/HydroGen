
"use client";

import React, { useEffect, useState } from 'react';
import { cn } from "@/lib/utils";
import { FileInput, Brain, ShieldCheck, Zap, Users, History, SearchCode, Scale, Lightbulb, Gavel, Shield, FileText } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface NodeProps {
  id: string;
  name: string;
  icon: LucideIcon;
  className?: string;
  iconClassName?: string;
  isVisible: boolean;
}

const FlowNode: React.FC<NodeProps> = ({ name, icon: Icon, className, iconClassName, isVisible }) => {
  return (
    <div
      className={cn(
        "bg-card/80 border border-border p-3 rounded-lg shadow-lg text-center min-w-[100px] max-w-[140px] h-[90px] flex flex-col items-center justify-center glassmorphism transition-opacity duration-500 ease-in-out",
        isVisible ? "opacity-100" : "opacity-0",
        className
      )}
    >
      <Icon className={cn("w-6 h-6 mb-1 text-accent", iconClassName)} />
      <p className="text-xs font-medium text-foreground/90 truncate">{name}</p>
    </div>
  );
};

interface ConnectionLineProps {
  isVisible: boolean;
  isVertical?: boolean;
  lengthClass?: string;
  className?: string;
  delay?: string;
}

const ConnectionLine: React.FC<ConnectionLineProps> = ({ isVisible, isVertical, lengthClass, className, delay }) => {
  return (
    <div
      className={cn(
        "bg-slate-600 transition-all duration-500 ease-in-out",
        isVertical ? "w-px mx-auto" : "h-px my-auto",
        isVisible ? (isVertical ? lengthClass : `w-full ${lengthClass}`) : (isVertical ? 'h-0' : 'w-0'),
        className
      )}
      style={{ transitionDelay: delay }}
    />
  );
};


const agents = [
  { id: "chimera", name: "Chimera", icon: ShieldCheck, color: "text-glow-emerald" },
  { id: "synapse", name: "Synapse", icon: Zap, color: "text-glow-cyan" },
  { id: "persona", name: "Persona", icon: Users, color: "text-glow-violet" },
  { id: "chronos", name: "Chronos", icon: History, color: "text-glow-yellow" },
  { id: "nexus", name: "Nexus", icon: SearchCode, color: "text-glow-orange" },
  { id: "abacus", name: "Abacus", icon: Scale, color: "text-glow-emerald" },
  { id: "oracle", name: "Oracle", icon: Lightbulb, color: "text-glow-cyan" },
  { id: "aegis", name: "Aegis", icon: Gavel, color: "text-glow-violet" },
];

interface ConceptualFlowAnimationProps {
  isActive: boolean;
}

export default function ConceptualFlowAnimation({ isActive }: ConceptualFlowAnimationProps) {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    if (isActive) {
      setStage(0); // Reset stage if re-activated
      const timers = [
        setTimeout(() => setStage(1), 100),    // Input Data
        setTimeout(() => setStage(2), 600),    // Line to Orchestrator
        setTimeout(() => setStage(3), 700),    // Cerebrum (Orchestrator)
        setTimeout(() => setStage(4), 1200),   // Lines to Agents + Agents
        setTimeout(() => setStage(5), 2200),   // Pause then Lines from Agents
        setTimeout(() => setStage(6), 2700),   // Cerebrum (Decision)
        setTimeout(() => setStage(7), 3200),   // Line to Final Analysis
        setTimeout(() => setStage(8), 3300),   // Final Analysis
      ];
      return () => timers.forEach(clearTimeout);
    } else {
      // setStage(0); // Optionally reset when not active
    }
  }, [isActive]);

  return (
    <div className="p-4 md:p-6 rounded-xl border border-border/50 bg-background/30 w-full flex flex-col items-center space-y-3 md:space-y-2 overflow-x-auto">
      <FlowNode id="input" name="Input Data" icon={FileInput} isVisible={stage >= 1} className="border-accent shadow-accent/30" />
      <ConnectionLine isVisible={stage >= 2} isVertical lengthClass="h-8" />
      <FlowNode id="orchestrator" name="Cerebrum (Orchestrator)" icon={Brain} isVisible={stage >= 3} className="border-primary shadow-primary/30" />

      {/* Lines to Agents */}
      <div className="flex justify-center items-start w-full max-w-3xl h-10 relative">
        {/* Central point for fanning out lines */}
        <div className="absolute top-0 left-1/2 w-px h-6 bg-slate-600 transition-all duration-500" style={{ opacity: stage >= 4 ? 1: 0, height: stage >= 4 ? '1.5rem' : '0rem' }}/>
      </div>
      
      {/* Agents Grid */}
      <div className="grid grid-cols-4 gap-x-2 md:gap-x-4 gap-y-2 md:gap-y-3 w-full max-w-4xl px-1 relative">
        {agents.map((agent, index) => (
          <div key={agent.id} className="flex flex-col items-center space-y-1 relative">
             {/* Incoming line placeholder - actual lines drawn with transforms or SVG for precision if needed */}
             <div className="absolute bottom-full left-1/2 mb-0.5">
                <ConnectionLine 
                  isVisible={stage >= 4} 
                  isVertical 
                  lengthClass="h-4" 
                  className={cn(
                    "origin-bottom transition-transform",
                    index % 4 === 0 ? "transform -rotate-45 -translate-x-2" :
                    index % 4 === 1 ? "transform -rotate-15 -translate-x-1" :
                    index % 4 === 2 ? "transform rotate-15 translate-x-1" :
                    "transform rotate-45 translate-x-2"
                  )}
                  delay={`${index * 50}ms`}
                />
            </div>
            <FlowNode 
                id={agent.id} 
                name={agent.name} 
                icon={agent.icon} 
                isVisible={stage >= 4} 
                iconClassName={agent.color.replace('text-', '')}
                className="transition-delay-[var(--delay)]"
                style={{'--delay': `${100 + index * 50}ms`} as React.CSSProperties}
            />
            {/* Outgoing line placeholder */}
            <div className="absolute top-full left-1/2 mt-0.5">
                 <ConnectionLine 
                  isVisible={stage >= 5} 
                  isVertical 
                  lengthClass="h-4" 
                  className={cn(
                    "origin-top transition-transform",
                     index % 4 === 0 ? "transform rotate-45 -translate-x-2" :
                     index % 4 === 1 ? "transform rotate-15 -translate-x-1" :
                     index % 4 === 2 ? "transform -rotate-15 translate-x-1" :
                     "transform -rotate-45 translate-x-2"
                  )}
                  delay={`${index * 50}ms`}
                />
            </div>
          </div>
        ))}
      </div>

       {/* Lines from Agents Converging */}
      <div className="flex justify-center items-end w-full max-w-3xl h-10 relative">
        <div className="absolute bottom-0 left-1/2 w-px h-6 bg-slate-600 transition-all duration-500" style={{ opacity: stage >= 5 ? 1: 0, height: stage >=5 ? '1.5rem' : '0rem' }}/>
      </div>

      <FlowNode id="decision" name="Cerebrum (Decision)" icon={Shield} isVisible={stage >= 6} className="border-primary shadow-primary/30" />
      <ConnectionLine isVisible={stage >= 7} isVertical lengthClass="h-8" />
      <FlowNode id="analysis" name="Final Analysis" icon={FileText} isVisible={stage >= 8} className="border-accent shadow-accent/30" />
    </div>
  );
}

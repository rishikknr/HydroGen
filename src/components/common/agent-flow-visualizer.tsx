"use client";

import { cn } from "@/lib/utils";
import { ShieldCheck, Brain, Zap, Scale, Users, SearchCode, History, Lightbulb, Gavel, Workflow, FileInput, FileOutput } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface AgentNodeProps {
  name: string;
  icon?: LucideIcon;
  isAnimating?: boolean;
  className?: string;
  iconClassName?: string;
}

const AgentNode: React.FC<AgentNodeProps> = ({ name, icon: Icon, isAnimating, className, iconClassName }) => {
  return (
    <div
      className={cn(
        "bg-card/80 border border-border p-3 rounded-lg shadow-lg text-center min-w-[120px] max-w-[150px] h-[100px] flex flex-col items-center justify-center glassmorphism",
        isAnimating && "animate-pulse-node",
        className
      )}
    >
      {Icon && <Icon className={cn("w-7 h-7 mb-1.5 text-accent", iconClassName)} />}
      <p className="text-xs font-medium text-foreground/90 truncate">{name}</p>
    </div>
  );
};

interface FlowArrowProps {
  direction: "up" | "down" | "left" | "right";
  isAnimating?: boolean;
  lengthClass?: string; // e.g., 'h-16', 'w-24'
  className?: string;
  delay?: string; // animation-delay
  flowDistance?: string; // CSS variable for flow distance
  flowDuration?: string; // CSS variable for flow duration
}

const FlowArrow: React.FC<FlowArrowProps> = ({ direction, isAnimating, lengthClass, className, delay, flowDistance, flowDuration }) => {
  const lineBaseClasses = "bg-slate-600 relative"; // Changed line color
  let lineClasses, packetClasses;

  const style = {
    animationDelay: delay,
    '--flow-distance': flowDistance,
    '--flow-duration': flowDuration,
  } as React.CSSProperties;

  switch (direction) {
    case "up":
      lineClasses = cn(lineBaseClasses, "w-px mx-auto", lengthClass);
      packetClasses = "animate-flow-up-sm";
      break;
    case "down":
      lineClasses = cn(lineBaseClasses, "w-px mx-auto", lengthClass);
      packetClasses = "animate-flow-down-sm";
      break;
    case "left":
      lineClasses = cn(lineBaseClasses, "h-px my-auto", lengthClass);
      packetClasses = "animate-flow-left-sm";
      break;
    case "right":
      lineClasses = cn(lineBaseClasses, "h-px my-auto", lengthClass);
      packetClasses = "animate-flow-right-sm";
      break;
  }

  return (
    <div className={cn("flex items-center justify-center", className)}>
      <div className={lineClasses}>
        {isAnimating && (
          <div
            className={cn("data-packet-sm bg-accent shadow-[0_0_8px_theme(colors.accent)]", packetClasses)} // Changed packet color to accent
            style={style}
          />
        )}
      </div>
    </div>
  );
};


interface AgentFlowVisualizerProps {
  isAnalyzing: boolean;
}

const agents = [
  { name: "Chimera", icon: ShieldCheck, color: "text-glow-emerald" },
  { name: "Synapse", icon: Zap, color: "text-glow-cyan" },
  { name: "Persona", icon: Users, color: "text-glow-violet" },
  { name: "Chronos", icon: History, color: "text-glow-yellow" },
  { name: "Nexus", icon: SearchCode, color: "text-glow-orange" },
  { name: "Abacus", icon: Scale, color: "text-glow-emerald" },
  { name: "Oracle", icon: Lightbulb, color: "text-glow-cyan" },
  { name: "Aegis", icon: Gavel, color: "text-glow-violet" },
];

const AgentFlowVisualizer: React.FC<AgentFlowVisualizerProps> = ({ isAnalyzing }) => {
  return (
    <div className="p-4 md:p-6 rounded-xl border border-border/50 bg-background/30 w-full flex flex-col items-center space-y-3 md:space-y-4 overflow-x-auto">
      <AgentNode name="Input Data" icon={FileInput} isAnimating={isAnalyzing} className="border-accent shadow-accent/30" />
      <FlowArrow direction="down" isAnimating={isAnalyzing} lengthClass="h-8 md:h-12" />
      <AgentNode name="Cerebrum (Orchestrator)" icon={Brain} isAnimating={isAnalyzing} className="border-primary shadow-primary/30" />
      <FlowArrow direction="down" isAnimating={isAnalyzing} lengthClass="h-6 md:h-8" />

      {/* Distributor Line */}
      <div className="w-full max-w-4xl h-px bg-slate-600 relative">
        {isAnalyzing && (
          <>
            {[...Array(3)].map((_, i) => (
              <div key={`dist-${i}`} className={cn("data-packet-sm bg-accent shadow-[0_0_8px_theme(colors.accent)] animate-flow-right-sm")} style={{animationDelay: `${i * 0.3}s`, '--flow-distance': '100%', '--flow-duration': '1s'} as React.CSSProperties} />
            ))}
          </>
        )}
      </div>
      
      <FlowArrow direction="down" isAnimating={isAnalyzing} lengthClass="h-4 md:h-6" />

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 md:gap-x-6 gap-y-3 md:gap-y-4 w-full max-w-5xl px-2">
        {/* Connection from Distributor to Cerebrum (central placeholder) */}
        <div className="hidden lg:block"></div> {/* Spacer for alignment */}
        <div className="hidden lg:block"></div> {/* Spacer for alignment */}

        {/* Cerebrum Placeholder in Agent Grid for centralized look */}
        <div className="flex flex-col items-center col-span-2 sm:col-span-3 lg:col-span-1 xl:col-span-1 order-first lg:order-none">
           {/* This is a conceptual placeholder in grid flow, main Cerebrum is above */}
        </div>
        
        <div className="hidden lg:block"></div> {/* Spacer for alignment */}
        <div className="hidden lg:block"></div> {/* Spacer for alignment */}

      </div>


      {/* Agents Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-3 md:gap-x-4 gap-y-4 md:gap-y-6 w-full max-w-5xl px-1">
        {/* Agent Columns with connecting lines */}
        {agents.map((agent, index) => (
          <div key={agent.name} className="flex flex-col items-center space-y-1 md:space-y-2">
            <FlowArrow direction="down" isAnimating={isAnalyzing} lengthClass="h-4 md:h-6" delay={`${index * 0.1}s`} flowDuration="0.8s" />
            <AgentNode name={agent.name} icon={agent.icon} isAnimating={isAnalyzing} iconClassName={agent.color.replace('text-', '')} /> {/* Pass color to icon */}
            <FlowArrow direction="up" isAnimating={isAnalyzing} lengthClass="h-4 md:h-6" delay={`${0.5 + index * 0.1}s`} flowDuration="0.8s" />
          </div>
        ))}
      </div>

      <FlowArrow direction="up" isAnimating={isAnalyzing} lengthClass="h-4 md:h-6" />
      {/* Collector Line */}
      <div className="w-full max-w-4xl h-px bg-slate-600 relative">
         {isAnalyzing && (
          <>
            {[...Array(3)].map((_, i) => (
              <div key={`coll-${i}`} className={cn("data-packet-sm bg-accent shadow-[0_0_8px_theme(colors.accent)] animate-flow-left-sm")} style={{animationDelay: `${0.5 + i * 0.3}s`, '--flow-distance': '-100%', '--flow-duration': '1s'} as React.CSSProperties} />
            ))}
          </>
        )}
      </div>

      <FlowArrow direction="up" isAnimating={isAnalyzing} lengthClass="h-6 md:h-8" />
      <AgentNode name="Cerebrum (Decision)" icon={Brain} isAnimating={isAnalyzing} className="border-primary shadow-primary/30" />
      <FlowArrow direction="down" isAnimating={isAnalyzing} lengthClass="h-8 md:h-12" />
      <AgentNode name="Final Analysis" icon={FileOutput} isAnimating={isAnalyzing} className="border-accent shadow-accent/30" />
    </div>
  );
};

export default AgentFlowVisualizer;

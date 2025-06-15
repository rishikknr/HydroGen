// src/lib/agent-data.ts
import {
  ShieldCheck, Brain, Zap, Scale, Users, SearchCode, History, Lightbulb, Gavel,
  type LucideIcon
} from "lucide-react";

export interface AgentDetail {
  id: string;
  name: string;
  tagline: string;
  icon: LucideIcon;
  glowClass: string;
  href: string;
  detailedDescription: string | string[];
  keyCapabilities: string[];
  primaryFunction: string;
  visualMetaphor?: string;
  relatedMetrics?: string[];
  color?: "primary" | "accent" | "emerald" | "yellow" | "orange"; // Added specific color hints
}

export const agentDetailsList: AgentDetail[] = [
  {
    id: "cerebrum",
    name: "Cerebrum",
    tagline: "Orchestrator & Decision Engine. Coordinates agents, applies policies.",
    icon: Brain,
    href: "/agents/cerebrum",
    glowClass: "text-glow-violet",
    color: "primary",
    primaryFunction: "Central Orchestration and Policy Enforcement",
    detailedDescription: [
      "Cerebrum acts as the central intelligence of the HydroGen platform. It receives incoming payment data, orchestrates the analysis by delegating tasks to specialized agents, and synthesizes their findings to make informed decisions.",
      "It dynamically applies predefined policies, risk thresholds, and business rules to every transaction, ensuring a balance between security, speed, and cost-effectiveness. Cerebrum is the conductor ensuring all parts of the AI symphony work in harmony."
    ],
    keyCapabilities: [
      "Intelligent task delegation to specialized agents.",
      "Real-time policy application and enforcement.",
      "Aggregation and synthesis of multi-agent insights.",
      "Dynamic decision-making based on comprehensive risk assessment.",
      "Adaptive learning from past decisions and outcomes."
    ],
    visualMetaphor: "The central nervous system and strategic command center of HydroGen.",
    relatedMetrics: ["Overall System Throughput", "Policy Compliance Rate", "Decision Accuracy", "Agent Coordination Time"],
  },
  {
    id: "chimera",
    name: "Chimera",
    tagline: "Fraud Detection Sentinel. Detects suspicious patterns in real-time.",
    icon: ShieldCheck,
    href: "/agents/chimera",
    glowClass: "text-glow-emerald",
    color: "emerald",
    primaryFunction: "Real-time Fraud Detection and Prevention",
    detailedDescription: [
      "Chimera is HydroGen's frontline guardian against fraudulent activities. It employs sophisticated machine learning models and behavioral analytics to identify known and emerging fraud patterns in payment transactions.",
      "By analyzing a multitude of data points in milliseconds, Chimera can flag or block suspicious transactions before they cause financial loss or reputational damage."
    ],
    keyCapabilities: [
      "Advanced anomaly detection using machine learning.",
      "Behavioral biometrics and pattern recognition.",
      "Real-time transaction scoring and risk assessment.",
      "Dynamic rule adaptation to new fraud vectors.",
      "Link analysis to uncover fraud networks."
    ],
    visualMetaphor: "An ever-vigilant sentinel with multiple perspectives, identifying threats invisible to others.",
    relatedMetrics: ["Fraud Detection Rate", "False Positive Rate", "Value of Prevented Fraud", "Transaction Analysis Time"],
  },
  {
    id: "synapse",
    name: "Synapse",
    tagline: "Self-Healing Router. Diagnoses failures, reroutes transactions.",
    icon: Zap,
    href: "/agents/synapse",
    glowClass: "text-glow-cyan",
    color: "accent",
    primaryFunction: "Intelligent Payment Routing and Resilience",
    detailedDescription: [
      "Synapse ensures optimal payment pathways and system resilience. It monitors the health and performance of various payment gateways and processors in real-time.",
      "When it detects degradation, high latency, or outright failure in a payment channel, Synapse automatically and intelligently reroutes transactions through the next best available option, minimizing disruptions and maximizing success rates."
    ],
    keyCapabilities: [
      "Real-time monitoring of gateway health and performance.",
      "Predictive analysis of potential routing failures.",
      "Automated, intelligent transaction rerouting.",
      "Cost and success rate optimization for routing decisions.",
      "Dynamic load balancing across payment processors."
    ],
    visualMetaphor: "A high-speed, adaptive network switchboard, ensuring data always finds the optimal path.",
    relatedMetrics: ["Transaction Success Rate", "Average Transaction Latency", "Gateway Downtime Avoided", "Routing Cost Savings"],
  },
  {
    id: "abacus",
    name: "Abacus",
    tagline: "Reconciliation & Ledger Validator. Prevents financial leakage.",
    icon: Scale,
    href: "/agents/abacus",
    glowClass: "text-glow-yellow",
    color: "yellow",
    primaryFunction: "Automated Financial Reconciliation and Integrity",
    detailedDescription: [
      "Abacus maintains the financial integrity of your payment operations. It performs automated reconciliation of transactions across multiple systems, ledgers, and payment partners.",
      "By meticulously comparing and validating data, Abacus identifies discrepancies, prevents financial leakage, and ensures accuracy in financial reporting."
    ],
    keyCapabilities: [
      "Automated multi-system transaction reconciliation.",
      "Discrepancy detection and alerting.",
      "Validation of fees, commissions, and settlements.",
      "Support for complex multi-currency environments.",
      "Generation of auditable reconciliation reports."
    ],
    visualMetaphor: "A meticulous and incorruptible accountant, ensuring every cent is accounted for.",
    relatedMetrics: ["Reconciliation Accuracy", "Time to Reconcile", "Value of Recovered Discrepancies", "Audit Trail Completeness"],
  },
  {
    id: "persona",
    name: "Persona",
    tagline: "User Identity & Trust Engine. Provides dynamic trust scores.",
    icon: Users,
    href: "/agents/persona",
    glowClass: "text-glow-orange",
    color: "orange",
    primaryFunction: "Dynamic User Trust Assessment and Identity Verification",
    detailedDescription: [
      "Persona specializes in understanding and verifying user identities to build dynamic trust scores. It analyzes a wide range of signals, including device fingerprinting, IP reputation, transaction history, and behavioral patterns.",
      "This allows for more nuanced risk assessment, reducing friction for legitimate users while applying appropriate scrutiny to potentially risky interactions."
    ],
    keyCapabilities: [
      "Multi-factor identity signal analysis.",
      "Dynamic trust scoring for users and entities.",
      "Behavioral analytics for identity verification.",
      "Detection of account takeover attempts.",
      "Adaptive authentication strategies based on trust levels."
    ],
    visualMetaphor: "A discerning profiler, understanding the nuances of identity and intent.",
    relatedMetrics: ["User Verification Success Rate", "Account Takeover Prevention Rate", "False Positive Identity Challenges", "Trust Score Accuracy"],
  },
  {
    id: "nexus",
    name: "Nexus",
    tagline: "Root Cause Analyzer. Diagnoses systemic failures & error cascades.",
    icon: SearchCode,
    href: "/agents/nexus",
    glowClass: "text-glow-violet",
    color: "primary",
    primaryFunction: "Systemic Failure Diagnosis and Root Cause Analysis",
    detailedDescription: [
      "Nexus is the deep-dive investigator of the HydroGen agent network. When complex or cascading failures occur, Nexus analyzes logs, metrics, and event correlations across the entire payment stack.",
      "Its goal is to pinpoint the true root cause of issues, rather than just surface-level symptoms, enabling faster and more effective remediation."
    ],
    keyCapabilities: [
      "Cross-system log and event correlation.",
      "Automated root cause identification for complex incidents.",
      "Analysis of error cascades and dependencies.",
      "Generation of actionable insights for system improvement.",
      "Predictive identification of potential systemic risks."
    ],
    visualMetaphor: "A master detective, connecting disparate clues to solve complex systemic puzzles.",
    relatedMetrics: ["Mean Time to Resolution (MTTR)", "Incident Recurrence Rate", "Accuracy of Root Cause Identification", "System Stability Index"],
  },
  {
    id: "chronos",
    name: "Chronos",
    tagline: "Live Gateway Health Monitor. Observes payment gateway performance.",
    icon: History,
    href: "/agents/chronos",
    glowClass: "text-glow-emerald",
    color: "emerald",
    primaryFunction: "Real-time Payment Gateway Performance Monitoring",
    detailedDescription: [
      "Chronos keeps a constant watch on the performance and availability of all integrated payment gateways and processors. It tracks key metrics such as uptime, latency, error rates, and transaction throughput for each channel.",
      "This continuous monitoring provides critical data to Synapse for routing decisions and to operations teams for proactive issue management."
    ],
    keyCapabilities: [
      "Continuous, real-time monitoring of gateway KPIs.",
      "Historical performance trend analysis.",
      "Alerting on gateway performance degradation or outages.",
      "Comparative analysis of gateway performance.",
      "Synthetic transaction monitoring for proactive health checks."
    ],
    visualMetaphor: "A vigilant timekeeper and performance historian, tracking every millisecond of gateway activity.",
    relatedMetrics: ["Gateway Uptime", "Average Gateway Latency", "Gateway Error Rates", "Capacity Utilization"],
  },
  {
    id: "oracle",
    name: "Oracle",
    tagline: "Strategic Intelligence Optimizer. Tracks long-term performance.",
    icon: Lightbulb,
    href: "/agents/oracle",
    glowClass: "text-glow-cyan",
    color: "accent",
    primaryFunction: "Long-Term Strategic Performance Analysis and Optimization",
    detailedDescription: [
      "Oracle looks beyond immediate operations to provide strategic intelligence. It analyzes long-term trends in payment performance, fraud patterns, user behavior, and market dynamics.",
      "Its insights help optimize overall payment strategies, identify new opportunities, and anticipate future challenges, guiding the evolution of the HydroGen system."
    ],
    keyCapabilities: [
      "Long-term trend analysis and forecasting.",
      "Strategic KPI monitoring and reporting.",
      "Identification of optimization opportunities (cost, conversion).",
      "Benchmarking against industry standards and historical data.",
      "Scenario modeling for strategic decision support."
    ],
    visualMetaphor: "A wise seer, interpreting patterns over time to provide strategic foresight.",
    relatedMetrics: ["Customer Lifetime Value (CLV)", "Payment Processing Costs", "Market Share by Payment Method", "Long-term Fraud Trends"],
  },
  {
    id: "aegis",
    name: "Aegis",
    tagline: "Governance & Audit Guardian. Maintains transparency & compliance.",
    icon: Gavel,
    href: "/agents/aegis",
    glowClass: "text-glow-yellow",
    color: "yellow",
    primaryFunction: "Governance, Compliance, and Audit Facilitation",
    detailedDescription: [
      "Aegis ensures that all HydroGen operations adhere to governance policies, regulatory requirements, and industry best practices. It maintains comprehensive audit trails of all agent decisions and system actions.",
      "Aegis facilitates transparency, simplifies compliance reporting, and provides robust evidence for internal and external audits."
    ],
    keyCapabilities: [
      "Comprehensive audit logging of all system activities.",
      "Automated compliance checks against regulatory frameworks.",
      "Policy versioning and enforcement tracking.",
      "Secure data handling and access control monitoring.",
      "Generation of reports for compliance and audit purposes."
    ],
    visualMetaphor: "A steadfast guardian of rules and records, ensuring integrity and accountability.",
    relatedMetrics: ["Audit Trail Completeness", "Compliance Adherence Rate", "Time to Produce Audit Reports", "Data Access Policy Violations"],
  },
];

export const getAgentById = (id: string): AgentDetail | undefined => {
  return agentDetailsList.find(agent => agent.id === id);
};

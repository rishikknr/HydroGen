
'use server';
/**
 * @fileOverview An AI flow that simulates HydroGen's payment analysis process.
 *
 * - simulateHydrogenAnalysis - Simulates agent communication and individual analysis.
 * - SimulateHydrogenAnalysisInput - Input type for the flow.
 * - SimulateHydrogenAnalysisOutput - Output type for the flow.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SimulateHydrogenAnalysisInputSchema = z.object({
  paymentData: z.string().describe('A JSON string or textual description of payment traffic data, potentially with annotations.'),
});
export type SimulateHydrogenAnalysisInput = z.infer<typeof SimulateHydrogenAnalysisInputSchema>;

const AgentIndividualAnalysisSchema = z.object({
  agentName: z.string().describe("Name of the AI agent (e.g., Cerebrum, Chimera)."),
  analysis: z.string().describe("The individual analysis summary or report from this agent, as a single paragraph or short text."),
});

const SimulateHydrogenAnalysisOutputSchema = z.object({
  communicationLog: z.string().describe("A narrative trace of the simulated agent communication and decision-making process."),
  individualAnalyses: z.array(AgentIndividualAnalysisSchema).describe("An array of individual analyses from Cerebrum and each of the 8 specialized agents."),
});
export type SimulateHydrogenAnalysisOutput = z.infer<typeof SimulateHydrogenAnalysisOutputSchema>;

export async function simulateHydrogenAnalysis(
  input: SimulateHydrogenAnalysisInput
): Promise<SimulateHydrogenAnalysisOutput> {
  return simulateHydrogenAnalysisFlow(input);
}

const prompt = ai.definePrompt({
  name: 'simulateHydrogenAnalysisPrompt',
  input: {schema: SimulateHydrogenAnalysisInputSchema},
  output: {schema: SimulateHydrogenAnalysisOutputSchema},
  prompt: `You are the HydroGen AI system, simulating a payment fraud analysis for a demo.
The user has provided the following payment traffic data:
\`\`\`
{{{paymentData}}}
\`\`\`

Based on this data, please generate:

1.  A "Simulated Agent Communication Log": 
    This should be a narrative trace detailing the interaction and thought process. Start with Cerebrum (the orchestrator) receiving the data. Then, describe how it delegates tasks to specialized agents:
    - Chimera: Fraud Detection Sentinel (detects suspicious patterns)
    - Synapse: Self-Healing Router (diagnoses failures, reroutes)
    - Persona: User Identity & Trust Engine (dynamic trust scores, IP checks)
    - Chronos: Live Gateway Health Monitor (observes payment gateway performance)
    - Nexus: Root Cause Analyzer (diagnoses systemic failures)
    - Abacus: Reconciliation & Ledger Validator (prevents financial leakage)
    - Oracle: Strategic Intelligence Optimizer (tracks long-term performance trends)
    - Aegis: Governance & Audit Guardian (maintains transparency & compliance)
    
    Each agent should provide a brief "thought process" or "assessment" based on the input data, especially focusing on any annotated nuances (e.g., '(Transaction from known good user, but different IP)', '(High value, new user, high-risk region)').
    Cerebrum then collates these insights and makes a final decision or summary.
    The log should be engaging and tell a story of collaborative analysis. Make it readable and flow like a conversation or a series of updates. Use markdown for simple formatting if it helps readability (like bolding agent names).

2.  "Individual Agent Analyses": 
    For "Cerebrum" and each of the 8 specialized agents listed above, provide a concise, one-paragraph analysis summary. This summary should reflect the agent's specialty and its findings related to the provided payment data. If an agent has no specific findings for the given data, it can state that its systems are nominal or no specific flags were raised for its area of concern based on this dataset.

Focus on making the communication log coherent and the individual analyses distinct and relevant to each agent's role. For example, if the data includes '(Transaction from known good user, but different IP)', Persona might comment on the IP mismatch while acknowledging the known user, and Chimera might assess if this pattern combined with other factors is suspicious.

Output the result STRICTLY in the specified JSON format. Ensure the 'analysis' field for each agent is a single string, which might contain newlines for paragraph breaks if necessary, but is fundamentally one block of text.
Agent names in 'individualAnalyses' must exactly match: Cerebrum, Chimera, Synapse, Persona, Chronos, Nexus, Abacus, Oracle, Aegis.
`,
  config: {
    temperature: 0.6, // Slightly creative for narrative log, but still factual for analysis
     safetySettings: [ // More lenient for demo purposes if needed, adjust as per content
      { category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 'BLOCK_ONLY_HIGH' },
      { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
      { category: 'HARM_CATEGORY_HARASSMENT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
      { category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
    ],
  }
});

const simulateHydrogenAnalysisFlow = ai.defineFlow(
  {
    name: 'simulateHydrogenAnalysisFlow',
    inputSchema: SimulateHydrogenAnalysisInputSchema,
    outputSchema: SimulateHydrogenAnalysisOutputSchema,
  },
  async (input) => {
    const {output} = await prompt(input);
    if (!output) {
      throw new Error("AI failed to generate an analysis.");
    }
    // Ensure all 9 agents + Cerebrum are present in the output, even if with default text
    const requiredAgents = ["Cerebrum", "Chimera", "Synapse", "Persona", "Chronos", "Nexus", "Abacus", "Oracle", "Aegis"];
    const analyses = output.individualAnalyses || [];
    const agentMap = new Map(analyses.map(a => [a.agentName, a.analysis]));

    const completeAnalyses = requiredAgents.map(name => ({
      agentName: name,
      analysis: agentMap.get(name) || "No specific findings or analysis provided for this dataset."
    }));
    
    return {
        ...output,
        individualAnalyses: completeAnalyses
    };
  }
);

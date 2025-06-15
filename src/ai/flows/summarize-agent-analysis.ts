// Summarizes the analysis provided by multiple agents to quickly identify potential issues.

'use server';

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AgentAnalysisSchema = z.object({
  agentName: z.string().describe('Name of the agent providing the analysis.'),
  analysis: z.string().describe('Detailed analysis from the agent.'),
});

const SummarizeAgentAnalysisInputSchema = z.object({
  agentAnalyses: z.array(AgentAnalysisSchema).describe('Array of agent analyses to summarize.'),
});

export type SummarizeAgentAnalysisInput = z.infer<
  typeof SummarizeAgentAnalysisInputSchema
>;

const SummarizeAgentAnalysisOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the agent analyses.'),
});

export type SummarizeAgentAnalysisOutput = z.infer<
  typeof SummarizeAgentAnalysisOutputSchema
>;

export async function summarizeAgentAnalysis(
  input: SummarizeAgentAnalysisInput
): Promise<SummarizeAgentAnalysisOutput> {
  return summarizeAgentAnalysisFlow(input);
}

const summarizeAgentAnalysisPrompt = ai.definePrompt({
  name: 'summarizeAgentAnalysisPrompt',
  input: {schema: SummarizeAgentAnalysisInputSchema},
  output: {schema: SummarizeAgentAnalysisOutputSchema},
  prompt: `You are an expert system administrator tasked with summarizing analyses from various AI agents to quickly identify potential issues.

  Here are the analyses from the agents:
  {{#each agentAnalyses}}
  Agent Name: {{this.agentName}}
  Analysis: {{this.analysis}}
  {{/each}}

  Provide a concise summary of the agent analyses, highlighting any potential issues or critical findings that require immediate attention.`,
});

const summarizeAgentAnalysisFlow = ai.defineFlow(
  {
    name: 'summarizeAgentAnalysisFlow',
    inputSchema: SummarizeAgentAnalysisInputSchema,
    outputSchema: SummarizeAgentAnalysisOutputSchema,
  },
  async input => {
    const {output} = await summarizeAgentAnalysisPrompt(input);
    return output!;
  }
);

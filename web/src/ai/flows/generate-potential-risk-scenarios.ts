'use server';
/**
 * @fileOverview An AI agent that generates potential fraud scenarios.
 *
 * - generatePotentialRiskScenarios - A function that generates potential fraud scenarios.
 * - GeneratePotentialRiskScenariosInput - The input type for the generatePotentialRiskScenarios function.
 * - GeneratePotentialRiskScenariosOutput - The return type for the generatePotentialRiskScenarios function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GeneratePotentialRiskScenariosInputSchema = z.object({
  transactionData: z.string().describe('A JSON string containing transaction data.'),
  knownFraudPatterns: z.string().describe('A description of known fraud patterns.'),
});
export type GeneratePotentialRiskScenariosInput = z.infer<
  typeof GeneratePotentialRiskScenariosInputSchema
>;

const GeneratePotentialRiskScenariosOutputSchema = z.object({
  potentialRiskScenarios: z
    .string()
    .describe('A list of potential fraud scenarios based on the transaction data.'),
});
export type GeneratePotentialRiskScenariosOutput = z.infer<
  typeof GeneratePotentialRiskScenariosOutputSchema
>;

export async function generatePotentialRiskScenarios(
  input: GeneratePotentialRiskScenariosInput
): Promise<GeneratePotentialRiskScenariosOutput> {
  return generatePotentialRiskScenariosFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generatePotentialRiskScenariosPrompt',
  input: {schema: GeneratePotentialRiskScenariosInputSchema},
  output: {schema: GeneratePotentialRiskScenariosOutputSchema},
  prompt: `You are a security analyst tasked with identifying potential fraud scenarios.

  Based on the following transaction data:
  {{transactionData}}

  And the following known fraud patterns:
  {{knownFraudPatterns}}

  Generate a list of potential fraud scenarios that could arise.
  Consider new and emerging fraud techniques in your analysis. Focus on scenarios that the provided known fraud patterns might miss.
  Format the response as a list.
  `,
});

const generatePotentialRiskScenariosFlow = ai.defineFlow(
  {
    name: 'generatePotentialRiskScenariosFlow',
    inputSchema: GeneratePotentialRiskScenariosInputSchema,
    outputSchema: GeneratePotentialRiskScenariosOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

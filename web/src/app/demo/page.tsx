
"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import PaymentDataInput from "@/components/demo/payment-data-input";
import ConceptualFlowAnimation from "@/components/demo/conceptual-flow-animation";
import LoadingOverlay from "@/components/demo/loading-overlay";
import ResultsDisplay from "@/components/demo/results-display";
import { simulateHydrogenAnalysis, type SimulateHydrogenAnalysisOutput } from '@/ai/flows/simulate-hydrogen-analysis';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';

type DemoScene = "input" | "processing" | "loadingResults" | "results";

const initialPaymentData = JSON.stringify(
  [
    { "USER_ID": "usr_123", "AMOUNT": 150.00, "CURRENCY": "USD", "IP_ADDRESS": "192.168.1.10", "TIMESTAMP": "2023-10-26T10:00:00Z", "NOTES": "(Transaction from known good user, but different IP)" },
    { "USER_ID": "usr_456", "AMOUNT": 25.50, "CURRENCY": "EUR", "IP_ADDRESS": "203.0.113.45", "TIMESTAMP": "2023-10-26T10:05:00Z" },
    { "USER_ID": "usr_789", "AMOUNT": 1200.00, "CURRENCY": "USD", "IP_ADDRESS": "198.51.100.2", "TIMESTAMP": "2023-10-26T10:15:00Z", "NOTES": "(High value, new user, high-risk region)" },
    { "USER_ID": "usr_101", "AMOUNT": 5.00, "CURRENCY": "GBP", "IP_ADDRESS": "8.8.8.8", "TIMESTAMP": "2023-10-26T10:20:00Z" },
    { "USER_ID": "usr_202", "AMOUNT": 75.00, "CURRENCY": "CAD", "IP_ADDRESS": "10.0.0.5", "TIMESTAMP": "2023-10-26T10:22:00Z", "NOTES": "(Repeated small transactions to same new merchant)"},
    { "USER_ID": "usr_303", "AMOUNT": 990.00, "CURRENCY": "AUD", "IP_ADDRESS": "172.16.0.10", "TIMESTAMP": "2023-10-26T10:25:00Z", "NOTES": "(Transaction to an unverified entity)"}
  ],
  null,
  2
);

export default function DemoPage() {
  const [currentScene, setCurrentScene] = useState<DemoScene>("input");
  const [paymentData, setPaymentData] = useState<string>(initialPaymentData);
  const [analysisResult, setAnalysisResult] = useState<SimulateHydrogenAnalysisOutput | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);
  const [showLoadingOverlay, setShowLoadingOverlay] = useState<boolean>(false);
  const { toast } = useToast();
  const resultsRef = useRef<HTMLDivElement>(null);

  const handleAnalyzeData = async () => {
    setIsAnalyzing(true);
    setCurrentScene("processing");

    try {
      // Simulate some processing time for the animation
      await new Promise(resolve => setTimeout(resolve, 500)); 
      const result = await simulateHydrogenAnalysis({ paymentData });
      setAnalysisResult(result);
      
      setCurrentScene("loadingResults");
      setShowLoadingOverlay(true);

      // Ensure loading overlay is visible for a minimum duration
      setTimeout(() => {
        setShowLoadingOverlay(false);
        setCurrentScene("results");
        toast({
          title: "Analysis Complete",
          description: "HydroGen has finished processing the payment data.",
          variant: "default", // or 'success' if you add that variant
        });
      }, 2000); // Minimum 2 seconds for loading overlay

    } catch (error) {
      console.error("Error during analysis:", error);
      toast({
        title: "Analysis Failed",
        description: "An error occurred while analyzing the data. Please try again.",
        variant: "destructive",
      });
      setCurrentScene("input");
    } finally {
      setIsAnalyzing(false); // This will be set before results are fully displayed if loading overlay is timed
    }
  };

  useEffect(() => {
    if (currentScene === "results" && resultsRef.current) {
      resultsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [currentScene]);


  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-12 md:mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight font-headline">
              AI-Powered <span className="text-glow-accent">Fraud Defense</span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience how HydroGen analyzes payment traffic, identifies risks, and simulates intelligent agent collaboration in real-time.
            </p>
          </header>

          {currentScene === "input" && (
            <PaymentDataInput
              paymentData={paymentData}
              setPaymentData={setPaymentData}
              onAnalyze={handleAnalyzeData}
              isAnalyzing={isAnalyzing}
            />
          )}

          {(currentScene === "processing" || currentScene === "loadingResults" || currentScene === "results") && (
            <div className="mb-12">
               <PaymentDataInput
                paymentData={paymentData}
                setPaymentData={() => {}} // Read-only in this state
                onAnalyze={handleAnalyzeData}
                isAnalyzing={isAnalyzing || currentScene === "processing" || currentScene === "loadingResults"}
                readOnly={true}
              />
            </div>
          )}
          
          {(currentScene === "processing" || currentScene === "loadingResults" || currentScene === "results") && (
            <section className="mb-12 md:mb-16">
              <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6 md:mb-8 font-headline">
                Conceptual Agent <span className="text-glow-primary">Communication Flow</span>
              </h2>
              <ConceptualFlowAnimation isActive={currentScene === "processing" || currentScene === "loadingResults" || currentScene === "results"} />
            </section>
          )}

          {showLoadingOverlay && <LoadingOverlay />}

          {currentScene === "results" && analysisResult && (
            <div ref={resultsRef}>
              <ResultsDisplay result={analysisResult} />
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

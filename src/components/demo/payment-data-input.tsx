
import React from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";

interface PaymentDataInputProps {
  paymentData: string;
  setPaymentData: (data: string) => void;
  onAnalyze: () => void;
  isAnalyzing: boolean;
  readOnly?: boolean;
}

export default function PaymentDataInput({ 
  paymentData, 
  setPaymentData, 
  onAnalyze, 
  isAnalyzing,
  readOnly = false 
}: PaymentDataInputProps) {
  return (
    <section className="space-y-6 p-6 md:p-8 rounded-lg border border-border bg-card/50 glassmorphism">
      <div>
        <h2 className="text-2xl font-semibold mb-2 text-foreground font-headline">Analyze Payment Data</h2>
        <p className="text-muted-foreground">
          {readOnly 
            ? "Submitted payment traffic data:" 
            : "Paste your sample payment traffic data below. The data includes subtle annotations to showcase AI's nuanced analysis."}
        </p>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="paymentData" className="text-sm font-medium text-foreground/90">
          Payment Traffic Data (JSON format)
        </Label>
        <Textarea
          id="paymentData"
          value={paymentData}
          onChange={(e) => !readOnly && setPaymentData(e.target.value)}
          rows={10}
          className="bg-background/70 border-border focus:ring-accent focus:border-accent"
          placeholder="Enter JSON formatted payment data here..."
          readOnly={readOnly}
        />
        {!readOnly && (
            <p className="text-xs text-muted-foreground">
                Example annotations: (Transaction from known good user, but different IP), (High value, new user, high-risk region)
            </p>
        )}
      </div>

      <div className="flex justify-end">
        <Button
          onClick={onAnalyze}
          disabled={isAnalyzing || readOnly}
          size="lg"
          className="bg-accent hover:bg-accent/90 text-accent-foreground box-shadow-glow-accent focus:ring-accent min-w-[150px]"
        >
          {isAnalyzing ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Analyzing...
            </>
          ) : (
            "Analyze Data"
          )}
        </Button>
      </div>
    </section>
  );
}


import React, { useState, useEffect } from 'react';
import { Loader2 } from "lucide-react";

export default function LoadingOverlay() {
  const [loadingText, setLoadingText] = useState("HydroGen Agents at Work...");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingText("Analyzing data and simulating agent collaboration. This may take a few moments.");
    }, 1500); // Change text after 1.5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background/80 backdrop-blur-sm">
      <Loader2 className="h-16 w-16 animate-spin text-primary mb-6" />
      <p className="text-xl font-medium text-foreground text-center max-w-md">{loadingText}</p>
    </div>
  );
}

import Link from "next/link";
import { Zap, Linkedin, FileText, Lock } from "lucide-react";

const footerNavs = [
  { href: "/product", label: "Product" },
  { href: "/agents", label: "Agents" },
  { href: "/demo", label: "Request Demo" },
  { href: "/docs", label: "Docs" },
  { href: "/#contact", label: "Contact" },
];

const legalNavs = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
];

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border/60 text-muted-foreground">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Zap className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-foreground font-headline">
                Hydro<span className="text-primary">Gen</span>
              </span>
            </Link>
            <p className="text-sm max-w-xs">
              Autonomous Infrastructure for Payment Resilience. AI agents that detect, heal, and optimize payment flows in real time.
            </p>
            <div className="flex space-x-4">
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="/docs" className="text-muted-foreground hover:text-primary transition-colors">
                <FileText size={20} />
                <span className="sr-only">Documentation</span>
              </Link>
               <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                <Lock size={20} />
                <span className="sr-only">Privacy</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Navigation</h3>
            <ul className="space-y-3">
              {footerNavs.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm hover:text-primary transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Legal</h3>
            <ul className="space-y-3">
              {legalNavs.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm hover:text-primary transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/60 text-center text-xs">
          <p>&copy; {new Date().getFullYear()} HydroGen. All rights reserved. Built with passion and AI.</p>
        </div>
      </div>
    </footer>
  );
}

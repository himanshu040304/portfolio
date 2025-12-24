import { Link } from "wouter";
import { AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-background text-foreground font-mono">
      <AlertTriangle className="h-16 w-16 text-destructive mb-6 opacity-80" />
      <h1 className="text-4xl font-bold tracking-tighter mb-4">404 // SYSTEM ERROR</h1>
      <p className="text-muted-foreground mb-8">Resource not found in memory.</p>
      
      <Link href="/">
        <a className="px-6 py-3 border border-white/10 hover:border-accent hover:text-accent transition-colors">
          RETURN_HOME
        </a>
      </Link>
    </div>
  );
}

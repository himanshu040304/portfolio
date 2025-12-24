import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Terminal, Cpu, Network, BookOpen, FileText } from "lucide-react";

export function Navigation() {
  const [location] = useLocation();

  const navItems = [
    { label: "Home", path: "/", icon: Terminal },
    { label: "Philosophy", path: "/#philosophy", icon: BookOpen },
    { label: "Projects", path: "/#projects", icon: Cpu },
    { label: "Resume", path: "/resume.pdf", icon: FileText, external: true },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/5 bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-2 group cursor-pointer">
            <div className="w-8 h-8 bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-accent/50 transition-colors">
              <Network className="w-4 h-4 text-accent" />
            </div>
            <span className="font-mono font-bold tracking-tight text-sm">HIMANSHU.SYS</span>
          </a>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            item.external ? (
              <a 
                key={item.path}
                href={item.path}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-accent transition-colors"
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </a>
            ) : (
              <Link key={item.path} href={item.path}>
                <a className={cn(
                  "flex items-center gap-2 text-sm font-mono transition-colors",
                  location === item.path ? "text-foreground" : "text-muted-foreground hover:text-accent"
                )}>
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </a>
              </Link>
            )
          ))}
        </div>
      </div>
    </nav>
  );
}

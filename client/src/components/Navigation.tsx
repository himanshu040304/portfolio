import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Briefcase, Code, Trophy, FileText } from "lucide-react";

export function Navigation() {
  const [location] = useLocation();

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const target = href.startsWith("#") ? document.querySelector(href) : null;
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
      
      // Add visual animation to target section
      setTimeout(() => {
        target.classList.add("highlight-section");
        setTimeout(() => {
          target.classList.remove("highlight-section");
        }, 1500);
      }, 300);
    }
  };

  const navItems = [
    { label: "Experience", path: "/#experience", icon: Briefcase, isAnchor: true },
    { label: "Projects", path: "/#projects", icon: Code, isAnchor: true },
    { label: "Achievements", path: "/#achievements", icon: Trophy, isAnchor: true },
    { label: "Resume", path: "https://drive.google.com/file/d/15PwjSwFg5_P0q0cYBxeyRbeN2qVwQ-04/view?usp=sharing", icon: FileText, external: true },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/5 bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-2 group cursor-pointer">
            <div className="w-8 h-8 bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-accent/50 transition-colors">
              <Code className="w-4 h-4 text-accent" />
            </div>
            <span className="font-mono font-bold tracking-tight text-sm">HIMANSHU</span>
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
              <a
                key={item.path}
                href={item.path}
                onClick={(e) => handleSmoothScroll(e, item.path)}
                className="flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-accent transition-colors cursor-pointer"
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </a>
            )
          ))}
        </div>
      </div>
    </nav>
  );
}

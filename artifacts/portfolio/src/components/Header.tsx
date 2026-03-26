import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeaderProps {
  initials: string;
  onOpenAskAI: () => void;
}

export function Header({ initials, onOpenAskAI }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <a
          href="#"
          className="text-2xl font-serif font-semibold tracking-tight text-foreground hover:text-primary transition-colors flex items-center gap-1"
        >
          {initials}
        </a>

        <nav className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground mr-4">
            <a href="#experience" className="hover:text-foreground transition-colors py-2">Experience</a>
            <a href="#skills" className="hover:text-foreground transition-colors py-2">Skills</a>
            <a href="#fit-check" className="hover:text-foreground transition-colors py-2">Fit Check</a>
          </div>

          <button
            onClick={onOpenAskAI}
            className={cn(
              "px-5 py-2.5 rounded-full font-medium text-sm flex items-center gap-2",
              "bg-primary text-primary-foreground shadow-sm shadow-primary/20",
              "hover:shadow-md hover:shadow-primary/30 hover:-translate-y-0.5",
              "active:translate-y-0 active:shadow-sm",
              "transition-all duration-200 ease-out"
            )}
          >
            <Sparkles className="w-4 h-4" />
            Ask AI
          </button>
        </nav>
      </div>
    </header>
  );
}

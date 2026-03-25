import { ArrowDown, CheckCircle2, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeroProps {
  onOpenAskAI: () => void;
}

export function Hero({ onOpenAskAI }: HeroProps) {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden flex flex-col items-center text-center px-6">
      
      {/* Status Pill */}
      <div className="inline-flex max-w-full items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/20 text-primary mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <span className="w-2 h-2 rounded-full bg-primary shrink-0 animate-pulse" />
        <span className="text-xs font-medium tracking-wide truncate">
          Open to dev roles at mission-driven & high-impact orgs
        </span>
      </div>

      {/* Name & Title */}
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tight text-foreground mb-6 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-150">
        Adam Sk.
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-10 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300">
        <strong className="text-foreground font-semibold">Technical Lead.</strong> Specialized in full-stack development, robust data pipelines, DevOps, and end-to-end delivery.
      </p>

      {/* Tags */}
      <div className="flex flex-wrap justify-center gap-3 mb-12 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-500">
        {["Platform & Web Systems", "Data & Analytics", "DevOps & Cloud"].map((tag) => (
          <span key={tag} className="px-4 py-2 rounded-lg bg-card border border-border shadow-sm text-sm font-medium text-foreground flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
            {tag}
          </span>
        ))}
      </div>

      {/* Primary CTA */}
      <button
        onClick={onOpenAskAI}
        className={cn(
          "group relative px-8 py-4 rounded-xl font-semibold text-lg flex items-center gap-3 overflow-hidden",
          "bg-foreground text-background shadow-xl shadow-foreground/10",
          "hover:shadow-2xl hover:shadow-foreground/20 hover:-translate-y-1",
          "active:translate-y-0 active:shadow-md",
          "transition-all duration-300 ease-out animate-in fade-in slide-in-from-bottom-8 duration-700 delay-700"
        )}
      >
        <span className="relative z-10">Ask AI about Adam</span>
        <ChevronRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
      </button>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground animate-in fade-in duration-1000 delay-1000">
        <span className="text-xs font-medium uppercase tracking-widest">Scroll to explore</span>
        <ArrowDown className="w-4 h-4 animate-bounce opacity-70" />
      </div>
    </section>
  );
}

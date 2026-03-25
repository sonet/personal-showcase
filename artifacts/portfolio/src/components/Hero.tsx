import { ArrowDown, CheckCircle2, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeroProps {
  onOpenAskAI: () => void;
}

export function Hero({ onOpenAskAI }: HeroProps) {
  return (
    <section className="relative pt-32 pb-24 md:pt-44 md:pb-32 overflow-hidden px-6">
      <div className="max-w-3xl mx-auto">
        {/* Status Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/20 text-primary mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <span className="w-2 h-2 rounded-full bg-primary shrink-0 animate-pulse" />
          <span className="text-xs font-medium tracking-wide">
            Open to dev roles at mission-driven, infrastructure, platform, civic, public-sector, and high-impact organizations
          </span>
        </div>

        {/* Name */}
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tight text-foreground mb-5 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-150">
          Adam Sk.
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed mb-8 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300">
          <strong className="text-foreground font-semibold">Technical Lead:</strong>{" "}
          full-stack development, Data, DevOps, End-to-End Delivery.
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2.5 mb-12 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-500">
          {["Platform & Web Systems", "Data & Analytics", "DevOps & Cloud"].map(
            (tag) => (
              <span
                key={tag}
                className="px-3.5 py-1.5 rounded-lg bg-card border border-border shadow-sm text-sm font-medium text-foreground flex items-center gap-1.5"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                {tag}
              </span>
            )
          )}
        </div>

        {/* Primary CTA */}
        <div className="flex items-center gap-5 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-700">
          <button
            onClick={onOpenAskAI}
            className={cn(
              "group px-7 py-3.5 rounded-xl font-semibold text-base flex items-center gap-2.5",
              "bg-foreground text-background shadow-lg shadow-foreground/10",
              "hover:shadow-xl hover:shadow-foreground/15 hover:-translate-y-0.5",
              "active:translate-y-0 active:shadow-md",
              "transition-all duration-200 ease-out"
            )}
          >
            Ask AI about Adam
            <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Scroll cue */}
        <div className="mt-20 flex items-center gap-2 text-muted-foreground animate-in fade-in duration-1000 delay-1000">
          <ArrowDown className="w-4 h-4 animate-bounce opacity-60" />
          <span className="text-xs font-medium uppercase tracking-widest">Scroll to explore</span>
        </div>
      </div>
    </section>
  );
}

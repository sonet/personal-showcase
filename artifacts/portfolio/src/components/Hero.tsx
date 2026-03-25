import { MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeroProps {
  onOpenAskAI: () => void;
}

export function Hero({ onOpenAskAI }: HeroProps) {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 px-8 md:px-14">

      {/* Status Pill */}
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted border border-border text-muted-foreground mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
        <span className="text-xs font-medium">
          Open to dev roles at mission-driven, infrastructure, platform, civic, public-sector, and high-impact organizations
        </span>
      </div>

      {/* Name — full width, massive */}
      <h1
        className={cn(
          "font-serif font-bold tracking-tight text-foreground leading-none mb-4",
          "text-[clamp(3.5rem,9vw,8rem)]",
          "animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100"
        )}
      >
        Adam Sk.
      </h1>

      {/* Role title — accent color */}
      <p className="text-lg md:text-xl font-semibold text-primary mb-2 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200">
        Technical Lead
      </p>

      {/* Description */}
      <p className="text-base md:text-lg text-muted-foreground mb-6 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300">
        Full-stack development, Data, DevOps, and End-to-End Delivery
      </p>

      {/* Tag pills — minimal, no icons */}
      <div className="flex flex-wrap gap-2 mb-12 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-400">
        {["Platform & Web Systems", "Data & Analytics", "DevOps & Cloud"].map((tag) => (
          <span
            key={tag}
            className="px-4 py-1.5 rounded-full bg-card border border-border text-sm text-foreground"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Bottom row: CTA + Scroll cue */}
      <div className="flex items-center gap-12 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500">
        <button
          onClick={onOpenAskAI}
          className={cn(
            "group flex items-center gap-2.5 px-6 py-3 rounded-xl font-semibold text-sm",
            "bg-primary text-primary-foreground",
            "hover:opacity-90 hover:-translate-y-0.5",
            "active:translate-y-0",
            "transition-all duration-200 ease-out shadow-md"
          )}
        >
          <MessageSquare className="w-4 h-4" />
          Ask AI about Adam
        </button>

        {/* Scroll cue — to the right of CTA */}
        <div className="flex flex-col items-center gap-1.5">
          <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/70">
            Scroll to explore
          </span>
          <div className="w-px h-8 bg-border" />
        </div>
      </div>

    </section>
  );
}

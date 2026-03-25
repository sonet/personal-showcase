import { MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeroProps {
  onOpenAskAI: () => void;
}

export function Hero({ onOpenAskAI }: HeroProps) {
  return (
    <section className="relative pt-28 pb-6 md:pt-36 md:pb-8 px-6">
      <div className="max-w-5xl mx-auto">

      {/* Status Pill */}
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted border border-border text-muted-foreground mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <span className="w-2 h-2 rounded-full shrink-0 border-t-[#1e783e] border-r-[#1e783e] border-b-[#1e783e] border-l-[#1e783e] bg-[#2c9951] text-[#626d84]" />
        <span className="text-xs font-medium">Open to technical lead roles at mission-driven, non-profit, public-sector, and high-impact organizations</span>
      </div>

      {/* Name — full width, massive */}
      <h1
        className={cn(
          "font-serif font-bold tracking-tight text-foreground leading-none mb-4",
          "text-[clamp(3.5rem,9vw,8rem)]",
          "animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100"
        )}
      >
        Adam Sk
      </h1>

      {/* Role title — accent color */}
      <p className="font-serif text-2xl md:text-3xl font-semibold text-primary mb-2 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200">
        Technical Lead
      </p>

      {/* Description */}
      <p className="text-base md:text-lg text-muted-foreground mb-6 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300">
        Full-stack dev, Data, DevOps, and End-to-End Delivery
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
          Ask AI about me
        </button>

        {/* Scroll cue — to the right of CTA */}
        <div className="flex flex-col items-center gap-1.5">
          <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/70">
            Scroll to explore
          </span>
          <svg
            viewBox="0 0 26.458333 79.375"
            xmlns="http://www.w3.org/2000/svg"
            className="text-muted-foreground/50"
            style={{ height: "200px", width: "auto" }}
          >
            <path
              style={{ fill: "currentColor", strokeWidth: "0.480222" }}
              d="m 10.786216,16.630474 c 0.369713,-0.746892 1.047051,-1.375112 1.997653,-1.852792 3.000902,-1.507954 3.271176,-4.214086 0.560864,-5.6156427 -0.393387,-0.203429 -0.530298,-0.415462 -0.438388,-0.678945 0.225958,-0.647773 2.205757,0.776193 2.807541,2.0193177 0.845704,1.746989 -0.107281,3.673479 -2.40721,4.866281 -2.886576,1.497048 -2.795771,3.752 0.231371,5.745527 3.05037,2.008829 2.899216,5.064717 -0.343359,6.941599 -2.462669,1.425451 -2.547832,3.979685 -0.177292,5.317533 2.187384,1.234481 3.127268,3.715261 2.140788,5.650509 -0.391607,0.768243 -0.452998,0.82029 -2.33219,1.977196 -2.21782,1.365379 -2.005961,3.726637 0.469791,5.236011 3.091679,1.884887 3.15599,5.312097 0.132807,7.077727 -2.846487,1.662439 -2.865591,3.698178 -0.05174,5.513424 3.044473,1.964014 3.333288,4.856113 0.666375,6.672847 -0.890643,0.606712 -0.675961,0.888957 0.676155,0.888957 0.628937,0 1.143527,0.05238 1.143527,0.116413 0,0.26004 -2.590621,5.347954 -2.676176,5.255948 -0.16948,-0.182259 -2.660287,-5.073618 -2.660287,-5.224172 0,-0.101901 0.357175,-0.148192 1.143532,-0.148192 1.143526,0 1.143526,0 1.143526,-0.445947 0,-0.312244 0.08571,-0.512242 0.285882,-0.667056 2.67644,-2.070037 2.689838,-3.962253 0.0402,-5.678117 -3.3543215,-2.172214 -3.4708577,-5.205508 -0.262556,-6.834087 2.651814,-1.346104 2.714411,-4.07545 0.132645,-5.783352 -3.3668168,-2.227233 -3.3491303,-5.213916 0.04158,-7.021142 2.500448,-1.332725 2.318781,-4.273892 -0.364806,-5.906165 -2.9270209,-1.780338 -2.9122299,-4.644253 0.034,-6.584501 2.913324,-1.918574 2.987664,-4.257055 0.186427,-5.864403 -1.996769,-1.145744 -2.9310982,-3.337546 -2.120672,-4.974779 z"
            />
          </svg>
        </div>
      </div>

      </div>
    </section>
  );
}

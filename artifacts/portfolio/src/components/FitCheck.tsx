import { useState } from "react";
import { FileText, Loader2, Target, Zap, Activity, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function FitCheck() {
  const [input, setInput] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResult, setShowResult] = useState(true); // Always show static mock result as requested

  const handleAnalyze = () => {
    if (!input.trim() || isAnalyzing) return;
    setIsAnalyzing(true);
    // Simulate analyzing for UX feel, even though the result is static
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowResult(true);
    }, 1500);
  };

  return (
    <section id="fit-check" className="py-24 bg-muted/30 border-y border-border/50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-3xl font-serif font-bold text-foreground">Fit Check</h2>
          <p className="text-muted-foreground mt-2 text-sm">
            Paste a job description to see how Adam's profile aligns with the role.
          </p>
        </div>

        <div className="bg-card border border-border shadow-sm rounded-2xl p-2 mb-8">
          <div className="relative">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Paste a job description here (e.g., 'Looking for a Senior Platform Engineer with Kubernetes experience...')"
              className="w-full min-h-[160px] p-4 bg-transparent resize-none focus:outline-none text-foreground placeholder:text-muted-foreground/70"
            />
            <div className="absolute bottom-4 right-4 flex justify-end">
              <button
                onClick={handleAnalyze}
                disabled={!input.trim() || isAnalyzing}
                className={cn(
                  "px-6 py-2.5 rounded-lg font-medium text-sm flex items-center gap-2",
                  "bg-foreground text-background shadow-sm",
                  "hover:bg-foreground/90 hover:shadow",
                  "disabled:opacity-50 disabled:cursor-not-allowed",
                  "transition-all duration-200"
                )}
              >
                {isAnalyzing ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    <FileText className="w-4 h-4" />
                    Analyze Fit
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mock Result always visible below */}
        <div className={cn(
          "transition-all duration-500 overflow-hidden",
          isAnalyzing ? "opacity-40 scale-[0.98]" : "opacity-100 scale-100"
        )}>
          <div className="bg-card border border-border rounded-2xl shadow-lg p-6 md:p-8 relative overflow-hidden">
            {/* Decorative bg element */}
            <div className="absolute top-0 right-0 p-16 bg-primary/5 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none" />

            <div className="flex items-center justify-between mb-8 relative z-10">
              <h3 className="text-xl font-bold flex items-center gap-2 text-foreground">
                <Target className="w-5 h-5 text-primary" />
                Fit Analysis Result
              </h3>
              <div className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 font-semibold text-sm flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Strong Fit
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 relative z-10">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm font-semibold text-primary uppercase tracking-wider">
                  <Zap className="w-4 h-4" /> Matching Strengths
                </div>
                <p className="text-sm text-foreground leading-relaxed">
                  Platform engineering, full-stack development, robust data pipelines, and modern DevOps tooling.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm font-semibold text-blue-600 uppercase tracking-wider">
                  <Activity className="w-4 h-4" /> Transferable Exp
                </div>
                <p className="text-sm text-foreground leading-relaxed">
                  Public-sector delivery constraints, cross-functional team leadership, and large-scale CI/CD modernization.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                  <ArrowRight className="w-4 h-4" /> Potential Gaps
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Mobile-native development, specialized real-time ML inference systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

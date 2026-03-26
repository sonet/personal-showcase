import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Sparkles, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Experience as ExperienceType } from "@workspace/api-client-react";

interface ExperienceProps {
  experiences: ExperienceType[];
}

export function Experience({ experiences }: ExperienceProps) {
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});

  const toggleExpand = (id: string) => {
    setExpandedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="experience" className="pt-8 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-10">
          <h2 className="text-3xl font-serif font-bold text-foreground">
            Experience
          </h2>
          <p className="text-muted-foreground mt-2 text-sm">
            A trajectory of increasing technical leverage and organizational impact.
          </p>
        </div>

        <div className="space-y-5">
          {experiences.map((job) => {
            const isExpanded = !!expandedItems[job.id];

            return (
              <div
                key={job.id}
                className="bg-card border border-border rounded-2xl px-7 py-6 shadow-sm"
              >
                {/* Header row */}
                <div className="flex items-start justify-between gap-4 mb-1">
                  <h3 className="text-lg font-bold text-foreground leading-tight">
                    {job.company}
                  </h3>
                  <span className="text-sm text-muted-foreground whitespace-nowrap shrink-0 mt-0.5">
                    {job.period}
                  </span>
                </div>

                {/* Job title */}
                <p className="text-sm font-medium text-muted-foreground mb-5">
                  {job.title}
                </p>

                {/* Bullets */}
                <ul className="space-y-2.5 mb-5">
                  {job.bullets.map((bullet, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-muted-foreground text-sm"
                    >
                      <ArrowRight className="w-3.5 h-3.5 mt-0.5 shrink-0 text-primary/70" />
                      <span className="leading-snug">{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* AI context toggle */}
                <div className="border-t border-border/60 pt-4">
                  <button
                    onClick={() => toggleExpand(job.id)}
                    className={cn(
                      "flex items-center gap-1.5 text-sm font-medium transition-colors",
                      isExpanded
                        ? "text-primary"
                        : "text-primary/80 hover:text-primary"
                    )}
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    {isExpanded ? "Hide AI Context" : "View AI Context"}
                    <ChevronDown
                      className={cn(
                        "w-3.5 h-3.5 transition-transform duration-300",
                        isExpanded && "rotate-180"
                      )}
                    />
                  </button>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="mt-5 p-5 bg-primary/5 border border-primary/15 rounded-xl space-y-4">
                          <div>
                            <h4 className="text-xs uppercase tracking-wider font-semibold text-primary mb-1">
                              Context
                            </h4>
                            <p className="text-sm text-foreground/85 leading-relaxed">
                              {job.aiContext.context}
                            </p>
                          </div>
                          <div className="grid sm:grid-cols-2 gap-4">
                            <div>
                              <h4 className="text-xs uppercase tracking-wider font-semibold text-primary mb-1">
                                What Changed
                              </h4>
                              <p className="text-sm text-foreground/85 leading-relaxed">
                                {job.aiContext.changed}
                              </p>
                            </div>
                            <div>
                              <h4 className="text-xs uppercase tracking-wider font-semibold text-primary mb-1">
                                Why It Mattered
                              </h4>
                              <p className="text-sm text-foreground/85 leading-relaxed">
                                {job.aiContext.mattered}
                              </p>
                            </div>
                          </div>
                          <div className="pt-3 border-t border-primary/15">
                            <h4 className="text-xs uppercase tracking-wider font-semibold text-primary mb-1">
                              Lessons Learned
                            </h4>
                            <p className="text-sm text-foreground/85 leading-relaxed italic">
                              "{job.aiContext.lessons}"
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface Job {
  id: string;
  title: string;
  company: string;
  period: string;
  summary: string;
  bullets: string[];
  aiContext: {
    context: string;
    changed: string;
    mattered: string;
    lessons: string;
  };
}

const EXPERIENCES: Job[] = [
  {
    id: "meridian",
    title: "Senior Platform Engineer",
    company: "Meridian Systems",
    period: "2021–Present",
    summary: "Led platform infrastructure modernization across 4 product teams.",
    bullets: [
      "Reduced deploy time by 60%",
      "Built internal CI/CD tooling",
      "Migrated from monolith to service mesh",
      "Led 6-person infra guild"
    ],
    aiContext: {
      context: "This role came at a pivotal inflection point in the company's infrastructure maturity where technical debt was slowing down all product teams.",
      changed: "The engineering org shifted from ad-hoc deployments to a fully automated, auditable release process underpinned by Kubernetes and ArgoCD.",
      mattered: "Reliability improvements directly enabled a 2x headcount scale without ops bottlenecks, reducing lead time for changes dramatically.",
      lessons: "Platform work requires as much stakeholder management as technical execution. 'If the paved road isn't easier, developers won't take it.'"
    }
  },
  {
    id: "civic",
    title: "Full-Stack Engineering Lead",
    company: "Civic Data Collaborative",
    period: "2018–2021",
    summary: "Built data pipelines and public-sector tools serving 300K+ monthly users.",
    bullets: [
      "End-to-end delivery of 3 government data products",
      "Designed data ingestion platform in Python + dbt",
      "Mentored 4 junior engineers",
      "Secured ATO for FedRAMP-adjacent deployment"
    ],
    aiContext: {
      context: "Operating within the constraints of public sector requirements, this role demanded balancing rapid feature delivery with extreme compliance standards.",
      changed: "Introduced modern data engineering practices (dbt, Airflow) to environments that previously relied on brittle cron jobs and manual CSV uploads.",
      mattered: "The data ingestion platform became the authoritative source for critical public health metrics, maintaining 99.99% uptime during peak usage.",
      lessons: "Documentation and compliance aren't overhead; in civic tech, they are the product. Writing clear, defensible architecture documents is a superpower."
    }
  },
  {
    id: "foundry",
    title: "Software Engineer",
    company: "Foundry Labs",
    period: "2015–2018",
    summary: "Early engineer at a developer tooling startup. Shipped core product features.",
    bullets: [
      "Built REST API serving 50K+ developer accounts",
      "Integrated 3rd-party auth (OAuth2)",
      "Optimized PostgreSQL queries by 40%",
      "Contributed to open-source CLI toolkit"
    ],
    aiContext: {
      context: "Joined as one of the first 5 engineers, requiring deep generalist skills and the ability to ship rapidly to find product-market fit.",
      changed: "Evolved the MVP architecture into a robust set of services capable of handling massive API request volume from automated developer tools.",
      mattered: "The API latency optimizations directly correlated with enterprise customer retention and prevented massive infrastructure cost spikes.",
      lessons: "Premature optimization is the root of all evil, but poor database indexing will kill you on day one. Always instrument queries early."
    }
  }
];

export function Experience() {
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});

  const toggleExpand = (id: string) => {
    setExpandedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="experience" className="py-24 max-w-4xl mx-auto px-6">
      <div className="mb-12">
        <h2 className="text-3xl font-serif font-bold text-foreground">Experience</h2>
        <p className="text-muted-foreground mt-3">A trajectory of increasing technical leverage and organizational impact.</p>
      </div>

      <div className="space-y-12">
        {EXPERIENCES.map((job, idx) => {
          const isExpanded = !!expandedItems[job.id];
          
          return (
            <div key={job.id} className="relative pl-8 md:pl-0">
              {/* Timeline Line for mobile */}
              <div className="absolute left-[11px] top-2 bottom-0 w-px bg-border md:hidden" />
              {/* Timeline Dot for mobile */}
              <div className="absolute left-[7px] top-2.5 w-[9px] h-[9px] rounded-full bg-primary md:hidden ring-4 ring-background" />

              <div className="md:grid md:grid-cols-12 gap-8 items-baseline">
                {/* Desktop Date */}
                <div className="hidden md:block col-span-3 text-right">
                  <span className="text-sm font-medium text-muted-foreground">{job.period}</span>
                </div>

                <div className="md:col-span-9 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{job.title}</h3>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-primary font-medium">{job.company}</span>
                      <span className="md:hidden text-sm text-muted-foreground border-l border-border pl-3">{job.period}</span>
                    </div>
                  </div>

                  <p className="text-foreground leading-relaxed">
                    {job.summary}
                  </p>

                  <ul className="space-y-2">
                    {job.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0" />
                        <span className="leading-snug">{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-2">
                    <button
                      onClick={() => toggleExpand(job.id)}
                      className={cn(
                        "flex items-center gap-2 text-sm font-medium transition-colors px-3 py-1.5 -ml-3 rounded-md",
                        isExpanded ? "text-primary bg-primary/5" : "text-muted-foreground hover:text-foreground hover:bg-muted"
                      )}
                    >
                      <Sparkles className="w-4 h-4" />
                      {isExpanded ? "Hide AI Context" : "Show AI Context"}
                      <ChevronDown className={cn("w-4 h-4 transition-transform duration-300", isExpanded && "rotate-180")} />
                    </button>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="mt-4 p-6 bg-accent/30 border border-accent rounded-xl space-y-5 shadow-sm">
                            <div>
                              <h4 className="text-xs uppercase tracking-wider font-semibold text-primary mb-1.5">Context</h4>
                              <p className="text-sm text-foreground/90 leading-relaxed">{job.aiContext.context}</p>
                            </div>
                            <div className="grid sm:grid-cols-2 gap-5">
                              <div>
                                <h4 className="text-xs uppercase tracking-wider font-semibold text-primary mb-1.5">What Changed</h4>
                                <p className="text-sm text-foreground/90 leading-relaxed">{job.aiContext.changed}</p>
                              </div>
                              <div>
                                <h4 className="text-xs uppercase tracking-wider font-semibold text-primary mb-1.5">Why It Mattered</h4>
                                <p className="text-sm text-foreground/90 leading-relaxed">{job.aiContext.mattered}</p>
                              </div>
                            </div>
                            <div className="pt-2 border-t border-accent/60">
                              <h4 className="text-xs uppercase tracking-wider font-semibold text-primary mb-1.5">Lessons Learned</h4>
                              <p className="text-sm text-foreground/90 leading-relaxed font-medium">"{job.aiContext.lessons}"</p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

import { CheckCircle2, ChevronRight, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const SKILL_CATEGORIES = [
  {
    title: "Strong",
    description: "Production-ready, highly proficient",
    icon: CheckCircle2,
    iconColor: "text-emerald-500",
    bgColor: "bg-emerald-500/5",
    borderColor: "border-emerald-500/20",
    skills: ["Python", "TypeScript", "PostgreSQL", "Docker", "Kubernetes", "dbt", "Linux/Bash"]
  },
  {
    title: "Moderate",
    description: "Solid working knowledge",
    icon: ChevronRight,
    iconColor: "text-blue-500",
    bgColor: "bg-blue-500/5",
    borderColor: "border-blue-500/20",
    skills: ["React", "Terraform", "Kafka", "Data Engineering", "GCP"]
  },
  {
    title: "Gaps & Growth",
    description: "Areas with limited exposure",
    icon: AlertCircle,
    iconColor: "text-muted-foreground",
    bgColor: "bg-muted/30",
    borderColor: "border-border/50",
    skills: ["Mobile development", "ML/AI engineering", "Real-time systems at scale"]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto mb-10">
        <h2 className="text-3xl font-serif font-bold text-foreground">Skills Profile</h2>
        <p className="text-muted-foreground mt-2 text-sm">Listed with honest self-assessment — clarity over optics.</p>
      </div>
      <div className="max-w-5xl mx-auto">

      <div className="grid md:grid-cols-3 gap-6">
        {SKILL_CATEGORIES.map((category, idx) => (
          <div 
            key={idx}
            className={cn(
              "rounded-2xl p-6 border transition-all duration-300",
              category.bgColor,
              category.borderColor,
              idx === 0 ? "shadow-sm md:-translate-y-2 md:shadow-md" : "hover:-translate-y-1 hover:shadow-sm"
            )}
          >
            <div className="flex items-center gap-3 mb-2">
              <category.icon className={cn("w-5 h-5", category.iconColor)} />
              <h3 className="font-bold text-foreground text-lg">{category.title}</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-6 h-5">{category.description}</p>
            
            <div className="flex flex-col gap-3">
              {category.skills.map((skill, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className={cn("w-1.5 h-1.5 rounded-full", category.iconColor, "opacity-60")} />
                  <span className="text-foreground font-medium text-sm">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}

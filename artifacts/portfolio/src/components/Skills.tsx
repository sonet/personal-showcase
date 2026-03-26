import { CheckCircle2, ChevronRight, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import type { SkillCategory as SkillCategoryType, SkillLevel } from "@workspace/api-client-react";

interface SkillsProps {
  skills: SkillCategoryType[];
}

const LEVEL_CONFIG: Record<SkillLevel, {
  icon: React.ElementType;
  iconColor: string;
  bgColor: string;
  borderColor: string;
  elevated: boolean;
}> = {
  Strong: {
    icon: CheckCircle2,
    iconColor: "text-emerald-500",
    bgColor: "bg-emerald-500/5",
    borderColor: "border-emerald-500/20",
    elevated: true,
  },
  Moderate: {
    icon: ChevronRight,
    iconColor: "text-blue-500",
    bgColor: "bg-blue-500/5",
    borderColor: "border-blue-500/20",
    elevated: false,
  },
  Gaps: {
    icon: AlertCircle,
    iconColor: "text-muted-foreground",
    bgColor: "bg-muted/30",
    borderColor: "border-border/50",
    elevated: false,
  },
};

export function Skills({ skills }: SkillsProps) {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto mb-10">
        <h2 className="text-3xl font-serif font-bold text-foreground">Skills Profile</h2>
        <p className="text-muted-foreground mt-2 text-sm">
          Listed with honest self-assessment — clarity over optics.
        </p>
      </div>
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          {skills.map((category) => {
            const config = LEVEL_CONFIG[category.level];
            const Icon = config.icon;
            return (
              <div
                key={category.level}
                className={cn(
                  "rounded-2xl p-6 border transition-all duration-300",
                  config.bgColor,
                  config.borderColor,
                  config.elevated
                    ? "shadow-sm md:-translate-y-2 md:shadow-md"
                    : "hover:-translate-y-1 hover:shadow-sm"
                )}
              >
                <div className="flex items-center gap-3 mb-2">
                  <Icon className={cn("w-5 h-5", config.iconColor)} />
                  <h3 className="font-bold text-foreground text-lg">{category.level}</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-6 h-5">
                  {category.description}
                </p>
                <div className="flex flex-col gap-3">
                  {category.skills.map((skill) => (
                    <div key={skill} className="flex items-center gap-2">
                      <div
                        className={cn(
                          "w-1.5 h-1.5 rounded-full opacity-60",
                          config.iconColor
                        )}
                      />
                      <span className="text-foreground font-medium text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import type {
  Profile,
  Experience,
  SkillCategory,
} from "@workspace/api-zod";

export const profile: Profile = {
  name: "Adam Sk.",
  initials: "AS",
  title: "Technical Lead",
  description: "Full-stack development, Data, DevOps, and End-to-End Delivery",
  status:
    "Open to dev roles at mission-driven, infrastructure, platform, civic, public-sector, and high-impact organizations",
  tags: ["Platform & Web Systems", "Data & Analytics", "DevOps & Cloud"],
};

export const experiences: Experience[] = [
  {
    id: "meridian",
    title: "Senior Platform Engineer",
    company: "Meridian Systems",
    period: "2021–Present",
    summary:
      "Led platform infrastructure modernization across 4 product teams.",
    bullets: [
      "Reduced deploy time by 60%",
      "Built internal CI/CD tooling",
      "Migrated from monolith to service mesh",
      "Led 6-person infra guild",
    ],
    aiContext: {
      context:
        "This role came at a pivotal inflection point in the company's infrastructure maturity where technical debt was slowing down all product teams.",
      changed:
        "The engineering org shifted from ad-hoc deployments to a fully automated, auditable release process underpinned by Kubernetes and ArgoCD.",
      mattered:
        "Reliability improvements directly enabled a 2x headcount scale without ops bottlenecks, reducing lead time for changes dramatically.",
      lessons:
        "Platform work requires as much stakeholder management as technical execution. 'If the paved road isn't easier, developers won't take it.'",
    },
  },
  {
    id: "civic",
    title: "Full-Stack Engineering Lead",
    company: "Civic Data Collaborative",
    period: "2018–2021",
    summary:
      "Built data pipelines and public-sector tools serving 300K+ monthly users.",
    bullets: [
      "End-to-end delivery of 3 government data products",
      "Designed data ingestion platform in Python + dbt",
      "Mentored 4 junior engineers",
      "Secured ATO for FedRAMP-adjacent deployment",
    ],
    aiContext: {
      context:
        "Operating within the constraints of public sector requirements, this role demanded balancing rapid feature delivery with extreme compliance standards.",
      changed:
        "Introduced modern data engineering practices (dbt, Airflow) to environments that previously relied on brittle cron jobs and manual CSV uploads.",
      mattered:
        "The data ingestion platform became the authoritative source for critical public health metrics, maintaining 99.99% uptime during peak usage.",
      lessons:
        "Documentation and compliance aren't overhead; in civic tech, they are the product. Writing clear, defensible architecture documents is a superpower.",
    },
  },
  {
    id: "foundry",
    title: "Software Engineer",
    company: "Foundry Labs",
    period: "2015–2018",
    summary:
      "Early engineer at a developer tooling startup. Shipped core product features.",
    bullets: [
      "Built REST API serving 50K+ developer accounts",
      "Integrated 3rd-party auth (OAuth2)",
      "Optimized PostgreSQL queries by 40%",
      "Contributed to open-source CLI toolkit",
    ],
    aiContext: {
      context:
        "Joined as one of the first 5 engineers, requiring deep generalist skills and the ability to ship rapidly to find product-market fit.",
      changed:
        "Evolved the MVP architecture into a robust set of services capable of handling massive API request volume from automated developer tools.",
      mattered:
        "The API latency optimizations directly correlated with enterprise customer retention and prevented massive infrastructure cost spikes.",
      lessons:
        "Premature optimization is the root of all evil, but poor database indexing will kill you on day one. Always instrument queries early.",
    },
  },
];

export const skills: SkillCategory[] = [
  {
    level: "Strong",
    description: "Production-ready, highly proficient",
    skills: [
      "Python",
      "TypeScript",
      "PostgreSQL",
      "Docker",
      "Kubernetes",
      "dbt",
      "Linux/Bash",
    ],
  },
  {
    level: "Moderate",
    description: "Solid working knowledge",
    skills: ["React", "Terraform", "Kafka", "Data Engineering", "GCP"],
  },
  {
    level: "Gaps",
    description: "Areas with limited exposure",
    skills: [
      "Mobile development",
      "ML/AI engineering",
      "Real-time systems at scale",
    ],
  },
];

import { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { FitCheck } from "@/components/FitCheck";
import { AskAIModal } from "@/components/AskAIModal";
import { useGetProfile } from "@workspace/api-client-react";

export default function Home() {
  const [isAIModalOpen, setIsAIModalOpen] = useState(false);
  const { data, isLoading, isError } = useGetProfile();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin" />
          <p className="text-sm text-muted-foreground">Loading profile…</p>
        </div>
      </div>
    );
  }

  if (isError || !data) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-sm text-muted-foreground">Failed to load profile data.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background selection:bg-primary/20 selection:text-primary overflow-x-hidden">
      <Header
        initials={data.profile.initials}
        onOpenAskAI={() => setIsAIModalOpen(true)}
      />

      <main>
        <Hero profile={data.profile} onOpenAskAI={() => setIsAIModalOpen(true)} />
        <Experience experiences={data.experiences} />
        <Skills skills={data.skills} />
        <FitCheck />
      </main>

      <footer className="py-12 text-center text-muted-foreground text-sm border-t border-border/50">
        <p>© {new Date().getFullYear()} {data.profile.name}</p>
      </footer>

      <AskAIModal
        isOpen={isAIModalOpen}
        onClose={() => setIsAIModalOpen(false)}
      />
    </div>
  );
}

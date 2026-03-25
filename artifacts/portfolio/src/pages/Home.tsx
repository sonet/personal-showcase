import { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { FitCheck } from "@/components/FitCheck";
import { AskAIModal } from "@/components/AskAIModal";

export default function Home() {
  const [isAIModalOpen, setIsAIModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background selection:bg-primary/20 selection:text-primary overflow-x-hidden">
      <Header onOpenAskAI={() => setIsAIModalOpen(true)} />
      
      <main>
        <Hero onOpenAskAI={() => setIsAIModalOpen(true)} />
        <Experience />
        <Skills />
        <FitCheck />
      </main>

      <footer className="py-12 text-center text-muted-foreground text-sm border-t border-border/50">
        <p>© {new Date().getFullYear()} Adam Sk | Full-stack dev, Data, DevOps, and End-to-End Delivery</p>
      </footer>

      <AskAIModal 
        isOpen={isAIModalOpen} 
        onClose={() => setIsAIModalOpen(false)} 
      />
    </div>
  );
}

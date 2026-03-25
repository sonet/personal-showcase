import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Sparkles, User, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface AskAIModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type Message = {
  id: string;
  role: "user" | "ai";
  content: string;
};

const MOCK_DB: Record<string, string> = {
  "What kind of leadership experience does he have?": "Adam has led engineering teams across infrastructure, civic tech, and developer tooling. He's managed cross-functional guilds, mentored junior engineers, and driven platform modernization initiatives that scaled with organizational growth. His leadership style tends toward technical depth paired with stakeholder clarity.",
  "What are his strongest technical areas?": "His strongest areas are platform/infrastructure engineering, Python-based data pipelines, DevOps tooling, and full-stack delivery. He has particular depth in Kubernetes, PostgreSQL, and dbt — and a track record of shipping end-to-end across complex technical and compliance environments.",
  "Has he worked on platform engineering?": "Yes, extensively. In his current role as Senior Platform Engineer at Meridian Systems, he led the migration from a legacy monolith to a service mesh, reduced deployment times by 60%, and built robust internal CI/CD tooling.",
  "What roles is he strongest fit for?": "Adam is an ideal fit for Staff/Lead Engineer, Platform Engineering Manager, or Technical Lead roles. He thrives in environments that require both deep technical architecture and high-level stakeholder alignment."
};

const SUGGESTIONS = Object.keys(MOCK_DB);

export function AskAIModal({ isOpen, onClose }: AskAIModalProps) {
  const [messages, setMessages] = useState<Message[]>([
    { id: 'initial', role: 'ai', content: "Hi. I'm an AI assistant trained on Adam's background, experience, and leadership style. What would you like to know?" }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setMessages([
          { id: 'initial', role: 'ai', content: "Hi. I'm an AI assistant trained on Adam's background, experience, and leadership style. What would you like to know?" }
        ]);
        setInput("");
        setIsTyping(false);
      }, 300);
    }
  }, [isOpen]);

  const handleSubmit = (text: string) => {
    if (!text.trim() || isTyping) return;
    
    const userMsg: Message = { id: Date.now().toString(), role: "user", content: text };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    // Simulate AI thinking and responding
    setTimeout(() => {
      const response = MOCK_DB[text] || "Based on Adam's profile, he brings a blend of deep technical execution and strategic oversight. For a more detailed answer on this specific topic, you might want to reach out to him directly.";
      const aiMsg: Message = { id: (Date.now() + 1).toString(), role: "ai", content: response };
      setMessages(prev => [...prev, aiMsg]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-foreground/10 backdrop-blur-sm"
            onClick={onClose}
          />
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 sm:p-6 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="w-full max-w-2xl bg-card border border-border/50 shadow-2xl rounded-2xl overflow-hidden flex flex-col pointer-events-auto h-[80vh] max-h-[800px]"
            >
              {/* Header */}
              <div className="px-6 py-4 flex items-center justify-between border-b border-border/50 bg-muted/30">
                <div>
                  <h2 className="text-lg font-serif font-semibold text-foreground flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-primary" />
                    Ask AI about Adam
                  </h2>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    Ask about experience, leadership, technical depth, or fit.
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 -mr-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Chat Area */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6" ref={scrollRef}>
                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={cn(
                      "flex gap-4 max-w-[85%]",
                      msg.role === "user" ? "ml-auto flex-row-reverse" : "mr-auto"
                    )}
                  >
                    <div className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center shrink-0 shadow-sm",
                      msg.role === "user" ? "bg-secondary text-secondary-foreground" : "bg-primary text-primary-foreground"
                    )}>
                      {msg.role === "user" ? <User className="w-4 h-4" /> : <Sparkles className="w-4 h-4" />}
                    </div>
                    <div className={cn(
                      "px-4 py-3 rounded-2xl text-sm leading-relaxed",
                      msg.role === "user" 
                        ? "bg-secondary text-secondary-foreground rounded-tr-sm" 
                        : "bg-muted border border-border/50 text-foreground rounded-tl-sm"
                    )}>
                      {msg.content}
                    </div>
                  </motion.div>
                ))}
                
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex gap-4 max-w-[85%] mr-auto"
                  >
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center shrink-0 shadow-sm">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div className="px-4 py-3 rounded-2xl bg-muted border border-border/50 text-foreground rounded-tl-sm flex items-center gap-2">
                      <Loader2 className="w-4 h-4 animate-spin text-primary" />
                      <span className="text-sm text-muted-foreground">Synthesizing insight...</span>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Input Area */}
              <div className="p-4 sm:p-6 bg-card border-t border-border/50 space-y-4">
                {messages.length < 3 && !isTyping && (
                  <div className="flex flex-wrap gap-2 pb-2">
                    {SUGGESTIONS.map((suggestion) => (
                      <button
                        key={suggestion}
                        onClick={() => handleSubmit(suggestion)}
                        className="text-xs px-3 py-1.5 bg-accent/50 text-accent-foreground border border-accent rounded-full hover:bg-accent hover:shadow-sm transition-all"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                )}
                
                <form 
                  onSubmit={(e) => { e.preventDefault(); handleSubmit(input); }}
                  className="relative flex items-center"
                >
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask a question..."
                    disabled={isTyping}
                    className="w-full pl-5 pr-12 py-3.5 bg-muted/50 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all disabled:opacity-50"
                  />
                  <button
                    type="submit"
                    disabled={!input.trim() || isTyping}
                    className="absolute right-2 p-2 bg-primary text-primary-foreground rounded-lg disabled:opacity-50 disabled:bg-muted disabled:text-muted-foreground hover:bg-primary/90 transition-colors shadow-sm"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

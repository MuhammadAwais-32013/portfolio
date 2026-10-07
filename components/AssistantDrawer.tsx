"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  MessageSquare,
  X,
  Send,
  Sparkles,
  Bot,
  User,
  ArrowRight,
  HelpCircle,
  Minimize2,
  Maximize2,
} from "lucide-react";

type Message = {
  id: string;
  sender: "user" | "assistant";
  text: string;
  sources?: { label: string; href: string }[];
  timestamp: string;
};

const SUGGESTED_QUERIES = [
  "What are the metrics for his FYP?",
  "What is his experience with PyTorch & YOLO?",
  "What scholarship programs is he targeting?",
  "Tell me about his NIC internship role",
  "Is Muhammad Awais available for hire?",
];

const PRE_INDEXED_KNOWLEDGE: {
  keywords: string[];
  reply: string;
  sources: { label: string; href: string }[];
}[] = [
  {
    keywords: ["fyp", "choking", "traffic", "metrics", "yolo", "map", "fps"],
    reply:
      "Muhammad Awais's Final Year Project (FYP) at NUML is 'Intelligent Urban Traffic Choking Detection & Flow Optimization'. He self-curated and annotated a 4,200-frame multi-weather dataset of Islamabad intersections. Using a tuned YOLOv8 architecture optimized with FP16 TensorRT, the system achieves 91.4% mAP@0.5 with 23.8ms per-frame latency (42 FPS throughput) on edge GPU hardware.",
    sources: [
      { label: "Traffic Choking Case Study", href: "/projects/traffic-choking-detection" },
      { label: "FYP Technical Paper Write-up", href: "/research#fyp-section" },
    ],
  },
  {
    keywords: ["scholarship", "roadmap", "master", "ms", "csc", "anso", "italy", "china"],
    reply:
      "Awais is preparing applications for Fall 2026 / Spring 2027 graduate programs in MS Artificial Intelligence and MS Cybersecurity. His primary scholarship tracks are the Chinese Government Scholarship (CSC Type B at Tsinghua, ZJU, SJTU), the ANSO Scholarship (CAS / UCAS), and Italian Regional Grants (DSU at PoliMi and Sapienza University of Rome).",
    sources: [{ label: "Academic Roadmap", href: "/roadmap" }],
  },
  {
    keywords: ["internship", "nic", "stayovers", "work", "job", "experience", "fiverr"],
    reply:
      "He interned as a Full-Stack Software Engineer at National Incubation Center (NIC) Islamabad with stayOvers.pk, where he engineered OOP backend services, built strict RBAC authorization, and developed 35+ REST API endpoints. Additionally, he has completed 20+ freelance web and AI projects on Fiverr for international clients.",
    sources: [{ label: "Work Experience Timeline", href: "/experience" }],
  },
  {
    keywords: ["stack", "technology", "skills", "tools", "languages", "python", "nextjs"],
    reply:
      "His technical stack bridges AI and Full-Stack: Python (PyTorch, YOLOv8/v11, OpenCV, TensorRT, LangGraph, FastAPI), TypeScript / JavaScript (Next.js App Router, React 19, Tailwind CSS, Node.js), and Systems/Data (PostgreSQL, Docker, Qdrant, Postman, Git).",
    sources: [
      { label: "Skills Matrix & Evidence", href: "/skills" },
      { label: "14 Verified Certifications", href: "/achievements" },
    ],
  },
  {
    keywords: ["hire", "available", "contact", "email", "roles"],
    reply:
      "Yes! Muhammad Awais is currently open to full-stack AI engineering roles, internships, and research mentorship opportunities. You can contact him via email at awais.ai.eng@gmail.com or through the interactive contact form.",
    sources: [{ label: "Contact Form", href: "/contact" }],
  },
];

export function AssistantDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      sender: "assistant",
      text: "Hello! I am Muhammad Awais's portfolio assistant. You can ask me anything regarding his FYP traffic vision model, full-stack systems, academic roadmap (CSC/ANSO), or professional certifications.",
      timestamp: "Just now",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSend = (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    // Simulate grounded retrieval synthesis
    setTimeout(() => {
      const lower = query.toLowerCase();
      let match = PRE_INDEXED_KNOWLEDGE.find((item) =>
        item.keywords.some((k) => lower.includes(k))
      );

      let replyText =
        "Awais has a multidisciplinary background bridging computer vision, autonomous agents, and full-stack software development. Check out his case studies or academic profile for detailed empirical results.";
      let sources = [
        { label: "All Projects", href: "/projects" },
        { label: "Research Statement", href: "/research" },
      ];

      if (match) {
        replyText = match.reply;
        sources = match.sources;
      }

      const assistantMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: "assistant",
        text: replyText,
        sources: sources,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };

      setMessages((prev) => [...prev, assistantMsg]);
      setIsTyping(false);
    }, 450);
  };

  return (
    <>
      {/* Floating launcher trigger */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-medium text-xs shadow-xl hover:shadow-sky-500/25 hover:scale-105 active:scale-95 transition-all duration-200 border border-sky-400/30"
          aria-label="Open portfolio assistant"
        >
          <Sparkles className="w-4 h-4 animate-pulse" />
          <span className="font-semibold tracking-wide">Ask Portfolio AI</span>
        </button>
      )}

      {/* Slide-over Drawer */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[420px] max-h-[640px] h-[85vh] rounded-2xl glass-panel-elevated shadow-2xl border border-[var(--border-strong)] flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 duration-200">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--border-subtle)] bg-[var(--surface-1)]">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-sky-500/20 border border-sky-500/40 flex items-center justify-center text-sky-400">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-[var(--foreground)] leading-none">
                  Portfolio Assistant
                </h4>
                <span className="text-[10px] text-emerald-400 font-medium flex items-center gap-1 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 status-pulse-dot" />
                  Grounded on Portfolio Knowledge Base
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-md text-[var(--text-dim)] hover:text-[var(--foreground)] hover:bg-[var(--surface-2)] transition-colors"
              aria-label="Close assistant"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex gap-2.5 ${m.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                {m.sender === "assistant" && (
                  <div className="w-6 h-6 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0 text-[11px] font-bold">
                    AI
                  </div>
                )}
                <div
                  className={`max-w-[85%] rounded-xl p-3 leading-relaxed ${
                    m.sender === "user"
                      ? "bg-sky-500 text-slate-950 font-medium rounded-tr-none"
                      : "bg-[var(--surface-2)] border border-[var(--border-subtle)] text-[var(--foreground)] rounded-tl-none"
                  }`}
                >
                  <p>{m.text}</p>
                  {m.sources && m.sources.length > 0 && (
                    <div className="mt-2.5 pt-2 border-t border-[var(--border-subtle)] space-y-1">
                      <span className="text-[10px] font-semibold text-[var(--text-dim)] uppercase tracking-wider block">
                        Verified Sources:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {m.sources.map((s, idx) => (
                          <Link
                            key={idx}
                            href={s.href}
                            onClick={() => setIsOpen(false)}
                            className="inline-flex items-center gap-1 text-[10px] font-medium text-sky-400 hover:underline bg-[var(--surface-1)] px-1.5 py-0.5 rounded border border-[var(--border-subtle)]"
                          >
                            <span>{s.label}</span>
                            <ArrowRight className="w-2.5 h-2.5" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                  <span className="text-[9px] text-[var(--text-dim)] block text-right mt-1">
                    {m.timestamp}
                  </span>
                </div>
                {m.sender === "user" && (
                  <div className="w-6 h-6 rounded-full bg-slate-700 text-white flex items-center justify-center shrink-0 text-[11px] font-bold">
                    <User className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-2 text-[var(--text-dim)] text-[11px] pl-8">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-bounce" />
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-bounce [animation-delay:0.15s]" />
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-bounce [animation-delay:0.3s]" />
                <span className="ml-1 text-[10px]">Retrieving evidence...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Quick Questions */}
          <div className="px-3 py-2 border-t border-[var(--border-subtle)] bg-[var(--surface-1)]">
            <span className="text-[10px] font-semibold text-[var(--text-dim)] block mb-1.5 uppercase tracking-wider">
              Quick Inquiries:
            </span>
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
              {SUGGESTED_QUERIES.slice(0, 3).map((sq, i) => (
                <button
                  key={i}
                  onClick={() => handleSend(sq)}
                  className="whitespace-nowrap px-2.5 py-1 rounded-full bg-[var(--surface-2)] hover:bg-[var(--surface-3)] text-[10px] text-[var(--text-muted)] hover:text-sky-400 transition-colors border border-[var(--border-subtle)]"
                >
                  {sq}
                </button>
              ))}
            </div>
          </div>

          {/* Input field */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 border-t border-[var(--border-subtle)] bg-[var(--surface-1)] flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about FYP, skills, scholarships..."
              className="flex-1 bg-[var(--surface-2)] text-xs text-[var(--foreground)] placeholder-[var(--text-dim)] px-3 py-2 rounded-lg border border-[var(--border-subtle)] focus:outline-none focus:border-sky-500"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="p-2 rounded-lg bg-sky-500 hover:bg-sky-400 disabled:opacity-40 disabled:hover:bg-sky-500 text-slate-950 font-bold transition-colors"
              aria-label="Send message"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}

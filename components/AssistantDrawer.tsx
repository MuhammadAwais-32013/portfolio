"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MessageSquare,
  X,
  Send,
  Sparkles,
  Bot,
  User,
  ArrowRight,
  ExternalLink,
  Mail,
  Phone,
  CheckCircle2,
  HelpCircle,
  Briefcase,
  GraduationCap,
  Award,
  Layers,
  Brain,
  AlertTriangle,
} from "lucide-react";

type Message = {
  id: string;
  sender: "user" | "assistant";
  text: string;
  sources?: { label: string; href: string; isExternal?: boolean }[];
  suggestions?: string[];
  timestamp: string;
};

const SUGGESTED_QUERIES = [
  "Tell me about Podcaster Crew",
  "What is DiaBp Diet Consultant?",
  "How does the Sales XGBoost model work?",
  "What are his 18+ certifications?",
  "Is Muhammad Awais available for hire?",
  "How can I contact him on WhatsApp?",
];

interface KnowledgeEntry {
  category: string;
  keywords: string[];
  reply: string;
  sources: { label: string; href: string; isExternal?: boolean }[];
  suggestions?: string[];
}

const KNOWLEDGE_BASE: KnowledgeEntry[] = [
  {
    category: "podcaster-crew",
    keywords: ["podcaster", "crew", "crewai", "podcast", "audio", "tts", "script", "host"],
    reply:
      "🎙️ **Podcaster Crew** is an autonomous multi-agent AI system built with CrewAI that automates the entire research-to-podcast pipeline. It orchestrates three specialized agents:\n\n1. **Researcher Agent**: Conducts real-time web discovery using Serper API on any topic.\n2. **Reporting Analyst**: Synthesizes the raw data into a structured markdown research dossier.\n3. **Scriptwriter Agent**: Formulates a natural, witty two-host podcast script with cues and banter.\n4. **Gemini TTS Engine**: Synthesizes high-fidelity voice-based audio saved to the outputs directory.\n\nIt is powered by Python 3.12 and uv.",
    sources: [
      { label: "GitHub: podcaster_crew", href: "https://github.com/MuhammadAwais-32013/podcaster_crew", isExternal: true },
      { label: "View in Projects", href: "/projects" },
    ],
    suggestions: ["What is DiaBp Diet Consultant?", "Tell me about his FYP Traffic project"],
  },
  {
    category: "diet-planner",
    keywords: ["diet", "health", "diabp", "ocr", "flutter", "dart", "diabetes", "hypertension", "medical", "rag", "dietplanner", "web app", "tesseract", "faiss", "gemini"],
    reply:
      "🩺 **DiaBP Diet Consultant** is an AI-powered healthcare platform built for diabetes and hypertension patients, available across both Web and Mobile:\n\n• **Full-Stack Web App (Next.js & FastAPI)**: Built with Next.js, FastAPI, Google Gemini, FAISS vector RAG, Tesseract OCR for PDF/image lab reports, real-time WebSockets, and jsPDF meal export.\n• **Mobile App (Flutter & Dart)**: Cross-platform mobile client for biometric tracking and camera lab report scanning.\n• **Clinical Diet Planning**: Generates personalized 1-week to 1-month meal regimens grounded in medical literature with patient analytics.",
    sources: [
      { label: "GitHub: Dietplanner_Web_APP", href: "https://github.com/MuhammadAwais-32013/Dietplanner_Web_APP", isExternal: true },
      { label: "GitHub: DietPlanner_mobile-app", href: "https://github.com/MuhammadAwais-32013/DietPlanner_mobile-app", isExternal: true },
      { label: "Projects Showcase", href: "/projects" },
    ],
    suggestions: ["Tell me about Sales XGBoost", "What certifications does he hold?"],
  },
  {
    category: "sales-xgboost",
    keywords: ["sales", "forecast", "forecasting", "xgboost", "time-series", "regression", "inventory", "mae", "rmse"],
    reply:
      "📈 **Sales Forecasting with XGBoost** is an end-to-end predictive analytics engine designed to optimize supply chain inventory:\n\n• **Time-Series Feature Engineering**: Incorporates temporal dynamics (day-of-week, monthly cycles, seasonal flags) and autoregressive lag indicators (t-1, t-7, 14-day rolling windows) with zero data leakage.\n• **Evaluation**: Evaluated using MAE, RMSE, and R² against traditional moving-average baselines.\n• **Deployment**: Features an interactive Python application (`app.py` / `demo.py`) for supply chain demand planning.",
    sources: [
      { label: "GitHub: Sales-forecast-XGBOOST", href: "https://github.com/MuhammadAwais-32013/Sales-forecast-forecasting-model-XGBOOST/tree/main", isExternal: true },
      { label: "Projects Catalog", href: "/projects" },
    ],
    suggestions: ["Tell me about his FYP", "Is he available for hire?"],
  },
  {
    category: "fyp-traffic",
    keywords: ["fyp", "choking", "traffic", "yolo", "map", "fps", "tensorrt", "vision", "islamabad", "road"],
    reply:
      "🚗 **FYP: Intelligent Urban Traffic Choking Detection & Flow Optimization**:\n\n• **Dataset**: Muhammad Awais self-curated and annotated a custom 4,200+ frame roadway dataset of Islamabad intersections under heterogeneous driving conditions.\n• **Architecture**: YOLOv8 customized with spatial density vector clustering and TensorRT FP16 quantization.\n• **Performance**: Achieves **91.4% mAP@0.5** across 8 vehicle categories at **42 FPS throughput** (23.8ms per-frame latency) on edge hardware.",
    sources: [
      { label: "FYP Case Study", href: "/projects/traffic-choking-detection" },
      { label: "Research Paper Write-Up", href: "/research#fyp-section" },
    ],
    suggestions: ["What are his research interests?", "What certifications does he have?"],
  },
  {
    category: "certifications",
    keywords: ["certification", "certifications", "certificate", "coursera", "deeplearning.ai", "andrew ng", "mcp", "postman", "datacamp", "cisco", "pcap"],
    reply:
      "📜 Muhammad Awais holds **18+ verified technical credentials** documented in his Certifications repository:\n\n1. **DeepLearning.AI Machine Learning Specialization** (Andrew Ng / Stanford Online)\n2. **Supervised & Advanced Learning Algorithms & Unsupervised/RL**\n3. **Pak Angels Generative AI Certification**\n4. **Hugging Face MCP Automation in Production**\n5. **Fundamentals of MCP (Model Context Protocol)**\n6. **Postman API Fundamentals Student Expert**\n7. **DataCamp**: Prompt Engineering, Introduction to Python, Intermediate SQL\n8. **Cisco Networking Academy**: PCAP Programming in Python, IT Essentials\n9. **Google**: Developer Student Clubs (GDSC) Core Member, Google Soft Skills Program",
    sources: [
      { label: "GitHub: Certifications Repo", href: "https://github.com/MuhammadAwais-32013/Certifications", isExternal: true },
      { label: "Achievements & Credentials Page", href: "/achievements" },
    ],
    suggestions: ["Is Muhammad Awais available for hire?", "What is his tech stack?"],
  },
  {
    category: "availability",
    keywords: ["available", "availability", "hire", "roles", "job", "hiring", "open", "opportunity", "opportunities", "work with"],
    reply:
      "💼 **Current Availability Status**:\n\nYes! Muhammad Awais is **actively open** for:\n• **Full-Stack AI Engineer Roles** (Full-time / Contract)\n• **Generative AI & Agentic AI Specialist positions**\n• **Computer Vision & Machine Learning Engineering**\n• **MS Research Collaborations & Lab Inquiries** (Fall 2026 / Spring 2027)\n\nHe responds to verified inquiries within 24 hours.",
    sources: [
      { label: "Send Message via Contact Page", href: "/contact" },
      { label: "Download Dual CV", href: "/resume" },
    ],
    suggestions: ["How to contact on WhatsApp?", "What is his email?"],
  },
  {
    category: "contact",
    keywords: ["contact", "email", "whatsapp", "phone", "reach", "message", "call", "number"],
    reply:
      "📫 **Direct & Secure Contact Channels**:\n\n• **Email**: [muhammad.awais.swe@gmail.com](mailto:muhammad.awais.swe@gmail.com)\n• **WhatsApp**: [+92 346 4617329](https://wa.me/923464617329) (Secure direct chat link)\n• **LinkedIn**: [linkedin.com/in/muhammad-awais32013](https://www.linkedin.com/in/muhammad-awais32013)\n• **GitHub**: [github.com/MuhammadAwais-32013](https://github.com/MuhammadAwais-32013)\n• **Location**: Islamabad, Pakistan (UTC+5)",
    sources: [
      { label: "Open Contact Page", href: "/contact" },
      { label: "Chat on WhatsApp (+92 346 4617329)", href: "https://wa.me/923464617329", isExternal: true },
    ],
    suggestions: ["Tell me about Podcaster Crew", "Review his skills & tech stack"],
  },
  {
    category: "research",
    keywords: ["research", "interests", "genai", "llm", "llms", "agentic", "masters", "ms", "scholarship", "csc", "anso", "italy", "thesis"],
    reply:
      "🔬 **Research Interests & Academic Trajectory**:\n\n• **Core Areas**: Generative AI, Large Language Models (LLMs), Agentic Systems (multi-agent state graphs, reflection loops), and Edge Computer Vision.\n• **Education**: BS Computer Science at NUML Islamabad.\n• **Graduate Target (2026–2027)**: MS in Artificial Intelligence & MS in Cybersecurity, targeting Chinese Government Scholarships (CSC Type B at Tsinghua/ZJU/SJTU), ANSO Scholarship (CAS/UCAS), and Italian Regional Grants (DSU at PoliMi & Sapienza).",
    sources: [
      { label: "Research Statement", href: "/research" },
      { label: "Skills Matrix", href: "/skills" },
    ],
    suggestions: ["What projects has he built?", "What are his certifications?"],
  },
  {
    category: "skills",
    keywords: ["skills", "stack", "technology", "tools", "python", "nextjs", "react", "fastapi", "docker", "langgraph", "pytorch"],
    reply:
      "🛠️ **Comprehensive Technical Stack**:\n\n• **AI & GenAI**: Python, PyTorch, YOLOv8/v11, TensorRT, CrewAI, LangGraph, LangChain, Google Gemini API, OpenAI API, Hugging Face, XGBoost, Scikit-Learn, OpenCV.\n• **Full-Stack & Systems**: Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS, FastAPI, Node.js, PostgreSQL, Qdrant Vector Store, Docker, Git, Postman.\n• **Mobile & Cross-Platform**: Flutter & Dart (medical OCR & health assistant).",
    sources: [
      { label: "Skills Matrix & Evidence", href: "/skills" },
      { label: "All Projects", href: "/projects" },
    ],
    suggestions: ["Tell me about Podcaster Crew", "Is he open for hire?"],
  },
  {
    category: "experience",
    keywords: ["experience", "nic", "stayovers", "internship", "fiverr", "freelance", "work", "job history"],
    reply:
      "💼 **Professional Experience Highlights**:\n\n• **Full-Stack Software Engineer Intern @ stayOvers.pk (NIC Islamabad)**: Built backend services, engineered strict RBAC authorization middleware, and built 35+ production REST API endpoints for property management.\n• **Independent Freelance AI & Web Engineer (Fiverr)**: Successfully completed 20+ projects for international clients spanning computer vision, custom web platforms, and automated Python workflows.",
    sources: [
      { label: "Work Experience Timeline", href: "/experience" },
      { label: "Download Resume", href: "/resume" },
    ],
    suggestions: ["Review all projects", "Contact on WhatsApp"],
  },
];

/* ── Lightweight Markdown Renderer ────────────────────────────
   Handles: **bold**, [links](url), bullet lists (• -), 
   numbered lists (1.), line breaks, and headings.
   No external dependency needed.
──────────────────────────────────────────────────────────────── */
function renderMarkdown(text: string): React.ReactNode {
  const lines = text.split("\n");
  const elements: React.ReactNode[] = [];
  let listItems: React.ReactNode[] = [];
  let listType: "ul" | "ol" | null = null;
  let key = 0;

  const flushList = () => {
    if (listItems.length > 0 && listType) {
      if (listType === "ul") {
        elements.push(
          <ul key={key++} className="my-1.5 ml-1 space-y-1">
            {listItems}
          </ul>
        );
      } else {
        elements.push(
          <ol key={key++} className="my-1.5 ml-1 space-y-1 list-decimal list-inside">
            {listItems}
          </ol>
        );
      }
      listItems = [];
      listType = null;
    }
  };

  const formatInline = (str: string): React.ReactNode => {
    // Process **bold**, [text](url), and inline code `code`
    const parts: React.ReactNode[] = [];
    let remaining = str;
    let idx = 0;

    while (remaining.length > 0) {
      // Bold: **text**
      const boldMatch = remaining.match(/\*\*(.+?)\*\*/);
      // Link: [text](url)
      const linkMatch = remaining.match(/\[(.+?)\]\((.+?)\)/);
      // Inline code: `code`
      const codeMatch = remaining.match(/`([^`]+)`/);

      // Find the earliest match
      const matches = [
        boldMatch ? { type: "bold", match: boldMatch } : null,
        linkMatch ? { type: "link", match: linkMatch } : null,
        codeMatch ? { type: "code", match: codeMatch } : null,
      ]
        .filter(Boolean)
        .sort((a, b) => (a!.match.index ?? 0) - (b!.match.index ?? 0));

      if (matches.length === 0) {
        parts.push(remaining);
        break;
      }

      const first = matches[0]!;
      const matchIndex = first.match.index ?? 0;

      if (matchIndex > 0) {
        parts.push(remaining.slice(0, matchIndex));
      }

      if (first.type === "bold") {
        parts.push(
          <strong key={`b-${idx++}`} className="font-bold text-[var(--foreground)]">
            {first.match[1]}
          </strong>
        );
      } else if (first.type === "link") {
        const href = first.match[2];
        const isExternal = href.startsWith("http");
        parts.push(
          <a
            key={`l-${idx++}`}
            href={href}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            className="text-[var(--accent)] font-semibold hover:underline"
          >
            {first.match[1]}
          </a>
        );
      } else if (first.type === "code") {
        parts.push(
          <code
            key={`c-${idx++}`}
            className="px-1 py-0.5 rounded bg-[var(--surface-2)] text-[var(--accent)] text-[10px] font-mono"
          >
            {first.match[1]}
          </code>
        );
      }

      remaining = remaining.slice(matchIndex + first.match[0].length);
    }

    return parts.length === 1 ? parts[0] : <>{parts}</>;
  };

  for (const line of lines) {
    const trimmed = line.trim();

    // Empty line
    if (!trimmed) {
      flushList();
      elements.push(<div key={key++} className="h-2" />);
      continue;
    }

    // Bullet list: • or -
    const bulletMatch = trimmed.match(/^[•\-\*]\s+(.+)/);
    if (bulletMatch) {
      if (listType !== "ul") flushList();
      listType = "ul";
      listItems.push(
        <li key={key++} className="flex items-start gap-1.5">
          <span className="text-[var(--accent)] mt-0.5 shrink-0">•</span>
          <span>{formatInline(bulletMatch[1])}</span>
        </li>
      );
      continue;
    }

    // Numbered list: 1. text
    const numberedMatch = trimmed.match(/^(\d+)\.\s+(.+)/);
    if (numberedMatch) {
      if (listType !== "ol") flushList();
      listType = "ol";
      listItems.push(
        <li key={key++} className="flex items-start gap-1.5">
          <span className="text-[var(--accent)] font-bold shrink-0 min-w-[16px]">{numberedMatch[1]}.</span>
          <span>{formatInline(numberedMatch[2])}</span>
        </li>
      );
      continue;
    }

    flushList();

    // Heading-like lines (emoji prefix typically)
    if (/^[\u{1F300}-\u{1FAFF}]/u.test(trimmed)) {
      elements.push(
        <p key={key++} className="font-semibold text-[var(--foreground)] mt-1">
          {formatInline(trimmed)}
        </p>
      );
    } else {
      elements.push(
        <p key={key++}>
          {formatInline(trimmed)}
        </p>
      );
    }
  }

  flushList();
  return <div className="space-y-0.5">{elements}</div>;
}

const INITIAL_MESSAGES: Message[] = [
  {
    id: "welcome",
    sender: "assistant",
    text: "Hi there! 👋 I'm the portfolio assistant for **Muhammad Awais** — Full-Stack AI Engineer. Ask me anything about his projects, certifications, research, or how to get in touch.",
    suggestions: [
      "Tell me about Podcaster Crew",
      "What are his certifications?",
      "Is he available for hire?",
      "How can I reach him on WhatsApp?",
    ],
    timestamp: "Just now",
  },
];

export function AssistantDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const [showExitConfirm, setShowExitConfirm] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleConfirmExit = () => {
    setMessages(INITIAL_MESSAGES);
    setInput("");
    setIsTyping(false);
    setShowExitConfirm(false);
    setIsOpen(false);
  };

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

    setTimeout(() => {
      const lower = query.toLowerCase();

      // Check greetings first
      const isGreeting = /^(hi|hello|hey|greetings|salam|assalam|aoa)\b/i.test(lower);

      let match = KNOWLEDGE_BASE.find((entry) =>
        entry.keywords.some((kw) => lower.includes(kw))
      );

      let replyText = "";
      let sources: { label: string; href: string; isExternal?: boolean }[] | undefined = undefined;
      let suggestions: string[] | undefined = undefined;

      if (isGreeting && !match) {
        replyText = "Hello! Great to meet you. I'm Muhammad Awais's portfolio AI assistant. How can I help you today? You can explore his projects, technical certifications, research roadmap, or contact info.";
        sources = [
          { label: "View All Projects", href: "/projects" },
          { label: "Contact Awais", href: "/contact" },
        ];
        suggestions = [
          "Tell me about Podcaster Crew",
          "What is his FYP project?",
          "What certifications does he hold?",
          "Is he available for hire?",
        ];
      } else if (match) {
        replyText = match.reply;
        sources = match.sources;
        suggestions = match.suggestions;
      } else {
        // Fallback for irrelevant / off-topic queries
        replyText =
          "I am an AI assistant specifically dedicated to **Muhammad Awais's portfolio, engineering projects, research, and background**.\n\nI cannot assist with general off-topic questions, but I'd be glad to share information about Awais's:\n• 🎙️ **Podcaster Crew** (CrewAI & Gemini TTS)\n• 🩺 **DiaBp Diet Consultant** (RAG & Medical OCR)\n• 📈 **Sales Forecasting** (XGBoost)\n• 🚗 **FYP Traffic Choking Detection** (YOLOv8 & TensorRT)\n• 📜 **18+ Verified Certifications** (DeepLearning.AI, MCP, Cisco)\n• 💼 **Availability & Direct Contact** (Email & WhatsApp)";

        sources = [
          { label: "Explore Projects", href: "/projects" },
          { label: "Verified Credentials", href: "/achievements" },
          { label: "Direct Contact Form", href: "/contact" },
        ];

        suggestions = [
          "Tell me about Podcaster Crew",
          "What are his certifications?",
          "Is he available for hire?",
          "How can I contact him on WhatsApp?",
        ];
      }

      const assistantMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: "assistant",
        text: replyText,
        sources,
        suggestions,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };

      setMessages((prev) => [...prev, assistantMsg]);
      setIsTyping(false);
    }, 400);
  };

  return (
    <>
      {/* Floating launcher trigger */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex items-center gap-2.5 px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-full bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-medium text-xs shadow-xl hover:shadow-sky-500/25 hover:scale-105 active:scale-95 transition-all duration-200 border border-sky-400/30"
          aria-label="Open portfolio assistant"
        >
          <div className="relative">
            <Bot className="w-4 h-4" />
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-400 status-pulse-dot" />
          </div>
          <span className="font-semibold">Ask Awais AI</span>
        </button>
      )}

      {/* Drawer Panel */}
      {isOpen && (
        <aside
          role="dialog"
          aria-label="Portfolio AI Assistant"
          aria-modal="true"
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-96 md:w-[420px] h-[580px] max-h-[85vh] rounded-3xl bg-[var(--surface-1)] border border-[var(--border-subtle)] shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200"
        >
          {/* Header */}
          <div className="p-4 border-b border-[var(--border-subtle)] bg-[var(--surface-2)] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative w-8 h-8 rounded-full overflow-hidden ring-2 ring-[var(--accent)]/50 shrink-0">
                <Image
                  src="/P_Picture.jpeg"
                  alt="Muhammad Awais"
                  width={32}
                  height={32}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="text-xs font-bold text-[var(--foreground)] flex items-center gap-1.5">
                  <span>Awais Portfolio AI</span>
                  <span className="px-1.5 py-0.2 rounded text-[9px] font-mono font-bold bg-emerald-500/15 text-emerald-500 border border-emerald-500/30">
                    Live
                  </span>
                </div>
                <div className="text-[11px] text-[var(--text-muted)]">
                  Projects • Certifications • Availability
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1.5 shrink-0">
              <button
                onClick={() => setShowExitConfirm(true)}
                className="px-2.5 py-1 rounded-lg text-xs font-semibold text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/40 border border-rose-200 dark:border-rose-900/50 transition-colors cursor-pointer"
                title="Clear all responses and exit"
                aria-label="Clear chat and exit"
              >
                Exit
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg hover:bg-[var(--surface-3)] text-[var(--text-dim)] hover:text-[var(--foreground)] border border-[var(--border-subtle)] transition-colors cursor-pointer"
                aria-label="Close assistant (retain messages)"
                title="Close (retain conversation)"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick contact strip */}
          <div className="px-4 py-2 bg-[var(--accent-surface)] border-b border-[var(--accent-border)] flex items-center justify-between text-[11px]">
            <span className="text-[var(--text-muted)] font-medium">Quick Connect:</span>
            <div className="flex items-center gap-2">
              <a
                href="https://wa.me/923464617329"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
                title="Chat on WhatsApp"
              >
                <span>WhatsApp</span>
              </a>
              <span className="text-[var(--border-strong)]">•</span>
              <a
                href="mailto:muhammad.awais.swe@gmail.com"
                className="inline-flex items-center gap-1 text-[var(--accent)] font-semibold hover:underline"
                title="Send email"
              >
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Messages Feed */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 bg-[var(--background)]">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex flex-col ${m.sender === "user" ? "items-end" : "items-start"
                  }`}
              >
                <div
                  className={`max-w-[88%] p-3.5 rounded-2xl text-xs leading-relaxed ${m.sender === "user"
                    ? "bg-[var(--accent)] text-slate-950 font-medium rounded-tr-xs"
                    : "bg-[var(--surface-1)] text-[var(--foreground)] border border-[var(--border-subtle)] shadow-xs rounded-tl-xs"
                    }`}
                >
                  <div>{m.sender === "assistant" ? renderMarkdown(m.text) : m.text}</div>

                  {/* Sources / Deep links */}
                  {m.sources && m.sources.length > 0 && (
                    <div className="mt-3 pt-2.5 border-t border-[var(--border-subtle)] space-y-1.5">
                      <div className="text-[10px] font-mono uppercase tracking-wider text-[var(--text-dim)] font-bold">
                        Verified Sources:
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {m.sources.map((s, idx) =>
                          s.isExternal ? (
                            <a
                              key={idx}
                              href={s.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[var(--surface-2)] hover:bg-[var(--surface-3)] text-[10px] font-semibold text-[var(--accent)] border border-[var(--border-subtle)] transition-colors"
                            >
                              <span>{s.label}</span>
                              <ExternalLink className="w-2.5 h-2.5" />
                            </a>
                          ) : (
                            <Link
                              key={idx}
                              href={s.href}
                              onClick={() => setIsOpen(false)}
                              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[var(--surface-2)] hover:bg-[var(--surface-3)] text-[10px] font-semibold text-[var(--accent)] border border-[var(--border-subtle)] transition-colors"
                            >
                              <span>{s.label}</span>
                              <ArrowRight className="w-2.5 h-2.5" />
                            </Link>
                          )
                        )}
                      </div>
                    </div>
                  )}

                  {/* Follow-up suggestions */}
                  {m.suggestions && m.suggestions.length > 0 && (
                    <div className="mt-3 pt-2 border-t border-[var(--border-subtle)]">
                      <div className="text-[10px] text-[var(--text-dim)] font-medium mb-1.5">
                        Suggested questions:
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {m.suggestions.map((sug, sIdx) => (
                          <button
                            key={sIdx}
                            onClick={() => handleSend(sug)}
                            className="text-[10px] px-2 py-0.5 rounded-full bg-[var(--surface-2)] hover:bg-[var(--accent-surface)] text-[var(--text-muted)] hover:text-[var(--accent)] border border-[var(--border-subtle)] transition-colors text-left"
                          >
                            {sug}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                <span className="text-[9px] text-[var(--text-dim)] mt-1 px-1">
                  {m.timestamp}
                </span>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-1.5 p-3 rounded-2xl bg-[var(--surface-1)] border border-[var(--border-subtle)] w-16">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-bounce" />
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-bounce [animation-delay:0.2s]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-bounce [animation-delay:0.4s]" />
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Query Pills */}
          <div className="px-3 py-2 bg-[var(--surface-2)] border-t border-[var(--border-subtle)] flex items-center gap-1.5 overflow-x-auto no-scrollbar">
            {SUGGESTED_QUERIES.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(q)}
                className="shrink-0 px-2.5 py-1 rounded-full text-[10px] font-medium bg-[var(--surface-1)] hover:bg-[var(--accent-surface)] text-[var(--text-muted)] hover:text-[var(--accent)] border border-[var(--border-subtle)] transition-colors whitespace-nowrap"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input Bar */}
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
              placeholder="Ask about Podcaster Crew, XGBoost, Certifications..."
              className="flex-1 px-3 py-2 rounded-xl bg-[var(--surface-2)] border border-[var(--border-subtle)] text-xs text-[var(--foreground)] placeholder-[var(--text-dim)] focus:outline-none focus:border-[var(--accent)]"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="p-2 rounded-xl bg-[var(--accent)] hover:brightness-110 disabled:opacity-40 text-slate-950 font-bold transition-all shadow-xs"
              aria-label="Send message"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </aside>
      )}

      {/* Exit Confirmation Warning Modal — fragment-level so overflow-hidden on aside doesn't clip it */}
      {isOpen && showExitConfirm && (
        <div
          className="fixed inset-0 z-[60] bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-6 animate-in fade-in duration-150"
          onClick={() => setShowExitConfirm(false)}
        >
          <div
            className="w-full max-w-[320px] p-5 rounded-2xl bg-[var(--surface-1)] border border-amber-500/30 shadow-2xl text-center space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-12 h-12 mx-auto rounded-full bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-500">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[var(--foreground)]">Exit Chat?</h4>
              <p className="text-xs text-[var(--text-muted)] mt-1.5 leading-relaxed">
                You will lose the previous chat. All message history will be reset.
              </p>
            </div>
            <div className="flex gap-2.5 pt-1">
              <button
                type="button"
                onClick={() => setShowExitConfirm(false)}
                className="flex-1 px-3 py-2 rounded-xl text-xs font-semibold bg-[var(--surface-2)] hover:bg-[var(--surface-3)] text-[var(--foreground)] border border-[var(--border-subtle)] transition-colors cursor-pointer"
              >
                Keep Chat
              </button>
              <button
                type="button"
                onClick={handleConfirmExit}
                className="flex-1 px-3 py-2 rounded-xl text-xs font-semibold bg-rose-600 hover:bg-rose-500 text-white shadow-xs transition-colors cursor-pointer"
              >
                Clear &amp; Exit
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

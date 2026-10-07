"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { useAudience, AudienceType } from "./AudienceContext";
import {
  Search,
  Command,
  X,
  FileText,
  Briefcase,
  GraduationCap,
  Layers,
  Award,
  Mail,
  ExternalLink,
  Sparkles,
} from "lucide-react";

type CommandItem = {
  id: string;
  title: string;
  subtitle: string;
  category: "Navigation" | "Audience Lens" | "Projects" | "Actions";
  icon: React.ReactNode;
  action: () => void;
};

export function CommandPalette({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const router = useRouter();
  const { setAudience } = useAudience();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Open
        }
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery("");
      setSelectedIndex(0);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const items: CommandItem[] = [
    // Navigation
    {
      id: "nav-home",
      title: "Home",
      subtitle: "Hero, traffic simulation, and highlights",
      category: "Navigation",
      icon: <Sparkles className="w-4 h-4 text-sky-400" />,
      action: () => {
        router.push("/");
        onClose();
      },
    },
    {
      id: "nav-projects",
      title: "Projects & Case Studies",
      subtitle: "Browse all 4 full-stack & AI case studies",
      category: "Navigation",
      icon: <Layers className="w-4 h-4 text-sky-400" />,
      action: () => {
        router.push("/projects");
        onClose();
      },
    },
    {
      id: "nav-research",
      title: "Research & FYP",
      subtitle: "FYP urban traffic detection write-up and academic thesis",
      category: "Navigation",
      icon: <GraduationCap className="w-4 h-4 text-purple-400" />,
      action: () => {
        router.push("/research");
        onClose();
      },
    },
    {
      id: "nav-roadmap",
      title: "Academic Roadmap",
      subtitle: "CSC, ANSO, Italy MS targets and timeline",
      category: "Navigation",
      icon: <FileText className="w-4 h-4 text-amber-400" />,
      action: () => {
        router.push("/roadmap");
        onClose();
      },
    },
    {
      id: "nav-experience",
      title: "Experience & Education",
      subtitle: "NIC Islamabad, freelancing, and NUML CS",
      category: "Navigation",
      icon: <Briefcase className="w-4 h-4 text-emerald-400" />,
      action: () => {
        router.push("/experience");
        onClose();
      },
    },
    {
      id: "nav-skills",
      title: "Skills & Evidence Matrix",
      subtitle: "Grouped competencies linked to proof projects",
      category: "Navigation",
      icon: <Layers className="w-4 h-4 text-blue-400" />,
      action: () => {
        router.push("/skills");
        onClose();
      },
    },
    {
      id: "nav-achievements",
      title: "Certifications & Achievements",
      subtitle: "14 verified professional credentials and honors",
      category: "Navigation",
      icon: <Award className="w-4 h-4 text-yellow-400" />,
      action: () => {
        router.push("/achievements");
        onClose();
      },
    },
    {
      id: "nav-resume",
      title: "Dual CV / Resume",
      subtitle: "Industry CV & Academic CV with downloads",
      category: "Navigation",
      icon: <FileText className="w-4 h-4 text-sky-400" />,
      action: () => {
        router.push("/resume");
        onClose();
      },
    },
    {
      id: "nav-contact",
      title: "Contact & Inquiries",
      subtitle: "Direct message form and email details",
      category: "Navigation",
      icon: <Mail className="w-4 h-4 text-rose-400" />,
      action: () => {
        router.push("/contact");
        onClose();
      },
    },

    // Projects
    {
      id: "proj-traffic",
      title: "Traffic Choking Detection (FYP)",
      subtitle: "YOLOv8 Edge model on Islamabad roads, 42 FPS, 91.4% mAP",
      category: "Projects",
      icon: <Layers className="w-4 h-4 text-emerald-400" />,
      action: () => {
        router.push("/projects/traffic-choking-detection");
        onClose();
      },
    },
    {
      id: "proj-health",
      title: "AI Smart Health Platform",
      subtitle: "HIPAA-conscious multi-tenant triage portal with RBAC",
      category: "Projects",
      icon: <Layers className="w-4 h-4 text-sky-400" />,
      action: () => {
        router.push("/projects/ai-smart-health-platform");
        onClose();
      },
    },
    {
      id: "proj-articlesift",
      title: "ArticleSift",
      subtitle: "Dense semantic paper exploration and comparative matrix",
      category: "Projects",
      icon: <Layers className="w-4 h-4 text-indigo-400" />,
      action: () => {
        router.push("/projects/articlesift");
        onClose();
      },
    },
    {
      id: "proj-multiagent",
      title: "Multi-Agent Research System",
      subtitle: "Autonomous 3-agent supervisor reflection loop in LangGraph",
      category: "Projects",
      icon: <Layers className="w-4 h-4 text-purple-400" />,
      action: () => {
        router.push("/projects/multi-agent-research-system");
        onClose();
      },
    },

    // Audience Lens
    {
      id: "lens-recruiter",
      title: "Switch Lens: Recruiter",
      subtitle: "Focus on production code, metrics, and deployed tools",
      category: "Audience Lens",
      icon: <Briefcase className="w-4 h-4 text-emerald-400" />,
      action: () => {
        setAudience("recruiters");
        router.push("/for/recruiters");
        onClose();
      },
    },
    {
      id: "lens-professor",
      title: "Switch Lens: Professor",
      subtitle: "Prioritize FYP methodology, data rigor, and research statement",
      category: "Audience Lens",
      icon: <GraduationCap className="w-4 h-4 text-purple-400" />,
      action: () => {
        setAudience("professors");
        router.push("/for/professors");
        onClose();
      },
    },
    {
      id: "lens-admissions",
      title: "Switch Lens: Admissions",
      subtitle: "Emphasize academic trajectory, CGPA, and scholarship roadmap",
      category: "Audience Lens",
      icon: <Award className="w-4 h-4 text-amber-400" />,
      action: () => {
        setAudience("admissions");
        router.push("/for/admissions");
        onClose();
      },
    },
  ];

  const filtered = items.filter(
    (item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.subtitle.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase())
  );

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % (filtered.length || 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filtered.length) % (filtered.length || 1));
    } else if (e.key === "Enter" && filtered[selectedIndex]) {
      e.preventDefault();
      filtered[selectedIndex].action();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-150">
      <div
        className="relative w-full max-w-xl rounded-xl glass-panel-elevated shadow-2xl border border-[var(--border-strong)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-[var(--border-subtle)] bg-[var(--surface-1)]">
          <Search className="w-4 h-4 text-[var(--text-dim)] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleKeyDown}
            placeholder="Search projects, research, lenses, pages..."
            className="w-full bg-transparent text-sm text-[var(--foreground)] placeholder-[var(--text-dim)] focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="p-1 rounded text-[var(--text-dim)] hover:text-[var(--foreground)]"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
          <kbd className="hidden sm:inline font-mono text-[10px] text-[var(--text-dim)] bg-[var(--surface-2)] px-1.5 py-0.5 rounded border border-[var(--border-subtle)]">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto p-2 divide-y divide-[var(--border-subtle)]">
          {filtered.length === 0 ? (
            <div className="py-12 text-center text-xs text-[var(--text-dim)]">
              No matching pages or commands found for &ldquo;{query}&rdquo;
            </div>
          ) : (
            filtered.map((item, index) => {
              const isSelected = index === selectedIndex;
              return (
                <div
                  key={item.id}
                  onClick={item.action}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg cursor-pointer transition-colors ${
                    isSelected
                      ? "bg-sky-500/15 text-[var(--foreground)]"
                      : "hover:bg-[var(--surface-2)] text-[var(--text-muted)]"
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="p-1.5 rounded-md bg-[var(--surface-1)] border border-[var(--border-subtle)] shrink-0">
                      {item.icon}
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-semibold text-[var(--foreground)] truncate">
                        {item.title}
                      </div>
                      <div className="text-[11px] text-[var(--text-dim)] truncate">
                        {item.subtitle}
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono uppercase text-[var(--text-dim)] px-1.5 py-0.5 rounded bg-[var(--surface-1)] border border-[var(--border-subtle)] shrink-0">
                    {item.category}
                  </span>
                </div>
              );
            })
          )}
        </div>

        {/* Bottom Helper Bar */}
        <div className="flex items-center justify-between px-4 py-2 border-t border-[var(--border-subtle)] bg-[var(--surface-1)] text-[11px] text-[var(--text-dim)]">
          <div className="flex items-center gap-3">
            <span>
              <kbd className="font-mono bg-[var(--surface-2)] px-1 py-0.5 rounded">↑</kbd>{" "}
              <kbd className="font-mono bg-[var(--surface-2)] px-1 py-0.5 rounded">↓</kbd> navigate
            </span>
            <span>
              <kbd className="font-mono bg-[var(--surface-2)] px-1 py-0.5 rounded">↵</kbd> select
            </span>
          </div>
          <span>Fast Search & Navigation</span>
        </div>
      </div>
    </div>
  );
}

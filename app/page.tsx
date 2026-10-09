"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useAudience } from "@/components/AudienceContext";
import { AiEngineeringStudio } from "@/components/AiEngineeringStudio";
import {
  getProfile,
  getFeaturedProjects,
  getExperience,
  getResearch,
} from "@/lib/content";
import {
  ArrowRight,
  Download,
  ExternalLink,
  Cpu,
  Layers,
  Sparkles,
  Briefcase,
  GraduationCap,
  Award,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  FileText,
  Bot,
  Copy,
  Check,
  Mail,
  Flame,
} from "lucide-react";
import { Github } from "@/components/Icons";

export default function HomePage() {
  const { audience } = useAudience();
  const profile = getProfile();
  const featuredProjects = getFeaturedProjects();
  const experience = getExperience();
  const research = getResearch();
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("awais.ai.eng@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const currentAudienceConfig =
    audience !== "all" && profile.audiences[audience as keyof typeof profile.audiences]
      ? profile.audiences[audience as keyof typeof profile.audiences]
      : {
          label: "Full Perspective",
          tagline: "End-to-end computer vision, agentic systems, and secure full-stack software.",
          primaryCta: "Explore Case Studies",
          secondaryCta: "Download Resume",
          prioritySections: ["hero", "metrics", "projects", "research", "experience", "skills", "roadmap"],
        };

  // The 4 core pillars specifically highlighted
  const pillars = [
    {
      id: "fullstack-ai",
      title: "Full-Stack AI Engineer",
      icon: <Layers className="w-5 h-5 text-sky-400" />,
      tagline: "End-to-End Production Systems",
      desc: "Engineering full-stack architectures from Next.js 16 clients to async FastAPI gateways, RBAC security middleware, and PostgreSQL storage.",
      proof: "stayOvers.pk at NIC & Smart Health Platform",
      stack: ["Next.js 16", "React 19", "FastAPI", "PostgreSQL", "RBAC", "Docker"],
      link: "/projects/ai-smart-health-platform",
      badgeColor: "bg-sky-500/10 text-sky-400 border-sky-500/20",
    },
    {
      id: "ai-engineer",
      title: "AI & Vision Engineer",
      icon: <Cpu className="w-5 h-5 text-emerald-400" />,
      tagline: "High-Throughput Model Inference",
      desc: "Training custom deep neural networks and deploying low-latency edge inference with TensorRT quantization (FP16), running at 42 FPS on edge hardware.",
      proof: "FYP Traffic Choking Detection (91.4% mAP@0.5)",
      stack: ["PyTorch", "YOLOv8", "OpenCV", "TensorRT", "CUDA", "Roboflow"],
      link: "/projects/traffic-choking-detection",
      badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    },
    {
      id: "gen-agentic",
      title: "GenAI & Agentic AI",
      icon: <Bot className="w-5 h-5 text-purple-400" />,
      tagline: "Autonomous Multi-Agent Networks",
      desc: "Orchestrating stateful multi-agent reflection loops with LangGraph, supervisor verification guards, and dense vector RAG over 50,000+ papers.",
      proof: "Multi-Agent Research Pipeline (94.2% verified citation rate)",
      stack: ["LangGraph", "LangChain", "Gemini API", "Qdrant Vector DB", "RAG"],
      link: "/projects/multi-agent-research-system",
      badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    },
    {
      id: "ai-researcher",
      title: "AI Researcher",
      icon: <GraduationCap className="w-5 h-5 text-amber-400" />,
      tagline: "Empirical Rigor & Thesis Inquiry",
      desc: "Curating bespoke 4,200-frame datasets, formulating spatial choke density metrics ($C_d$), and targeting graduate studies (CSC, ANSO, Italy).",
      proof: "NUML CS Thesis & 4.2k Islamabad Roadway Corpus",
      stack: ["Dataset Curation", "Metric Formulation", "LaTeX", "Empirical Auditing"],
      link: "/research",
      badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    },
  ];

  return (
    <div className="relative space-y-20 sm:space-y-28 lg:space-y-32 pb-24">
      {/* Ambient Top Glow */}
      <div className="ambient-glow-top" />

      {/* 1. HERO SECTION (Strict 8pt grid, 48px action touch targets, high contrast) */}
      <section className="relative pt-8 sm:pt-16 lg:pt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Headline, Bio & CTAs */}
          <div className="lg:col-span-7 space-y-8">
            {/* Status & Credential Pills (44px min tap target) */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex flex-wrap items-center gap-3"
            >
              <div className="inline-flex items-center gap-2 min-h-[36px] px-4 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400 status-pulse-dot" />
                <span>Open to AI Roles & MS Research Outreach</span>
              </div>

              <div className="inline-flex items-center gap-1.5 min-h-[36px] px-3.5 py-1.5 rounded-full text-xs font-mono font-medium bg-sky-500/10 text-sky-400 border border-sky-500/20">
                <Sparkles className="w-3.5 h-3.5" />
                <span>NUML CS Senior (CGPA 3.34)</span>
              </div>
            </motion.div>

            {/* Main Headline (Typography scaling: Hero 3rem - 4.5rem) */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-4"
            >
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[var(--foreground)] leading-[1.08]">
                Full-Stack AI Engineer,{" "}
                <span className="bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Agentic Systems
                </span>{" "}
                & Researcher<span className="text-sky-400">.</span>
              </h1>

              <p className="text-base sm:text-xl text-[var(--text-muted)] leading-relaxed max-w-2xl font-normal">
                Hi, I&apos;m <strong>Muhammad Awais</strong>. I engineer end-to-end computer vision (YOLOv8 at 42 FPS), autonomous multi-agent networks (LangGraph), and robust web platforms with production RBAC security.
              </p>
            </motion.div>

            {/* Action Buttons (All touch targets >= 48px per ui-ux-pro-max) */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap items-center gap-4 pt-1"
            >
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 min-h-[48px] px-6 py-3 rounded-2xl bg-sky-500 hover:bg-sky-400 active:scale-[0.98] text-slate-950 font-bold text-sm shadow-lg shadow-sky-500/25 transition-all focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:outline-none"
              >
                <span>Explore Production Systems</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/research"
                className="inline-flex items-center justify-center gap-2 min-h-[48px] px-6 py-3 rounded-2xl bg-purple-600 hover:bg-purple-500 active:scale-[0.98] text-white font-bold text-sm shadow-lg shadow-purple-600/20 transition-all focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:outline-none"
              >
                <GraduationCap className="w-4 h-4" />
                <span>Read FYP Research Paper</span>
              </Link>

              <Link
                href="/resume"
                className="inline-flex items-center justify-center gap-2 min-h-[48px] px-5 py-3 rounded-2xl bg-[var(--surface-1)] hover:bg-[var(--surface-2)] active:scale-[0.98] text-[var(--foreground)] font-semibold text-sm border border-[var(--border-strong)] transition-all focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:outline-none shadow-sm"
              >
                <Download className="w-4 h-4 text-sky-400" />
                <span>Download CV</span>
              </Link>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center justify-center gap-2 min-h-[48px] px-4 py-3 rounded-2xl bg-[var(--surface-1)] hover:bg-[var(--surface-2)] text-[var(--text-muted)] hover:text-[var(--foreground)] border border-[var(--border-subtle)] transition-all text-xs font-semibold focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:outline-none"
                title="Click to copy email address"
                aria-label="Copy email address"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400 font-bold">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-[var(--text-dim)]" />
                    <span>awais.ai.eng@gmail.com</span>
                  </>
                )}
              </button>
            </motion.div>

            {/* Quick Proof Metrics Strip (8pt grid padding) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="pt-4 border-t border-[var(--border-subtle)] flex flex-wrap items-center gap-6 text-xs text-[var(--text-dim)]"
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-sky-400" />
                <span><strong>42 FPS</strong> Real-Time Edge Inference</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span><strong>91.4% mAP</strong> Road Choke Model</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-400" />
                <span><strong>94.2%</strong> Agent Citation Accuracy</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Hero Discipline Cards Snapshot */}
          <div className="lg:col-span-5 w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 sm:p-8 rounded-3xl glass-panel-elevated border border-[var(--border-strong)] shadow-2xl space-y-6"
            >
              <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-4">
                <div className="flex items-center gap-2">
                  <Flame className="w-4 h-4 text-amber-400" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--foreground)]">
                    Engineering Profile Snapshot
                  </span>
                </div>
                <span className="text-[11px] font-mono text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  Verified In Production
                </span>
              </div>

              <div className="space-y-3">
                {pillars.map((p, idx) => (
                  <Link
                    key={p.id}
                    href={p.link}
                    className="flex items-start justify-between gap-3 p-3.5 rounded-2xl bg-[var(--surface-1)] hover:bg-[var(--surface-2)] border border-[var(--border-subtle)] hover:border-sky-500/30 transition-all group min-h-[48px]"
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-xl bg-[var(--surface-2)] group-hover:bg-sky-500/10 transition-colors shrink-0">
                        {p.icon}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[var(--foreground)] group-hover:text-sky-400 transition-colors">
                          {p.title}
                        </div>
                        <div className="text-[11px] text-[var(--text-dim)] line-clamp-1">
                          {p.proof}
                        </div>
                      </div>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-[var(--text-dim)] group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all shrink-0 mt-2" />
                  </Link>
                ))}
              </div>

              <div className="p-4 rounded-2xl bg-sky-500/10 border border-sky-500/20 text-xs text-sky-300 flex items-center justify-between">
                <span>Looking for lab supervision or engineering hire?</span>
                <Link
                  href="/contact"
                  className="font-bold underline text-white hover:text-sky-200 shrink-0 ml-2"
                >
                  Contact Now
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. THE 4 CORE DISCIPLINES SECTION (Strict 8pt grid, 44px+ links, clean visual hierarchy) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-2">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400 flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Four Technical Pillars</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[var(--foreground)] tracking-tight">
            Specialized Engineering & Research Capabilities
          </h2>
          <p className="text-sm text-[var(--text-muted)] max-w-2xl leading-relaxed">
            Every discipline is backed by deployed software, empirical metrics, and transparent source code repositories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.id}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="p-8 rounded-3xl glass-panel-elevated border border-[var(--border-subtle)] hover:border-sky-500/40 transition-all flex flex-col justify-between space-y-6 glow-card shadow-lg"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[var(--surface-1)] border border-[var(--border-subtle)] flex items-center justify-center shadow-sm">
                  {pillar.icon}
                </div>

                <div>
                  <h3 className="text-base font-bold text-[var(--foreground)]">
                    {pillar.title}
                  </h3>
                  <div className="text-xs font-mono text-sky-400 font-semibold mt-0.5">
                    {pillar.tagline}
                  </div>
                </div>

                <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                  {pillar.desc}
                </p>

                <div className="p-3 rounded-2xl bg-[var(--surface-1)] border border-[var(--border-subtle)] text-xs text-[var(--text-dim)]">
                  <span className="font-semibold text-[var(--foreground)] block">Proof in codebase:</span>
                  <span>{pillar.proof}</span>
                </div>
              </div>

              <div className="space-y-4 pt-4 border-t border-[var(--border-subtle)]">
                <div className="flex flex-wrap gap-1.5">
                  {pillar.stack.map((s) => (
                    <span
                      key={s}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--surface-1)] text-[var(--text-dim)] border border-[var(--border-subtle)]"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <Link
                  href={pillar.link}
                  className="inline-flex items-center gap-2 min-h-[44px] text-xs font-bold text-sky-400 hover:text-sky-300 transition-colors focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:outline-none"
                >
                  <span>Explore Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. INTERACTIVE AI ENGINEERING & RESEARCH STUDIO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="space-y-2">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-purple-400 flex items-center gap-2">
            <Cpu className="w-3.5 h-3.5" />
            <span>Interactive Laboratory</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[var(--foreground)] tracking-tight">
            Live Interactive AI Engineering Studio
          </h2>
          <p className="text-sm text-[var(--text-muted)] max-w-2xl leading-relaxed">
            Directly test the edge computer vision model, multi-agent reflection loops, and end-to-end full-stack architectures.
          </p>
        </div>

        <AiEngineeringStudio />
      </section>

      {/* 4. VERIFIED METRICS STRIP (8pt grid, high contrast) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-3xl glass-panel border border-[var(--border-strong)]">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {profile.metrics.map((metric, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="text-3xl sm:text-5xl font-extrabold font-mono tracking-tight text-sky-400">
                  {metric.value}
                </div>
                <div className="text-xs sm:text-sm font-bold text-[var(--foreground)]">
                  {metric.label}
                </div>
                <div className="text-xs text-[var(--text-dim)]">
                  {metric.subtext}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FEATURED CASE STUDIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-1.5">
            <div className="text-xs font-bold uppercase tracking-wider text-sky-400 font-mono">
              Production Codebases
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[var(--foreground)]">
              Featured Case Studies
            </h2>
            <p className="text-sm text-[var(--text-muted)] max-w-xl">
              Each case study provides the architectural diagram, dataset specs, loss curves, and verifiable source code.
            </p>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 min-h-[44px] text-xs font-bold text-sky-400 hover:text-sky-300 transition-colors focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:outline-none"
          >
            <span>View All Projects</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project) => (
            <motion.div
              key={project.slug}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="rounded-3xl glass-panel-elevated border border-[var(--border-subtle)] hover:border-sky-500/50 transition-all flex flex-col justify-between overflow-hidden group shadow-lg glow-card"
            >
              <div className="p-8 space-y-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1.5">
                    {project.domains.map((dom) => (
                      <span
                        key={dom}
                        className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-sky-500/10 text-sky-400 border border-sky-500/20"
                      >
                        {dom}
                      </span>
                    ))}
                  </div>
                  <span className="text-xs font-mono text-[var(--text-dim)]">
                    {project.period}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-[var(--foreground)] group-hover:text-sky-400 transition-colors">
                    <Link href={`/projects/${project.slug}`}>
                      {project.shortTitle}
                    </Link>
                  </h3>
                  <div className="text-xs font-semibold text-sky-400 font-mono">
                    {project.role}
                  </div>
                  <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                    {project.summary}
                  </p>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-3 pt-2 border-t border-[var(--border-subtle)]">
                  {project.metrics.slice(0, 2).map((m, i) => (
                    <div key={i} className="p-3 rounded-2xl bg-[var(--surface-1)]">
                      <div className="text-[10px] font-mono uppercase text-[var(--text-dim)]">
                        {m.label}
                      </div>
                      <div className="text-sm font-bold font-mono text-[var(--foreground)] mt-0.5">
                        {m.value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Stack Badges */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-2.5 py-1 rounded-lg bg-[var(--surface-1)] text-[var(--text-dim)] border border-[var(--border-subtle)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="px-8 py-4 bg-[var(--surface-1)] border-t border-[var(--border-subtle)] flex items-center justify-between">
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-1.5 min-h-[44px] text-xs font-bold text-sky-400 group-hover:underline focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:outline-none"
                >
                  <span>Explore Case Study</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center min-w-[44px] min-h-[44px] p-2 rounded-xl text-[var(--text-dim)] hover:text-[var(--foreground)] hover:bg-[var(--surface-2)] transition-colors focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:outline-none"
                    aria-label={`${project.title} GitHub repository`}
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 6. ACADEMIC RESEARCH & SCHOLARSHIP ROADMAP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl glass-panel-elevated border border-purple-500/30 p-8 sm:p-12 relative overflow-hidden space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1.5">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-purple-500/15 text-purple-400 border border-purple-500/25">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Academic Track & Master&apos;s Roadmap</span>
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--foreground)]">
                Targeting MS in AI & Cybersecurity (2026 – 2027)
              </h2>
            </div>

            <Link
              href="/roadmap"
              className="inline-flex items-center justify-center gap-2 min-h-[48px] px-6 py-3 rounded-2xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs shadow-md transition-colors shrink-0 focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:outline-none"
            >
              <span>View Full Roadmap</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <p className="text-sm text-[var(--text-muted)] leading-relaxed max-w-3xl">
            Currently preparing scholarship applications across the <strong>Chinese Government Scholarship (CSC Type B)</strong>, <strong>ANSO Fellowship</strong>, and <strong>Italian Regional Grants (DSU)</strong> at Politecnico di Milano and Sapienza University of Rome.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-2">
            <div className="p-5 rounded-2xl bg-[var(--surface-1)] border border-[var(--border-subtle)] space-y-1.5">
              <span className="text-xs font-mono font-bold text-purple-400 block">CSC Scholarship</span>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed">Tsinghua, ZJU, SJTU &bull; Edge Vision Focus</p>
            </div>
            <div className="p-5 rounded-2xl bg-[var(--surface-1)] border border-[var(--border-subtle)] space-y-1.5">
              <span className="text-xs font-mono font-bold text-sky-400 block">ANSO Fellowship</span>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed">CAS / UCAS &bull; Multi-Agent Intelligence</p>
            </div>
            <div className="p-5 rounded-2xl bg-[var(--surface-1)] border border-[var(--border-subtle)] space-y-1.5">
              <span className="text-xs font-mono font-bold text-emerald-400 block">Italian DSU Grants</span>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed">PoliMi, Sapienza &bull; Secure AI Systems</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CONVERSION CALL TO ACTION (Strict 8pt spacing and 48px touch targets) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-sky-900/30 via-indigo-900/30 to-purple-900/30 border border-sky-500/30 p-8 sm:p-16 text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-sky-500/20 text-sky-300 border border-sky-500/30">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Ready for Immediate High-Impact Collaboration</span>
          </div>

          <div className="space-y-3">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[var(--foreground)] tracking-tight max-w-3xl mx-auto leading-tight">
              Looking for a Full-Stack AI Engineer or MS Researcher?
            </h2>

            <p className="text-sm sm:text-base text-[var(--text-muted)] max-w-xl mx-auto leading-relaxed">
              Let&apos;s discuss engineering roles, research opportunities in your laboratory, or production AI builds.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center min-h-[48px] px-8 py-3.5 rounded-2xl bg-sky-400 hover:bg-sky-300 active:scale-[0.98] text-slate-950 font-bold text-sm shadow-lg shadow-sky-500/25 transition-all focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:outline-none"
            >
              Get in Touch Directly
            </Link>
            <Link
              href="/resume"
              className="inline-flex items-center justify-center min-h-[48px] px-7 py-3.5 rounded-2xl bg-[var(--surface-1)] hover:bg-[var(--surface-2)] active:scale-[0.98] text-[var(--foreground)] font-semibold text-sm border border-[var(--border-strong)] transition-colors focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:outline-none"
            >
              Inspect Dual CVs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

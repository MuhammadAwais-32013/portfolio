"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useAudience } from "@/components/AudienceContext";
import { AiEngineeringStudio } from "@/components/AiEngineeringStudio";
import {
  getProfile,
  getFeaturedProjects,
  getExperience,
  getSkills,
  getRoadmap,
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
  CheckCircle,
  FileText,
  Bot,
  Brain,
  Code2,
  GitBranch,
  Terminal,
  Database,
} from "lucide-react";
import { Github } from "@/components/Icons";

export default function HomePage() {
  const { audience } = useAudience();
  const profile = getProfile();
  const featuredProjects = getFeaturedProjects();
  const experience = getExperience();
  const research = getResearch();

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

  // The 4 core pillars requested by user
  const pillars = [
    {
      id: "fullstack-ai",
      title: "Full-Stack AI Engineer",
      icon: <Layers className="w-5 h-5 text-sky-400" />,
      tagline: "End-to-End Production Systems",
      desc: "Architecting complete web platforms from Next.js 16 front-ends to async FastAPI microservices, RBAC security, and Dockerized cloud deployments.",
      proof: "NIC Islamabad (stayOvers.pk) & Smart Health Platform",
      stack: ["Next.js 16", "React 19", "FastAPI", "PostgreSQL", "RBAC", "Docker"],
      link: "/projects/ai-smart-health-platform",
    },
    {
      id: "ai-engineer",
      title: "AI & Vision Engineer",
      icon: <Cpu className="w-5 h-5 text-emerald-400" />,
      tagline: "High-Throughput Model Deployment",
      desc: "Training custom deep neural networks and deploying low-latency edge inference with TensorRT quantization (FP16), running at 42 FPS.",
      proof: "FYP Traffic Choking Detection (91.4% mAP@0.5)",
      stack: ["PyTorch", "YOLOv8", "OpenCV", "TensorRT", "CUDA", "Roboflow"],
      link: "/projects/traffic-choking-detection",
    },
    {
      id: "gen-agentic",
      title: "GenAI & Agentic AI",
      icon: <Bot className="w-5 h-5 text-purple-400" />,
      tagline: "Autonomous Multi-Agent Networks",
      desc: "Orchestrating stateful multi-agent reflection loops with LangGraph, supervisor verification guards, and sub-800ms dense RAG over 50,000+ papers.",
      proof: "Multi-Agent Research Pipeline (94.2% verified citation rate)",
      stack: ["LangGraph", "LangChain", "Gemini API", "Qdrant Vector DB", "RAG"],
      link: "/projects/multi-agent-research-system",
    },
    {
      id: "ai-researcher",
      title: "AI Researcher",
      icon: <GraduationCap className="w-5 h-5 text-amber-400" />,
      tagline: "Empirical Rigor & Thesis Inquiry",
      desc: "Curating bespoke 4,200-frame datasets, formulating spatial choke density metrics ($C_d$), and pursuing graduate research (CSC, ANSO, Italy).",
      proof: "NUML CS Thesis & 4.2k Islamabad Roadway Corpus",
      stack: ["Dataset Curation", "Metric Formulation", "LaTeX", "Empirical Auditing"],
      link: "/research",
    },
  ];

  return (
    <div className="relative space-y-24 sm:space-y-32 pb-20">
      {/* Ambient Top Glow */}
      <div className="ambient-glow-top" />

      {/* HERO SECTION */}
      <section className="relative pt-6 sm:pt-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Main Hero Header */}
          <div className="max-w-4xl space-y-6">
            {/* Animated Pill Status */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex flex-wrap items-center gap-2.5"
            >
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/25 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400 status-pulse-dot" />
                <span>Open to High-Impact AI Roles & MS Research Outreach</span>
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-medium bg-sky-500/10 text-sky-400 border border-sky-500/20">
                <Sparkles className="w-3.5 h-3.5" />
                <span>NUML CS Senior (CGPA 3.34)</span>
              </span>
            </motion.div>

            {/* Headline emphasizing Full-Stack AI, GenAI/Agentic, and Research */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-4"
            >
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[var(--foreground)] leading-[1.08]">
                Engineering{" "}
                <span className="bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Full-Stack AI
                </span>
                ,<br />
                <span className="text-[var(--foreground)]">Agentic Systems & Research</span>
                <span className="text-sky-400">.</span>
              </h1>

              <p className="text-base sm:text-xl text-[var(--text-muted)] leading-relaxed max-w-3xl">
                I am a <strong>Full-Stack AI Engineer</strong> and <strong>AI Researcher</strong> who bridges cutting-edge deep learning (YOLOv8 at 42 FPS), autonomous multi-agent pipelines (LangGraph), and secure enterprise web software (Next.js, FastAPI, RBAC).
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap items-center gap-3 pt-2"
            >
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm shadow-lg shadow-sky-500/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Explore Production Systems</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/research"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-sm shadow-lg shadow-purple-600/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <GraduationCap className="w-4 h-4" />
                <span>Read FYP Research Paper</span>
              </Link>

              <Link
                href="/resume"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-[var(--surface-1)] hover:bg-[var(--surface-2)] text-[var(--foreground)] font-semibold text-sm border border-[var(--border-strong)] transition-colors shadow-sm"
              >
                <Download className="w-4 h-4 text-sky-400" />
                <span>Download CV</span>
              </Link>
            </motion.div>
          </div>

          {/* INTERACTIVE AI ENGINEERING & RESEARCH STUDIO */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="pt-4"
          >
            <AiEngineeringStudio />
          </motion.div>
        </div>
      </section>

      {/* THE 4 PILLARS SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-2">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400 flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Core Technical Pillars</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[var(--foreground)] tracking-tight">
            Full-Stack AI, Generative Agents & Academic Research
          </h2>
          <p className="text-xs sm:text-sm text-[var(--text-muted)] max-w-2xl">
            A unified profile built on concrete evidence across each engineering discipline.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.id}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="p-6 rounded-3xl glass-panel-elevated border border-[var(--border-subtle)] hover:border-sky-500/40 transition-all flex flex-col justify-between space-y-5 glow-card"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-2xl bg-[var(--surface-1)] border border-[var(--border-subtle)] flex items-center justify-center shadow-sm">
                  {pillar.icon}
                </div>

                <div>
                  <h3 className="text-base font-bold text-[var(--foreground)]">
                    {pillar.title}
                  </h3>
                  <div className="text-[11px] font-mono text-sky-400 font-semibold mt-0.5">
                    {pillar.tagline}
                  </div>
                </div>

                <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                  {pillar.desc}
                </p>

                <div className="p-2.5 rounded-xl bg-[var(--surface-1)] border border-[var(--border-subtle)] text-[11px] text-[var(--text-dim)]">
                  <span className="font-semibold text-[var(--foreground)] block">Proof in codebase:</span>
                  <span>{pillar.proof}</span>
                </div>
              </div>

              <div className="space-y-3 pt-3 border-t border-[var(--border-subtle)]">
                <div className="flex flex-wrap gap-1">
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
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-400 hover:text-sky-300 transition-colors pt-1"
                >
                  <span>Explore Evidence</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* VERIFIED METRICS STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-8 rounded-3xl glass-panel border border-[var(--border-strong)]">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {profile.metrics.map((metric, idx) => (
              <div key={idx} className="space-y-1">
                <div className="text-3xl sm:text-5xl font-extrabold font-mono tracking-tight text-sky-400">
                  {metric.value}
                </div>
                <div className="text-xs sm:text-sm font-bold text-[var(--foreground)]">
                  {metric.label}
                </div>
                <div className="text-[11px] text-[var(--text-dim)]">
                  {metric.subtext}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED CASE STUDIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-sky-400 font-mono">
              Production & Research Repositories
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[var(--foreground)] mt-1">
              Featured Case Studies
            </h2>
            <p className="text-xs sm:text-sm text-[var(--text-muted)] mt-1 max-w-xl">
              Each project is an architectural deep dive with real numbers, loss metrics, and live source code.
            </p>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-400 hover:text-sky-300 transition-colors"
          >
            <span>View All Projects</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.map((project) => (
            <motion.div
              key={project.slug}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="rounded-3xl glass-panel-elevated border border-[var(--border-subtle)] hover:border-sky-500/50 transition-all flex flex-col justify-between overflow-hidden group shadow-lg glow-card"
            >
              <div className="p-7 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1.5">
                    {project.domains.map((dom) => (
                      <span
                        key={dom}
                        className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-sky-500/10 text-sky-400 border border-sky-500/20"
                      >
                        {dom}
                      </span>
                    ))}
                  </div>
                  <span className="text-xs font-mono text-[var(--text-dim)]">
                    {project.period}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-xl font-bold text-[var(--foreground)] group-hover:text-sky-400 transition-colors">
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
                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[var(--border-subtle)]">
                  {project.metrics.slice(0, 2).map((m, i) => (
                    <div key={i} className="p-2.5 rounded-xl bg-[var(--surface-1)]">
                      <div className="text-[10px] font-mono uppercase text-[var(--text-dim)]">
                        {m.label}
                      </div>
                      <div className="text-xs font-bold font-mono text-[var(--foreground)]">
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
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--surface-1)] text-[var(--text-dim)] border border-[var(--border-subtle)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="px-7 py-4 bg-[var(--surface-1)] border-t border-[var(--border-subtle)] flex items-center justify-between">
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-400 group-hover:underline"
                >
                  <span>Explore Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 rounded-lg text-[var(--text-dim)] hover:text-[var(--foreground)] hover:bg-[var(--surface-2)] transition-colors"
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

      {/* ACADEMIC RESEARCH & SCHOLARSHIP ROADMAP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl glass-panel-elevated border border-purple-500/30 p-8 sm:p-12 relative overflow-hidden space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
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
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs shadow-md transition-colors shrink-0"
            >
              <span>View Full Roadmap</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed max-w-3xl">
            Currently preparing scholarship applications across the <strong>Chinese Government Scholarship (CSC Type B)</strong>, <strong>ANSO Fellowship</strong>, and <strong>Italian Regional Grants (DSU)</strong> at Politecnico di Milano and Sapienza University of Rome.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-[var(--surface-1)] border border-[var(--border-subtle)] space-y-1">
              <span className="text-xs font-mono font-bold text-purple-400 block">CSC Scholarship</span>
              <p className="text-xs text-[var(--text-muted)]">Tsinghua, ZJU, SJTU • Edge Vision Focus</p>
            </div>
            <div className="p-4 rounded-2xl bg-[var(--surface-1)] border border-[var(--border-subtle)] space-y-1">
              <span className="text-xs font-mono font-bold text-sky-400 block">ANSO Fellowship</span>
              <p className="text-xs text-[var(--text-muted)]">CAS / UCAS • Multi-Agent Intelligence</p>
            </div>
            <div className="p-4 rounded-2xl bg-[var(--surface-1)] border border-[var(--border-subtle)] space-y-1">
              <span className="text-xs font-mono font-bold text-emerald-400 block">Italian DSU Grants</span>
              <p className="text-xs text-[var(--text-muted)]">PoliMi, Sapienza • Secure AI Systems</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONVERSION CALL TO ACTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-sky-900/30 via-indigo-900/30 to-purple-900/30 border border-sky-500/30 p-8 sm:p-14 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-sky-500/20 text-sky-300 border border-sky-500/30">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Ready for Immediate High-Impact Collaboration</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[var(--foreground)] tracking-tight max-w-3xl mx-auto leading-tight">
            Looking for a Full-Stack AI Engineer or MS Researcher?
          </h2>

          <p className="text-xs sm:text-base text-[var(--text-muted)] max-w-xl mx-auto leading-relaxed">
            Let&apos;s discuss role openings, research fit in your laboratory, or innovative product builds.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              href="/contact"
              className="px-7 py-3.5 rounded-2xl bg-sky-400 hover:bg-sky-300 text-slate-950 font-bold text-sm shadow-lg shadow-sky-500/25 transition-all hover:scale-105"
            >
              Get in Touch Directly
            </Link>
            <Link
              href="/resume"
              className="px-6 py-3.5 rounded-2xl bg-[var(--surface-1)] hover:bg-[var(--surface-2)] text-[var(--foreground)] font-semibold text-sm border border-[var(--border-strong)] transition-colors"
            >
              Inspect Dual CVs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useAudience } from "@/components/AudienceContext";
import {
  getProfile,
  getFeaturedProjects,
  getExperience,
  getResearch,
  getSkills,
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
  Brain,
  Zap,
  BookOpen,
  Code2,
  Globe,
  MessageCircle,
  TrendingUp,
} from "lucide-react";
import { Github, Linkedin } from "@/components/Icons";

/* ─── Fade-up animation variants ────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

export default function HomePage() {
  const { audience } = useAudience();
  const profile = getProfile();
  const featuredProjects = getFeaturedProjects();
  const skills = getSkills();
  const [copiedEmail, setCopiedEmail] = useState(false);

  const email = "muhammad.awais.swe@gmail.com";
  const whatsappUrl = "https://wa.me/923464617329";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  /* Research & Engineering Focus Areas (Restrained, Professional Palette) */
  const researchInterests = [
    {
      icon: <Brain className="w-5 h-5" />,
      title: "Core AI / ML",
      desc: "Supervised and unsupervised learning, time-series forecasting (XGBoost), gradient boosting, feature engineering, and statistical evaluation.",
      color: "text-indigo-600 dark:text-indigo-400",
      bg: "bg-indigo-50 dark:bg-indigo-950/40",
      border: "border-indigo-200 dark:border-indigo-800/40",
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Agentic & Generative AI",
      desc: "Autonomous multi-agent workflows (CrewAI, LangGraph), reflection loops, tool use, multimodal synthesis, and Gemini audio engines.",
      color: "text-amber-700 dark:text-amber-400",
      bg: "bg-amber-50 dark:bg-amber-950/40",
      border: "border-amber-200 dark:border-amber-800/40",
    },
    {
      icon: <Bot className="w-5 h-5" />,
      title: "Large Language Models",
      desc: "Retrieval-Augmented Generation (RAG), dense vector indexing, and deterministic guardrails for clinical and technical applications.",
      color: "text-[var(--accent)]",
      bg: "bg-[var(--accent-surface)]",
      border: "border-[var(--accent-border)]",
    },
    {
      icon: <Cpu className="w-5 h-5" />,
      title: "AI & Computer Vision",
      desc: "Real-time edge neural inference with custom YOLOv8 pipelines, TensorRT FP16 quantization, and spatial congestion analytics.",
      color: "text-emerald-700 dark:text-emerald-400",
      bg: "bg-emerald-50 dark:bg-emerald-950/40",
      border: "border-emerald-200 dark:border-emerald-800/40",
    },
  ];

  /* Core capabilities */
  const capabilities = [
    {
      id: "agentic-genai",
      title: "Agentic AI & GenAI Systems",
      icon: <Bot className="w-5 h-5 text-[var(--accent)]" />,
      desc: "Orchestrating autonomous multi-agent pipelines with CrewAI, research synthesis, two-host dialogue scripting, and Gemini TTS audio generation.",
      proof: "Podcaster Crew (Autonomous Research & Audio Engine)",
      stack: ["CrewAI", "Python 3.12", "Gemini TTS", "OpenAI", "uv"],
      link: "/projects/podcaster-crew",
    },
    {
      id: "healthcare-rag",
      title: "Healthcare RAG & OCR Engineering",
      icon: <Layers className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />,
      desc: "Building clinical health assistants that ingest medical lab test reports via OCR, extract biomarkers, and generate personalized diet plans with RAG.",
      proof: "DiaBp Diet Consultant (Flutter & Python RAG)",
      stack: ["Flutter / Dart", "FastAPI", "RAG", "OCR Engine", "Vector DB"],
      link: "/projects/diabp-diet-consultant",
    },
    {
      id: "ml-forecasting",
      title: "Time-Series ML & Predictive Analytics",
      icon: <TrendingUp className="w-5 h-5 text-amber-700 dark:text-amber-400" />,
      desc: "Training gradient boosting models with comprehensive temporal feature engineering, lag statistics, and interactive deployment.",
      proof: "Sales Forecasting with XGBoost Regressor",
      stack: ["Python", "XGBoost", "Scikit-Learn", "Pandas", "Streamlit"],
      link: "/projects/sales-forecast-xgboost",
    },
    {
      id: "ai-vision",
      title: "Edge Computer Vision & Deep Learning",
      icon: <Cpu className="w-5 h-5 text-emerald-700 dark:text-emerald-400" />,
      desc: "Training deep neural networks on custom annotated roadway datasets and deploying low-latency edge inference with TensorRT quantization at 42 FPS.",
      proof: "FYP Urban Traffic Choking Detection (91.4% mAP@0.5)",
      stack: ["PyTorch", "YOLOv8", "OpenCV", "TensorRT", "CUDA"],
      link: "/projects/traffic-choking-detection",
    },
  ];

  return (
    <div className="relative pb-24">
      {/* Ambient Top Glow */}
      <div className="ambient-glow-top" />

      {/* ═══════════════════════════════════════════════════════════════
          1. HERO SECTION
          Clean asymmetric layout with profile image & verified info
       ═══════════════════════════════════════════════════════════════ */}
      <section className="relative pt-10 sm:pt-16 lg:pt-20 pb-12 sm:pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left: Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="lg:col-span-7 space-y-7"
          >
            {/* Status Pills */}
            <motion.div variants={fadeUp} custom={0} className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 min-h-[34px] px-3.5 py-1 rounded-full text-xs font-bold bg-white dark:bg-slate-800 text-emerald-900 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-700 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 status-pulse-dot" />
                <span className="text-emerald-800 dark:text-emerald-400 font-bold">Open to AI Roles & Research</span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.div variants={fadeUp} custom={0.1} className="space-y-4">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--foreground)] leading-[1.12]">
                Engineering Intelligent{" "}
                <span className="text-[var(--accent)]">
                  AI & Agentic Systems
                </span>
              </h1>

              <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed max-w-xl">
                Hi, I&apos;m <strong className="text-[var(--foreground)]">Muhammad Awais</strong> — a Full-Stack AI Engineer specializing in Generative AI, LLMs, and multi-agent systems. From training custom computer vision models to shipping production web & mobile architectures.
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div variants={fadeUp} custom={0.2} className="flex flex-wrap items-center gap-3">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 min-h-[46px] px-6 py-2.5 rounded-xl bg-[var(--accent)] hover:brightness-110 active:scale-[0.98] text-slate-950 font-bold text-xs sm:text-sm shadow-sm transition-all focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:outline-none"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 min-h-[46px] px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:scale-[0.98] text-white font-bold text-xs sm:text-sm shadow-sm transition-all"
                title="Chat with Muhammad Awais on WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Chat</span>
              </a>

              <Link
                href="/resume"
                className="inline-flex items-center justify-center gap-2 min-h-[46px] px-4.5 py-2.5 rounded-xl bg-[var(--surface-1)] hover:bg-[var(--surface-2)] active:scale-[0.98] text-[var(--foreground)] font-semibold text-xs sm:text-sm border border-[var(--border-subtle)] transition-all shadow-xs"
              >
                <Download className="w-4 h-4 text-[var(--accent)]" />
                <span>CV</span>
              </Link>
            </motion.div>

            {/* Social & Contact Strip */}
            <motion.div variants={fadeUp} custom={0.3} className="flex flex-wrap items-center gap-2.5 pt-1">
              <a
                href="https://github.com/MuhammadAwais-32013"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 min-h-[38px] px-3.5 py-1.5 rounded-xl bg-[var(--surface-1)] hover:bg-[var(--surface-2)] border border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--foreground)] transition-all text-xs font-medium shadow-xs"
                aria-label="GitHub Profile"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/muhammad-awais32013"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 min-h-[38px] px-3.5 py-1.5 rounded-xl bg-[var(--surface-1)] hover:bg-[var(--surface-2)] border border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--foreground)] transition-all text-xs font-medium shadow-xs"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 min-h-[38px] px-3.5 py-1.5 rounded-xl bg-[var(--surface-1)] hover:bg-[var(--surface-2)] border border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--foreground)] transition-all text-xs font-mono font-medium shadow-xs"
                title="Copy email address"
                aria-label="Copy email address"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[var(--text-dim)]" />
                    <span>{email}</span>
                  </>
                )}
              </button>
            </motion.div>
          </motion.div>

          {/* Right: Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Profile Image Container */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-[var(--surface-1)] ring-4 ring-[var(--border-subtle)] shadow-xl">
                <Image
                  src="/P_Picture.jpeg"
                  alt="Muhammad Awais — Full-Stack AI Engineer"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 640px) 256px, (max-width: 1024px) 288px, 320px"
                />
              </div>
              {/* Online status tag */}
              <div className="absolute bottom-2 right-4 sm:right-6 flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--surface-1)] border border-[var(--border-subtle)] shadow-md text-[11px] font-semibold text-[var(--foreground)]">
                <span className="w-2 h-2 rounded-full bg-emerald-500 status-pulse-dot" />
                <span>Available for hire</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Quick Proof Metrics Strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.35 }}
          className="mt-12 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4"
        >
          {profile.metrics.map((metric, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-[var(--surface-1)] border border-[var(--border-subtle)] shadow-xs hover:border-[var(--border-focus)] transition-all"
            >
              <div className="text-2xl sm:text-3xl font-extrabold font-mono tracking-tight text-[var(--accent)]">
                {metric.value}
              </div>
              <div className="text-xs font-bold text-[var(--foreground)] mt-1">
                {metric.label}
              </div>
              <div className="text-[11px] text-[var(--text-dim)] mt-0.5">
                {metric.subtext}
              </div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          2. RESEARCH INTERESTS
          Clean cards for Gen AI, LLM, Agentic AI, AI & Vision
       ═══════════════════════════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45 }}
          className="space-y-3 mb-10"
        >
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--accent)] flex items-center gap-2">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Research & Engineering Focus</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[var(--foreground)] tracking-tight">
            Core Technical Interests
          </h2>
          <p className="text-sm text-[var(--text-muted)] max-w-2xl leading-relaxed">
            Targeting the intersection of Core AI/ML, Agentic & Generative AI, Large Language Models, and real-time edge vision.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {researchInterests.map((interest, idx) => (
            <motion.div
              key={interest.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.35, delay: idx * 0.07 }}
              className="p-6 rounded-2xl bg-[var(--surface-1)] border border-[var(--border-subtle)] shadow-xs hover:border-[var(--border-focus)] transition-all group flex flex-col justify-between"
            >
              <div>
                <div className={`w-11 h-11 rounded-xl ${interest.bg} ${interest.border} border flex items-center justify-center ${interest.color} mb-4`}>
                  {interest.icon}
                </div>
                <h3 className="text-base font-bold text-[var(--foreground)] mb-2 group-hover:text-[var(--accent)] transition-colors">
                  {interest.title}
                </h3>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                  {interest.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          3. CORE CAPABILITIES
       ═══════════════════════════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45 }}
          className="space-y-3 mb-10"
        >
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--accent)] flex items-center gap-2">
            <Code2 className="w-3.5 h-3.5" />
            <span>Proven Capabilities</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[var(--foreground)] tracking-tight">
            Systems & Applied AI Breadth
          </h2>
          <p className="text-sm text-[var(--text-muted)] max-w-2xl leading-relaxed">
            Every capability is demonstrated by verified codebases, benchmark metrics, and production repositories.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {capabilities.map((cap, idx) => (
            <motion.div
              key={cap.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.35, delay: idx * 0.07 }}
            >
              <Link
                href={cap.link}
                className="block p-6 sm:p-7 rounded-2xl bg-[var(--surface-1)] border border-[var(--border-subtle)] shadow-xs hover:border-[var(--border-focus)] transition-all group h-full"
              >
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[var(--surface-2)] border border-[var(--border-subtle)] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    {cap.icon}
                  </div>
                  <div className="flex-1 min-w-0 space-y-3">
                    <div>
                      <h3 className="text-base font-bold text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
                        {cap.title}
                      </h3>
                      <p className="text-xs text-[var(--text-muted)] leading-relaxed mt-1.5">
                        {cap.desc}
                      </p>
                    </div>

                    <div className="p-2.5 rounded-xl bg-[var(--surface-2)] border border-[var(--border-subtle)] text-xs text-[var(--text-muted)]">
                      <span className="font-semibold text-[var(--foreground)]">Evidence: </span>
                      {cap.proof}
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {cap.stack.map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--surface-2)] text-[var(--text-dim)] border border-[var(--border-subtle)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--accent)] group-hover:gap-2.5 transition-all pt-1">
                      <span>Explore Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          4. FEATURED CASE STUDIES
          Featuring Podcaster Crew, DiaBp Diet Consultant, Sales XGBoost, FYP
       ═══════════════════════════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10"
        >
          <div className="space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-[var(--accent)] font-mono">
              GitHub Repositories
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[var(--foreground)]">
              Featured Case Studies
            </h2>
            <p className="text-sm text-[var(--text-muted)] max-w-xl">
              Real open-source codebases with end-to-end multi-agent orchestration, predictive ML models, health RAG, and edge computer vision.
            </p>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 min-h-[44px] text-xs font-bold text-[var(--accent)] hover:underline shrink-0"
          >
            <span>View All Projects</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {featuredProjects.map((project, idx) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              className="rounded-2xl bg-[var(--surface-1)] border border-[var(--border-subtle)] shadow-xs hover:border-[var(--border-focus)] transition-all flex flex-col justify-between overflow-hidden group"
            >
              <div className="p-6 sm:p-7 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1.5">
                    {project.domains.map((dom) => (
                      <span
                        key={dom}
                        className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[var(--accent-surface)] text-[var(--accent)] border border-[var(--accent-border)]"
                      >
                        {dom}
                      </span>
                    ))}
                  </div>
                  <span className="text-[11px] font-mono text-[var(--text-dim)]">
                    {project.period}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg sm:text-xl font-bold text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
                    <Link href={`/projects/${project.slug}`}>
                      {project.shortTitle}
                    </Link>
                  </h3>
                  <div className="text-xs font-semibold text-[var(--accent)] font-mono">
                    {project.role}
                  </div>
                  <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                    {project.summary}
                  </p>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-2.5 pt-1">
                  {project.metrics.slice(0, 2).map((m, i) => (
                    <div key={i} className="p-2.5 rounded-xl bg-[var(--surface-2)] border border-[var(--border-subtle)]">
                      <div className="text-[10px] font-mono uppercase text-[var(--text-dim)]">
                        {m.label}
                      </div>
                      <div className="text-xs sm:text-sm font-bold font-mono text-[var(--foreground)] mt-0.5">
                        {m.value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Stack */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.stack.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--surface-2)] text-[var(--text-dim)] border border-[var(--border-subtle)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="px-6 sm:px-7 py-3.5 bg-[var(--surface-2)] border-t border-[var(--border-subtle)] flex items-center justify-between">
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--accent)] group-hover:underline"
                >
                  <span>Read Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center p-2 rounded-lg text-[var(--text-dim)] hover:text-[var(--foreground)] hover:bg-[var(--surface-1)] transition-colors border border-[var(--border-subtle)]"
                    aria-label={`${project.title} GitHub repository`}
                    title="GitHub Repository"
                  >
                    <Github className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          5. EVIDENCE-BACKED SKILLS MATRIX
       ═══════════════════════════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45 }}
          className="space-y-8"
        >
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-[var(--accent-surface)] text-[var(--accent)] border border-[var(--accent-border)]">
                <Layers className="w-3.5 h-3.5" />
                <span>Evidence Over Claims</span>
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[var(--foreground)] tracking-tight">
                Skills & Technical Competency Matrix
              </h2>
              <p className="text-xs sm:text-sm text-[var(--text-muted)] max-w-2xl leading-relaxed">
                Every competency is grounded in deployed models, production web architectures, or published open-source repositories.
              </p>
            </div>

            <Link
              href="/skills"
              className="inline-flex items-center justify-center gap-2 min-h-[44px] px-5 py-2.5 rounded-xl bg-[var(--surface-1)] hover:bg-[var(--surface-2)] text-[var(--foreground)] font-semibold text-xs border border-[var(--border-subtle)] transition-colors shrink-0 shadow-xs"
            >
              <span>Explore Full Skills Matrix</span>
              <ArrowRight className="w-3.5 h-3.5 text-[var(--accent)]" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {skills.slice(0, 4).map((cat) => (
              <div
                key={cat.category}
                className="rounded-2xl bg-[var(--surface-1)] border border-[var(--border-subtle)] p-6 shadow-xs space-y-4 hover:border-[var(--accent-border)] transition-all"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-[var(--foreground)]">
                    {cat.category}
                  </h3>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--surface-2)] text-[var(--text-dim)] border border-[var(--border-subtle)]">
                    {cat.skills.length} competencies
                  </span>
                </div>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                  {cat.description}
                </p>

                <div className="space-y-2 pt-2">
                  {cat.skills.slice(0, 4).map((s) => (
                    <div
                      key={s.name}
                      className="p-2.5 rounded-xl bg-[var(--surface-2)] border border-[var(--border-subtle)] flex items-start justify-between gap-3 text-xs"
                    >
                      <div className="space-y-0.5 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-[var(--foreground)]">
                            {s.name}
                          </span>
                          <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-[var(--accent-surface)] text-[var(--accent)] border border-[var(--accent-border)] font-bold">
                            {s.level}
                          </span>
                        </div>
                        <p className="text-[11px] text-[var(--text-dim)] truncate">
                          {s.provenBy}
                        </p>
                      </div>

                      {s.projectSlug && (
                        <Link
                          href={`/projects/${s.projectSlug}`}
                          className="shrink-0 text-[10px] font-mono text-[var(--accent)] hover:underline flex items-center gap-1 mt-0.5"
                          title="View Proof in Project"
                        >
                          <span>Evidence</span>
                          <ExternalLink className="w-2.5 h-2.5" />
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          6. CONVERSION CTA (Email + WhatsApp)
       ═══════════════════════════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45 }}
          className="rounded-3xl bg-[var(--surface-1)] border border-[var(--border-subtle)] p-8 sm:p-14 text-center shadow-xs space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/40">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>Open for Collaboration & Roles</span>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[var(--foreground)] tracking-tight max-w-2xl mx-auto leading-tight">
              Ready to Discuss an AI Project or Engineering Role?
            </h2>
            <p className="text-xs sm:text-sm text-[var(--text-muted)] max-w-lg mx-auto leading-relaxed">
              Reach out directly on WhatsApp or drop an email. Fast, direct, and zero hassle.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 min-h-[46px] px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:scale-[0.98] text-white font-bold text-xs sm:text-sm shadow-xs transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Connect on WhatsApp</span>
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 min-h-[46px] px-6 py-2.5 rounded-xl bg-[var(--accent)] hover:brightness-110 active:scale-[0.98] text-slate-950 font-bold text-xs sm:text-sm shadow-xs transition-all"
            >
              <Mail className="w-4 h-4" />
              <span>Direct Email Form</span>
            </Link>

            <Link
              href="/resume"
              className="inline-flex items-center justify-center gap-2 min-h-[46px] px-5 py-2.5 rounded-xl bg-[var(--surface-2)] hover:bg-[var(--surface-3)] active:scale-[0.98] text-[var(--foreground)] font-semibold text-xs sm:text-sm border border-[var(--border-subtle)] transition-colors"
            >
              <span>Download CV</span>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

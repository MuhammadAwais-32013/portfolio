"use client";

import React from "react";
import Link from "next/link";
import { useAudience } from "@/components/AudienceContext";
import { TrafficSimulationDemo } from "@/components/TrafficSimulationDemo";
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
} from "lucide-react";
import { Github } from "@/components/Icons";

export default function HomePage() {
  const { audience, setAudience } = useAudience();
  const profile = getProfile();
  const featuredProjects = getFeaturedProjects();
  const experience = getExperience();
  const skills = getSkills();
  const roadmap = getRoadmap();
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

  return (
    <div className="space-y-20 sm:space-y-28 pb-16">
      {/* HERO SECTION */}
      <section className="relative pt-8 sm:pt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            {/* Status & Lens indicator */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400 status-pulse-dot" />
                <span>{profile.statusBadge.text}</span>
              </span>

              {audience !== "all" && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-mono font-medium bg-sky-500/10 text-sky-400 border border-sky-500/20">
                  <Sparkles className="w-3 h-3" />
                  <span>Viewing via: {currentAudienceConfig.label}</span>
                </span>
              )}
            </div>

            {/* Main Title & Positioning */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--foreground)] leading-[1.12]">
                Building Real-World{" "}
                <span className="bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Computer Vision & AI
                </span>{" "}
                That Ships.
              </h1>
              <p className="text-base sm:text-lg text-[var(--text-muted)] leading-relaxed max-w-2xl">
                {profile.positioningStatement}
              </p>
            </div>

            {/* Dynamic Audience Lens Sub-headline */}
            <div className="p-3.5 rounded-xl bg-[var(--surface-1)] border border-[var(--border-subtle)] text-xs text-[var(--text-muted)] flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-sky-400 shrink-0" />
                <span>
                  <strong>Perspective note:</strong> {currentAudienceConfig.tagline}
                </span>
              </div>
              <div className="shrink-0 flex items-center gap-1 text-[11px] font-medium text-sky-400">
                <Link href="/for/recruiters" className="hover:underline">Recruiter</Link>
                <span>•</span>
                <Link href="/for/professors" className="hover:underline">Professor</Link>
                <span>•</span>
                <Link href="/for/admissions" className="hover:underline">Admissions</Link>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href={
                  audience === "professors"
                    ? "/research"
                    : audience === "admissions"
                    ? "/roadmap"
                    : "/projects"
                }
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm shadow-lg shadow-sky-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>{currentAudienceConfig.primaryCta}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/resume"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[var(--surface-2)] hover:bg-[var(--surface-3)] text-[var(--foreground)] font-semibold text-sm border border-[var(--border-subtle)] transition-colors"
              >
                <Download className="w-4 h-4 text-sky-400" />
                <span>{currentAudienceConfig.secondaryCta}</span>
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl text-xs font-semibold text-[var(--text-muted)] hover:text-[var(--foreground)] hover:bg-[var(--surface-1)] transition-colors"
              >
                <span>Contact Directly</span>
              </Link>
            </div>

            {/* Fast Stats */}
            <div className="pt-2 flex flex-wrap items-center gap-6 text-xs text-[var(--text-dim)] border-t border-[var(--border-subtle)]">
              <div>
                <strong className="text-[var(--foreground)]">BS CS, NUML</strong> (CGPA 3.34)
              </div>
              <div>
                <strong className="text-[var(--foreground)]">NIC Islamabad</strong> Alum
              </div>
              <div>
                <strong className="text-[var(--foreground)]">4,200+</strong> Curated Dataset
              </div>
            </div>
          </div>

          {/* Right Column: Interactive YOLO Traffic Simulation Demo */}
          <div className="lg:col-span-5 w-full">
            <div className="relative">
              {/* Decorative background glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-sky-500/20 to-purple-600/20 rounded-3xl blur-2xl -z-10 opacity-70" />
              <div className="space-y-2">
                <div className="flex items-center justify-between px-1 text-xs text-[var(--text-dim)]">
                  <span className="font-semibold text-sky-400 flex items-center gap-1">
                    <Cpu className="w-3.5 h-3.5" /> Interactive Vision Sandbox
                  </span>
                  <span>Drag slider to test choke inference</span>
                </div>
                <TrafficSimulationDemo />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VERIFIED METRICS STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {profile.metrics.map((metric, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl glass-panel border border-[var(--border-subtle)] hover:border-sky-500/40 transition-colors"
            >
              <div className="text-3xl sm:text-4xl font-extrabold font-mono tracking-tight text-sky-400">
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
        </div>
      </section>

      {/* FEATURED PROJECTS SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-sky-400 font-mono">
              Production & Research Work
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--foreground)] mt-1">
              Featured Case Studies
            </h2>
            <p className="text-xs sm:text-sm text-[var(--text-muted)] mt-1 max-w-xl">
              Every project is an in-depth case study backed by architectural diagrams, empirical metrics, and verifiable code repositories.
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
            <div
              key={project.slug}
              className="group rounded-2xl glass-panel-elevated border border-[var(--border-subtle)] hover:border-sky-500/50 transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              <div className="p-6 space-y-4">
                {/* Domain tags */}
                <div className="flex flex-wrap items-center gap-2">
                  {project.domains.map((dom) => (
                    <span
                      key={dom}
                      className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium bg-sky-500/10 text-sky-400 border border-sky-500/20"
                    >
                      {dom}
                    </span>
                  ))}
                  <span className="text-[11px] text-[var(--text-dim)] ml-auto font-mono">
                    {project.period}
                  </span>
                </div>

                {/* Title & Summary */}
                <div className="space-y-2">
                  <h3 className="text-lg sm:text-xl font-bold text-[var(--foreground)] group-hover:text-sky-400 transition-colors">
                    <Link href={`/projects/${project.slug}`}>
                      {project.shortTitle}
                    </Link>
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                    {project.summary}
                  </p>
                </div>

                {/* Metrics Row */}
                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[var(--border-subtle)]">
                  {project.metrics.slice(0, 2).map((m, i) => (
                    <div key={i} className="p-2 rounded-lg bg-[var(--surface-1)]">
                      <div className="text-[10px] text-[var(--text-dim)] uppercase font-mono">
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
                  {project.stack.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--surface-1)] text-[var(--text-dim)] border border-[var(--border-subtle)]"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.stack.length > 5 && (
                    <span className="text-[10px] font-mono px-1.5 py-0.5 text-[var(--text-dim)]">
                      +{project.stack.length - 5}
                    </span>
                  )}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="px-6 py-3.5 bg-[var(--surface-1)] border-t border-[var(--border-subtle)] flex items-center justify-between">
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
            </div>
          ))}
        </div>
      </section>

      {/* RESEARCH & FYP SPOTLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl glass-panel-elevated border border-[var(--border-strong)] p-6 sm:p-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-purple-500/15 text-purple-400 border border-purple-500/25">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Academic Research & FYP Paper</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--foreground)] tracking-tight">
                {research.fypDetails.title}
              </h2>

              <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                {research.fypDetails.abstract}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-[var(--surface-1)] border border-[var(--border-subtle)]">
                  <div className="text-[10px] uppercase font-mono text-[var(--text-dim)]">Dataset</div>
                  <div className="text-xs font-bold text-purple-400 font-mono mt-0.5">4,200 Frames</div>
                </div>
                <div className="p-3 rounded-xl bg-[var(--surface-1)] border border-[var(--border-subtle)]">
                  <div className="text-[10px] uppercase font-mono text-[var(--text-dim)]">Throughput</div>
                  <div className="text-xs font-bold text-sky-400 font-mono mt-0.5">42 FPS (RTX)</div>
                </div>
                <div className="p-3 rounded-xl bg-[var(--surface-1)] border border-[var(--border-subtle)]">
                  <div className="text-[10px] uppercase font-mono text-[var(--text-dim)]">Precision</div>
                  <div className="text-xs font-bold text-emerald-400 font-mono mt-0.5">91.4% mAP</div>
                </div>
                <div className="p-3 rounded-xl bg-[var(--surface-1)] border border-[var(--border-subtle)]">
                  <div className="text-[10px] uppercase font-mono text-[var(--text-dim)]">Detection Delay</div>
                  <div className="text-xs font-bold text-amber-400 font-mono mt-0.5">&lt; 2.5 Seconds</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3 justify-center">
              <Link
                href="/research"
                className="w-full text-center px-6 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs shadow-lg transition-colors flex items-center justify-center gap-2"
              >
                <span>Read Complete Research Statement</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/roadmap"
                className="w-full text-center px-5 py-3 rounded-xl bg-[var(--surface-1)] hover:bg-[var(--surface-2)] text-[var(--foreground)] font-semibold text-xs border border-[var(--border-subtle)] transition-colors flex items-center justify-center gap-2"
              >
                <span>View MS AI / CSC Scholarship Roadmap</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE & TRACK RECORD SUMMARY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-400 font-mono">
              Professional Trajectory
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--foreground)] mt-1">
              Work & Engineering Experience
            </h2>
          </div>
          <Link
            href="/experience"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            <span>Full Timeline & Education</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experience.workExperience.map((exp) => (
            <div
              key={exp.id}
              className="p-6 rounded-2xl glass-panel border border-[var(--border-subtle)] space-y-4"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-base font-bold text-[var(--foreground)]">{exp.role}</h3>
                  <div className="text-xs text-sky-400 font-medium mt-0.5">{exp.company}</div>
                </div>
                <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-medium bg-[var(--surface-2)] text-[var(--text-dim)] border border-[var(--border-subtle)]">
                  {exp.period}
                </span>
              </div>

              <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                {exp.description}
              </p>

              <ul className="space-y-1.5 text-xs text-[var(--text-muted)]">
                {exp.achievements.slice(0, 2).map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[var(--border-subtle)]">
                {exp.technologies.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--surface-2)] text-[var(--text-dim)]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CALL TO ACTION CONVERSION STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-sky-900/40 via-indigo-900/30 to-purple-900/40 border border-sky-500/30 p-8 sm:p-12 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-sky-500/20 text-sky-300 border border-sky-500/30">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Ready to Discuss Roles or Academic Research</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight max-w-2xl mx-auto">
            Let&apos;s Build Something Meaningful Together.
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            Whether you are evaluating candidates for an engineering team, looking for an MS research assistant, or reviewing graduate applications.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-xl bg-sky-400 hover:bg-sky-300 text-slate-950 font-bold text-sm shadow-lg shadow-sky-500/25 transition-colors"
            >
              Send Direct Message
            </Link>
            <Link
              href="/resume"
              className="px-6 py-3 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-white font-semibold text-sm border border-slate-700 transition-colors"
            >
              View Both CV Versions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

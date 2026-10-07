import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { getResearch } from "@/lib/content";
import { TrafficSimulationDemo } from "@/components/TrafficSimulationDemo";
import {
  GraduationCap,
  BookOpen,
  Cpu,
  Layers,
  ArrowRight,
  Download,
  HelpCircle,
  CheckCircle2,
  FileText,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Academic Research & FYP Paper | Muhammad Awais",
  description:
    "Research profile of Muhammad Awais. Edge computer vision, urban traffic choke detection, 4,200-frame Islamabad dataset, and research statement.",
};

export default function ResearchPage() {
  const research = getResearch();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-purple-500/10 text-purple-400 border border-purple-500/20">
          <GraduationCap className="w-3.5 h-3.5" />
          <span>Academic Profile & Inquiry</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--foreground)]">
          Research Statement & Academic Profile
        </h1>
        <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
          Bridging high-capacity perceptual vision and agentic systems with the constraints of edge execution, physical robustness, and verifiable deployment.
        </p>
      </div>

      {/* RESEARCH STATEMENT HIGHLIGHT */}
      <section className="p-8 sm:p-10 rounded-3xl glass-panel-elevated border border-purple-500/30 relative overflow-hidden space-y-4">
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="text-xs font-mono font-bold text-purple-400 uppercase tracking-wider">
          Overarching Research Philosophy
        </div>
        <blockquote className="text-base sm:text-xl font-medium text-[var(--foreground)] leading-relaxed italic border-l-4 border-purple-500 pl-4 py-1">
          &ldquo;{research.statementSummary}&rdquo;
        </blockquote>
        <div className="pt-2 flex flex-wrap items-center gap-4 text-xs">
          <Link
            href="/resume?type=academic"
            className="inline-flex items-center gap-1.5 font-bold text-purple-400 hover:text-purple-300"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Academic CV (LaTeX PDF)</span>
          </Link>
          <span className="text-[var(--text-dim)]">•</span>
          <Link
            href="/roadmap"
            className="inline-flex items-center gap-1 text-[var(--text-muted)] hover:text-[var(--foreground)]"
          >
            <span>View Scholarship Roadmap</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </section>

      {/* CORE RESEARCH INTERESTS */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-[var(--foreground)] flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-sky-400" />
          <span>Target Research Fields</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {research.researchInterests.map((interest, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl glass-panel border border-[var(--border-subtle)] space-y-3"
            >
              <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center font-mono font-bold text-xs text-sky-400">
                0{idx + 1}
              </div>
              <h3 className="text-base font-bold text-[var(--foreground)]">
                {interest.topic}
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                {interest.summary}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FYP IN-DEPTH TECHNICAL WRITE-UP */}
      <section id="fyp-section" className="space-y-8 scroll-mt-20">
        <div className="space-y-3 border-b border-[var(--border-subtle)] pb-6">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-sky-400 uppercase">
            <Cpu className="w-4 h-4" /> Final Year Project (FYP) Manuscript
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[var(--foreground)]">
            {research.fypDetails.title}
          </h2>
          <div className="text-xs font-mono text-emerald-400 font-semibold">
            Status: {research.fypDetails.status}
          </div>
        </div>

        {/* Abstract */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[var(--surface-1)] border border-[var(--border-subtle)] space-y-3">
          <h3 className="text-xs font-mono uppercase tracking-wider text-[var(--text-dim)] font-bold">
            Abstract
          </h3>
          <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
            {research.fypDetails.abstract}
          </p>
        </div>

        {/* Dataset breakdown */}
        <div className="p-6 sm:p-8 rounded-2xl glass-panel-elevated border border-[var(--border-strong)] space-y-4">
          <h3 className="text-lg font-bold text-[var(--foreground)]">
            Empirical Corpus: {research.fypDetails.dataset.name}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-[var(--surface-1)] space-y-2">
              <span className="font-semibold text-sky-400 block">Dataset Specifications:</span>
              <ul className="space-y-1 text-[var(--text-muted)]">
                <li>• Size: {research.fypDetails.dataset.size}</li>
                <li>• Format: Normalized YOLO bounding boxes + polygonal lane ROI</li>
                <li>• Annotations: Double-pass verified manually in CVAT</li>
              </ul>
            </div>
            <div className="p-4 rounded-xl bg-[var(--surface-1)] space-y-2">
              <span className="font-semibold text-purple-400 block">Annotated Classes:</span>
              <div className="flex flex-wrap gap-1.5">
                {research.fypDetails.dataset.classes.map((cls) => (
                  <span
                    key={cls}
                    className="px-2 py-0.5 rounded bg-[var(--surface-2)] text-[11px] font-mono text-[var(--text-dim)]"
                  >
                    {cls}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Methodology Steps */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-[var(--foreground)]">
            Methodology & Technical Formulation
          </h3>
          <div className="space-y-3">
            {research.fypDetails.methodology.map((m, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl glass-panel border border-[var(--border-subtle)] flex items-start gap-4"
              >
                <div className="w-7 h-7 rounded-full bg-sky-500/10 text-sky-400 font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-[var(--foreground)]">
                    {m.step}
                  </h4>
                  <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                    {m.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Demo Simulation */}
        <div className="space-y-3 pt-4">
          <div className="flex items-center justify-between text-xs text-[var(--text-dim)]">
            <span className="font-bold text-sky-400">Interactive Pipeline Telemetry Test:</span>
            <span>Test simulated choke detection algorithms</span>
          </div>
          <TrafficSimulationDemo />
        </div>

        {/* Open Research Questions */}
        <div className="p-6 sm:p-8 rounded-2xl glass-panel border border-[var(--border-subtle)] space-y-4">
          <h3 className="text-lg font-bold text-[var(--foreground)] flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-amber-400" />
            <span>Open Questions for Graduate Inquiry</span>
          </h3>
          <div className="space-y-3">
            {research.fypDetails.openQuestions.map((q, idx) => (
              <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[var(--text-muted)]">
                <span className="font-mono text-amber-400 font-bold">Q{idx + 1}:</span>
                <p className="leading-relaxed">{q}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

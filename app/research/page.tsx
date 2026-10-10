import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { getResearch } from "@/lib/content";
import {
  GraduationCap,
  BookOpen,
  Cpu,
  ArrowRight,
  Download,
  HelpCircle,
  BarChart3,
  AlertTriangle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Research Profile & FYP | Muhammad Awais",
  description:
    "Research profile of Muhammad Awais: real-time traffic perception, reliability of LLM agents and RAG systems, a deployed final-year project, and links to code.",
};

// Optional fields that live in research.json. Declared here so the page still
// type-checks even if lib/content.ts has not been updated with them yet.
type FypExtras = {
  results?: {
    split?: string;
    overall?: Record<string, string>;
    perClassMAP50?: Record<string, string>;
    efficiency?: string;
    training?: string;
  };
  limitations?: string[];
};

const METRIC_LABELS: Record<string, string> = {
  mAP50: "mAP@50",
  "mAP50-95": "mAP@50-95",
  precision: "Precision",
  recall: "Recall",
};

export default function ResearchPage() {
  const research = getResearch();
  const fyp = research.fypDetails as typeof research.fypDetails & FypExtras;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-[var(--accent-surface)] text-[var(--accent)] border border-[var(--accent-border)]">
          <GraduationCap className="w-3.5 h-3.5" />
          <span>Academic Profile & Inquiry</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--foreground)]">
          Research Statement & Interests
        </h1>
        <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
          Building and evaluating reliable AI systems, from real-time perception
          to LLM agents and retrieval-augmented generation.
        </p>
      </div>

      {/* RESEARCH STATEMENT HIGHLIGHT */}
      <section className="p-8 sm:p-10 rounded-3xl bg-[var(--surface-1)] border border-[var(--border-subtle)] shadow-xs relative overflow-hidden space-y-4">
        <div className="text-xs font-mono font-bold text-[var(--accent)] uppercase tracking-wider">
          Research Statement
        </div>
        <blockquote className="text-base sm:text-lg font-medium text-[var(--foreground)] leading-relaxed italic border-l-4 border-[var(--accent)] pl-4 py-1">
          &ldquo;{research.statementSummary}&rdquo;
        </blockquote>
        <div className="pt-2 flex flex-wrap items-center gap-4 text-xs">
          <Link
            href="/resume"
            className="inline-flex items-center gap-1.5 font-bold text-[var(--accent)] hover:underline"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Academic CV</span>
          </Link>
          <span className="text-[var(--text-dim)]">•</span>
          <Link
            href="/projects"
            className="inline-flex items-center gap-1 font-bold text-[var(--accent)] hover:underline"
          >
            <span>Verify the projects (code, demos, reports)</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </section>

      {/* CORE RESEARCH INTERESTS */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-[var(--foreground)] flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-[var(--accent)]" />
          <span>Core Research Fields</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {research.researchInterests.map((interest, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[var(--surface-1)] border border-[var(--border-subtle)] shadow-xs space-y-3 flex flex-col"
            >
              <div className="w-8 h-8 rounded-lg bg-[var(--accent-surface)] border border-[var(--accent-border)] flex items-center justify-center font-mono font-bold text-xs text-[var(--accent)]">
                0{idx + 1}
              </div>
              <h3 className="text-base font-bold text-[var(--foreground)]">
                {interest.topic}
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed flex-1">
                {interest.summary}
              </p>
              <Link
                href="/projects"
                className="inline-flex items-center gap-1 text-xs font-bold text-[var(--accent)] hover:underline pt-1"
              >
                <span>See the projects behind this</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* FYP IN-DEPTH TECHNICAL WRITE-UP */}
      <section id="fyp-section" className="space-y-8 scroll-mt-20">
        <div className="space-y-3 border-b border-[var(--border-subtle)] pb-6">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[var(--accent)] uppercase">
            <Cpu className="w-4 h-4" /> Final Year Project (FYP)
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[var(--foreground)]">
            {fyp.title}
          </h2>
          <div className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
            Status: {fyp.status}
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-1 text-xs font-bold text-[var(--accent)] hover:underline"
          >
            <span>View code, demo and report on the Projects page</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>

        {/* Abstract */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[var(--surface-1)] border border-[var(--border-subtle)] shadow-xs space-y-3">
          <h3 className="text-xs font-mono uppercase tracking-wider text-[var(--text-dim)] font-bold">
            Abstract
          </h3>
          <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
            {fyp.abstract}
          </p>
        </div>

        {/* Results (rendered only if present in research.json) */}
        {fyp.results && (
          <div className="p-6 sm:p-8 rounded-2xl bg-[var(--surface-1)] border border-[var(--border-subtle)] shadow-xs space-y-5">
            <h3 className="text-lg font-bold text-[var(--foreground)] flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-[var(--accent)]" />
              <span>Results</span>
            </h3>
            {fyp.results.split && (
              <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                {fyp.results.split}
              </p>
            )}
            {fyp.results.overall && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {Object.entries(fyp.results.overall).map(([key, value]) => (
                  <div
                    key={key}
                    className="p-4 rounded-xl bg-[var(--surface-2)] border border-[var(--border-subtle)] text-center"
                  >
                    <div className="text-lg font-extrabold text-[var(--foreground)]">
                      {value}
                    </div>
                    <div className="text-[11px] font-mono text-[var(--text-muted)]">
                      {METRIC_LABELS[key] ?? key}
                    </div>
                  </div>
                ))}
              </div>
            )}
            {fyp.results.perClassMAP50 && (
              <div className="space-y-2">
                <span className="text-xs font-semibold text-[var(--accent)] block">
                  Per-class mAP@50
                </span>
                <div className="flex flex-wrap gap-2">
                  {Object.entries(fyp.results.perClassMAP50).map(
                    ([cls, value]) => (
                      <span
                        key={cls}
                        className="px-2.5 py-1 rounded bg-[var(--surface-2)] text-[11px] font-mono text-[var(--text-muted)] border border-[var(--border-subtle)]"
                      >
                        {cls}: {value}
                      </span>
                    )
                  )}
                </div>
              </div>
            )}
            <ul className="space-y-1 text-xs text-[var(--text-muted)]">
              {fyp.results.efficiency && <li>• Efficiency: {fyp.results.efficiency}</li>}
              {fyp.results.training && <li>• Training: {fyp.results.training}</li>}
            </ul>
          </div>
        )}

        {/* Dataset breakdown */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[var(--surface-1)] border border-[var(--border-subtle)] shadow-xs space-y-4">
          <h3 className="text-lg font-bold text-[var(--foreground)]">
            Dataset: {fyp.dataset.name}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-[var(--surface-2)] space-y-2 border border-[var(--border-subtle)]">
              <span className="font-semibold text-[var(--accent)] block">Dataset Specifications:</span>
              <ul className="space-y-1 text-[var(--text-muted)]">
                <li>• Size: {fyp.dataset.size}</li>
                <li>• Format: YOLO-format bounding-box labels</li>
                <li>• Annotation: labeled from scratch; blurred and duplicate frames removed</li>
              </ul>
            </div>
            <div className="p-4 rounded-xl bg-[var(--surface-2)] space-y-2 border border-[var(--border-subtle)]">
              <span className="font-semibold text-[var(--accent)] block">Annotated Classes:</span>
              <div className="flex flex-wrap gap-1.5">
                {fyp.dataset.classes.map((cls) => (
                  <span
                    key={cls}
                    className="px-2 py-0.5 rounded bg-[var(--surface-1)] text-[11px] font-mono text-[var(--text-muted)] border border-[var(--border-subtle)]"
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
            Methodology
          </h3>
          <div className="space-y-3">
            {fyp.methodology.map((m, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-[var(--surface-1)] border border-[var(--border-subtle)] flex items-start gap-4 shadow-xs"
              >
                <div className="w-7 h-7 rounded-full bg-[var(--accent-surface)] text-[var(--accent)] font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 border border-[var(--accent-border)]">
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

        {/* Limitations (rendered only if present in research.json) */}
        {fyp.limitations && fyp.limitations.length > 0 && (
          <div className="p-6 sm:p-8 rounded-2xl bg-[var(--surface-1)] border border-[var(--border-subtle)] shadow-xs space-y-4">
            <h3 className="text-lg font-bold text-[var(--foreground)] flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-500" />
              <span>Limitations</span>
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
              {fyp.limitations.map((item, idx) => (
                <li key={idx}>• {item}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Open Research Questions */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[var(--surface-1)] border border-[var(--border-subtle)] shadow-xs space-y-4">
          <h3 className="text-lg font-bold text-[var(--foreground)] flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-amber-500" />
            <span>Open Questions for Graduate Inquiry</span>
          </h3>
          <div className="space-y-3">
            {fyp.openQuestions.map((q, idx) => (
              <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[var(--text-muted)]">
                <span className="font-mono text-amber-500 font-bold">Q{idx + 1}:</span>
                <p className="leading-relaxed">{q}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
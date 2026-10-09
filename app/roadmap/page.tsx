import React from "react";
import { Metadata } from "next";
import { getRoadmap } from "@/lib/content";
import {
  Compass,
  Calendar,
  Building,
  CheckCircle2,
  Clock,
  Target,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Academic & Scholarship Roadmap | Muhammad Awais",
  description:
    "Master's degree roadmap for Fall 2026 / Spring 2027. Chinese Government Scholarship (CSC), ANSO Fellowship, and Italian Regional Grants (DSU).",
};

export default function RoadmapPage() {
  const roadmap = getRoadmap();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-[var(--accent-surface)] text-[var(--accent)] border border-[var(--accent-border)]">
          <Compass className="w-3.5 h-3.5" />
          <span>Graduate Trajectory (2026 – 2027)</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--foreground)]">
          Academic Roadmap & Scholarships
        </h1>
        <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
          Targeting research-track Master of Science programs in <strong>Artificial Intelligence</strong> and <strong>Cybersecurity</strong> with fully-funded government and institutional fellowships.
        </p>
      </div>

      {/* STRATEGY SUMMARY CARD */}
      <section className="p-8 sm:p-10 rounded-3xl bg-[var(--surface-1)] border border-[var(--border-subtle)] shadow-xs space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold text-[var(--foreground)]">
          Strategic Philosophy
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-xs sm:text-sm">
          <div className="space-y-2 p-4 rounded-2xl bg-[var(--surface-2)] border border-[var(--border-subtle)]">
            <div className="text-[var(--accent)] font-bold font-mono">01. Research Fit</div>
            <p className="text-[var(--text-muted)] leading-relaxed">
              Aligning FYP dataset engineering and model quantization with labs leading in edge intelligence, multi-agent frameworks, and trustworthy autonomous systems.
            </p>
          </div>
          <div className="space-y-2 p-4 rounded-2xl bg-[var(--surface-2)] border border-[var(--border-subtle)]">
            <div className="text-[var(--accent)] font-bold font-mono">02. Verified Metrics</div>
            <p className="text-[var(--text-muted)] leading-relaxed">
              Leading with tangible empirical evidence: 42 FPS on edge GPUs, 91.4% mAP@0.5, and transparent reproducible git repositories.
            </p>
          </div>
          <div className="space-y-2 p-4 rounded-2xl bg-[var(--surface-2)] border border-[var(--border-subtle)]">
            <div className="text-[var(--accent)] font-bold font-mono">03. Scholarship Pipeline</div>
            <p className="text-[var(--text-muted)] leading-relaxed">
              Prioritizing CSC Type B (China), ANSO (CAS/UCAS), and Italian Regional Grants (DSU) with rigorous timeline discipline.
            </p>
          </div>
        </div>
      </section>

      {/* SCHOLARSHIP TRACKS */}
      <section className="space-y-8">
        <h2 className="text-2xl font-bold text-[var(--foreground)] flex items-center gap-2">
          <Target className="w-5 h-5 text-[var(--accent)]" />
          <span>Active Scholarship & Fellowship Routes</span>
        </h2>

        <div className="space-y-6">
          {roadmap.tracks.map((track) => (
            <div
              key={track.id}
              className="p-6 sm:p-8 rounded-3xl bg-[var(--surface-1)] border border-[var(--border-subtle)] shadow-xs space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="space-y-1">
                  <div className="text-xs font-mono text-[var(--accent)] font-bold uppercase">
                    {track.country} • {track.focus}
                  </div>
                  <h3 className="text-xl font-bold text-[var(--foreground)]">
                    {track.name}
                  </h3>
                  <div className="text-xs text-[var(--text-dim)] font-mono flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[var(--accent)]" />
                    <span>Application Window: {track.deadline}</span>
                  </div>
                </div>

                <span className="px-3 py-1.5 rounded-xl text-xs font-mono font-bold bg-[var(--accent-surface)] text-[var(--accent)] border border-[var(--accent-border)] shrink-0">
                  Status: {track.status}
                </span>
              </div>

              {/* What I Bring */}
              <div className="p-4 rounded-xl bg-[var(--surface-2)] border border-[var(--border-subtle)] space-y-1 text-xs">
                <span className="font-semibold text-emerald-600 dark:text-emerald-400 uppercase font-mono block">
                  What I Bring to this Program:
                </span>
                <p className="text-[var(--text-muted)] leading-relaxed">
                  {track.whatIBring}
                </p>
              </div>

              {/* Target Universities */}
              <div className="space-y-2">
                <div className="text-xs font-semibold uppercase tracking-wider text-[var(--text-dim)] flex items-center gap-1.5">
                  <Building className="w-3.5 h-3.5" />
                  <span>Targeted Research Institutes:</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {track.targetUniversities.map((uni) => (
                    <div
                      key={uni}
                      className="p-2.5 rounded-lg bg-[var(--surface-2)] text-[var(--foreground)] border border-[var(--border-subtle)] font-medium"
                    >
                      {uni}
                    </div>
                  ))}
                </div>
              </div>

              {/* Steps checklist */}
              <div className="space-y-2 pt-2 border-t border-[var(--border-subtle)]">
                <div className="text-xs font-semibold uppercase tracking-wider text-[var(--text-dim)]">
                  Track Milestones:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {track.milestones.map((ms, idx) => (
                    <div
                      key={idx}
                      className={`p-2.5 rounded-lg text-xs flex items-center justify-between border ${
                        ms.completed
                          ? "bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800/40 text-emerald-800 dark:text-emerald-300"
                          : "bg-[var(--surface-2)] border-[var(--border-subtle)] text-[var(--text-dim)]"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        {ms.completed ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        ) : (
                          <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                        )}
                        <span className="font-medium">{ms.step}</span>
                      </div>
                      <span className="font-mono text-[10px] opacity-75 shrink-0 ml-2">
                        {ms.date}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* OVERALL TIMELINE */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-[var(--foreground)]">
          Timeline & Progression Stages
        </h2>

        <div className="space-y-4">
          {roadmap.timeline.map((step, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-[var(--surface-1)] border border-[var(--border-subtle)] shadow-xs flex flex-col sm:flex-row sm:items-start gap-4"
            >
              <div className="w-36 shrink-0 font-mono text-xs font-bold text-[var(--accent)]">
                {step.date}
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-[var(--foreground)]">
                  {step.title}
                </h3>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

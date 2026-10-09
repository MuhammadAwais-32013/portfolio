"use client";

import React, { useState, useMemo } from "react";
import { getCertifications } from "@/lib/content";
import {
  Award,
  ShieldCheck,
  Calendar,
  ExternalLink,
  CheckCircle2,
  Trophy,
  FileCheck,
} from "lucide-react";
import { Github } from "@/components/Icons";

export default function AchievementsPage() {
  const certifications = getCertifications();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = useMemo(() => {
    const cats = Array.from(new Set(certifications.map((c) => c.category)));
    return ["All", ...cats];
  }, [certifications]);

  const filteredCerts = certifications.filter(
    (c) => selectedCategory === "All" || c.category === selectedCategory
  );

  const certRepoUrl = "https://github.com/MuhammadAwais-32013/Certifications";

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* Header & Repo Banner */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 border-b border-[var(--border-subtle)]">
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-[var(--accent-surface)] text-[var(--accent)] border border-[var(--accent-border)]">
            <Trophy className="w-3.5 h-3.5" />
            <span>Verified Technical Credentials</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--foreground)]">
            Certifications & Honors
          </h1>
          <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
            Verified credentials catalog spanning Machine Learning (DeepLearning.AI / Stanford), Generative AI, Model Context Protocol (MCP), Computer Vision, Python, and Systems Engineering.
          </p>
        </div>

        {/* GitHub Repository CTA */}
        <a
          href={certRepoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4.5 py-2.5 rounded-xl bg-[var(--surface-1)] hover:bg-[var(--surface-2)] text-[var(--foreground)] border border-[var(--border-subtle)] shadow-xs transition-all text-xs font-semibold shrink-0 group hover:border-[var(--border-focus)]"
          title="View all certificate files and PDFs on GitHub"
        >
          <Github className="w-4 h-4" />
          <span>Certifications Repository</span>
          <ExternalLink className="w-3.5 h-3.5 text-[var(--accent)] group-hover:translate-x-0.5 transition-transform" />
        </a>
      </div>

      {/* Category Filter */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
              selectedCategory === cat
                ? "bg-[var(--accent)] text-slate-950 font-bold shadow-xs"
                : "bg-[var(--surface-1)] text-[var(--text-muted)] hover:text-[var(--foreground)] border border-[var(--border-subtle)]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Certifications Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredCerts.map((cert) => (
          <div
            key={cert.id}
            className="p-6 rounded-2xl bg-[var(--surface-1)] border border-[var(--border-subtle)] shadow-xs hover:border-[var(--border-focus)] transition-all flex flex-col justify-between space-y-4 group"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-[var(--text-dim)]">
                <span className="text-[var(--accent)] font-semibold">{cert.category}</span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {cert.date}
                </span>
              </div>

              <h3 className="text-base font-bold text-[var(--foreground)] leading-snug group-hover:text-[var(--accent)] transition-colors">
                {cert.title}
              </h3>

              <div className="text-xs text-[var(--text-muted)] font-medium">
                Issuer: <span className="font-semibold text-[var(--foreground)]">{cert.issuer}</span>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {cert.skills.map((s) => (
                  <span
                    key={s}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--surface-2)] text-[var(--text-dim)] border border-[var(--border-subtle)]"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs">
              <span className="font-mono text-[11px] text-[var(--text-dim)] truncate max-w-[160px]">
                {cert.credentialId}
              </span>
              <a
                href={certRepoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 hover:underline"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                <span>Verified on GitHub</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

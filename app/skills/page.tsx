"use client";

import React, { useState } from "react";
import Link from "next/link";
import { getSkills, getProjects } from "@/lib/content";
import {
  Layers,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Code2,
} from "lucide-react";

export default function SkillsPage() {
  const categories = getSkills();
  const projects = getProjects();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredCategories = categories.filter(
    (cat) => selectedCategory === "All" || cat.category === selectedCategory
  );

  const getProjectName = (slug?: string) => {
    if (!slug) return null;
    const p = projects.find((proj) => proj.slug === slug);
    return p ? p.shortTitle : slug;
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-sky-500/10 text-sky-400 border border-sky-500/20">
          <Code2 className="w-3.5 h-3.5" />
          <span>Evidence-Backed Competencies</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--foreground)]">
          Skills & Evidence Matrix
        </h1>
        <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
          I follow the principle of <strong>&ldquo;Evidence Over Claims&rdquo;</strong>. Rather than listing keywords without context, every core technical competency links directly to an empirical project or deployed codebase where it was battle-tested.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
        <button
          onClick={() => setSelectedCategory("All")}
          className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
            selectedCategory === "All"
              ? "bg-sky-500 text-slate-950 font-bold shadow-sm"
              : "bg-[var(--surface-2)] text-[var(--text-muted)] hover:text-[var(--foreground)]"
          }`}
        >
          All Domains
        </button>
        {categories.map((c) => (
          <button
            key={c.category}
            onClick={() => setSelectedCategory(c.category)}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
              selectedCategory === c.category
                ? "bg-sky-500 text-slate-950 font-bold shadow-sm"
                : "bg-[var(--surface-2)] text-[var(--text-muted)] hover:text-[var(--foreground)]"
            }`}
          >
            {c.category}
          </button>
        ))}
      </div>

      {/* Category Sections */}
      <div className="space-y-10">
        {filteredCategories.map((cat) => (
          <div
            key={cat.category}
            className="p-6 sm:p-8 rounded-3xl glass-panel-elevated border border-[var(--border-subtle)] space-y-6"
          >
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-[var(--foreground)]">
                {cat.category}
              </h2>
              <p className="text-xs sm:text-sm text-[var(--text-muted)] mt-1">
                {cat.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {cat.skills.map((skill) => {
                const projectName = getProjectName(skill.projectSlug);
                return (
                  <div
                    key={skill.name}
                    className="p-4 rounded-2xl bg-[var(--surface-1)] border border-[var(--border-subtle)] hover:border-sky-500/40 transition-all flex flex-col justify-between space-y-3"
                  >
                    <div className="space-y-1.5">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="text-sm font-bold text-[var(--foreground)]">
                          {skill.name}
                        </h3>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--surface-2)] text-sky-400 font-semibold border border-[var(--border-subtle)] shrink-0">
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-[11px] text-[var(--text-dim)] leading-relaxed">
                        <strong className="text-[var(--text-muted)]">Verified in:</strong>{" "}
                        {skill.provenBy}
                      </p>
                    </div>

                    {skill.projectSlug && (
                      <div className="pt-2 border-t border-[var(--border-subtle)]">
                        <Link
                          href={`/projects/${skill.projectSlug}`}
                          className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-sky-400 hover:text-sky-300 transition-colors"
                        >
                          <span>Case study: {projectName}</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

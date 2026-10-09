"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { getProjects } from "@/lib/content";
import {
  Search,
  ArrowRight,
  ExternalLink,
  Layers,
  Filter,
  CheckCircle,
} from "lucide-react";
import { Github } from "@/components/Icons";

export default function ProjectsPage() {
  const allProjects = getProjects();
  const [selectedDomain, setSelectedDomain] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const domains = useMemo(() => {
    const domSet = new Set<string>();
    allProjects.forEach((p) => p.domains.forEach((d) => domSet.add(d)));
    return ["All", ...Array.from(domSet)];
  }, [allProjects]);

  const filteredProjects = allProjects.filter((project) => {
    const matchesDomain =
      selectedDomain === "All" || project.domains.includes(selectedDomain);
    const matchesQuery =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.stack.some((tech) =>
        tech.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesDomain && matchesQuery;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-[var(--accent-surface)] text-[var(--accent)] border border-[var(--accent-border)]">
          <Layers className="w-3.5 h-3.5" />
          <span>Case Studies & Architectures</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--foreground)]">
          Engineering & Research Projects
        </h1>
        <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
          Open-source multi-agent workflows, predictive time-series models, health RAG applications, and real-time edge computer vision systems.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-4 rounded-2xl bg-[var(--surface-1)] border border-[var(--border-subtle)] shadow-xs">
        {/* Domain Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
          {domains.map((dom) => (
            <button
              key={dom}
              onClick={() => setSelectedDomain(dom)}
              className={`whitespace-nowrap px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                selectedDomain === dom
                  ? "bg-[var(--accent)] text-slate-950 font-bold shadow-xs"
                  : "bg-[var(--surface-2)] text-[var(--text-muted)] hover:text-[var(--foreground)] border border-[var(--border-subtle)]"
              }`}
            >
              {dom}
            </button>
          ))}
        </div>

        {/* Search input */}
        <div className="relative min-w-[240px]">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-dim)]" />
          <input
            type="text"
            placeholder="Search stack, title, or keywords..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-[var(--surface-2)] border border-[var(--border-subtle)] text-[var(--foreground)] placeholder-[var(--text-dim)] focus:outline-none focus:border-[var(--accent)]"
          />
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.slug}
            className="rounded-3xl bg-[var(--surface-1)] border border-[var(--border-subtle)] shadow-xs hover:border-[var(--border-focus)] transition-all flex flex-col justify-between overflow-hidden group"
          >
            <div className="p-7 space-y-4">
              {/* Top tags & period */}
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex flex-wrap items-center gap-1.5">
                  {project.domains.map((dom) => (
                    <span
                      key={dom}
                      className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[var(--accent-surface)] text-[var(--accent)] border border-[var(--accent-border)]"
                    >
                      {dom}
                    </span>
                  ))}
                </div>
                <span className="text-xs font-mono text-[var(--text-dim)]">
                  {project.period}
                </span>
              </div>

              {/* Title & Role */}
              <div className="space-y-2">
                <h2 className="text-xl sm:text-2xl font-bold text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
                  <Link href={`/projects/${project.slug}`}>
                    {project.title}
                  </Link>
                </h2>
                <div className="text-xs text-[var(--accent)] font-semibold font-mono">
                  {project.role}
                </div>
                <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                  {project.summary}
                </p>
              </div>

              {/* Metrics strip */}
              <div className="grid grid-cols-2 gap-2.5 p-3 rounded-xl bg-[var(--surface-2)] border border-[var(--border-subtle)]">
                {project.metrics.slice(0, 2).map((m, i) => (
                  <div key={i}>
                    <div className="text-[10px] font-mono uppercase text-[var(--text-dim)]">
                      {m.label}
                    </div>
                    <div className="text-sm font-bold font-mono text-[var(--foreground)] mt-0.5">
                      {m.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Stack badges */}
              <div className="flex flex-wrap gap-1.5">
                {project.stack.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--surface-2)] text-[var(--text-dim)] border border-[var(--border-subtle)]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="px-7 py-3.5 bg-[var(--surface-2)] border-t border-[var(--border-subtle)] flex items-center justify-between">
              <Link
                href={`/projects/${project.slug}`}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--accent)] group-hover:underline"
              >
                <span>Read Full Case Study</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <div className="flex items-center gap-2">
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 rounded-lg text-[var(--text-dim)] hover:text-[var(--foreground)] hover:bg-[var(--surface-1)] transition-colors border border-[var(--border-subtle)]"
                    title="View GitHub Repository"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
                {project.links.liveDemo && (
                  <a
                    href={project.links.liveDemo}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 rounded-lg text-[var(--text-dim)] hover:text-[var(--foreground)] hover:bg-[var(--surface-1)] transition-colors border border-[var(--border-subtle)]"
                    title="View Live Demo"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

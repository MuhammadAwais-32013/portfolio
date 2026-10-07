"use client";

import React, { useState } from "react";
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

  const domains = [
    "All",
    "Computer Vision",
    "Deep Learning",
    "Edge AI",
    "Full-Stack",
    "LLM/Agents",
    "Security",
  ];

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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-sky-500/10 text-sky-400 border border-sky-500/20">
          <Layers className="w-3.5 h-3.5" />
          <span>Case Studies & Architectures</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--foreground)]">
          Engineering & Research Projects
        </h1>
        <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
          Every project represents an end-to-end engineering effort: from formulating the problem and gathering data to optimizing deep learning models and shipping production-ready web interfaces.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-4 rounded-2xl glass-panel border border-[var(--border-subtle)]">
        {/* Domain Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
          {domains.map((dom) => (
            <button
              key={dom}
              onClick={() => setSelectedDomain(dom)}
              className={`whitespace-nowrap px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                selectedDomain === dom
                  ? "bg-sky-500 text-slate-950 shadow-sm"
                  : "bg-[var(--surface-2)] text-[var(--text-muted)] hover:text-[var(--foreground)] hover:bg-[var(--surface-3)]"
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
            className="w-full pl-9 pr-3 py-1.5 text-xs rounded-lg bg-[var(--surface-2)] border border-[var(--border-subtle)] text-[var(--foreground)] placeholder-[var(--text-dim)] focus:outline-none focus:border-sky-500"
          />
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.slug}
            className="rounded-3xl glass-panel-elevated border border-[var(--border-subtle)] hover:border-sky-500/50 transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-lg"
          >
            <div className="p-7 space-y-5">
              {/* Top tags & period */}
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex flex-wrap items-center gap-1.5">
                  {project.domains.map((dom) => (
                    <span
                      key={dom}
                      className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-sky-500/10 text-sky-400 border border-sky-500/20"
                    >
                      {dom}
                    </span>
                  ))}
                </div>
                <span className="text-xs font-mono text-[var(--text-dim)]">
                  {project.period}
                </span>
              </div>

              {/* Title & One-line */}
              <div className="space-y-2">
                <h2 className="text-xl sm:text-2xl font-bold text-[var(--foreground)] group-hover:text-sky-400 transition-colors">
                  <Link href={`/projects/${project.slug}`}>
                    {project.title}
                  </Link>
                </h2>
                <div className="text-xs text-sky-400 font-medium">
                  {project.role}
                </div>
                <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                  {project.summary}
                </p>
              </div>

              {/* Metrics strip */}
              <div className="grid grid-cols-2 gap-2.5 p-3 rounded-xl bg-[var(--surface-1)] border border-[var(--border-subtle)]">
                {project.metrics.slice(0, 2).map((m, i) => (
                  <div key={i}>
                    <div className="text-[10px] font-mono uppercase text-[var(--text-dim)]">
                      {m.label}
                    </div>
                    <div className="text-sm font-bold font-mono text-[var(--foreground)]">
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
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--surface-2)] text-[var(--text-muted)] border border-[var(--border-subtle)]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="px-7 py-4 bg-[var(--surface-1)] border-t border-[var(--border-subtle)] flex items-center justify-between">
              <Link
                href={`/projects/${project.slug}`}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-400 group-hover:underline"
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
                    className="p-1.5 rounded-lg text-[var(--text-dim)] hover:text-[var(--foreground)] hover:bg-[var(--surface-2)] transition-colors"
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
                    className="p-1.5 rounded-lg text-[var(--text-dim)] hover:text-[var(--foreground)] hover:bg-[var(--surface-2)] transition-colors"
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

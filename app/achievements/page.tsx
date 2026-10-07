"use client";

import React, { useState } from "react";
import { getCertifications } from "@/lib/content";
import {
  Award,
  ShieldCheck,
  Calendar,
  ExternalLink,
  CheckCircle2,
  Trophy,
} from "lucide-react";

export default function AchievementsPage() {
  const certifications = getCertifications();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    "All",
    "AI & Deep Learning",
    "Web & Software Engineering",
    "Security",
    "Systems & Databases",
    "DevOps & Cloud",
    "Tools & Methodology",
  ];

  const filteredCerts = certifications.filter(
    (c) => selectedCategory === "All" || c.category === selectedCategory
  );

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20">
          <Trophy className="w-3.5 h-3.5" />
          <span>Verified Credentials & Honors</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--foreground)]">
          Certifications & Achievements
        </h1>
        <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
          Catalog of 14 verified technical credentials covering Deep Learning, Python, Full-Stack engineering, Defensive Security, and Cloud containerization.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
              selectedCategory === cat
                ? "bg-amber-400 text-slate-950 font-bold shadow-sm"
                : "bg-[var(--surface-2)] text-[var(--text-muted)] hover:text-[var(--foreground)]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Certifications Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCerts.map((cert) => (
          <div
            key={cert.id}
            className="p-6 rounded-3xl glass-panel-elevated border border-[var(--border-subtle)] hover:border-amber-400/40 transition-all flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-[var(--text-dim)]">
                <span className="text-amber-400 font-semibold">{cert.category}</span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {cert.date}
                </span>
              </div>

              <h3 className="text-base font-bold text-[var(--foreground)] leading-snug">
                {cert.title}
              </h3>

              <div className="text-xs text-[var(--text-muted)] font-medium">
                Issuer: <span className="text-sky-400">{cert.issuer}</span>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {cert.skills.map((s) => (
                  <span
                    key={s}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--surface-1)] text-[var(--text-dim)] border border-[var(--border-subtle)]"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs">
              <span className="font-mono text-[11px] text-[var(--text-dim)]">
                ID: {cert.credentialId}
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified</span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

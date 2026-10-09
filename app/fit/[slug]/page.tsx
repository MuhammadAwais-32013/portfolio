import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProfessors, getProfessorBySlug, getProjectBySlug } from "@/lib/content";
import {
  GraduationCap,
  FileText,
  Mail,
  ArrowRight,
  ShieldCheck,
  Building,
  MapPin,
  Sparkles,
  BookOpen,
} from "lucide-react";

export async function generateStaticParams() {
  const profs = getProfessors();
  return profs.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const prof = getProfessorBySlug(slug);

  return {
    title: prof
      ? `Research Alignment: Muhammad Awais & ${prof.name}`
      : "Research Fit Page | Muhammad Awais",
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default async function ProfessorFitPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  let prof = getProfessorBySlug(slug);

  // If not found in pre-configured list, provide a graceful dynamic template
  if (!prof) {
    const formattedName = slug
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");

    prof = {
      slug,
      name: formattedName.startsWith("Prof") || formattedName.startsWith("Dr") ? formattedName : `Prof. ${formattedName}`,
      lab: "Advanced AI & Intelligent Systems Laboratory",
      institution: "Prospective Graduate Faculty",
      location: "Graduate Admissions Department",
      recentPaper: "Next-Generation Machine Learning & Autonomous Systems",
      alignmentTheme: "Computer Vision, Edge Inference & Reliable Agentic Systems",
      keyConnections: [
        "My Final Year Project on real-time traffic choke detection demonstrates end-to-end vision modeling (YOLOv8, 42 FPS, 91.4% mAP) tailored for edge constraints.",
        "I have engineered production software platforms with strict security boundaries, bridging machine learning modeling with resilient full-stack deployment.",
        "I am actively seeking an MS thesis supervision opportunity with your research group.",
      ],
      relevantProjects: ["traffic-choking-detection", "multi-agent-research-system"],
    };
  }

  const relevantProjects = prof.relevantProjects
    .map((s) => getProjectBySlug(s))
    .filter(Boolean);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Unlisted confidentiality badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-purple-500/10 text-purple-400 border border-purple-500/20">
        <GraduationCap className="w-3.5 h-3.5" />
        <span>Confidential Research Fit Proposal • Unlisted (noindex)</span>
      </div>

      {/* Hero Header */}
      <div className="space-y-4">
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--foreground)]">
          Research Fit & Alignment
        </h1>
        <p className="text-base sm:text-lg text-[var(--text-muted)] leading-relaxed">
          Prepared specifically for{" "}
          <strong className="text-[var(--foreground)]">{prof.name}</strong> and the{" "}
          <strong className="text-purple-400">{prof.lab}</strong> at {prof.institution}.
        </p>
      </div>

      {/* Target Advisor Card */}
      <div className="p-6 sm:p-8 rounded-3xl glass-panel-elevated border border-purple-500/30 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[var(--border-subtle)] pb-4">
          <div>
            <h2 className="text-xl font-bold text-[var(--foreground)]">{prof.name}</h2>
            <div className="text-xs text-sky-400 font-semibold">{prof.lab}</div>
            <div className="text-xs text-[var(--text-dim)] flex items-center gap-2 mt-1">
              <span>{prof.institution}</span>
              <span>•</span>
              <span>{prof.location}</span>
            </div>
          </div>
          <span className="px-3 py-1 rounded-xl bg-purple-500/15 text-purple-300 font-mono text-xs font-bold border border-purple-500/25 w-fit">
            Focus: {prof.alignmentTheme}
          </span>
        </div>

        <div className="space-y-1 text-xs">
          <span className="font-semibold text-[var(--text-dim)] uppercase tracking-wider block">
            Relevant Research Reference:
          </span>
          <p className="text-[var(--text-muted)] italic font-medium">
            &ldquo;{prof.recentPaper}&rdquo;
          </p>
        </div>
      </div>

      {/* Why Muhammad Awais fits this lab */}
      <section className="space-y-4 p-8 rounded-3xl glass-panel border border-[var(--border-subtle)]">
        <h3 className="text-lg sm:text-xl font-bold text-[var(--foreground)] flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-sky-400" />
          <span>How My Research Directly Aligns with Your Lab</span>
        </h3>

        <div className="space-y-3 pt-2">
          {prof.keyConnections.map((conn, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-[var(--surface-1)] border border-[var(--border-subtle)] flex items-start gap-3 text-xs sm:text-sm text-[var(--text-muted)]"
            >
              <div className="w-6 h-6 rounded-full bg-sky-500/10 text-sky-400 font-mono font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                {idx + 1}
              </div>
              <p className="leading-relaxed">{conn}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Relevant Project Evidence */}
      <section className="space-y-4">
        <h3 className="text-lg font-bold text-[var(--foreground)] flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-purple-400" />
          <span>Relevant Codebases & Case Studies</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {relevantProjects.map((p) => (
            <div
              key={p!.slug}
              className="p-5 rounded-2xl glass-panel border border-[var(--border-subtle)] space-y-3"
            >
              <div className="text-xs font-mono text-sky-400">{p!.domains[0]}</div>
              <h4 className="text-base font-bold text-[var(--foreground)]">
                {p!.shortTitle}
              </h4>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed line-clamp-3">
                {p!.summary}
              </p>
              <div className="pt-2 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs">
                <span className="font-mono text-emerald-400 font-bold">
                  {p!.metrics[0].label}: {p!.metrics[0].value}
                </span>
                <Link
                  href={`/projects/${p!.slug}`}
                  className="font-bold text-sky-400 hover:underline flex items-center gap-1"
                >
                  <span>Case Study</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Outreach Action Call */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-purple-950/40 to-slate-900 border border-purple-500/30 text-center space-y-4">
        <h3 className="text-xl font-bold text-white">
          Initiate Direct Research Discussion
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
          I am eager to discuss potential master&apos;s thesis projects or contribute to active research initiatives in your lab.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <a
            href={`mailto:muhammad.awais.swe@gmail.com?subject=${encodeURIComponent(`Graduate Research Inquiry - ${prof.name}`)}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs shadow-lg transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span>Email Muhammad Awais</span>
          </a>
          <Link
            href="/resume"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[var(--surface-2)] text-[var(--foreground)] font-semibold text-xs border border-[var(--border-subtle)] transition-colors"
          >
            <FileText className="w-4 h-4 text-purple-400" />
            <span>Review Academic CV</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

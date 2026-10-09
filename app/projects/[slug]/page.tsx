import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { getProjects, getProjectBySlug } from "@/lib/content";
import {
  ArrowLeft,
  ExternalLink,
  Layers,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  FileCode,
  GitBranch,
} from "lucide-react";
import { Github } from "@/components/Icons";

export const instant = false;

export async function generateStaticParams() {
  const projects = getProjects();
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.shortTitle} Case Study | Muhammad Awais`,
    description: project.summary,
    openGraph: {
      title: `${project.title} | Case Study`,
      description: project.summary,
    },
  };
}

export default async function ProjectCaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const allProjects = getProjects();
  const otherProjects = allProjects.filter((p) => p.slug !== slug);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* Back Link */}
      <div>
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Case Studies</span>
        </Link>
      </div>

      {/* Hero Header */}
      <div className="space-y-6">
        <div className="flex flex-wrap items-center gap-2">
          {project.domains.map((dom) => (
            <span
              key={dom}
              className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[var(--accent-surface)] text-[var(--accent)] border border-[var(--accent-border)]"
            >
              {dom}
            </span>
          ))}
          <span className="text-xs font-mono text-[var(--text-dim)] ml-auto">
            {project.period}
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--foreground)] leading-tight">
          {project.title}
        </h1>

        <p className="text-base sm:text-lg text-[var(--text-muted)] leading-relaxed font-medium">
          {project.summary}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-1">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[var(--accent)] hover:brightness-110 text-slate-950 font-bold text-xs shadow-xs transition-all"
            >
              <Github className="w-4 h-4" />
              <span>Explore GitHub Repository</span>
            </a>
          )}
          {project.links.liveDemo && (
            <a
              href={project.links.liveDemo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[var(--surface-1)] hover:bg-[var(--surface-2)] text-[var(--foreground)] font-semibold text-xs border border-[var(--border-subtle)] transition-colors shadow-xs"
            >
              <ExternalLink className="w-4 h-4 text-[var(--accent)]" />
              <span>Launch Live System</span>
            </a>
          )}
          {project.links.paperDraft && (
            <Link
              href={project.links.paperDraft}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[var(--surface-2)] hover:bg-[var(--surface-3)] text-[var(--foreground)] font-semibold text-xs border border-[var(--border-subtle)] transition-colors"
            >
              <span>Read Paper Draft</span>
            </Link>
          )}
        </div>
      </div>

      {/* Verified Metrics Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-[var(--surface-1)] border border-[var(--border-subtle)] shadow-xs">
        {project.metrics.map((m, idx) => (
          <div key={idx} className="space-y-1">
            <div className="text-[10px] font-mono uppercase text-[var(--text-dim)]">
              {m.label}
            </div>
            <div className="text-xl sm:text-2xl font-extrabold font-mono text-[var(--accent)]">
              {m.value}
            </div>
          </div>
        ))}
      </div>

      {/* Section 2: Problem & Context */}
      <section className="space-y-4 p-7 sm:p-8 rounded-3xl bg-[var(--surface-1)] border border-[var(--border-subtle)] shadow-xs">
        <h2 className="text-xl sm:text-2xl font-bold text-[var(--foreground)] flex items-center gap-2.5">
          <AlertTriangle className="w-5 h-5 text-amber-500" />
          <span>The Problem & Engineering Context</span>
        </h2>
        <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
          {project.problem}
        </p>
      </section>

      {/* Section 3: Personal Role & What I Personally Built */}
      <section className="space-y-4 p-7 sm:p-8 rounded-3xl bg-[var(--surface-1)] border border-[var(--border-subtle)] shadow-xs">
        <h2 className="text-xl sm:text-2xl font-bold text-[var(--foreground)] flex items-center gap-2.5">
          <Layers className="w-5 h-5 text-[var(--accent)]" />
          <span>Role & Personal Contributions</span>
        </h2>
        <div className="text-xs font-mono font-bold text-[var(--accent)]">
          Position: {project.role}
        </div>
        <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
          {project.solution}
        </p>
      </section>

      {/* Section 4: Architecture Diagram & Pipeline */}
      <section className="space-y-5 p-7 sm:p-8 rounded-3xl bg-[var(--surface-1)] border border-[var(--border-subtle)] shadow-xs">
        <h2 className="text-xl sm:text-2xl font-bold text-[var(--foreground)] flex items-center gap-2.5">
          <GitBranch className="w-5 h-5 text-indigo-500" />
          <span>System Architecture & Pipeline Flow</span>
        </h2>

        {/* Visual Architecture Box */}
        <div className="p-5 rounded-2xl bg-[var(--surface-2)] border border-[var(--border-subtle)] space-y-3 font-mono text-xs">
          <div className="text-emerald-600 dark:text-emerald-400 font-bold tracking-wide">
            DATA PIPELINE BREAKDOWN:
          </div>
          <p className="text-[var(--text-muted)] leading-relaxed p-4 rounded-xl bg-[var(--surface-1)] border border-[var(--border-subtle)]">
            {project.architecture}
          </p>
        </div>
      </section>

      {/* Section 5 & 6: Results, Benchmarks & Stack */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <section className="md:col-span-2 space-y-4 p-7 rounded-3xl bg-[var(--surface-1)] border border-[var(--border-subtle)] shadow-xs">
          <h2 className="text-xl font-bold text-[var(--foreground)] flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-500" />
            <span>Empirical Results & Benchmarks</span>
          </h2>
          <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
            {project.results}
          </p>
        </section>

        <section className="space-y-4 p-7 rounded-3xl bg-[var(--surface-1)] border border-[var(--border-subtle)] shadow-xs">
          <h2 className="text-xl font-bold text-[var(--foreground)] flex items-center gap-2">
            <FileCode className="w-5 h-5 text-[var(--accent)]" />
            <span>Core Stack</span>
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-[var(--surface-2)] text-[var(--foreground)] border border-[var(--border-subtle)]"
              >
                {t}
              </span>
            ))}
          </div>
        </section>
      </div>

      {/* Section 7: Challenges & What I Learned */}
      <section className="space-y-4 p-7 sm:p-8 rounded-3xl bg-[var(--surface-1)] border border-[var(--border-subtle)] shadow-xs">
        <h2 className="text-xl sm:text-2xl font-bold text-[var(--foreground)] flex items-center gap-2.5">
          <Lightbulb className="w-5 h-5 text-amber-500" />
          <span>Technical Challenges & Resolution</span>
        </h2>
        <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
          {project.challenges}
        </p>
      </section>

      {/* Other Projects */}
      <div className="pt-8 border-t border-[var(--border-subtle)] space-y-6">
        <h3 className="text-lg font-bold text-[var(--foreground)]">
          Explore Other Projects
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {otherProjects.map((p) => (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
              className="p-5 rounded-2xl bg-[var(--surface-1)] border border-[var(--border-subtle)] hover:border-[var(--border-focus)] transition-all space-y-2 group shadow-xs"
            >
              <div className="text-xs font-mono text-[var(--accent)]">{p.domains[0]}</div>
              <h4 className="text-sm font-bold text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
                {p.shortTitle}
              </h4>
              <p className="text-xs text-[var(--text-muted)] line-clamp-2">
                {p.summary}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

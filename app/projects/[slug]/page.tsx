import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { getProjects, getProjectBySlug } from "@/lib/content";
import { TrafficSimulationDemo } from "@/components/TrafficSimulationDemo";
import {
  ArrowLeft,
  ExternalLink,
  Cpu,
  Layers,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  FileCode,
  GitBranch,
} from "lucide-react";
import { Github } from "@/components/Icons";

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
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Back Link */}
      <div>
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--text-muted)] hover:text-sky-400 transition-colors"
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
              className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-sky-500/10 text-sky-400 border border-sky-500/20"
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

        <p className="text-base sm:text-xl text-[var(--text-muted)] leading-relaxed font-medium">
          {project.summary}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs shadow-md transition-colors"
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
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[var(--surface-2)] hover:bg-[var(--surface-3)] text-[var(--foreground)] font-semibold text-xs border border-[var(--border-subtle)] transition-colors"
            >
              <ExternalLink className="w-4 h-4 text-sky-400" />
              <span>Launch Live System</span>
            </a>
          )}
          {project.links.paperDraft && (
            <Link
              href={project.links.paperDraft}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-500/15 hover:bg-purple-500/25 text-purple-300 font-semibold text-xs border border-purple-500/30 transition-colors"
            >
              <span>Read Paper Draft</span>
            </Link>
          )}
        </div>
      </div>

      {/* Verified Metrics Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl glass-panel-elevated border border-[var(--border-strong)]">
        {project.metrics.map((m, idx) => (
          <div key={idx} className="space-y-1">
            <div className="text-[10px] font-mono uppercase text-[var(--text-dim)]">
              {m.label}
            </div>
            <div className="text-xl sm:text-2xl font-extrabold font-mono text-sky-400">
              {m.value}
            </div>
          </div>
        ))}
      </div>

      {/* Special Interactive Demo slot if Traffic Choking FYP */}
      {project.slug === "traffic-choking-detection" && (
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs text-[var(--text-dim)]">
            <span className="font-semibold text-sky-400 flex items-center gap-1.5">
              <Cpu className="w-4 h-4" /> Live Interactive Traffic Choking Simulation
            </span>
            <span>Simulated TensorRT Edge Pipeline</span>
          </div>
          <TrafficSimulationDemo />
        </div>
      )}

      {/* Section 2: Problem & Context */}
      <section className="space-y-4 p-8 rounded-3xl glass-panel border border-[var(--border-subtle)]">
        <h2 className="text-xl sm:text-2xl font-bold text-[var(--foreground)] flex items-center gap-2.5">
          <AlertTriangle className="w-5 h-5 text-amber-400" />
          <span>The Problem & Engineering Context</span>
        </h2>
        <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
          {project.problem}
        </p>
      </section>

      {/* Section 3: Personal Role & What I Personally Built */}
      <section className="space-y-4 p-8 rounded-3xl glass-panel border border-[var(--border-subtle)]">
        <h2 className="text-xl sm:text-2xl font-bold text-[var(--foreground)] flex items-center gap-2.5">
          <Layers className="w-5 h-5 text-sky-400" />
          <span>Role & Personal Contributions</span>
        </h2>
        <div className="text-xs font-mono font-bold text-sky-400">
          Position: {project.role}
        </div>
        <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
          {project.solution}
        </p>
      </section>

      {/* Section 4: Architecture Diagram & Pipeline */}
      <section className="space-y-5 p-8 rounded-3xl glass-panel-elevated border border-[var(--border-strong)]">
        <h2 className="text-xl sm:text-2xl font-bold text-[var(--foreground)] flex items-center gap-2.5">
          <GitBranch className="w-5 h-5 text-purple-400" />
          <span>System Architecture & Pipeline Flow</span>
        </h2>

        {/* Visual Architecture Box */}
        <div className="p-6 rounded-2xl bg-[var(--surface-1)] border border-[var(--border-subtle)] space-y-4 font-mono text-xs">
          <div className="text-emerald-400 font-semibold tracking-wide">
            DATA PIPELINE BREAKDOWN:
          </div>
          <p className="text-slate-300 leading-loose bg-slate-950/60 p-4 rounded-xl border border-slate-800">
            {project.architecture}
          </p>
        </div>
      </section>

      {/* Section 5 & 6: Results, Benchmarks & Stack */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <section className="md:col-span-2 space-y-4 p-8 rounded-3xl glass-panel border border-[var(--border-subtle)]">
          <h2 className="text-xl font-bold text-[var(--foreground)] flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            <span>Empirical Results & Benchmarks</span>
          </h2>
          <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
            {project.results}
          </p>
        </section>

        <section className="space-y-4 p-8 rounded-3xl glass-panel border border-[var(--border-subtle)]">
          <h2 className="text-xl font-bold text-[var(--foreground)] flex items-center gap-2">
            <FileCode className="w-5 h-5 text-sky-400" />
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
      <section className="space-y-4 p-8 rounded-3xl glass-panel border border-[var(--border-subtle)]">
        <h2 className="text-xl sm:text-2xl font-bold text-[var(--foreground)] flex items-center gap-2.5">
          <Lightbulb className="w-5 h-5 text-yellow-400" />
          <span>Technical Challenges & Future Evolution</span>
        </h2>
        <p className="text-sm text-[var(--text-muted)] leading-relaxed">
          {project.challenges}
        </p>
      </section>

      {/* Other Projects */}
      <div className="pt-10 border-t border-[var(--border-subtle)] space-y-6">
        <h3 className="text-lg font-bold text-[var(--foreground)]">
          Explore Other Projects
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {otherProjects.map((p) => (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
              className="p-5 rounded-2xl glass-panel border border-[var(--border-subtle)] hover:border-sky-500/50 transition-all space-y-2 group"
            >
              <div className="text-xs font-mono text-sky-400">{p.domains[0]}</div>
              <h4 className="text-sm font-bold text-[var(--foreground)] group-hover:text-sky-400 transition-colors">
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

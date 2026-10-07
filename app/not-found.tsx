import React from "react";
import Link from "next/link";
import { ArrowLeft, Home, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center space-y-6">
      <div className="w-16 h-16 rounded-2xl bg-sky-500/10 border border-sky-500/20 text-sky-400 font-mono font-extrabold text-2xl flex items-center justify-center">
        404
      </div>
      <div className="space-y-2">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[var(--foreground)] tracking-tight">
          Page Not Found
        </h1>
        <p className="text-xs sm:text-sm text-[var(--text-muted)] max-w-md">
          The requested route could not be found. It may have been moved, or you may be looking for an unlisted fit proposal.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs shadow-md transition-colors"
        >
          <Home className="w-3.5 h-3.5" />
          <span>Return Home</span>
        </Link>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[var(--surface-2)] text-[var(--foreground)] font-semibold text-xs border border-[var(--border-subtle)] hover:bg-[var(--surface-3)] transition-colors"
        >
          <Compass className="w-3.5 h-3.5" />
          <span>Browse Projects</span>
        </Link>
      </div>
    </div>
  );
}

"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp, Mail, ShieldCheck, Heart } from "lucide-react";
import { Linkedin, Github } from "./Icons";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-[var(--border-subtle)] bg-[var(--surface-1)] text-[var(--foreground)] mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand & Positioning */}
          <div className="space-y-4 lg:col-span-1">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center text-white font-mono text-sm font-bold">
                MA
              </div>
              <span className="font-bold tracking-tight text-base">Muhammad Awais</span>
            </div>
            <p className="text-xs leading-relaxed text-[var(--text-muted)]">
              Full-stack AI engineer who builds computer vision, LLM and agentic systems end to end, from data collection to deployed product, and aims to deepen this through graduate research in AI and secure AI systems.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/MuhammadAwais"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-[var(--surface-2)] text-[var(--text-muted)] hover:text-sky-400 hover:bg-[var(--surface-3)] transition-colors border border-[var(--border-subtle)]"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/muhammad-awais-ai"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-[var(--surface-2)] text-[var(--text-muted)] hover:text-sky-400 hover:bg-[var(--surface-3)] transition-colors border border-[var(--border-subtle)]"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:awais.ai.eng@gmail.com"
                className="p-2 rounded-lg bg-[var(--surface-2)] text-[var(--text-muted)] hover:text-sky-400 hover:bg-[var(--surface-3)] transition-colors border border-[var(--border-subtle)]"
                aria-label="Direct Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Engineering Track */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold tracking-wider uppercase text-[var(--text-dim)]">
              Engineering & Systems
            </h3>
            <ul className="space-y-2 text-sm text-[var(--text-muted)]">
              <li>
                <Link href="/projects" className="hover:text-sky-400 transition-colors">
                  Case Studies & Projects
                </Link>
              </li>
              <li>
                <Link href="/experience" className="hover:text-sky-400 transition-colors">
                  NIC & Freelance Experience
                </Link>
              </li>
              <li>
                <Link href="/skills" className="hover:text-sky-400 transition-colors">
                  Skills & Evidence Matrix
                </Link>
              </li>
              <li>
                <Link href="/achievements" className="hover:text-sky-400 transition-colors">
                  14 Verified Certifications
                </Link>
              </li>
              <li>
                <Link href="/for/recruiters" className="hover:text-emerald-400 transition-colors">
                  Recruiter Focused View
                </Link>
              </li>
            </ul>
          </div>

          {/* Academic & Research Track */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold tracking-wider uppercase text-[var(--text-dim)]">
              Research & Graduate
            </h3>
            <ul className="space-y-2 text-sm text-[var(--text-muted)]">
              <li>
                <Link href="/research" className="hover:text-sky-400 transition-colors">
                  FYP Traffic Detection & Statement
                </Link>
              </li>
              <li>
                <Link href="/roadmap" className="hover:text-sky-400 transition-colors">
                  MS AI / CSC & ANSO Roadmap
                </Link>
              </li>
              <li>
                <Link href="/resume" className="hover:text-sky-400 transition-colors">
                  Dual Academic & Industry CV
                </Link>
              </li>
              <li>
                <Link href="/fit/dr-zhang" className="hover:text-purple-400 transition-colors">
                  Sample Lab Fit Page (/fit)
                </Link>
              </li>
              <li>
                <Link href="/for/professors" className="hover:text-purple-400 transition-colors">
                  Professor Focused View
                </Link>
              </li>
            </ul>
          </div>

          {/* Privacy & Conversion */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold tracking-wider uppercase text-[var(--text-dim)]">
              Trust & Privacy
            </h3>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed">
              Zero third-party telemetry scripts. Zero personal IDs published. Built with clean, accessible semantic HTML & Next.js.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center w-full px-4 py-2 text-xs font-medium rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold shadow-sm transition-colors"
              >
                Initiate Conversation
              </Link>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] text-[var(--text-dim)]">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Verified student & software credentials</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--text-dim)]">
          <p>© {new Date().getFullYear()} Muhammad Awais. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              Engineered with precision <Heart className="w-3 h-3 text-rose-500 fill-rose-500" />
            </span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-sky-400 transition-colors py-1 px-2 rounded hover:bg-[var(--surface-2)]"
              aria-label="Back to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

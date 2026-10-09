"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUp, Mail, ShieldCheck, Heart, MessageCircle } from "lucide-react";
import { Linkedin, Github } from "./Icons";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const email = "muhammad.awais.swe@gmail.com";
  const phone = "+92 346 4617329";
  const whatsappUrl = "https://wa.me/923464617329";

  return (
    <footer className="border-t border-[var(--border-subtle)] bg-[var(--surface-1)] text-[var(--foreground)] mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand & Positioning */}
          <div className="space-y-4 lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <div className="relative w-8 h-8 rounded-full overflow-hidden ring-2 ring-[var(--border-subtle)] shrink-0">
                <Image
                  src="/P_Picture.jpeg"
                  alt="Muhammad Awais"
                  width={32}
                  height={32}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-bold tracking-tight text-base text-[var(--foreground)]">Muhammad Awais</span>
            </div>
            <p className="text-xs leading-relaxed text-[var(--text-muted)]">
              Full-stack AI engineer specializing in Generative AI, Large Language Models, agentic systems, and computer vision from data collection to deployed product.
            </p>
            <div className="flex items-center gap-2.5 pt-2">
              <a
                href="https://github.com/MuhammadAwais-32013"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-[var(--surface-2)] text-[var(--text-muted)] hover:text-[var(--accent)] hover:bg-[var(--surface-3)] transition-colors border border-[var(--border-subtle)]"
                aria-label="GitHub Profile"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/muhammad-awais32013"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-[var(--surface-2)] text-[var(--text-muted)] hover:text-[var(--accent)] hover:bg-[var(--surface-3)] transition-colors border border-[var(--border-subtle)]"
                aria-label="LinkedIn Profile"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/20 transition-colors border border-emerald-500/20"
                aria-label="Chat on WhatsApp"
                title="WhatsApp: +92 346 4617329"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${email}`}
                className="p-2 rounded-lg bg-[var(--surface-2)] text-[var(--text-muted)] hover:text-[var(--accent)] hover:bg-[var(--surface-3)] transition-colors border border-[var(--border-subtle)]"
                aria-label="Direct Email"
                title={`Email: ${email}`}
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
                <Link href="/projects" className="hover:text-[var(--accent)] transition-colors">
                  Case Studies & Projects
                </Link>
              </li>
              <li>
                <Link href="/experience" className="hover:text-[var(--accent)] transition-colors">
                  NIC & Freelance Experience
                </Link>
              </li>
              <li>
                <Link href="/skills" className="hover:text-[var(--accent)] transition-colors">
                  Skills & Evidence Matrix
                </Link>
              </li>
              <li>
                <Link href="/achievements" className="hover:text-[var(--accent)] transition-colors">
                  18+ Verified Certifications
                </Link>
              </li>
              <li>
                <Link href="/for/recruiters" className="hover:text-emerald-500 transition-colors">
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
                <Link href="/research" className="hover:text-[var(--accent)] transition-colors">
                  FYP Traffic Detection & Statement
                </Link>
              </li>
              <li>
                <Link href="/roadmap" className="hover:text-[var(--accent)] transition-colors">
                  MS AI / CSC & ANSO Roadmap
                </Link>
              </li>
              <li>
                <Link href="/resume" className="hover:text-[var(--accent)] transition-colors">
                  Dual Academic & Industry CV
                </Link>
              </li>
              <li>
                <Link href="/fit/dr-zhang" className="hover:text-indigo-500 transition-colors">
                  Sample Lab Fit Page (/fit)
                </Link>
              </li>
              <li>
                <Link href="/for/professors" className="hover:text-indigo-500 transition-colors">
                  Professor Focused View
                </Link>
              </li>
            </ul>
          </div>

          {/* Privacy & Conversion */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold tracking-wider uppercase text-[var(--text-dim)]">
              Get in Touch
            </h3>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed">
              Available for full-stack AI roles and research collaborations. Direct encrypted WhatsApp chat or email.
            </p>
            <div className="pt-2 flex flex-col gap-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 w-full px-4 py-2 text-xs rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold shadow-xs transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Chat via WhatsApp</span>
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center w-full px-4 py-2 text-xs rounded-xl bg-[var(--surface-2)] hover:bg-[var(--surface-3)] text-[var(--foreground)] font-semibold border border-[var(--border-subtle)] transition-colors"
              >
                Contact Form
              </Link>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] text-[var(--text-dim)]">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
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
              className="flex items-center gap-1 hover:text-[var(--accent)] transition-colors py-1 px-2 rounded hover:bg-[var(--surface-2)]"
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

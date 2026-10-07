"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "./ThemeProvider";
import { useAudience, AudienceType } from "./AudienceContext";
import {
  Sun,
  Moon,
  Command,
  Menu,
  X,
  Sparkles,
  Briefcase,
  GraduationCap,
  Award,
  ChevronDown,
  Layers,
  FileText,
  Mail,
  ArrowRight,
} from "lucide-react";

export function Navbar({ onOpenCommandPalette }: { onOpenCommandPalette?: () => void }) {
  const pathname = usePathname();
  const { toggleTheme, resolvedTheme } = useTheme();
  const { audience, setAudience } = useAudience();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [audienceMenuOpen, setAudienceMenuOpen] = useState(false);
  const [moreMenuOpen, setMoreMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const audienceDropdownRef = useRef<HTMLDivElement>(null);
  const moreDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        audienceDropdownRef.current &&
        !audienceDropdownRef.current.contains(e.target as Node)
      ) {
        setAudienceMenuOpen(false);
      }
      if (
        moreDropdownRef.current &&
        !moreDropdownRef.current.contains(e.target as Node)
      ) {
        setMoreMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const primaryNavLinks = [
    { href: "/projects", label: "Projects" },
    { href: "/research", label: "Research" },
    { href: "/roadmap", label: "Roadmap" },
    { href: "/experience", label: "Experience" },
  ];

  const secondaryNavLinks = [
    { href: "/skills", label: "Skills & Evidence Matrix", desc: "Competencies linked to proof projects" },
    { href: "/achievements", label: "14 Certifications & Awards", desc: "Verified credentials catalog" },
    { href: "/resume", label: "Dual Industry & Academic CV", desc: "Print-optimized documents" },
  ];

  const audienceConfig: Record<
    AudienceType,
    { label: string; icon: React.ReactNode; color: string; desc: string }
  > = {
    all: {
      label: "Full View",
      icon: <Sparkles className="w-3.5 h-3.5 text-sky-400" />,
      color: "text-sky-400",
      desc: "Comprehensive portfolio showcase",
    },
    recruiters: {
      label: "Recruiter",
      icon: <Briefcase className="w-3.5 h-3.5 text-emerald-400" />,
      color: "text-emerald-400",
      desc: "Production code, systems & metrics",
    },
    professors: {
      label: "Professor",
      icon: <GraduationCap className="w-3.5 h-3.5 text-purple-400" />,
      color: "text-purple-400",
      desc: "FYP methodology & research fit",
    },
    admissions: {
      label: "Admissions",
      icon: <Award className="w-3.5 h-3.5 text-amber-400" />,
      color: "text-amber-400",
      desc: "Academic trajectory & MS roadmap",
    },
  };

  const currentAudience = audienceConfig[audience] || audienceConfig.all;

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-[var(--border-subtle)] bg-[var(--background)]/90 backdrop-blur-md shadow-md py-2.5"
          : "bg-transparent py-3.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* LEFT: Clean Brand Logo */}
          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/"
              className="flex items-center gap-2.5 group"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-sky-500 via-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-md font-mono text-xs font-extrabold group-hover:scale-105 transition-transform">
                MA
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-sm sm:text-base leading-none text-[var(--foreground)] tracking-tight">
                  Muhammad Awais
                </span>
                <span className="text-[11px] font-mono text-[var(--accent)] font-medium mt-0.5">
                  Full-Stack AI Engineer
                </span>
              </div>
            </Link>
          </div>

          {/* CENTER: Clean, Focused Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[var(--surface-1)] border border-[var(--border-subtle)] shadow-sm">
            {primaryNavLinks.map((link) => {
              const isActive = pathname === link.href || pathname?.startsWith(`${link.href}/`);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-1 text-xs font-semibold rounded-full transition-all ${
                    isActive
                      ? "text-sky-400 bg-sky-500/15 shadow-sm"
                      : "text-[var(--text-muted)] hover:text-[var(--foreground)] hover:bg-[var(--surface-2)]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            {/* "More" dropdown for secondary items to avoid messy overcrowding */}
            <div className="relative" ref={moreDropdownRef}>
              <button
                onClick={() => setMoreMenuOpen(!moreMenuOpen)}
                className={`flex items-center gap-1 px-3 py-1 text-xs font-semibold rounded-full transition-colors ${
                  moreMenuOpen || pathname === "/skills" || pathname === "/achievements" || pathname === "/resume"
                    ? "text-sky-400 bg-sky-500/10"
                    : "text-[var(--text-muted)] hover:text-[var(--foreground)] hover:bg-[var(--surface-2)]"
                }`}
                aria-expanded={moreMenuOpen}
              >
                <span>More</span>
                <ChevronDown className={`w-3 h-3 transition-transform ${moreMenuOpen ? "rotate-180" : ""}`} />
              </button>

              {moreMenuOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 p-2 rounded-2xl glass-panel-elevated shadow-xl border border-[var(--border-strong)] z-50 animate-in fade-in zoom-in-95 duration-150 space-y-1">
                  {secondaryNavLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMoreMenuOpen(false)}
                      className="block p-2.5 rounded-xl hover:bg-[var(--surface-3)] transition-colors group"
                    >
                      <div className="text-xs font-semibold text-[var(--foreground)] group-hover:text-sky-400 transition-colors">
                        {item.label}
                      </div>
                      <div className="text-[10px] text-[var(--text-dim)] mt-0.5">
                        {item.desc}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/contact"
              className={`px-3 py-1 text-xs font-semibold rounded-full transition-all ${
                pathname === "/contact"
                  ? "text-sky-400 bg-sky-500/15"
                  : "text-[var(--text-muted)] hover:text-[var(--foreground)] hover:bg-[var(--surface-2)]"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* RIGHT: Compact Controls (Audience Pill, ⌘K, Theme, Resume CTA) */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Audience Lens Dropdown Pill */}
            <div className="relative hidden sm:block" ref={audienceDropdownRef}>
              <button
                onClick={() => setAudienceMenuOpen(!audienceMenuOpen)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-[var(--surface-1)] hover:bg-[var(--surface-2)] border border-[var(--border-subtle)] text-[var(--foreground)] shadow-sm transition-all"
                title="Switch audience perspective"
                aria-label="Select audience perspective"
              >
                {currentAudience.icon}
                <span className="font-medium text-[var(--text-muted)]">Lens:</span>
                <span className={`font-bold ${currentAudience.color}`}>{currentAudience.label}</span>
                <ChevronDown className={`w-3 h-3 text-[var(--text-dim)] transition-transform ${audienceMenuOpen ? "rotate-180" : ""}`} />
              </button>

              {audienceMenuOpen && (
                <div className="absolute right-0 top-full mt-2 w-64 p-2 rounded-2xl glass-panel-elevated shadow-xl border border-[var(--border-strong)] z-50 animate-in fade-in zoom-in-95 duration-150 space-y-1">
                  <div className="px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider text-[var(--text-dim)] font-bold">
                    Choose Perspective
                  </div>
                  {(Object.keys(audienceConfig) as AudienceType[]).map((key) => {
                    const opt = audienceConfig[key];
                    const isSelected = audience === key;
                    return (
                      <button
                        key={key}
                        onClick={() => {
                          setAudience(key);
                          setAudienceMenuOpen(false);
                        }}
                        className={`w-full flex items-start gap-2.5 p-2 rounded-xl text-left transition-colors ${
                          isSelected
                            ? "bg-sky-500/15 border border-sky-500/30 text-[var(--foreground)]"
                            : "hover:bg-[var(--surface-3)] text-[var(--text-muted)]"
                        }`}
                      >
                        <div className="mt-0.5">{opt.icon}</div>
                        <div>
                          <div className={`text-xs font-bold ${isSelected ? opt.color : "text-[var(--foreground)]"}`}>
                            {opt.label}
                          </div>
                          <div className="text-[10px] text-[var(--text-dim)]">{opt.desc}</div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Quick CV Download button */}
            <Link
              href="/resume"
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-[var(--surface-1)] hover:bg-[var(--surface-2)] border border-[var(--border-subtle)] text-[var(--foreground)] transition-colors"
            >
              <FileText className="w-3.5 h-3.5 text-sky-400" />
              <span>CV</span>
            </Link>

            {/* Command Palette Trigger Icon */}
            {onOpenCommandPalette && (
              <button
                onClick={onOpenCommandPalette}
                className="p-2 rounded-full text-[var(--text-dim)] hover:text-[var(--foreground)] bg-[var(--surface-1)] hover:bg-[var(--surface-2)] border border-[var(--border-subtle)] transition-colors"
                title="Search / Command Palette (⌘K)"
                aria-label="Open command palette"
              >
                <Command className="w-3.5 h-3.5" />
              </button>
            )}

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-[var(--text-dim)] hover:text-[var(--foreground)] bg-[var(--surface-1)] hover:bg-[var(--surface-2)] border border-[var(--border-subtle)] transition-colors"
              title="Toggle dark / light theme"
              aria-label="Toggle theme"
            >
              {resolvedTheme === "dark" ? (
                <Sun className="w-3.5 h-3.5 text-amber-400" />
              ) : (
                <Moon className="w-3.5 h-3.5 text-sky-500" />
              )}
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-[var(--text-muted)] hover:text-[var(--foreground)] bg-[var(--surface-1)] border border-[var(--border-subtle)]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[var(--border-subtle)] bg-[var(--background)] px-4 pt-3 pb-6 space-y-4">
          {/* Audience selection pill grid */}
          <div className="space-y-1.5">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--text-dim)] font-bold">
              Perspective Lens
            </span>
            <div className="grid grid-cols-2 gap-1.5">
              {(Object.keys(audienceConfig) as AudienceType[]).map((key) => {
                const opt = audienceConfig[key];
                return (
                  <button
                    key={key}
                    onClick={() => {
                      setAudience(key);
                      setMobileMenuOpen(false);
                    }}
                    className={`flex items-center gap-2 p-2 rounded-xl text-xs font-semibold border ${
                      audience === key
                        ? "bg-sky-500/15 border-sky-500/30 text-sky-400"
                        : "bg-[var(--surface-1)] border-[var(--border-subtle)] text-[var(--text-muted)]"
                    }`}
                  >
                    {opt.icon}
                    <span>{opt.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Links list */}
          <div className="grid grid-cols-2 gap-1 pt-2 border-t border-[var(--border-subtle)]">
            {[...primaryNavLinks, ...secondaryNavLinks, { href: "/contact", label: "Contact", desc: "" }].map(
              (item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`p-2.5 rounded-xl text-xs font-semibold transition-colors ${
                    pathname === item.href
                      ? "bg-sky-500/15 text-sky-400"
                      : "text-[var(--text-muted)] hover:bg-[var(--surface-2)]"
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </header>
  );
}

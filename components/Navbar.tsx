"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
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
  FileText,
} from "lucide-react";

export function Navbar({ onOpenCommandPalette }: { onOpenCommandPalette?: () => void }) {
  const pathname = usePathname();
  const { toggleTheme, resolvedTheme, mounted } = useTheme();
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
    { href: "/skills", label: "Skills Matrix" },
    { href: "/research", label: "Research" },
    { href: "/experience", label: "Experience" },
  ];

  const secondaryNavLinks = [
    { href: "/achievements", label: "18+ Certifications", desc: "DeepLearning.AI, GenAI, MCP & Cisco" },
    { href: "/resume", label: "Dual CV", desc: "Industry & Academic CV" },
  ];

  const audienceConfig: Record<
    AudienceType,
    { label: string; icon: React.ReactNode; color: string; desc: string }
  > = {
    all: {
      label: "Full View",
      icon: <Sparkles className="w-3.5 h-3.5 text-[var(--accent)]" />,
      color: "text-[var(--accent)]",
      desc: "Comprehensive portfolio showcase",
    },
    recruiters: {
      label: "Recruiter",
      icon: <Briefcase className="w-3.5 h-3.5 text-emerald-500" />,
      color: "text-emerald-500",
      desc: "Production code, systems & metrics",
    },
    professors: {
      label: "Professor",
      icon: <GraduationCap className="w-3.5 h-3.5 text-indigo-500" />,
      color: "text-indigo-500",
      desc: "FYP methodology & research fit",
    },
    admissions: {
      label: "Admissions",
      icon: <Award className="w-3.5 h-3.5 text-amber-500" />,
      color: "text-amber-500",
      desc: "Academic trajectory & MS roadmap",
    },
  };

  const currentAudience = audienceConfig[audience] || audienceConfig.all;

  return (
    <header
      className={`sticky top-0 z-40 w-full max-w-full overflow-x-clip transition-all duration-200 ${
        scrolled
          ? "border-b border-[var(--border-subtle)] bg-[var(--background)]/95 backdrop-blur-md shadow-sm py-2.5"
          : "bg-transparent py-3.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* LEFT: Brand Logo */}
          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/"
              className="flex items-center gap-2.5 group"
            >
              <div className="relative w-8 h-8 rounded-full overflow-hidden ring-2 ring-[var(--border-subtle)] group-hover:ring-[var(--accent)] transition-all shrink-0">
                <Image
                  src="/P_Picture.jpeg"
                  alt="Muhammad Awais"
                  width={32}
                  height={32}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-sm sm:text-base leading-none text-[var(--foreground)] tracking-tight">
                  Muhammad Awais
                </span>
                <span className="text-[11px] font-mono text-[var(--accent)] font-semibold mt-0.5">
                  Full-Stack AI Engineer
                </span>
              </div>
            </Link>
          </div>

          {/* CENTER: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[var(--surface-1)] border border-[var(--border-subtle)] shadow-sm">
            {primaryNavLinks.map((link) => {
              const isActive = pathname === link.href || pathname?.startsWith(`${link.href}/`);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-1 text-xs font-semibold rounded-full transition-all ${
                    isActive
                      ? "text-[var(--accent)] bg-[var(--accent-surface)] border border-[var(--accent-border)] shadow-xs"
                      : "text-[var(--text-muted)] hover:text-[var(--foreground)] hover:bg-[var(--surface-2)]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            {/* "More" dropdown */}
            <div className="relative" ref={moreDropdownRef}>
              <button
                onClick={() => setMoreMenuOpen(!moreMenuOpen)}
                className={`flex items-center gap-1 px-3 py-1 text-xs font-semibold rounded-full transition-colors ${
                  moreMenuOpen || pathname === "/skills" || pathname === "/achievements" || pathname === "/resume"
                    ? "text-[var(--accent)] bg-[var(--accent-surface)]"
                    : "text-[var(--text-muted)] hover:text-[var(--foreground)] hover:bg-[var(--surface-2)]"
                }`}
                aria-expanded={moreMenuOpen}
              >
                <span>More</span>
                <ChevronDown className={`w-3 h-3 transition-transform ${moreMenuOpen ? "rotate-180" : ""}`} />
              </button>

              {moreMenuOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 p-2 rounded-2xl bg-[var(--surface-1)] shadow-xl border border-[var(--border-subtle)] z-50 animate-in fade-in zoom-in-95 duration-150 space-y-1">
                  {secondaryNavLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMoreMenuOpen(false)}
                      className="block p-2.5 rounded-xl hover:bg-[var(--surface-2)] transition-colors group"
                    >
                      <div className="text-xs font-semibold text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
                        {item.label}
                      </div>
                      <div className="text-[11px] text-[var(--text-dim)] mt-0.5">
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
                  ? "text-[var(--accent)] bg-[var(--accent-surface)] border border-[var(--accent-border)]"
                  : "text-[var(--text-muted)] hover:text-[var(--foreground)] hover:bg-[var(--surface-2)]"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* RIGHT: Compact Controls & Profile Pic Logo */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Audience Lens Dropdown Pill */}
            <div className="relative hidden sm:block" ref={audienceDropdownRef}>
              <button
                onClick={() => setAudienceMenuOpen(!audienceMenuOpen)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-[var(--surface-1)] hover:bg-[var(--surface-2)] border border-[var(--border-subtle)] text-[var(--foreground)] shadow-xs transition-all"
                title="Switch audience perspective"
                aria-label="Select audience perspective"
              >
                {currentAudience.icon}
                <span className="font-medium text-[var(--text-dim)]">Lens:</span>
                <span className={`font-bold ${currentAudience.color}`}>{currentAudience.label}</span>
                <ChevronDown className={`w-3 h-3 text-[var(--text-dim)] transition-transform ${audienceMenuOpen ? "rotate-180" : ""}`} />
              </button>

              {audienceMenuOpen && (
                <div className="absolute right-0 top-full mt-2 w-64 p-2 rounded-2xl bg-[var(--surface-1)] shadow-xl border border-[var(--border-subtle)] z-50 animate-in fade-in zoom-in-95 duration-150 space-y-1">
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
                            ? "bg-[var(--accent-surface)] border border-[var(--accent-border)] text-[var(--foreground)]"
                            : "hover:bg-[var(--surface-2)] text-[var(--text-muted)]"
                        }`}
                      >
                        <div className="mt-0.5">{opt.icon}</div>
                        <div>
                          <div className={`text-xs font-bold ${isSelected ? opt.color : "text-[var(--foreground)]"}`}>
                            {opt.label}
                          </div>
                          <div className="text-[11px] text-[var(--text-dim)]">{opt.desc}</div>
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
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-[var(--surface-1)] hover:bg-[var(--surface-2)] border border-[var(--border-subtle)] text-[var(--foreground)] transition-colors shadow-xs"
            >
              <FileText className="w-3.5 h-3.5 text-[var(--accent)]" />
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
                <Moon className="w-3.5 h-3.5 text-slate-800" />
              )}
            </button>

            {/* TOP RIGHT: Profile Pic Logo & Status Indicator (desktop/tablet) */}
            <Link
              href="/contact"
              className="relative hidden sm:flex items-center justify-center p-0.5 rounded-full ring-2 ring-[var(--border-subtle)] hover:ring-[var(--accent)] transition-all group shrink-0 focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
              title="Muhammad Awais — Full-Stack AI Engineer (Available for Roles)"
              aria-label="Muhammad Awais Profile and Contact"
            >
              <Image
                src="/P_Picture.jpeg"
                alt="Muhammad Awais Profile Logo"
                width={34}
                height={34}
                className="w-8 h-8 sm:w-8.5 sm:h-8.5 rounded-full object-cover group-hover:scale-105 transition-transform"
                priority
              />
              <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-[var(--surface-1)]" />
            </Link>

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
                        ? "bg-[var(--accent-surface)] border-[var(--accent-border)] text-[var(--accent)]"
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
                      ? "bg-[var(--accent-surface)] text-[var(--accent)]"
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

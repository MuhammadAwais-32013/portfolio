"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "./ThemeProvider";
import { useAudience, AudienceType } from "./AudienceContext";
import {
  Sun,
  Moon,
  Laptop,
  Command,
  Menu,
  X,
  Sparkles,
  Briefcase,
  GraduationCap,
  Award,
  BookOpen,
  MapPin,
} from "lucide-react";

export function Navbar({ onOpenCommandPalette }: { onOpenCommandPalette?: () => void }) {
  const pathname = usePathname();
  const { theme, toggleTheme, resolvedTheme } = useTheme();
  const { audience, setAudience } = useAudience();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/projects", label: "Projects" },
    { href: "/research", label: "Research & FYP" },
    { href: "/roadmap", label: "Roadmap" },
    { href: "/experience", label: "Experience" },
    { href: "/skills", label: "Skills" },
    { href: "/achievements", label: "Achievements" },
    { href: "/resume", label: "CV" },
    { href: "/contact", label: "Contact" },
  ];

  const audienceOptions: { id: AudienceType; label: string; icon: React.ReactNode }[] = [
    { id: "all", label: "Universal", icon: <Sparkles className="w-3.5 h-3.5 text-sky-400" /> },
    { id: "recruiters", label: "Recruiters", icon: <Briefcase className="w-3.5 h-3.5 text-emerald-400" /> },
    { id: "professors", label: "Professors", icon: <GraduationCap className="w-3.5 h-3.5 text-purple-400" /> },
    { id: "admissions", label: "Admissions", icon: <Award className="w-3.5 h-3.5 text-amber-400" /> },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        scrolled
          ? "border-b border-[var(--border-subtle)] bg-[var(--background)]/85 backdrop-blur-md shadow-sm"
          : "bg-[var(--background)]/60 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Brand */}
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="flex items-center gap-2.5 font-bold tracking-tight text-lg text-[var(--foreground)] hover:opacity-85 transition-opacity"
            >
              <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center text-white shadow-md font-mono text-sm">
                MA
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-sm sm:text-base leading-tight">Muhammad Awais</span>
                <span className="text-[11px] font-normal text-[var(--text-dim)]">Full-Stack AI Engineer</span>
              </div>
            </Link>

            {/* Quick availability pill */}
            <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 status-pulse-dot" />
              <span>Open to Roles & MS Outreach</span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || pathname?.startsWith(`${link.href}/`);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                    isActive
                      ? "text-sky-400 bg-sky-500/10 font-semibold"
                      : "text-[var(--text-muted)] hover:text-[var(--foreground)] hover:bg-[var(--surface-2)]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Controls: Audience Lens, Search Trigger, Theme Toggle */}
          <div className="flex items-center gap-2">
            {/* Audience Lens Switcher */}
            <div className="hidden sm:flex items-center bg-[var(--surface-2)] border border-[var(--border-subtle)] rounded-lg p-0.5 text-xs">
              {audienceOptions.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setAudience(opt.id)}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md font-medium transition-all ${
                    audience === opt.id
                      ? "bg-[var(--surface-1)] text-[var(--foreground)] shadow-sm font-semibold border border-[var(--border-strong)]"
                      : "text-[var(--text-muted)] hover:text-[var(--foreground)]"
                  }`}
                  title={`Switch to ${opt.label} perspective`}
                >
                  {opt.icon}
                  <span className="hidden md:inline">{opt.label}</span>
                </button>
              ))}
            </div>

            {/* Command Palette Trigger */}
            {onOpenCommandPalette && (
              <button
                onClick={onOpenCommandPalette}
                className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs text-[var(--text-muted)] hover:text-[var(--foreground)] bg-[var(--surface-2)] hover:bg-[var(--surface-3)] border border-[var(--border-subtle)] rounded-lg transition-colors"
                title="Open Command Palette (Ctrl+K)"
                aria-label="Open command palette"
              >
                <Command className="w-3.5 h-3.5" />
                <span className="hidden md:inline font-mono text-[10px] bg-[var(--surface-1)] px-1 py-0.5 rounded border border-[var(--border-subtle)]">
                  ⌘K
                </span>
              </button>
            )}

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-[var(--text-muted)] hover:text-[var(--foreground)] bg-[var(--surface-2)] hover:bg-[var(--surface-3)] border border-[var(--border-subtle)] transition-colors"
              aria-label="Toggle theme"
            >
              {resolvedTheme === "dark" ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-sky-400" />
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg text-[var(--text-muted)] hover:text-[var(--foreground)] bg-[var(--surface-2)] border border-[var(--border-subtle)]"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-b border-[var(--border-subtle)] bg-[var(--background)] px-4 pt-3 pb-6 space-y-3">
          {/* Audience selection in mobile */}
          <div className="space-y-1.5 pb-3 border-b border-[var(--border-subtle)]">
            <div className="text-xs font-semibold text-[var(--text-dim)] uppercase tracking-wider px-1">
              Select Lens
            </div>
            <div className="grid grid-cols-2 gap-1.5">
              {audienceOptions.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => {
                    setAudience(opt.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`flex items-center gap-2 p-2 rounded-md text-xs font-medium border ${
                    audience === opt.id
                      ? "bg-sky-500/10 border-sky-500/30 text-sky-400"
                      : "border-[var(--border-subtle)] bg-[var(--surface-2)] text-[var(--text-muted)]"
                  }`}
                >
                  {opt.icon}
                  <span>{opt.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 text-sm rounded-md font-medium transition-colors ${
                    isActive
                      ? "bg-sky-500/15 text-sky-400 font-semibold"
                      : "text-[var(--text-muted)] hover:bg-[var(--surface-2)] hover:text-[var(--foreground)]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}

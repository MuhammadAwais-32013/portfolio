"use client";

import React, { useState } from "react";
import {
  Mail,
  Send,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { Linkedin, Github } from "@/components/Icons";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Role or Research Inquiry",
    message: "",
    honeypot: "", // anti-spam
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) {
      // Spam caught
      return;
    }

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      return;
    }

    setStatus("submitting");

    // Simulate sending message or fallback to mailto
    setTimeout(() => {
      setStatus("success");
      // Trigger mailto fallback window
      const mailtoUrl = `mailto:awais.ai.eng@gmail.com?subject=${encodeURIComponent(
        `[Portfolio] ${formData.subject} - ${formData.name}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      window.location.href = mailtoUrl;
    }, 600);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-sky-500/10 text-sky-400 border border-sky-500/20">
          <Mail className="w-3.5 h-3.5" />
          <span>Get in Touch</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--foreground)]">
          Let&apos;s Start a Conversation
        </h1>
        <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
          Whether you want to discuss full-stack AI roles, computer vision collaboration, or graduate research opportunities (CSC, ANSO, Italy).
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Contact Form */}
        <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl glass-panel-elevated border border-[var(--border-subtle)] space-y-6">
          <h2 className="text-xl font-bold text-[var(--foreground)]">
            Direct Message Form
          </h2>

          {status === "success" ? (
            <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 space-y-2">
              <div className="flex items-center gap-2 font-bold text-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span>Message Dispatch Initiated!</span>
              </div>
              <p className="text-xs text-[var(--text-muted)]">
                Your email client was opened with your message pre-filled. You can also directly reach me anytime at <strong>awais.ai.eng@gmail.com</strong>.
              </p>
              <button
                onClick={() => {
                  setStatus("idle");
                  setFormData({ name: "", email: "", subject: "Role or Research Inquiry", message: "", honeypot: "" });
                }}
                className="mt-3 text-xs font-semibold text-sky-400 underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Anti-spam honeypot (hidden from real users) */}
              <div className="hidden" aria-hidden="true">
                <input
                  type="text"
                  name="honeypot"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.honeypot}
                  onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[var(--foreground)] mb-1">
                  Your Full Name <span className="text-rose-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g., Dr. Alan Turing / Jane Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--surface-1)] border border-[var(--border-subtle)] text-xs text-[var(--foreground)] placeholder-[var(--text-dim)] focus:outline-none focus:border-sky-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[var(--foreground)] mb-1">
                  Email Address <span className="text-rose-400">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@organization.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--surface-1)] border border-[var(--border-subtle)] text-xs text-[var(--foreground)] placeholder-[var(--text-dim)] focus:outline-none focus:border-sky-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[var(--foreground)] mb-1">
                  Inquiry Nature / Subject
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--surface-1)] border border-[var(--border-subtle)] text-xs text-[var(--foreground)] focus:outline-none focus:border-sky-500"
                >
                  <option value="Full-Stack AI Engineering Role">Full-Stack AI Engineering Role</option>
                  <option value="Graduate Research Mentorship / Lab Inquiry">Graduate Research Mentorship / Lab Inquiry</option>
                  <option value="Traffic Vision FYP Discussion">Traffic Vision FYP Discussion</option>
                  <option value="Contract / Freelance Engineering">Contract / Freelance Engineering</option>
                  <option value="General Technical Inquiry">General Technical Inquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[var(--foreground)] mb-1">
                  Message Details <span className="text-rose-400">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell me about the role, research alignment, or project opportunity..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--surface-1)] border border-[var(--border-subtle)] text-xs text-[var(--foreground)] placeholder-[var(--text-dim)] focus:outline-none focus:border-sky-500 resize-none"
                />
              </div>

              {status === "error" && (
                <div className="flex items-center gap-2 text-xs text-rose-400">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>Please fill in all required fields before submitting.</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full py-3 rounded-xl bg-sky-500 hover:bg-sky-400 disabled:opacity-50 text-slate-950 font-bold text-xs shadow-md flex items-center justify-center gap-2 transition-colors"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{status === "submitting" ? "Preparing Message..." : "Send Message"}</span>
              </button>
            </form>
          )}
        </div>

        {/* Info & Availability Sidebar */}
        <div className="lg:col-span-5 space-y-6">
          {/* Current Status Box */}
          <div className="p-6 rounded-3xl glass-panel border border-emerald-500/30 space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 status-pulse-dot" />
              <span>Current Status</span>
            </div>
            <h3 className="text-base font-bold text-[var(--foreground)]">
              Open to Opportunities
            </h3>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed">
              Actively speaking with engineering recruiters for AI/Full-Stack positions and professors for Fall 2026 / Spring 2027 graduate research supervision.
            </p>
          </div>

          {/* Quick Details */}
          <div className="p-6 rounded-3xl glass-panel border border-[var(--border-subtle)] space-y-4 text-xs">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[var(--surface-2)] text-sky-400">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-[var(--foreground)]">Direct Email</div>
                  <a href="mailto:awais.ai.eng@gmail.com" className="text-sky-400 hover:underline">
                    awais.ai.eng@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[var(--surface-2)] text-sky-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-[var(--foreground)]">Location</div>
                  <span className="text-[var(--text-muted)]">Islamabad, Pakistan (UTC+5)</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[var(--surface-2)] text-sky-400">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-[var(--foreground)]">Response Expectation</div>
                  <span className="text-[var(--text-muted)]">Within 24 hours guaranteed</span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-[var(--border-subtle)] flex items-center gap-3">
              <a
                href="https://github.com/MuhammadAwais"
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-2 text-center rounded-lg bg-[var(--surface-2)] hover:bg-[var(--surface-3)] font-semibold text-xs text-[var(--foreground)] transition-colors border border-[var(--border-subtle)] flex items-center justify-center gap-1.5"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/muhammad-awais-ai"
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-2 text-center rounded-lg bg-[var(--surface-2)] hover:bg-[var(--surface-3)] font-semibold text-xs text-[var(--foreground)] transition-colors border border-[var(--border-subtle)] flex items-center justify-center gap-1.5"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

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
  Copy,
  Check,
  ExternalLink,
  MessageCircle,
} from "lucide-react";
import { Linkedin, Github } from "@/components/Icons";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Full-Stack AI Engineering Role",
    message: "",
    honeypot: "", // anti-spam
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const emailAddress = "muhammad.awais.swe@gmail.com";
  const rawPhoneNumber = "923464617329";
  const displayPhone = "+92 346 4617329";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(displayPhone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const getWhatsAppUrl = (prefillMessage?: string) => {
    const defaultText = "Hi Muhammad Awais, I saw your portfolio and would like to connect regarding an AI opportunity.";
    const text = prefillMessage || defaultText;
    return `https://wa.me/${rawPhoneNumber}?text=${encodeURIComponent(text)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) {
      // Spam caught silently
      return;
    }

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      return;
    }

    setStatus("submitting");

    setTimeout(() => {
      setStatus("success");
      // Trigger secure mailto
      const mailtoUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(
        `[Portfolio] ${formData.subject} - ${formData.name}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`
      )}`;
      window.location.href = mailtoUrl;
    }, 500);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-[var(--accent-surface)] text-[var(--accent)] border border-[var(--accent-border)]">
          <Mail className="w-3.5 h-3.5" />
          <span>Verified Contact Channels</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--foreground)]">
          Let&apos;s Build Together
        </h1>
        <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
          Whether you want to discuss full-stack AI roles, multi-agent pipelines, computer vision research, or graduate mentorship (CSC, ANSO, Italy).
        </p>
      </div>

      {/* Primary Contact Cards Grid (Email + Secure WhatsApp) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Email Card */}
        <div className="p-5 rounded-2xl bg-[var(--surface-1)] border border-[var(--border-subtle)] shadow-xs flex flex-col justify-between space-y-4">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[var(--accent-surface)] text-[var(--accent)]">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-semibold text-[var(--text-dim)] uppercase tracking-wider">Direct Email</span>
                <div className="text-sm sm:text-base font-bold text-[var(--foreground)] font-mono">
                  {emailAddress}
                </div>
              </div>
            </div>
            <button
              onClick={handleCopyEmail}
              className="p-2 rounded-lg bg-[var(--surface-2)] hover:bg-[var(--surface-3)] text-[var(--text-muted)] hover:text-[var(--foreground)] border border-[var(--border-subtle)] transition-colors"
              title="Copy email address"
              aria-label="Copy email address"
            >
              {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
          <div className="flex items-center gap-3 pt-2 border-t border-[var(--border-subtle)]">
            <a
              href={`mailto:${emailAddress}`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[var(--accent)] text-slate-950 font-bold text-xs hover:brightness-110 transition-all"
            >
              <Send className="w-3 h-3" />
              <span>Compose Email</span>
            </a>
            <span className="text-[11px] text-[var(--text-dim)]">Guaranteed response within 24h</span>
          </div>
        </div>

        {/* Secure WhatsApp Card */}
        <div className="p-5 rounded-2xl bg-[var(--surface-1)] border border-emerald-500/30 shadow-xs flex flex-col justify-between space-y-4">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-semibold text-[var(--text-dim)] uppercase tracking-wider">Secure WhatsApp</span>
                <div className="text-sm sm:text-base font-bold text-[var(--foreground)] font-mono">
                  {displayPhone}
                </div>
              </div>
            </div>
            <button
              onClick={handleCopyPhone}
              className="p-2 rounded-lg bg-[var(--surface-2)] hover:bg-[var(--surface-3)] text-[var(--text-muted)] hover:text-[var(--foreground)] border border-[var(--border-subtle)] transition-colors"
              title="Copy phone number"
              aria-label="Copy phone number"
            >
              {copiedPhone ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
          <div className="flex items-center gap-3 pt-2 border-t border-[var(--border-subtle)]">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-xs transition-all"
              title="Open secure WhatsApp chat"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Chat on WhatsApp</span>
              <ExternalLink className="w-3 h-3 opacity-80" />
            </a>
            <span className="text-[11px] text-[var(--text-dim)]">Direct end-to-end encrypted</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Contact Form */}
        <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-[var(--surface-1)] border border-[var(--border-subtle)] shadow-xs space-y-6">
          <h2 className="text-xl font-bold text-[var(--foreground)]">
            Send an Email Message
          </h2>

          {status === "success" ? (
            <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-[var(--foreground)] space-y-3">
              <div className="flex items-center gap-2 font-bold text-sm text-emerald-600 dark:text-emerald-400">
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                <span>Message Dispatch Initiated!</span>
              </div>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                Your email client was opened with your message pre-filled. You can also reach Muhammad Awais directly at <strong className="text-[var(--foreground)]">{emailAddress}</strong> or via WhatsApp at <strong className="text-[var(--foreground)]">{displayPhone}</strong>.
              </p>
              <button
                onClick={() => {
                  setStatus("idle");
                  setFormData({ name: "", email: "", subject: "Full-Stack AI Engineering Role", message: "", honeypot: "" });
                }}
                className="text-xs font-semibold text-[var(--accent)] underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Anti-spam honeypot */}
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
                  Your Full Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Dr. Alex Morgan / Technical Recruiter"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--surface-2)] border border-[var(--border-subtle)] text-xs text-[var(--foreground)] placeholder-[var(--text-dim)] focus:outline-none focus:border-[var(--accent)]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[var(--foreground)] mb-1">
                  Email Address <span className="text-rose-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@organization.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--surface-2)] border border-[var(--border-subtle)] text-xs text-[var(--foreground)] placeholder-[var(--text-dim)] focus:outline-none focus:border-[var(--accent)]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[var(--foreground)] mb-1">
                  Inquiry Nature / Subject
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--surface-2)] border border-[var(--border-subtle)] text-xs text-[var(--foreground)] focus:outline-none focus:border-[var(--accent)]"
                >
                  <option value="Full-Stack AI Engineering Role">Full-Stack AI Engineering Role</option>
                  <option value="Generative AI / Agentic System Project">Generative AI / Agentic System Project</option>
                  <option value="Graduate Research Mentorship / Lab Inquiry">Graduate Research Mentorship / Lab Inquiry</option>
                  <option value="Traffic Vision FYP Discussion">Traffic Vision FYP Discussion</option>
                  <option value="Consulting / Freelance Engineering">Consulting / Freelance Engineering</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[var(--foreground)] mb-1">
                  Message Details <span className="text-rose-500">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell me about the role, technical project scope, or research alignment..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--surface-2)] border border-[var(--border-subtle)] text-xs text-[var(--foreground)] placeholder-[var(--text-dim)] focus:outline-none focus:border-[var(--accent)] resize-none"
                />
              </div>

              {status === "error" && (
                <div className="flex items-center gap-2 text-xs text-rose-500">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>Please fill in all required fields before submitting.</span>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-3 pt-1">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="flex-1 py-3 rounded-xl bg-[var(--accent)] hover:brightness-110 disabled:opacity-50 text-slate-950 font-bold text-xs shadow-xs flex items-center justify-center gap-2 transition-all"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{status === "submitting" ? "Preparing Email..." : "Send Message"}</span>
                </button>

                <a
                  href={getWhatsAppUrl(`Hi Muhammad Awais, my name is ${formData.name || 'a collaborator'}. Regarding: ${formData.subject}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Send via WhatsApp</span>
                </a>
              </div>
            </form>
          )}
        </div>

        {/* Info & Availability Sidebar */}
        <div className="lg:col-span-5 space-y-6">
          {/* Current Status Box */}
          <div className="p-6 rounded-3xl bg-[var(--surface-1)] border border-emerald-500/30 shadow-xs space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-600 dark:text-emerald-400 font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-500 status-pulse-dot" />
              <span>Current Status</span>
            </div>
            <h3 className="text-base font-bold text-[var(--foreground)]">
              Open to AI Roles & MS Research
            </h3>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed">
              Actively speaking with engineering recruiters for AI/Full-Stack positions and professors for Fall 2026 / Spring 2027 graduate research supervision.
            </p>
          </div>

          {/* Quick Details */}
          <div className="p-6 rounded-3xl bg-[var(--surface-1)] border border-[var(--border-subtle)] shadow-xs space-y-4 text-xs">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[var(--surface-2)] text-[var(--accent)]">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-[var(--foreground)]">Email Address</div>
                  <a href={`mailto:${emailAddress}`} className="text-[var(--accent)] hover:underline font-mono">
                    {emailAddress}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-[var(--foreground)]">WhatsApp / Mobile</div>
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-600 dark:text-emerald-400 hover:underline font-mono"
                  >
                    {displayPhone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[var(--surface-2)] text-[var(--accent)]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-[var(--foreground)]">Location</div>
                  <span className="text-[var(--text-muted)]">Islamabad, Pakistan (UTC+5)</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[var(--surface-2)] text-[var(--accent)]">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-[var(--foreground)]">Response Time</div>
                  <span className="text-[var(--text-muted)]">Within 24 hours guaranteed</span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-[var(--border-subtle)] flex items-center gap-3">
              <a
                href="https://github.com/MuhammadAwais-32013"
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-2 text-center rounded-lg bg-[var(--surface-2)] hover:bg-[var(--surface-3)] font-semibold text-xs text-[var(--foreground)] transition-colors border border-[var(--border-subtle)] flex items-center justify-center gap-1.5"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/muhammad-awais32013"
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

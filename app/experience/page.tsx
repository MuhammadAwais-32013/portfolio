import React from "react";
import { Metadata } from "next";
import { getExperience } from "@/lib/content";
import {
  Briefcase,
  GraduationCap,
  Calendar,
  MapPin,
  CheckCircle2,
  BookOpen,
  Award,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Experience & Education | Muhammad Awais",
  description:
    "Engineering track record at NIC Islamabad (stayOvers.pk), international freelance deliveries, and BS Computer Science at NUML.",
};

export default function ExperiencePage() {
  const experience = getExperience();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-[var(--accent-surface)] text-[var(--accent)] border border-[var(--accent-border)]">
          <Briefcase className="w-3.5 h-3.5" />
          <span>Professional & Academic Trajectory</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--foreground)]">
          Work Experience & Education
        </h1>
        <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
          From incubator venture engineering at National Incubation Center (NIC) Islamabad to shipping freelance web apps and academic specialization at NUML.
        </p>
      </div>

      {/* WORK EXPERIENCE SECTION */}
      <section className="space-y-8">
        <div className="flex items-center gap-3 border-b border-[var(--border-subtle)] pb-4">
          <Briefcase className="w-5 h-5 text-[var(--accent)]" />
          <h2 className="text-xl sm:text-2xl font-bold text-[var(--foreground)]">
            Industry Experience
          </h2>
        </div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:left-3 sm:before:left-4 before:w-0.5 before:bg-[var(--border-subtle)]">
          {experience.workExperience.map((exp) => (
            <div key={exp.id} className="relative pl-8 sm:pl-12 space-y-4">
              {/* Timeline marker node */}
              <div className="absolute left-1.5 sm:left-2.5 top-2 w-3.5 h-3.5 rounded-full bg-[var(--accent)] ring-4 ring-[var(--background)] shadow-xs" />

              <div className="p-6 sm:p-8 rounded-3xl bg-[var(--surface-1)] border border-[var(--border-subtle)] shadow-xs space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[var(--foreground)]">
                      {exp.role}
                    </h3>
                    <div className="text-sm font-semibold text-[var(--accent)] mt-0.5">
                      {exp.company}
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-xs font-mono text-[var(--text-dim)]">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                  {exp.description}
                </p>

                <div className="space-y-2">
                  <div className="text-xs font-semibold uppercase tracking-wider text-[var(--text-dim)]">
                    Key Deliverables & Impact:
                  </div>
                  <ul className="space-y-2">
                    {exp.achievements.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text-muted)]">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[var(--border-subtle)]">
                  {exp.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-[var(--surface-2)] text-[var(--text-dim)] border border-[var(--border-subtle)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EDUCATION SECTION */}
      <section className="space-y-8">
        <div className="flex items-center gap-3 border-b border-[var(--border-subtle)] pb-4">
          <GraduationCap className="w-5 h-5 text-[var(--accent)]" />
          <h2 className="text-xl sm:text-2xl font-bold text-[var(--foreground)]">
            Academic Background
          </h2>
        </div>

        <div className="space-y-8">
          {experience.education.map((edu) => (
            <div
              key={edu.id}
              className="p-6 sm:p-8 rounded-3xl bg-[var(--surface-1)] border border-[var(--border-subtle)] shadow-xs space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-[var(--foreground)]">
                    {edu.degree}
                  </h3>
                  <div className="text-sm font-semibold text-[var(--accent)]">
                    {edu.institution}
                  </div>
                  <div className="text-xs text-[var(--text-dim)] flex items-center gap-2">
                    <span>{edu.location}</span>
                    <span>•</span>
                    <span>{edu.period}</span>
                  </div>
                </div>


              </div>

              {/* Thesis Spotlight */}
              <div className="p-4 rounded-xl bg-[var(--surface-2)] border border-[var(--border-subtle)] space-y-1">
                <span className="text-xs font-mono uppercase text-[var(--accent)] font-bold">
                  Final Year Thesis Project:
                </span>
                <p className="text-xs sm:text-sm font-semibold text-[var(--foreground)]">
                  {edu.thesis}
                </p>
              </div>

              {/* Coursework list */}
              <div className="space-y-3">
                <div className="text-xs font-semibold uppercase tracking-wider text-[var(--text-dim)] flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-[var(--accent)]" />
                  <span>Key Completed Coursework:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {edu.coursework.map((course) => (
                    <span
                      key={course}
                      className="px-3 py-1 rounded-lg text-xs font-medium bg-[var(--surface-2)] text-[var(--foreground)] border border-[var(--border-subtle)]"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>

              {/* Academic Highlights */}
              <div className="space-y-2 pt-2 border-t border-[var(--border-subtle)]">
                <div className="text-xs font-semibold uppercase tracking-wider text-[var(--text-dim)] flex items-center gap-2">
                  <Award className="w-4 h-4 text-[var(--accent)]" />
                  <span>Recognitions & Roles:</span>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[var(--text-muted)]">
                  {edu.highlights.map((h, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

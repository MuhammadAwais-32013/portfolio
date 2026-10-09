"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FileText,
  Download,
  Printer,
  CheckCircle2,
  GraduationCap,
  Briefcase,
  Layers,
  Award,
  Mail,
  MapPin,
  ExternalLink,
  MessageCircle,
} from "lucide-react";
import { Github, Linkedin } from "@/components/Icons";

export default function ResumePage() {
  const [activeTab, setActiveTab] = useState<"industry" | "academic">("industry");

  const email = "muhammad.awais.swe@gmail.com";
  const phone = "+92 346 4617329";
  const github = "https://github.com/MuhammadAwais-32013";
  const linkedin = "https://www.linkedin.com/in/muhammad-awais32013";

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 print:py-0 print:px-0">
      {/* Header & Controls (Hidden when printing) */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 print:hidden">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-[var(--accent-surface)] text-[var(--accent)] border border-[var(--accent-border)]">
            <FileText className="w-3.5 h-3.5" />
            <span>Dual Industry & Academic CV</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[var(--foreground)]">
            Curriculum Vitae
          </h1>
        </div>

        <div className="flex items-center gap-3">
          {/* Lens Switcher */}
          <div className="p-1 rounded-xl bg-[var(--surface-1)] border border-[var(--border-subtle)] flex items-center shadow-xs">
            <button
              onClick={() => setActiveTab("industry")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeTab === "industry"
                  ? "bg-[var(--accent)] text-slate-950 font-bold shadow-xs"
                  : "text-[var(--text-muted)] hover:text-[var(--foreground)]"
              }`}
            >
              Industry Track
            </button>
            <button
              onClick={() => setActiveTab("academic")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeTab === "academic"
                  ? "bg-[var(--accent)] text-slate-950 font-bold shadow-xs"
                  : "text-[var(--text-muted)] hover:text-[var(--foreground)]"
              }`}
            >
              Academic Track
            </button>
          </div>

          {/* PDF Download / Print */}
          <a
            href="/CV-Muhammad Awais.pdf"
            download="CV-Muhammad-Awais.pdf"
            className="p-2.5 rounded-xl bg-[var(--surface-1)] hover:bg-[var(--surface-2)] text-[var(--foreground)] border border-[var(--border-subtle)] transition-colors shadow-xs"
            title="Download Official Job CV PDF"
            aria-label="Download Job CV PDF"
          >
            <Download className="w-4 h-4 text-[var(--accent)]" />
          </a>
          <button
            onClick={handlePrint}
            className="p-2.5 rounded-xl bg-[var(--surface-1)] hover:bg-[var(--surface-2)] text-[var(--foreground)] border border-[var(--border-subtle)] transition-colors shadow-xs"
            title="Print or Save as PDF"
            aria-label="Print CV"
          >
            <Printer className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Official CV Document Container */}
      <div className="p-8 sm:p-12 rounded-3xl bg-[var(--surface-1)] border border-[var(--border-subtle)] shadow-xs print:shadow-none print:border-none print:p-0 space-y-8 text-[var(--foreground)]">
        {/* Header Block */}
        <div className="border-b border-[var(--border-subtle)] pb-6 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[var(--foreground)]">
                Muhammad Awais
              </h2>
              <div className="text-sm font-semibold text-[var(--accent)] mt-0.5">
                {activeTab === "industry"
                  ? "Full-Stack AI Engineer • Generative AI & Agentic Systems"
                  : "Graduate Research Applicant • BS Computer Science, NUML"}
              </div>
            </div>

            <div className="text-xs text-[var(--text-dim)] space-y-1 font-mono">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[var(--accent)]" />
                <span>Islamabad, Pakistan</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[var(--accent)]" />
                <a href={`mailto:${email}`} className="hover:underline">{email}</a>
              </div>
              <div className="flex items-center gap-1.5">
                <MessageCircle className="w-3.5 h-3.5 text-emerald-500" />
                <a href="https://wa.me/923464617329" className="hover:underline">{phone}</a>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[var(--text-muted)] pt-1">
            <a href={github} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-[var(--accent)]">
              <Github className="w-3 h-3" /> github.com/MuhammadAwais-32013
            </a>
            <span>•</span>
            <a href={linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-[var(--accent)]">
              <Linkedin className="w-3 h-3" /> linkedin.com/in/muhammad-awais32013
            </a>
          </div>
        </div>

        {/* Positioning / Summary */}
        <div className="space-y-2">
          <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-dim)]">
            {activeTab === "industry" ? "Professional Summary" : "Research Statement Summary"}
          </h3>
          <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
            {activeTab === "industry"
              ? "Full-stack AI engineer with demonstrated expertise in building autonomous multi-agent pipelines (CrewAI, LangGraph), predictive machine learning forecasting (XGBoost), health RAG & OCR architectures, and real-time edge computer vision (YOLOv8, TensorRT at 42 FPS). Proven background shipping production microservices at National Incubation Center (NIC) Islamabad and delivering 20+ freelance contracts."
              : "Graduating senior in Computer Science at NUML specializing in Generative AI, Large Language Models, agentic reasoning loops, and edge computer vision. Authored a 4,200-frame annotated Pakistani roadway dataset and engineered low-latency choke detection architectures. Preparing for Fall 2026 / Spring 2027 MS in Artificial Intelligence / Cybersecurity."}
          </p>
        </div>

        {/* Education (Placed first if Academic) */}
        {activeTab === "academic" && (
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--accent)]">
              Education
            </h3>
            <div className="space-y-2">
              <div className="flex justify-between items-start text-xs sm:text-sm">
                <div>
                  <strong className="text-[var(--foreground)]">
                    Bachelor of Science in Computer Science (BS CS)
                  </strong>
                  <div className="text-[var(--text-muted)]">
                    National University of Modern Languages (NUML), Islamabad
                  </div>
                </div>
                <div className="text-right font-mono text-xs text-[var(--text-dim)]">
                  <span>2022 – 2026</span>
                </div>
              </div>
              <p className="text-xs text-[var(--text-muted)]">
                <strong>Thesis:</strong> Intelligent Urban Traffic Choking Detection & Flow Optimization (Lead Researcher)
              </p>
            </div>
          </div>
        )}

        {/* Experience Section */}
        <div className="space-y-4">
          <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--accent)]">
            Professional Experience
          </h3>

          <div className="space-y-4 text-xs sm:text-sm">
            <div className="space-y-1.5">
              <div className="flex justify-between items-start">
                <div>
                  <strong className="text-[var(--foreground)]">
                    Full-Stack Software Engineering Intern
                  </strong>
                  <div className="text-[var(--accent)] font-medium text-xs">
                    National Incubation Center (NIC) Islamabad — stayOvers.pk
                  </div>
                </div>
                <span className="font-mono text-xs text-[var(--text-dim)]">2024</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-xs text-[var(--text-muted)]">
                <li>Architected clean OOP backend microservices and implemented Role-Based Access Control (RBAC).</li>
                <li>Designed and verified 35+ RESTful API endpoints in Postman with automated assertion collections.</li>
                <li>Participated in bi-weekly Agile sprints, daily scrums, and GitHub PR review cycles.</li>
              </ul>
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between items-start">
                <div>
                  <strong className="text-[var(--foreground)]">
                    Independent Full-Stack & AI Freelancer
                  </strong>
                  <div className="text-[var(--accent)] font-medium text-xs">
                    Fiverr & International Direct Clients
                  </div>
                </div>
                <span className="font-mono text-xs text-[var(--text-dim)]">2023 – Present</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-xs text-[var(--text-muted)]">
                <li>Shipped 20+ production web applications and custom AI workflows with Next.js, React, and Python.</li>
                <li>Built automated data extraction pipelines, vector search integrations, and CI/CD deployments.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="space-y-4">
          <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--accent)]">
            Featured Projects & Systems
          </h3>

          <div className="space-y-3 text-xs sm:text-sm">
            <div className="space-y-1">
              <div className="flex justify-between items-start">
                <strong className="text-[var(--foreground)]">
                  Podcaster Crew — Multi-Agent CrewAI & Gemini TTS
                </strong>
                <span className="font-mono text-xs text-[var(--accent)]">Autonomous Crew & TTS</span>
              </div>
              <p className="text-xs text-[var(--text-muted)]">
                Built autonomous multi-agent pipeline (Researcher, Analyst, Scriptwriter) that performs topical web research, generates two-host dialogue scripts, and synthesizes audio via Gemini TTS.
              </p>
            </div>

            <div className="space-y-1">
              <div className="flex justify-between items-start">
                <strong className="text-[var(--foreground)]">
                  DiaBp Diet Consultant — Flutter & Python Health RAG
                </strong>
                <span className="font-mono text-xs text-[var(--accent)]">RAG + OCR Medical Pipeline</span>
              </div>
              <p className="text-xs text-[var(--text-muted)]">
                Personalized diabetes and hypertension nutrition consultant with OCR medical document parsing and guardrailed clinical guideline retrieval.
              </p>
            </div>

            <div className="space-y-1">
              <div className="flex justify-between items-start">
                <strong className="text-[var(--foreground)]">
                  Sales Forecasting with XGBoost — Time-Series ML
                </strong>
                <span className="font-mono text-xs text-[var(--accent)]">XGBoost Regressor & Lags</span>
              </div>
              <p className="text-xs text-[var(--text-muted)]">
                End-to-end retail demand forecasting pipeline with temporal lag features, rolling windows, and Streamlit interactive deployment.
              </p>
            </div>

            <div className="space-y-1">
              <div className="flex justify-between items-start">
                <strong className="text-[var(--foreground)]">
                  Traffic Choking Detection (FYP) — YOLOv8 & Edge Vision
                </strong>
                <span className="font-mono text-xs text-emerald-600 dark:text-emerald-400">42 FPS | 91.4% mAP</span>
              </div>
              <p className="text-xs text-[var(--text-muted)]">
                Annotated 4,200 Islamabad road frames. Deployed FP16 TensorRT inference reducing frame latency to 23.8ms on edge hardware.
              </p>
            </div>
          </div>
        </div>

        {/* Education (Placed here for Industry CV) */}
        {activeTab === "industry" && (
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--accent)]">
              Education
            </h3>
            <div className="flex justify-between items-start text-xs sm:text-sm">
              <div>
                <strong className="text-[var(--foreground)]">
                  BS Computer Science
                </strong>
                <div className="text-[var(--text-muted)]">
                  National University of Modern Languages (NUML), Islamabad
                </div>
              </div>
              <div className="text-right font-mono text-xs text-[var(--text-dim)]">
                <span>2022 – 2026</span>
              </div>
            </div>
          </div>
        )}

        {/* Technical Skills & Certifications */}
        <div className="space-y-3 pt-2 border-t border-[var(--border-subtle)]">
          <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-dim)]">
            Skills & 18+ Verified Credentials
          </h3>
          <div className="text-xs text-[var(--text-muted)] space-y-1.5">
            <p>
              <strong className="text-[var(--foreground)]">AI/ML & GenAI:</strong> Python, PyTorch, YOLOv8/v11, TensorRT, CrewAI, LangGraph, Gemini API & TTS, Hugging Face, XGBoost, Scikit-Learn, OpenCV, RAG, Qdrant.
            </p>
            <p>
              <strong className="text-[var(--foreground)]">Full-Stack & Systems:</strong> Next.js 16, React 19, TypeScript, Tailwind CSS, FastAPI, Node.js, Flutter / Dart, PostgreSQL, Docker, Git.
            </p>
            <p>
              <strong className="text-[var(--foreground)]">Key Certifications:</strong> DeepLearning.AI ML Specialization (Andrew Ng), Pak Angels GenAI, Hugging Face MCP, Postman Student Expert, Cisco PCAP, DataCamp Python & SQL.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

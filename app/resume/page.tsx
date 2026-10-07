"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Download,
  Printer,
  FileText,
  Briefcase,
  GraduationCap,
  Award,
  CheckCircle2,
  ExternalLink,
  Mail,
  MapPin,
} from "lucide-react";
import { Linkedin, Github } from "@/components/Icons";

export default function ResumePage() {
  const [activeTab, setActiveTab] = useState<"industry" | "academic">("industry");

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      {/* Non-printed header controls */}
      <div className="print:hidden space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h1 className="text-3xl font-extrabold tracking-tight text-[var(--foreground)]">
              Curriculum Vitae
            </h1>
            <p className="text-xs sm:text-sm text-[var(--text-muted)]">
              Choose between tailored Industry and Academic CV layouts.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs shadow-md transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save as PDF</span>
            </button>
          </div>
        </div>

        {/* Tab switchers */}
        <div className="flex items-center p-1 rounded-xl bg-[var(--surface-1)] border border-[var(--border-subtle)] w-fit">
          <button
            onClick={() => setActiveTab("industry")}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
              activeTab === "industry"
                ? "bg-sky-500 text-slate-950 font-bold shadow-sm"
                : "text-[var(--text-muted)] hover:text-[var(--foreground)]"
            }`}
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>Industry CV (Software & AI)</span>
          </button>
          <button
            onClick={() => setActiveTab("academic")}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
              activeTab === "academic"
                ? "bg-purple-600 text-white font-bold shadow-sm"
                : "text-[var(--text-muted)] hover:text-[var(--foreground)]"
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic CV (Research & Graduate)</span>
          </button>
        </div>
      </div>

      {/* PRINTABLE RESUME SHEET */}
      <div className="p-8 sm:p-12 rounded-3xl glass-panel-elevated border border-[var(--border-subtle)] print:border-none print:shadow-none print:p-0 print:bg-white print:text-black space-y-8">
        {/* CV Header */}
        <div className="border-b border-[var(--border-subtle)] print:border-slate-300 pb-6 space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--foreground)] print:text-black tracking-tight">
                Muhammad Awais
              </h2>
              <div className="text-sm font-semibold text-sky-400 print:text-blue-700">
                {activeTab === "industry"
                  ? "Full-Stack AI Engineer • Computer Vision & Agentic Systems"
                  : "Graduate Research Applicant • BS Computer Science, NUML"}
              </div>
            </div>

            <div className="text-xs text-[var(--text-dim)] print:text-slate-600 space-y-1 font-mono">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-sky-400" />
                <span>Islamabad, Pakistan</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-sky-400" />
                <span>awais.ai.eng@gmail.com</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[var(--text-muted)] print:text-slate-600 pt-1">
            <span className="flex items-center gap-1">
              <Github className="w-3 h-3" /> github.com/MuhammadAwais
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Linkedin className="w-3 h-3" /> linkedin.com/in/muhammad-awais-ai
            </span>
            <span>•</span>
            <span>muhammadawais.dev</span>
          </div>
        </div>

        {/* Positioning / Summary */}
        <div className="space-y-2">
          <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-dim)] print:text-slate-500">
            {activeTab === "industry" ? "Professional Summary" : "Research Statement Summary"}
          </h3>
          <p className="text-xs sm:text-sm text-[var(--text-muted)] print:text-slate-800 leading-relaxed">
            {activeTab === "industry"
              ? "Full-stack AI engineer with demonstrated experience in developing end-to-end computer vision pipelines (YOLOv8, TensorRT at 42 FPS), scalable microservices (FastAPI, Next.js, RBAC), and multi-agent LLM systems. Proven track record at National Incubation Center (NIC) Islamabad and freelance client software."
              : "Graduating senior in Computer Science at NUML (CGPA 3.34) specializing in edge computer vision, model quantization, and autonomous multi-agent reasoning. Authored a 4,200-frame annotated Pakistani traffic dataset and engineered low-latency choke detection architectures. Seeking MS in Artificial Intelligence / Cybersecurity."}
          </p>
        </div>

        {/* Education (Placed first if Academic, second if Industry) */}
        {activeTab === "academic" && (
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-purple-400 print:text-purple-700">
              Education
            </h3>
            <div className="space-y-2">
              <div className="flex justify-between items-start text-xs sm:text-sm">
                <div>
                  <strong className="text-[var(--foreground)] print:text-black">
                    Bachelor of Science in Computer Science (BS CS)
                  </strong>
                  <div className="text-[var(--text-muted)] print:text-slate-700">
                    National University of Modern Languages (NUML), Islamabad
                  </div>
                </div>
                <div className="text-right font-mono text-xs text-[var(--text-dim)]">
                  <span>2022 – 2026</span>
                  <div className="text-emerald-400 print:text-emerald-700 font-bold">CGPA: 3.34 / 4.00</div>
                </div>
              </div>
              <p className="text-xs text-[var(--text-muted)] print:text-slate-700">
                <strong>Thesis:</strong> Intelligent Urban Traffic Choking Detection & Flow Optimization (Lead Researcher)
              </p>
            </div>
          </div>
        )}

        {/* Experience Section */}
        <div className="space-y-4">
          <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400 print:text-blue-700">
            Professional Experience
          </h3>

          <div className="space-y-4 text-xs sm:text-sm">
            <div className="space-y-1.5">
              <div className="flex justify-between items-start">
                <div>
                  <strong className="text-[var(--foreground)] print:text-black">
                    Full-Stack Software Engineering Intern
                  </strong>
                  <div className="text-sky-400 print:text-blue-700 font-medium text-xs">
                    National Incubation Center (NIC) Islamabad — stayOvers.pk
                  </div>
                </div>
                <span className="font-mono text-xs text-[var(--text-dim)]">2024</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-xs text-[var(--text-muted)] print:text-slate-700">
                <li>Architected clean OOP backend microservices and implemented Role-Based Access Control (RBAC).</li>
                <li>Designed and verified 35+ RESTful API endpoints in Postman with schema assertion suites.</li>
                <li>Participated in bi-weekly Agile sprints, daily scrums, and GitHub PR reviews.</li>
              </ul>
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between items-start">
                <div>
                  <strong className="text-[var(--foreground)] print:text-black">
                    Independent Full-Stack & AI Freelancer
                  </strong>
                  <div className="text-sky-400 print:text-blue-700 font-medium text-xs">
                    Fiverr & International Direct Clients
                  </div>
                </div>
                <span className="font-mono text-xs text-[var(--text-dim)]">2023 – Present</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-xs text-[var(--text-muted)] print:text-slate-700">
                <li>Shipped 20+ production web applications and custom AI automations with Next.js, React, and Python.</li>
                <li>Integrated Stripe payment flows, JWT authentication, and automated Vercel CI/CD pipelines.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="space-y-4">
          <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400 print:text-blue-700">
            Key Technical Projects
          </h3>

          <div className="space-y-3 text-xs sm:text-sm">
            <div className="space-y-1">
              <div className="flex justify-between items-start">
                <strong className="text-[var(--foreground)] print:text-black">
                  Traffic Choking Detection (FYP) — YOLOv8 & Edge Vision
                </strong>
                <span className="font-mono text-xs text-emerald-400 print:text-emerald-700">42 FPS | 91.4% mAP</span>
              </div>
              <p className="text-xs text-[var(--text-muted)] print:text-slate-700">
                Annotated 4,200 Islamabad road frames. Deployed FP16 TensorRT inference reducing frame latency to 23.8ms.
              </p>
            </div>

            <div className="space-y-1">
              <div className="flex justify-between items-start">
                <strong className="text-[var(--foreground)] print:text-black">
                  AI Smart Health Platform — Full-Stack & Security
                </strong>
                <span className="font-mono text-xs text-sky-400 print:text-blue-700">RBAC | HIPAA-conscious</span>
              </div>
              <p className="text-xs text-[var(--text-muted)] print:text-slate-700">
                Multi-tenant clinical diagnostic triage system with FastAPI, Next.js, and zero reported auth vulnerabilities.
              </p>
            </div>

            <div className="space-y-1">
              <div className="flex justify-between items-start">
                <strong className="text-[var(--foreground)] print:text-black">
                  Multi-Agent Research System — LangGraph & Gemini
                </strong>
                <span className="font-mono text-xs text-purple-400 print:text-purple-700">94.2% Verified Citations</span>
              </div>
              <p className="text-xs text-[var(--text-muted)] print:text-slate-700">
                Autonomous 3-agent supervisor reflection loop for systematic literature survey and fact-checking.
              </p>
            </div>
          </div>
        </div>

        {/* Education (Placed here for Industry CV) */}
        {activeTab === "industry" && (
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400 print:text-blue-700">
              Education
            </h3>
            <div className="flex justify-between items-start text-xs sm:text-sm">
              <div>
                <strong className="text-[var(--foreground)] print:text-black">
                  BS Computer Science
                </strong>
                <div className="text-[var(--text-muted)] print:text-slate-700">
                  National University of Modern Languages (NUML), Islamabad
                </div>
              </div>
              <div className="text-right font-mono text-xs text-[var(--text-dim)]">
                <span>2022 – 2026</span>
                <div className="text-emerald-400 print:text-emerald-700 font-bold">CGPA: 3.34</div>
              </div>
            </div>
          </div>
        )}

        {/* Technical Skills & Certifications */}
        <div className="space-y-3 pt-2 border-t border-[var(--border-subtle)] print:border-slate-300">
          <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-dim)] print:text-slate-500">
            Skills & 14 Verified Credentials
          </h3>
          <div className="text-xs text-[var(--text-muted)] print:text-slate-700 space-y-1">
            <p>
              <strong>AI/ML & Vision:</strong> PyTorch, YOLOv8/v11, OpenCV, TensorRT, LangGraph, Gemini API, RAG, Qdrant.
            </p>
            <p>
              <strong>Web & Backend:</strong> Next.js, React 19, TypeScript, Tailwind CSS, FastAPI, Node.js, PostgreSQL.
            </p>
            <p>
              <strong>Certifications:</strong> Deep Learning Specialization, CNNs, Generative AI (AWS), IBM Cybersecurity, Docker, Postman API Automation, Agile Scrum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

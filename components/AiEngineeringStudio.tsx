"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TrafficSimulationDemo } from "./TrafficSimulationDemo";
import {
  Cpu,
  Bot,
  Layers,
  Sparkles,
  GitBranch,
  ShieldCheck,
  CheckCircle2,
  Terminal,
  Activity,
  ArrowRight,
  Database,
  Lock,
  Play,
  RotateCcw,
} from "lucide-react";

export function AiEngineeringStudio() {
  const [activeTab, setActiveTab] = useState<"vision" | "agents" | "fullstack">("vision");

  // Agentic Demo State
  const [agentStep, setAgentStep] = useState<number>(0);
  const [isRunningAgent, setIsRunningAgent] = useState<boolean>(false);

  const agentSteps = [
    {
      agent: "Supervisor Agent",
      role: "Orchestration & State Machine",
      action: "Receives user query -> Dispatches tasks to parallel specialist nodes in LangGraph.",
      output: "State initialized. Execution graph: [Surveyor] -> [Critic] -> [Synthesizer]",
      status: "Ready",
    },
    {
      agent: "Surveyor Agent",
      role: "Dense Retrieval & ArXiv API",
      action: "Retrieves 18 relevant preprints across CVPR/ECCV. Generates dense embeddings in Qdrant.",
      output: "Retrieved 18 papers. Top match: 'Real-time Edge Quantization on Autonomous Nodes' (Sim: 0.92)",
      status: "Retrieving",
    },
    {
      agent: "Devil's Advocate Agent",
      role: "Empirical Critique & Hallucination Guard",
      action: "Audits methodology claims, checks DOI citations against CrossRef, stresses edge failure cases.",
      output: "Flagged 2 ungrounded claims regarding INT8 accuracy degradation. Requested verification loop.",
      status: "Refining",
    },
    {
      agent: "Synthesizer Agent",
      role: "Consensus Synthesis & Report Gen",
      action: "Resolves critique, computes citation verification score (94.2%), authors verified markdown summary.",
      output: "Report compiled: 0 hallucinations, verified ArXiv DOIs, ready for practitioner deployment.",
      status: "Completed",
    },
  ];

  const handleRunAgentSimulation = () => {
    setIsRunningAgent(true);
    setAgentStep(0);

    let current = 0;
    const interval = setInterval(() => {
      current += 1;
      if (current >= agentSteps.length) {
        clearInterval(interval);
        setIsRunningAgent(false);
      } else {
        setAgentStep(current);
      }
    }, 1200);
  };

  const tabs = [
    {
      id: "vision",
      label: "Edge Computer Vision",
      tag: "YOLOv8 • 42 FPS • 91.4% mAP",
      icon: <Cpu className="w-4 h-4 text-sky-400" />,
      pillar: "AI Researcher & Vision Engineer",
    },
    {
      id: "agents",
      label: "Generative & Agentic AI",
      tag: "LangGraph • 3-Agent Reflection Loop",
      icon: <Bot className="w-4 h-4 text-purple-400" />,
      pillar: "GenAI & Agent Systems",
    },
    {
      id: "fullstack",
      label: "Full-Stack AI Architecture",
      tag: "FastAPI • Next.js • RBAC • Docker",
      icon: <Layers className="w-4 h-4 text-emerald-400" />,
      pillar: "Full-Stack AI Engineer",
    },
  ];

  return (
    <div className="rounded-3xl glass-panel-elevated border border-[var(--border-strong)] overflow-hidden shadow-2xl">
      {/* Top Header & Tab Switchers - 8pt spacing and 44px+ touch targets */}
      <div className="p-6 sm:p-8 border-b border-[var(--border-subtle)] bg-[var(--surface-1)]">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-sky-400 status-pulse-dot" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400">
                Interactive Engineering & Research Studio
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--foreground)] tracking-tight">
              Test Live Systems & Architectures
            </h3>
          </div>

          <span className="text-xs font-mono text-[var(--text-dim)] hidden sm:block">
            Choose a pillar to inspect live execution
          </span>
        </div>

        {/* Tab Pills with 48px min-height for comfortable touch targets per ui-ux-pro-max */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-2 rounded-2xl bg-[var(--surface-2)] border border-[var(--border-subtle)]">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`relative min-h-[48px] flex flex-col items-start justify-center p-3 sm:p-4 rounded-xl text-left transition-all focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:outline-none ${
                  isActive ? "text-[var(--foreground)]" : "text-[var(--text-muted)] hover:text-[var(--foreground)]"
                }`}
                aria-selected={isActive}
                role="tab"
              >
                {isActive && (
                  <motion.div
                    layoutId="activeStudioTab"
                    className="absolute inset-0 bg-[var(--surface-1)] rounded-xl border border-[var(--border-strong)] shadow-md"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <div className="relative z-10 flex items-center gap-2 font-bold text-xs sm:text-sm">
                  {tab.icon}
                  <span>{tab.label}</span>
                </div>
                <div className="relative z-10 text-[11px] font-mono text-[var(--text-dim)] mt-0.5">
                  {tab.tag}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Studio Body with AnimatePresence */}
      <div className="p-6 sm:p-8 min-h-[440px] flex flex-col justify-center bg-[var(--background-alt)]">
        <AnimatePresence mode="wait">
          {/* TAB 1: EDGE COMPUTER VISION */}
          {activeTab === "vision" && (
            <motion.div
              key="vision"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[var(--text-muted)] pb-3 border-b border-[var(--border-subtle)]">
                <div>
                  <strong className="text-[var(--foreground)]">Pillar Focus:</strong> Real-time Object Detection & Spatial Choke Vector Estimation
                </div>
                <div className="font-mono text-sky-400 font-bold">
                  Bespoke 4,200-Frame Islamabad Dataset
                </div>
              </div>
              <TrafficSimulationDemo />
            </motion.div>
          )}

          {/* TAB 2: GENERATIVE & AGENTIC AI SIMULATOR */}
          {activeTab === "agents" && (
            <motion.div
              key="agents"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-2xl bg-[var(--surface-1)] border border-[var(--border-subtle)]">
                <div className="space-y-1">
                  <div className="text-xs font-mono font-bold text-purple-400 uppercase tracking-wider">
                    LangGraph Hierarchical Multi-Agent Pipeline
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-[var(--foreground)]">
                    Autonomous Literature Review & Reflection Verification
                  </h4>
                </div>

                <button
                  onClick={handleRunAgentSimulation}
                  disabled={isRunningAgent}
                  className="inline-flex items-center justify-center gap-2 min-h-[44px] px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 disabled:opacity-50 text-white font-bold text-xs shadow-md transition-all self-start sm:self-center focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:outline-none"
                >
                  {isRunningAgent ? (
                    <>
                      <Activity className="w-4 h-4 animate-spin" />
                      <span>Executing Workflow...</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4" />
                      <span>Simulate 3-Agent Reflection</span>
                    </>
                  )}
                </button>
              </div>

              {/* Step Visualization Nodes */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {agentSteps.map((step, idx) => {
                  const isCurrent = isRunningAgent && agentStep === idx;
                  const isPassed = agentStep > idx;

                  return (
                    <div
                      key={step.agent}
                      className={`p-5 rounded-2xl border transition-all ${
                        isCurrent
                          ? "bg-purple-500/15 border-purple-500/50 shadow-lg ring-1 ring-purple-500/40"
                          : isPassed
                          ? "bg-[var(--surface-1)] border-emerald-500/30 text-[var(--foreground)]"
                          : "bg-[var(--surface-1)] border-[var(--border-subtle)] opacity-75"
                      }`}
                    >
                      <div className="flex items-center justify-between text-xs font-mono mb-2.5">
                        <span className="font-bold text-purple-400">Node 0{idx + 1}</span>
                        {isPassed ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        ) : isCurrent ? (
                          <span className="w-2.5 h-2.5 rounded-full bg-purple-400 status-pulse-dot" />
                        ) : (
                          <span className="text-[10px] text-[var(--text-dim)]">Pending</span>
                        )}
                      </div>

                      <h5 className="text-sm font-bold text-[var(--foreground)]">{step.agent}</h5>
                      <p className="text-[11px] text-sky-400 font-mono mt-0.5">{step.role}</p>

                      <p className="text-xs text-[var(--text-muted)] mt-2.5 leading-relaxed">
                        {step.action}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Console Output Terminal */}
              <div className="p-5 rounded-2xl bg-[var(--code-bg)] border border-[var(--border-subtle)] font-mono text-xs space-y-2.5">
                <div className="flex items-center justify-between text-[11px] text-[var(--text-dim)] border-b border-[var(--border-subtle)] pb-2.5">
                  <div className="flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-sky-400" />
                    <span>Agent Runtime Telemetry</span>
                  </div>
                  <span>Deterministic Tool Sandbox Active</span>
                </div>
                <div className="space-y-1.5 text-slate-300">
                  <p className="text-emerald-400">&gt; Query: &quot;Quantization loss mitigation in YOLOv8 & TensorRT edge pipelines&quot;</p>
                  <p className="text-slate-400">&gt; Active Agent: <strong className="text-purple-300">{agentSteps[agentStep]?.agent}</strong></p>
                  <p className="text-sky-300">&gt; Output: {agentSteps[agentStep]?.output}</p>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 3: FULL-STACK AI PRODUCTION ARCHITECTURE */}
          {activeTab === "fullstack" && (
            <motion.div
              key="fullstack"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              <div className="p-5 rounded-2xl bg-[var(--surface-1)] border border-[var(--border-subtle)]">
                <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
                  Production Full-Stack AI System Design
                </div>
                <h4 className="text-sm sm:text-base font-bold text-[var(--foreground)] mt-1">
                  End-to-End Enterprise Architecture: Front-End &rarr; Secure Gateway &rarr; Edge/Agent Engines
                </h4>
              </div>

              {/* Visual System Diagram */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {/* Layer 1: Client & Next.js */}
                <div className="p-6 rounded-2xl bg-[var(--surface-1)] border border-[var(--border-subtle)] space-y-3.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-sky-400 font-mono">
                    <Layers className="w-4 h-4" />
                    <span>1. Client & UX Layer</span>
                  </div>
                  <ul className="text-xs space-y-2 text-[var(--text-muted)] leading-relaxed">
                    <li>&bull; Next.js 16 App Router (SSR & Partial Prerendering)</li>
                    <li>&bull; React 19 Client State & optimistic telemetry</li>
                    <li>&bull; Responsive design system with Tailwind CSS</li>
                    <li>&bull; Sub-100ms LCP & 98+ Lighthouse score</li>
                  </ul>
                </div>

                {/* Layer 2: API Gateway & Security */}
                <div className="p-6 rounded-2xl bg-[var(--surface-1)] border border-[var(--border-subtle)] space-y-3.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 font-mono">
                    <ShieldCheck className="w-4 h-4" />
                    <span>2. Gateway & RBAC Security</span>
                  </div>
                  <ul className="text-xs space-y-2 text-[var(--text-muted)] leading-relaxed">
                    <li>&bull; FastAPI Async REST Microservices</li>
                    <li>&bull; Strict Role-Based Access Control (RBAC)</li>
                    <li>&bull; JWT session verification & rate limiters</li>
                    <li>&bull; 0 reported auth bypasses across audits</li>
                  </ul>
                </div>

                {/* Layer 3: Inference & Vector Storage */}
                <div className="p-6 rounded-2xl bg-[var(--surface-1)] border border-[var(--border-subtle)] space-y-3.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-purple-400 font-mono">
                    <Database className="w-4 h-4" />
                    <span>3. AI Runtime & Persistence</span>
                  </div>
                  <ul className="text-xs space-y-2 text-[var(--text-muted)] leading-relaxed">
                    <li>&bull; TensorRT FP16 Edge Inference (42 FPS)</li>
                    <li>&bull; LangGraph state machine & agent loop</li>
                    <li>&bull; PostgreSQL with AES-256 field encryption</li>
                    <li>&bull; Qdrant Vector Store for sub-800ms dense RAG</li>
                  </ul>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span className="font-semibold text-emerald-300">
                  Proven in production at National Incubation Center (NIC) Islamabad (stayOvers.pk) & Smart Health Platform.
                </span>
                <span className="font-mono text-emerald-400 font-bold shrink-0">100% Type-Safe</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

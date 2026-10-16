"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FileText,
  Download,
  Printer,
  Mail,
  MapPin,
  ExternalLink,
  MessageCircle,
} from "lucide-react";
import { Github, Linkedin } from "@/components/Icons";

/* -------------------------------------------------------------------------- */
/*  Types                                                                     */
/* -------------------------------------------------------------------------- */

type Track = "industry" | "academic";

type LinkItem = { label: string; href: string };

type EntryData = {
  title: string;
  subtitle?: string;
  date?: string;
  tech?: string;
  links?: LinkItem[];
  bullets?: string[];
};

type Cert = { name: string; issuer?: string; href?: string };

/* -------------------------------------------------------------------------- */
/*  Profile / contact                                                         */
/* -------------------------------------------------------------------------- */

const email = "dev.muhammadowais@gmail.com";
const phone = "+92 346 4617329";
const whatsapp = "https://wa.me/923464617329";
const github = "https://github.com/MuhammadAwais-32013";
const linkedin = "https://linkedin.com/in/muhammad-awais32013";
const portfolio = "https://muhammad-awais-swe.vercel.app";

// PDFs placed in /public. Rename here if your filenames differ.
const PDF_FILES: Record<Track, { href: string; download: string; title: string }> = {
  industry: {
    href: "/CV-Muhammad_Awais_AI-FullStack.pdf",
    download: "CV-Muhammad_Awais_AI-FullStack.pdf",
    title: "Download Industry CV (PDF)",
  },
  academic: {
    href: "/Muhammad_Awais_Academic_CV.pdf",
    download: "Muhammad_Awais_Academic_CV.pdf",
    title: "Download Academic CV (PDF)",
  },
};

/* -------------------------------------------------------------------------- */
/*  Shared data                                                               */
/*  NOTE: an empty href ("") hides that link. All links below come from the  */
/*  hyperlinks embedded in your two CV PDFs.                                  */
/* -------------------------------------------------------------------------- */

// The two CVs link to different DiaBP repos (web app vs. mobile app).
const diabpWebLinks: LinkItem[] = [
  { label: "GitHub", href: "https://github.com/MuhammadAwais-32013/Dietplanner_Web_APP" },
];
const diabpMobileLinks: LinkItem[] = [
  { label: "GitHub", href: "https://github.com/MuhammadAwais-32013/DietPlanner_mobile-app" },
];
const articleSiftLinks: LinkItem[] = [
  { label: "GitHub", href: "https://github.com/MuhammadAwais-32013/Article-Generator_Hackathon_Project" },
];

/* -------------------------------------------------------------------------- */
/*  INDUSTRY CV DATA                                                          */
/* -------------------------------------------------------------------------- */

const industry = {
  tagline: "AI Engineer | Full-Stack Developer | Generative AI & Agentic AI",
  summary:
    "AI and full-stack engineer (BS Computer Science, CGPA 3.34/4.00) who builds Generative AI, agentic and computer vision applications end to end: LLM/RAG pipelines and multi-agent workflows, React/Next.js frontends and FastAPI/Node.js backends. Experience from an internship at National Incubation Center (NIC) Islamabad and freelance delivery for international clients, with deployments on Azure, Vercel and Netlify. Use AI coding assistants to accelerate development, debugging, testing and research.",
  skills: [
    {
      label: "Generative & Agentic AI",
      text: "LLMs, RAG, Agentic AI / Multi-Agent Systems, CrewAI, LangChain, MCP, Prompt Engineering, Gemini & OpenAI APIs, FAISS (vector search)",
    },
    {
      label: "ML & Computer Vision",
      text: "Machine Learning, NLP, Computer Vision, YOLOv8, OpenCV, Sentence Transformers, OCR",
    },
    {
      label: "Full-Stack",
      text: "React.js, Next.js, Node.js, FastAPI, REST APIs, WebSockets, Tailwind CSS",
    },
    {
      label: "Languages & Databases",
      text: "Python, JavaScript, TypeScript, SQL, SQLite, SQLAlchemy",
    },
    {
      label: "Cloud & DevOps",
      text: "Microsoft Azure, Docker, CI/CD, Vercel, Netlify, Git, GitHub, Postman",
    },
    {
      label: "AI-Assisted Development",
      text: "AI coding assistants for programming, debugging, testing, research and solution development",
    },
  ],
  experience: [
    {
      title: "AI Engineer  — Full Stack",
      subtitle: "National Incubation Center (NIC), Islamabad",
      date: "Jan 2026 – Mar 2026",
      bullets: [
        "Engineered a production-grade tourism platform (stayOvers.pk) with AI-assisted booking workflows and strictly enforced RBAC for Guest, Host and Admin roles.",
        "Architected a modular OOP backend, resolved critical bottlenecks through structured debugging, and maintained Git branching workflows with Postman API test suites; used AI coding assistants for debugging, test generation and documentation.",
        "Worked in Agile sprints with daily stand-ups, collaborating with cross-functional teams to align technical deliverables with business goals.",
      ],
    },
    {
      title: "Freelance Software Developer",
      subtitle: "Fiverr — Remote, International Clients",
      date: "May 2024 – Aug 2025",
      bullets: [
        "Designed and delivered responsive full-stack web applications for international clients using React, Next.js and Python.",
        "Integrated RESTful APIs for secure payment processing and user authentication; optimized backend queries to reduce application load times.",
        "Owned projects end to end, from architecture to deployment on Vercel and Netlify, meeting tight deadlines with high client satisfaction.",
      ],
    },
  ] as EntryData[],
  projects: [
    {
      title: "Real-Time Traffic Choking Detection (Final Year Project)",
      tech: "YOLOv8 · OpenCV · Python · Computer Vision · FastAPI · React",
      links: [
        { label: "Dataset", href: "https://www.kaggle.com/datasets/muhammadawaisqrni/yolo-numl-dataset-1-0" },
        { label: "Training notebook", href: "https://github.com/MuhammadAwais-32013/FYP_Yolo_Fine-Tuning" },
        { label: "GitHub", href: "https://github.com/MuhammadAwais-32013/podcaster_crew" },
      ],
      bullets: [
         "Role:  AI engineer in a team of three, responsible for the full pipeline from data collection and annotation through model training and evaluation to integration with the web application.",
        "Built a real-time congestion detection system on a custom YOLOv8 model trained on a self-collected, self-annotated dataset of local traffic videos and images.",
        "Fine-tuned the detector to classify roads as free-flow or choked and optimized the OpenCV inference pipeline for FPS using data augmentation and threshold tuning.",
        "Integrated the model into a web application with an interactive dashboard for real-time traffic monitoring and status alerts.",
      ],
    },
    {
      title: "DiaBP Diet Consultant — RAG-Powered Health Assistant",
      tech: "Next.js · FastAPI · Gemini · FAISS · RAG",
      links: diabpWebLinks,
      bullets: [
        "Built a full-stack AI health assistant for diabetes and hypertension patients (Next.js frontend, FastAPI backend) with secure authentication, health tracking, an admin dashboard and Docker deployment.",
        "Implemented a Retrieval-Augmented Generation pipeline (Gemini, FAISS, Sentence Transformers) that grounds a WebSocket chatbot and personalized multi-week diet plans in medical literature; added OCR to extract data from uploaded medical documents.",
      ],
    },
    {
      title: "Multi-Agent Content Generation System",
      tech: "CrewAI · Gemini · LiteLLM · Python",
      links: [
        {
          label: "GitHub",
          href: "https://github.com/MuhammadAwais-32013/Crewai_Agents/blob/main/Researcher_Writer_Editor_Agent.ipynb",
        },
      ],
      bullets: [
        "Built a multi-agent pipeline using CrewAI in which Planner, Writer and Editor agents collaborate to turn a topic into a polished, SEO-optimized blog article.",
        "Defined agent roles, goals and task-level expected outputs (content plan, structured draft, edited final copy), powered by Google Gemini through LiteLLM.",
      ],
    },
    {
      title: "ArticleSift — AI News Intelligence Platform",
      tech: "LLaMA 3.1 · Streamlit · Google Search API · gTTS",
      links: articleSiftLinks,
      bullets: [
        "Built an LLM-powered news Q&A application using LLaMA 3.1 and the Google Custom Search API to fetch, analyze and answer questions about real-time articles.",
        "Engineered an NLP backend with 5 endpoints (fetch, Q&A, summarize, audio, links), gTTS narration and multi-language translation (English, Urdu, Spanish, French).",
      ],
    },
  ] as EntryData[],
  education: {
    title: "National University of Modern Languages (NUML)",
    subtitle: "Bachelor of Science in Computer Science — CGPA: 3.34/4.00",
    date: "Jan 2022 – Jan 2026",
    coursework:
      "Probability & Statistics, Linear Algebra, Data Structures & Algorithms, Database Systems, Machine Learning",
  },
  certifications: [
    { name: "Agentic AI Level 2 Developer", issuer: "PIAIC" },
    { name: "Machine Learning Specialization", issuer: "DeepLearning.AI" },
    { name: "MCP Automation in Production", issuer: "Hugging Face" },
    { name: "PCAP: Programming Essentials in Python", issuer: "Cisco" },
    { name: "Generative AI: Prompt Engineering", issuer: "IBM" },
    { name: "SQL Certification", issuer: "DataCamp" },
    { name: "Computer Vision & YOLO Object Detection" },
    { name: "Postman API Fundamentals Expert" },
  ] as Cert[],
};

/* -------------------------------------------------------------------------- */
/*  ACADEMIC CV DATA                                                          */
/* -------------------------------------------------------------------------- */

const academic = {
  location: "Pakistan",
  profile:
    "Computer Science graduate seeking an M.S. in Artificial Intelligence / Computer Science. I build and evaluate AI systems that must work reliably outside the lab: a real-time traffic perception system (YOLOv8 with multi-object tracking) and LLM-based applications and multi-agent pipelines. I am interested in measuring whether such systems can be trusted: how detection errors propagate into decisions, and when vision-language models and LLM agents can complement purpose-built pipelines in low-resource, heterogeneous settings.",
  education: {
    title: "National University of Modern Languages (NUML), Islamabad, Pakistan",
    subtitle: "B.S. in Computer Science",
    date: "Feb 2022 – Feb 2026",
    cgpa: "CGPA 3.34 / 4.00",
    bullets: [
      "Relevant coursework (grade): Artificial Intelligence (A), Data Structures & Algorithms (A+), Design & Analysis of Algorithms (A), Probability & Statistics (A+), Linear Algebra (B), Computer Graphics (A).",
      "Final Year Project (FYP-I, FYP-II): grade A in both.",
    ],
  },
  interests: [
    {
      label: "Primary",
      text: "Computer vision: real-time detection and tracking for traffic video analytics, extending to vision-language models for open-vocabulary scene understanding.",
    },
    {
      label: "Secondary",
      text: "Retrieval-augmented generation (agentic and graph-based RAG) and evaluation of LLM systems; LLM agents and multi-agent systems; generative AI applications.",
    },
  ],
  projects: [
    {
      title: "Real-Time Traffic Choking Point Detector (Final Year Project)",
      tech: "Team of three | YOLOv8, ByteTrack, OpenCV, FastAPI, React",
      links: [
        { label: "Dataset", href: "https://www.kaggle.com/datasets/muhammadawaisqrni/yolo-numl-dataset-1-0" },
        { label: "Training notebook", href: "https://github.com/MuhammadAwais-32013/FYP_Yolo_Fine-Tuning" },
        { label: "GitHub", href: "https://github.com/MuhammadAwais-32013/podcaster_crew" },
      ],
      bullets: [
        "Role:  AI engineer in a team of three, responsible for the full pipeline from data collection and annotation through model training and evaluation to integration with the web application.",
        " Built a real-time congestion monitoring system for two Islamabad junctions (NUML Gate, 7-Up Chowk). Collected and annotated a four-class traffic dataset (1,642 images, 6,612 labelled objects; classes: Controller, Human, NUML bus, vehicle; 80/10/10 train/val/test split) and fine-tuned YOLOv8n (3.0M parameters, 6.3 MB) for 282 epochs (best epoch 232, about 2.7 h on a cloud GPU), combined with ByteTrack for multi-object tracking.",
        "Validation results: mAP@50 89.5%, mAP@50–95 59.3%, precision 86.4%, recall 84.7%. Per-class mAP@50: Controller 96.6%, NUML bus 95.3%, vehicle 88.0%, Human 78.2%.",
        "Held-out test results (162 images, 799 instances): mAP@50 89.1%, mAP@50–95 54.8%, precision 82.2%, recall 86.8%. Per-class mAP@50: NUML bus 95.9%, Controller 94.2%, vehicle 89.7%, Human 76.6%.",
        "Inference and error analysis: 3.1–5.7 ms per image on a Tesla T4 (Kaggle/Colab sessions). The confusion  matrix shows errors are mostly background false positives (Human, vehicle) rather than class mix-ups; Human is the weakest class.",
        "Integrated with Application Combined the detector with ByteTrack for persistent IDs and count-based congestion rules; alerts are served through a FastAPI backend to a React monitoring dashboard and SMS.",
      ],
    },
    {
      title: "DiaBP Diet Consultant: RAG-Powered Health Assistant",
      tech: "FastAPI, Gemini, FAISS, Sentence Transformers, Next.js, Flutter, Docker",
      links: diabpMobileLinks,
      bullets: [
        "Retrieval-augmented pipeline (Gemini, FAISS, Sentence Transformers) that grounds a WebSocket chatbot and personalised multi-week diet plans for diabetes and hypertension patients in medical literature; OCR extracts data from uploaded medical documents; authentication, health tracking and admin dashboard; GitHub Actions workflow for Azure deployment.",
        "In progress: formal groundedness and hallucination evaluation against a no-retrieval baseline.",
      ],
    },
    {
      title: "Podcaster Crew: Multi-Agent LLM Pipeline",
      tech: "CrewAI, Gemini, tool calling, speech synthesis",
      links: [{ label: "GitHub", href: "https://github.com/MuhammadAwais-32013/podcaster_crew" }],
      bullets: [
        "Role-specialised agents (researcher, reporting analyst, scriptwriter) with web-search tool use turn a topic into a scripted audio podcast via Gemini speech synthesis; planned comparison with a single-prompt baseline on citation correctness and unsupported claims.",
      ],
    },
    {
      title: "ArticleSift: LLM News Question-Answering",
      tech: "LLaMA 3.1, Google Custom Search API, Streamlit, gTTS",
      links: articleSiftLinks,
      bullets: [
        "Retrieves and analyses live news for question answering and summarisation; five API endpoints, audio narration, and translation into Urdu, English, Spanish and French.",
      ],
    },
    {
      title: "Sales Demand Forecasting with XGBoost",
      tech: "Matplotlib, Seaborn, Xgboost, Scikit-learn, Numpy, Pandas",
      links: [
        { label: "GitHub", href: "https://github.com/MuhammadAwais-32013/Sales-forecast-forecasting-model-XGBOOST/" },
      ],
      bullets: [
        "Built an end-to-end forecasting pipeline using XGBoost with lag, rolling-window (4-period mean and standard deviation) and calendar features; R² = 0.92 on a held-out test set (training R² = 0.97).",
      ],
    },
  ] as EntryData[],
  skills: [
    {
      label: "Machine learning & vision",
      text: "Ultralytics YOLOv8 (PyTorch-based), OpenCV, ByteTrack, OCR, Sentence Transformers",
    },
    {
      label: "LLM systems",
      text: "retrieval-augmented generation (FAISS), CrewAI, LangChain, LangGraph, Model Context Protocol, Gemini and OpenAI APIs, prompt engineering",
    },
    {
      label: "Programming & systems",
      text: "Python, SQL, JavaScript/TypeScript; FastAPI, WebSockets, React/Next.js, Docker, Git, Azure",
    },
  ],
  teaching: {
    title: "A-Level Tutor (Hybrid) Part Time",
    subtitle: "Private tutoring, online and in person",
    date: "May 2024 – Apr 2026",
    bullets: [
      "Taught A-Level students in a hybrid format, moving from theory to practical application of each topic.",
    ],
  } as EntryData,
  experience: [
    {
      title: "AI Engineer (Full Stack)",
      subtitle: "National Incubation Center (NIC), Islamabad",
      date: "Jan 2026 – Mar 2026",
      bullets: [
        "Contributed to a tourism platform (stayOvers.pk) with AI-assisted booking RAG and role-based access control for guest, host and admin users; modular object-oriented backend, Git branching and Postman API test suites; Agile sprints and daily stand-ups.",
      ],
    },
    {
      title: "Freelance Software Developer",
      subtitle: "Fiverr, remote (international clients)",
      date: "May 2024 – Aug 2025",
      bullets: [
        "Delivered full-stack web applications (React, Next.js, Python) with payment and authentication APIs, deployed on Vercel and Netlify.",
      ],
    },
  ] as EntryData[],
  honors: [
    "8th place, national-level Generative AI Hackathon (remote), Pakistan.",
    "Participant in three international online hackathons.",
  ],
  certifications: [
    { name: "Machine Learning Specialization", issuer: "Stanford Online and Coursera", href: "https://www.coursera.org/account/accomplishments/specialization/81JLU4VSH0H2" },
    { name: "Computer Vision: YOLO Custom Object Detection", issuer: "Coursera", href: "https://www.coursera.org/account/accomplishments/verify/78L3IAYCH35L" },
    { name: "Agentic AI Level 2 Engineer", issuer: "Panaversity", href: "https://www.panaversity.org/p/owaisq2019-c0rc" },
    { name: "Generative AI Application Developer", issuer: "Pak Angels, Silicon Valley, CA, USA", href: "https://credsverse.com/credentials/38554b23-a822-4f83-b56a-a60d6768d540?preview=1" },
  ] as Cert[],
  events: [
    { text: "Attendee, 4th Intl. Conf. on Engineering & Computing Tech. (ICECT 2025), NUML Islamabad." },
    {
      text: "Attendee, AI Summit 2023, Islamabad.",
      // Note: this URL uses the account name "MuhammadAwais-2013" (not -32013) exactly as in your PDF.
      href: "https://github.com/MuhammadAwais-2013/Certifications/blob/main/Ai%20summit%202023.pdf",
    },
    { text: "Team member (Job Fair pavilion), Indus AI Week 2026, Pakistan’s national AI event, Islamabad." },
    {
      text: "Campus Outreach Deputy Head and Technology/AI Lead, CareCascade: led the technology and AI side and delivered three in-person AI and technology sessions reaching about 250–300 students.",
    },
  ] as { text: string; href?: string }[],
  references: [
    {
      name: "Muhammad Naveed Alam (FYP supervisor)",
      lines: [
        "Assistant Professor and former Head of Department",
        "Department of Computer Science, NUML Islamabad",
        "+92 51 9265100, Ext. 2063",
      ],
      email: "nalam@numl.edu.pk",
    },
    {
      name: "Dr. Ata Ullah (Dean)",
      lines: [
        "Associate Professor",
        "Department of Computer Science, NUML Islamabad",
        "+92 51 9265100, Ext. 2700",
      ],
      email: "aullah@numl.edu.pk",
    },
  ],
};

/* -------------------------------------------------------------------------- */
/*  Small presentational helpers                                              */
/* -------------------------------------------------------------------------- */

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-3">
      <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--accent)] border-b border-[var(--border-subtle)] pb-1.5">
        {title}
      </h3>
      {children}
    </section>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="list-disc pl-5 space-y-1 text-xs text-[var(--text-muted)] leading-relaxed marker:text-[var(--text-dim)]">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

function TextLink({ href, children }: { href?: string; children: React.ReactNode }) {
  if (!href) return null;
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="inline-flex items-center gap-0.5 text-xs font-semibold text-[var(--accent)] hover:underline"
    >
      {children}
      <ExternalLink className="w-3 h-3" />
    </a>
  );
}

function Entry({ title, subtitle, date, tech, links, bullets }: EntryData) {
  return (
    <div className="space-y-1.5">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 space-y-0.5">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-0.5">
            <strong className="text-sm text-[var(--foreground)]">{title}</strong>
            {links?.map((l) => (
              <TextLink key={l.label} href={l.href}>
                {l.label}
              </TextLink>
            ))}
          </div>
          {subtitle && (
            <div className="text-xs font-medium text-[var(--accent)]">{subtitle}</div>
          )}
          {tech && (
            <div className="text-[11px] font-mono text-[var(--text-dim)]">{tech}</div>
          )}
        </div>
        {date && (
          <span className="shrink-0 text-right font-mono text-xs text-[var(--text-dim)]">
            {date}
          </span>
        )}
      </div>
      {bullets && <Bullets items={bullets} />}
    </div>
  );
}

function SkillRows({ rows }: { rows: { label: string; text: string }[] }) {
  return (
    <div className="space-y-1.5 text-xs text-[var(--text-muted)] leading-relaxed">
      {rows.map((r) => (
        <p key={r.label}>
          <strong className="text-[var(--foreground)]">{r.label}:</strong> {r.text}
        </p>
      ))}
    </div>
  );
}

function CVHeader({
  tagline,
  location,
}: {
  tagline: string;
  location?: string;
}) {
  return (
    <header className="border-b border-[var(--border-subtle)] pb-6 space-y-3 text-center">
      <div>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[var(--foreground)]">
          Muhammad Awais
        </h2>
        <div className="text-sm font-semibold text-[var(--accent)] mt-1">{tagline}</div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-xs font-mono text-[var(--text-dim)]">
        {location && (
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[var(--accent)]" />
            {location}
          </span>
        )}
        <a href={whatsapp} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:underline">
          <MessageCircle className="w-3.5 h-3.5 text-emerald-500" />
          {phone}
        </a>
        <a href={`mailto:${email}`} className="flex items-center gap-1.5 hover:underline">
          <Mail className="w-3.5 h-3.5 text-[var(--accent)]" />
          {email}
        </a>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-xs font-mono text-[var(--text-muted)]">
        <a href={github} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-[var(--accent)]">
          <Github className="w-3 h-3" /> github.com/MuhammadAwais-32013
        </a>
        <a href={linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-[var(--accent)]">
          <Linkedin className="w-3 h-3" /> linkedin.com/in/muhammad-awais32013
        </a>
        <a href={portfolio} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-[var(--accent)]">
          <ExternalLink className="w-3 h-3" /> Portfolio
        </a>
      </div>
    </header>
  );
}

/* -------------------------------------------------------------------------- */
/*  Industry track                                                            */
/* -------------------------------------------------------------------------- */

function IndustryCV() {
  const d = industry;
  return (
    <>
      <CVHeader tagline={d.tagline} />

      <Section title="Professional Summary">
        <p className="text-xs sm:text-[13px] text-[var(--text-muted)] leading-relaxed">{d.summary}</p>
      </Section>

      <Section title="Technical Skills">
        <SkillRows rows={d.skills} />
      </Section>

      <Section title="Experience">
        <div className="space-y-5">
          {d.experience.map((e) => (
            <Entry key={e.title} {...e} />
          ))}
        </div>
      </Section>

      <Section title="Projects">
        <div className="space-y-5">
          {d.projects.map((p) => (
            <Entry key={p.title} {...p} />
          ))}
        </div>
      </Section>

      <Section title="Education">
        <div className="space-y-1.5">
          <Entry title={d.education.title} subtitle={d.education.subtitle} date={d.education.date} />
          <p className="text-xs text-[var(--text-muted)]">
            <strong className="text-[var(--foreground)]">Relevant Coursework:</strong>{" "}
            {d.education.coursework}
          </p>
        </div>
      </Section>

      <Section title="Certifications">
        <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-1.5 text-xs text-[var(--text-muted)]">
          {d.certifications.map((c) => (
            <li key={c.name}>
              <strong className="text-[var(--foreground)] font-semibold">{c.name}</strong>
              {c.issuer ? ` — ${c.issuer}` : ""}
            </li>
          ))}
        </ul>
      </Section>

      <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--surface-2)] p-4 text-xs text-[var(--text-muted)] print:hidden">
        Hackathons, conferences, events, and campus outreach are listed on the{" "}
        <Link href="/community" className="font-semibold text-[var(--accent)] hover:underline">
          Conferences & Volunteering page
        </Link>
        .
      </div>
    </>
  );
}

/* -------------------------------------------------------------------------- */
/*  Academic track                                                            */
/* -------------------------------------------------------------------------- */

function AcademicCV() {
  const d = academic;
  return (
    <>
      <CVHeader tagline="Graduate Research Applicant • BS Computer Science, NUML" location={d.location} />

      <Section title="Research Profile">
        <p className="text-xs sm:text-[13px] text-[var(--text-muted)] leading-relaxed">{d.profile}</p>
      </Section>

      <Section title="Education">
        <div className="space-y-1.5">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0 space-y-0.5">
              <strong className="text-sm text-[var(--foreground)]">{d.education.title}</strong>
              <div className="text-xs font-medium text-[var(--accent)]">
                {d.education.subtitle}
                <span className="ml-3 font-mono text-[var(--text-dim)]">{d.education.cgpa}</span>
              </div>
            </div>
            <span className="shrink-0 text-right font-mono text-xs text-[var(--text-dim)]">
              {d.education.date}
            </span>
          </div>
          <Bullets items={d.education.bullets} />
        </div>
      </Section>

      <Section title="Research Interests">
        <div className="space-y-1.5 text-xs text-[var(--text-muted)] leading-relaxed">
          {d.interests.map((i) => (
            <p key={i.label}>
              <strong className="text-[var(--foreground)]">{i.label}:</strong> {i.text}
            </p>
          ))}
        </div>
      </Section>

      <Section title="Research & Projects">
        <div className="space-y-5">
          {d.projects.map((p) => (
            <Entry key={p.title} {...p} />
          ))}
        </div>
      </Section>

      <Section title="Technical Skills">
        <SkillRows rows={d.skills} />
      </Section>

      <Section title="Teaching Experience">
        <Entry {...d.teaching} />
      </Section>

      <Section title="Professional Experience">
        <div className="space-y-5">
          {d.experience.map((e) => (
            <Entry key={e.title} {...e} />
          ))}
        </div>
      </Section>

      <Section title="Honors and Activities">
        <Bullets items={d.honors} />
      </Section>

      <Section title="Certifications">
        <ul className="list-disc pl-5 space-y-1 text-xs text-[var(--text-muted)] leading-relaxed marker:text-[var(--text-dim)]">
          {d.certifications.map((c) => (
            <li key={c.name}>
              {c.name} ({c.issuer}){" "}
              <TextLink href={c.href}>credential link</TextLink>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Conferences, Events & Volunteering">
        <ul className="list-disc pl-5 space-y-1 text-xs text-[var(--text-muted)] leading-relaxed marker:text-[var(--text-dim)]">
          {d.events.map((ev) => (
            <li key={ev.text}>
              {ev.text} <TextLink href={ev.href}>credential link</TextLink>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="References">
        <div className="grid sm:grid-cols-2 gap-6 text-xs text-[var(--text-muted)] leading-relaxed">
          {d.references.map((r) => (
            <div key={r.name} className="space-y-0.5">
              <strong className="text-[var(--foreground)]">{r.name}</strong>
              {r.lines.map((line) => (
                <div key={line}>{line}</div>
              ))}
              <a href={`mailto:${r.email}`} className="text-[var(--accent)] hover:underline">
                {r.email}
              </a>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}

/* -------------------------------------------------------------------------- */
/*  Page                                                                      */
/* -------------------------------------------------------------------------- */

export default function ResumePage() {
  const [activeTab, setActiveTab] = useState<Track>("industry");

  const handlePrint = () => {
    window.print();
  };

  const pdf = PDF_FILES[activeTab];

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
            {(["industry", "academic"] as Track[]).map((track) => (
              <button
                key={track}
                onClick={() => setActiveTab(track)}
                aria-pressed={activeTab === track}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${activeTab === track
                    ? "bg-[var(--accent)] text-slate-950 font-bold shadow-xs"
                    : "text-[var(--text-muted)] hover:text-[var(--foreground)]"
                  }`}
              >
                {track === "industry" ? "Industry Track" : "Academic Track"}
              </button>
            ))}
          </div>

          {/* PDF Download / Print — download follows the active track */}
          <a
            href={pdf.href}
            download={pdf.download}
            className="p-2.5 rounded-xl bg-[var(--surface-1)] hover:bg-[var(--surface-2)] text-[var(--foreground)] border border-[var(--border-subtle)] transition-colors shadow-xs"
            title={pdf.title}
            aria-label={pdf.title}
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
      <article className="p-8 sm:p-12 rounded-3xl bg-[var(--surface-1)] border border-[var(--border-subtle)] shadow-xs print:shadow-none print:border-none print:p-0 space-y-7 text-[var(--foreground)]">
        {activeTab === "industry" ? <IndustryCV /> : <AcademicCV />}
      </article>
    </div>
  );
}
"use client";

import React, { useState } from "react";
import { Play, ExternalLink, MonitorPlay, Film, Smartphone, Cloud } from "lucide-react";
import type { DemoVideo } from "@/lib/content";

interface ProjectVideoDemoProps {
  videos: DemoVideo[];
  projectTitle: string;
}

export function ProjectVideoDemo({ videos, projectTitle }: ProjectVideoDemoProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!videos || videos.length === 0) return null;

  const activeVideo = videos[activeIndex] || videos[0];
  const isShort = Boolean(activeVideo.isShort);
  const youtubeUrl = isShort
    ? `https://www.youtube.com/shorts/${activeVideo.youtubeId}`
    : `https://www.youtube.com/watch?v=${activeVideo.youtubeId}`;

  return (
    <section className="space-y-5 p-6 sm:p-8 rounded-3xl bg-[var(--surface-1)] border border-[var(--border-subtle)] shadow-xs">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-rose-500/10 text-rose-500 border border-rose-500/20">
            <span className="w-2 h-2 rounded-full bg-rose-500 status-pulse-dot" />
            <span>Project Video Demonstrations</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-[var(--foreground)] flex items-center gap-2.5 pt-1">
            <MonitorPlay className="w-5 h-5 text-[var(--accent)]" />
            <span>Interactive Demo &amp; System Walkthrough</span>
          </h2>
        </div>

        <a
          href={youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-medium text-[var(--text-muted)] hover:text-rose-500 bg-[var(--surface-2)] hover:bg-[var(--surface-3)] border border-[var(--border-subtle)] transition-colors self-start sm:self-auto"
          title="Open in YouTube"
        >
          <Film className="w-3.5 h-3.5 text-rose-500" />
          <span>{isShort ? "Watch YouTube Short" : "Watch on YouTube"}</span>
          <ExternalLink className="w-3 h-3 text-[var(--text-dim)]" />
        </a>
      </div>

      {/* Multi-video Switcher Tabs (Rendered if >1 video) */}
      {videos.length > 1 && (
        <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar border-b border-[var(--border-subtle)]/70 pt-1">
          {videos.map((vid, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={vid.youtubeId}
                onClick={() => setActiveIndex(idx)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? "bg-[var(--accent)] text-slate-950 font-bold shadow-sm"
                    : "bg-[var(--surface-2)] hover:bg-[var(--surface-3)] text-[var(--text-muted)] hover:text-[var(--foreground)] border border-[var(--border-subtle)]"
                }`}
              >
                {vid.isShort ? (
                  <Cloud className={`w-3.5 h-3.5 ${isActive ? "text-slate-950" : "text-sky-400"}`} />
                ) : (
                  <Play className={`w-3 h-3 ${isActive ? "fill-slate-950" : "fill-current"}`} />
                )}
                <span>{vid.badge || vid.title}</span>
              </button>
            );
          })}
        </div>
      )}

      {/* Main Video Screen Container */}
      <div className="relative group rounded-2xl overflow-hidden border border-[var(--border-strong)] bg-slate-950 shadow-xl">
        {isShort ? (
          /* Phone/Vertical Short Frame */
          <div className="relative w-full py-6 sm:py-8 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 flex justify-center items-center">
            <div className="w-full max-w-[320px] sm:max-w-[360px] aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/15 border-4 border-slate-800 bg-black">
              <iframe
                key={activeVideo.youtubeId}
                src={`https://www.youtube-nocookie.com/embed/${activeVideo.youtubeId}?rel=0&modestbranding=1`}
                title={activeVideo.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        ) : (
          /* 16:9 Standard Screen Frame */
          <div className="relative w-full aspect-video">
            <iframe
              key={activeVideo.youtubeId}
              src={`https://www.youtube-nocookie.com/embed/${activeVideo.youtubeId}?rel=0&modestbranding=1`}
              title={activeVideo.title}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
            />
          </div>
        )}

        {/* Video Subtitle & Context Bar */}
        <div className="p-4 sm:p-5 bg-[var(--surface-2)] border-t border-[var(--border-subtle)] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="space-y-1 min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-[var(--accent)]">
                {activeVideo.badge || "Live Demo"}
              </span>
              <span className="text-[var(--text-dim)]">•</span>
              <h3 className="text-sm sm:text-base font-bold text-[var(--foreground)] truncate">
                {activeVideo.title}
              </h3>
            </div>
            {activeVideo.description && (
              <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                {activeVideo.description}
              </p>
            )}
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold bg-white/5 text-[var(--text-dim)] border border-white/10">
              {isShort ? "Azure Cloud / Mobile" : "1080p HD"}
            </span>
            <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
              Verified Evidence
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

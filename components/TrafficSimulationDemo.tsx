"use client";

import React, { useState, useEffect } from "react";
import {
  Activity,
  AlertTriangle,
  CheckCircle2,
  Cpu,
  Layers,
  Sliders,
  Eye,
  Camera,
  Play,
  Pause,
} from "lucide-react";

type Vehicle = {
  id: number;
  type: "Car" | "Rickshaw" | "Motorcycle" | "Bus" | "Truck";
  x: number; // percentage 0-100
  y: number; // percentage 0-100
  speed: number;
  conf: number;
  color: string;
};

export function TrafficSimulationDemo() {
  const [density, setDensity] = useState<number>(65); // 0 to 100
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [showBoxes, setShowBoxes] = useState<boolean>(true);
  const [showVectors, setShowVectors] = useState<boolean>(true);
  const [lowLightMode, setLowLightMode] = useState<boolean>(false);
  const [fps, setFps] = useState<number>(42.4);

  // Compute choke status
  const isChoked = density >= 75;
  const isModerate = density >= 40 && density < 75;

  // Jitter FPS slightly to simulate real hardware telemetry
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      const base = isChoked ? 40.8 : 42.6;
      setFps(+(base + (Math.random() * 1.6 - 0.8)).toFixed(1));
    }, 800);
    return () => clearInterval(interval);
  }, [isPlaying, isChoked]);

  // Generate simulated vehicles based on density
  const vehicleCount = Math.round(5 + (density / 100) * 19);

  const vehiclePalette: Record<Vehicle["type"], string> = {
    Car: "#38bdf8", // Sky
    Rickshaw: "#f59e0b", // Amber
    Motorcycle: "#a855f7", // Purple
    Bus: "#10b981", // Emerald
    Truck: "#ec4899", // Pink
  };

  const types: Vehicle["type"][] = ["Car", "Rickshaw", "Motorcycle", "Car", "Bus", "Rickshaw", "Truck", "Motorcycle"];

  const vehicles: Vehicle[] = Array.from({ length: vehicleCount }).map((_, i) => {
    const type = types[i % types.length];
    const lane = (i % 3) + 1; // 3 lanes
    const laneY = 22 + (lane - 1) * 26;
    // Spread along X axis
    const spreadX = ((i * 100) / vehicleCount + ((density * 1.3) % 20)) % 88 + 4;
    const speed = isChoked ? 3.2 : isModerate ? 8.4 : 15.6;

    return {
      id: i,
      type,
      x: spreadX,
      y: laneY + (Math.sin(i * 2) * 4),
      speed,
      conf: +(0.86 + ((i * 3) % 12) / 100).toFixed(2),
      color: vehiclePalette[type],
    };
  });

  return (
    <div className="relative rounded-2xl overflow-hidden glass-panel-elevated border border-[var(--border-strong)] shadow-2xl">
      {/* Top Telemetry Header */}
      <div className="flex flex-wrap items-center justify-between px-4 sm:px-6 py-3 border-b border-[var(--border-subtle)] bg-[var(--surface-1)] gap-3">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <Camera className="w-4 h-4 text-sky-400" />
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--foreground)]">
              Islamabad CAM-04: I-8 Interchange Arterial
            </span>
          </div>
          <span className="hidden sm:inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 status-pulse-dot" />
            STREAM ACTIVE
          </span>
        </div>

        {/* Real-time Hardware Metrics Readout */}
        <div className="flex items-center gap-3 font-mono text-xs">
          <div className="flex items-center gap-1.5 text-[var(--text-muted)]">
            <Cpu className="w-3.5 h-3.5 text-sky-400" />
            <span>TensorRT FP16:</span>
            <span className="text-sky-400 font-bold">{fps} FPS</span>
          </div>
          <div className="hidden md:flex items-center gap-1.5 text-[var(--text-muted)] border-l border-[var(--border-subtle)] pl-3">
            <span>Latency:</span>
            <span className="text-emerald-400 font-bold">23.8ms</span>
          </div>
          <div className="hidden md:flex items-center gap-1.5 text-[var(--text-muted)] border-l border-[var(--border-subtle)] pl-3">
            <span>mAP@0.5:</span>
            <span className="text-purple-400 font-bold">91.4%</span>
          </div>
        </div>
      </div>

      {/* Main Simulated Video Canvas Viewport */}
      <div
        className={`relative w-full h-[280px] sm:h-[340px] transition-colors duration-500 overflow-hidden ${
          lowLightMode
            ? "bg-slate-950"
            : "bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900"
        }`}
      >
        {/* Road Surface & Lane Markings */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[75%] bg-slate-800/80 border-y-2 border-slate-700/80">
          {/* Lane dividers */}
          <div className="absolute inset-x-0 top-1/3 border-b-2 border-dashed border-amber-400/40" />
          <div className="absolute inset-x-0 top-2/3 border-b-2 border-dashed border-slate-500/40" />

          {/* Road Choke Danger Overlay */}
          {isChoked && (
            <div className="absolute inset-0 bg-rose-950/25 pointer-events-none animate-pulse">
              <div className="absolute right-8 top-4 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-rose-600/90 text-white font-mono text-xs font-bold shadow-lg">
                <AlertTriangle className="w-4 h-4 animate-bounce" />
                <span>CHOKE VECTOR DETECTED: BOTTLENECK ACTIVE</span>
              </div>
            </div>
          )}

          {/* Simulated Vehicles with YOLO Bounding Boxes */}
          {vehicles.map((v) => (
            <div
              key={v.id}
              className="absolute transition-all duration-700 ease-out flex items-center justify-center"
              style={{
                left: `${v.x}%`,
                top: `${v.y}%`,
                transform: "translate(-50%, -50%)",
              }}
            >
              {/* Vehicle Body Representation */}
              <div
                className={`relative rounded-md flex items-center justify-center font-mono font-bold text-[9px] shadow-lg transition-transform ${
                  v.type === "Bus" || v.type === "Truck"
                    ? "w-16 h-8"
                    : v.type === "Rickshaw"
                    ? "w-9 h-7 rounded-sm"
                    : v.type === "Motorcycle"
                    ? "w-5 h-6"
                    : "w-11 h-7"
                }`}
                style={{
                  backgroundColor: v.color,
                  color: "#0f172a",
                }}
              >
                <span>{v.type[0]}</span>

                {/* YOLO Bounding Box & Label Overlay */}
                {showBoxes && (
                  <div
                    className="absolute -inset-1.5 border border-sky-400 rounded pointer-events-none"
                    style={{
                      borderColor: isChoked ? "#f43f5e" : v.color,
                      boxShadow: `0 0 6px ${isChoked ? "rgba(244, 63, 94, 0.4)" : "rgba(56, 189, 248, 0.3)"}`,
                    }}
                  >
                    <div
                      className="absolute -top-4 left-0 px-1 py-0.2 rounded font-mono text-[8px] whitespace-nowrap text-white font-semibold flex items-center gap-0.5"
                      style={{ backgroundColor: isChoked ? "#e11d48" : "#0284c7" }}
                    >
                      <span>{v.type}</span>
                      <span className="opacity-80">{v.conf}</span>
                    </div>
                  </div>
                )}

                {/* Motion Vector Arrow */}
                {showVectors && (
                  <div
                    className={`absolute -right-3 w-3 h-0.5 rounded transition-all ${
                      isChoked ? "bg-rose-500 w-1" : "bg-emerald-400"
                    }`}
                  />
                )}
              </div>
            </div>
          ))}

          {/* Radar Scanline effect */}
          <div className="absolute inset-y-0 w-24 bg-gradient-to-r from-transparent via-sky-500/10 to-transparent pointer-events-none animate-[pulse_3s_ease-in-out_infinite]" />
        </div>

        {/* Live HUD Status Badge */}
        <div className="absolute top-4 left-4 z-10 flex flex-col gap-1.5">
          <div
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border font-mono text-xs font-bold backdrop-blur-md shadow-md ${
              isChoked
                ? "bg-rose-500/20 border-rose-500/40 text-rose-300"
                : isModerate
                ? "bg-amber-500/20 border-amber-500/40 text-amber-300"
                : "bg-emerald-500/20 border-emerald-500/40 text-emerald-300"
            }`}
          >
            {isChoked ? (
              <AlertTriangle className="w-3.5 h-3.5 text-rose-400 animate-spin" />
            ) : isModerate ? (
              <Activity className="w-3.5 h-3.5 text-amber-400" />
            ) : (
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            )}
            <span>
              {isChoked
                ? "FLOW STATUS: SEVERE CHOKING (Cd > 0.78)"
                : isModerate
                ? "FLOW STATUS: MODERATE FRICTION (Cd = 0.44)"
                : "FLOW STATUS: FREE TRANSIT (Cd < 0.20)"}
            </span>
          </div>

          <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400 bg-slate-900/80 px-2 py-1 rounded border border-slate-800">
            <span>Detected Targets: <strong className="text-white">{vehicleCount}</strong></span>
            <span>•</span>
            <span>Avg Velocity: <strong className="text-white">{isChoked ? "11 km/h" : isModerate ? "34 km/h" : "62 km/h"}</strong></span>
          </div>
        </div>
      </div>

      {/* Interactive Controls & Density Slider Bar */}
      <div className="p-4 sm:p-5 bg-[var(--surface-1)] border-t border-[var(--border-subtle)] space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-[var(--foreground)]">
            <Sliders className="w-4 h-4 text-sky-400" />
            <span>Interactive Road Density Slider:</span>
            <span
              className={`font-mono font-bold px-2 py-0.5 rounded ${
                isChoked
                  ? "bg-rose-500/20 text-rose-400"
                  : isModerate
                  ? "bg-amber-500/20 text-amber-400"
                  : "bg-emerald-500/20 text-emerald-400"
              }`}
            >
              {density}% ({isChoked ? "Choked" : isModerate ? "Dense" : "Fluid"})
            </span>
          </div>

          {/* Toggle Switches */}
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <button
              onClick={() => setShowBoxes(!showBoxes)}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md border transition-colors ${
                showBoxes
                  ? "bg-sky-500/15 border-sky-500/40 text-sky-400"
                  : "bg-[var(--surface-2)] border-[var(--border-subtle)] text-[var(--text-dim)]"
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>YOLO Boxes</span>
            </button>
            <button
              onClick={() => setShowVectors(!showVectors)}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md border transition-colors ${
                showVectors
                  ? "bg-purple-500/15 border-purple-500/40 text-purple-400"
                  : "bg-[var(--surface-2)] border-[var(--border-subtle)] text-[var(--text-dim)]"
              }`}
            >
              <Activity className="w-3.5 h-3.5" />
              <span>Flow Vectors</span>
            </button>
            <button
              onClick={() => setLowLightMode(!lowLightMode)}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md border transition-colors ${
                lowLightMode
                  ? "bg-amber-500/15 border-amber-500/40 text-amber-400"
                  : "bg-[var(--surface-2)] border-[var(--border-subtle)] text-[var(--text-dim)]"
              }`}
            >
              <span>Dusk Simulation</span>
            </button>
          </div>
        </div>

        {/* Range Slider */}
        <div className="relative">
          <input
            type="range"
            min={10}
            max={100}
            value={density}
            onChange={(e) => setDensity(Number(e.target.value))}
            className="w-full h-2 bg-[var(--surface-3)] rounded-lg appearance-none cursor-pointer accent-sky-400 focus:outline-none"
            aria-label="Traffic choke density slider"
          />
          <div className="flex justify-between text-[10px] font-mono text-[var(--text-dim)] mt-1.5">
            <span className="text-emerald-400">10% Free Transit</span>
            <span className="text-amber-400">50% Emerging Congestion</span>
            <span className="text-rose-400">100% Critical Choke Point</span>
          </div>
        </div>
      </div>
    </div>
  );
}

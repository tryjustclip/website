"use client";

import React, { useState, useRef } from "react";
import { 
  Globe, 
  Terminal, 
  Zap, 
  Database, 
  Bot 
} from "lucide-react";


interface SystemNode {
  id: string;
  name: string;
  category: string;
  tech: string;
  metric: string;
  icon: typeof Globe;
  coords: { x: number; y: number }; // Percentage position relative to canvas
  color: string;
}

const systemNodes: SystemNode[] = [
  {
    id: "frontend",
    name: "FRONTEND CORE",
    category: "React Server Components",
    tech: "Next.js 15 · Tailwind CSS",
    metric: "TTFB 18ms · 99 Vitals",
    icon: Globe,
    coords: { x: 50, y: 35 },
    color: "#2B7FFF",
  },
  {
    id: "api",
    name: "API GATEWAY",
    category: "REST & Webhooks",
    tech: "TypeScript · Edge Runtime",
    metric: "POST /v1 1.2ms Latency",
    icon: Terminal,
    coords: { x: 18, y: 22 },
    color: "#2563EB",
  },
  {
    id: "automation",
    name: "WORKFLOW ENGINE",
    category: "Event-Driven Automation",
    tech: "Stripe · CRM · Async Queues",
    metric: "100% Idempotent Delivery",
    icon: Zap,
    coords: { x: 82, y: 24 },
    color: "#00D2FF",
  },
  {
    id: "database",
    name: "DATABASE CLUSTER",
    category: "Relational + Cache Layer",
    tech: "PostgreSQL · Redis Cache",
    metric: "ACID Safe · Sub-5ms Read",
    icon: Database,
    coords: { x: 22, y: 78 },
    color: "#3B82F6",
  },
  {
    id: "ai",
    name: "AI ASSISTANT LAYER",
    category: "Grounded RAG & Copilot",
    tech: "Vector Embeddings · LLM",
    metric: "0% Hallucination Boundary",
    icon: Bot,
    coords: { x: 78, y: 76 },
    color: "#10B981",
  },
];

export function HeroForgeScene() {
  const [activeNodeId, setActiveNodeId] = useState<string>("frontend");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20; // -10 to +10 deg
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -20;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  const activeNode = systemNodes.find((n) => n.id === activeNodeId) || systemNodes[0];

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="w-full relative rounded-2xl bg-[#0D121A]/90 border border-white/15 p-4 sm:p-6 lg:p-8 overflow-hidden shadow-2xl shadow-black/80 select-none group"
      style={{
        perspective: "1200px",
      }}
    >
      {/* Subtle Background Forge Grid */}
      <div className="absolute inset-0 forge-grid opacity-30 pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#2563EB]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-[#00D2FF]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Window Bar */}
      <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4 sm:mb-6">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#10B981]/80" />
          <span className="ml-2 text-[10px] sm:text-xs font-mono-tech text-[#929CAA] tracking-wider">
            stickbyte_forge_cluster.v2
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#10B981]/10 border border-[#10B981]/30 text-[10px] font-mono-tech text-[#10B981]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
            ENGINEERING WORKSHOP
          </span>
        </div>
      </div>

      {/* 3D Tilted Interactive Canvas */}
      <div
        className="relative min-h-[380px] sm:min-h-[440px] flex items-center justify-center transition-transform duration-300 ease-out"
        style={{
          transform: `rotateY(${mousePos.x * 0.4}deg) rotateX(${mousePos.y * 0.4}deg)`,
          transformStyle: "preserve-3d",
        }}
      >
        {/* SVG Interconnecting Blue Signal Lines */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-0"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="lineGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2563EB" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#00D2FF" stopOpacity="0.8" />
            </linearGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Connection Lines from Center (50%, 35%) to Satellites */}
          {/* To API Node (18%, 22%) */}
          <line
            x1="50%"
            y1="38%"
            x2="24%"
            y2="24%"
            stroke="url(#lineGlow)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            className="animate-pulse"
            filter="url(#glow)"
          />
          {/* To Automation Node (82%, 24%) */}
          <line
            x1="50%"
            y1="38%"
            x2="76%"
            y2="26%"
            stroke="url(#lineGlow)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            className="animate-pulse"
            filter="url(#glow)"
          />
          {/* To Database Node (22%, 78%) */}
          <line
            x1="50%"
            y1="48%"
            x2="28%"
            y2="74%"
            stroke="url(#lineGlow)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            className="animate-pulse"
            filter="url(#glow)"
          />
          {/* To AI Node (78%, 76%) */}
          <line
            x1="50%"
            y1="48%"
            x2="72%"
            y2="72%"
            stroke="url(#lineGlow)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            className="animate-pulse"
            filter="url(#glow)"
          />
        </svg>

        {/* Center Floating Browser Window UI */}
        <div
          onClick={() => setActiveNodeId("frontend")}
          className={`relative z-10 w-[240px] sm:w-[280px] md:w-[320px] rounded-xl bg-[#131A24] border transition-all duration-300 p-4 shadow-2xl cursor-pointer ${
            activeNodeId === "frontend"
              ? "border-[#2B7FFF] shadow-[0_0_35px_rgba(43,127,255,0.4)] scale-105"
              : "border-white/15 hover:border-white/30"
          }`}
          style={{ transform: "translateZ(30px)" }}
        >
          <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-3">
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-[#2B7FFF]" />
              <span className="text-[10px] font-mono-tech text-[#F6F7F9] font-bold">
                PROD_APP_V2.0
              </span>
            </div>
            <span className="text-[9px] font-mono-tech text-[#10B981]">200 OK</span>
          </div>

          <div className="space-y-2">
            <div className="h-4 bg-[#070A0F] rounded px-2 flex items-center justify-between text-[9px] font-mono-tech text-[#929CAA]">
              <span>https://app.client.io</span>
              <span className="text-[#2B7FFF]">Next.js</span>
            </div>

            <div className="grid grid-cols-2 gap-1.5 pt-1">
              <div className="p-2 rounded bg-[#070A0F] border border-white/5 flex flex-col gap-0.5">
                <span className="text-[8px] font-mono-tech text-[#929CAA]">SPEED INDEX</span>
                <span className="text-xs font-bold text-[#10B981]">0.4s (99/100)</span>
              </div>
              <div className="p-2 rounded bg-[#070A0F] border border-white/5 flex flex-col gap-0.5">
                <span className="text-[8px] font-mono-tech text-[#929CAA]">ARCHITECTURE</span>
                <span className="text-xs font-bold text-[#2B7FFF]">Fullstack SSR</span>
              </div>
            </div>

            <div className="h-1.5 rounded-full bg-[#070A0F] overflow-hidden">
              <div className="h-full bg-gradient-to-r from-[#2563EB] to-[#00D2FF] w-full" />
            </div>
          </div>
        </div>

        {/* Satellite Node 1: API Gateway (Top Left) */}
        <div
          onClick={() => setActiveNodeId("api")}
          onMouseEnter={() => setActiveNodeId("api")}
          className={`absolute top-2 left-2 sm:top-6 sm:left-4 z-20 p-3 sm:p-3.5 rounded-xl bg-[#131A24] border transition-all duration-300 cursor-pointer shadow-lg max-w-[140px] sm:max-w-[170px] ${
            activeNodeId === "api"
              ? "border-[#2563EB] shadow-[0_0_25px_rgba(37,99,235,0.4)] scale-110 bg-[#182131]"
              : "border-white/10 hover:border-white/25"
          }`}
          style={{ transform: "translateZ(20px)" }}
        >
          <div className="flex items-center gap-2 mb-1">
            <Terminal className="w-3.5 h-3.5 text-[#2B7FFF]" />
            <span className="text-[10px] font-mono-tech font-bold text-[#F6F7F9]">
              API GATEWAY
            </span>
          </div>
          <p className="text-[9px] font-mono-tech text-[#929CAA] truncate">REST / GraphQL</p>
          <span className="text-[9px] font-mono-tech text-[#10B981] block mt-0.5">● 1.2ms</span>
        </div>

        {/* Satellite Node 2: Automation Workflow (Top Right) */}
        <div
          onClick={() => setActiveNodeId("automation")}
          onMouseEnter={() => setActiveNodeId("automation")}
          className={`absolute top-4 right-2 sm:top-8 sm:right-4 z-20 p-3 sm:p-3.5 rounded-xl bg-[#131A24] border transition-all duration-300 cursor-pointer shadow-lg max-w-[140px] sm:max-w-[170px] ${
            activeNodeId === "automation"
              ? "border-[#00D2FF] shadow-[0_0_25px_rgba(0,210,255,0.4)] scale-110 bg-[#182131]"
              : "border-white/10 hover:border-white/25"
          }`}
          style={{ transform: "translateZ(20px)" }}
        >
          <div className="flex items-center gap-2 mb-1">
            <Zap className="w-3.5 h-3.5 text-[#00D2FF]" />
            <span className="text-[10px] font-mono-tech font-bold text-[#F6F7F9]">
              AUTOMATION
            </span>
          </div>
          <p className="text-[9px] font-mono-tech text-[#929CAA] truncate">Stripe → CRM</p>
          <span className="text-[9px] font-mono-tech text-[#00D2FF] block mt-0.5">● Idempotent</span>
        </div>

        {/* Satellite Node 3: Database Storage (Bottom Left) */}
        <div
          onClick={() => setActiveNodeId("database")}
          onMouseEnter={() => setActiveNodeId("database")}
          className={`absolute bottom-2 left-2 sm:bottom-4 sm:left-4 z-20 p-3 sm:p-3.5 rounded-xl bg-[#131A24] border transition-all duration-300 cursor-pointer shadow-lg max-w-[140px] sm:max-w-[170px] ${
            activeNodeId === "database"
              ? "border-[#3B82F6] shadow-[0_0_25px_rgba(59,130,246,0.4)] scale-110 bg-[#182131]"
              : "border-white/10 hover:border-white/25"
          }`}
          style={{ transform: "translateZ(20px)" }}
        >
          <div className="flex items-center gap-2 mb-1">
            <Database className="w-3.5 h-3.5 text-[#3B82F6]" />
            <span className="text-[10px] font-mono-tech font-bold text-[#F6F7F9]">
              DATABASE
            </span>
          </div>
          <p className="text-[9px] font-mono-tech text-[#929CAA] truncate">Postgres + Redis</p>
          <span className="text-[9px] font-mono-tech text-[#10B981] block mt-0.5">● ACID Safe</span>
        </div>

        {/* Satellite Node 4: AI Assistant (Bottom Right) */}
        <div
          onClick={() => setActiveNodeId("ai")}
          onMouseEnter={() => setActiveNodeId("ai")}
          className={`absolute bottom-2 right-2 sm:bottom-4 sm:right-4 z-20 p-3 sm:p-3.5 rounded-xl bg-[#131A24] border transition-all duration-300 cursor-pointer shadow-lg max-w-[140px] sm:max-w-[170px] ${
            activeNodeId === "ai"
              ? "border-[#10B981] shadow-[0_0_25px_rgba(16,185,129,0.4)] scale-110 bg-[#182131]"
              : "border-white/10 hover:border-white/25"
          }`}
          style={{ transform: "translateZ(20px)" }}
        >
          <div className="flex items-center gap-2 mb-1">
            <Bot className="w-3.5 h-3.5 text-[#10B981]" />
            <span className="text-[10px] font-mono-tech font-bold text-[#F6F7F9]">
              AI COPILOT
            </span>
          </div>
          <p className="text-[9px] font-mono-tech text-[#929CAA] truncate">Vector RAG</p>
          <span className="text-[9px] font-mono-tech text-[#10B981] block mt-0.5">● Grounded</span>
        </div>
      </div>

      {/* Bottom Live Node Inspector Strip */}
      <div className="mt-4 pt-3 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono-tech text-[#929CAA]">
        <div className="flex items-center gap-2">
          <span className="text-[#2B7FFF] font-bold">INSPECTING:</span>
          <span className="text-[#F6F7F9] font-semibold">{activeNode.name}</span>
          <span className="text-white/20">|</span>
          <span className="text-[#929CAA] hidden md:inline">{activeNode.tech}</span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-[#10B981] font-semibold">{activeNode.metric}</span>
        </div>
      </div>
    </div>
  );
}

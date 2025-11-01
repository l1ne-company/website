"use client";

import React from "react";

const TECH_CATEGORIES = [
  {
    category: "CORE",
    items: ["NixOS", "Nix Flakes", "ZIG", "SystemD"],
  },
  {
    category: "CLOUD",
    items: [
      "AWS",
      "GCP",
      "Azure",
      "On-Prem",
      "Whatever*",
    ],
    note: true,
  },
  {
    category: "RENDER",
    items: ["p5.js", "GLSL", "WebGL", "React"],
  },
];

export default function GlobalQueue() {
  return (
    <div className="h-full min-h-0 bg-black">
      {/* 3 equal-height category panes */}
      <div className="grid grid-rows-3 h-full min-h-0 gap-2">
        {TECH_CATEGORIES.map((cat, idx) => {
          return (
            <section key={cat.category} className="min-h-0 overflow-hidden flex flex-col">
              {/* Category header */}
              <div className="px-2 pt-1 pb-1 text-[#d79326ff] border-b-1 text-xs font-semibold tracking-tight">
                {cat.category}
              </div>
              <div className="flex-1 min-h-0 overflow-auto no-scrollbar py-1">
                {cat.items.map((tech) => (
                  <div
                    key={tech}
                    className="bg-black text-zinc-300"
                  >
                    <div className="px-2 py-1 font-mono text-xs text-gray-400">
                      {tech}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}

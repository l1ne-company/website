"use client";

import React from 'react';

const L1NE_FEATURES = [
  {
    id: "F1",
    title: "Immutable Infrastructure",
    description: "Deploy verified system definitions, not containers"
  },
  {
    id: "F2",
    title: "Reproducible Builds",
    description: "Cryptographic proofs guarantee build integrity"
  },
  {
    id: "F3",
    title: "NixOS Native",
    description: "Full power of declarative NixOS configuration"
  },
  {
    id: "F4",
    title: "Multi-Cloud Ready",
    description: "Scale across any provider seamlessly"
  },
  {
    id: "F5",
    title: "Zero Containers",
    description: "Direct OS-level orchestration without overhead"
  },
  {
    id: "F6",
    title: "Cryptographic Verification",
    description: "Content-addressed system propagation"
  },
];

export default function OperatorGroups() {
  return (
    <div className="flex flex-col">
      {L1NE_FEATURES.map((feature) => {
        return (
          <div key={feature.id}>
            <div
              className="grid gap-0.5 bg-[#0f1d34]"
              style={{ gridTemplateColumns: '64px 1fr', gridTemplateRows: 'auto auto' }}
            >
              {/* Top-left: Feature ID */}
              <div className="text-xs p-1 bg-[#021b44ff] text-[#97aed4ff]">{feature.id}</div>
              {/* Title to the right of ID */}
              <div className="text-xs p-1 bg-[#021b44ff] text-[#97aed4ff]">{feature.title}</div>
              {/* Bottom-left: status indicator */}
              <div className="text-xs p-1 bg-[#06142eff] text-[#944de6]">●</div>
              {/* Description below the title */}
              <div className="text-xs p-1 bg-[#06142eff]">{feature.description}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

"use client";

import React from 'react';
import { useProject } from '../src/contexts/ProjectContext';

const L1NE_FEATURES = [
  {
    id: "F1",
    title: "Immutable Infrastructure",
    description: "Deploy verified system definitions, not containers",
    project: "l1ne" as const,
  },
  {
    id: "F2",
    title: "Reproducible Builds",
    description: "Cryptographic proofs guarantee build integrity",
    project: "l1ne" as const,
  },
  {
    id: "F3",
    title: "NixOS Native",
    description: "Full power of declarative NixOS configuration",
    project: "l1ne" as const,
  },
  {
    id: "F4",
    title: "Multi-Cloud Ready",
    description: "Scale across any provider seamlessly",
    project: "l1ne" as const,
  },
  {
    id: "F5",
    title: "Zero Containers",
    description: "Direct OS-level orchestration without overhead",
    project: "l1ne" as const,
  },
  {
    id: "F6",
    title: "Cryptographic Verification",
    description: "Content-addressed system propagation",
    project: "l1ne" as const,
  },
];

const ALL_FOR_ONE_FEATURES = [
  {
    id: "F1",
    title: "Crane-based Build Orchestration",
    description: "Modular Nix flake builds with dependency splitting",
    project: "all-for-one" as const,
  },
  {
    id: "F2",
    title: "ZK Proof System",
    description: "Circom/Halo2/Arkworks proof generation & verification",
    project: "all-for-one" as const,
  },
  {
    id: "F3",
    title: "Attic Binary Cache",
    description: "Content-addressed .nar cache with S3 backend",
    project: "all-for-one" as const,
  },
  {
    id: "F4",
    title: "GitHub Webhook Integration",
    description: "Probot-based app for commit status updates",
    project: "all-for-one" as const,
  },
  {
    id: "F5",
    title: "Cloud CI Orchestrator",
    description: "Remote proof verification with fallback builds",
    project: "all-for-one" as const,
  },
  {
    id: "F6",
    title: "Local-First Development",
    description: "Build locally, generate proofs, deploy globally",
    project: "all-for-one" as const,
  },
];

const ALL_FEATURES = [...L1NE_FEATURES, ...ALL_FOR_ONE_FEATURES];

export default function OperatorGroups() {
  const { selectedProject } = useProject();

  const features = ALL_FEATURES.filter(feature => feature.project === selectedProject);

  return (
    <div className="flex flex-col">
      {features.map((feature) => {
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

"use client";

import React from 'react';
import { useProject } from '../src/contexts/ProjectContext';

const L1NE_CAPABILITIES = [
  {
    id: "CAP-001",
    capability: "NixOS System Deployment",
    status: "active",
    description: "Deploy complete NixOS configurations",
    project: "l1ne" as const,
  },
  {
    id: "CAP-002",
    capability: "Build Verification",
    status: "active",
    description: "Cryptographic proof of build integrity",
    project: "l1ne" as const,
  },
  {
    id: "CAP-003",
    capability: "Multi-Cloud Orchestration",
    status: "active",
    description: "AWS, GCP, Azure, On-Prem support",
    project: "l1ne" as const,
  },
  {
    id: "CAP-004",
    capability: "Atomic Rollback",
    status: "active",
    description: "Instant state reversion",
    project: "l1ne" as const,
  },
  {
    id: "CAP-005",
    capability: "Zero-Trust Networking",
    status: "active",
    description: "QUIC + gRPC secure channels",
    project: "l1ne" as const,
  },
  {
    id: "CAP-006",
    capability: "Distributed Cache",
    status: "active",
    description: "S3-compatible artifact storage",
    project: "l1ne" as const,
  },
  {
    id: "CAP-007",
    capability: "Local-First CI/CD",
    status: "active",
    description: "Build locally, deploy globally",
    project: "l1ne" as const,
  },
  {
    id: "CAP-008",
    capability: "Systemd Integration",
    status: "active",
    description: "Native OS service management",
    project: "l1ne" as const,
  },
];

const ALL_FOR_ONE_CAPABILITIES = [
  {
    id: "CAP-001",
    capability: "Crane Fork & Rust Test Isolation",
    status: "in-progress",
    description: "Fork Crane, strip to Rust logic, output test derivations",
    project: "all-for-one" as const,
  },
  {
    id: "CAP-002",
    capability: "Nix Derivation Build System",
    status: "in-progress",
    description: "Isolated, reproducible build & test outputs",
    project: "all-for-one" as const,
  },
  {
    id: "CAP-003",
    capability: "ZK Proof Generation Circuit",
    status: "planned",
    description: "Circom/Halo2 proof from test output & source hash",
    project: "all-for-one" as const,
  },
  {
    id: "CAP-004",
    capability: "Test Output Structured Export",
    status: "planned",
    description: "Export logs, hashes, traces from Nix derivation",
    project: "all-for-one" as const,
  },
  {
    id: "CAP-005",
    capability: "GitHub Proof Verification",
    status: "planned",
    description: "GitHub Action/App downloads .proof, runs verifier",
    project: "all-for-one" as const,
  },
  {
    id: "CAP-006",
    capability: "Commit Status Integration",
    status: "planned",
    description: "Update GitHub checks API with verification results",
    project: "all-for-one" as const,
  },
  {
    id: "CAP-007",
    capability: "Local Artifact Builder CLI",
    status: "planned",
    description: "CLI: flake → Nix build → tests → proof → package",
    project: "all-for-one" as const,
  },
  {
    id: "CAP-008",
    capability: "Binary + Proof Packaging",
    status: "planned",
    description: "Bundle binary + .proof + public.json + metadata",
    project: "all-for-one" as const,
  },
  {
    id: "CAP-009",
    capability: "S3 Versioned Blob Store",
    status: "planned",
    description: "Upload structure: /pkgs/<flake>/<hash>/{binary,proof}",
    project: "all-for-one" as const,
  },
  {
    id: "CAP-010",
    capability: "Attic Binary Cache Integration",
    status: "planned",
    description: "Content-addressed cache for .nar files (nix copy)",
    project: "all-for-one" as const,
  },
  {
    id: "CAP-011",
    capability: "Registry & Manifest System",
    status: "planned",
    description: "Index artifacts by flake ref, version, commit hash",
    project: "all-for-one" as const,
  },
  {
    id: "CAP-012",
    capability: "Downloader CLI with Verification",
    status: "planned",
    description: "Pull artifact, verify .proof, show provenance",
    project: "all-for-one" as const,
  },
];

const ALL_CAPABILITIES = [...L1NE_CAPABILITIES, ...ALL_FOR_ONE_CAPABILITIES];

type ColumnKey = 'id' | 'capability' | 'status' | 'description';

export default function WorkTable({
  compact = false,
  mini = false,
  maxHeight,
  columns = ['id', 'capability', 'status', 'description'],
}: {
  compact?: boolean;
  mini?: boolean;
  maxHeight?: number;
  columns?: ColumnKey[];
}) {
  const { selectedProject } = useProject();

  const capabilities = ALL_CAPABILITIES.filter(cap => cap.project === selectedProject);

  const showId = columns.includes('id');
  const showCapability = columns.includes('capability');
  const showStatus = columns.includes('status');
  const showDescription = columns.includes('description');

  const gridCols = [
    showId ? '80px' : '',
    showCapability ? '1fr' : '',
    showStatus ? '100px' : '',
    showDescription ? '1fr' : '',
  ]
    .filter(Boolean)
    .join(' ');

  const fontSize = mini ? 'text-[10px]' : compact ? 'text-xs' : 'text-sm';
  const headerSize = mini ? 'text-[9px]' : compact ? 'text-[11px]' : 'text-xs';
  const px = compact ? 'px-2' : 'px-3';
  const py = compact ? 'py-1' : 'py-2';

  return (
    <div className="flex flex-col h-full min-h-0">
      {/* Header */}
      <div
        className={`grid gap-0 border-b border-[#352b19ff] bg-[#0a0a0aff] ${px} ${py} ${headerSize} text-[#d79326ff] font-semibold tracking-wide`}
        style={{ gridTemplateColumns: gridCols }}
      >
        {showId && <div>ID</div>}
        {showCapability && <div>CAPABILITY</div>}
        {showStatus && <div>STATUS</div>}
        {showDescription && <div>DESCRIPTION</div>}
      </div>

      {/* Rows */}
      <div
        className="flex-1 min-h-0 overflow-auto no-scrollbar"
        style={maxHeight ? { maxHeight: `${maxHeight}px` } : {}}
      >
        {capabilities.map((cap) => {
          // Status-based styling
          const getStatusDisplay = (status: string) => {
            switch (status) {
              case 'active':
                return { symbol: '●', color: 'text-[#00ff00]', bg: 'bg-[#1a0d2e]', text: 'text-[#944de6]' };
              case 'in-progress':
                return { symbol: '◐', color: 'text-[#ffaa00]', bg: 'bg-[#2a1a0e]', text: 'text-[#d79326ff]' };
              case 'planned':
                return { symbol: '○', color: 'text-[#666666]', bg: 'bg-[#0a0a0aff]', text: 'text-[#666666]' };
              case 'blocked':
                return { symbol: '✕', color: 'text-[#ff0000]', bg: 'bg-[#2a0e0e]', text: 'text-[#ff6666]' };
              default:
                return { symbol: '●', color: 'text-[#944de6]', bg: 'bg-[#1a0d2e]', text: 'text-[#944de6]' };
            }
          };

          const statusStyle = getStatusDisplay(cap.status);
          const rowCls = `${statusStyle.bg} ${statusStyle.text}`;

          return (
            <div
              key={cap.id}
              className={`grid gap-0 border-b border-[#1a1a1aff] ${px} ${py} ${fontSize} ${rowCls}`}
              style={{ gridTemplateColumns: gridCols }}
            >
              {showId && <div className="font-mono">{cap.id}</div>}
              {showCapability && <div>{cap.capability}</div>}
              {showStatus && <div className={`uppercase tracking-wide ${statusStyle.color}`}>{statusStyle.symbol}</div>}
              {showDescription && <div className="text-gray-400">{cap.description}</div>}
            </div>
          );
        })}
      </div>
    </div>
  );
}

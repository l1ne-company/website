"use client";

import React from 'react';

const L1NE_CAPABILITIES = [
  {
    id: "CAP-001",
    capability: "NixOS System Deployment",
    status: "active",
    description: "Deploy complete NixOS configurations",
  },
  {
    id: "CAP-002",
    capability: "Build Verification",
    status: "active",
    description: "Cryptographic proof of build integrity",
  },
  {
    id: "CAP-003",
    capability: "Multi-Cloud Orchestration",
    status: "active",
    description: "AWS, GCP, Azure, On-Prem support",
  },
  {
    id: "CAP-004",
    capability: "Atomic Rollback",
    status: "active",
    description: "Instant state reversion",
  },
  {
    id: "CAP-005",
    capability: "Zero-Trust Networking",
    status: "active",
    description: "QUIC + gRPC secure channels",
  },
  {
    id: "CAP-006",
    capability: "Distributed Cache",
    status: "active",
    description: "S3-compatible artifact storage",
  },
  {
    id: "CAP-007",
    capability: "Local-First CI/CD",
    status: "active",
    description: "Build locally, deploy globally",
  },
  {
    id: "CAP-008",
    capability: "Systemd Integration",
    status: "active",
    description: "Native OS service management",
  },
];

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
        {L1NE_CAPABILITIES.map((cap) => {
          const rowCls = 'bg-[#1a0d2e] text-[#944de6]'; // Purple theme for active
          return (
            <div
              key={cap.id}
              className={`grid gap-0 border-b border-[#1a1a1aff] ${px} ${py} ${fontSize} ${rowCls}`}
              style={{ gridTemplateColumns: gridCols }}
            >
              {showId && <div className="font-mono">{cap.id}</div>}
              {showCapability && <div>{cap.capability}</div>}
              {showStatus && <div className="uppercase tracking-wide">●</div>}
              {showDescription && <div className="text-gray-400">{cap.description}</div>}
            </div>
          );
        })}
      </div>
    </div>
  );
}

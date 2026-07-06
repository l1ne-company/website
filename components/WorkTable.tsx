"use client";

import React from 'react';
import { useProject } from '../src/contexts/ProjectContext';

const L1NE_CAPABILITIES = [
  {
    id: "WIP-001",
    capability: "Cloud Infrastructure Operations",
    status: "in-progress",
    description: "Working in Progress",
    project: "l1ne" as const,
  },
  {
    id: "WIP-002",
    capability: "Multi-Cloud Deployment",
    status: "in-progress",
    description: "Working in Progress",
    project: "l1ne" as const,
  },
  {
    id: "WIP-003",
    capability: "Infrastructure Automation",
    status: "in-progress",
    description: "Working in Progress",
    project: "l1ne" as const,
  },
  {
    id: "WIP-004",
    capability: "Observability & Monitoring",
    status: "in-progress",
    description: "Working in Progress",
    project: "l1ne" as const,
  },
  {
    id: "WIP-005",
    capability: "Security & Compliance",
    status: "in-progress",
    description: "Working in Progress",
    project: "l1ne" as const,
  },
  {
    id: "WIP-006",
    capability: "Performance Optimization",
    status: "in-progress",
    description: "Working in Progress",
    project: "l1ne" as const,
  },
  {
    id: "WIP-007",
    capability: "Cost Management",
    status: "in-progress",
    description: "Working in Progress",
    project: "l1ne" as const,
  },
  {
    id: "WIP-008",
    capability: "Developer Experience",
    status: "in-progress",
    description: "Working in Progress",
    project: "l1ne" as const,
  },
];

const ALL_CAPABILITIES = L1NE_CAPABILITIES;

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

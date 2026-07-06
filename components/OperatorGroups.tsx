"use client";

import React from 'react';
import { useProject } from '../src/contexts/ProjectContext';

const L1NE_FEATURES = [
  {
    id: "WIP-01",
    title: "Cloud Operations",
    description: "Working in Progress",
    project: "l1ne" as const,
  },
  {
    id: "WIP-02",
    title: "Infrastructure Automation",
    description: "Working in Progress",
    project: "l1ne" as const,
  },
  {
    id: "WIP-03",
    title: "Multi-Cloud Deployment",
    description: "Working in Progress",
    project: "l1ne" as const,
  },
  {
    id: "WIP-04",
    title: "Security & Compliance",
    description: "Working in Progress",
    project: "l1ne" as const,
  },
  {
    id: "WIP-05",
    title: "Observability",
    description: "Working in Progress",
    project: "l1ne" as const,
  },
  {
    id: "WIP-06",
    title: "Performance",
    description: "Working in Progress",
    project: "l1ne" as const,
  },
];

const ALL_FEATURES = L1NE_FEATURES;

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

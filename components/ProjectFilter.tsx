"use client";

import React from 'react';
import { useProject, ProjectType } from '../src/contexts/ProjectContext';

export default function ProjectFilter() {
  const { selectedProject, setSelectedProject } = useProject();

  const projects: { id: ProjectType; label: string }[] = [
    { id: 'l1ne', label: 'L1NE' },
    { id: 'all-for-one', label: 'ALL-FOR-ONE' },
  ];

  return (
    <div className="flex gap-2 items-center">
      <span className="text-xs text-[#d79326ff]">PROJECT:</span>
      <div className="flex gap-1">
        {projects.map((project) => (
          <button
            key={project.id}
            onClick={() => setSelectedProject(project.id)}
            className={`px-3 py-1 text-xs font-semibold transition-colors ${
              selectedProject === project.id
                ? 'bg-[#c79325] text-black'
                : 'bg-[#352b19ff] text-[#d79326ff] hover:bg-[#453620ff]'
            }`}
          >
            {project.label}
          </button>
        ))}
      </div>
    </div>
  );
}

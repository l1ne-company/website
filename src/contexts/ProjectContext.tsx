"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

export type ProjectType = 'l1ne' | 'all-for-one';

interface ProjectContextType {
  selectedProject: ProjectType;
  setSelectedProject: (project: ProjectType) => void;
}

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export function ProjectProvider({ children }: { children: ReactNode }) {
  const [selectedProject, setSelectedProject] = useState<ProjectType>('l1ne');

  return (
    <ProjectContext.Provider value={{ selectedProject, setSelectedProject }}>
      {children}
    </ProjectContext.Provider>
  );
}

export function useProject() {
  const context = useContext(ProjectContext);
  if (context === undefined) {
    throw new Error('useProject must be used within a ProjectProvider');
  }
  return context;
}

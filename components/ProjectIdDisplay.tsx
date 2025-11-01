"use client";

import React from 'react';
import { useProject } from '../src/contexts/ProjectContext';

const PROJECT_VERSIONS = {
  'l1ne': 'v0.0.1-alpha',
  'all-for-one': 'v0.0.1-alpha',
};

export default function ProjectIdDisplay() {
  const { selectedProject } = useProject();
  return <span>{PROJECT_VERSIONS[selectedProject]}</span>;
}

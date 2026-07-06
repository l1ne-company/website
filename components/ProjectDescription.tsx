"use client";

import React from 'react';
import { useProject } from '../src/contexts/ProjectContext';

const PROJECT_DESCRIPTIONS = {
  'l1ne': 'Cloud Infrastructure Operations - Fix Cloud Computing',
};

export default function ProjectDescription() {
  const { selectedProject } = useProject();
  return <span>{PROJECT_DESCRIPTIONS[selectedProject]}</span>;
}

"use client";

import React from 'react';
import { useProject } from '../src/contexts/ProjectContext';

const PROJECT_DESCRIPTIONS = {
  'l1ne': 'Containerless Orchestration System - Bringing NixOS to the Cloud',
  'all-for-one': 'Local-First CI/CD with Zero-Knowledge Proofs - Verify Without Rebuilding',
};

export default function ProjectDescription() {
  const { selectedProject } = useProject();
  return <span>{PROJECT_DESCRIPTIONS[selectedProject]}</span>;
}

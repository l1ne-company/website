"use client";

import React from 'react';

const DOC_SECTIONS = [
  {
    title: "Cloud Operations",
    description: "Infrastructure automation and multi-cloud",
    url: "https://github.com/l1ne-company"
  },
  {
    title: "Working in Progress",
    description: "Current development status",
    url: "https://github.com/l1ne-company"
  },
  {
    title: "Documentation",
    description: "Building and deployment guides",
    url: "https://github.com/l1ne-company"
  },
  {
    title: "GitHub Repository",
    description: "Source code and examples",
    url: "https://github.com/l1ne-company"
  },
];

export default function ControlBar() {
  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {DOC_SECTIONS.map((doc) => (
          <a
            key={doc.title}
            href={doc.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-3 bg-[#0d1a2e] border border-[#3359d9] hover:bg-[#1a0d2e] hover:border-[#944de6] transition-colors"
          >
            <div className="text-sm font-semibold text-[#944de6] mb-1">{doc.title}</div>
            <div className="text-xs text-gray-400">{doc.description}</div>
          </a>
        ))}
      </div>

      <div className="mt-4 text-center">
        <div className="text-xs text-gray-500">
          Fixing Cloud Computing • Working in Progress
        </div>
      </div>
    </div>
  );
}

import React from "react";

interface Project {
  title: string;
  description: string;
  link: string;
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-5 hover:shadow-md transition">
      <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
      <p className="text-sm text-gray-600 mb-4">{project.description}</p>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 text-sm font-medium hover:underline"
      >
        View Project →
      </a>
    </div>
  );
}
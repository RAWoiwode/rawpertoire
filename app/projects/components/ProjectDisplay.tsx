"use client";

import { Project } from "@/app/types/projectTypes";
import { useState } from "react";
import ProjectCard from "./ProjectCard";

interface Props {
  projects: Project[];
}
const ProjectDisplay = ({ projects }: Props): JSX.Element => {
  const [selectedProject, setSelectedProject] = useState<Project>(projects[0]);
  const [animatingLink, setAnimatingLink] = useState<string | null>(null);

  const handleClick = (project: Project) => {
    if (animatingLink) return;
    // Prevent multiple clicks while animating
    setAnimatingLink(project.title);

    // Wait for animation to complete before navigating
    setTimeout(() => {
      setSelectedProject(project);
      setAnimatingLink(null);
    }, 300); // Slightly shorter than animation duration to feel more responsive
  };

  return (
    <div className="mx-auto flex flex-col lg:w-2/3 xl:w-full xl:max-w-4xl">
      {/* DESKTOP */}
      <div className="hidden xl:flex xl:flex-row">
        <div className="flex w-1/2 flex-col items-end gap-2 px-4 py-1">
          {projects.map((project) => (
            <button
              key={project.title}
              onClick={() => handleClick(project)}
              className={`text-secondary-600 w-full rounded-xs px-4 py-2 text-start text-lg tracking-wider transition-colors xl:w-3/4 ${animatingLink === project.title ? "animate-blue-flash" : ""} ${
                selectedProject.title === project.title
                  ? "bg-secondary-50/90 outline-secondary-600 outline-4"
                  : "hover:outline-accent-500 bg-secondary-50/60 outline-4 outline-transparent"
              }`}
            >
              {project.title}
            </button>
          ))}
        </div>
        <div className="flex w-1/2 items-start justify-start">
          <div className="h-[512px] w-full">
            <ProjectCard {...selectedProject} key={selectedProject.title} />
          </div>
        </div>
      </div>

      {/* MOBILE */}
      <div className="flex w-full flex-col items-center gap-8 xl:hidden">
        {projects.map((project) => (
          <div key={project.title} className="w-full">
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectDisplay;

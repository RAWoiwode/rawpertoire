"use client";

import { useState } from "react";

import { Project } from "@/app/types/projectTypes";
import ProjectCard from "./ProjectCard";

/**
 * Props for the ProjectDisplay component.
 * @interface ProjectDisplayProps
 * @property {Project[]} projects - An array of project data to be displayed.
 */
interface ProjectDisplayProps {
  projects: Project[];
}

/**
 * The ProjectDisplay component handles the layout and selection logic for displaying projects.
 *
 * ## Example Usage:
 * ```tsx
 * import ProjectDisplay from "@/app/components/ProjectDisplay";
 * import { Project } from "@/app/types/projectTypes";
 *
 * const projects: Project[] = [
 *   { title: "Project A", url: "", description: "Sample project", timeEstimate: 10, image: "", gitHubUrl: "" },
 *   { title: "Project B", url: "", description: "Another project", timeEstimate: 20, image: "", gitHubUrl: "" }
 * ];
 *
 * const App = () => <ProjectDisplay projects={projects} />;
 *
 * export default App;
 * ```
 *
 * @component
 * @param {ProjectDisplayProps} props
 * @returns {JSX.Element} The project display layout with interactive selection.
 *
 * @author Ralph Woiwode
 * @version 0.3.0
 */
const ProjectDisplay = ({ projects }: ProjectDisplayProps): JSX.Element => {
  const [selectedProject, setSelectedProject] = useState<Project>(projects[0]);
  const [animatingLink, setAnimatingLink] = useState<string | null>(null);

  /**
   * Handles project selection with animation.
   *
   * @param {Project} project - The selected project.
   */
  const handleClick = (project: Project) => {
    if (animatingLink) return; // Prevent multiple clicks while animating

    setAnimatingLink(project.title);

    // Wait for animation to complete before navigating
    setTimeout(() => {
      setSelectedProject(project);
      setAnimatingLink(null);
    }, 300);
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
          <div className="h-[600px] w-full">
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

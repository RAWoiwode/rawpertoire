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
 * @version 0.4.1
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
    <div className="mx-auto flex flex-col">
      {/* DESKTOP */}
      <div className="hidden xl:flex xl:flex-row">
        <div className="mr-4 flex w-1/3 flex-col items-end gap-2">
          {projects.map((project) => (
            <button
              key={project.title}
              onClick={() => handleClick(project)}
              className={`w-full cursor-pointer rounded-xs px-4 py-2 text-start text-sm tracking-wider transition-colors ${animatingLink === project.title ? "animate-blue-flash" : ""} ${
                selectedProject.title === project.title
                  ? "bg-primary/90"
                  : "hover:bg-primary bg-primary/30"
              }`}
            >
              {project.title}
            </button>
          ))}
        </div>
        <div className="flex w-2/3 items-start">
          <div className="h-96 w-full">
            <ProjectCard {...selectedProject} key={selectedProject.title} />
          </div>
        </div>
      </div>
      {/* MOBILE */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-1 xl:hidden">
        {projects.map((project) => (
          <div key={project.title} className="">
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectDisplay;

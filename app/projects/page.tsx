"use client";

import { useState } from "react";

import MobileHeader from "../components/MobileHeader";
import PageTransition from "../components/PageTransition";
import { ProjectProps } from "../types/projectTypes";
import Project from "./components/Project";

const projectsInfo = [
  {
    title: "This",
    url: "http://localhost:3000/projects",
    description: "recursion ༼ つ ◕_◕ ༽つ",
    timeEstimate: 20,
    image: "RAWpertoire.png",
  },
  {
    title: "Wedding Site",
    url: "https://betoycaty.mx/",
    description:
      "A Wedding site I developed for my friends who got married in 2024",
    timeEstimate: 40,
    image: "WeddingSite.png",
  },
  {
    title: "Appointment App (WIP)",
    url: "",
    description: "Manage tattoo appointments more smoothly",
    timeEstimate: 100,
    image: "Tapt.png",
  },
];

/**
 * The Projects component displays a list using the `Project` component.
 *
 * ## Example:
 * ```tsx
 * import Projects from "@/app/projects/page";
 *
 * const App = () => (
 *   <div>
 *     <Projects />
 *   </div>
 * );
 *
 * export default App;
 * ```
 *
 * TODO: Assign project type in handleClick properly
 *
 * @author Ralph Woiwode
 * @version 0.2.0
 * @returns {JSX.Element} A list of projects rendered as `Project` components.
 */
const Projects = (): JSX.Element => {
  const [selectedProject, setSelectedProject] = useState<ProjectProps>(
    projectsInfo[0],
  );
  const [animatingLink, setAnimatingLink] = useState<string | null>(null);

  const handleClick = (project: ProjectProps) => {
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
    <PageTransition>
      <div className="mx-auto flex flex-col lg:w-2/3 xl:w-full xl:max-w-4xl">
        <MobileHeader>Projects</MobileHeader>
        {/* DESKTOP */}
        <div className="hidden xl:flex xl:flex-row">
          <div className="flex w-1/2 flex-col items-end gap-2 p-4">
            {projectsInfo.map((project) => (
              <button
                key={project.title}
                onClick={() => handleClick(project)}
                className={`text-secondary-500 w-full rounded-xs px-4 py-2 text-start font-bold tracking-wider transition-colors xl:w-3/4 ${animatingLink === project.title ? "animate-blue-flash" : ""} ${
                  selectedProject.title === project.title
                    ? "bg-secondary-50/90 outline-secondary-600 outline-4"
                    : "hover:outline-accent-500 bg-secondary-50/75 outline-4 outline-transparent"
                }`}
              >
                {project.title}
              </button>
            ))}
          </div>
          <div className="flex w-1/2 items-start justify-start p-4">
            <div className="h-[512px] w-full">
              <Project {...selectedProject} key={selectedProject.title} />
            </div>
          </div>
        </div>

        {/* MOBILE */}
        <div className="flex w-5/6 flex-col gap-8 self-center p-4 lg:w-full xl:hidden">
          {projectsInfo.map((project) => (
            <div key={project.title} className="w-full">
              <Project {...project} />
            </div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
};

export default Projects;

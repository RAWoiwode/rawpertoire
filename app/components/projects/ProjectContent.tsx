import { Project } from "@/app/types/projectTypes";
import ProjectDisplay from "./ProjectDisplay";

/**
 * Simulates fetching project data asynchronously.
 *
 * @async
 * @function
 * @returns {Promise<Project[]>} A promise resolving to an array of project objects
 */
const fetchProjectData = async (): Promise<Project[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          title: "Portfolio",
          url: "https://www.rawoiwode.com/#projects",
          description:
            "A modern, responsive portfolio showcasing my front-end development skills, projects, and experience through a dynamic, well-structured UI.",
          image: "RAWpertoire.png",
          gitHubUrl: "https://github.com/RAWoiwode/rawpertoire",
        },
        {
          title: "Friends' Wedding",
          url: "https://betoycaty.mx/",
          description:
            "A multi-page wedding website designed for a seamless guest experience, featuring the couple's story, schedule, travel details, registry, local recommendations, FAQs, and an interactive RSVP system for status lookup and updates.",
          image: "WeddingSite.png",
          gitHubUrl: "https://github.com/RAWoiwode/wedding-joika",
        },
        {
          title: "Appointment App",
          url: "",
          description:
            "A work-in-progress appointment management app designed for tattoo artists and stylists, providing a streamlined way to review client requests, quickly assess messages, and efficiently accept or deny appointments.",
          image: "Tapt.png",
          gitHubUrl: "https://github.com/hrtejada/tapt",
        },
        {
          title: "Identicon",
          url: "",
          description:
            "A small Elixir project that creates Identicons based off a string input. I used it to create the images for each of the projects on this portfolio.",
          image: "Identicon.png",
          gitHubUrl: "https://github.com/RAWoiwode/identicon",
        },
      ]);
    }, 500);
  });
};

/**
 * The ProjectContent component fetches and displays a list of projects.
 *
 * ## Example:
 * ```tsx
 * import ProjectContent from "@/app/projects/components/ProjectContent";
 *
 * const App = () => <ProjectContent />;
 * ```
 *
 * @component
 * @async
 * @returns {Promise<JSX.Element>} A section displaying project cards
 *
 * @author Ralph Woiwode
 * @version 0.4.1
 */
const ProjectContent = async (): Promise<JSX.Element> => {
  const projects = await fetchProjectData();

  return <ProjectDisplay projects={projects} />;
};

export default ProjectContent;

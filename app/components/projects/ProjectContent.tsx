import { Project } from "@/app/types/projectTypes";
import ProjectDisplay from "./ProjectDisplay";

/**
 * Fetches project data asynchronously.
 *
 * This function simulates an API call using `setTimeout` to return
 * an array of project objects.
 *
 * @async
 * @function
 * @returns {Promise<Project[]>} A promise that resolves with an array of project data.
 */
const fetchProjectData = async (): Promise<Project[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          title: "Portfolio",
          url: "http://localhost:3000/projects",
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
 * - Fetches project data asynchronously using `fetchProjectData`.
 * - Passes the retrieved project data to the `ProjectDisplay` component.
 *
 * ## Example Usage:
 * ```tsx
 * import ProjectContent from "@/app/projects/components/ProjectContent";
 *
 * const App = () => <ProjectContent />;
 *
 * export default App;
 * ```
 *
 * @component
 * @async
 * @returns {Promise<JSX.Element>} A section displaying a list of projects.
 *
 * @author Ralph Woiwode
 * @version 0.4.0
 */
const ProjectContent = async (): Promise<JSX.Element> => {
  const projects = await fetchProjectData();

  return <ProjectDisplay projects={projects} />;
};

export default ProjectContent;

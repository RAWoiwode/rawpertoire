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
          title: "This",
          url: "http://localhost:3000/projects",
          description:
            "A modern, responsive portfolio showcasing my front-end development skills, projects, and experience through a dynamic, well-structured UI. ༼ つ ◕_◕ ༽つ",
          timeEstimate: 20,
          image: "RAWpertoire.png",
          gitHubUrl: "https://github.com/RAWoiwode/rawpertoire",
        },
        {
          title: "Wedding Site",
          url: "https://betoycaty.mx/",
          description:
            "A multi-page wedding website designed for a seamless guest experience, featuring the couple's story, schedule, travel details, registry, local recommendations, FAQs, and an interactive RSVP system for status lookup and updates.",
          timeEstimate: 40,
          image: "WeddingSite.png",
          gitHubUrl: "https://github.com/RAWoiwode/wedding-joika",
        },
        {
          title: "Appointment App (WIP)",
          url: "",
          description:
            "A work-in-progress appointment management app designed for tattoo artists and stylists, providing a streamlined way to review client requests, quickly assess messages, and efficiently accept or deny appointments.",
          timeEstimate: 100,
          image: "Tapt.png",
          gitHubUrl: "https://github.com/hrtejada/tapt",
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
 * @version 0.3.1
 */
const ProjectContent = async (): Promise<JSX.Element> => {
  const projects = await fetchProjectData();

  return <ProjectDisplay projects={projects} />;
};

export default ProjectContent;

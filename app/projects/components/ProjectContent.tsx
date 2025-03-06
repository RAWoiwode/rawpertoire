import { Project } from "@/app/types/projectTypes";
import ProjectDisplay from "./ProjectDisplay";

const fetchProjectData = async (): Promise<Project[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          title: "This",
          url: "http://localhost:3000/projects",
          description: "recursion ༼ つ ◕_◕ ༽つ",
          timeEstimate: 20,
          image: "RAWpertoire.png",
          gitHubUrl: "https://github.com/RAWoiwode/rawpertoire",
        },
        {
          title: "Wedding Site",
          url: "https://betoycaty.mx/",
          description:
            "A Wedding site I developed for my friends who got married in 2024",
          timeEstimate: 40,
          image: "WeddingSite.png",
          gitHubUrl: "https://github.com/RAWoiwode/wedding-joika",
        },
        {
          title: "Appointment App (WIP)",
          url: "",
          description: "Manage tattoo appointments more smoothly",
          timeEstimate: 100,
          image: "Tapt.png",
          gitHubUrl: "https://github.com/hrtejada/tapt",
        },
      ]);
    }, 500);
  });
};

const ProjectContent = async () => {
  const projects = await fetchProjectData();

  return <ProjectDisplay projects={projects} />;
};

export default ProjectContent;

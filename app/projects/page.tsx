import MobileHeader from "../components/MobileHeader";
import Project from "./components/Project";

const projectsInfo = [
  {
    title: "This",
    url: "http://localhost:3000/projects",
    description: "recursion ༼ つ ◕_◕ ༽つ",
    timeEstimate: 20,
  },
  {
    title: "Wedding Site",
    url: "https://betoycaty.mx/",
    image: "WeddingSite.png",
    description:
      "A Wedding site I developed for my friends who got married in 2024",
    timeEstimate: 40,
  },
  {
    title: "Appointment App (WIP)",
    url: "",
    description: "",
    timeEstimate: 100,
  },
];

const Projects = () => {
  return (
    <div className="mx-auto flex flex-col items-center p-4 lg:w-2/3 lg:max-w-4xl">
      <MobileHeader>Projects</MobileHeader>
      <div className="flex flex-col items-center space-y-8 p-4 lg:p-0">
        {projectsInfo.map((projectInfo) => (
          <Project key={projectInfo.title} {...projectInfo} />
        ))}
      </div>
    </div>
  );
};

export default Projects;

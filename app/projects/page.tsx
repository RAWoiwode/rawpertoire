import Image from "next/image";
import Link from "next/link";

import MobileHeader from "../components/MobileHeader";
import ProjectCard from "./components/ProjectCard";

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
    image: "/images/WeddingSite.png",
    description:
      "A Wedding site I developed for my friends who got married in 2024",
    timeEstimate: 40,
  },
  {
    title: "Appointment App (WIP)",
    url: null,
    description: "",
    timeEstimate: 100,
  },
];

const Projects = () => {
  return (
    <div className="content-center p-4 lg:mx-auto lg:flex lg:w-2/3 lg:max-w-4xl">
      <MobileHeader>Projects</MobileHeader>
      <div className="w-full space-y-8 p-4 lg:p-0">
        {projectsInfo.map((projectInfo) => {
          let titleDisplay = <h4>{projectInfo.title}</h4>;

          if (projectInfo.url) {
            titleDisplay = (
              <Link
                href={projectInfo.url}
                className="text-accent-200 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {projectInfo.title}
              </Link>
            );
          }

          return (
            <ProjectCard key={projectInfo.title}>
              {titleDisplay}
              {projectInfo.image && (
                <Image
                  alt={`${projectInfo.title} preview`}
                  src={projectInfo.image}
                  width={250}
                  height={150}
                />
              )}
              <p>{projectInfo.description}</p>
              <p>{projectInfo.timeEstimate} hours</p>
            </ProjectCard>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;

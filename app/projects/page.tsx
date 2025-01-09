import Link from "next/link";
import ProjectCard from "./components/ProjectCard";
import MobileHeader from "../components/MobileHeader";

const Projects = () => {
  return (
    <div className="content-center p-4 lg:mx-auto lg:w-1/3">
      <MobileHeader>Projects</MobileHeader>
      <div className="mx-auto space-y-8 p-4">
        <ProjectCard>
          <Link
            href={"https://rawoiwode.com/"}
            className="text-accent-200 underline"
          >
            This
          </Link>
          <p>witty description</p>
          <p>rough time estimate</p>
        </ProjectCard>
        <ProjectCard>
          <Link
            href={"https://betoycaty.mx/"}
            className="text-accent-200 underline"
          >
            Wedding Site
          </Link>
          <p>witty description</p>
          <p>rough time estimate</p>
        </ProjectCard>
        <ProjectCard>
          Appointment App (WIP)
          <p>witty description</p>
          <p>rough time estimate</p>
        </ProjectCard>
      </div>
    </div>
  );
};

export default Projects;

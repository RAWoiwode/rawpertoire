import Link from "next/link";
import ProjectCard from "./components/ProjectCard";

const Projects = () => {
  return (
    <div className="mx-auto w-1/3 content-center">
      <div className="mx-auto space-y-8">
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

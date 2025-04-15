import { Project } from "@/app/types/projectTypes";
import ProjectCard from "./ProjectCard";

/**
 * Props for the ProjectDisplay component.
 *
 * @interface ProjectDisplayProps
 * @property {Project[]} projects - The array of project data to render.
 */
interface ProjectDisplayProps {
  projects: Project[];
}

/**
 * The ProjectDisplay component renders a list of project cards in a responsive layout.
 *
 * ## Example:
 * ```tsx
 * import ProjectDisplay from "@/app/projects/components/ProjectDisplay";
 *
 * const projects = [
 *   { title: "Project A", url: "", description: "...", image: "", gitHubUrl: "" },
 * ];
 *
 * const App = () => <ProjectDisplay projects={projects} />;
 * ```
 *
 * @component
 * @param {ProjectDisplayProps} props
 * @returns {JSX.Element} A responsive project grid layout
 *
 * @author Ralph Woiwode
 * @version 0.5.0
 */
const ProjectDisplay = ({ projects }: ProjectDisplayProps): JSX.Element => {
  return (
    <div className="mx-auto flex flex-col">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-1">
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

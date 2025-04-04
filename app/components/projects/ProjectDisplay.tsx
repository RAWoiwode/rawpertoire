import { Project } from "@/app/types/projectTypes";
import ProjectCard from "./ProjectCard";

/**
 * Props for the ProjectDisplay component.
 * @interface ProjectDisplayProps
 * @property {Project[]} projects - An array of project data to be displayed.
 */
interface ProjectDisplayProps {
  projects: Project[];
}

/**
 * The ProjectDisplay component handles the layout and selection logic for displaying projects.
 *
 * ## Example Usage:
 * ```tsx
 * import ProjectDisplay from "@/app/components/ProjectDisplay";
 * import { Project } from "@/app/types/projectTypes";
 *
 * const projects: Project[] = [
 *   { title: "Project A", url: "", description: "Sample project", timeEstimate: 10, image: "", gitHubUrl: "" },
 *   { title: "Project B", url: "", description: "Another project", timeEstimate: 20, image: "", gitHubUrl: "" }
 * ];
 *
 * const App = () => <ProjectDisplay projects={projects} />;
 *
 * export default App;
 * ```
 *
 * @component
 * @param {ProjectDisplayProps} props
 * @returns {JSX.Element} The project display layout with interactive selection.
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

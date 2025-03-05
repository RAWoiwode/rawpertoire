/**
 * Props for the ProjectCard component.
 * @interface Props
 * @property {React.ReactNode} children - The content to render inside the project card.
 */
interface Props {
  children: React.ReactNode;
}

/**
 * The ProjectCard component creates a styled card container for wrapping project content.
 *
 * ## Example:
 * ```tsx
 * import ProjectCard from "@/app/projects/components/ProjectCard";
 *
 * const App = () => (
 *   <ProjectCard>
 *     <h4>Project Title</h4>
 *     <p>A brief description of the project goes here.</p>
 *   </ProjectCard>
 * );
 *
 * export default App;
 * ```
 *
 * @author Ralph Woiwode
 * @version 0.1.6
 * @returns {JSX.Element} A styled card container wrapping the provided children.
 */
const ProjectCard = ({ children }: Props): JSX.Element => {
  return (
    <div className="bg-secondary-100/75 text-secondary-600 shadow-secondary-100 shadow-project-card flex h-full flex-col justify-between p-6">
      {children}
    </div>
  );
};

export default ProjectCard;

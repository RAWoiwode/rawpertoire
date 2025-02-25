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
 * ## Notes:
 * TODO: Investigate creating a custom `shadow` TailwindCSS class for flexibility.
 *
 * @author Ralph Woiwode
 * @version 0.1.3
 * @returns {JSX.Element} A styled card container wrapping the provided children.
 */
const ProjectCard = ({ children }: Props): JSX.Element => {
  return (
    <div className="bg-secondary-50/95 text-text-950 h-full p-6 shadow-lg">
      {children}
    </div>
  );
};

export default ProjectCard;

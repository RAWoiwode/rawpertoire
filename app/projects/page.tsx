import PageWrapper from "../components/PageWrapper";
import ProjectContent from "./components/ProjectContent";

/**
 * The Projects component displays a list using the `ProjectContent` component.
 *
 * ## Example:
 * ```tsx
 * import Projects from "@/app/projects/page";
 *
 * const App = () => (
 *   <div>
 *     <ProjectContent />
 *   </div>
 * );
 *
 * export default App;
 * ```
 *
 * @component
 * @returns {JSX.Element} A section containing a list of projects
 *
 * @author Ralph Woiwode
 * @version 0.3.0
 */
const Projects = (): JSX.Element => {
  return (
    <PageWrapper sectionTitle="Projects">
      <ProjectContent />
    </PageWrapper>
  );
};

export default Projects;

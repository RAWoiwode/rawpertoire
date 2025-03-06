import PageWrapper from "../components/PageWrapper";
import ProjectContent from "./components/ProjectContent";

/**
 * The Projects component displays a list using the `Project` component.
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
 * @author Ralph Woiwode
 * @version 0.3.0
 * @returns {JSX.Element} A list of projects rendered as `Project` components.
 */
const Projects = (): JSX.Element => {
  return (
    <PageWrapper sectionTitle="Projects">
      <ProjectContent />
    </PageWrapper>
  );
};

export default Projects;

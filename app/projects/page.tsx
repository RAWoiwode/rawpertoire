import MobileHeader from "../components/MobileHeader";
import MobilePaddingWrapper from "../components/MobilePaddingWrapper";
import PageTransition from "../components/PageTransition";
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
 *     <Projects />
 *   </div>
 * );
 *
 * export default App;
 * ```
 *
 * @author Ralph Woiwode
 * @version 0.2.1
 * @returns {JSX.Element} A list of projects rendered as `Project` components.
 */
const Projects = (): JSX.Element => {
  return (
    <PageTransition>
      <MobilePaddingWrapper>
        <MobileHeader>Projects</MobileHeader>
        <ProjectContent />
      </MobilePaddingWrapper>
    </PageTransition>
  );
};

export default Projects;

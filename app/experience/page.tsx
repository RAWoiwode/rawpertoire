import PageWrapper from "../components/PageWrapper";
import ExperienceContent from "./components/ExperienceContent";

/**
 * The Experience component displays a list of past work experiences.
 *
 * ## Example:
 * ```tsx
 * import Experience from "@/app/experience/page";
 *
 * const App = () => (
 *   <div>
 *     <Experience />
 *   </div>
 * );
 *
 * export default App;
 * ```
 *
 * @component
 * @async
 * @returns {Promise<JSX.Element>} A section displaying work experience details.
 *
 * @author Ralph Woiwode
 * @version 0.3.0
 */
const Experience = async (): Promise<JSX.Element> => {
  return (
    <PageWrapper sectionTitle="Experience">
      <ExperienceContent />
    </PageWrapper>
  );
};

export default Experience;

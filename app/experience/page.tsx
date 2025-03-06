import MobileHeader from "../components/MobileHeader";
import MobilePaddingWrapper from "../components/MobilePaddingWrapper";
import PageTransition from "../components/PageTransition";
import ExperienceContent from "./components/ExperienceContent";

/**
 * The Experience component displays a list of past work experiences.
 *
 * Fetches experience data asynchronously.
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
 * @author Ralph Woiwode
 * @version 0.2.0
 * @returns {Promise<JSX.Element>} A section displaying work experience details.
 */
const Experience = async (): Promise<JSX.Element> => {
  return (
    <PageTransition>
      <MobilePaddingWrapper>
        <MobileHeader>Experience</MobileHeader>
        <ExperienceContent />
      </MobilePaddingWrapper>
    </PageTransition>
  );
};

export default Experience;

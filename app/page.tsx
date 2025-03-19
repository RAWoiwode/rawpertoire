import HomeContent from "./components/home/HomeContent";
import ExperienceContent from "./components/experience/ExperienceContent";
import ProjectContent from "./components/projects/ProjectContent";

/**
 * The Home component serves as the introduction page fo the app.
 *
 * This component introduces the developer, highlights their overall experience,
 * and provides a brief explanation of the purpose behind the portfolio.
 *
 * ## Example:
 * ```tsx
 * import Home from "@/app/Home";
 *
 * export default function App() {
 *   return <Home />;
 * }
 * ```
 *
 * @component
 * @returns {JSX.Element} The Home page content for the app
 *
 * @author Ralph Woiwode
 * @version 0.3.0
 */
const Home = (): JSX.Element => {
  return (
    <div className="flex flex-col space-y-20">
      <section id="home" className="">
        <HomeContent />
      </section>
      <section id="experience" className="">
        <ExperienceContent />
      </section>
      <section id="projects" className="">
        <ProjectContent />
      </section>
    </div>
  );
};

export default Home;

import ExperienceContent from "./components/experience/ExperienceContent";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeContent from "./components/home/HomeContent";
import ProjectContent from "./components/projects/ProjectContent";

/**
 * The Home component renders the main content of the homepage.
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
 * @returns {JSX.Element} The homepage layout
 *
 * @author Ralph Woiwode
 * @version 0.3.3
 */
const Home = (): JSX.Element => {
  return (
    <div className="flex flex-col">
      <div className="flex w-full justify-center md:mb-8">
        <Header />
      </div>
      <div className="mt-12 space-y-36 md:mt-16">
        <section id="home" className="scroll-mt-56">
          <h2 className="mb-4 w-full border-b-2 uppercase lg:hidden">Home</h2>
          <HomeContent />
        </section>
        <section id="experience" className="scroll-mt-24">
          <h2 className="mb-4 w-full border-b-2 uppercase lg:hidden">
            Experience
          </h2>
          <ExperienceContent />
        </section>
        <section id="projects" className="scroll-mt-24">
          <h2 className="mb-4 w-full border-b-2 uppercase lg:hidden">
            Projects
          </h2>
          <ProjectContent />
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Home;

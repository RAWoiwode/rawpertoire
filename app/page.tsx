import SectionHeader from "./components/common/SectionHeader";
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
 * @version 0.3.5
 */
const Home = (): JSX.Element => {
  return (
    <div className="flex flex-col">
      <div className="space-y-40">
        <section
          id="home"
          role="region"
          aria-labelledby="home-heading"
          className="scroll-mt-20"
        >
          <div className="flex w-full justify-center md:mb-8">
            <Header />
          </div>
          <SectionHeader id="home-heading">Home</SectionHeader>
          <HomeContent />
        </section>
        <section
          id="experience"
          role="region"
          aria-labelledby="experience-heading"
          className="scroll-mt-20"
        >
          <SectionHeader id="experience-heading">Experience</SectionHeader>
          <ExperienceContent />
        </section>
        <section
          id="projects"
          role="region"
          aria-labelledby="projects-heading"
          className="scroll-mt-20"
        >
          <SectionHeader id="projects-heading">Projects</SectionHeader>
          <ProjectContent />
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Home;

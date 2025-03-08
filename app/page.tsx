import PageWrapper from "./components/PageWrapper";

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
    <PageWrapper sectionTitle="About">
      <div className="space-y-4 text-justify text-pretty lg:mx-auto lg:w-2/3 xl:w-1/3">
        <p className="lg:text-lg">
          I&apos;m a passionate developer with over 6 years of experience
          crafting engaging and intuitive web applications. I specialize in
          creating visually appealing and user-centric interfaces that elevate
          the digital experience.
        </p>
        <p className="lg:text-lg">
          Although my career path has taken me in various directions, my
          enthusiasm for front-end development remains strong. I continually
          refine my skills through professional projects, hands-on tutorials,
          and collaborative endeavors.
        </p>
        <p className="lg:text-lg">
          This portfolio is a testament to my expertise and ongoing commitment
          to innovation in front-end development. It showcases my ability to
          combine technical proficiency with creative design to build meaningful
          digital solutions.
        </p>
      </div>
    </PageWrapper>
  );
};

export default Home;

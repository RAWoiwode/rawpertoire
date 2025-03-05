import MobileHeader from "./components/MobileHeader";
import PageTransition from "./components/PageTransition";

/**
 * The Home component serves as the "Home" page fo the app
 *
 * This coponent introduces the develops, highlights their overall experience,
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
 * @author Ralph Woiwode
 * @version 0.1.2
 * @returns {JSX.Element} The Home page content for the app
 */
const Home = () => {
  return (
    <PageTransition>
      <div className="mx-auto p-4">
        <MobileHeader>About</MobileHeader>
        <div className="space-y-4 p-4 text-justify drop-shadow-sm lg:mx-auto lg:w-2/3 xl:w-1/2">
          <p className="lg:text-lg">
            Heyo, I&apos;m a creative developer with 6+ years of experience
            designing and developing web-based applications. I enjoy creating
            UIs that are pleasing both to the eye and user experience.
          </p>
          <p className="lg:text-lg">
            I am not currently in my field of choice, but I do still work on
            front-end development when I can, whether it is tutorials/classes or
            working on small projects for friends.
          </p>
          <p className="lg:text-lg">
            Doing this portfolio/repetoire rework is my way to test/display
            skills and knowledge I&apos;ve obtained over the years to hopefully
            create some small useful thing to leave a small mark on front-end
            development in someway.
          </p>
        </div>
      </div>
    </PageTransition>
  );
};

export default Home;

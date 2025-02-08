"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

import Header from "./Header";
import IconLink from "./IconLink";

const navItems = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Experience",
    path: "/experience",
  },
  {
    name: "Projects",
    path: "/projects",
  },
];

/**
 * The SideNav component renders the sidebar navigation for the app.
 *
 * - Includes navigation links for "Home," "Experience," and "Projects."
 * - Displays social media icons for GitHub and LinkedIn.
 *
 * ## Notes:
 * TODO: Separate data (navItems) from the UI for improved maintainability.
 * TODO: Keep an eye on the blurring effect to make sure that's the best way to achieve it
 * TODO: Work on click effect
 *
 * ## Example:
 * ```tsx
 * import SideNav from "@/app/components/SideNav";
 *
 * const App = () => (
 *   <div className="flex">
 *     <SideNav />
 *     <main>Content goes here</main>
 *   </div>
 * );
 *
 * export default App;
 * ```
 *
 * @author Ralph Woiwode
 * @version 0.2.0
 * @returns {JSX.Element} A responsive sidebar navigation with links and social icons.
 */
const SideNav = (): JSX.Element => {
  const pathname = usePathname();

  return (
    <div className="relative flex flex-auto flex-col py-8 lg:my-12 lg:ml-12">
      {/* Background Blur Layer using ::before */}
      <div className="bg-secondary-100/15 absolute inset-0 backdrop-blur-lg before:absolute before:inset-0 before:backdrop-blur-lg" />
      {/* Main Content (Unblurred) */}
      <div className="relative flex flex-1 flex-col">
        <Header />

        {/* Navigation Links (Expands to push IconLinks to the bottom) */}
        <nav className="hidden flex-1 flex-col space-y-2 py-4 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`bg-secondary-50/75 text-text-950 mx-auto w-3/5 rounded-xs py-2 text-center text-xl tracking-widest transition-all duration-200 ${item.path === pathname ? "bg-secondary-600 outline-0" : "hover:outline-accent-500 outline-4 outline-transparent"}`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <ul className="flex justify-center space-x-4">
          <li>
            <IconLink url="https://github.com/RAWoiwode" title="GitHub Profile">
              <FaGithub />
            </IconLink>
          </li>
          <li>
            <IconLink
              url="https://www.linkedin.com/in/rawoiwode/"
              title="LinkedIn Profile"
            >
              <FaLinkedinIn />
            </IconLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideNav;

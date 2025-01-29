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
 * TODO: Review hover effects for `navItems` for better UX.
 * TODO: Investigate occasional width inconsistencies in `navItem` links.
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
 * @version 0.1.0
 * @returns {JSX.Element} A responsive sidebar navigation with links and social icons.
 */
const SideNav = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-auto flex-col py-8 lg:my-12 lg:ml-12 lg:rounded-xl lg:bg-background-700 lg:shadow-lg">
      <Header />
      <div className="flex flex-1 flex-col justify-between">
        <nav className="hidden flex-col space-y-2 py-4 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`mx-auto w-3/5 py-2 text-center text-xl font-bold tracking-widest transition-all duration-200 ${item.path === pathname ? "w-full rounded-none bg-background-950" : "hover:scale-110 hover:text-text-950 hover:drop-shadow-xl"}`}
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

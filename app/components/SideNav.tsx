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
 * TODO: Review hover effects for `navItems` for better UX. Look at making a more 'believable' transparent bg
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
    <div className="lg:bg-secondary-100/20 flex flex-auto flex-col py-8 saturate-200 lg:my-12 lg:ml-12">
      <Header />
      <div className="flex flex-1 flex-col justify-between">
        <nav className="hidden flex-col space-y-2 py-4 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`bg-secondary-100/75 text-text-950 outline-secondary-200 mx-auto w-3/5 rounded-xs py-2 text-center text-xl tracking-widest outline-2 transition-colors duration-200 ${item.path === pathname ? "outline-secondary-600 bg-secondary-100/90" : "hover:outline-secondary-500 hover:outline-2"}`}
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

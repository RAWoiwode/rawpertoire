"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

import Header from "./Header";
import IconLink from "./IconLink";
import { useState } from "react";

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
 * @version 0.2.1
 * @returns {JSX.Element} A responsive sidebar navigation with links and social icons.
 */
const SideNav = (): JSX.Element => {
  const pathname = usePathname();
  const router = useRouter();
  const [animatingLink, setAnimatingLink] = useState<string | null>(null);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    path: string,
  ) => {
    e.preventDefault();

    // Prevent multiple clicks while animating
    if (animatingLink || path === pathname) return;

    setAnimatingLink(path);

    // Wait for animation to complete before navigating
    setTimeout(() => {
      router.push(path);
      setAnimatingLink(null);
    }, 400); // Slightly shorter than animation duration to feel more responsive
  };

  return (
    <aside className="relative flex flex-auto flex-col lg:my-12 lg:ml-12">
      <div className="bg-secondary-100/15 relative flex flex-1 flex-col py-8 backdrop-blur-lg">
        <Header />

        {/* Navigation Links (Expands to push IconLinks to the bottom) */}
        <nav className="hidden flex-1 flex-col space-y-4 py-4 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              onClick={(e) => handleNavClick(e, item.path)}
              className={`text-text-950 mx-auto w-3/5 rounded-xs py-2 text-center text-xl tracking-widest transition-all duration-200 ${animatingLink === item.path ? "animate-flash" : ""} ${
                item.path === pathname
                  ? "bg-secondary-50/90 outline-4 outline-amber-300"
                  : "hover:outline-accent-500 bg-secondary-50/75 outline-4 outline-transparent"
              }`}
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
    </aside>
  );
};

export default SideNav;

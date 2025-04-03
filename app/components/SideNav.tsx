"use client";

import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

import { useEffect } from "react";
import IconLink from "./IconLink";

const navItems = [
  {
    name: "Home",
  },
  {
    name: "Experience",
  },
  {
    name: "Projects",
  },
];

/**
 * The SideNav component renders the sidebar navigation for the app.
 *
 * - Provides quick access to the main sections of the porfolio
 * - Displays social media icons for GitHub, LinkedIn and a resume download.
 *
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
 * @component
 * @returns {JSX.Element} A responsive sidebar navigation with links and social icons.
 *
 * @author Ralph Woiwode
 * @version 0.3.1
 */
const SideNav = (): JSX.Element => {
  /**
   * Handles navigation clicks with animation.
   *
   * @param {React.MouseEvent<HTMLAnchorElement>} e - Click event
   * @param {string} path - Path to navigate to
   */

  // Handle initial page load with hash
  useEffect(() => {
    // Check if there's a hash in the URL on page load
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  }, []);

  /**
   * Handles smooth scrolling when clicking navigation links
   *
   * @param {React.MouseEvent} e - The click event
   * @param {string} id - The ID of the target section
   */
  const handleSmoothScroll = (e: React.MouseEvent, id: string) => {
    e.preventDefault();

    const targetElement = document.getElementById(id);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      // Update URL without causing a page jump or reload
      if (typeof window !== "undefined") {
        window.history.pushState({}, "", `#${id}`);
      }
    }
  };

  return (
    <aside className="hidden w-[40%] flex-col justify-between px-16 lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:py-24">
      <div>
        <nav className="hidden w-max flex-col space-y-4 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={`#${item.name.toLowerCase()}`}
              onClick={(e) => handleSmoothScroll(e, item.name.toLowerCase())}
              className={`text-text hover:text-accent px-2 py-2 text-lg tracking-widest uppercase transition-all duration-200 hover:translate-x-4`}
            >
              {item.name.toUpperCase()}
            </a>
          ))}
        </nav>
      </div>
      <div className="space-y-4">
        <ul className="flex space-x-4">
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
        <a
          href="/files/RAW_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:outline-accent hover:text-accent flex w-max p-2 outline"
        >
          Resume
        </a>
      </div>
    </aside>
  );
};

export default SideNav;

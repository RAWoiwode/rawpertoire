"use client";

import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

import { useEffect, useState } from "react";
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
 * @version 0.4.0
 */
const SideNav = (): JSX.Element => {
  const [activeSection, setActiveSection] = useState<string>("");

  /**
   * Handles smooth scrolling when clicking navigation links
   *
   * @param {React.MouseEvent} e - The click event
   * @param {string} id - The ID of the target section
   */
  const handleSmoothScroll = (e: React.MouseEvent, id: string) => {
    e.preventDefault();

    const target = document.getElementById(id);

    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Handle initial page load with hash
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6,
    };

    const observer = new IntersectionObserver((entries) => {
      const visibleSections = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

      if (visibleSections.length > 0) {
        const sectionId = visibleSections[0].target.id;
        setActiveSection(sectionId);

        if (window.location.hash !== `#${sectionId}`) {
          window.history.replaceState({}, "", `#${sectionId}`);
        }
      }
    }, observerOptions);

    const sectionElements = navItems.map((item) => {
      const el = document.getElementById(item.name.toLowerCase());
      if (el) observer.observe(el);
      return el;
    });

    // Initial scroll on load
    const hash = window.location.hash.substring(1);
    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          setActiveSection(hash);
        }
      }, 100);
    } else {
      setActiveSection("home");
    }

    return () => {
      sectionElements.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <aside className="hidden w-[40%] flex-col justify-between px-16 lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:py-24">
      <div>
        <nav className="hidden w-max flex-col space-y-4 lg:flex">
          {navItems.map((item) => {
            const id = item.name.toLowerCase();
            const isActive = activeSection === id;

            return (
              <a
                key={item.name}
                href={`#${id}`}
                onClick={(e) => handleSmoothScroll(e, id)}
                className={`text-accent/90 before:bg-accent relative flex items-center gap-2 px-2 py-2 text-lg tracking-widest uppercase transition-all duration-300 ease-out before:absolute before:inset-x-0 before:-bottom-0.5 before:h-[2px] ${
                  isActive
                    ? "text-accent before:w-full"
                    : "hover:text-accent before:w-0 hover:before:w-full"
                } before:transition-all before:duration-300 before:ease-out`}
              >
                {item.name.toUpperCase()}
              </a>
            );
          })}
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
          className="text-accent/90 hover:outline-accent hover:text-accent flex w-max p-2 outline transition-all hover:scale-110"
        >
          Resume
        </a>
      </div>
    </aside>
  );
};

export default SideNav;

"use client";

import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

import { useEffect, useState } from "react";
import IconLink from "./IconLink";
import SideNavLink from "./SideNavLink";

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
 * ```
 *
 * @component
 * @returns {JSX.Element} The responsive sidebar with section links and social icons
 *
 * @author Ralph Woiwode
 * @version 0.5.0
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
              <SideNavLink
                key={item.name}
                id={id}
                onClick={(e) => handleSmoothScroll(e, id)}
                isActive={isActive}
              >
                {item.name.toUpperCase()}
              </SideNavLink>
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
        <div className="border-accent w-fit border p-1.5">
          <a
            href="/files/RAW_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="underline-link underline-link-left underline-link-hover flex w-max p-1 transition-all"
          >
            Resume
          </a>
        </div>
      </div>
    </aside>
  );
};

export default SideNav;

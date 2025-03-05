"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FaFilePdf, FaGithub, FaLinkedinIn } from "react-icons/fa6";

import Header from "./Header";
import IconLink from "./IconLink";
import { useEffect, useState } from "react";

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
 * TODO: See about loading the page while the animation is running
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
 * @version 0.2.3
 * @returns {JSX.Element} A responsive sidebar navigation with links and social icons.
 */
const SideNav = (): JSX.Element => {
  const pathname = usePathname();
  const router = useRouter();
  const [animatingLink, setAnimatingLink] = useState<string | null>(null);

  useEffect(() => {
    navItems.forEach((item) => {
      router.prefetch(item.path);
    });
  }, [router]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    path: string,
  ) => {
    e.preventDefault();

    // Prevent multiple clicks while animating
    if (animatingLink || path === pathname) return;

    setAnimatingLink(path);
    router.prefetch(path); // Enusre latest data; Future proofing

    // Wait for animation to complete before navigating
    setTimeout(() => {
      router.push(path);
      setAnimatingLink(null);
    }, 400); // Slightly shorter than animation duration to feel more responsive
  };

  return (
    <aside className="relative flex flex-auto flex-col lg:my-12 lg:ml-12">
      <div className="bg-secondary-50/30 relative flex flex-1 flex-col py-8 backdrop-blur-lg">
        <Header />

        {/* Navigation Links (Expands to push IconLinks to the bottom) */}
        <nav className="hidden flex-1 flex-col space-y-4 py-4 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              onClick={(e) => handleNavClick(e, item.path)}
              className={`text-text-50 mx-auto w-4/5 rounded-xs py-2 text-center text-xl tracking-widest transition-all duration-200 ${animatingLink === item.path ? "animate-flash" : ""} ${
                item.path === pathname
                  ? "bg-secondary-950/80 text-text-950 outline-accent-400 font-bold outline-4"
                  : "hover:outline-accent-600 bg-secondary-50/90 outline-4 outline-transparent"
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
          <li>
            <IconLink url="/files/RAW_Resume.pdf" title="Resume">
              <FaFilePdf />
            </IconLink>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default SideNav;

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
    name: "Resume",
    path: "/resume",
  },
  {
    name: "Projects",
    path: "/projects",
  },
];

/**
 * Main SideNav Component.
 *
 * TODO: Separate data and UI
 * TODO: Make translate animation on active item be more dynamic
 */
const SideNav = () => {
  const pathname = usePathname();

  return (
    <div className="flex max-h-[50vh] flex-col py-8 lg:my-8 lg:ml-12 lg:w-1/6 lg:rounded-xl lg:bg-background-700 lg:shadow-lg">
      <Header />
      <div className="flex flex-1 flex-col justify-between">
        <nav className="hidden flex-col items-center space-y-2 px-8 py-4 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`relative w-44 rounded-md px-8 py-2 text-xl font-bold tracking-widest transition-transform ${item.path === pathname ? "translate-x-32 rounded-r-none bg-background-950" : "hover:translate-x-4"}`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <ul className="flex justify-center space-x-4">
          <li>
            <IconLink
              link="https://github.com/RAWoiwode"
              title="GitHub Profile"
            >
              <FaGithub />
            </IconLink>
          </li>
          <li>
            <IconLink
              link="https://www.linkedin.com/in/rawoiwode/"
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

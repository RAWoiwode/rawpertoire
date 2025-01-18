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
 * Main SideNav Component.
 *
 * TODO: Separate data and UI
 * TODO: Think about the a different hover action for navItems
 */
const SideNav = () => {
  const pathname = usePathname();

  return (
    <div className="flex max-h-[50vh] min-h-fit flex-auto flex-col py-8 lg:ml-12 lg:mt-8 lg:rounded-xl lg:bg-background-700 lg:shadow-lg">
      <Header />
      <div className="flex flex-1 flex-col justify-between">
        <nav className="hidden flex-col space-y-2 py-4 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`mx-auto w-[80%] py-2 text-center text-xl font-bold tracking-widest transition-all duration-200 ${item.path === pathname ? "w-[100%] rounded-none bg-background-950" : "hover:text-accent-700"}`}
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

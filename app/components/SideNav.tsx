"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaGithub } from "react-icons/fa6";

import Header from "./Header";
import { IconContext } from "react-icons";

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

const SideNav = () => {
  const pathname = usePathname();

  return (
    <div className="my-8 ml-12 flex max-h-[50vh] flex-col rounded-xl bg-background-700 py-8 shadow-lg lg:w-1/6">
      <Header />
      <div className="flex flex-1 flex-col justify-between">
        <nav className="flex flex-col items-center space-y-2 px-8 py-4">
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
        <div className="flex justify-center pb-4">
          <Link
            href={"https://github.com/RAWoiwode"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconContext.Provider
              value={{
                className:
                  "text-secondary-800/50 hover:text-secondary-600/75 transition-colors",
                size: "32",
              }}
            >
              <FaGithub />
            </IconContext.Provider>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideNav;

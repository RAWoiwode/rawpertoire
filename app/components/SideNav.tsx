"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import Header from "./Header";

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
    <div className="flex flex-grow flex-col rounded-xl bg-background-800 shadow-lg lg:w-1/6">
      <Header />
      <nav className="flex flex-auto flex-col space-y-2 px-8 py-4">
        {navItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`relative rounded-md px-8 py-2 text-xl font-bold transition-transform hover:bg-background-900/20 hover:shadow-md active:bg-primary-400 ${item.path === pathname ? "translate-x-8 rounded-r-none bg-background-900 shadow-md" : ""}`}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default SideNav;

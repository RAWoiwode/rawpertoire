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
    <div className="flex min-h-screen w-1/4 flex-col">
      <Header />
      <nav className="flex flex-auto flex-col space-y-2 border-r-2 border-r-secondary-300 bg-background-950 px-8 py-4">
        {navItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`w-full rounded-md px-8 py-2 text-left text-xl font-bold transition-all hover:bg-background-900/20 hover:shadow-md active:bg-primary-400 ${item.path === pathname ? "bg-background-900 shadow-md" : ""}`}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default SideNav;

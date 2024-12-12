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
    name: "CV",
    path: "/cv",
  },
  {
    name: "Projects",
    path: "/projects",
  },
];

const SideNav = () => {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <nav className="flex flex-auto basis-1/4 flex-col border-r-4 border-r-accent-300 bg-background-900 px-8 py-4">
        {navItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`w-full rounded-md px-8 py-2 text-left text-xl font-bold transition-all hover:bg-background-800/50 hover:shadow-md active:bg-primary-400 ${item.path === pathname ? "bg-secondary-300" : ""}`}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default SideNav;

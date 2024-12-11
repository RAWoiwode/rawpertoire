import Link from "next/link";
import NavButton from "./NavButton";
import Header from "./Header";

const SideNav = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <nav className="flex-auto basis-1/4 border-r-4 border-r-accent-300 bg-background-900 px-8 py-4">
        <ul className="space-y-1">
          <li>
            <Link href="/">
              <NavButton>Home</NavButton>
            </Link>
          </li>
          <li>
            <Link href="/cv">
              <NavButton>CV</NavButton>
            </Link>
          </li>
          <li>
            <Link href="/current">
              <NavButton>Current Work</NavButton>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideNav;

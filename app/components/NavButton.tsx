import React from "react";

interface Props {
  children: React.ReactNode;
}

/**
 * NavButton
 *
 * Main button used on the SideNav.
 *
 * @version 0.1.0
 */
const NavButton = ({ children }: Props) => {
  return (
    <button className="w-full rounded-md px-8 py-2 text-left text-xl font-bold transition-all hover:bg-background-800/50 hover:shadow-md">
      {children}
    </button>
  );
};

export default NavButton;

"use client";

import { useEffect, useState } from "react";

interface Props {
  children: React.ReactNode;
}

/**
 * Provides a smooth transition effect when switching between pages.
 *
 * ## Example:
 * ```tsx
 * import PageTransition from "@/app/components/PageTransition";
 *
 * export default function App() {
 *   return <PageTransition>
 *            <div>Content...</div>
 *          </PageTransition>
 * }
 * ```
 *
 * @author Ralph Woiwode
 * @version 0.1.0
 * @returns {JSX.Element} The page transition
 */
const PageTransition = ({ children }: Props): JSX.Element => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    return () => setIsVisible(false);
  }, []);

  return (
    <div
      className={`transition-all duration-300 ease-in-out ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0"}`}
    >
      {children}
    </div>
  );
};

export default PageTransition;

"use client";

import { useEffect, useState } from "react";

/**
 * Props for the MobileHeader component.
 * @interface PageWrapperProps
 * @property {React.ReactNode} sectionTitle - The string to display inside the header tag.
 * @property {React.ReactNode} children - The page content to display.
 */
interface PageWrapperProps {
  sectionTitle: string;
  children: React.ReactNode;
}

/**
 * Provides a smooth transition effect when switching between pages, consistent mobile padding,
 * and a mobile friendly header.
 *
 *
 * ## Example:
 * ```tsx
 * import PageWrapper from "@/app/components/PageWrapper";
 *
 * export default function App() {
 *   return <PageWrapper sectionTitle={"About"}>
 *            <div>Content...</div>
 *          </PageWrapper>
 * }
 * ```
 *
 * @component
 * @param {PageWrapperProps} props
 * @returns {JSX.Element} The animated page transition
 *
 * @author Ralph Woiwode
 * @version 0.2.0
 */
const PageWrapper = ({
  sectionTitle,
  children,
}: PageWrapperProps): JSX.Element => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    return () => setIsVisible(false);
  }, []);

  return (
    <div
      className={`transition-all duration-300 ease-in-out ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0"}`}
    >
      <h2 className="mb-4 text-center underline underline-offset-4 lg:hidden">
        {sectionTitle}
      </h2>
      <div className="p-8 lg:p-0">{children}</div>
    </div>
  );
};

export default PageWrapper;

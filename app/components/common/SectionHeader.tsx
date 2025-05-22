import React from "react";

interface SectionHeaderProps {
  id: string;
  children: React.ReactNode;
}

/**
 * A styled section header for use in mobile views.
 *
 * ## Example:
 * ```tsx
 * <SectionHeader id="projects-heading">Projects</SectionHeader>
 * ```
 *
 * @component
 * @param {string} [id] - Optional id for linking with aria-labelledby
 * @param {React.ReactNode} children - The content of the header
 * @returns {JSX.Element} A styled h2 element for section headers
 *
 * @version 0.1.1
 * @author Ralph Woiwode
 */
const SectionHeader = ({ id, children }: SectionHeaderProps): JSX.Element => {
  return (
    <h2 id={id} className="mb-4 w-full border-b-2 uppercase lg:hidden">
      {children}
    </h2>
  );
};

export default SectionHeader;

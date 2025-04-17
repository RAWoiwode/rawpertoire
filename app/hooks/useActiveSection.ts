import { useEffect, useState } from "react";

/**
 * Tracks the currently visible section based on scroll position.
 *
 * This hook compares the distance of each target section's top edge to the
 * top of the viewport and returns the ID of the closest one.
 *
 * - Syncs the section ID with the window's hash
 * - Updates `document.title` with the current section
 * - Restores scroll position if a hash is present on initial load
 *
 * @param {string[]} sectionIds - An array of section IDs to track
 * @returns {string} The ID of the currently active section
 *
 * @example
 * ```tsx
 * const sectionIds = ["home", "experience", "projects"];
 * const active = useActiveSection(sectionIds);
 * ```
 *
 * @author Ralph Woiwode
 * @version 0.1.0
 */
export const useActiveSection = (sectionIds: string[]): string => {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (sectionIds.includes(hash)) {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: "auto", block: "start" });
      }
    }

    const handleScroll = () => {
      let closestSection: string = "";
      let smallestOffset = Infinity;

      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (!element) return;

        const offset = Math.abs(element.getBoundingClientRect().top);
        if (offset < smallestOffset) {
          smallestOffset = offset;
          closestSection = id;
        }
      });

      setActiveSection((prev) => {
        if (closestSection && closestSection !== prev) {
          const newHash = `#${closestSection}`;

          if (window.location.hash !== newHash) {
            window.history.replaceState({}, "", newHash);
          }
        }

        return closestSection;
      });

      // SEOOOOOOOOOOOOOOOOOO
      if (document.title !== `RAWpertoire | ${closestSection}`) {
        document.title = `RAWpertoire | ${closestSection.charAt(0).toUpperCase() + closestSection.slice(1)}`;
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds]);

  return activeSection;
};

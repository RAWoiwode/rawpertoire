import { IconContext } from "react-icons";

/**
 * Props for the IconLink component.
 *
 * @interface IconLinkProps
 * @property {string} url - The URL the link navigates to.
 * @property {string} title - The tooltip text shown on hover.
 * @property {React.ReactNode} children - The icon component rendered inside the link.
 */
interface IconLinkProps {
  url: string;
  title: string;
  children: React.ReactNode;
}

/**
 * The IconLink component renders an accessible external link around a React Icon.
 *
 * It uses `next/link` for navigation and includes proper security attributes for external URLs.
 *
 * ## Example:
 * ```tsx
 * import { FaGithub } from "react-icons/fa";
 * import IconLink from "@/app/components/IconLink";
 *
 * const App = () => (
 *   <IconLink url="https://github.com" title="GitHub">
 *     <FaGithub />
 *   </IconLink>
 * );
 * ```
 *
 * ## Notes:
 * - Uses `IconContext.Provider` to apply global icon styles within this component.
 *
 * TODO: Constantize the size of the icons (☞ﾟヮﾟ)☞
 * TODO: Learn how to use layer utilities to properly pass classes to react-icons
 *
 * @component
 * @param {IconLinkProps} props
 * @returns {JSX.Element} A styled link containing a React icon
 *
 * @author Ralph Woiwode
 * @version 1.0.0
 */
const IconLink = ({ url, title, children }: IconLinkProps): JSX.Element => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      title={title}
      aria-label={title}
    >
      <IconContext.Provider
        value={{
          className:
            "text-accent/75 hover:text-accent hover:scale-110 transition-all",
          size: "28",
        }}
      >
        {children}
      </IconContext.Provider>
    </a>
  );
};

export default IconLink;

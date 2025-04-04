import Link from "next/link";
import { IconContext } from "react-icons";

/**
 * Props for the IconLink component.
 * @interface IconLinkProps
 * @property {string} link - The URL to navigate to when the link is clicked.
 * @property {string} title - The tooltip text displayed on hover.
 * @property {React.ReactNode} children - The React Icon component to render inside the link.
 */
interface IconLinkProps {
  url: string;
  title: string;
  children: React.ReactNode;
}

/**
 * The IconLink component creates an accessible hyperlink that wraps React Icons.
 *
 * It uses 'next/link' for routing and supports external links w/ appropriate
 * security attributes.
 *
 *
 * ## Example:
 * ```tsx
 * import { FaGithub } from "react-icons/fa";
 * import IconLink from "@/app/components/IconLink";
 *
 * const App = () => (
 *   <IconLink link="https://github.com" title="GitHub">
 *     <FaGithub />
 *   </IconLink>
 * );
 *
 * export default App;
 * ```
 *
 * ## Notes
 * - The 'IconContext.Provider' is used to style the icon globally w/in this component.
 * TODO: Constantize the size of the icons (☞ﾟヮﾟ)☞
 * TODO: Learn how to use layer utilities to properly pass classes to react-icons
 *
 * @component
 * @param {IconLinkProps} props
 * @returns {JSX.Element} A styled link containg a ReactIcon
 *
 * @author Ralph Woiwode
 * @version 0.2.0
 */
const IconLink = ({ url, title, children }: IconLinkProps): JSX.Element => {
  return (
    <Link href={url} target="_blank" rel="noopener noreferrer" title={title}>
      <IconContext.Provider
        value={{
          className:
            "text-accent/75 hover:text-accent hover:scale-110 transition-all",
          size: "32",
        }}
      >
        {children}
      </IconContext.Provider>
    </Link>
  );
};

export default IconLink;

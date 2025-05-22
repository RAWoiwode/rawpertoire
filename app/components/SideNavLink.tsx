/**
 * Props for the SideNavLink component.
 *
 * @interface SideNavLinkProps
 * @property {string} id - The section ID this link scrolls to.
 * @property {boolean} [isActive] - Whether this link is currently active.
 * @property {(e: React.MouseEvent<HTMLAnchorElement>) => void} onClick - The click handler.
 * @property {React.ReactNode} children - The link text content.
 */
interface SideNavLinkProps {
  id: string;
  isActive?: boolean;
  onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  children: React.ReactNode;
}

/**
 * The SideNavLink component renders a scrollable link with active state styling.
 *
 * @component
 * @param {SideNavLinkProps} props
 * @returns {JSX.Element} A styled anchor linking to a section ID
 *
 * @author Ralph Woiwode
 * @version 0.1.1
 */
export const SideNavLink = ({
  id,
  isActive = false,
  onClick,
  children,
}: SideNavLinkProps) => {
  return (
    <a
      href={`#${id}`}
      onClick={onClick}
      aria-current={isActive ? "true" : undefined}
      className={`underline-link underline-link-left px-2 py-2 text-lg tracking-widest uppercase ${
        isActive ? "underline-link-active" : "underline-link-hover"
      }`}
    >
      {children}
    </a>
  );
};

export default SideNavLink;

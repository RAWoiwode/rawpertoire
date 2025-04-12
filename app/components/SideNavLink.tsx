interface SideNavLinkProps {
  id: string;
  isActive?: boolean;
  onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  children: React.ReactNode;
}

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
      className={`underline-link underline-link-left px-2 py-2 text-lg tracking-widest uppercase ${
        isActive ? "underline-link-active" : "underline-link-hover"
      }`}
    >
      {children}
    </a>
  );
};

export default SideNavLink;

/**
 * Props for the ExternalLink component.
 *
 * @interface ExternalLinkProps
 * @property {string} href - The external URL to navigate to.
 * @property {string} title - Tooltip text and accessibility label.
 * @property {React.ReactNode} children - The content displayed inside the link.
 * @property {"left" | "right"} [direction] - The direction the underline animates from.
 */
interface ExternalLinkProps {
  href: string;
  title: string;
  children: React.ReactNode;
  direction?: "left" | "right";
}

/**
 * The ExternalLink component renders a styled, accessible link to an external URL.
 *
 * ## Example:
 * ```tsx
 * import { ExternalLink } from "@/app/components/ExternalLink";
 *
 * <ExternalLink href="https://github.com" title="GitHub">
 *   GitHub
 * </ExternalLink>
 * ```
 *
 * @component
 * @param {ExternalLinkProps} props
 * @returns {JSX.Element} A styled external anchor element
 *
 * @author Ralph Woiwode
 * @version 0.4.1
 */
export const ExternalLink = ({
  href,
  title,
  children,
  direction = "left",
}: ExternalLinkProps) => {
  const directionClass =
    direction === "right" ? "underline-link-right" : "underline-link-left";

  return (
    <a
      href={href}
      title={title}
      aria-label={title}
      target="_blank"
      rel="noopener noreferrer"
      className={`underline-link ${directionClass} underline-link-hover`}
    >
      {children}
    </a>
  );
};

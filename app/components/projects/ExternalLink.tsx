import Link from "next/link";

interface ExternalLinkProps {
  href: string;
  title: string;
  children: React.ReactNode;
  direction?: "left" | "right";
}

export const ExternalLink = ({
  href,
  title,
  children,
  direction = "left",
}: ExternalLinkProps) => {
  const directionClass =
    direction === "right" ? "underline-link-right" : "underline-link-left";

  return (
    <Link
      href={href}
      title={title}
      target="_blank"
      rel="noopener noreferrer"
      className={`underline-link ${directionClass} underline-link-hover text-sm`}
    >
      {children}
    </Link>
  );
};

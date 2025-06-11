/**
 * Props for the Button component.
 *
 * @interface ButtonProps
 * @extends React.ButtonHTMLAttributes<HTMLButtonElement>
 * @property {string} variant - Optional varian for different button styles
 */
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "link";
}

/**
 * The Button component renders a styled button using the site's design system.
 *
 * @component
 * @param {ButtonProps} props
 * @returns {JSX.Element} A reusable, accessible button component
 *
 * TODO: Create custom pulse
 * TODO: Continue work
 *
 * @author Ralph Woiwode
 * @version 0.1.0
 */
const Button = ({
  children,
  className = "",
  variant = "primary",
  ...props
}: ButtonProps): JSX.Element => {
  if (variant) {
  }

  return (
    <button
      className={`bg-background text-text group relative inline-flex items-center justify-center px-4 py-2 uppercase transition-colors duration-300 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      {...props}
    >
      {/* Decorative Corners */}
      <span className="border-accent absolute -top-0.5 -left-0.5 size-3 scale-80 border-t-2 border-l-2 opacity-0 transition-all transition-discrete duration-300 group-hover:scale-100 group-hover:animate-pulse group-hover:opacity-100" />
      <span className="border-accent absolute -top-0.5 -right-0.5 size-3 scale-80 border-t-2 border-r-2 opacity-0 transition-all transition-discrete duration-300 group-hover:scale-100 group-hover:animate-pulse group-hover:opacity-100" />
      <span className="border-accent absolute -bottom-0.5 -left-0.5 size-3 scale-80 border-b-2 border-l-2 opacity-0 transition-all transition-discrete duration-300 group-hover:scale-100 group-hover:animate-pulse group-hover:opacity-100" />
      <span className="border-accent absolute -right-0.5 -bottom-0.5 size-3 scale-80 border-r-2 border-b-2 opacity-0 transition-all transition-discrete duration-300 group-hover:scale-100 group-hover:animate-pulse group-hover:opacity-100" />
      {children}
    </button>
  );
};

export default Button;

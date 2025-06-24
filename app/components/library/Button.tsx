import clsx from "clsx";

/**
 * Props for the Button component.
 *
 * @interface ButtonProps
 * @extends React.ButtonHTMLAttributes<HTMLButtonElement>
 * @property {string} variant - Optional varian for different button styles
 */
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

/**
 * The Button component renders a styled button using the site's design system.
 *
 * @component
 * @param {ButtonProps} props
 * @returns {JSX.Element} A reusable, accessible button component
 *
 * TODO: Continue work
 *
 * @author Ralph Woiwode
 * @version 0.3.0
 */
const Button = ({
  children,
  className = "",
  variant = "primary",
  ...props
}: ButtonProps): JSX.Element => {
  const baseStyles =
    "relative inline-flex items-center justify-center px-4 py-2 tracking-wide transition-colors transition-shadow duration-400 ease-out hover:duration-100 hover:linear disabled:cursor-not-allowed disabled:opacity-50 border border-transparent ring-0 inset-ring-0 hover:text-text hover:inset-ring-1 hover:ring-1 hover:inset-ring-accent hover:ring-accent";

  const variantClasses = {
    primary: "bg-primary",
    secondary: "bg-secondary ",
  };

  return (
    <button
      className={clsx(baseStyles, variantClasses[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

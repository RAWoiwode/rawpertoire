/**
 * Props for the MobileHeader component.
 * @interface Props
 * @property {React.ReactNode} children - The content to display inside the header.
 */
interface Props {
  children: React.ReactNode;
}

/**
 * The MobileHeader component renders a heading designed for mobile displays.
 * It is hidden on larger screens.
 *
 * @param {Props} props
 *
 * ## Example:
 * ```tsx
 * import MobileHeader from "@/app/components/MobileHeader";
 *
 * const App = () => (
 *   <MobileHeader>About</MobileHeader>
 * );
 *
 * export default App;
 * ```
 *
 * @author Ralph Woiwode
 * @version 0.1.0
 * @returns {JSX.Element} A styled mobile-friendly heading.
 */
const MobileHeader = ({ children }: Props): JSX.Element => {
  return (
    <h2 className="mb-4 text-center underline underline-offset-4 lg:hidden">
      {children}
    </h2>
  );
};

export default MobileHeader;

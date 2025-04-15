/**
 * The Header component renders the main title and author information.
 *
 * ## Example:
 * ```tsx
 * import Header from "@/app/components/Header";
 *
 * const App = () => (
 *   <div>
 *     <Header />
 *   </div>
 * );
 * ```
 *
 * @component
 * @returns {JSX.Element} The header element for the app
 *
 * @author Ralph Woiwode
 * @version 0.4.0
 */
const Header = (): JSX.Element => {
  return (
    <div className="w-full sm:w-1/2 lg:w-3/4 xl:w-1/2">
      <h1 className="text-primary text-4xl font-bold">RAWpertoire</h1>
      <div className="text-right">
        <h2>by: Ralph Alex Woiwode</h2>
        <h4 className="text-primary/90">Front End Engineer</h4>
      </div>
    </div>
  );
};

export default Header;

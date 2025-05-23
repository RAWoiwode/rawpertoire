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
 * @version 1.0.0
 */
const Header = (): JSX.Element => {
  return (
    <header className="w-full sm:w-1/2 lg:w-3/4 xl:w-1/2">
      <h1 className="text-primary text-4xl font-bold">RAWpertoire</h1>
      <div className="text-right">
        <p className="text-base font-medium">by: Ralph Alex Woiwode</p>
        <p className="text-primary/90">Front End Engineer</p>
      </div>
    </header>
  );
};

export default Header;

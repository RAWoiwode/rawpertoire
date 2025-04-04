/**
 * The Header component renders the main title of the app.
 *
 * It is a simple responsive heading that displays the app name.
 *
 * ## Example:
 * ```tsx
 * import Header from "@/app/components/Header";
 *
 * const App = () => (
 *    <div>
 *      <Header />
 *    </div>
 * );
 *
 * export default App;
 * ```
 *
 * @component
 * @returns {JSX.Element} The header element displaying the app title
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

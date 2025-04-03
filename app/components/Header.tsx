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
 * @version 0.3.1
 */
const Header = (): JSX.Element => {
  return (
    <div className="lg:w-3/5 xl:w-2/5">
      <h1 className="text-text text-3xl font-bold">RAWpertoire</h1>
      <p className="text-right">by: Ralph Alex Woiwode</p>
    </div>
  );
};

export default Header;

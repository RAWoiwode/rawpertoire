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
 * @author Ralph Woiwode
 * @version 0.1.0
 * @returns {JSX.Element} The header element with the app title
 */
const Header = () => {
  return <h1 className="w-full px-4 py-6 text-center text-3xl">RAWpertoire</h1>;
};

export default Header;

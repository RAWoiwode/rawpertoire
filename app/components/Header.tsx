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
 * @version 0.2.1
 */
const Header = (): JSX.Element => {
  return (
    <h1 className="text-text-500 w-full px-4 py-6 text-center text-3xl font-bold">
      <span className="text-5xl">RAW</span>pertoire
    </h1>
  );
};

export default Header;

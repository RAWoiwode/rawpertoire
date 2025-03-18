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
 * @version 0.3.0
 */
const Header = (): JSX.Element => {
  return (
    <>
      <h1 className="text-text-500 w-full text-3xl font-bold uppercase">
        <span className="text-5xl">RAW</span>pertoire
      </h1>
      <p className="text-right">by: Ralph Alex Woiwode</p>
    </>
  );
};

export default Header;

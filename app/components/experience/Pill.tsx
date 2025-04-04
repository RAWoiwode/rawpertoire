/**
 * Props for the Pill component.
 * @interface PillProps
 * @property {string} item - The text or label to display inside the pill.
 */
interface PillProps {
  item: string;
}

/**
 * The Pill component renders a styled pill-like element with an row of informative dots.
 *
 * ## Example:
 * ```tsx
 * import Pill from "@/app/components/Pill";
 *
 * const App = () => (
 *   <div>
 *     <Pill item="React" dots={3} />
 *     <Pill item="JavaScript" dots={2} />
 *   </div>
 * );
 *
 * export default App;
 * ```
 *
 * @component
 * @param {PillProps} props
 * @returns {JSX.Element} A styled pill w/ dots below the text.
 *
 * @author Ralph Woiwode
 * @version 0.4.0
 */
const Pill = ({ item }: PillProps): JSX.Element => {
  return (
    <div className="bg-secondary rounded-full px-3 py-0.5">
      <p className="tracking-widest">{item}</p>
    </div>
  );
};

export default Pill;

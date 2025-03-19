/**
 * Props for the Pill component.
 * @interface PillProps
 * @property {string} item - The text or label to display inside the pill.
 * @property {number} dots - The number of decorative dots to render below the text.
 */
interface PillProps {
  item: string;
  dots: number;
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
 * @version 0.2.2
 */
const Pill = ({ item, dots }: PillProps): JSX.Element => {
  return (
    <div className="bg-secondary-50 w-24 rounded-sm px-3 py-1">
      <div className="text-text-50 text-center">{item}</div>
      {dots > 0 && (
        <div className="mt-0.5 flex justify-center">
          {Array.from({ length: dots }, (_, index) => (
            <div
              key={index}
              className="bg-secondary-600 mx-0.5 h-1 w-1 rounded-full"
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Pill;

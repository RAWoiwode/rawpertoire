/**
 * Props for the Pill component.
 * @interface Props
 * @property {string} item - The text or label to display inside the pill.
 * @property {number} dots - The number of decorative dots to render below the text.
 */
interface Props {
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
 * @author Ralph Woiwode
 * @version 0.1.0
 * @returns {JSX.Element} A styled pill w/ dots below the text.
 */
const Pill = ({ item, dots }: Props): JSX.Element => {
  return (
    <div className="rounded-md bg-background-800/50 px-3 py-1">
      <div className="text-center">{item}</div>
      {dots > 0 && (
        <div className="mt-0.5 flex justify-center">
          {Array.from({ length: dots }, (_, index) => (
            <div
              key={index}
              className="mx-0.5 h-1 w-1 rounded-full bg-secondary-500"
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Pill;

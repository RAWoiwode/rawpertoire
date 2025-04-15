/**
 * Props for the Pill component.
 *
 * @interface PillProps
 * @property {string} item - The text label displayed inside the pill.
 */
interface PillProps {
  item: string;
}

/**
 * The Pill component renders a styled label element with rounded edges.
 *
 * ## Example:
 * ```tsx
 * import Pill from "@/app/components/Pill";
 *
 * const App = () => (
 *   <div>
 *     <Pill item="React" />
 *     <Pill item="JavaScript" />
 *   </div>
 * );
 * ```
 *
 * @component
 * @param {PillProps} props
 * @returns {JSX.Element} A styled pill containing a text label
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

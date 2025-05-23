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
 * @version 1.0.0
 */
const Pill = ({ item }: PillProps): JSX.Element => {
  return (
    <div role="listitem" className="bg-secondary rounded-full px-3 py-0.5">
      <span className="text-sm tracking-widest">{item}</span>
    </div>
  );
};

export default Pill;

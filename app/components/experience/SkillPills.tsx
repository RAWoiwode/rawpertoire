import Pill from "./Pill";

/**
 * Represents a skill associated with a job experience.
 * @interface Skill
 * @property {string} skill - The name of the skill.
 * @property {number} years - The number of years of experience with the skill.
 */
interface Skill {
  skill: string;
  years: number;
}

/**
 * Props for the SkillPills component.
 * @interface SkillPillsProps
 * @property {Skill[]} skills - An array of skills to render as pills.
 */
interface SkillPillsProps {
  skills: Skill[];
}

/**
 * The SkillPills component renders a list of `Pill` components,
 * where each pill represents a skill and its corresponding years of experience.
 *
 * ## Example:
 * ```tsx
 * import SkillPills from "@/app/components/SkillPills";
 *
 * const skills = [
 *   { skill: "React", years: 3 },
 *   { skill: "JavaScript", years: 4 },
 *   { skill: "CSS", years: 2 },
 * ];
 *
 * const App = () => (
 *   <div>
 *     <SkillPills skills={skills} />
 *   </div>
 * );
 *
 * export default App;
 * ```
 *
 * @component
 * @param {SkillPillsProps} props
 * @returns {JSX.Element[]} An array of `Pill` components for the provided skills.
 *
 * @author Ralph Woiwode
 * @version 0.1.0
 */
const SkillPills = ({ skills }: SkillPillsProps): JSX.Element[] => {
  return skills.map((skill) => (
    <Pill key={skill.skill} item={skill.skill} dots={skill.years} />
  ));
};

export default SkillPills;

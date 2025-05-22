import { Skill } from "@/app/types/skillTypes";
import Pill from "./Pill";

/**
 * Props for the JobCard component.
 *
 * @interface JobCardProps
 * @property {string} title - The job title and company name.
 * @property {string} date - The time period of employment.
 * @property {string} desc - Description of the role and responsibilities.
 * @property {Skill[]} skills - Relevant skills used in the job.
 */
interface JobCardProps {
  title: string;
  date: string;
  desc: string;
  skills: Skill[];
}

/**
 * The JobCard component displays a single job entry with role details and associated skills.
 *
 * ## Example:
 * ```tsx
 * import JobCard from "@/app/experience/components/JobCard";
 *
 * const job = {
 *   title: "Software Engineer",
 *   date: "Jan 2020 – Present",
 *   desc: "Built web apps with React and TypeScript.",
 *   skills: [{ name: "React", years: 3 }],
 * };
 *
 * const App = () => <JobCard {...job} />;
 * ```
 *
 * @component
 * @param {JobCardProps} props
 * @returns {JSX.Element} A job card displaying title, date, description, and skills
 *
 * @author Ralph Woiwode
 * @version 0.4.1
 */
const JobCard = ({ title, date, desc, skills }: JobCardProps): JSX.Element => {
  return (
    <section className="flex flex-col justify-center xl:flex-row xl:space-x-4">
      <div className="mb-4 rounded-sm">
        <h3 className="text-primary">{title}</h3>
        <h4 className="italic">{date}</h4>
        <p className="pt-4 tracking-wider whitespace-normal">{desc}</p>
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {skills.map((skill) => (
            <Pill key={skill.name} item={skill.name} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobCard;

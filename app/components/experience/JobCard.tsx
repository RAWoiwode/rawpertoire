import Pill from "./Pill";

/**
 * Represents a skill associated with a job experience.
 * @interface Skill
 * @property {string} name - The name of the skill.
 * @property {number} years - The number of years of experience with the skill.
 */
interface Skill {
  name: string;
  years: number;
}

/**
 * Props for the JobCard component.
 * @interface JobCardProps
 * @property {string} title - The job title and company.
 * @property {string} date - The employment period.
 * @property {string} desc - A brief description of the job responsibilities.
 * @property {Skill[]} skills - An array of skills associated with the job.
 */
interface JobCardProps {
  title: string;
  date: string;
  desc: string;
  skills: Skill[];
}

/**
 * The JobCard component displays details about a specific job, including
 * the title, date range, description, and associated skills.
 *
 * - Supports hover effects on desktop (`onMouseEnter`, `onMouseLeave`).
 * - Uses `SkillPills` to display associated skills.
 *
 * ## Example:
 * ```tsx
 * import JobCard from "@/app/experience/components/JobCard";
 *
 * const exampleJob = {
 *   title: "Software Engineer",
 *   date: "Jan 2020 - Present",
 *   desc: "Developed and maintained web applications using React and TypeScript.",
 *   skills: [
 *     { skill: "React", years: 3 },
 *     { skill: "TypeScript", years: 2 },
 *   ],
 * };
 *
 * const App = () => (
 *   <JobCard {...exampleJob} />
 * );
 *
 * export default App;
 * ```
 *
 * @component
 * @param {JobCardProps} props
 * @returns {JSX.Element} A job card displaying job details and skills.
 *
 * @author Ralph Woiwode
 * @version 0.4.0
 */
const JobCard = ({ title, date, desc, skills }: JobCardProps): JSX.Element => {
  return (
    <div className="flex flex-col justify-center xl:flex-row xl:space-x-4">
      <section className="mb-4 rounded-sm">
        <h3 className="text-primary">{title}</h3>
        <h4 className="italic">{date}</h4>
        <p
          className="pt-4 tracking-wider whitespace-normal"
          dangerouslySetInnerHTML={{ __html: desc }}
        />
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {skills.map((skill) => (
            <Pill key={skill.name} item={skill.name} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default JobCard;

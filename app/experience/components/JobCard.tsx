"use client";

import { useState } from "react";

import SkillPills from "./SkillPills";

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
 * Props for the JobCard component.
 * @interface Props
 * @property {string} title - The job title and company.
 * @property {string} date - The employment period.
 * @property {string} desc - A brief description of the job responsibilities.
 * @property {Skill[]} skills - An array of skills associated with the job.
 */
interface Props {
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
 * ## Notes:
 * TODO: Improve handling of mobile vs. desktop interactions.
 * TODO: Address visibility issues where the desktop skill div still renders on hover in mobile view.
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
 * @author Ralph Woiwode
 * @version 0.1.0
 * @returns {JSX.Element} A job card displaying job details and skills.
 */
const JobCard = ({ title, date, desc, skills }: Props): JSX.Element => {
  const [isVisible, setIsVisible] = useState(false); // Controls animation visibility

  const handleJobMouseEnter = () => {
    setIsVisible(true);
  };

  const handleJobMouseLeave = () => {
    setIsVisible(false); // Fade out
  };

  return (
    <div className="flex flex-col justify-center xl:flex-row xl:space-x-4">
      <section
        className="rounded-lg pb-4 transition-all xl:w-1/2 xl:shrink-0 xl:p-6 xl:px-4 xl:hover:translate-x-4 xl:hover:bg-background-800/50 xl:hover:shadow-lg"
        onMouseEnter={handleJobMouseEnter}
        onMouseLeave={handleJobMouseLeave}
      >
        <h3>{title}</h3>
        <h4>{date}</h4>
        <p
          className="whitespace-normal pt-2 text-justify"
          dangerouslySetInnerHTML={{ __html: desc }}
        />
      </section>
      {/* MOBILE */}
      <div className="flex flex-wrap gap-2 xl:hidden">
        <SkillPills skills={skills} />
      </div>
      {/* DESKTOP */}
      <div
        className={`hidden content-start gap-2 p-4 xl:flex xl:w-1/5 xl:flex-wrap xl:transition-all xl:duration-300 ${isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}
      >
        <SkillPills skills={skills} />
      </div>
    </div>
  );
};

export default JobCard;

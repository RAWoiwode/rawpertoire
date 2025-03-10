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
 * @version 0.2.2
 */
const JobCard = ({ title, date, desc, skills }: JobCardProps): JSX.Element => {
  const [isVisible, setIsVisible] = useState(false); // Controls animation visibility

  /**
   * Handles mouse enter event to show skills on desktop.
   */
  const handleJobMouseEnter = () => {
    setIsVisible(true);
  };

  /**
   * Handles mouse leave event to hide skills on desktop.
   */
  const handleJobMouseLeave = () => {
    setIsVisible(false);
  };

  return (
    <div className="flex flex-col justify-center xl:flex-row xl:space-x-4">
      <section
        className="lg:hover:bg-secondary-100/90 bg-secondary-50 text-text-50 xl:active:outline-accent-500 xl:hover:outline-accent-500 shadow-secondary-100 mb-4 rounded-sm p-6 outline-4 outline-transparent transition-all xl:mb-0 xl:w-1/2 xl:px-4 xl:hover:shadow-lg"
        onMouseEnter={handleJobMouseEnter}
        onMouseLeave={handleJobMouseLeave}
      >
        <h3 className="text-pretty">{title}</h3>
        <h4 className="uppercase italic">{date}</h4>
        <p
          className="pt-4 text-justify whitespace-normal"
          dangerouslySetInnerHTML={{ __html: desc }}
        />
      </section>
      {/* MOBILE */}
      <div className="flex flex-wrap justify-center gap-2 xl:hidden">
        <SkillPills skills={skills} />
      </div>
      {/* DESKTOP */}
      <div
        className={`bg-secondary-100/80 outline-accent-500 shadow-secondary-100 hidden items-center gap-2 rounded-sm p-4 shadow-lg outline-4 transition-all xl:grid xl:h-fit xl:auto-rows-max xl:grid-cols-2 xl:self-center ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"}`}
      >
        <SkillPills skills={skills} />
      </div>
    </div>
  );
};

export default JobCard;

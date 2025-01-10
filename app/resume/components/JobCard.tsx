"use client";

import { useRef, useState } from "react";
import SkillPills from "./SkillPills";

interface Skill {
  skill: string;
  years: number;
}

interface Props {
  title: string;
  date: string;
  desc: string;
  skills: Skill[];
}

/**
 * Renders the JobCard for a specific Job
 *
 * TODO: Handle the mobile vs desktop better i.e. If I click on a JobCard in mobile view, the desktop div still 'renders'
 */
const JobCard = ({ title, date, desc, skills }: Props) => {
  const [isVisible, setIsVisible] = useState(false); // Controls animation visibility
  const [isRendered, setIsRendered] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleJobMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsRendered(true);
    setTimeout(() => setIsVisible(true), 100);
  };

  const handleJobMouseLeave = () => {
    setIsVisible(false); // Fade out
    timeoutRef.current = setTimeout(() => setIsRendered(false), 300); // unmounting
  };

  return (
    <div className="flex flex-col lg:flex-row lg:space-x-4">
      <section
        className="rounded-lg pb-4 transition-all lg:w-2/5 lg:p-6 lg:px-4 lg:hover:translate-x-4 lg:hover:bg-background-800/50 lg:hover:shadow-lg"
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
      {isRendered && (
        <div
          className={`hidden w-2/5 content-start gap-2 p-4 lg:flex lg:flex-wrap lg:transition-all lg:duration-300 ${isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}
        >
          <SkillPills skills={skills} />
        </div>
      )}
      <div className="flex flex-wrap gap-2 lg:hidden">
        <SkillPills skills={skills} />
      </div>
    </div>
  );
};

export default JobCard;

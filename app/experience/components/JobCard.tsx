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
    <div className="flex flex-col xl:flex-row xl:space-x-4">
      <section
        className="rounded-lg pb-4 transition-all xl:w-2/5 xl:shrink-0 xl:p-6 xl:px-4 xl:hover:translate-x-4 xl:hover:bg-background-800/50 xl:hover:shadow-lg"
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
      <div className="flex flex-wrap gap-2 xl:hidden">
        <SkillPills skills={skills} />
      </div>
      {isRendered && (
        <div
          className={`hidden content-start gap-2 p-4 xl:flex xl:w-3/5 xl:flex-wrap xl:transition-all xl:duration-300 ${isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}
        >
          <SkillPills skills={skills} />
        </div>
      )}
    </div>
  );
};

export default JobCard;

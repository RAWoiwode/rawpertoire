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
    <div className="flex space-x-4">
      <section
        className="rounded-lg p-6 transition-all hover:translate-x-4 hover:bg-background-800/50 hover:shadow-lg lg:w-2/5"
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
          className={`flex w-2/5 flex-wrap content-start gap-2 p-4 transition-all duration-300 ${isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}
        >
          <SkillPills skills={skills} />
        </div>
      )}
    </div>
  );
};

export default JobCard;

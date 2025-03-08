import JobCard from "./JobCard";

/**
 * Represents a skill associated with an experience item.
 * @interface Skill
 * @property {string} skill - The name of the skill.
 * @property {number} years - The number of years of experience with the skill.
 */
interface Skill {
  skill: string;
  years: number;
}

/**
 * Represents an individual work experience entry.
 * @interface Experience
 * @property {string} title - The job title and company.
 * @property {string} date - The date range of employment.
 * @property {string} desc - A description of responsibilities and achievements.
 * @property {Skill[]} skills - An array of skills relevant to the job.
 */
interface Experience {
  title: string;
  date: string;
  desc: string;
  skills: Skill[];
}

/**
 * Fetches work experience data asynchronously.
 *
 * This function simulates an API call using `setTimeout` to return
 * an array of experience objects.
 *
 * @async
 * @function
 * @returns {Promise<Experience[]>} A promise that resolves with an array of experience data.
 */
const fetchExperienceData = async (): Promise<Experience[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          title: "Software Developer, Front-end @ General Motors",
          date: "AUG 2019 - DEC 2020",
          desc: "I led the transition of a B2B eCommerce application from Java to React, introducing core React concepts like Reducer and Context to the team. I implemented a Linter for consistent code styling, conducted thorough code reviews, and utilized Jest for component testing. This rewrite boosted user engagement by approximately 30%.",
          skills: [
            { skill: "React", years: 3 },
            { skill: "JavaScript", years: 4 },
            { skill: "CSS", years: 2 },
            { skill: "HTML", years: 3 },
            { skill: "JSON", years: 2 },
          ],
        },
        {
          title: "Front-End Developer @ University of Texas at El Paso",
          date: "JUN 2016 - JUL 2019",
          desc: "In my first frontend-focused role, I developed web-based data integration projects for the &quot;Office of Research of Sponsored Projects&quot; (ORSP) using Agile methodologies. Notable contributions included creating apps that streamlined research funding processes, boosting funding applications and efficiency by ~50%. I also implemented Bootstrap for websites, managed a database, and used Jira for task tracking.",
          skills: [
            { skill: "PHP", years: 3 },
            { skill: "Bootstrap", years: 5 },
            { skill: "CSS", years: 2 },
            { skill: "HTML", years: 3 },
            { skill: "JavaScript", years: 4 },
            { skill: "AJAX", years: 2 },
          ],
        },
        {
          title: "Data Engineer @ General Motors",
          date: "JAN 2021 - APR 2023",
          desc: "I contributed to rewriting the &quot;Warranty Process Supplier Algorithm&quot; (WPSA) app during a migration from Hadoop/YARN to Kubernetes/ESS, optimizing its functionality. Using Kubernetes, Docker, and Spark, we automated supplier cost forecasting, improving efficiency by 30%. I also worked on query optimization, Spark configurations, and Autosys job fine-tuning.",
          skills: [
            { skill: "Docker", years: 2 },
            { skill: "Git", years: 3 },
            { skill: "Hadoop", years: 2 },
            { skill: "k8s", years: 2 },
            { skill: "SQL", years: 4 },
            { skill: "Spark", years: 2 },
            { skill: "Python", years: 3 },
          ],
        },
      ]);
    }, 500);
  });
};

/**
 * The ExperienceContent component fetches and displays job experience data.
 *
 * - Fetches experience data asynchronously using `fetchExperienceData`.
 *
 * @component
 * @async
 * @returns {Promise<JSX.Element>} A section containing job experience cards.
 *
 * @author Ralph Woiwode
 * @version 0.3.0
 */
const ExperienceContent = async (): Promise<JSX.Element> => {
  const experiences: Experience[] = await fetchExperienceData();

  return (
    <div className="space-y-12 xl:space-y-8">
      {experiences.map((experience) => (
        <JobCard
          key={experience.title}
          title={experience.title}
          date={experience.date}
          desc={experience.desc}
          skills={experience.skills}
        />
      ))}
    </div>
  );
};

export default ExperienceContent;

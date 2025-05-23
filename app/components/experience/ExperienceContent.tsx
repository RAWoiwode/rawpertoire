import { Skill } from "@/app/types/skillTypes";
import JobCard from "./JobCard";

/**
 * A single job entry containing position details and associated skills.
 *
 * @interface Experience
 * @property {string} title - The job title and company.
 * @property {string} date - The employment date range.
 * @property {string} desc - A short description of responsibilities or impact.
 * @property {Skill[]} skills - A list of skills used in the role.
 */
interface Experience {
  title: string;
  date: string;
  desc: string;
  skills: Skill[];
}

/**
 * Simulates fetching work experience data asynchronously.
 *
 * @async
 * @function
 * @returns {Promise<Experience[]>} A promise resolving to an array of experience data.
 */
const fetchExperienceData = async (): Promise<Experience[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          title: "Data Engineer @ General Motors",
          date: "2021 - 2023",
          desc: "I contributed to rewriting a cost forecasting app during a major platform migration, helping improve scalability, automate key workflows, and fine-tune system performance along the way.",
          skills: [
            { name: "Docker" },
            { name: "Git" },
            { name: "Hadoop" },
            { name: "Kubernetes" },
            { name: "SQL" },
            { name: "Spark" },
            { name: "Python" },
          ],
        },
        {
          title: "Software Developer, Front-end @ General Motors",
          date: "2019 - 2020",
          desc: "I led the shift to a modern frontend approach for a B2B eCommerce app, improving team practices and contributing to a redesign that boosted user engagement by 30%.",
          skills: [
            { name: "React" },
            { name: "JavaScript" },
            { name: "CSS" },
            { name: "HTML" },
            { name: "JSON" },
          ],
        },
        {
          title: "Front-End Developer @ University of Texas at El Paso",
          date: "2016 - 2019",
          desc: "This was my first real dive into frontend development—building internal tools that streamlined funding workflows, nearly doubled efficiency, and taught me how to blend design with function in a fast-moving team environment.",
          skills: [
            { name: "PHP" },
            { name: "Bootstrap" },
            { name: "CSS" },
            { name: "HTML" },
            { name: "JavaScript" },
            { name: "AJAX" },
          ],
        },
      ]);
    }, 500);
  });
};

/**
 * The ExperienceContent component fetches and displays job experience data.
 *
 * ## Example:
 * ```tsx
 * import ExperienceContent from "@/app/components/experience/ExperienceContent";
 *
 * const App = () => <ExperienceContent />;
 * ```
 *
 * @component
 * @async
 * @returns {Promise<JSX.Element>} A section containing job experience cards
 *
 * @author Ralph Woiwode
 * @version 1.0.0
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
      <div
        className="flex"
        role="region"
        aria-labelledby="current-tech-heading"
      >
        <div className="border-r-secondary mr-4 border-r-2 pr-4">
          <h3 id="current-tech-heading" className="text-primary uppercase">
            Current tech
          </h3>
        </div>
        <ul className="flex flex-wrap space-x-2.5">
          <li>React</li>
          <li>TailwindCSS</li>
          <li>NextJS</li>
          <li>ReactNative</li>
          <li>Elixir</li>
        </ul>
      </div>
      <div
        className="flex"
        role="region"
        aria-labelledby="current-misc-heading"
      >
        <div className="border-r-secondary mr-4 border-r-2 pr-4">
          <h3 id="current-misc-heading" className="text-primary uppercase">
            Misc
          </h3>
        </div>
        <ul className="flex flex-wrap space-x-2.5">
          <li>AWS Certified Cloud Practitioner</li>
          <li>M.S. Software Engineering</li>
        </ul>
      </div>
    </div>
  );
};

export default ExperienceContent;

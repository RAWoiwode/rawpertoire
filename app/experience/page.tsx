import MobileHeader from "../components/MobileHeader";
import JobCard from "./components/JobCard";

interface Skill {
  skill: string;
  years: number;
}

interface ExperienceItem {
  title: string;
  date: string;
  desc: string;
  skills: Skill[];
}

const fetchExperienceItems = async (): Promise<ExperienceItem[]> => {
  // Simulate fetching from an API/DB

  return [
    {
      title: "Software Developer, Front-end @ General Motors",
      date: "AUG 2019 - DEC 2020",
      desc: "I led the transition of a B2B eCommerce application from Java to React, introducing core React concepts like Reducer and Context to the team. I implemented a Linter for consistent code styling, conducted thorough code reviews, and utilized Jest for component testing. This rewrite boosted user engagement by approximately 30%.",
      skills: [
        { skill: "Bitbucket", years: 0 },
        { skill: "CSS", years: 2 },
        { skill: "HTML", years: 3 },
        { skill: "JavaScript", years: 4 },
        { skill: "JSON", years: 2 },
        { skill: "React", years: 3 },
        { skill: "Testing", years: 1 },
        { skill: "Agile methodologies", years: 2 },
        { skill: "Application architecture", years: 2 },
        { skill: "Code analysis", years: 2 },
        { skill: "Critical thinking", years: 5 },
        { skill: "Data integration", years: 2 },
        { skill: "Debugging", years: 2 },
        { skill: "Front-End Development", years: 6 },
        { skill: "Problem-solving", years: 5 },
        { skill: "Responsive Web Design", years: 3 },
        { skill: "Scrum", years: 3 },
        { skill: "SDLC", years: 1 },
        { skill: "TDD", years: 1 },
        { skill: "UI/UX design and development", years: 4 },
        { skill: "Web development", years: 5 },
      ],
    },
    {
      title: "Front-End Developer @ University of Texas at El Paso",
      date: "JUN 2016 - JUL 2019",
      desc: "In my first frontend-focused role, I developed web-based data integration projects for the &quot;Office of Research of Sponsored Projects&quot; (ORSP) using Agile methodologies. Notable contributions included creating apps that streamlined research funding processes, boosting funding applications and efficiency by ~50%. I also implemented Bootstrap for websites, managed a database, and used Jira for task tracking.",
      skills: [
        { skill: "Bitbucket", years: 0 },
        { skill: "Bootstrap", years: 0 },
        { skill: "CSS", years: 0 },
        { skill: "HTML", years: 0 },
        { skill: "JavaScript", years: 3 },
        { skill: "PHP", years: 0 },
        { skill: "AJAX", years: 0 },
        { skill: "Testing", years: 0 },
        { skill: "Agile methodologies", years: 0 },
        { skill: "Code analysis", years: 0 },
        { skill: "Critical thinking", years: 0 },
        { skill: "Data integration", years: 0 },
        { skill: "Debugging", years: 0 },
        { skill: "Front-End Development", years: 0 },
        { skill: "Problem-solving", years: 0 },
        { skill: "Responsive Web Design", years: 0 },
        { skill: "Scrum", years: 0 },
        { skill: "SDLC", years: 0 },
        { skill: "TDD", years: 0 },
        { skill: "UI/UX design and development", years: 0 },
        { skill: "Web development", years: 0 },
      ],
    },
    {
      title: "Data Engineer @ General Motors",
      date: "JAN 2021 - APR 2023",
      desc: "I contributed to rewriting the &quot;Warranty Process Supplier Algorithm&quot; (WPSA) app during a migration from Hadoop/YARN to Kubernetes/ESS, optimizing its functionality. Using Kubernetes, Docker, and Spark, we automated supplier cost forecasting, improving efficiency by 30%. I also worked on query optimization, Spark configurations, and Autosys job fine-tuning.",
      skills: [
        { skill: "Docker", years: 0 },
        { skill: "Git", years: 0 },
        { skill: "GitHub", years: 0 },
        { skill: "Hadoop", years: 0 },
        { skill: "k8s", years: 0 },
        { skill: "Python", years: 0 },
        { skill: "SQL", years: 0 },
        { skill: "Spark", years: 0 },
        { skill: "Testing", years: 0 },
        { skill: "Agile methodologies", years: 0 },
        { skill: "Application architecture", years: 0 },
        { skill: "Code analysis", years: 0 },
        { skill: "Critical thinking", years: 0 },
        { skill: "Data integration", years: 0 },
        { skill: "Database management", years: 0 },
        { skill: "Debugging", years: 0 },
        { skill: "Problem-solving", years: 0 },
        { skill: "Scrum", years: 0 },
        { skill: "SDLC", years: 0 },
      ],
    },
  ];
};

/**
 * TODO: Separate data, logic, and ui
 * TODO: Extract dupe interfaces
 */
const Experience = async () => {
  const experienceItems = await fetchExperienceItems();

  return (
    <div className="p-4">
      <MobileHeader>Experience</MobileHeader>
      <div className="space-y-8 p-4 lg:mx-auto">
        {experienceItems.map((item) => (
          <JobCard
            key={item.title}
            title={item.title}
            date={item.date}
            desc={item.desc}
            skills={item.skills}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;

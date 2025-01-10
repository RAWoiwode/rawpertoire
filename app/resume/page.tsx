import MobileHeader from "../components/MobileHeader";
import JobCard from "./components/JobCard";

interface Skill {
  skill: string;
  years: number;
}

interface ResumeItem {
  title: string;
  date: string;
  desc: string;
  skills: Skill[];
}

const fetchResumeItems = async (): Promise<ResumeItem[]> => {
  // Simulate fetching from an API/DB

  return [
    {
      title: "Software Developer, Front-end @ General Motors",
      date: "AUG 2019 - DEC 2020",
      desc: "My primary project on this team was to rewrite the UI of eCommerce&apos;s teams B2B application, transitioning from Java to React. All of us on the team were new to React so it was an exciting venture.<br /> We conducted in-depth code reviews to identify programming errors, and bugs. I integrated a Linter into the project to help maintain consistent code styling. I also lead the integrating of many core React concepts (Reducer & Context) and showed the team how to use them. We also conducted unit testing of Components using Jest.<br /> Overall, this rewrite resulted in a roughly 30% increase in user involvement.",
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
      desc: "In my first role focusing primarily on frontend technologies, I applied Agile methodologies to develop dynamic web-based data integration projects for the Office of Research of Sponsored Projects (ORSP). Notable contributions included creating apps like Limited Submissions and the Proposal Improvement Program to streamline research funding processes and encourage professor participation, increasing funding applications and efficiency by approximately 50%. Additionally, I implemented Bootstrap for departmental websites, managed a simple database, handled faculty-driven updates, and utilized Jira for task tracking in development projects.",
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
      desc: "My main project during this time was the &quot;Warranty Process Supplier Algorithm&quot; (WPSA) app. The entire Big Data team was migrating from Legacy Architecture (Hadoop/YARN) to a NextGen architecture (Kubernetes/ESS). I was part of the complete rewrite for WPSA which helped optimizing its functionality. We leveraged k8s, Docker, and Spark to automate supplier cost forecasting, resulting in a 30% increase in efficiency.<br />Other tasks included: Applying queries to work with new table definitions, fine tuning Spark onfigurations, fine tuning Autosys job configurations",
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
const Resume = async () => {
  const resumeItems = await fetchResumeItems();

  return (
    <div className="p-4">
      <MobileHeader>Resume</MobileHeader>
      <div className="space-y-8 p-4 lg:mx-auto">
        {resumeItems.map((item) => (
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

export default Resume;

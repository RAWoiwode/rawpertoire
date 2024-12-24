import Pill from "./Pill";

interface Props {
  skills: string[];
}

// const skillItems = [
//   "AWS Services",
//   "Bootstrap",
//   "CSS",
//   "Docker",
//   "Git",
//   "GitHub",
//   "Hadoop",
//   "HTML",
//   "JavaScript",
//   "JSON",
//   "k8s",
//   "Python",
//   "React",
//   "SQL",
//   "Spark",
//   "Testing",
//   "Agile methodologies",
//   "Application architecture",
//   "Code analysis",
//   "Critical thinking",
//   "Data integration",
//   "Database management",
//   "Debugging",
//   "Front-End Development",
//   "Problem-solving",
//   "Responsive Web Design",
//   "Scrum",
//   "SDLC",
//   "TDD",
//   "UI/UX design and development",
//   "Web development",
// ];

// TODO: Possibly make a 'Pills' comp that handles the alignment, data, and movement of the pills
const SkillPills = ({ skills }: Props) => {
  return skills.map((skill) => <Pill key={skill} item={skill} />);
};

export default SkillPills;

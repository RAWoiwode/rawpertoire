const skillItems = [
  "AWS Services",
  "Bootstrap",
  "CSS",
  "Docker",
  "Git",
  "GitHub",
  "Hadoop",
  "HTML",
  "JavaScript",
  "JSON",
  "k8s",
  "Python",
  "React",
  "SQL",
  "Spark",
  "Testing",
  "Agile methodologies",
  "Application architecture",
  "Code analysis",
  "Critical thinking",
  "Data integration",
  "Database management",
  "Debugging",
  "Front-End Development",
  "Problem-solving",
  "Responsive Web Design",
  "Scrum",
  "SDLC",
  "TDD",
  "UI/UX design and development",
  "Web development",
];

// TODO: Possibly make a 'Pills' comp that handles the alignment, data, and movement of the pills
const SkillPill = () => {
  return skillItems.map((item) => (
    <span key={item} className="rounded-full bg-secondary-600 px-4 py-2">
      {item}
    </span>
  ));
};

export default SkillPill;

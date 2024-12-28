import Pill from "./Pill";

interface Props {
  skills: string[];
}

const SkillPills = ({ skills }: Props) => {
  return skills.map((skill) => <Pill key={skill} item={skill} />);
};

export default SkillPills;

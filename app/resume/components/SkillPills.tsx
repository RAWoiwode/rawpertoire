import Pill from "./Pill";

interface Skill {
  skill: string;
  years: number;
}

interface Props {
  skills: Skill[];
}

const SkillPills = ({ skills }: Props) => {
  return skills.map((skill) => (
    <Pill key={skill.skill} item={skill.skill} dots={skill.years} />
  ));
};

export default SkillPills;

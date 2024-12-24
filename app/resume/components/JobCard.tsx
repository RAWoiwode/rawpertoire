interface Props {
  title: string;
  date: string;
  desc: string;
  skills: string[];
  onJobMouseEnter: (skills: string[]) => void;
  onJobMouseLeave: () => void;
}

const JobCard = ({
  title,
  date,
  desc,
  skills,
  onJobMouseEnter,
  onJobMouseLeave,
}: Props) => {
  const handleMouseEnter = () => {
    return onJobMouseEnter(skills);
  };

  const handleMouseLeave = () => {
    return onJobMouseLeave();
  };
  return (
    <section
      className="rounded-lg p-6 transition-all hover:translate-x-2 hover:bg-background-800/50 hover:shadow-lg"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h3>{title}</h3>
      <h4>{date}</h4>
      <p
        className="whitespace-normal pt-2 text-justify"
        dangerouslySetInnerHTML={{ __html: desc }}
      />
    </section>
  );
};

export default JobCard;

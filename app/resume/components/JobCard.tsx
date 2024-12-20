interface Props {
  title: string;
  date: string;
  desc: string;
}

const JobCard = ({ title, date, desc }: Props) => {
  return (
    <section className="rounded-lg p-6 transition-all hover:translate-x-2 hover:bg-background-800/50 hover:shadow-lg">
      <h3>{title}</h3>
      <h4>{date}</h4>
      <p
        className="whitespace-normal pt-2"
        dangerouslySetInnerHTML={{ __html: desc }}
      />
    </section>
  );
};

export default JobCard;

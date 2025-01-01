interface Props {
  item: string;
}

const Pill = ({ item }: Props) => {
  return (
    <span className="rounded-full bg-secondary-600 px-4 py-2">{item}</span>
  );
};

export default Pill;

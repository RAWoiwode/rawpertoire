interface Props {
  item: string;
  dots: number;
}

const Pill = ({ item, dots }: Props) => {
  return (
    <div className="rounded-md bg-background-800/50 px-3 py-1">
      <div className="text-center">{item}</div>
      {dots > 0 && (
        <div className="mt-0.5 flex justify-center">
          {Array.from({ length: dots }, (_, index) => (
            <div
              key={index}
              className="mx-0.5 h-1 w-1 rounded-full bg-secondary-500"
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Pill;

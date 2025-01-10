interface Props {
  children: React.ReactNode;
}
const MobileHeader = ({ children }: Props) => {
  return (
    <h2 className="text-center underline underline-offset-4 lg:hidden">
      {children}
    </h2>
  );
};

export default MobileHeader;

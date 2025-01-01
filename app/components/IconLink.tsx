import Link from "next/link";
import { IconContext } from "react-icons";

interface Props {
  link: string;
  title: string;
  children: React.ReactNode;
}

const IconLink = ({ link, title, children }: Props) => {
  return (
    <Link href={link} target="_blank" rel="noopener noreferrer" title={title}>
      <IconContext.Provider
        value={{
          className:
            "text-secondary-800/50 hover:text-secondary-600/75 transition-colors",
          size: "32",
        }}
      >
        {children}
      </IconContext.Provider>
    </Link>
  );
};

export default IconLink;

import Link from "next/link";
import Image from "next/image";

import ProjectCard from "./ProjectCard";
import { IMAGE_DIRECTORY } from "@/app/constants";

interface Props {
  title: string;
  url: string;
  description: string;
  timeEstimate: number;
  image?: string;
}

const Project = ({ title, url, description, timeEstimate, image }: Props) => {
  let titleDisplay = <h4>{title}</h4>;

  if (url) {
    titleDisplay = (
      <Link
        href={url}
        className="text-accent-200 underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {title}
      </Link>
    );
  }

  return (
    <ProjectCard>
      <div className="flex justify-center">
        {image && (
          <Image
            alt={`${title} preview`}
            src={IMAGE_DIRECTORY + image}
            width={400}
            height={200}
            priority
          />
        )}
        <div className="flex flex-col justify-between p-4">
          {titleDisplay}
          <p>{description}</p>
          <p>{timeEstimate} hours</p>
        </div>
      </div>
    </ProjectCard>
  );
};

export default Project;

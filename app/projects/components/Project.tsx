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
        className="text-accent-200"
        target="_blank"
        rel="noopener noreferrer"
      >
        {title}
      </Link>
    );
  }

  return (
    <ProjectCard>
      <div className="flex flex-col items-center space-y-2 xl:flex-row xl:space-x-6">
        {image && (
          <Image
            alt={`${title} preview`}
            src={IMAGE_DIRECTORY + image}
            width={300}
            height={300}
            priority
            placeholder="blur"
            className="h-auto w-auto max-w-full object-cover xl:max-w-[25%]"
            blurDataURL="/images/blur.png"
          />
        )}
        <div className="flex flex-col justify-between p-4 text-center xl:text-left">
          {titleDisplay}
          <p>{description}</p>
          <p>{timeEstimate} hours</p>
        </div>
      </div>
    </ProjectCard>
  );
};

export default Project;

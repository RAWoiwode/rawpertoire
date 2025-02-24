import Image from "next/image";
import Link from "next/link";

import { IMAGE_DIRECTORY } from "@/app/constants";
import { ProjectProps } from "@/app/types/projectTypes";
import ProjectCard from "./ProjectCard";

/**
 * The Project component renders an individual project's details, including its title, description,
 * time estimate, and an optional image preview. The title becomes a clickable link if a `url` is provided.
 *
 * ## Example:
 * ```tsx
 * import Project from "@/app/projects/components/Project";
 *
 * const exampleProject = {
 *   title: "My Portfolio",
 *   url: "https://example.com",
 *   description: "A showcase of my work as a front-end developer.",
 *   timeEstimate: 30,
 *   image: "portfolio-preview.png",
 * };
 *
 * const App = () => (
 *   <div>
 *     <Project {...exampleProject} />
 *   </div>
 * );
 *
 * export default App;
 * ```
 *
 * TODO: Add blur around image border?
 *
 * @author Ralph Woiwode
 * @version 0.3.0
 * @returns {JSX.Element} A project card displaying project details, an optional image, and a clickable title (if a URL is provided).
 */
const Project = ({
  title,
  url,
  description,
  timeEstimate,
  image,
}: ProjectProps): JSX.Element => {
  let titleDisplay = <h4>{title}</h4>;

  if (url) {
    titleDisplay = (
      <Link
        href={url}
        className="text-primary-600"
        target="_blank"
        rel="noopener noreferrer"
      >
        {title}
      </Link>
    );
  }

  return (
    <ProjectCard>
      <div className="flex flex-col items-center space-y-2">
        {image && (
          <Image
            alt={`${title} preview`}
            src={IMAGE_DIRECTORY + image}
            width={300}
            height={300}
            priority
            placeholder="blur"
            className="h-auto w-auto max-w-full object-cover xl:max-w-[75%]"
            blurDataURL="/images/blur.png"
          />
        )}
        <div className="flex flex-col justify-between p-4 text-center xl:text-left">
          {titleDisplay}
          <div className="flex flex-row items-center justify-evenly">
            <hr className="text-accent-600 my-2 w-1/2 border-t-2" />
            <p className="text-accent-600 text-sm">{timeEstimate} hours</p>
          </div>
          <p>{description}</p>
        </div>
      </div>
    </ProjectCard>
  );
};

export default Project;

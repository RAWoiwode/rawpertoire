import Image from "next/image";
import Link from "next/link";

import { IMAGE_DIRECTORY } from "@/app/constants";
import { ProjectProps } from "@/app/types/projectTypes";
import ProjectCard from "./ProjectCard";
import { IconContext } from "react-icons";
import { GoRepo } from "react-icons/go";

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
 * TODO: Create a better template instead of using the 1px margin bottom thing for shifts b/w links and no links
 *
 * @author Ralph Woiwode
 * @version 0.3.2
 * @returns {JSX.Element} A project card displaying project details, an optional image, and a clickable title (if a URL is provided).
 */
const Project = ({
  title,
  url,
  description,
  timeEstimate,
  image,
  gitHubUrl,
}: ProjectProps): JSX.Element => {
  let titleDisplay = (
    <div className="relative mb-[1px]">
      <h3>{title}</h3>
    </div>
  );

  if (url) {
    titleDisplay = (
      <Link
        href={url}
        className="text-primary-600 before:bg-primary-600 relative text-lg transition-all duration-300 ease-out before:absolute before:inset-x-0 before:-bottom-0.5 before:h-[2px] before:w-0 before:transition-all before:duration-300 before:ease-out hover:before:w-full"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h3>{title}</h3>
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
            width={250}
            height={250}
            priority
            placeholder="blur"
            className="h-auto w-auto max-w-full object-cover"
            blurDataURL="/images/blur.png"
          />
        )}
        <div className="flex w-full flex-col p-4 text-center xl:text-left">
          {titleDisplay}
          <div className="flex flex-row items-center justify-evenly">
            <hr className="text-accent-600 my-4 w-1/2 border-t-2" />
            <p className="text-accent-600 text-xs">{timeEstimate} hours</p>
          </div>
          <p className="text-sm">{description}</p>
        </div>
      </div>
      <Link
        href={gitHubUrl}
        target="_blank"
        rel="noopener noreferrer"
        title={`${title} Repo`}
        className="self-end pt-2"
      >
        <IconContext.Provider
          value={{
            className:
              "text-secondary-600 hover:text-secondary-300 transition-colors",
            size: "32",
          }}
        >
          <GoRepo />
        </IconContext.Provider>
      </Link>
    </ProjectCard>
  );
};

export default Project;

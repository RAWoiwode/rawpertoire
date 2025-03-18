import Image from "next/image";
import Link from "next/link";
import { IconContext } from "react-icons";
import { GoRepo } from "react-icons/go";

import { IMAGE_DIRECTORY } from "@/app/constants";
import { Project } from "@/app/types/projectTypes";

/**
 * The ProjectCard component renders an individual project's details, including:
 * - Title (with optional clickable link)
 * - Description
 * - Estimated time to complete
 * - An optional image preview
 * - A GitHub repository link (if provided)
 *
 * ## Features:
 * - If `url` is provided, the title is wrapped in a hyperlink.
 * - Displays an image preview if `image` is available.
 * - Includes a GitHub repository icon linking to the project's repo.
 *
 * ## Example Usage:
 * ```tsx
 * import ProjectCard from "@/app/projects/components/ProjectCard";
 *
 * const exampleProject = {
 *   title: "My Portfolio",
 *   url: "https://example.com",
 *   description: "A showcase of my work as a front-end developer.",
 *   timeEstimate: 30,
 *   image: "portfolio-preview.png",
 *   gitHubUrl: "https://github.com/RAWoiwode/portfolio",
 * };
 *
 * const App = () => <ProjectCard {...exampleProject} />;
 *
 * export default App;
 * ```
 *
 * TODO: Add blur effect around image borders.
 * TODO: Improve layout to avoid using the `1px margin-bottom` trick for shifting elements.
 *
 * @component
 * @param {Project} props
 * @returns {JSX.Element} A project card displaying project details, an optional image, and a clickable title (if a URL is provided).
 *
 * @author Ralph Woiwode
 * @version 0.3.3
 */
const ProjectCard = ({
  title,
  url,
  description,
  timeEstimate,
  image,
  gitHubUrl,
}: Project): JSX.Element => {
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
    <div className="bg-secondary-100/75 text-secondary-600 shadow-secondary-100 shadow-project-card flex h-full flex-col justify-between p-6">
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
            <hr className="text-accent-300 my-4 w-1/2 border-t-2" />
            <p className="text-accent-300 text-sm">{timeEstimate} hours</p>
          </div>
          <p className="text-md">{description}</p>
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
              "text-secondary-400 hover:text-secondary-200 transition-colors",
            size: "32",
          }}
        >
          <GoRepo />
        </IconContext.Provider>
      </Link>
    </div>
  );
};

export default ProjectCard;

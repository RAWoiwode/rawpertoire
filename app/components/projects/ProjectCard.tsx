"use client";

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
 * @component
 * @param {Project} props
 * @returns {JSX.Element} A project card displaying project details, an optional image, and a clickable title (if a URL is provided).
 *
 * @author Ralph Woiwode
 * @version 0.5.0
 */
const ProjectCard = ({
  title,
  url,
  description,
  image,
  gitHubUrl,
}: Project): JSX.Element => {
  let titleDisplay = <h4>{title}</h4>;

  if (url) {
    titleDisplay = (
      <Link
        href={url}
        className="text-accent before:bg-accent relative flex transition-all duration-300 ease-out before:absolute before:inset-x-0 before:-bottom-0.5 before:h-[2px] before:w-0 before:transition-all before:duration-300 before:ease-out hover:before:w-full"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h4>{title}</h4>
      </Link>
    );
  }

  return (
    <div className="border-primary flex h-full flex-col border p-6">
      <div className="flex flex-col">
        <div className="flex w-full flex-col">
          <div className="flex justify-between">
            {titleDisplay}
            <Link
              href={gitHubUrl}
              target="_blank"
              rel="noopener noreferrer"
              title={`${title} Repo`}
              className="text-accent before:bg-accent relative flex items-center gap-2 text-sm transition-all duration-300 ease-out before:absolute before:inset-x-0 before:-bottom-0.5 before:h-[2px] before:w-0 before:transition-all before:duration-300 before:ease-out hover:before:w-full"
            >
              Repo
              <IconContext.Provider
                value={{
                  className: "text-accent",
                  size: "16",
                }}
              >
                <GoRepo />
              </IconContext.Provider>
            </Link>
          </div>
          <hr className="text-secondary mx-auto my-4 w-3/4 border-t-1" />
        </div>
        <div className="flex w-full">
          <div className="shrink-0">
            <Image
              alt={`${title} preview`}
              src={IMAGE_DIRECTORY + image}
              width={128}
              height={128}
              priority
              placeholder="blur"
              className="object-cover"
              blurDataURL="/images/blur.png"
            />
          </div>
          <div className="grow">
            <p className="px-4 text-sm">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

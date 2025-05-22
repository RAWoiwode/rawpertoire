"use client";

import Image from "next/image";
import { IconContext } from "react-icons";
import { GoRepo } from "react-icons/go";

import { IMAGE_DIRECTORY } from "@/app/constants";
import { Project } from "@/app/types/projectTypes";
import { ExternalLink } from "./ExternalLink";

/**
 * The ProjectCard component displays information about a single project.
 *
 * ## Example:
 * ```tsx
 * import ProjectCard from "@/app/projects/components/ProjectCard";
 *
 * const project = {
 *   title: "My Portfolio",
 *   url: "https://example.com",
 *   description: "A showcase of my work as a front-end developer.",
 *   image: "portfolio-preview.png",
 *   gitHubUrl: "https://github.com/RAWoiwode/portfolio",
 * };
 *
 * const App = () => <ProjectCard {...project} />;
 * ```
 *
 * @component
 * @param {Project} props
 * @returns {JSX.Element} A card displaying the project's title, description, image, and GitHub link
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
  return (
    <div
      className="border-primary flex h-full flex-col border p-6"
      role="group"
      aria-labelledby={`project-${title}`}
    >
      <div className="flex flex-col">
        <div className="flex w-full flex-col">
          <div className="flex justify-between">
            <h4 id={`project-${title}`}>
              {url ? (
                <ExternalLink href={url} title={title}>
                  {title}
                </ExternalLink>
              ) : (
                title
              )}
            </h4>
            <ExternalLink
              href={gitHubUrl}
              title={`${title} Repo`}
              direction="right"
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
            </ExternalLink>
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

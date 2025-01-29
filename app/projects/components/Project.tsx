import Image from "next/image";
import Link from "next/link";

import { IMAGE_DIRECTORY } from "@/app/constants";
import ProjectCard from "./ProjectCard";

/**
 * Props for the Project component.
 * @interface Props
 * @property {string} title - The title of the project.
 * @property {string} url - The URL of the project. If empty, the title will not be a link.
 * @property {string} description - A brief description of the project.
 * @property {number} timeEstimate - The estimated time spent (in hours) on the project.
 * @property {string} [image] - An optional filename for the project's preview image.
 */
interface Props {
  title: string;
  url: string;
  description: string;
  timeEstimate: number;
  image?: string;
}

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
 * @author Ralph Woiwode
 * @version 0.1.0
 * @returns {JSX.Element} A project card displaying project details, an optional image, and a clickable title (if a URL is provided).
 */
const Project = ({
  title,
  url,
  description,
  timeEstimate,
  image,
}: Props): JSX.Element => {
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

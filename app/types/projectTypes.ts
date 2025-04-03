/**
 * Props for the Project component.
 * @interface Project
 * @property {string} title - The title of the project.
 * @property {string} url - The URL of the project. If empty, the title will not be a link.
 * @property {string} description - A brief description of the project.
 * @property {string} image - Filename for the project's Identicon image.
 * @property {string} gitHubUrl - Filename for the project's Identicon image.
 */
export interface Project {
  title: string;
  url: string;
  description: string;
  image: string;
  gitHubUrl: string;
}

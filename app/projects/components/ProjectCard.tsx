interface Props {
  children: React.ReactNode;
}

/**
 * Component that creates a simple card around a Project.
 *
 * TODO: Look into making a custion 'shadow' TailwindCSS class
 *
 * @param children
 * @returns
 */
const ProjectCard = ({ children }: Props) => {
  return (
    <div className="rounded-sm bg-background-800/50 p-6 shadow-lg">
      {children}
    </div>
  );
};

export default ProjectCard;

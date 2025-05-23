/**
 * The HomeContent component renders the introductory text on the homepage.
 *
 * ## Example:
 * ```tsx
 * import HomeContent from "@/app/components/home/HomeContent";
 *
 * export default function Section() {
 *   return <HomeContent />;
 * }
 * ```
 *
 * @component
 * @returns {JSX.Element} The introductory section content
 *
 * @author Ralph Woiwode
 * @version 1.0.0
 */
const HomeContent = (): JSX.Element => {
  return (
    <div className="space-y-6">
      <p className="text-base">
        I&apos;m a creative developer with six years of experience exploring how
        thoughtful interfaces can elevate digital experiences. I love the
        challenge of making things not just functional, but genuinely enjoyable
        to use.
      </p>
      <p className="text-base">
        While my path has taken a few turns, front-end development has always
        been the constant. It&apos;s the work I return to—through projects,
        collaboration, or simply experimenting to learn.
      </p>
      <p className="text-base">
        This portfolio ties these threads together—a space to share what
        I&apos;ve built, how I think, and how I&apos;m growing as a developer
        and designer.
      </p>
      <p className="text-base">
        Outside of code, you can find me reading, cooking, golfing, saving
        Hyrule, or hanging out with my girlfriend and our two spoiled corgis.
      </p>
    </div>
  );
};

export default HomeContent;

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
 * @version 1.0.1
 */
const HomeContent = (): JSX.Element => {
  return (
    <div className="space-y-6">
      <p className="text-base">
        I&apos;m a skilled developer with six years of exploring how thoughtful
        interfaces can elevate digital experiences. I enjoy the challenge of
        building things that are both functional and genuinely satisfying for
        users.
      </p>
      <p className="text-base">
        Front-end development has always been at the core of my work. It&apos;s
        the area I keep coming back to—whether through projects, collaborations,
        or simply experimenting to learn and grow.
      </p>
      <p className="text-base">
        This portfolio brings together my projects, design approach, and ongoing
        growth as a developer — a place to share what I&apos;ve built and how I
        think.
      </p>
      <p className="text-base">
        Outside of code, you can find me reading, cooking, golfing, saving
        Hyrule, or hanging out with my girlfriend and our two spoiled corgis.
      </p>
    </div>
  );
};

export default HomeContent;

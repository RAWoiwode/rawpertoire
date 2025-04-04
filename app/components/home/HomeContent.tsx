/**
 * The HomeContent component displays the welcome data.
 *
 * @component
 * @returns {JSX.Element}
 *
 * @author Ralph Woiwode
 * @version 0.2.0
 */
const HomeContent = (): JSX.Element => {
  return (
    <div className="space-y-4">
      <p className="text-base">
        I&apos;m a creative developer with six years of experience exploring how
        thoughtful interfaces can elevate digital experiences. I love the
        challenge of making things not just functional, but genuinely enjoyable
        to use.
        <br />
        <br />
        While my path has taken a few turns, front-end development has always
        been the constant. It&apos;s the work I come back to—whether through
        projects, collaboration, or just experimenting to learn.
        <br />
        <br />
        This portfolio is my way of tying those threads together—a space to
        share what I&apos;ve built, how I think, and how I&apos;m continuing to
        grow as a developer and designer.
        <br />
        <br />
        Outside of code, you can find me reading, cooking, golfing, saving
        Hyrule or mining/crafting, or hanging out with my gf and our two spoiled
        corgis.
      </p>
    </div>
  );
};

export default HomeContent;

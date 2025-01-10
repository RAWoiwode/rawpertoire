import MobileHeader from "./components/MobileHeader";

const Home = () => {
  return (
    <div className="mx-auto content-center p-4 text-text-100">
      <MobileHeader>About</MobileHeader>
      <div className="space-y-4 p-4 text-justify text-base drop-shadow-lg lg:mx-auto lg:w-1/3">
        <p>
          Heyo, I&apos;m a creative developer with 6+ years of experience
          designing and developing web-based applications. I enjoy creating UIs
          that are pleasing both to the eye and user experience.
        </p>
        <p>
          I am not currently in my field of choice, but I do still work on
          front-end development when I can, whether it is tutorials/classes or
          working on small projects for friends.
        </p>
        <p>
          Doing this portfolio/repetoire rework is my way to test/display skills
          and knowledge I&apos;ve obtained over the years to hopefully create
          some small useful thing to leave a small mark on front-end development
          in someway.
        </p>
      </div>
    </div>
  );
};

export default Home;

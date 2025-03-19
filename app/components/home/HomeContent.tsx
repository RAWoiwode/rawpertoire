import React from "react";

import Header from "../Header";

/**
 * The HomeContent component displays the welcome data.
 *
 * @component
 * @returns {JSX.Element}
 *
 * @author Ralph Woiwode
 * @version 0.1.0
 */
const HomeContent = (): JSX.Element => {
  return (
    <>
      <div className="flex w-full justify-center">
        <Header />
      </div>
      <div className="mt-12 space-y-4">
        <p>
          I&apos;m a passionate developer with over 6 years of experience
          crafting engaging and intuitive web applications. I specialize in
          creating visually appealing and user-centric interfaces that elevate
          the digital experience.
        </p>
        <p>
          Although my career path has taken me in various directions, my
          enthusiasm for front-end development remains strong. I continually
          refine my skills through professional projects, hands-on tutorials,
          and collaborative endeavors.
        </p>
        <p>
          This portfolio is a testament to my expertise and ongoing commitment
          to innovation in front-end development. It showcases my ability to
          combine technical proficiency with creative design to build meaningful
          digital solutions.
        </p>
      </div>
    </>
  );
};

export default HomeContent;

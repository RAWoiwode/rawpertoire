const Home = () => {
  return (
    <main className="bg-slate-700 flex flex-col space-y-4">
      <div className="p-4 flex justify-center bg-yellow-200">
        <h1 className="text-2xl">RAWpertoire</h1>
      </div>
      <div className="p-4 outline outline-white outline-4 mx-auto rounded-2xl border-slate-500 border-8 border-opacity-50 bg-white">
        <h2 className="p-4 font-bold text-2xl text-emerald-500 underline underline-offset-8">
          INTRO
        </h2>
        <p className="text-justify w-4/5 mx-auto">
          Heyo, I&apos;m a creative Software Developer/Engineer with 6+ years of
          experience designing, developing and testing web-based applications.
          <br />
          <br />
          I&apos;m doing this portfolio/repetoire rework to test/display my
          skills and hopefully leave my own mark on front-end development in
          someway
        </p>
      </div>
      <div className="p-4 outline outline-white outline-4 mx-auto rounded-2xl border-slate-500 border-8 border-opacity-50 bg-white w-11/12">
        <h2 className="p-4 font-bold text-2xl text-emerald-500 underline underline-offset-8">
          Summarized Career History
        </h2>
        <ul>
          <li className="mb-8">
            <section>
              <h3>General Motors</h3>
              <h4>Data Engineer | January 2021 - April 2023</h4>
              <h5>Austin, TX</h5>
              <p>
                My main project during this time was the{" "}
                <b>Warranty Process Supplier Algorithm (WPSA)</b> app.
                <br />
                The entire Big Data team was migrating from Legacy architecture
                (Hadoop/YARN) to a NextGen architecture(Kubernetes/ESS). I was
                part of the complete rewrite for WPSA which helped optimizing
                its functionality. We leveraged k8s, Docker, and Spark to
                automate supplier cost forecasting, resulting in a 30% increase
                in efficiency.
                <br />
                Other tasks included:
                <ul className="list-disc list-inside">
                  <li>Applying queries to work with new table definitions</li>
                  <li>Fine tuning Spark configurations</li>
                  <li>Fine tuning Autosys job configurations</li>
                </ul>
              </p>
              <hr className="m-8" />
              <h4>
                Software Developer, Front-end | August 2019 - December 2020
              </h4>
              <h5>Austin, TX</h5>
              <p>
                My primary project on this team was to rewrite the UI of
                eCommerce&apos;s teams B2B application, transitioning from Java
                to React. All of us on the team were new to React so it was
                anexciting venture.
                <br />
                We conducted in-depth code reviews to identify programming
                errors, and bugs. I integrated a Linter into the project to help
                maintain consistent code styling. I also lead the adding of many
                core React concepts (Reducer & Context) and showed the team how
                to use them. We also conducted unit testing of Components using
                Jest.
                <br />
                Overall, this rewrite resulted in a roughly 30% increase in user
                involvement.
              </p>
            </section>
          </li>
          <li>
            <section>
              <h3>University of Texas at El Paso</h3>
              <h4>Front-End Developer | June 2016 - July 2019</h4>
              <h5>El Paso, TX</h5>
              <p>TODO: Fill in</p>
            </section>
          </li>
        </ul>
      </div>
      <div className="p-4 flex flex-col items-center bg-purple-200">
        <h2 className="bg-indigo-300">Current work</h2>
        <ul>
          <li>This Site</li>
          <li>Wedding Site</li>
          <li>Appointment App (WIP)</li>
        </ul>
      </div>
      <div className="p-4 flex flex-col items-center bg-neutral-200-200">
        <h2 className="bg-indigo-300">Skills Breakdown</h2>
        <h4>List all relevant hard/soft skills</h4>
      </div>
    </main>
  );
};

export default Home;

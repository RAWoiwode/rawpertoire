import Link from "next/link";

const Home = () => {
  return (
    <main className="flex flex-col space-y-4 bg-slate-700 py-12">
      <div className="flex justify-center bg-yellow-200 p-4">
        <h1 className="text-2xl">RAWpertoire</h1>
      </div>
      <div className="mx-auto w-11/12 rounded-2xl border-8 border-slate-500 border-opacity-50 bg-amber-100 p-4 outline outline-4 outline-white">
        <h2 className="px-4 pt-4 text-2xl font-bold text-emerald-500 underline underline-offset-8">
          INTRO
        </h2>
        <p className="mx-auto p-4 text-justify font-medium drop-shadow-lg">
          Heyo, I&apos;m a creative Software Developer/Engineer with 6+ years of
          experience designing, developing and testing web-based applications.
          <br />
          <br />
          I&apos;m doing this portfolio/repetoire rework to test/display my
          skills and hopefully leave my own small mark on front-end development
          in someway
        </p>
      </div>
      <div className="mx-auto w-11/12 rounded-2xl border-8 border-emerald-950 border-opacity-75 bg-slate-50 p-4 outline outline-4 outline-slate-500">
        <h2 className="px-4 pt-4 text-2xl font-bold text-red-800 underline underline-offset-8">
          Summarized Career History
        </h2>
        <ul className="list-inside py-4">
          <li className="mb-8 p-4">
            <section className="font-medium">
              <h3 className="text-xl">General Motors</h3>
              <div className="md:ml-4">
                <h4>Data Engineer | January 2021 - April 2023</h4>
                <h5>Austin, TX</h5>
                <p className="pt-2">
                  My main project during this time was the{" "}
                  <b>Warranty Process Supplier Algorithm (WPSA)</b> app.
                  <br />
                  The entire Big Data team was migrating from Legacy
                  architecture (Hadoop/YARN) to a NextGen
                  architecture(Kubernetes/ESS). I was part of the complete
                  rewrite for WPSA which helped optimizing its functionality. We
                  leveraged k8s, Docker, and Spark to automate supplier cost
                  forecasting, resulting in a 30% increase in efficiency.
                </p>
                <p>Other tasks included:</p>
                <ul className="list-inside list-disc">
                  <li>Applying queries to work with new table definitions</li>
                  <li>Fine tuning Spark configurations</li>
                  <li>Fine tuning Autosys job configurations</li>
                </ul>
                <h4 className="pt-4">
                  Software Developer, Front-end | August 2019 - December 2020
                </h4>
                <h5>Austin, TX</h5>
                <p className="pt-2">
                  My primary project on this team was to rewrite the UI of
                  eCommerce&apos;s teams B2B application, transitioning from
                  Java to React. All of us on the team were new to React so it
                  was anexciting venture.
                  <br />
                  We conducted in-depth code reviews to identify programming
                  errors, and bugs. I integrated a Linter into the project to
                  help maintain consistent code styling. I also lead the adding
                  of many core React concepts (Reducer & Context) and showed the
                  team how to use them. We also conducted unit testing of
                  Components using Jest.
                  <br />
                  Overall, this rewrite resulted in a roughly 30% increase in
                  user involvement.
                </p>
              </div>
            </section>
          </li>
          <hr className="m-8" />
          <li>
            <section>
              <h3>University of Texas at El Paso</h3>
              <div className="ml-4">
                <h4>Front-End Developer | June 2016 - July 2019</h4>
                <h5>El Paso, TX</h5>
                <p className="pt-2">
                  This was my first job at working with mainly fronend tech (and
                  some backend). I applied Agile methodologies to develop a
                  dynamic web-based data integration projects for the{" "}
                  <b>Office of Research of Sponsored Projects(ORSP)</b>. This
                  helped other apps that were dependent on the data
                  <br />
                  Such as the <em>Limited Submissions</em> app. I engineered
                  this to simplifying the application process for research
                  funding opportunities, allowing professors to apply for more
                  funding in a timely manner.
                  <br />
                  Another app I designed & developed was the{" "}
                  <em>Proposal Improvement Program</em>. This allowed Deans to
                  locate upcoming research funding opportunities and encourage
                  professors to apply and help with initial proposals.
                  <br />I applied{" "}
                  <Link href={"https://getbootstrap.com/"}>Bootstrap</Link> to
                  the apps summarized above as well as other department websites
                  following a new template. I maintained and modified department
                  websites based on faculty requests, and managed a simple
                  database for accurate queries. Later on in my time there I
                  employed Atlassian&apos;s Jira application for issue and task
                  tracking in development projects.
                  <br />
                  My work in ORSP helped increase funding applications and the
                  efficiency of getting said funding opportunities
                  granted(~50%).
                </p>
              </div>
            </section>
          </li>
        </ul>
      </div>
      <div className="mx-auto flex w-11/12">
        <div className="mx-auto basis-1/4 rounded-2xl border-8 border-slate-500 border-opacity-50 bg-white p-4 outline outline-4 outline-white">
          <h2 className="p-4 text-2xl font-bold text-emerald-500 underline underline-offset-8">
            Current Work
          </h2>
          <ul>
            <li>
              <Link href={"https://rawoiwode.com/"}>This</Link>
            </li>
            <li>
              <Link href={"https://betoycaty.mx/"}>Wedding Site</Link>
            </li>
            <li>Appointment App (WIP)</li>
          </ul>
        </div>
        <div className="mx-auto basis-1/2 rounded-2xl border-8 border-slate-500 border-opacity-50 bg-white p-4 outline outline-4 outline-white">
          <h2 className="p-4 text-2xl font-bold text-emerald-500 underline underline-offset-8">
            Skills Breakdown
          </h2>
          <h4>List all relevant hard/soft skills</h4>
        </div>
      </div>
    </main>
  );
};

export default Home;

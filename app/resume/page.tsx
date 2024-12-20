import JobCard from "./components/JobCard";

const resumeItems = [
  {
    title: "Data Engineer @ General Motors",
    date: "JAN 2021 - APR 2023",
    desc:
      "My main project during this time was the &quot;Warranty Process Supplier Algorithm&quot; (WPSA) app. <br /> " +
      "The entire Big Data team was migrating from Legacy Architecture (Hadoop/YARN) to a NextGen " +
      "architecture (Kubernetes/ESS). I was part of the complete rewrite for WPSA which helped optimizing its " +
      "functionality. We leveraged k8s, Docker, and Spark to automate supplier cost forecasting, resulting in a " +
      "30% increase in efficiency.<br /><br />Other tasks included: Applying queries to work with new table definitions, " +
      "Fine tuning Spark onfigurations, Fine tuning Autosys job configurations",
  },
  {
    title: "Software Developer, Front-end @ General Motors",
    date: "AUG 2019 - DEC 2020",
    desc: "My primary project on this team was to rewrite the UI of eCommerce&apos;s teams B2B application, transitioning from Java to React. All of us on the team were new to React so it was anexciting venture.<br /> We conducted in-depth code reviews to identify programming errors, and bugs. I integrated a Linter into the project to help maintain consistent code styling. I also lead the adding of many core React concepts (Reducer & Context) and showed the team how to use them. We also conducted unit testing of Components using Jest.<br /> Overall, this rewrite resulted in a roughly 30% increase in user involvement.",
  },
];

const Resume = () => {
  return (
    <div className="mx-auto w-2/5 p-4">
      {resumeItems.map((item) => (
        <JobCard
          key={item.title}
          title={item.title}
          date={item.date}
          desc={item.desc}
        />
      ))}
      {/* <li>
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
                Such as the <em>Limited Submissions</em> app. I engineered this
                to simplifying the application process for research funding
                opportunities, allowing professors to apply for more funding in
                a timely manner.
                <br />
                Another app I designed & developed was the{" "}
                <em>Proposal Improvement Program</em>. This allowed Deans to
                locate upcoming research funding opportunities and encourage
                professors to apply and help with initial proposals.
                <br />I applied{" "}
                <Link href={"https://getbootstrap.com/"}>Bootstrap</Link> to the
                apps summarized above as well as other department websites
                following a new template. I maintained and modified department
                websites based on faculty requests, and managed a simple
                database for accurate queries. Later on in my time there I
                employed Atlassian&apos;s Jira application for issue and task
                tracking in development projects.
                <br />
                My work in ORSP helped increase funding applications and the
                efficiency of getting said funding opportunities granted(~50%).
              </p>
            </div>
          </section> */}
    </div>
  );
};

export default Resume;

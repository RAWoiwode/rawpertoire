import JobCard from "./components/JobCard";

const resumeItems = [
  {
    title: "Software Developer, Front-end @ General Motors",
    date: "AUG 2019 - DEC 2020",
    desc: "My primary project on this team was to rewrite the UI of eCommerce&apos;s teams B2B application, transitioning from Java to React. All of us on the team were new to React so it was anexciting venture.<br /> We conducted in-depth code reviews to identify programming errors, and bugs. I integrated a Linter into the project to help maintain consistent code styling. I also lead the integrating of many core React concepts (Reducer & Context) and showed the team how to use them. We also conducted unit testing of Components using Jest.<br /> Overall, this rewrite resulted in a roughly 30% increase in user involvement.",
  },
  {
    title: "Front-End Developer @ University of Texas at El Paso",
    date: "JUN 2016 - JUL 2019",
    desc: "In my first role focusing primarily on frontend technologies, I applied Agile methodologies to develop dynamic web-based data integration projects for the Office of Research of Sponsored Projects (ORSP). Notable contributions included creating apps like Limited Submissions and the Proposal Improvement Program to streamline research funding processes and encourage professor participation, increasing funding applications and efficiency by approximately 50%. Additionally, I implemented Bootstrap for departmental websites, managed a simple database, handled faculty-driven updates, and utilized Jira for task tracking in development projects.",
  },
  {
    title: "Data Engineer @ General Motors",
    date: "JAN 2021 - APR 2023",
    desc: "My main project during this time was the &quot;Warranty Process Supplier Algorithm&quot; (WPSA) app. The entire Big Data team was migrating from Legacy Architecture (Hadoop/YARN) to a NextGen architecture (Kubernetes/ESS). I was part of the complete rewrite for WPSA which helped optimizing its functionality. We leveraged k8s, Docker, and Spark to automate supplier cost forecasting, resulting in a 30% increase in efficiency.<br />Other tasks included: Applying queries to work with new table definitions, fine tuning Spark onfigurations, fine tuning Autosys job configurations",
  },
];

const Resume = () => {
  return (
    <div className="mx-auto w-2/5 space-y-2 p-4">
      {resumeItems.map((item) => (
        <JobCard
          key={item.title}
          title={item.title}
          date={item.date}
          desc={item.desc}
        />
      ))}
    </div>
  );
};

export default Resume;

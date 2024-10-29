const Home = () => {
  return (
    <main className="bg-slate-700 flex flex-col space-y-4">
      <div className="p-4 flex justify-center bg-yellow-200">
        <h1 className="text-2xl">RAWpertoire</h1>
      </div>
      <div className="p-4 outline outline-white outline-4 mx-auto rounded-2xl border-slate-500 border-8 border-opacity-50">
        <h2 className="p-4 font-bold text-2xl text-emerald-500 underline underline-offset-8">
          INTRO
        </h2>
        <p className="text-justify w-4/5 mx-auto text-fuchsia-500">
          Heyo, I&apos;m a creative Software Developer/Engineer with 6+ years of
          experience designing, developing and testing web-based applications.
          <br />
          <br />
          I&apos;m doing this portfolio/repetoire rework to test/display my
          skills and hopefully leave my own mark on front-end development in
          someway
        </p>
      </div>
      <div className="p-4 flex flex-col items-center bg-green-200">
        <h2 className="bg-indigo-300">Summarized Career History</h2>
        <ul>
          <li>General Motors</li>
          <li>UTEP</li>
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

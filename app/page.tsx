const Home = () => {
  return (
    <main className="bg-slate-400">
      <div className="p-4 flex justify-center bg-yellow-200">
        <h1 className="text-2xl">RAWpertoire</h1>
      </div>
      <div className="p-4 flex flex-col items-center bg-orange-200">
        <h2 className="bg-indigo-300">INTRO</h2>
        <h3 className="bg-indigo-500">Beginning of my portfolio rework</h3>
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

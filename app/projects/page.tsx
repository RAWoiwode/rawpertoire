import Link from "next/link";

const Current = () => {
  return (
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
  );
};

export default Current;

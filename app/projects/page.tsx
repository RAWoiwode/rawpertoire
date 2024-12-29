import Link from "next/link";

const Projects = () => {
  return (
    <div className="mx-auto w-1/3 content-center">
      <div className="mx-auto p-4">
        <ul className="space-y-4">
          <li>
            <div className="bg-background-800 p-6">
              <Link
                href={"https://rawoiwode.com/"}
                className="text-accent-200 underline"
              >
                This
              </Link>
              <p>witty description</p>
              <p>rough time estimate</p>
            </div>
          </li>
          <li>
            <Link
              href={"https://betoycaty.mx/"}
              className="text-accent-200 underline"
            >
              Wedding Site
            </Link>
          </li>
          <li>Appointment App (WIP)</li>
        </ul>
      </div>
    </div>
  );
};

export default Projects;

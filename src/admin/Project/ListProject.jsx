import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { intance } from "../../api";

export default function ListProject({
  listProjects,
  handleDeleteProject,
  handleStartEditProject,
}) {
  const [skill, setSkill] = useState([]);
  useEffect(() => {
    intance.get("/skills").then((data) => setSkill(data));
  }, []);
  return (
    // <div className="grid min-h-fit grid-cols-3 gap-6 mt-10 text-center">

    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
       
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Project name
            </th>
            <th scope="col" className="px-6 py-3">
              Image
            </th>
            <th scope="col" className="px-6 py-3">
              Link git
            </th>
            <th scope="col" className="px-6 py-3">
              Skill
            </th>
            <th scope="col" className="px-6 py-3">
              Created At
            </th>
            <th scope="col" className="px-6 py-3">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {listProjects &&
            listProjects.map((project) => (
              <tr
                key={project.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {project.name}
                </th>
                <td className="px-6 py-4">
                  <img
                    className="w-28 object-cover min-h-[100px]"
                    src={project.image}
                    alt={project.name}
                  />
                </td>
                <td className="px-6 py-4">{project.url_git}</td>
                <td className="px-6 py-4">
                  {skill.map((item) => {
                    if (item.id == project.skillID) return item.name;
                  })}
                </td>
                <td className="px-6 py-4">{project.created_at}</td>
                <td className="px-6 py-4 text-right">
                  <Link
                  to={`/admin/${project.id}/dashboard`}
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline mr-2"
                    onClick={() => {
                      handleStartEditProject(project.id);
                    }}
                  >
                    Edit
                  </Link>
                  <button
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    onClick={() => {
                      handleDeleteProject(project.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
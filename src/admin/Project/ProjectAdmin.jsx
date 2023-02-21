import React, { Fragment, useEffect, useState } from "react";
import { intance } from "../../api";
import AddProject from "./AddProject";
import ListProject from "./ListProject";

export default function ProjectAdmin() {
  const [listProject, setListProject] = useState([]);
  const [currentProject, setCurrentProject] = useState({});
  useEffect(() => {
    intance.get("/projects").then((data) => setListProject(data));
  }, []);
  const handleDeleteProject = (id) => {
    if (id) {
      intance.delete(`projects/${id}`);
      setListProject(listProject.filter((project) => project.id !== id));
    }
  };
  const handleStartEditProject = (id) => {
    // if (!id) {
    const projectEdit = listProject.find((project) => project.id == id);
    setCurrentProject(projectEdit);
    // }
  };
  return (
    <div className="">
      <AddProject currentProject={currentProject} />
      <h3 className="p-10 text-center text-3xl">Project List</h3>
      <ListProject
        listProjects={listProject}
        handleDeleteProject={handleDeleteProject}
        handleStartEditProject={handleStartEditProject}
      />
    </div>
  );
}

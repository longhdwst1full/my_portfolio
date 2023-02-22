import { useEffect, useState } from "react";
import { redirect, useMatch, useParams   } from "react-router-dom";
import { intance } from "../../api";
const initialState = {
  id: "",
  name: "",
  image: "",
  description: "",
  skillID: "",
  url_onl: "",
  url_git: "",
  created_at: "",
};
export default function AddProject({ currentProject }) {
  // console.log(currentProject);
  // const history = useHistory();
  const [formData, setFormData] = useState(initialState);
  const [skillID, setSkillId] = useState([]);
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const { id } = useParams();
  console.log(id);
  // const handleFileInputChange = (event) => {
  // const file = event.target.files[0];
  // useEffect(() => {
  //   setFile(formData.image);
  //   setFormData((prev) => ({ ...prev, image: file }));
  //   const reader = new FileReader();
  //   reader.onload = () => {
  //     setPreviewUrl(reader.result);
  //   };
  //   reader.readAsDataURL(file);
  // },[formData.image]);

  const addMatch = useMatch("/admin/dashboard");
  const isAddModel = Boolean(addMatch);

  useEffect(() => {
    intance.get("skills").then((data) => setSkillId(data));
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name == "image") {
      setPreviewUrl(value);
    }
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (!isAddModel) {
      setFormData(currentProject);
      setPreviewUrl(currentProject.image)
    } else {
      setFormData(initialState);
    }
  }, [isAddModel, currentProject]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    if (isAddModel) {
      intance
        .post("/projects", formData)
        .then((response) => alert("Thêm thành công"))
        .catch((error) => console.log(error));
    }
    if (!isAddModel) {
      intance
        .put(`/projects/${id}`, formData)
        .then((response) => alert("Sửa thành công"))
        .catch((error) => console.log(error));
        
    }
    setFormData(initialState);
    // window.location.reload();
    history.push("/admin/dashboard");
  };
  const handleCanceEditingPost = () => {
    setFormData(initialState);
  };
  return (
    <div className="">
      <h1 className="text-lg text-center p-5">
        {isAddModel ? "Add  " : "Edit "} projects
      </h1>
      <form className="p-20 " onSubmit={handleSubmit}>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            id="floating_email"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Name Project
          </label>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              id="floating_password"
              name="image"
              value={formData.image}
              onChange={(e) => {
                setPreviewUrl(formData.image);
                handleInputChange(e);
              }}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="floating_password"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Ảnh
            </label>
          </div>
          {previewUrl && (
            <img className="w-[100px]" src={previewUrl} alt="Preview" />
          )}
        </div>

        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="url_onl"
              value={formData.url_onl}
              onChange={handleInputChange}
              id="floating_first_name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="floating_first_name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Url Online{" "}
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="url_git"
              value={formData.url_git}
              onChange={handleInputChange}
              id="floating_last_name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="floating_last_name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              URL git
            </label>
          </div>
        </div>
        <div className=" grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              id="floating_phone"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="floating_phone"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Description
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="datetime-local"
              name="created_at"
              value={formData.created_at}
              onChange={handleInputChange}
              id="floating_phone"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="floating_phone"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Created At
            </label>
          </div>
        </div>

        <label
          htmlFor="countries"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Chọn Skill
        </label>
        <select
          id="countries"
          value={formData.skillID}
          name="skillID"
          onChange={handleInputChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="">Choose a Skill</option>

          {skillID.map((skill) => {
            return (
              <option key={skill.id} {...(formData.skillID==skill.id ?? "checked")} value={skill.id}>
                {skill.name}
              </option>
            );
          })}
         
        </select>

        <button
          type="submit"
          className="mt-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          {isAddModel ? "Add" : "Update"}
        </button>
      </form>
    </div>
  );
}
